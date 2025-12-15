import { Link, useLocation, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate()
  const loginInfo = useSelector((state) => state.admin);
  const location = useLocation();
  const dispatch = useDispatch();


  const isActive = (path) => location.pathname === path;


  return (
    <div className="flex flex-col justify-between p-8 bg-white border-2 border-black text-black h-full rounded-lg">
      <div>
        <h1 className="text-3xl font-bold mb-2">Skill Hub</h1>
        <div className="h-0.5 w-full bg-black mb-6"></div>
        <div className="flex flex-col gap-2">
          {pages.map((page, index) => {
            if (page.path == "/dashboard" && !loginInfo.loggedIn) {
              return null;
            }


            return (
              <Link to={page.path} key={index}>
                <div
                  className={`px-4 py-3 flex items-center gap-3 rounded-lg border-2 transition-all duration-300 ${
                    isActive(page.path)
                      ? "bg-black text-white border-black font-semibold"
                      : "bg-white text-black border-black hover:bg-black hover:text-white"
                  }`}
                >
                  <page.icon size={20} strokeWidth={2} />
                  <span className="text-sm font-medium">{page.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        {loginInfo.loggedIn ? (
          <button
            onClick={() => {
              dispatch(login(false));
              setShowLoginForm(false);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 font-medium mb-4"
          >
            <LogOut size={18} strokeWidth={2} />
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {navigate("/"); setShowLoginForm(true)}}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 font-medium mb-4"
          >
            <LogIn size={18} strokeWidth={2} />
            Log In
          </button>
        )}
        <div className="h-0.5 w-full bg-black mb-4"></div>
        <p className="text-xs text-center text-gray-600 font-medium">v1.0 by Simplymalist</p>
      </div>
    </div>
  );
};


export default Navbar;
