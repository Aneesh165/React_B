import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Carousel from "./components/Carousel";
import Reality from "./components/Reality";
import Build from "./components/Build";
import Plan from "./components/Plan";
import Review from "./components/Review";
import Launch from "./components/Launch";
import Footerm from "./components/Footerm";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    //bg-gradient-to-bl from-sky-200 to-white dark:bg-gradient-to-bl dark:from-gray-950 dark:to-gray-800
    <div className="w-full h-max  bg-white dark:bg-[#1d1d20]   text-black dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <Carousel/>
      <Reality/>
      <Build/>
      <Plan/>
      <Review/>
      <Launch/>
      <Footerm/>
    </div>
  );
}

export default App;
