import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function NavBar(props) {
  return (
    <section>
      <div className="nav-container">
        <nav className="nav-menu">
          <div className="flex-container flex gap-[4%] items-center">
            <div className="flex-item basis-[22%]">
              <Link to="/">Zenia</Link>
            </div>
            <div className="flex-item ml-auto">
              <Menu />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;
