import React from "react";

function TestimonialCard({ imgSrc, name, title, description }) {
  return (
    <div className="testi-card-container">
      <figure className="testi-card py-2 px-4">
        <div className="top-section mb-4">
          <div className="inner-flex flex gap-2 items-center">
            <div className="flex-item">
              <div className="img-container">
                <img src={imgSrc} alt={name} />
              </div>
            </div>
            <div className="flex-item">
              <h6 className="text-[#969799] sailec-medium mb-2">{name}</h6>
              <h6 className="sailec-medium">{title}</h6>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <p className="sailec-medium">{description}</p>
        </div>
      </figure>
    </div>
  );
}

export default TestimonialCard;
