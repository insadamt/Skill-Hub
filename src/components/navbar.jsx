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
    <div className="flex flex-col justify-between items-center p-10 bg-gray-950 text-white h-full rounded-lg">
      <div>
        <h1 className="text-4xl font-bold">Skill Hub</h1>
        <hr className="w-50" />
        <div className="flex flex-col gap-3 mt-5">
          {pages.map((page, index) => {
            if (page.path == "/dashboard" && !loginInfo.loggedIn) {
              return null;
            }

            return (
              <Link to={page.path} key={index}>
                <div
                  className={
                    isActive(page.path)
                      ? "bg-white p-2 flex gap-2 text-black rounded-md"
                      : "bg-dark p-2 flex gap-2 text-white rounded-md hover:bg-gray-800"
                  }
                >
                  <page.icon />
                  <h1 className="">{page.name}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        {loginInfo.loggedIn ? (
          <div>
            <Link to={"/"} className="flex gap-2 text-red-400 justify-center mb-4" onClick={() => dispatch(login(false), setShowLoginForm(false))}>
            <LogOut />
              Log Out
            </Link>
          </div>
        ) : (
          <div className="flex justify-center">
            <button className="flex gap-2 text-green-400 mb-4 " onClick={() => setShowLoginForm(true)}>
            <LogIn />
              Log In
            </button>
          </div>
        )}
        <hr />
        <h1 className="text-center">v1.0 by Simplymalist</h1>
      </div>
    </div>
  );
};

export default Navbar;
