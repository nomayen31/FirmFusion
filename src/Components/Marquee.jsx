import React from "react";

const Marquee = () => {
  return (
    <>
      <style>
        {`
          .marquee-text {
            display: inline-block;
            white-space: nowrap;
            animation: marquee-scroll 20s linear infinite;
            padding: 1rem 0;
            position: relative;
            left: 100%;
          }

          .marquee-text:hover {
            animation-play-state: paused;
          }

          @keyframes marquee-scroll {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <div className="overflow-hidden">
        <div 
          className="text-5xl font-extrabold tracking-wider marquee-text drop-shadow-lg"
          style={{ color: "#162556" }}
        >
          🚀 Find Your Dream Job Today | 💼 IT & Software Jobs | 📊 Marketing & Sales Careers | 🌍 Remote & Freelance Opportunities | 🔥 1000+ Openings Updated Daily | ✅ Apply Now & Get Hired Fast
        </div>
      </div>
    </>
  );
};

export default Marquee;
