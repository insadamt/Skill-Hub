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
import ThemeToggle from "./themeToggle";

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
    <div className="flex flex-row lg:flex-col justify-between items-center lg:items-stretch h-auto lg:h-full lg:min-h-[calc(100vh-1.5rem)] p-3 lg:p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 rounded-2xl shadow-sm dark:shadow-black/10 border border-neutral-200/40 dark:border-neutral-800/40 transition-colors duration-200">
      <div className="hidden lg:block w-full">
        <h1 className="text-4xl text-center font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-1">
          Skill Hub
        </h1>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-3" />
      </div>

      <nav className="flex flex-row lg:flex-col gap-4 lg:gap-4 flex-1 lg:mb-10 lg:flex-initial">
        {pages.map((page, index) => {
          if (page.path === "/dashboard" && !loginInfo.loggedIn) {
            return null;
          }

          return (
            <Link to={page.path} key={index}>
              <div
                className={
                  isActive(page.path)
                    ? "flex items-center justify-center lg:justify-start gap-0 lg:gap-3 p-2 lg:px-4 lg:py-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 font-gabarito font-semibold shadow-sm dark:shadow-black/20 transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-95"
                    : "flex items-center justify-center lg:justify-start gap-0 lg:gap-3 p-2 lg:px-4 lg:py-3 rounded-xl text-neutral-700 dark:text-neutral-300 font-gabarito font-medium hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50 hover:shadow-sm transition-all duration-200 active:scale-95"
                }
              >
                <page.icon className="w-5 h-5 lg:w-5 lg:h-5 shrink-0" />
                <span className="hidden lg:inline text-base whitespace-nowrap overflow-hidden">
                  {page.name}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-row lg:flex-col gap-2 lg:gap-3 lg:mt-0">
        <div className="flex flex-row-reverse gap-2 items-center w-full lg:flex-row">
          {loginInfo.loggedIn ? (
            <Link
              to={"/"}
              className="flex items-center justify-center gap-0 lg:gap-2 p-2 lg:px-4 lg:py-3 rounded-xl bg-red-50/50 dark:bg-red-950/30 text-red-700 dark:text-red-300 font-gabarito font-medium hover:bg-red-100/70 dark:hover:bg-red-900/40 hover:shadow-sm transition-all duration-200 border border-red-200/40 dark:border-red-900/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-red-600 flex-1"
              onClick={() => {
                dispatch(login(false));
                setShowLoginForm(false);
              }}
            >
              <LogOut className="w-5 h-5 lg:w-5 lg:h-5 shrink-0" />
              <span className="hidden lg:inline text-base whitespace-nowrap overflow-hidden">
                Log Out
              </span>
            </Link>
          ) : (
            <button
              className="flex items-center justify-center gap-0 lg:gap-2 p-2 lg:px-4 lg:py-3 rounded-xl bg-green-50/50 dark:bg-green-950/30 text-green-700 dark:text-green-300 font-gabarito font-medium hover:bg-green-100/70 dark:hover:bg-green-900/40 hover:shadow-sm transition-all duration-200 border border-green-200/40 dark:border-green-900/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-600 flex-1"
              onClick={() => setShowLoginForm(true)}
            >
              <LogIn className="w-5 h-5 lg:w-5 lg:h-5 shrink-0" />
              <span className="hidden lg:inline text-base whitespace-nowrap overflow-hidden">
                Log In
              </span>
            </button>
          )}
          <ThemeToggle />
        </div>

        <div className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

        <p className="hidden lg:block text-center text-xs font-gabarito font-medium text-neutral-500 dark:text-neutral-400">
          v1.0 by Simplymalist
        </p>
      </div>
    </div>
  );
};

export default Navbar;
