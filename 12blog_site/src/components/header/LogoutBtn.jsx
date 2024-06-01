import React from 'react'
import {useDispatch} from 'react-redux'
import authService from "../../appwrite/auth"
import {logout} from '../../store/AuthSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const navigate = useNavigate()
    const dispatch = useDispatch() 
    const logOutHandler = ()=> {
      authService.logout().then(() => {
          dispatch(logout())
        navigate("/login")
      })
  }
    
  return (
   
    <button onClick={logOutHandler}
    className='inline-block px-6 py-2 duration-200
     hover:bg-blue-100 rounded-full'>
            Logout
         </button>
) 
}
export default LogoutBtn
