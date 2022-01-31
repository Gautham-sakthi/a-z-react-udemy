import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import icon from "./crown.svg";
function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={icon} className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
