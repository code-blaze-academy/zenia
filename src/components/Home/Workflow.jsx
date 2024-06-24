import React from "react";
import EqualizerAudio from "../shared/EqualizerAudio";

function Workflow(props) {
  return (
    <section className="workflow">
      <div className="wrapper">
        <h6 className="text-left flex items-center justify-start gap-2">
          <span>
            <EqualizerAudio />
          </span>
          <span>Optmize Your Workflow </span>
        </h6>
        <div className="text-wrapper mb-14">
          <h2 className="mt-4 text-lower mb-8">
            Enhanced with <br /> Design Efficiency
          </h2>
          <h6 className="text-[#86868B] sailec-medium">
            Ensure accuracy and excellence in every detail of your creations.
          </h6>
        </div>
      </div>
      <div className="flex-container-2">
        <div className="flex-item ">
          <figure className="flex-card">
            <div className="top-section">
              <div className="img-container">
                <img
                  src={`/assets/images/design-efficiency-left.svg`}
                  alt="design efficiency"
                />
              </div>
            </div>
            <div className="bottom-section">
              <h3 className="text-[#EEEEEE]">
                Built to Expand Advanced Functionalities
              </h3>
              <p className="text-[#A9A9A9]">
                Designed to effortlessly export your creations into various
                formats, ensuring compatibility and versatility across
                platforms.
              </p>
            </div>
          </figure>
        </div>
        <div className="flex-item">
          <figure className="flex-card">
            <div className="top-section">
              <div className="img-container">
                <img
                  src={`/assets/images/design-efficiency-right.svg`}
                  alt="design efficiency"
                />
              </div>
            </div>
            <div className="bottom-section">
              <h3 className="text-[#EEEEEE]">Built to improve accessibility</h3>
              <p className="text-[#A9A9A9]">
                Designed to be inclusive, the tool's voice command functionality
                makes it accessible to users, providing an equal opportunity to
                excel in 3D modeling..
              </p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
