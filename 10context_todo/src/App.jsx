import { useEffect, useState } from 'react'
import "./App.css";
import { ToDoProvider } from './context/ToDocontext'
import TodoForm from './componenets/TodoForm'
import TodoItem from './componenets/TodoItem'


function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now() , ...todo}, ...prev]  )
    console.log(todo)
    let npm = JSON.parse(localStorage.getItem("todos"))
    console.log(npm)
  }

  const updateTodo = (id , todo)=> {
    setTodos ( (prev)=> prev.map((prevTodo)=> prevTodo.id=== id ? todo : prevTodo)     
    )
  }

 const deleteTodo = (id )=> {
  setTodos ((prev) => prev.filter((todo) => todo.id !== id))
 }

 const toggleComplete = (id) => {
  setTodos( (prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed } : prevTodo ) 
) }

useEffect (()=> {
  const todos = JSON.parse(localStorage.getItem("todos"))
  if( Todos ){
    console.log(todos)
    setTodos (todos)
  }
} , []) 
 
useEffect (()=> {
    localStorage.setItem("todos" , JSON.stringify(Todos))
} , [Todos])



return (
    <ToDoProvider value={ {Todos , addTodo , updateTodo , deleteTodo , toggleComplete} } >
     <div className="bg-gradient-to-r from-blue-300 to-red-500 min-h-screen w-full py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Write Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       {Todos.map ((todo) => (
                        <div key={todo.id}
                        className='w-full'>
                          <TodoItem todo = {todo} />
                        </div>
                       ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App

 