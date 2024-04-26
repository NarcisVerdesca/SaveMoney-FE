import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { UserDetails } from '../../interfaces/model/UserDetails';
import { getUserDetails } from '../../services/UserService';

const Homepage = () => {

  const token = Cookies.get("jwt-token")
  const [userDetails, setUserDetails] = useState<UserDetails>()

  useEffect(() => {
    const fetchUserDetails = async () => {
        const response = await getUserDetails(token!)
        setUserDetails(response.data)
        console.log(userDetails)
    }
    fetchUserDetails()
}, [token])

  return (
    <div>
      <h1>Welcome to Homepage {userDetails?.firstName}</h1>
        What you want to do ! 
    </div>
  )
}

export default Homepage
