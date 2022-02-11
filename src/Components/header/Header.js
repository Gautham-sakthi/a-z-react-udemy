import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import icon from "./crown.svg";
import { auth } from "../../firebase/firebase.utils";
function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={icon} className="logo" alt="Home button " />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
