import React from "react";

function Todo({todo,toggleComplete, deleteTodo}) {
    return (
        <li className={todo.completed ? 'completed':''}>
            <div className="view">
                <input onChange={() => toggleComplete(todo)} className="toggle" type="checkbox" checked={todo.completed ? "checked" : ""}/>
                <label onClick={() => toggleComplete(todo)} htmlFor="toggle-all"> {todo.text}
                <input className="toggle" type="checbox" />
                </label>
                <button onClick={() => deleteTodo(todo.id) } className="destroy"></button>
            </div>
        </li>

    )
}

export default Todo;
