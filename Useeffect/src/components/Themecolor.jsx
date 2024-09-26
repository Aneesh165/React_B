import React, { createContext, useState } from 'react';
import Usercontext from './Usercontext'; 

const Themecolor = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleT = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Usercontext.Provider value={{ theme, toggleT }}>
      {children}
    </Usercontext.Provider>
  );
};

export default Themecolor;