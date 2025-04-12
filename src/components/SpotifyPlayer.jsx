import React from "react";
import "./SpotifyPlayer.css";

const SpotifyPlayer = () => {
  return (
    <div className="spotify-player-wrapper">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/3oXwmqHylgmGS7mNjmUPmj?utm_source=generator&theme=0"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
