import React from "react";
import Card from "../assets/images/AboutTeam/Card.png";
import IndiaGate from "../assets/images/AboutTeam/IndiaGate.png";
import BG from "../assets/images/AboutTeam/BG.png";
import TeamImage from "../assets/images/AboutTeam/TeamImage.png";
import Vector1 from "../assets/images/AboutTeam/Vector1.png";
import Vector2 from "../assets/images/AboutTeam/Vector2.png";
import Vector3 from "../assets/images/AboutTeam/Vector3.png";

const AboutTeam = () => {
  return (
    <section
      id="about-team"
      className="relative min-h-svh bg-[#FFF0E8] py-14 px-4 md:px-20 overflow-hidden"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section name */}
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
          About&nbsp;Team
        </p>
      </div>

      {/* Text Note */}
      <div className="absolute top-24  md:left-20 md:top-0 transform -rotate-3 py-16 w-52 md:w-100 drop-shadow-lg hidden md:block">
        <img src={Card} alt="Sticky Note" className="w-full" />
      </div>

      {/* India Gate Logo*/}
      <div className="absolute bottom-10 left-6 opacity-80  md:block hidden">
        <img src={IndiaGate} alt="India Gate" className="w-30 md:w-58" />
      </div>

      {/* Main Content Area*/}
      <div className="flex flex-col items-center justify-center mt-20 md:ml-60">
        <div className="relative flex justify-center">
          {/* Team Image */}
          <img
            src={TeamImage}
            alt="Team Silhouette"
            className="w-[80%] md:w-[500px] mx-auto"
          />

          {/* For DESKTOP ONLY */}
          <div className="hidden md:flex flex-col absolute -top-14 left-[25%] items-center">
            <span
              className="text-[#0F3255] italic text-base"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Film Makers
            </span>
            <img
              src={Vector2}
              className="w-14 mt-1 rotate-[-10deg]"
              alt="Film Makers Arrow"
            />
          </div>

          <div className="hidden md:flex flex-col absolute top-[40%] -left-32 items-center">

            <img
              src={Vector1}
              className="w-20 rotate-[-10deg] mt-1"
              alt="Branding Experts Arrow"
            />
            <span
              className="text-[#0F3255] italic text-base whitespace-nowrap"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Branding Experts
            </span>
          </div>

          <div className="hidden md:flex flex-col absolute top-[30%] -right-28 items-center">
            <span
              className="text-[#0F3255] italic text-base whitespace-nowrap"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Art Curators
            </span>
            <img
              src={Vector3}
              className="w-16 mt-1"
              alt="Art Curators Arrow"
            />
          </div>
        </div>

        {/* ----------------For MOBILE Screen ---------------- */}
        <div className="flex gap-4 text-center mt-6 md:hidden">
          <span className="text-[#0F3255] italic text-sm">Film Makers</span>
          <span className="text-[#0F3255] italic text-sm">||   Branding Experts</span>
          <span className="text-[#0F3255] italic text-sm">||   Art Curators</span>
        </div>

      
        <div className="text-center mt-20">
          <p
            className="text-[#0F3255] text-lg md:text-xl font-light mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Take a closer look at the stories V bring to life.
          </p>
          <button className="bg-[#F15D2B] text-white px-6 py-2 rounded-full hover:bg-orange-700 transition font-medium shadow-md">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
