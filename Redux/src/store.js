import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './components/Todo'

export const store = configureStore({
    reducer:{
        todolist:todoReducer
    }

})
