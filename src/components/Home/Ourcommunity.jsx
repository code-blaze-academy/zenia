import React from "react";
import EqualizerAudio from "../shared/EqualizerAudio";

function Ourcommunity(props) {
  return (
    <section>
      <div className="wrapper text-center">
        <h6 className="text-left flex items-center justify-center gap-2">
          <span>
            <EqualizerAudio />
          </span>
          <span>Join the Community </span>
        </h6>
        <div className="text-wrapper mb-12">
          <h2 className="mt-4 mb-8">What our users are saying.</h2>
        </div>
      </div>
    </section>
  );
}

export default Ourcommunity;
