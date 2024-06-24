import React from "react";
import EqualizerAudio from "../shared/EqualizerAudio";

function Services(props) {
  return (
    <section>
      <div className="flex-container-2 mb-24">
        <div className="flex-item">
          <div className="wrapper">
            <h6 className="text-left flex items-center justify-start gap-2">
              <span>
                <EqualizerAudio />
              </span>
              <span>Create Basic Shapes </span>
            </h6>
            <div className="text-wrapper mb-12">
              <h2 className="mt-4 text-lower mb-8">
                <span className="text-[#86868B]">Create Basic Shapes </span>{" "}
                <br />
                Effortlessly
              </h2>
              <h6 className="text-[#86868B] sailec-medium">
                Create fundamental geometric shapes such as spheres, cubes.
              </h6>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img
              src={`/assets/images/create-basic-shape.svg`}
              alt="let's create"
            />
          </div>
        </div>
      </div>
      <div className="flex-container-2 mb-24">
        <div className="flex-item">
          <div className="wrapper">
            <h6 className="text-left flex items-center justify-start gap-2">
              <span>
                <EqualizerAudio />
              </span>
              <span>Modify holes </span>
            </h6>
            <div className="text-wrapper mb-14">
              <h2 className="mt-4 text-lower mb-8">
                <span className="text-[#86868B]">
                  Modify Holes <br /> with{" "}
                </span>{" "}
                Precision
              </h2>
              <h6 className="text-[#86868B] sailec-medium">
                Transform your models with advanced hole modification
                capabilities.
              </h6>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img
              src={`/assets/images/create-basic-shape.svg`}
              alt="let's create"
            />
          </div>
        </div>
      </div>
      <div className="flex-container-2 mb-24">
        <div className="flex-item">
          <div className="wrapper">
            <h6 className="text-left flex items-center justify-start gap-2">
              <span>
                <EqualizerAudio />
              </span>
              <span>Craft edges</span>
            </h6>
            <div className="text-wrapper mb-14">
              <h2 className="mt-4 text-lower mb-8">
                <span className="text-[#86868B]">
                  Perfect Your Edges With <br />
                </span>{" "}
                Ease
              </h2>
              <h6 className="text-[#86868B] sailec-medium">
                Achieve the perfect finish with sophisticated edge modification
                features
              </h6>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img
              src={`/assets/images/create-basic-shape.svg`}
              alt="let's create"
            />
          </div>
        </div>
      </div>
      <div className="flex-container-2 mb-24">
        <div className="flex-item">
          <div className="wrapper">
            <h6 className="text-left flex items-center justify-start gap-2">
              <span>
                <EqualizerAudio />
              </span>
              <span>Innovate via shelling </span>
            </h6>
            <div className="text-wrapper mb-14">
              <h2 className="mt-4 text-lower mb-8">
                Innovate{" "}
                <span className="text-[#86868B]">
                  with <br />
                  Material Shelling.
                </span>
              </h2>
              <h6 className="text-[#86868B] sailec-medium">
                Innovate your designs with the ability to hollow out models.
              </h6>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img
              src={`/assets/images/create-basic-shape.svg`}
              alt="let's create"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
