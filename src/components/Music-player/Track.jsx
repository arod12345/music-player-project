import React from "react";
import placeholderPng from "../../assets/juliana-malta-tHXX4fl3-ms-unsplash.jpg";

const Track = () => {
  return (
    <div className="track flex">
      <img src={placeholderPng} />
      <div className="player-desc">
        <h3>lorem dope</h3>
        <p>Ice cube</p>
      </div>
    </div>
  );
};

export default Track;
