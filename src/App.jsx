import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
