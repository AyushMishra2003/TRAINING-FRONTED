import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import SignUp from './Pages/SignUp'


const App = () => {
  //  const dispatch=useDispatch()
  //  const actions=bindActionCreators({addTodo,deleteTodo,editTodo,finishTodo},dispatch)
  //  console.log(actions);
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  )
}

export default App
