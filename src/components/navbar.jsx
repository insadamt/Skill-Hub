import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpenText,
  AtSign,
  CircleEllipsis,
  LayoutDashboard,
  LogOut,
  LogIn,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/adminSlice";



const Navbar = ({ showLoginForm, setShowLoginForm }) => {
  const pages = [
    { path: "/", name: "Home", icon: Home },
    { path: "/catalogue", name: "Catalogue", icon: BookOpenText },
    { path: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
    { path: "/about", name: "About Us", icon: CircleEllipsis },
  ];



  const loginInfo = useSelector((state) => state.admin);
  const location = useLocation();
  const dispatch = useDispatch();



  const isActive = (path) => location.pathname === path;



  return (
    <div className="flex flex-row items-center md:flex-col justify-between p-3 md:p-4 lg:p-6 xl:p-10 backdrop-blur-md bg-gray-950/95 text-white h-auto md:h-full rounded-xl md:rounded-lg border border-gray-800 shadow-lg md:shadow-none">
      <div>
        <h1 className="text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold whitespace-nowrap">Skill Hub</h1>
        <hr className="hidden md:block w-full my-3 md:my-4 border-gray-700" />
      </div>
      
      <div className="flex-1 flex items-center overflow-hidden md:block">
        <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-3 md:gap-3 mt-0 md:mt-3 lg:mt-5 scrollbar-hide justify-center md:justify-start">
          {pages.map((page, index) => {
            if (page.path === "/dashboard" && !loginInfo.loggedIn) {
              return null;
            }



            return (
              <Link to={page.path} key={index} className="">
                <div
                  className={
                    isActive(page.path)
                      ? "bg-white p-2 md:p-2.5 lg:p-3 min-w-[2.75rem] min-h-[2.75rem] md:min-w-0 flex gap-1.5 md:gap-2 items-center justify-center text-black rounded-md transition-all duration-200"
                      : "bg-dark p-2 md:p-2.5 lg:p-3 min-w-[2.75rem] min-h-[2.75rem] md:min-w-0 flex gap-1.5 md:gap-2 items-center justify-center text-white rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-200"
                  }
                >
                  <page.icon className="w-5 h-5 md:w-5 md:h-5" />
                  <h1 className="hidden md:block">{page.name}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>


      <div className="md:hidden flex items-center ml-2">
        {loginInfo.loggedIn ? (
          <Link to={"/"} className="flex items-center text-red-400 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950 p-2" onClick={() => dispatch(login(false), setShowLoginForm(false))}>
            <LogOut className="w-5 h-5" />
          </Link>
        ) : (
          <button className="flex items-center text-green-400 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950 p-2" onClick={() => setShowLoginForm(true)}>
            <LogIn className="w-5 h-5" />
          </button>
        )}
      </div>
      
      <div className="hidden md:flex md:flex-col space-y-3 md:space-y-4">
        {loginInfo.loggedIn ? (
          <div>
            <Link to={"/"} className="flex gap-2 text-red-400 justify-center mb-4 hover:underline hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950" onClick={() => dispatch(login(false), setShowLoginForm(false))}>
            <LogOut className="w-5 h-5 md:w-5 md:h-5" />
              Log Out
            </Link>
          </div>
        ) : (
          <div className="flex justify-center">
            <button className="flex gap-2 text-green-400 mb-4 hover:underline hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950" onClick={() => setShowLoginForm(true)}>
            <LogIn className="w-5 h-5 md:w-5 md:h-5" />
              Log In
            </button>
          </div>
        )}
        <hr className="hidden md:block w-full border-gray-700" />
        <h1 className="text-center text-xs md:text-sm mt-2 md:mt-3">v1.0 by Simplymalist</h1>
      </div>
    </div>
  );
};



export default Navbar;
