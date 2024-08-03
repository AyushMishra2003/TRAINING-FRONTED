import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';
import CourseDescription from './Pages/Course/CourseDescription';
import Denied from './Pages/Denied';
import RequireAuth from './Auth/RequireAuth';
import CreateCourse from './Pages/Course/CreateCourse';
import UserProfile from './Pages/UserProfile';
import Check from './Pages/Payement/Check';
import DisplayLecture from './Pages/Dashboard/DisplayLecture';
import AddLecture from './Pages/Dashboard/AddLecture';
import DisplayDemoVideo from './Pages/Dashboard/DisplayDemoVideo';
import DeleteCourse from './Pages/Dashboard/DeleteCourse';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import ComingSoon from './Pages/ComingSoon';
import Product from './Pages/product/Product';
import Form from './Pages/ContactFarmng/Form';
import Opportunity from './Pages/Opportunity';
import CoursesList from './Pages/Course/CoursesList';
import CourseDetails from './Pages/Course/CourseDetails';
import ContactPage from './Pages/Contact';
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import CourseEnrollment from './Pages/Course/CourseEnrollement';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/denied' element={<Denied />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/courses' element={<CourseList />} />
        <Route path='/enroll' element={<CourseEnrollment/>} />
        <Route path='/course/coursesDescription' element={<CourseDetails />} />
        <Route path='/coursesList' element={<CoursesList />} />
        <Route path='/shop' element={<Product />} />
        <Route path='/contactFarming' element={<Form />} />
        <Route path='/viewprofile' element={<UserProfile />} />
        <Route path='/coming' element={<ComingSoon />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/opportunity' element={<Opportunity />} />
        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/course/create' element={<CreateCourse />} />
          <Route path='/checkout' element={<Check />} />
          <Route path='/course/displaylecture' element={<DisplayLecture />} />
          <Route path='/course/demoVideo' element={<DisplayDemoVideo />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path='/course/addLecture' element={<AddLecture />} />
          <Route path='/course/deleteCourse' element={<DeleteCourse />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Route>  
      </Routes>
    </div>
  );
};

export default App;
