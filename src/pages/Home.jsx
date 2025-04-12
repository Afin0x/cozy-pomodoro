import React, { useState } from "react";
import Toggle from "../components/Toggle";
import "../pages/App.css";
import Timer from "../components/Timer";
import SpotifyPlayer from "../components/SpotifyPlayer";
import RainToggle from "../components/RainToggle";
import NotePad from "../components/NotePad";
const Home = () => {
  const [isNight, setIsNight] = useState(false);

  return (
    <div className="app">
      <Timer />
      <video
        autoPlay
        muted
        loop
        className={`background-video ${isNight ? "hidden" : "visible"}`}
      >
        <source src="/video/mbg.mp4" type="video/mp4" />
      </video>

      <video
        autoPlay
        muted
        loop
        className={`background-video ${isNight ? "visible" : "hidden"}`}
      >
        <source src="/video/nbg.mp4" type="video/mp4" />
      </video>

      <Toggle isNight={isNight} setIsNight={setIsNight} />
      <RainToggle />
      <NotePad />
      <SpotifyPlayer />
    </div>
  );
};

export default Home;
