import React from "react";

import Navbar from "./Navbar";
import "../stylesheets/Home.css";

export default function Home() {
  function handleClick() {
    console.log("menu clicked");
  }

  return (
    <div className="home">
      <Navbar />
      <main>
        <p className="welcome">WELCOME TO WINTA</p>
        <h1>Steakhouse + Bar</h1>
        <p className="home-info" onClick={handleClick}>
          Check out our Menu
        </p>
      </main>
    </div>
  );
}
