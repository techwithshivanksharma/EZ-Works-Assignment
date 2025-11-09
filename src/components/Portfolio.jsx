// src/components/Portfolio.jsx
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BG from "../assets/images/PortfolioImg/BG.png";
import CameraIcon from "../assets/images/PortfolioImg/CamGroup.svg";
import MandalaLeft from "../assets/images/PortfolioImg/Vector2.png";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-full relative flex flex-col items-center justify-center py-20 px-6 bg-[#FDDDC1] overflow-hidden"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-6 left-2">
        <p
          className="text-xm sm:text-2xl font-semibold italic tracking-wide
             text-transparent bg-clip-text 
             bg-linear-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B]
             border border-[#FBBF24]/50 px-4 py-1 rounded-full 
             shadow-[0_0_20px_rgba(251,191,36,0.3)]
             backdrop-blur-sm font-['Playfair_Display']
             hover:scale-105 transition-all duration-500 ease-out"
        >
          Portfolio
        </p>
      </div>
      {/* Decoration bottom-right */}
      <img
        src={MandalaLeft}
        alt="Mandala Left"
        className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-64 opacity-80 pointer-events-none"
      />
      {/*Camera Logo */}
      <img
        src={CameraIcon}
        alt="Camera"
        className="hidden lg:block absolute right-5 lg:right-12 top-1/2 transform -translate-y-1/2 w-28 md:w-36 opacity-90 z-20"
      />

      <div className="text-center mb-8 z-30">
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#4B2E05] inline-block px-6 py-2 rounded-md bg-white/40 backdrop-blur-sm shadow-sm">
          The Highlight Reel
        </h2>
        <p className="mt-4 text-gray-700 italic">
          Watch the magic we’ve captured.
        </p>
      </div>

      {/* Film Frame */}
      <div className="relative w-full max-w-2xl flex items-center justify-center z-30">
        {/* Left Arrow */}
        <button className="absolute left-0 sm:-left-10 bg-white/70 hover:bg-white/90 p-3 rounded-full shadow-md transition z-40">
          <FaChevronLeft className="text-gray-700 text-xl" />
        </button>

        {/* Film Strip Frame */}
        <div
          className="relative bg-white rounded-md shadow-lg overflow-hidden"
          style={{
            border: "24px solid #ebe8e5", // thick light border to simulate film frame mat
            maxWidth: "820px",
            width: "100%",
          }}
        >
          {/* Video area */}
          <div className="relative aspect-video w-full max-w-[770px] mx-auto flex items-center justify-center">
            {/* 🎬 Example embedded YouTube video */}
            <iframe
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded border-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 sm:-right-10 bg-white/70 hover:bg-white/90 p-3 rounded-full shadow-md transition z-40">
          <FaChevronRight className="text-gray-700 text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
