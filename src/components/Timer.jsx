import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const durations = {
    pomodoro: 1500,
    shortBreak: 300,
    longBreak: 900,
  };

  const [mode, setMode] = useState("pomodoro");
  const [seconds, setSeconds] = useState(durations.pomodoro);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  useEffect(() => {
    setSeconds(durations[mode]);
    setIsRunning(false);
  }, [mode]);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setSeconds(durations[mode]);
    setIsRunning(false);
  };

  return (
    <div>
      <div className="timer-container">
        <div className="mode-buttons">
          <button
            onClick={() => setMode("pomodoro")}
            className={mode === "pomodoro" ? "active" : ""}
          >
            Pomodoro
          </button>
          <button
            onClick={() => setMode("shortBreak")}
            className={mode === "shortBreak" ? "active" : ""}
          >
            Short Break
          </button>
          <button
            onClick={() => setMode("longBreak")}
            className={mode === "longBreak" ? "active" : ""}
          >
            Long Break
          </button>
        </div>

        <div className="timer">
          <h1>{formatTime(seconds)}</h1>
          <button onClick={handleStartPause}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
