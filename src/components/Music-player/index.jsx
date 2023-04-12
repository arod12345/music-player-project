import React from "react";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import Volumebar from "./Volumebar";

const MusicPlayer = () => {
  return (
    <div className="music-player flex">
      <div className="music-player-wrapper flex">
        <Track />
        <div className="controls-hub flex">
          <Controls />
          <Player/>
          <Seekbar />
        </div>
        <Volumebar />
      </div>
    </div>
  );
};

export default MusicPlayer;
