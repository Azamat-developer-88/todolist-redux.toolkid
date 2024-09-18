import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./store";
export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})