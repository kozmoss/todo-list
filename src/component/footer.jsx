import React from "react";
import { deleteDoc,doc } from "firebase/firestore";
import {db} from "./firebase"
function Footer({todos,todo,clearCompleted}) {

  return (
  
    <div className="footer">
    <span className="todo-count">
    <strong> {todos.length} İtem Left </strong>
    </span>

    <ul className="filters">
    <li><a href="#" className="selected">All</a></li>
    <li><a href="#">Active</a></li>
    <li><a href="#">Completed</a></li>
    </ul>
     <button className="clear-completed">Clear Completed</button>
      </div>
      
  )
}
export default Footer;
