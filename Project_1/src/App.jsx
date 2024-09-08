import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
