import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../Component/Footer';
import { logout } from '../Redux/Slices/AuthSlice';
import logo from '../assets/img/LogoFarming.jpeg';

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  async function handleLogout(e) {
    e.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) navigate('/');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-[90vh]">
      <header id="header" className="sticky top-0 z-50 p-4 bg-[#F0F4F9] text-black transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="text-lg font-semibold">SkillPathshala</span>
          </div>
          <nav className="hidden lg:flex space-x-6">
            <Link to="/" className="hover:text-yellow-500">Home</Link>
            <Link to="/coursesList" className="hover:text-yellow-500">Courses</Link>
            <Link to="/pages" className="hover:text-yellow-500">Pages</Link>
            <Link to="/blog" className="hover:text-yellow-500">Blog</Link>
            <Link to="/contact" className="hover:text-yellow-500">Contact Us</Link>
          </nav>
          <div className="hidden lg:flex space-x-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="hover:text-yellow-500">Sign In</Link>
                <Link to="/signup" className="hover:text-yellow-500">Sign Up</Link>
              </>
            ) : (
              <>
                <Link to="/viewprofile" className="hover:text-yellow-500">Profile</Link>
                <button onClick={handleLogout} className="hover:text-yellow-500">Logout</button>
              </>
            )}
          </div>
          <div className="lg:hidden">
            {isMenuOpen ? (
             ""
            ) : (
              <FiMenu size={32} className="cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </header>

      <div className={`fixed top-0 right-0 z-50 w-full h-full bg-[#1F2937] bg-opacity-75 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative w-3/4 h-full bg-white text-black absolute top-0 right-0 p-4">
          <AiFillCloseCircle size={32} className="cursor-pointer text-black absolute top-4 right-4" onClick={toggleMenu} />
          <ul className="menu mt-12">
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/coursesList" onClick={toggleMenu}>All courses</Link>
            </li>
            <li>
              <Link to="/contactFarming" onClick={toggleMenu}>Contract Farming</Link>
            </li>
            <li>
              <Link to="/shop" onClick={toggleMenu}>Shop</Link>
            </li>
            <li>
              <Link to="/opportunity" onClick={toggleMenu}>Opportunity</Link>
            </li>
            {isLoggedIn && role === 'ADMIN' && (
              <>
                <li>
                  <Link to="/admin/dashboard" onClick={toggleMenu}>Admin DashBoard</Link>
                </li>
                <li>
                  <Link to="/course/create" onClick={toggleMenu}>Create Course</Link>
                </li>
              </>
            )}
            {!isLoggedIn ? (
              <li className="absolute bottom-4 w-[90%]">
                <div className="flex items-center justify-center w-full text-black">
                  <button className="w-full px-4 py-1 font-semibold bg-green-700 rounded-md">
                    <Link to="/login" onClick={toggleMenu} className="text-black">Login</Link>
                  </button>
                  <button className="w-full px-4 py-1 font-semibold text-black bg-green-700 rounded-md">
                    <Link to="/signup" onClick={toggleMenu}>Signup</Link>
                  </button>
                </div>
              </li>
            ) : (
              <li className="absolute bottom-4 w-[90%]">
                <div className="flex items-center justify-center w-full">
                  <button className="w-full px-4 py-1 font-semibold text-black rounded-md hover:bg-green-700">
                    <Link to="/viewprofile" onClick={toggleMenu}>Profile</Link>
                  </button>
                  <button className="w-full px-2 font-semibold text-black rounded-md hover:bg-green-700" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
