import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutTeam from "./components/AboutTeam";
import AboutUs from "./components/AboutUs";
import AllServices from "./components/ServicePages/AllServices";
import Portfolio from './components/Portfolio';
import Branding from './components/ServicePages/Branding';
import FilmProduction from './components/ServicePages/FilmProduction'
import ArtCuration from './components/ServicePages/ArtCuration';
import Contact from './components/Contact';


function App() {

  return (
    <>
      {/* Fixed Header */}
      <Header />

      <Routes>
        {/*Homepage Scrollable Sections*/}
        <Route 
          path='/'
          element={
            <main className="pt-0">
              <section id="hero">
                <Hero />
              </section>

              <section id="about-team">
                <AboutTeam />
              </section>

              <section id="about-us">
                <AboutUs />
              </section>

              <section id="services">
                <AllServices />
              </section>

              <section id="portfolio">
                <Portfolio />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </main>
          }
        />  

        {/* Service Detail Routes */}
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/film-production" element={<FilmProduction />} />
        <Route path="/services/art-curation" element={<ArtCuration />} />
      </Routes>
      
    </>
  )
}

export default App
