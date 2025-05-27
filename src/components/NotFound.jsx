import React from "react";
import notfound from "../images/notfound.svg";

function NotFound() {
  return (
    <div className="container">
      <h3 className="title">ไม่พบหน้าเว็บ (404 Page Not found)</h3>
      <img src={notfound} alt="notfound" />
    </div>
  );
}

export default NotFound;
