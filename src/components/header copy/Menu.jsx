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
          <Link to="/events" className="hero-btn">
            <button className="active btn">
              <span>Book an event</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/#aboutus">about us</Link>
        </li>

        <li>
          <Link to="/photo-studio">photo studio</Link>
        </li>
        <li>
          <Link to="/#services">our services</Link>
        </li>
        <li>
          <Link to="/#amenities">amenities</Link>
        </li>
        <li>
          <Link to="/#gallery">gallery</Link>
        </li>
        <li>
          <Link to="/#tour">shedule a tour</Link>
        </li>
        <li>
          <Link to="/contactus">contact us for questions / inquires</Link>
        </li>
        {/* <li>
          <Link to="/photo-studio">for booking</Link>
        </li> */}
        <li>
          <Link to="/#for-booking">for booking</Link>
        </li>
        <li>
          <Link to="/#services">rentals</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
