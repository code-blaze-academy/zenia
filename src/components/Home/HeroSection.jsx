import React from "react";
import { Link } from "react-router-dom";

function HeroSection(props) {
  return (
    <section className="hero-section">
      <h1>Transform Your 3D Modeling Experience with MOD</h1>
      <h5>
        Effortlessly generate and refine geometric shapes, perform advanced
        modifications
      </h5>
      <Link to="/record">
        <button>start rcording</button>
      </Link>
      <div className="img-container">
        <img src={`/assets/banner-img.svg`} alt="hero banner" />
      </div>
    </section>
  );
}

export default HeroSection;
