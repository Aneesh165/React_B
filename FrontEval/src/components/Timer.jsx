import React, { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const [counter, setCounter] = useState(false);

  const handleStart = () => {
    counter === false ? setCounter(true) : setCounter(false);
    document.getElementById('start').innerHTML=='Start'?document.getElementById('start').innerHTML='Stop':document.getElementById('start').innerHTML='Start'
  };

  useEffect(() => {
    let timer;
    if (second == 60) {
      setSecond(0);
      if (minute == 59) {
        setMinute(0);
        setHour(hour + 1);
      } else {
        setMinute(minute + 1);
      }
    } else {
      timer = setTimeout(() => {
        if (counter == true) {
          setSecond(second + 1);
        } else {
          setSecond(second);
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [second, counter]);

  const handleReset = () => {
    console.log("reseted");
    setCounter(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  return (
    <div>
      <h1 className="w-32 my-5 text-indigo-700 font-semibold text-4xl mx-auto">
        Counter
      </h1>
      <div className="w-[350px] border-4 border-y-blue-400 py-4  border-x-indigo-600 flex gap-5 mx-auto justify-evenly">
        <p>Hours: {String(hour).padStart(2, '0')}</p>
        <p>Minutes: {String(minute).padStart(2, '0')}</p>
        <p>Seconds: {String(second).padStart(2, '0')}</p>
      </div>
      <div className=" w-[350px] mx-auto mt-3 h-14 py-1 flex gap-10 justify-around">
        <button
          className="bg-purple-600 rounded text-white px-6"
          onClick={handleStart}
          id="start"
        >
          Start
        </button>
        <button
          className="bg-purple-600 rounded text-white px-6"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
