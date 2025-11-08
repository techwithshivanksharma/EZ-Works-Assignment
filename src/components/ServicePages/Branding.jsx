import React from "react";
import { useNavigate } from "react-router-dom";
import BG from "../../assets/images/BrandingPageImages/BG.png";
import VFilms from "../../assets/images/BrandingPageImages/VFilms Logo.png";
import Underline from "../../assets/images/BrandingPageImages/Underline.png";
import BrandingImage from "../../assets/images/BrandingPageImages/Frame 17.png";
import ExploreArrow from "../../assets/images/BrandingPageImages/Arrow.svg";
import IconStar from "../../assets/images/BrandingPageImages/Vector1.svg";
import IconBadge from "../../assets/images/BrandingPageImages/Vector2.svg";
import IconMedia from "../../assets/images/BrandingPageImages/Vector3.svg";

const Branding = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-start items-center text-[#252729] overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 pt-24 pb-16"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* ============ Top Left: VFilms Logo & Back Button ============ */}
      <div className="absolute top-6 left-6 flex flex-col items-start gap-3 z-30">
        {/* Back Button */}
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

      {/* ============ Quote Section ============ */}
      <div className="text-center relative mt-16 sm:mt-5 ">
        <h2 className="text-[#252729] text-base sm:text-lg md:text-2xl italic font-medium max-w-3xl mx-auto leading-relaxed">
          "A brand is a voice, and a product is a souvenir." – Lisa Gansky
        </h2>
        <img
          src={Underline}
          alt="Underline"
          className="mx-auto mt-2 w-100 sm:w-100 md:w-150"
        />
      </div>

      {/* ============ Main Content Section ============ */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-8 w-full">
        {/* Left Side - Image Card */}
        <div className="relative">
          {/* Image Card with Border */}
          <div className="border-2 p-5 border-[#4B6FAE]  rounded-md overflow-hidden bg-white shadow-md hover:shadow-xl transition">
            <img
              src={BrandingImage}
              alt="Branding"
              className="w-72 sm:w-80 md:w-66 h-auto"
            />
            <p className="text-center py-2 text-[#252729] font-semibold text-lg">
              Branding
            </p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="max-w-md text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            A brand isn’t just what you see – it’s what you remember, what you
            carry home, and what you trust. We shape brands that people
            remember, return to, and fall in love with.
          </p>

          <p className="text-[#252729] font-semibold mb-2">V creates:</p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-left">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </ul>

          {/* Explore Now Button */}
          <div className="flex mx-auto flex-col cursor-pointer hover:scale-[1.1] justify-center md:justify-start items-center mt-6 gap-2">
            <span className="text-[#C9502D] font-medium text-base sm:text-lg">
              Explore Now
            </span>
            <img
              src={ExploreArrow}
              alt="Explore Arrow"
              className="w-16 sm:w-20 md:w-24"
            />
          </div>
        </div>
      </div>

      {/* ============ Decorative Icons ============ */}
      {/* Bottom-left Icon */}
      <img
        src={IconBadge}
        alt="Badge Icon"
        className="absolute bottom-2 left-10 w-10 sm:w-12 md:w-14 opacity-80"
      />
      {/* Bottom-right Icon */}
      <img
        src={IconMedia}
        alt="Media Icon"
        className="absolute bottom-32 right-18 w-10 sm:w-12 md:w-14 opacity-80"
      />
      {/* Top-right Icon */}
      <img
        src={IconStar}
        alt="Star Icon"
        className="absolute top-30  right-20 w-10 sm:w-12 md:w-14 opacity-80"
      />
    </section>
  );
};

export default Branding;
