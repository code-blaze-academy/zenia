import React from "react";
import HeroSection from "./HeroSection";
import CreateLayout from "./CreateLayout";
import CADForDesigners from "./CADForDesigners";

function Home(props) {
  return (
    <div calssName="home-section">
      <HeroSection />
      <CreateLayout />
      <CADForDesigners />
    </div>
  );
}

export default Home;
