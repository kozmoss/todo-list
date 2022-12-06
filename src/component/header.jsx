import { addDoc, collection} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "./firebase";

function Header() {
    const [input,setInput] = useState("")
    const createTodo = async (e) => {
        e.preventDefault(e)
        if(input === "" ){
            alert("please entar a valid todo")
            return
        }
        await addDoc(collection(db,"todos"),{
            text: input,
            completed:false,
            active: true
        })
        setInput("")
    };
    return (
        <header className="header">
            <h1>Todos</h1>
            <form onSubmit={createTodo} action="">
                <input value={input} onChange={(e)=> setInput(e.target.value) } placeholder="What needs to be done" className="new-todo" type="text" />
            </form>
        </header>
    )
}

export default Header;
