import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Catalogue from './pages/catalogue';
import CourseAdd from './pages/courseAdd';
import CourseEdit from './pages/courseEdit';
import CoursePage from './pages/coursePage';
import Dashboard from './pages/dashboard';
import AboutUs from './pages/aboutUs';
import Navbar from './components/navbar';
import { useState } from 'react';



function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);



  return (
    <Router>
      <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-[auto_1fr] md:grid-rows-1 gap-1.5 p-2 md:gap-3 md:p-3 lg:gap-4 lg:p-4 h-screen bg-neutral-100 max-w-[1920px] mx-auto w-full">
        <aside className="col-span-12 lg:col-span-2 h-auto md:h-full sticky top-0 z-20 md:static" role="navigation">
          <Navbar 
            showLoginForm={showLoginForm} 
            setShowLoginForm={setShowLoginForm} 
          />
        </aside>
        <main className="col-span-12 lg:col-span-10 bg-white rounded-lg overflow-y-auto h-[calc(100vh-5rem)] md:h-full shadow-sm md:shadow-md p-4 md:p-6 lg:p-8" aria-label="Main content">
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
        </main>
        
      </div>
    </Router>
  );
}



export default App;
