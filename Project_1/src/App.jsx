import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode class to the HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="w-full h-[600vh] bg-gradient-to-bl from-sky-200 to-white dark:bg-gradient-to-bl dark:from-gray-950 dark:to-gray-800 text-black dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home/>
    </div>
  );
}

export default App;
