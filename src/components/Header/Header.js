import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <div className="logo">
          <Link to={"/"}>
            <h2>
              Quiz <span>Master</span>
            </h2>
          </Link>
        </div>
        <div className="nav-link">
          <Link to={"/"}>Home</Link>
          <Link to={"/stat"}>Statistics</Link>
          <Link to={"/blog"}>Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
