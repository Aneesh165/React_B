import React from "react";
import Navbars from "./components/Navbar";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div>
      <Navbars />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
