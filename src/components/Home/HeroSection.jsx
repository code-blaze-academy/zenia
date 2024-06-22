import React from "react";
import { Link } from "react-router-dom";

function HeroSection(props) {
  return (
    <section className="hero-section">
      <h1>Create and Modify 3D Models with Voice Commands</h1>
      <h5>
        Effortlessly generate and refine geometric shapes, perform advanced
        modifications
      </h5>

      <Link className="btn-container" to="/record">
        <button className="cta-btn">get started</button>
      </Link>
      <div className="img-container">
        <img src={`/assets/banner-img.svg`} alt="hero banner" />
      </div>
    </section>
  );
}

export default HeroSection;
