import {useContext , createContext} from 'react'

const ToDocontext  = createContext({
    todos: [
        {
            id : 1 , 
            todo: "TOdo msg" ,
            completed: false 
        }
    ] , 
    addToDo : (todo) => {} ,
    updateTodo : (id , todo) => {} ,
    deleteTodo : (id ) => {} ,
    toggleComplete : (id , todo) => {} ,   
})

export default ToDocontext

export function  useToDo (){
    return (useContext(ToDocontext)
) }

export const ToDoProvider = ToDocontext.Provider

