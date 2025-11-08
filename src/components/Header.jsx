import React, { useState } from "react";
import VFilms from "../assets/images/Hero/VFilms Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-transparent backdrop-blur-md z-50 shadow-sm">
      <div className="flex justify-between items-center py-2 px-6 md:px-16">
        {/*Logo*/}
        <div className="text-2xl font-bold tracking-wide">
          <img 
            src={VFilms} 
            alt="VFilms Logo"
            className="w-20" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="#services" className="hover:text-orange-600 transition">
            Services
          </a>
          <a href="#stories" className="hover:text-orange-600 transition">
            Their Stories
          </a>
          <a href="#ourstory" className="hover:text-orange-600 transition">
            Our Story
          </a>
          <a href="#varnan" className="hover:text-orange-600 transition">
            Varnan
          </a>
          <button className="bg-orange-600 text-white px-5 py-1 rounded-full font-semibold hover:bg-orange-700 transition">
            Let’s Talk
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/*Mobile Menu*/}
      {menuOpen && (
        <div className="md:hidden bg-transparent border-t border-orange-100 shadow-inner transition-all duration-300">
          <nav className="flex flex-col items-center  space-y-4 py-4 text-gray-800 font-medium">
            <a
              href="#services"
              className="hover:text-orange-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#stories"
              className="hover:text-orange-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Their Stories
            </a>
            <a
              href="#ourstory"
              className="hover:text-orange-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#varnan"
              className="hover:text-orange-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Varnan
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              className="bg-orange-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-700 transition"
            >
              Let’s Talk
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
