import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { addTodo,deleteTodo,editTodo,finishTodo } from './Redux/Slices/AuthSlice'
import HomePage from './Pages/HomePage'
const App = () => {
  //  const dispatch=useDispatch()
  //  const actions=bindActionCreators({addTodo,deleteTodo,editTodo,finishTodo},dispatch)
  //  console.log(actions);
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
