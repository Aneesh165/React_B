import React from "react";

function Theme() {
  const change = () => {
    if (document.body.style.backgroundColor == "white") {
      document.body.style.backgroundColor = "black";
      document.getElementById("button").style.backgroundColor = "white";
      document.getElementById("button").style.color = "black";
    } else {
      document.body.style.backgroundColor = "white";
      document.getElementById("button").style.backgroundColor = "black";
      document.getElementById("button").style.color = "white";
    }
  };
  return (
    <div>
      <button onClick={change} id="button">
        Switch
      </button>
    </div>
  );
}

export default Theme;
