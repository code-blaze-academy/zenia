import React from "react";
import SpeakerBand from "../shared/SpeakerBand";
import EqualizerAudio from "../shared/EqualizerAudio";

function CreateLayout(props) {
  return (
    <section className="speaker-layout">
      <h6 className="text-center flex items-center justify-center gap-2">
        <span>
          <EqualizerAudio />
        </span>
        <span>A new easy way to create </span>
      </h6>
      <h2 className="text-center mt-4">
        <span className="text-[#86868B]">think.speak.</span>
        create
      </h2>
      <div className="box-container flex flex-wrap">
        <div className="icon-container m-auto mt-8">
          <SpeakerBand />
          {/* <img src={`assets/images/speaker-band.svg`} alt="speaker" /> */}
        </div>
      </div>
    </section>
  );
}

export default CreateLayout;
