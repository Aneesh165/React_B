// import { createSlice, nanoid } from '@reduxjs/toolkit'


// const initialState={
//     todo:[]
// }

// const todoSlice = createSlice({
//     name:'todolist',
//     initialState,
//     reducers:{
//     Addtodo:(state,action)=>{
//         console.log(action);
//         state.todo.push(action.payload)
        
//     },
//     Removetodo:(state,action)=>{
//         console.log('TodoRemoved');
//         //delete thatspesific todo item using nanoid
        
//     }
//     }

// })

// export const { Addtodo,RemoverTodo} = todoSlice.actions

// export default todoSlice.reducer

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    Addtodo: (state, action) => {
      
      const newTodo = {
        id: nanoid(), 
        text: action.payload.text,
      };
      console.log(newTodo.id);
      state.todo.push(newTodo); 
    },
    Removetodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { Addtodo, Removetodo } = todoSlice.actions;

export default todoSlice.reducer;
