import React from "react";
import Slider from "react-slick";
import EqualizerAudio from "../shared/EqualizerAudio";

function Products({ products }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
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
        breakpoint: 600,
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
    <section className="product-section mb-8">
      <div className="wrapper text-center">
        <h6 className="flex items-center justify-center gap-2">
          <span>
            <EqualizerAudio />
          </span>
          <span>Design ready models</span>
        </h6>
        <div className="text-wrapper mb-12">
          <h2 className="mt-4 text-lower mb-8">Made in Zenia</h2>
        </div>
      </div>
      {
        <Slider {...settings}>
          {products.map((item) => (
            <div key={item.id}>
              <div
                className="img-container"
                style={{ padding: "0.2rem", borderRadius: "14px" }}
              >
                <img src={item.imgSrc} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      }
    </section>
  );
}

export default Products;
