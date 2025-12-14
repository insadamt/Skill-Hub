import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Catalogue from "./pages/catalogue";
import CourseAdd from "./pages/courseAdd";
import CourseEdit from "./pages/courseEdit";
import CoursePage from "./pages/coursePage";
import Dashboard from "./pages/dashboard";
import AboutUs from "./pages/aboutUs";

import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <Router>
      <div className="grid grid-cols-12 gap-3 p-3 h-screen bg-neutral-100">
        <div className="col-span-2 h-full">
          <Navbar
            showLoginForm={showLoginForm}
            setShowLoginForm={setShowLoginForm}
          />
        </div>
        <div className="col-span-10 bg-white rounded-lg overflow-y-auto h-full">
          <Routes>
            <Route
              path="/Skill-Hub"
              element={
                <Home
                  showLoginForm={showLoginForm}
                  setShowLoginForm={setShowLoginForm}
                />
              }
            />
            <Route path="/Skill-Hub/catalogue" element={<Catalogue />} />
            <Route path="/Skill-Hub/course/add" element={<CourseAdd />} />
            <Route path="/Skill-Hub/course/edit/:id" element={<CourseEdit />} />
            <Route path="/Skill-Hub/course/:id" element={<CoursePage />} />
            <Route path="/Skill-Hub/dashboard" element={<Dashboard />} />
            <Route path="/Skill-Hub/about" element={<AboutUs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
