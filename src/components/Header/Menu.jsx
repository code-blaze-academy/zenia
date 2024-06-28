import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="menu-container">
      <ul className="list-menu flex flex-row items-center">
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
