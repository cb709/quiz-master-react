import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <div className="logo">
          <h2>
            Quiz <span>Master</span>
          </h2>
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
