import React from "react";
import { Navbar, Sidebar, Main, MusicPlayer } from "../components";

const Home = () => {
  return (
    <div className="player-container flex">
      <Sidebar />
      <main className="main">
        <Navbar />
        <Main />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Home;
