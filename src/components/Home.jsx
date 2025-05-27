import React from "react";
import home from "../images/home.svg";

function Home() {
  return (
    <div className="container">
      <h2 className="title">หน้าแรก</h2>
      <img src={home} alt="home" />
    </div>
  );
}

export default Home;
