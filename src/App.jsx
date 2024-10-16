import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    // document.querySelector("html").classList.remove("dark", "light");
    // document.querySelector("html").classList.add(themeMode);

    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const onChangeBtn = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      {/* <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label> */}

      <BrowserRouter>
        <Navbar />
        <Intro />
        <Skills />
        <Works />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
