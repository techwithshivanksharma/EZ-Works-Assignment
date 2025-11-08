import React from "react";
import bgImage from "../assets/images/Hero/BG.png";
import mandala from "../assets/images/Hero/Hero Mandala.png";
import VFilms from "../assets/images/Hero/VFilms Logo.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center mt-0 p-6 md:px-20"
      style={{
        backgroundColor: "#fef5f1",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-90 hidden md:block">
        <div className="relative ">
          <img
            src={mandala}
            alt="Mandala Pattern"
            className="w-100 opacity-70 ml-10"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-semibold">
            <img src={VFilms} alt="V films logo" className="w-60" />
          </h1>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="relative max-w-3xl mt-10  md:mt-0 md:ml-[450px] text-center md:text-left px-6 md:px-0">
        <h2
          className="text-3xl text-center md:text-4xl font-light italic mb-7 leading-snug"
          style={{ color: "#0F3255", fontFamily: "'Playfair Display', serif" }}
        >
          Varnan is where stories find <br className="hidden md:block" /> their
          voice and form
        </h2>
        <p
          className="text-lg text-center md:text-xl mt-15 font-medium tracking-wide mb-3"
          style={{ color: "#F15D2B" }}
        >
          Films · Brands · Art
        </p>

        <p className="text-gray-700 mt-10 text-sm md:text-xs py-10 mx-auto text-center max-w-sm leading-relaxed">
          Since 2008, V has been telling stories — stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way — by listening with intention. V believes that true
          narration can give the unseen a voice to capture what truly matters. V
          doesn’t just tell stories — V honors them.
        </p>
      </div>
    </section>
  );
};

export default Hero;
