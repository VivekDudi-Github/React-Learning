import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import { Outlet } from "react-router-dom";
import authService  from "./appwrite/auth";
import './App.css'
import {login , logout} from "./store/AuthSlice"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"


function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
     authService.getCurrentUser()
    .then((userData) => {
      if (userData){
        console.log("checked");
        dispatch(login({userData}))
      }else{
        dispatch(logout())
        console.log("not checked");
      }
    })
    .catch(() => {
      console.log("error in while Loading")
    })
    .finally(()=> setLoading (false))
    
  } , [])

  return ! loading ? (<div className="min-h-scr flex flex-wrap content-betweem bg-gray-600 " >
    <div className="w-full block">
      <Header/>
       <main>
       <Outlet/> 
       </main>
      <Footer/>
    </div>
  </div>) : null
}
export default App
