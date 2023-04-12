import React from "react";
import { Sidebar, Navbar, Main } from "../components";

const Favorite = () => {
  return (
    <div className="player-container flex">
      <Sidebar />
      <main className="main">
        <Navbar />
        {/* <Main /> */}
        <h1 style={{ marginTop: "5em" }}>Favorite</h1>
      </main>
      {/* Music-player */}
    </div>
  );
};

export default Favorite;
