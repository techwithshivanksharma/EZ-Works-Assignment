import React from "react";
import BG from "../../assets/images/ServiceData/BG.png";
import Border from "../../assets/images/ServiceData/Frame33.svg";
import Underline from "../../assets/images/ServiceData/Underline.png";
import Image1 from "../../assets/images/ServiceData/Image1.png";
import Image2 from "../../assets/images/ServiceData/Image2.png";
import Image3 from "../../assets/images/ServiceData/Image3.png";
import Tape from "../../assets/images/ServiceData/Tape.png";
import { useNavigate } from "react-router-dom";

const AllServices = () => {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="relative min-h-screen bg-[#FFF0E8] py-20 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Name */}
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
          All&nbsp;Services
        </p>
      </div>
      {/* --- Section Title --- */}
      <div className="text-center mb-16 relative z-10">
        <h2
          className="text-[#0F3255] text-2xl md:text-3xl font-semibold leading-snug relative inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The storyboard reveals the breadth of our craft.
        </h2>

        {/* Decorative underline */}
        <div className="flex justify-center mt-2">
          <img
            src={Underline}
            alt="Underline Decoration"
            className="w-100 md:w-100 lg:w-150 object-contain"
          />
        </div>
      </div>

      {/* --- Service Cards Section --- */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 relative z-10">
        {/* Card 1 */}
        <div
          onClick={() => navigate("/services/film-production")}
          className="relative transform rotate-0 hover:rotate-0 transition-transform duration-300"
        >
          <img
            src={Tape}
            alt="Tape"
            className="absolute -top-3 left-18 -translate-x-1/2 w-14 md:w-30 z-20"
          />
          <img
            src={Image3}
            alt="Film Production"
            className="w-56 md:w-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Card 2 */}
        <div
          onClick={() => navigate("/services/branding")}
          className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300"
        >
          <img
            src={Tape}
            alt="Tape"
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 md:w-30 z-20"
          />
          <img
            src={Image2}
            alt="Branding"
            className="w-56 md:w-75 rounded-lg shadow-lg"
          />
        </div>

        {/* Card 3 */}
        <div
          onClick={() => navigate("/services/art-curation")}
          className="relative transform rotate-0 hover:rotate-0 transition-transform duration-300"
        >
          <img
            src={Tape}
            alt="Tape"
            className="absolute -top-3 -right-7 -translate-x-1/2 w-14 md:w-30 z-20 rotate-20"
          />
          <img
            src={Image1}
            alt="Art Curation"
            className="w-56 md:w-80 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* --- Decorative Bottom Border --- */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src={Border}
          alt="Decorative Border"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AllServices;
