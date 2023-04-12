import React from "react";
import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="welcome flex">
      <div className="welcome-wrapper flex">
        <marquee behavior="smooth" direction="up">
          <h1>CroppZenMusicPlayerCroppMusicPlayer</h1>
        </marquee>
        <div className="welcome-tx flex">
          <FaHeadphones style={{ height: "8em", width: "8em" }} />
          <h1>Welcome</h1>
          <Link to="/player" >
            <button className="welc-btn">Let's start playing</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
