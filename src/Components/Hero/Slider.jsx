import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "/image/alideravif.avif",
    title: "Elevate Your Digital Experience",
    desc:
      "Explore cutting-edge solutions and seamless design that will transform your project. We're here to help you build something amazing.",
    btn: "Get Started",
  },
  {
    img: "/image/slider2avif.avif",
    title: "Build Brands That Stand Out",
    desc:
      "From strategy to execution, we deliver innovative solutions to help you grow your business in the digital world.",
    btn: "Discover More",
  },
  {
    img: "/image/slider3.avif",
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

  const isArraySlides = Array.isArray(slides);

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
          width: ${isArraySlides ? slides.length * 100 : 0}%;
          transform: translateX(-${(100 / (isArraySlides ? slides.length : 1)) * currentSlide}%);
        }
        
        .slide {
          flex: 0 0 ${isArraySlides ? 100 / slides.length : 0}%;
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
      
      <div className="overflow-x-hidden bg-white">
        <section className="flex items-center justify-center w-full min-h-screen pt-6 bg-transparent sm:pt-10">
          <div className="relative w-[90vw] h-[90vh] rounded-[32px] md:rounded-[44px] overflow-hidden shadow-2xl">
            <div className="slider-container">
              <div className="slider-wrapper">
                {isArraySlides ? (
                  slides.map((s, i) => (
                    <div key={i} className="slide">
                      <img
                        src={s.img}
                        alt=""
                        className="absolute inset-0"
                      />

                      <div className="absolute inset-0 z-10 bg-black/50" />

                      <div className="relative z-20 flex items-center justify-start w-full h-full px-8 md:px-16">
                        <div className="max-w-4xl text-left text-white">
                          <span className="inline-block text-[10px] sm:text-xs md:text-sm tracking-widest uppercase bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-4">
                            HIRE TOP TALENT, FASTER
                          </span>

                          <h1 className="mb-8 text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
                            {s.title}
                          </h1>

                          <p className="mb-8 text-base font-light sm:text-lg md:text-xl text-gray-100/90">
                            {s.desc}
                          </p>

                          <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out transform bg-purple-600 border border-transparent rounded-full shadow-lg group hover:bg-purple-700 hover:scale-105">
                            {s.btn}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="slide">
                    <p>Slides data is not available.</p>
                  </div>
                )}
              </div>

              <div className="bullets">
                {isArraySlides ? (
                  slides.map((_, index) => (
                    <button
                      key={index}
                      className={`bullet ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))
                ) : (
                  <p>No bullets to show.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Slider;
