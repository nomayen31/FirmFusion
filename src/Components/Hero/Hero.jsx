import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div>
      <section
        className="
          w-full min-h-screen bg-white
          flex items-center justify-center
          rounded-b-[96px] md:rounded-b-[140px]
          overflow-hidden shadow-lg
          pt-8 sm:pt-12
        "
      >
        <Slider />
      </section>
      
    </div>
  );
};

export default Hero;
