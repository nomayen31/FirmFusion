import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import slider1 from '../../../public/image/about-us_h3_05.webp'
import slider2 from '../../../public/image/about-us_h3_05.webp'
import slider3 from '../../../public/image/about-us_h3_05.webp'
import Slider from "./Slider";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slides = [
  {
    title: "Elevate Your Digital Experience",
    desc: "Explore cutting-edge solutions and seamless design that will transform your project. We're here to help you build something amazing.",
    btn: "Get Started",
  },
  {
    title: "Build Brands That Stand Out",
    desc: "From strategy to execution, we deliver innovative solutions to help you grow your business in the digital world.",
    btn: "Discover More",
  },
  {
    title: "Transform Ideas Into Reality",
    desc: "We turn your vision into functional, scalable, and beautiful digital products.",
    btn: "Work With Us",
  },
];

const Hero = () => {
  const sliderRef = useRef(null);

  return (
    <div className="bg-black overflow-x-hidden">
      <section
        className="
          w-full min-h-screen bg-white
          flex items-center justify-center
          rounded-b-[96px] md:rounded-b-[140px]
          overflow-hidden shadow-lg
          pt-8 sm:pt-12
        "
      >
       <Slider/>
      </section>
    </div>
  );
};

export default Hero;
