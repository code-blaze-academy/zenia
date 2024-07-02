import React, { useState } from "react";

function SideMenu(props) {
  const [activeBtn, setActiveBtn] = useState(false);
  const handleArrowBtn = () => {
    setActiveBtn((prev) => !prev);
  };
  return (
    <>
      <div className="top-section p-2 mb-4">
        <div className="flex gap-2 items-center p-4 mb-2">
          <div className="flex-item">
            <p className="initial uppercase w-[36px] h-[36px] bg-[#ffcd29] sailec-medium">
              u
            </p>
          </div>
          <div className="flex-item">
            <p className="username capitalize sailec-medium">username</p>
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
