import React from "react";
import SpeechDemo from "./raw/SpeechDemo";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

function Speech(props) {
  return (
    // <section className="speech-section">
    //   <h3>Lets record your voice</h3>
    //   <div className="actions-btns">
    //     <div className="btn-container">
    //       <button>start</button>
    //     </div>
    //     <div className="btn-container">
    //       <button>stop</button>
    //     </div>
    //     <div className="btn-container">
    //       <button>reset</button>
    //     </div>
    //   </div>
    // </section>
    <>
      <SpeechDemo />
    </>
  );
}

export default Speech;
