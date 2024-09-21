import React, { useState } from "react";
import { Progress } from "@material-tailwind/react";

function Progressbar() {
  const [progress, setprogress] = useState(0);

  const updateprogress = (now) => {
    const { left, width } = now.target.getBoundingClientRect();
    let newProgress = ((now.clientX - left) / width)  ;

    setprogress(Math.round(newProgress)); 
  };

  return (
    <>
      <div className="w-[50%] mx-auto mt-20" onClick={updateprogress}>
        <h1>Progress :{progress}%</h1>
        <Progress value={progress} size="lg" color="blue"/>
      </div>
    </>
  );
}

export default Progressbar;
