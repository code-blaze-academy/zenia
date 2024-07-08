import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

function Menu() {
  return (
    <div className="menu-container">
      <ul className="list-menu">
        <div className="close-icon">
          <span>
            <RiCloseLine />
          </span>
        </div>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="#">about us</Link>
        </li>
        <li>
          <Link to="#">contact us</Link>
        </li>
        <li>
          <Link to="#">products</Link>
        </li>
        <li>
          <Link className="btn-container" to="/register">
            <button className="cta-btn">signup</button>
          </Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
