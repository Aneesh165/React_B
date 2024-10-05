// import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import { decrement, increment } from './components/CounterS'

// const App = () => {
//   const count = useSelector((state)=>state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <h2>{count}</h2>
//         <button onClick={()=>dispatch(increment())}>increment</button>
//         <button onClick={()=>dispatch(decrement())}>decrement</button>
//     </div>
//     </div>
//   )
// }

// export default App

// 

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Addtodo, Removetodo } from "./components/Todo";

// const App = () => {
//   const [data, setData] = useState("");
//   const dispatch = useDispatch();

//   const todoList = useSelector((state) => state.todolist.todo);

//   const handleSave = () => {
//       dispatch(Addtodo({ text: data })); 
//       setData(""); 
//   };

//   const handleRemove = (id) => {
//     dispatch(Removetodo(id)); 
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Text"
//           value={data}
//           onChange={(e) => setData(e.target.value)}
//         />
//         <button onClick={handleSave}>Save</button>
//       </div>
//       <div>
//         <ul>
          
//           {todoList.map((todo) => (
//             <li key={todo.id}>
//               {todo.text}{" "}
//               <button onClick={() => handleRemove(todo.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import Form from './components/Form'

const App = () => {
  return (
    <div className='flex mt-20  justify-center'>
      <Form/>
    </div>
  )
}

export default App
