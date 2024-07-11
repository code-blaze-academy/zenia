import React, { useState } from "react";
import HomeDashboardIcon from "../../icons/HomeDashboardIcon";
import { Link } from "react-router-dom";

function SideMenu(props) {
  const [activeBtn, setActiveBtn] = useState(false);
  const handleArrowBtn = () => {
    setActiveBtn((prev) => !prev);
  };
  return (
    <>
      <div className="top-section p-2 mb-4">
        <div className="gap-2 items-center p-4 mb-2">
          <div className="flex flex-item">
            <p className="initial uppercase w-[36px] h-[36px] bg-[#ffcd29] sailec-medium">
              s
            </p>
          </div>
          <div className="flex-item">
            <p className="username capitalize sailec-medium">Solomon</p>
          </div>
          <div className="flex-wrapper">
            <div className="flex-item">
              <Link
                className="active link-item flex items-center gap-4 px-[1rem]"
                to="/dashboard"
              >
                <span className="icon-container inline-block align-middle">
                  <HomeDashboardIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button
            className={`hide-scene ${activeBtn ? "active" : ""}`}
            onClick={handleArrowBtn}
          >
            <span className="sailec-medium text-[#EEEEEE] inline-block pl-6">
              scene
            </span>
          </button>
        </div>
      </div>
      <div className="bottom-section"></div>
    </>
  );
}

export default SideMenu;
