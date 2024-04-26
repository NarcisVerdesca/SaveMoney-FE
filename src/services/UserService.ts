import axios from "axios"
import Cookies from "js-cookie"
import { RegisterUser } from "../interfaces/model/RegisterUser";
import { LoginUser } from "../interfaces/model/LoginUser";

const APP_CONTEXT_URI = "http://localhost:8080/save-money";
const VERSION_URI = APP_CONTEXT_URI + "/v1"

const AUTH_BASE_URI = VERSION_URI + "/auth";

const AUTH_LISTS_USER = AUTH_BASE_URI + "/users-list"
const REGISTER_USER_URI = AUTH_BASE_URI + "/user/register"
const REGISTER_ADMIN_URI = AUTH_BASE_URI + "/admin/register"
const LOGIN_USER_URI = AUTH_BASE_URI + "/login"
const AUTH_DETAIL_USER = AUTH_BASE_URI + "/user/detail"
const AUTH_UPDATE_USER_URI = AUTH_BASE_URI + "/update"

export const registerNewUser = async (newUser: RegisterUser) => {
    try {
        const response = await axios.post(REGISTER_USER_URI, newUser)
        return response.data;
    } catch (error) {
       return error
    }
}

export const loginUser = async (loginUserData: LoginUser) => {
    try {
        const response = await axios.post(LOGIN_USER_URI, loginUserData)
        return response.data;
    } catch (error: any) {
        return error.response.data
    }
}

export const getUserDetails = async (token: string) => {
    try {
        const response = await axios.get(AUTH_DETAIL_USER, {
            params: { token: token },
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.log("error")
    }
}
