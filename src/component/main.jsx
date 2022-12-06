import { collection, onSnapshot,query, updateDoc ,doc, deleteDoc} from "firebase/firestore";
import React,{useState,useEffect} from "react";
import Todo from "./Todo";
import {db,app} from "./firebase"
import { async } from "@firebase/util";
import Footer from "./footer";


function Main() {
  const [todos,setTodos] = useState([])
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db,"todos",id))
  }
  const clearCompleteTodo = async (todo) => {
   await deleteDoc(doc(db,"todos",todo.id),{
   completed: todo.completed
   })};
  const toggleComplete = async(todo) => {
  await updateDoc(doc(db,"todos",todo.id),{
    completed: !todo.completed
  })};
  useEffect(()=> {
    const q = query(collection(db,"todos"))
    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
  
    });
    setTodos(todosArr)
  })
  const getLocalTodos=()=>{
    //todos u boş string'e çevir
   if(localStorage.getItem(todos)!==null){
     localStorage.setItem("todos",JSON.stringify([]))
   //değilse localStorage'dan aldığı todos'ları  parse edererk Todos ları set eder.
   }else{
     setTodos (JSON.parse(localStorage.getItem("todos")));
   }
 }

  return () => unsubscribe()
  },[])
  return (
    <div className="main" >
      <input className="toggle-all" type="text" />
      <ul className="todo-list">
        {todos.map((todo,index)=>(<Todo toggleComplete={toggleComplete} deleteTodo={deleteTodo} key={index} todo={todo}></Todo>)
        )}
      </ul>
      <Footer setTodos={setTodos} todos={todos}></Footer>
    </div>
    
  )

}

export default Main;
