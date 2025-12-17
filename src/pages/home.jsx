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
    <div className="relative w-full h-full bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {floatingIcons.map((item, index) => {
        const IconComponent = item.Icon;
        return (
          <div
            key={index}
            className="absolute hidden lg:block"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animation: `float 12s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <IconComponent
              size={item.size}
              strokeWidth={1}
              className="text-neutral-900 dark:text-neutral-50 opacity-5"
            />
          </div>
        );
      })}



      <div className="flex flex-col justify-center items-center h-full px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold font-gabarito text-neutral-900 dark:text-neutral-50 mb-4 lg:mb-6 leading-tight">
          Skill Hub
        </h1>
        <p className="text-4xl sm:text-5xl lg:text-8xl font-bold font-gabarito text-neutral-700 dark:text-neutral-300 mb-8 lg:mb-10 leading-tight">
          Learn Anything
        </p>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 text-base lg:text-lg w-full sm:w-auto">
          <Link
            to="/catalogue"
            className="px-8 text-center lg:px-10 py-3 lg:py-4 bg-gradient-to-br from-neutral-900 to-neutral-950 dark:from-neutral-100 dark:to-neutral-50 text-neutral-50 dark:text-neutral-900 rounded-xl font-gabarito font-semibold shadow-md dark:shadow-black/20 hover:shadow-lg hover:scale-105 transition-all duration-200 border border-neutral-900 dark:border-neutral-100"
          >
            Start Learning
          </Link>
          <button
            onClick={handleDashboard}
            className="px-8 lg:px-10 py-3 lg:py-4 bg-white/50 dark:bg-neutral-800/30 text-neutral-900 dark:text-neutral-50 rounded-xl font-gabarito font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50 hover:shadow-md hover:scale-105 transition-all duration-200"
          >
            Dashboard
          </button>
        </div>
      </div>



      



      <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-15px) rotate(2deg);
            }
            50% {
              transform: translateY(-8px) rotate(-2deg);
            }
            75% {
              transform: translateY(-12px) rotate(1deg);
            }
          }
        `}</style>
    </div>
  );
};



export default Home;
