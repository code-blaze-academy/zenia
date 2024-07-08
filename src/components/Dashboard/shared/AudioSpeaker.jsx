import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import RecordLabel from "../../icons/RecordLabel";
import EqualizerAudio from "../../shared/EqualizerAudio";

function AudioSpeaker({ handleAssetData }) {
  const [isMicrophoneActive, setisMicrophoneActive] = useState(false);
  const [transcriptMsg, setTranscriptMsg] = useState("");
  const handleMicrophone = () => {
    setisMicrophoneActive((prev) => !prev);
  };

  useEffect(() => {
    // get the accesss data
    const storData = localStorage.getItem("stl_url");
  }, []);

  // **Using speech to text API
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
    <div className="flex  gap-4 items-end lg:absolute bottom-4 right-4">
      {isMicrophoneActive && (
        <div className="flex-item">
          <div className="audio-speaker relative h-[124px] w-[306px] rounded-[12px] bg-[#E8EAED]">
            <div className="top-section p-2 text-[#1B1B1C] capitalize">
              <p>{transcript}</p>
            </div>
            <div className="bottom-section absolute bottom-0 left-0 h-[54px] w-[100%] bg-[#D8D8D8] p-4">
              <div>
                {listening ? (
                  <div className="flex justify-between items-center">
                    <div className="flex-item">
                      <EqualizerAudio />
                    </div>
                    <div className="flex-item cursor-pointer">
                      <p
                        className="text-[#0C8CE9]"
                        onClick={() => {
                          handleAssetData(transcript);
                          SpeechRecognition.stopListening();
                          handleMicrophone();
                          setListening(false);
                        }}
                      >
                        Send
                      </p>
                    </div>
                  </div>
                ) : (
                  <RecordLabel />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="flex-item"
        // onClick={
        //   listening
        //     ? () => {
        //         SpeechRecognition.stopListening();
        //         // handleMicrophone();
        //         setListening(false);
        //       }
        //     : () => {
        //         handleMicrophone();
        //         startListening();
        //         setListening(true);
        //       }
        // }
        onClick={() => {
          handleMicrophone();
          startListening();
          setListening(true);
        }}
      >
        <div className="img-container h-[50px] w-[50px] cursor-pointer">
          <img src={`/assets/icons/microphone-icon.svg`} alt="microphone" />
        </div>
      </div>
    </div>
  );
}

export default AudioSpeaker;
