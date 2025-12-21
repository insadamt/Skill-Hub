import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Catalogue from "./pages/catalogue";
import CourseAdd from "./pages/courseAdd";
import CourseEdit from "./pages/courseEdit";
import CoursePage from "./pages/coursePage";
import Dashboard from "./pages/dashboard";
import AboutUs from "./pages/aboutUs";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import LoginForm from "./components/loginForm";



function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <Router>
      <div className="">
        <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-3 p-3 pb-24 lg:pb-3 h-screen bg-neutral-50 dark:bg-neutral-950">
          <div className="fixed bottom-0 left-0 right-0 z-50 p-3 lg:static lg:col-span-2 lg:sticky lg:top-3 lg:h-[calc(100vh-1.5rem)] lg:p-0">
            <Navbar
              showLoginForm={showLoginForm}
              setShowLoginForm={setShowLoginForm}
            />
          </div>
          <div className="lg:col-span-10 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 rounded-2xl shadow-sm dark:shadow-black/20 overflow-y-auto h-full border border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-200">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    showLoginForm={showLoginForm}
                    setShowLoginForm={setShowLoginForm}
                  />
                }
              />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/course/add" element={<CourseAdd />} />
              <Route path="/course/edit/:id" element={<CourseEdit />} />
              <Route path="/course/:id" element={<CoursePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </div>
          {showLoginForm ? (
            <LoginForm
              showLoginForm={showLoginForm}
              setShowLoginForm={setShowLoginForm}
            />
          ) : null}
        </div>
      </div>
    </Router>
  );
}

export default App;
