import React ,{ useState } from 'react'
import './App.css'
import UserContextProvider from './components/context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profiile'



function App() {

  return (
    <UserContextProvider>   
      <div>Chai with react</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
