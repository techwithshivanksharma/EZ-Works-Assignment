import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import AboutTeam from "../components/AboutTeam";
import Service from "../components/ServicePages/AllServices";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutUs />
      <AboutTeam />
      <Service />
    </div>
  );
};

export default Home;
