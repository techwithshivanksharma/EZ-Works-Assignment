import React from "react";

// 🖼️ Import your assets here
import BG from "../assets/images/AboutUs/BG.png";
import Mountain from "../assets/images/AboutUs/Mountain.png";
import Card1 from "../assets/images/AboutUs/Card1.png"; // 85+ Projects
import Card2 from "../assets/images/AboutUs/Card2.png"; // 50+ Happy Clients
import Card3 from "../assets/images/AboutUs/Card3.png"; // 10+ Experts Team
import VFilms from "../assets/images/AboutUs/VFilms Logo.png"; // Top-left logo
import OBJECTS from "../assets/images/AboutUs/OBJECTS.png"; // Decorative objects

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="relative w-full min-h-screen bg-[#FFF0E8] py-20 px-6 md:px-16 flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ---- Top Left Logo ---- */}
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
          About&nbsp;Us
        </p>
      </div>

      {/* ---- Main Content Grid ---- */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl gap-10">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2
            className="text-[#0F3255] text-2xl md:text-3xl font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A montage of familiar faces and names.
          </h2>

          <p
            className="text-[#0F3255] text-base md:text-xm leading-relaxed font-light"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Some stories come from the biggest names. Others begin with bold,
            rising voices. We’ve been fortunate to walk alongside both –
            listening, creating, and building stories that matter.
          </p>

          {/* STICKY NOTE CARDS */}
          <div className="flex justify-center md:justify-start items-center mt-20 relative">
            {/* Card 1 */}
            <img
              src={Card1}
              alt="Projects"
              className="w-28 sm:w-32 md:w-50 transform -rotate-1 z-30 relative"
            />

            {/* Card 2 */}
            <img
              src={Card2}
              alt="Happy Clients"
              className="w-28 sm:w-32 md:w-50 transform rotate-1 -ml-8 sm:-ml-10 z-20 relative"
            />

            {/* Card 3 */}
            <img
              src={Card3}
              alt="Experts Team"
              className="w-28 sm:w-32 md:w-50 transform -rotate-1 -ml-8 sm:-ml-10 z-10 relative"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center text-center">
          {/* Quote */}
          <p
            className="text-[#0F3255] italic text-lg md:text-xl max-w-md leading-relaxed mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Every project is more than just a brief — it’s a new chapter waiting
            to be written. Together, we’ve crafted tales that inspire, connect,
            and endure.
          </p>

          {/* Mountain Illustration */}
          <div className="mt-20 md:mt-40">
            <img
              src={Mountain}
              alt="Mountain Illustration"
              className="w-[70%] mx-auto md:w-[80%] lg:w-[90%]"
            />
            <img
              src={OBJECTS}
              alt="Decorative Objects"
              className="absolute  bottom-0 left-20 w-50 md:w-40 lg:w-90 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
