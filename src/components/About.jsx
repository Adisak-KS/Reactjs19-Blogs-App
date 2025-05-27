import React from "react";
import about from "../images/about.svg";

function About() {
  return (
    <div className="container">
      <h2 className="title" c>
        เกี่ยวกับเรา
      </h2>
      <img src={about} alt="" />
    </div>
  );
}

export default About;
