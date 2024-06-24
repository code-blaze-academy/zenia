import React from "react";
import EqualizerAudio from "../shared/EqualizerAudio";

function Experience(props) {
  return (
    <section>
      <div className="flex-container-2 items-start mb-24">
        <div className="flex-item">
          <div className="wrapper">
            <h6 className="text-left flex items-center justify-start gap-2">
              <span>
                <EqualizerAudio />
              </span>
              <span>The Experience </span>
            </h6>
            <div className="text-wrapper mb-12">
              <h2 className="mt-4 text-lower mb-8">
                Create <br /> Anywhere. <br /> Anytime
              </h2>
              <h6 className="text-[#86868B] sailec-medium">
                Elevate your productivity and precision with seamless AI
                integration on all devices, ensuring top-notch performance
                wherever you work.
              </h6>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img src={`/assets/images/experience-img.svg`} alt="let's create" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
