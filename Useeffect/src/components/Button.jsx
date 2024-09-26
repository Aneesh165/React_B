import React, { useContext } from "react";
import Usercontext from "./Usercontext";

const Button = () => {
  const { theme, toggleT } = useContext(Usercontext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <button onClick={toggleT} style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>Toggle</button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
        similique facere suscipit dolorum. Fugit quisquam illum optio, magni,
        incidunt aliquid, ea ipsum maxime tempore est nemo? At eos cupiditate
        laborum.
      </p>
    </div>
  );
};

export default Button;
