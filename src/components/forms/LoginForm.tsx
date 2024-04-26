
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { Rule } from 'antd/es/form';
import { loginUser } from '../../services/UserService';
import Cookies from 'js-cookie';
import { ReactElement } from 'react';




const LoginForm = (): ReactElement => {

    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [notificationApi, notificationAnchor] = notification.useNotification();

    const emailRules: Rule[] = [
        { required: true, message: "Please input your email!", type: "email" }
    ]
    const passwordRules: Rule[] = [
        { required: true, message: "Please input your password!" }
    ]

    const openNotification = (placement: NotificationPlacement) => {
        notificationApi.error({
            message: `WRONG CREDENTIAL`,
            description:
                'You have entered an invalid email or password',
            placement,
        });
    };

    const successLoginHandler = (response: any) => {
        Cookies.set("jwt-token", response.data.accessToken)
        navigate("/homepage")
    }

    const onSubmit = async () => {
        const { email, password } = form.getFieldsValue(["email", "password"])
        const response = await loginUser({ email, password })
        console.log(response)
        response.success === true ? successLoginHandler(response) : openNotification("top")
    }

    return (
        <div className="login-form-container">
            {notificationAnchor}
            <Form
                name="login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onSubmit}
                form={form}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={emailRules}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                
                <Form.Item
                    label="password"
                    name="password"
                    rules={passwordRules}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <div className="submit-registration">
                    <div className="login-button-style">
                        <Form.Item className="login-button-style">
                            <Button type="primary" htmlType="submit" className="color-button">
                                Sign In
                            </Button>
                        </Form.Item>
                    </div>
                    <div className="login-button-style">
                        <Form.Item>
                            <Button type="primary" onClick={() => navigate("/register")} className="secondary-color-button">
                                Sign up
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm
