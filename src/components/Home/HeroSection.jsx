import React from "react";
import { Link } from "react-router-dom";

function HeroSection(props) {
  return (
    <section className="hero-section">
      <h1
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Create and Modify 3D Models with Voice Commands
      </h1>
      <h5>
        Effortlessly generate and refine geometric shapes, perform advanced
        modifications
      </h5>

      <Link className="btn-container" to="/register">
        <button
          className="cta-btn"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          get started
        </button>
      </Link>
      <div className="img-container">
        <img src={`/assets/banner-img.svg`} alt="hero banner" />
      </div>
    </section>
  );
}

export default HeroSection;
