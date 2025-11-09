import React from "react";
import BG from "../../assets/images/FilmProductionData/BG.png";
import Underline from "../../assets/images/FilmProductionData/Underline.png";
import FilmImage from "../../assets/images/FilmProductionData/FilmImage1.png";
import ExploreArrow from "../../assets/images/FilmProductionData/Arrow.svg";
import CameraLeft from "../../assets/images/FilmProductionData/CameraIcon.svg";
import CameraRight from "../../assets/images/FilmProductionData/CameraIcon2.svg";
import TripodIcon from "../../assets/images/FilmProductionData/Tripode.svg";
import ReelIcon from "../../assets/images/FilmProductionData/ReelIcon.svg";
import { useNavigate } from "react-router-dom";

const FilmProduction = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen  bg-cover bg-center py-16 md:py-24 lg:py-20 overflow-hidden"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Back button  */}
      <div className="absolute top-6 left-6 z-30 flex flex-col items-start space-y-3">
        <button
          onClick={() => navigate(-1)}
          className="flex my-10 items-center gap-2 bg-transparent text-black px-4 py-1.5 rounded-full shadow-md border border-black/20 hover:bg-[#d94e1f] hover:text-white transition text-sm sm:text-base"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Decorative Icons */}
      <img
        src={CameraLeft}
        alt="Camera Left"
        className="absolute left-8 top-[90%] w-10 sm:w-14 md:w-16 opacity-80"
      />
      <img
        src={CameraRight}
        alt="Camera Right"
        className="absolute right-60 bottom-[38%] w-10 sm:w-14 md:w-16 opacity-80"
      />
      <img
        src={TripodIcon}
        alt="Tripod Icon"
        className="absolute bottom-10 right-[10%] w-10 sm:w-14 md:w-16 opacity-80"
      />
      <img
        src={ReelIcon}
        alt="Reel Icon"
        className="absolute top-[25%] right-[10%] w-10 sm:w-14 md:w-16 opacity-80"
      />

      {/* Quote Section */}
      <div className="text-center relative px-3 sm:px-6 md:px-8 mt-10 sm:mt-0">
        <h2 className="text-[#252729] text-lg sm:text-xl md:text-2xl italic leading-snug">
          "Filmmaking is a chance to live many lifetimes." – Robert Altman
        </h2>
        <img
          src={Underline}
          alt="Underline"
          className="mx-auto mt-2 w-40 sm:w-56 md:w-150"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mt-8 px-6 sm:px-10 lg:px-24 w-full">
        {/* Left: Image Card */}

        <div className="bg-white shadow-lg p-1 sm:p-6 rounded-md transform hover:scale-[1.03] transition duration-300">
          <img
            src={FilmImage}
            alt="Film Production"
            className="w-72 h-auto rounded-t-md"
          />
          <p className="text-center py-1 text-[#252729] text-lg">
            Film Production
          </p>
        </div>

        {/* Right: Text Content */}
        <div className="max-w-md text-center md:text-left text-[#252729]">
          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            Who says films are just an escape? We see them as a way to live many
            lives – to feel, to explore, and to tell stories that stay. And with
            each film, we carry new memories and new reasons to keep creating.
          </p>

          <ul className="list-disc text-start list-inside space-y-2 text-sm sm:text-base">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>

          {/* Explore Now */}
          <button className="flex mx-auto flex-col cursor-pointer hover:scale-[1.1] justify-center md:justify-start items-center mt-6 gap-2">
            <p className="text-[#c9502d] font-medium text-base sm:text-lg">
              Explore Now
            </p>
            <img
              src={ExploreArrow}
              alt="Explore Arrow"
              className="w-14 sm:w-20 md:w-22 sm:mt-1 mx-auto md:mx-0"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilmProduction;
