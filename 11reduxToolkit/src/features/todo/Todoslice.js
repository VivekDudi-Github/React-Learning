import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{  id:1, text:"first slice" }]
}

export const todoSlice = createSlice ({
    name : 'item' , 
    initialState , 
    reducers : {
        addItem: (state , action )=> {
            const item = {
                id: nanoid() , text: action.payload
        } 
        state.todos.push(item)
    } , 
        
        removeItem: (state , action)=> {
            
            state.todos = state.todos.filter( (todo) => {
              return  todo.id !== action.payload
            })
        } ,
        
        updateItem : (state , action) => {
            state.todos.forEach((item) => {if ( item.id == action.payload)
           { item.text = action.payload.text }
        })
        }
    }
})

export const {addItem , removeItem , updateItem} = todoSlice.actions

export default todoSlice.reducer  