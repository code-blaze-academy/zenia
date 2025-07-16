import React, { useState } from "react";
import MenuBarIcon from "../icons/MenuBarIcon";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="navbar-container">
      <div className="flex-container-2">
        <div className="flex-item">
          <Link to="/" className="logo-container text-[#000] lg:text-[#fff]">
            Xpress Cad
          </Link>
        </div>
        <div className="flex-item">
          <span className="togglebar" onClick={handleToggleMenu}>
            <span>Menu</span>
            <span>
              <MenuBarIcon />
            </span>
          </span>
        </div>
      </div>
      <nav
        className={toggleMenu ? "nav-menu active" : " nav-menu"}
        onClick={handleToggleMenu}
      >
        <Menu />
      </nav>
    </div>
  );
}

export default Navbar;
