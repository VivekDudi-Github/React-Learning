import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="bg-black w-full h-screen" styles={{backgroundColor: color}} >name</div> 
    <div className='fixed flex text-sky-400/50 justify-center bottom-5 inset-x-0  px-2 border-1 border-white
    
    '>Test</div>
    
    </>
  )
}
export default App

