import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Welcome, About, Favorite, CardDetails } from "./pages";
import "./main.css";

const App = () => {
  // const fetchData = async () => {
  //   const response = await fetch(`http://localhost:3000/musicData?_sort=id&_order=desc`);
  //   const data = await response.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
      <div className="main-contianer">
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/player" element={<Home />}></Route>
          <Route path="/player/about" element={<About />}></Route>
          <Route path="/player/favorite" element={<Favorite />}></Route>
          <Route path="/player/details" element={<CardDetails />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
