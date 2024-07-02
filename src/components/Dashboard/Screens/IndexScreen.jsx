import React from "react";
import SideMenu from "../shared/SideMenu";
import EditFeatures from "../shared/EditFeatures";
// import RecordLabel from "../../icons/RecordLabel";
import AudioSpeaker from "../shared/AudioSpeaker";

function IndexScreen(props) {
  return (
    <div className="index-screen screen-wrapper lg:h-screen bg-[#D2D2D2]">
      <div className="grid-2 p-2 pt-8">
        <div className="grid-item side-menu">
          <SideMenu />
        </div>
        <div className="grid-item main-menu">
          <div className="menu-contents p-4 relative">
            <div className="top-section">
              <div className="flex items-center justify-end gap-20">
                <div className="flex-item">
                  <EditFeatures />
                </div>
                <div className="flex-item cursor-pointer">
                  <img
                    src={`/assets/icons/rotating-axis.svg`}
                    alt="rotating axis"
                  />
                </div>
              </div>
            </div>
            <div className="bottom-section">
              {/* <div className="flex  gap-4 items-end absolute bottom-4 right-4">
                <div className="flex-item">
                  <div className="audio-speaker relative h-[124px] w-[306px] rounded-[12px] bg-[#E8EAED]">
                    <div className="top-section"></div>
                    <div className="bottom-section absolute bottom-0 left-0 h-[54px] w-[100%] bg-[#D8D8D8] p-4">
                      <p>
                        <RecordLabel />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-item">
                  <div className="img-container h-[50px] w-[50px] cursor-pointer">
                    <img
                      src={`/assets/icons/microphone-icon.svg`}
                      alt="microphone"
                    />
                  </div>
                </div>
              </div> */}
              <AudioSpeaker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexScreen;
