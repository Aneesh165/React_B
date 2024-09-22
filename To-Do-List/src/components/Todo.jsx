import React from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function Todo() {

    const [todolist, settodolist] = useState(localStorage.getItem("todos") ? 
                                             JSON.parse(localStorage.getItem("todos")) : []);

    const input = useRef();

    // adding task
    const add = () =>{
        const inputText =input.current.value.trim();

        if(inputText ===""){
            return null;
        }

        const newtodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }

        settodolist((prev)=>[...prev, newtodo]);
        input.current.value="";
        
    }

    const toggle = (id) =>{
        settodolist((prvtodo)=>{
            return prvtodo.map((todo)=>{
                if(todo.id === id){
                    return{...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{localStorage.setItem("todos", JSON.stringify(todolist))
    },[todolist])


    // deleting task
    const deletion = (id) =>{
      settodolist((prevtodo)=>{
        return prevtodo.filter((todo)=> todo.id !== id)
      })
    }

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* icon & Heading */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* input Field */}
      <div className="flex my-7 items-center bg-gray-300 rounded-full">
        <input ref={input}
          className="bg-transparent flex-1 h-14 pl-6 boredr-0 outline-none placeholder:text-slate-600"
          type="text"
          placeholder="Enter The Task"
        />
        <button onClick={add} className="bg-orange-600 border-none rounded-full h-14 w-32 text-white text-lg font-medium ">
          ADD
        </button>
      </div>

      {/* To-Do Items */}
      <div>

        {todolist.map((item, index)=>{
                return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deletion={deletion} toggle={toggle} /> 
        })}
       
      </div>
    </div>
  );
}

export default Todo;
