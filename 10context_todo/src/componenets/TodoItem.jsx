import React, { useState }  from "react";
import { useToDo } from "../context/ToDocontext";

function TodoItem({ todo }) {
    const [isTodoEditable, setisTodoEditable] = useState(false)
    const [todoMsg , setTodoMsg] = useState(todo.todo)
    const {updateTodo , deleteTodo , toggleComplete } = useToDo()

    const editTodo  = () => {
        updateTodo(todo.id , {...todo, todo: todoMsg})
        setisTodoEditable(false)
    }
    const toggleCompleted = ()=> {
        toggleComplete(todo.id)
        console.log(todo)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm 
            opacity-80 shadow-black/50 duration-300  text-black ${
                todo.completed ? "bg-[#8fcccb6a]" : "bg-[#a273c6]"
            }`}
        >

            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full font-bold text-[white] bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2 bg-[rgba(233,182,241,0.41)]" : "border-[#0000]  "
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
 {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-[rgba(210,192,192,0.63)] hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setisTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}>
            
                {isTodoEditable ? "📁" : "✏️"}
            </button>
 {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-[rgba(210,192,192,0.63)] hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;