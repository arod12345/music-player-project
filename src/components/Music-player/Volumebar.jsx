import React from "react";
import { FaHeart, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Volumebar = () => {
  return (
    <div className="volumebar flex">
      <FaVolumeUp />
      <input type="range" name="" id="" />
      <FaHeart title="Like" color="" size={20} />
    </div>
  );
};

export default Volumebar;
