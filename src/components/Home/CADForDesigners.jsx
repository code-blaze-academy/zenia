import React from "react";
import Slider from "react-slick";
import EqualizerAudio from "../shared/EqualizerAudio";
import Card from "./cardsamples/Card";
import { CardData } from "./cardsamples/CardData";

function CADForDesigners(props) {
  // console.log(CardData);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 500,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section>
      <div className="wrapper">
        <h6 className="text-left flex items-center justify-start gap-2">
          <span>
            <EqualizerAudio />
          </span>
          <span>Shape Your Imagination </span>
        </h6>
        <div className="text-wrapper mb-12">
          <h2 className="mt-4 text-lower mb-8">
            <span className="text-[#86868B]">AI tool made for </span> <br />
            CAD designers
          </h2>
          <h6 className="text-[#86868B] sailec-medium">
            Effortlessly bring your designs to life with our AI tool,
            <br /> specifically crafted for CAD designers.
          </h6>
        </div>
      </div>
      <div className="card-section">
        {/* <Card /> */}
        {
          <Slider {...settings}>
            {CardData.map((item) => (
              <div key={item.id}>
                <Card
                  title={item.title}
                  caption={item.caption}
                  type={item.type}
                />
              </div>
            ))}
          </Slider>
        }
      </div>
    </section>
  );
}

export default CADForDesigners;
