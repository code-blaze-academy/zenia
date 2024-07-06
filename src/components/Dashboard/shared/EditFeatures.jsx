import React from "react";
import HideTool from "../../icons/HideTool";
import HandTool from "../../icons/HandTool";
import RotatingTool from "../../icons/RotatingTool";
import ZoomTool from "../../icons/ZoomTool";
import PlayTool from "../../icons/PlayTool";
import ExportArrowIcon from "../../icons/ExportArrowIcon";

function EditFeatures(props) {
  return (
    <div className="edit-bar">
      <div className="flex-item ml-0">
        <div className="bar-item ml-0">
          <button className="bar-btn drag-btn">
            <div className="icon-container">
              {/* <img src={`/assets/icons/hide-tool.svg`} alt="hide tool" /> */}
              <HideTool />
            </div>
          </button>
        </div>
      </div>
      <div className="flex-item">
        <div className="bar-item">
          <button className="bar-btn pan-btn">
            <div className="icon-container">
              <HandTool />
            </div>
          </button>
        </div>
        <div className="bar-item">
          <button className="bar-btn rotate-btn">
            <div className="icon-container">
              <RotatingTool />
            </div>
          </button>
        </div>
        <div className="bar-item">
          <button className="bar-btn zoom-btn">
            <div className="icon-container">
              <ZoomTool />
            </div>
          </button>
        </div>
      </div>

      <div className="flex-item">
        <div className="bar-item gray-bg">
          <button className="bar-btn export-btn">
            export {""}{" "}
            <span className="inline-block align-middle">
              <ExportArrowIcon />
            </span>
          </button>
        </div>
        <div className="bar-item">
          <button className="bar-btn play-btn">
            <div className="icon-container">
              <PlayTool />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditFeatures;
