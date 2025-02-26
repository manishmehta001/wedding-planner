import React from "react";
import ImageSlider from "../components/ImageSlider";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="pt-32">
      {/* <h1 className="text-4xl font-bold mb-5">Our Wedding Showcase</h1> */}
      <ImageSlider />
      <HeroSection />
    </div>
  );
};

export default Home;
