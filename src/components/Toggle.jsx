import React from "react";
import "./Toggle.css";

const Toggle = ({ isNight, setIsNight }) => {
  const toggleTheme = () => {
    setIsNight((prev) => !prev);
    document.body.className = !isNight ? "night" : "morning";
  };

  return (
    <div className="toggle-wrapper" onClick={toggleTheme}>
      <div className={`toggle-switch ${isNight ? "night" : "morning"}`}>
        <div className="icon">{isNight ? "🌙" : "☀️"}</div>
      </div>
    </div>
  );
};

export default Toggle;
