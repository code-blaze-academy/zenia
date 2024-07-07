import React from "react";
import DashboarHome from "./DashboarHome";

const TutorialChildren = () => {
  return (
    <section>
      <div className="flex-wrapper grid grid-cols-3 gap-4">
        <div className="card-container">
          <figure className="tutorial-card cursor-pointer hover:border hover:border-grey-900 rounded-lg">
            <div className="img-container rounded-lg inline-block">
              <img src={`/assets/icons/tumbnail-1.svg`} alt="tumbnail" />
            </div>
            <figcaption className="p-2">
              <p className="sailec-medium text-[#EEEEEE]">
                How to create and modifty holes with voice command
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="card-container">
          <figure className="tutorial-card cursor-pointer hover:border hover:border-grey-900 rounded-lg">
            <div className="img-container inline-block  rounded-lg">
              <img src={`/assets/icons/tumbnail-2.svg`} alt="tumbnail" />
            </div>
            <figcaption className="p-2">
              <p className="sailec-medium text-[#EEEEEE]">
                How to create basic shapes with voice commands
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="card-container">
          <figure className="tutorial-card cursor-pointer hover:border hover:border-grey-900 rounded-lg">
            <div className="img-container inline-block  rounded-lg">
              <img src={`/assets/icons/tumbnail-3.svg`} alt="tumbnail" />
            </div>
            <figcaption className="p-2">
              <p className="sailec-medium text-[#EEEEEE]">
                How to perform shelling with voice commands
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

function Tutorials(props) {
  return <DashboarHome heading="Tutorial" children={<TutorialChildren />} />;
}

export default Tutorials;
