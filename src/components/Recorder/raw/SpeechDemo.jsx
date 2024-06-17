import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechDemo(props) {
  const [listening, setListening] = useState(false);
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  //   console.log(transcript);
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <section className="speech-section">
      <h3>What shape do you want zenia to create for you today ? </h3>
      <br />
      <p>Zenia create a cubic box with....let's ask her</p>
      {listening && (
        <div className="main-contents">
          <p>{transcript}</p>
        </div>
      )}
      <div className="btn-style">
        <button
          onClick={() => {
            startListening();
            setListening(true);
          }}
          className="start"
        >
          start listening
        </button>
        <button
          onClick={() => {
            SpeechRecognition.stopListening();
          }}
          className="stop"
        >
          stop listening
        </button>
        <button className="copy">{listening ? "send" : "copy"}</button>
      </div>
    </section>
  );
}

export default SpeechDemo;
