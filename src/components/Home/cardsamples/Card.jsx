import React from "react";
import "./cardstyle.css";
import AudioRecordIcon from "../../icons/AudioRecordIcon";
function Card({ title, caption, type }) {
  return (
    <figure className="card">
      <div className="top-section">
        <div className="icon-container">
          <AudioRecordIcon />
          {/* <img src={`/assets/icons/audio-record.svg`} alt="record label" /> */}
        </div>
      </div>
      <div className={`${type} middle-section`}>
        <div className="img-container">
          <img src={`/assets/images/${type}.svg`} alt="sample 1" />
        </div>
      </div>
      <div className={`${type} bottom-section text-center`}>
        <figcaption>
          <p className="title">{title}</p>
          <span className="text-[#86868B] sailec-medium">{caption}</span>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
