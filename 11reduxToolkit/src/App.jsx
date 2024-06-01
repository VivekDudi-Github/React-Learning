import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/FormTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default App
