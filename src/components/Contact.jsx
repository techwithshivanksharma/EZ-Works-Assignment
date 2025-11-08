import React from "react";
import BG from "../assets/images/ContactImg/BG.png";
import VFilms from "../assets/images/ContactImg/VFilms Logo.png";
import MandalaLeft from "../assets/images/ContactImg/Vector2.png";
import MandalaRight from "../assets/images/ContactImg/Vector1.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //const apiUrl = import.meta.env.VITE_API_URL;

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.phone || !data.message) {
      toast.error("Please fill all required fields.", {
        position: "top-center",
      });
      return;
    }

    if (!emailValidation.test(data.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }

    //API Call
    try {
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log(await response.json());

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-center",
        });
        setData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong! Please try again later.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Network error!", { position: "top-center" });
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 bg-[#FDDDC1] overflow-hidden"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Toast Container */}
      <ToastContainer
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
      />
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
          Contact&nbsp;Us
        </p>
      </div>

      {/* Mandala Left */}
      <img
        src={MandalaLeft}
        alt="Mandala Left"
        className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-64 opacity-80 pointer-events-none"
      />

      {/* Mandala Right */}
      <img
        src={MandalaRight}
        alt="Mandala Right"
        className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 opacity-80 pointer-events-none"
      />

      {/* Left Section */}
      <div className="relative z-10 max-w-lg text-center md:text-left mb-12 md:mb-12">
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’s just a message away.
          <br />
          Let’s catch up over coffee ☕.
          <br />
          Great stories always begin with a good conversation.
        </p>
      </div>

      {/* Right Section (Heading + Form) */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:mr-15">
        {/* Heading above form */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Join the Story
          </h2>
          <p className="text-gray-700">
            Ready to bring your vision to life? Let’s talk.
          </p>
        </div>

        {/* White Form Box */}
        <div className="w-[80%]  rounded-lg p-6 sm:p-4">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Your name*"
              className="border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Your email*"
              className="border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              rows="4"
              name="message"
              value={data.message}
              onChange={handleChange}
              placeholder="Your message*"
              className="border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-600 text-white py-2 rounded-full hover:bg-orange-700 transition duration-300"
            >
              Submit
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-700">
            <p>
              <a
                href="mailto:vernita@varnanfilms.co.in"
                className="text-orange-600"
              >
                vernita@varnanfilms.co.in
              </a>{" "}
              | +91 98736 84567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
