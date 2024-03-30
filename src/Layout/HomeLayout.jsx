import {AiFillCloseCircle} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../Component/Footer';
import { logout } from '../Redux/Slices/AuthSlice';
// import { logout } from '../Redux/Slices/AuthSlice';
function HomeLayout({ children }) {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn)
    const role=useSelector((state)=>state?.auth?.role)


    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    async function handleLogout(e) {
        e.preventDefault();

        const res = await dispatch(logout());
        if(res?.payload?.success)
        navigate("/");
    }

    return (
        <div className="min-h-[90vh] text-black">
            <div className="absolute left-0 z-50 drawer w-fit">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="relative cursor-pointer">
                        <FiMenu 
                            onClick={changeWidth}
                            size={"32px"}
                            className="m-4 font-bold text-black"
                        />
                    </label>
                </div>
                <div className="w-0 drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay">
                    </label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
                        <li className="absolute z-50 w-fit right-2">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/">All courses</Link>
                        </li>
                         
                       {isLoggedIn && role=='ADMIN' &&(
                          <li>
                             <Link to={"/admin/dashboard"}>Admin DashBoard</Link>
                          </li>
                       )}
                         {isLoggedIn && role=='ADMIN' &&(
                          <li>
                             <Link to={"/admin/createCourse"}>Create Course</Link>
                          </li>
                       )}

                         {!isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="flex items-center justify-center w-full text-black">
                                    <button className='w-full px-4 py-1 font-semibold bg-green-700 rounded-md '>
                                        <Link to="/login" className='text-black'>Login</Link>
                                    </button>
                                    <button className='w-full px-4 py-1 font-semibold text-black bg-green-700 rounded-md'>
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        )} 

                        {isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="flex items-center justify-center w-full">
                                    <button className='w-full px-4 py-1 font-semibold text-black rounded-md hover:bg-green-700'>
                                        <Link to="/user/profile">Profile</Link>
                                    </button>
                                    <button className='w-full px-4 py-1 font-semibold text-black rounded-md hover:bg-green-700'>
                                        <Link onClick={handleLogout}>Logout</Link>
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            { children }

            <Footer />
        </div>
    );
}

export default HomeLayout;