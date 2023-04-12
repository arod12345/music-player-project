import React from "react";
import musicTagData from "../data/musicTagData";

const MusicTag = () => {
  return (
    <div className="music-tag flex">
      {musicTagData.map((item) => (
        <span className="flex" key={item.id}>
          <p>{item.icon}</p>
          {item.genere}
        </span>
      ))}
    </div>
  );
};

export default MusicTag;
