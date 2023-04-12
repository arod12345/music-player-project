import React from "react";
import { Link } from "react-router-dom";
import { BiHome, BiHeart, BiInfoCircle, BiHeadphone } from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className="sidebar flex">
      <Link to="/" className="link">
        <div className="logo-container flex">
          <BiHeadphone className="icon" />
          <h4>
            Cropp <br /> player
          </h4>
        </div>
      </Link>
      <Link to="/player" className="link">
        <div className="icon-holder flex">
          <BiHome className="icon" />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/player/favorite" className="link">
        <div className="icon-holder flex">
          <BiHeart className="icon" />
          <p>Favorite</p>
        </div>
      </Link>
      <Link to="/player/about" className="link">
        <div className="icon-holder flex">
          <BiInfoCircle className="icon" />
          <p>About</p>
        </div>
      </Link>
    </aside>
  );
};

export default Sidebar;
