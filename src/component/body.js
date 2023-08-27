import React from "react";
import Group from "./images/group77.png";

export default function Body() {
  return (
    <main className="hero">
      <img src={Group} alt="" className="heroimg" />
      <h1 className="hero--head">Online Experiences</h1>
      <p className="hero--para">
        Join unique interactive activites led by one-of-a-kind hosts-all without
        leaving home.
      </p>
    </main>
  );
}
