import React, { useEffect, useRef, useState } from "react";
import { FaCloudRain } from "react-icons/fa";
import "./RainToggle.css";

const RainToggle = () => {
  const [isRaining, setIsRaining] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isHovering, setIsHovering] = useState(false);
  const rainSound = useRef(null);

  useEffect(() => {
    rainSound.current = new Audio("/sounds/rain.mp3");
    rainSound.current.loop = true;
    rainSound.current.volume = volume;

    return () => {
      if (rainSound.current) {
        rainSound.current.pause();
        rainSound.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (rainSound.current) {
      rainSound.current.volume = volume;
    }
  }, [volume]);

  const handleToggle = () => {
    setIsRaining((prev) => {
      const newState = !prev;
      if (rainSound.current) {
        if (newState) {
          rainSound.current
            .play()
            .catch((e) => console.log("Audio play failed:", e));
        } else {
          rainSound.current.pause();
        }
      }
      return newState;
    });
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div
      className="rain-toggle-wrapper"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button
        className={`rain-toggle ${isRaining ? "active" : ""}`}
        onClick={handleToggle}
        aria-label={isRaining ? "Stop rain sound" : "Play rain sound"}
      >
        <FaCloudRain className="icon" />
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        className={`rain-volume-slider ${isHovering ? "visible" : ""}`}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default RainToggle;
