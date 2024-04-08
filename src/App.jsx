import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'
import CourseDescription from './Pages/Course/CourseDescription'
import Denied from './Pages/Denied'
import RequireAuth from './Auth/RequireAuth'
import CreateCourse from './Pages/Course/CreateCourse'
import UserProfile from './Pages/UserProfile'
import Check from './Pages/Payement/Check'
import DisplayLecture from './Pages/Dashboard/DisplayLecture'


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
        <Route path='/denied' element={<Denied/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/courses' element={<CourseList/>}></Route>
        <Route path='/viewprofile' element={<UserProfile/>}></Route>
        <Route path='/course/description' element={<CourseDescription/>}></Route>
        <Route  element={<RequireAuth allowedRoles={["ADMIN","USER"]}  />}>
           <Route path='/course/create' element={<CreateCourse/>}/>
           <Route path='/checkout' element={<Check/>}/>
           <Route path='/course/displaylecture' element={<DisplayLecture/>}/>
        </Route>
      
      </Routes>
    </div>
  )
}

export default App
