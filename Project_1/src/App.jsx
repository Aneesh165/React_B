import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CarouselComponent from "./components/Carousel";

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
    <div className="w-full h-[600vh] bg-white dark:bg-gray-900   text-black dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <CarouselComponent/>
    </div>
  );
}

export default App;
