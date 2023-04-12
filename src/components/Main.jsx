import React from "react";
import musicData from "../data/musicData";
import { Card, MusicTag } from "./";

const Main = () => {
  return (
    <section className="player-list flex">
      <MusicTag />
      <div className="grid-holder grid">
        {musicData.map((items) => (
          <Card key={items.id} id={items.id} title={items.title} />
        ))}
      </div>
    </section>
  );
};

export default Main;
