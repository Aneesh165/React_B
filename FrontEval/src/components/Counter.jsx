import React, { useEffect, useState } from "react";

const Counter = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (second == 60) {
      setSecond(0);
      if (minute == 59) {
        setMinute(0);
        setHour(hour + 1);
      } else {
        setMinute(minute + 1);
      }
    } else {
      setTimeout(() => {
        setSecond(second + 1);
      }, 1000);
    }
  }, [second]);

  return (
    <div>
      <h1>Counter</h1>
      <div>
      <p>Hours:{hour}</p>
      <p>minutes:{minute}</p>
      <p>seconds:{second}</p>
      </div>
      
    </div>
  );
};

export default Counter;
