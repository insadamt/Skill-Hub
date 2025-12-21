import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center justify-center h-10 w-10 rounded-lg
                 bg-neutral-200/60 dark:bg-neutral-800/60 
                 backdrop-blur-sm
                 border border-neutral-300/50 dark:border-neutral-700/50
                 text-neutral-900 dark:text-neutral-50
                 transition-all duration-200
                 hover:bg-neutral-300/60 dark:hover:bg-neutral-700/60
                 active:scale-95
                 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600"
    >
      {isDark ? (
        <Sun size={18} strokeWidth={2} />
      ) : (
        <Moon size={18} strokeWidth={2} />
      )}
      
    </button>
  );
};


export default ThemeToggle;
