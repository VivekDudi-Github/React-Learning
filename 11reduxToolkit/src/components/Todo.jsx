import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import {removeItem} from "../features/todo/Todoslice"

function Todo() {
    const statesTodos =  useSelector(state => state.todos)
    const dispatch = useDispatch ()
   return (
    <>
    {/* <div>Todos</div>
    {statesTodos.map((todo) => (
        <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeItem(todo.id))}
            >Update</button>
             <button onClick={() => dispatch(removeItem(todo.id))}
            >X</button>
        </li>  
    ))
} */}
      </>
  )
}
export default Todo