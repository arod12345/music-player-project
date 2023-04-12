import React from "react";
import { Sidebar, Navbar, Main } from "../components";

const CardDetails = () => {
  return (
    <div className="player-container flex">
      <Sidebar />
      <main className="main">
        <Navbar />
        {/* <Main /> */}
        <h1 style={{ marginTop: "5em" }}>CardDetails</h1>
      </main>
      {/* Music-player */}
    </div>
  );
};

export default CardDetails;