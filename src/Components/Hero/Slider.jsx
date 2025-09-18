import React, { useState, useEffect } from "react";

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

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <style>{`
        .slider-container {
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
        }
        
        .slider-wrapper {
          display: flex;
          transition: transform 0.5s ease-in-out;
          height: 100%;
          width: ${slides.length * 100}%;
          transform: translateX(-${(100 / slides.length) * currentSlide}%);
        }
        
        .slide {
          flex: 0 0 ${100 / slides.length}%;
          height: 100%;
          position: relative;
        }
        
        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .bullets {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 30;
        }
        
        .bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background-color: white;
          opacity: 0.5;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        
        .bullet:hover {
          opacity: 0.8;
        }
        
        .bullet.active {
          opacity: 1;
        }
      `}</style>
      
      <div className="bg-white overflow-x-hidden">
        <section className="w-full min-h-screen flex items-center justify-center bg-transparent pt-6 sm:pt-10">
          {/* 90% viewport size, rounded, centered */}
          <div className="relative w-[90vw] h-[90vh] rounded-[32px] md:rounded-[44px] overflow-hidden shadow-2xl">
            <div className="slider-container">
              <div className="slider-wrapper">
                {slides.map((s, i) => (
                  <div key={i} className="slide">
                    {/* FULL image */}
                    <img
                      src={s.img}
                      alt=""
                      className="absolute inset-0"
                    />

                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/50 z-10" />

                    {/* Left-aligned content */}
                    <div className="relative z-20 h-full w-full flex items-center justify-start px-8 md:px-16">
                      <div className="text-white max-w-4xl text-left">
                        <span className="inline-block text-[10px] sm:text-xs md:text-sm tracking-widest uppercase bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-4">
                          HIRE TOP TALENT, FASTER
                        </span>

                        {/* Dynamic Title */}
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 text-white">
                          {s.title}
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl font-light text-gray-100/90 mb-8">
                          {s.desc}
                        </p>

                        <button className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                          {s.btn}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bullet Navigation */}
              <div className="bullets">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`bullet ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Slider;
