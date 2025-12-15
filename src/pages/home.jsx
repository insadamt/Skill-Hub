import {
  Code2,
  Database,
  Palette,
  Laptop,
  Coffee,
  Briefcase,
  TrendingUp,
  Lightbulb,
  Cpu,
  Globe,
  Layers,
  Terminal,
  Zap,
  Package,
  Settings,
} from "lucide-react";
import { useSelector } from "react-redux";


import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";
import { useState } from "react";


const Home = ({showLoginForm, setShowLoginForm}) => {
  const loginInfo = useSelector((state) => state.admin);
  const navigate = useNavigate()


  


  function handleDashboard() {
    if (loginInfo.loggedIn) {
      setShowLoginForm(false)
      navigate("/dashboard")
    }
    else {
      setShowLoginForm(true)
    }
  }


  const floatingIcons = [
    { Icon: Code2, top: "10%", left: "15%", delay: 0, size: 40 },
    { Icon: Database, top: "20%", right: "12%", delay: 0.5, size: 35 },
    { Icon: Palette, top: "65%", left: "8%", delay: 1, size: 38 },
    { Icon: Laptop, top: "75%", right: "20%", delay: 1.5, size: 42 },
    { Icon: Coffee, top: "15%", left: "85%", delay: 2, size: 36 },
    { Icon: Briefcase, top: "82%", left: "25%", delay: 2.5, size: 40 },
    { Icon: TrendingUp, top: "12%", left: "45%", delay: 3, size: 35 },
    { Icon: Lightbulb, top: "70%", right: "8%", delay: 3.5, size: 38 },
    { Icon: Cpu, top: "25%", left: "22%", delay: 4, size: 36 },
    { Icon: Globe, top: "60%", left: "88%", delay: 4.5, size: 40 },
    { Icon: Layers, top: "35%", right: "18%", delay: 5, size: 34 },
    { Icon: Terminal, top: "85%", left: "78%", delay: 5.5, size: 38 },
    { Icon: Zap, top: "42%", left: "12%", delay: 6, size: 36 },
    { Icon: Package, top: "55%", right: "85%", delay: 6.5, size: 35 },
    { Icon: Settings, top: "28%", left: "72%", delay: 7, size: 37 },
  ];


  return (
    <div className="relative h-full flex justify-center items-center overflow-hidden from-gray-50 to-gray-100 px-4 md:px-8 lg:px-12">
      {floatingIcons.map((item, index) => {
        const IconComponent = item.Icon;
        return (
          <div
            key={index}
            className="absolute hidden md:block"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animation: `float 8s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <IconComponent
              size={item.size}
              strokeWidth={1}
              className="text-black opacity-10"
            />
          </div>
        );
      })}


      <div className="relative z-10 text-center max-w-full md:max-w-4xl lg:max-w-6xl mx-auto">
        <header>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight md:leading-normal">
            Skill Hub <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">Learn Anything</span>
          </h1>
        </header>
        <nav aria-label="Primary actions" className="flex flex-col sm:flex-row gap-3 md:gap-5 text-base md:text-lg justify-center">
          <Link
            to="/catalogue"
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 bg-black text-white rounded-lg font-medium hover:bg-white hover:text-black border-2 border-black transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Start Learning
          </Link>
          <button
            onClick={handleDashboard}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 bg-white text-black rounded-lg font-medium border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Dashboard
          </button>
        </nav>
      </div>


      {showLoginForm ? <LoginForm setShowLoginForm={setShowLoginForm}/> : null}


      <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-20px) rotate(5deg);
            }
            50% {
              transform: translateY(-10px) rotate(-5deg);
            }
            75% {
              transform: translateY(-15px) rotate(3deg);
            }
          }
        `}</style>
    </div>
  );
};


export default Home;
