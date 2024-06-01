import React, {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {addItem  , updateItem ,  removeItem} from '../features/todo/Todoslice'


function AddTodo() {
const [isEditable , seteditable] = useState(false)

const [Input , setInput] = useState('')
const dispatch = useDispatch()

const update =(text)=> {
  setInput(text)
  seteditable(true)
}

const statesTodos =  useSelector(state => state.todos)

const addtodoHandler = (e) => {
  e.preventDefault()  ;
    dispatch(addItem( Input)) ;
     setInput("")
     seteditable(false)
}
  return (
<>
    <form onSubmit={addtodoHandler} className = "space-x-mt-12'" >
      <input 
      type= "text"
      className=''
      placeholder='Add Your Todo.. '
      value={Input}
      onChange={(e)=> setInput(e.target.value)}
      /> 
    <button type='submit' >
    {isEditable ? "Update" : "Add"}

      </button>
    </form>  


    <div>Todos</div>
    {statesTodos.map((todo) => (
        <li key={todo.id}>
            {todo.text}
            <button onClick={() => { 
              update(todo.text) 
            dispatch(removeItem(todo.id))}
            }
            >Update</button>
             <button onClick={() => dispatch(removeItem(todo.id))}
            >X</button>
        </li>  
    ))
}
  
  </>    
  )
}

export default AddTodo