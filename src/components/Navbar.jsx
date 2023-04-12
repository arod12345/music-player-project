import React, { useState } from "react";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";
import {
  BiMoon,
  BiToggleLeft,
  BiSun,
  BiDotsVerticalRounded
} from "react-icons/bi";
import { AddMusic } from "./";

const Navbar = () => {
  const [musicAdd, setMusicAdd] = useState({
    AddMusicOn: false,
    darkMode: false
  });

  const handleMusicAdd = () => {
    setMusicAdd((perv) => ({
      ...perv,
      AddMusicOn: !perv.AddMusicOn
    }));
  };

  return (
    <header className="header flex">
      <div className="search flex">
        <input type="text" placeholder="Search Music , Artist , Album" />
        <FaSearch style={{ cursor: "pointer" }} />
      </div>
      <div className="other-tools flex">
        <button className="add-music flex" onClick={handleMusicAdd}>
          {musicAdd.AddMusicOn ? <FaMinus /> : <FaPlus />}
          Add Music
        </button>
        {musicAdd.AddMusicOn && <AddMusic />}
        <button className="toggle-theme flex">
          <BiMoon />
          <BiToggleLeft />
          <BiSun />
        </button>
        <BiDotsVerticalRounded
          style={{
            fontSize: "28px",
            cursor: "pointer",
            background: "#24242450",
            padding: "4px",
            borderRadius: "50%"
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
