import React from "react";
import Todo from "./Todo";

const TodoList = ({todos,setTodos,filteredData}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                { filteredData.map((todo) => (
                    <Todo todo={todo} text={todo.text} todos={todos} setTodos={setTodos} />
                ))}                
            </ul>
        </div>
    );
}
export default TodoList;