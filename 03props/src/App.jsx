import { useState } from 'react'

import './App.css'
import Card from './components/Card.jsx' 

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:'name' ,
    age: 'num' , 
  }
  let nreArr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 mb-4 p-4 text-black rounded-xl">Tailwind Test</h1>
      <Card  username="code" btnText='visit ME' />
    </>
  )
}

export default App
