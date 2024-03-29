import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slices/AuthSlice'

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    devTools: true
})
export default store;