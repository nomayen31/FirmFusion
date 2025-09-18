import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Slider.css"; // custom overrides

const slides = [
  {
    img: "/image/slide1.jpeg",
    title: "Elevate Your Digital Experience",
    desc:
      "Explore cutting-edge solutions and seamless design that will transform your project. We're here to help you build something amazing.",
    btn: "Get Started",
  },
  {
    img: "/image/slide2.jpg",
    title: "Build Brands That Stand Out",
    desc:
      "From strategy to execution, we deliver innovative solutions to help you grow your business in the digital world.",
    btn: "Discover More",
  },
  {
    img: "/image/slide3.jpg",
    title: "Transform Ideas Into Reality",
    desc:
      "We turn your vision into functional, scalable, and beautiful digital products.",
    btn: "Work With Us",
  },
];

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  const sliderRef = useRef(null);

  return (
    <div className="bg-white overflow-x-hidden">
      <section className="w-full min-h-screen flex items-center justify-center bg-transparent pt-6 sm:pt-10">
        {/* 90% viewport size, rounded, centered */}
        <div className="relative w-[90vw] h-[90vh] rounded-[32px] md:rounded-[44px] overflow-hidden shadow-2xl">
          <AutoplaySlider
            ref={sliderRef}
            play
            interval={5000}
            cancelOnInteraction={false}
            bullets
            organicArrows={false}
            style={{ height: "100%", width: "100%", background: "transparent" }}
            className="awssld h-full slider-hero"
          >
            {slides.map((s, i) => (
              <div key={i} className="relative h-full w-full">
                {/* FULL image */}
                <img
                  src={s.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Left-aligned content */}
                <div className="relative z-20 h-full w-full flex items-center justify-start px-8 md:px-16">
                  <div className="text-white max-w-4xl text-left">
                    <span className="inline-block text-[10px] sm:text-xs md:text-sm tracking-widest uppercase bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-4">
                      HIRE TOP TALENT, FASTER
                    </span>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-2">
                      Advanced Workforce
                    </h1>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
                      Recruitment & HR Services
                    </h2>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8">
                      Excellence
                    </h3>

                    <p className="text-base sm:text-lg md:text-xl font-light text-gray-100/90 mb-8">
                      {s.desc}
                    </p>

                    <button className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </AutoplaySlider>
        </div>
      </section>
    </div>
  );
};

export default Slider;
