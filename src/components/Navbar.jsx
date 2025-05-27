import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Blog Application</h3>
      </Link>
      <Link to="/">หน้าแรก</Link>
      <Link to="/blogs">บทความ</Link>
      <Link to="/about">เกี่ยวกับเรา</Link>
    </nav>
  );
}

export default Navbar;
