import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/Images/hero4.jpg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-primary-light to-white px-6 py-10 flex flex-col lg:flex-row gap-10 items-center">
      {/* Left Content */}
      <motion.div
        className="flex flex-col gap-6 w-full lg:w-[45%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] leading-tight">
          <span className="font-bold">
            Personalized
            <br /> Live-In
          </span>{" "}
          <span className="italic font-normal">
            Care <br /> Services
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:w-[70%]">
          We go beyond traditional home care by matching you with your ideal
          Carer, providing personalised live-in care and offering 24/7 support,
          giving you complete peace of mind.
        </p>

        <div className="flex items-center gap-3 p-4">
          <div className="flex items-center justify-center gap-3 p-4 rounded-full bg-cyan-light w-[200px] h-[75px] shadow-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
              alt="Google Logo"
              className="w-8 h-8"
            />
            <div className="flex flex-col items-start">
              <div className="flex gap-1 text-primary-dark text-xl">
                {Array(5)
                  .fill("★")
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>
              <a
                href="https://maps.app.goo.gl/fyTc1jNdjVBxqYDbA"
                className="text-primary-dark text-sm font-semibold underline hover:text-primary-darker"
              >
                Google Reviews
              </a>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap w-[200px] h-[75px]">
            <a
              href="/contact-us"
              className="bg-accent flex items-center justify-center w-full h-full text-white py-2 px-6 rounded-full font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Image with Faded Corners */}
      <motion.div
        className="relative w-full lg:w-[55%]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <img
            src={hero}
            alt="hero"
            className="rounded-xl w-full h-[350px] sm:h-[500px] lg:h-[650px] object-cover object-center"
            style={{
              objectPosition: 'center 35%', // Adjust this to center the faces vertically
              maskImage: `
                radial-gradient(ellipse at top left, transparent 0%, black 40%),
                radial-gradient(ellipse at top right, transparent 0%, black 10%),
                radial-gradient(ellipse at bottom left, transparent 0%, black 40%),
                radial-gradient(ellipse at bottom right, transparent 0%, black 40%),
                linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
                linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
              `,
              maskComposite: 'intersect',
              WebkitMaskImage: `
                radial-gradient(ellipse at top left, transparent 0%, black 40%),
                radial-gradient(ellipse at top right, transparent 0%, black 10%),
                radial-gradient(ellipse at bottom left, transparent 0%, black 40%),
                radial-gradient(ellipse at bottom right, transparent 0%, black 40%),
                linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
                linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
              `,
              WebkitMaskComposite: 'source-in'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;