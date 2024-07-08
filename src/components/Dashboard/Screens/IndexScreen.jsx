import React, { useEffect, useState } from "react";
import SideMenu from "../shared/SideMenu";
import EditFeatures from "../shared/EditFeatures";
import AudioSpeaker from "../shared/AudioSpeaker";
import Scene from "../shared/RotatingCube";
import STLViewer from "../helper/StlViewer";
// import STLRender from "../helper/StlViewer";

// import use3DAssets from "../helper/fetch3DAssets";

function IndexScreen(props) {
  const [assetData, setAssetData] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const handleAssetData = async (message) => {
    const payload = {
      message_body: message,
    };
    setLoading(true);
    const url = `http://198.7.121.174:4321/prompt/message/`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const {
        data: { status, stl_url },
      } = await response.json();
      setAssetData(stl_url);
      setLoading(false);

      if(response.ok){
          localStorage.setItem("stl_url", stl_url);
      }

      // check if the response was not okay
      if (!response.ok) {
        setErrors("No assets found...!");
      }
    } catch (err) {
      if (err.message === "Failed to fetch") {
        setErrors("Network Error..!");
        setLoading(false);
      }
    }
  };
  console.log(errors);


  return (
    <div className="index-screen screen-wrapper lg:h-screen bg-[#D2D2D2]">
      <div className="grid-2 p-2 pt-8">
        <div className="grid-item side-menu">
          <SideMenu />
        </div>
        <div className="grid-item main-menu">
          <div className="menu-contents p-2 relative">
            <div className="top-section mb-4">
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
            <div className="middle-section flex justify-center items-center">
              {/* <div className="section-wrapper h-[100%]">
                <Scene />
                <STLViewer />
              </div> */}
              {loading ? (
                <Scene />
              ) : !assetData ? (
                <p style={{ color: "#f00" }}>{errors}</p>
              ) : (
                <STLViewer assetData={assetData} />
              )}
              {/* <STLViewer assetData={assetData} /> */}
            </div>
            <div className="bottom-section absolute bottom-0 right-0">
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
              <AudioSpeaker handleAssetData={handleAssetData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexScreen;
