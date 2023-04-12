import React, { useState } from "react";
import placeHolderImage from "../assets/juliana-malta-tHXX4fl3-ms-unsplash.jpg";
import {
  FaPlayCircle,
  FaEdit,
  FaHeart,
  FaTrash,
  FaPauseCircle
} from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import EditMusic from "./EditMusic";

const Card = ({ title, id }) => {
  // redux

  //just some jurgen about this code
  const [cardState, setCardState] = useState({
    playSign: false,
    toolMenu: false,
    favIcon: false,
    isPlaying: false,
    editing: false
  });

  const handleHover = () => {
    setCardState((prev) => ({
      ...prev,
      playSign: !prev.playSign
    }));
  };
  const handleMenuClick = () => {
    setCardState((prev) => ({
      ...prev,
      toolMenu: !prev.toolMenu
    }));
  };

  const handleFavIcon = () => {
    setCardState((prev) => ({
      ...prev,
      favIcon: !prev.favIcon
    }));
  };

  const handleEdit = () => {
    setCardState((prev) => ({
      ...prev,
      editing: !prev.editing
    }));
  };

  let favorite;
  if (cardState.favIcon === true) {
    favorite = (
      <FaHeart
        className={cardState.favIcon ? "fav-clicked " : "fav"}
        onClick={handleFavIcon}
      />
    );
  } else {
    favorite = cardState.playSign && (
      <FaHeart
        className={cardState.favIcon ? "fav-clicked" : "fav"}
        onClick={handleFavIcon}
      />
    );
  }

  const handlePlaying = () => {
    setCardState((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying
    }));
  };

  let playPause;
  if (cardState.isPlaying === true) {
    playPause = (
      <FaPauseCircle
        onClick={handlePlaying}
        style={{
          color: "#4169e1",
          fontSize: "36px"
        }}
      />
    );
  } else {
    playPause = cardState.playSign && (
      <FaPlayCircle
        style={{
          color: "#4169e1",
          fontSize: "36px"
        }}
        onClick={handlePlaying}
      />
    );
  }
  //just some jurgen about this code

  return (
    <div
      key={id}
      className="card flex"
      onMouseOver={handleHover}
      onMouseOut={handleHover}
    >
      <img loading="lazy" src={placeHolderImage} />
      {favorite}
      {cardState.playSign && (
        <BiDotsVerticalRounded
          className="menu-dot"
          onClick={cardState.playSign && handleMenuClick}
        />
      )}
      {cardState.toolMenu && (
        <div className="tool-kit">
          <p onClick={handleEdit}>
            <FaEdit /> edit
          </p>
          <p>
            <FaTrash style={{ marginRight: "1em" }} /> Delete
          </p>
        </div>
      )}
      {cardState.editing && <EditMusic />}
      <div className="card-desc flex">
        <div className="blck">
          <Link to="/player/details" className="link card-link">
            <p>{title}</p>
          </Link>
          <p className="artist">Ice Cube</p>
        </div>
        {playPause}
      </div>
    </div>
  );
};

export default Card;
