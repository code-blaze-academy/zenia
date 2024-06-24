import React from "react";
import HeroSection from "./HeroSection";
import CreateLayout from "./CreateLayout";
import CADForDesigners from "./CADForDesigners";
import Services from "./Services";
import Workflow from "./Workflow";
import Products from "./Products";
import Ourcommunity from "./Ourcommunity";
import Experience from "./Experience";

function Home({ products }) {
  return (
    <div calssName="home-section">
      <HeroSection />
      <CreateLayout />
      <CADForDesigners />
      <Services />
      <Workflow />
      <Products products={products} />
      <Experience />
      <Ourcommunity />
    </div>
  );
}

export default Home;
