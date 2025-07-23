// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center h-screen"
//       style={{
//         // backgroundImage:
//         //   "url('https://www.goodhire.com/static/f7bed1d034eb070a5a8d562c3a12dd7c/Article-caregiver-background-checks.png')",
//       }}
//     >
//       {/* Overlay (optional for readability) */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       <div className="container mx-auto px-4 h-full flex items-center relative z-10">
//         <motion.div
//           className="text-white max-w-lg"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1
//             className="text-5xl font-bold mb-4"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             Personalised Live-In Care Services
//           </motion.h1>
//           <motion.p
//             className="text-xl mb-8"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             We go beyond traditional home care by carefully matching you with
//             the ideal live-in carer. You’ll receive personalised, 24/7 support
//             tailored to your needs, along with round-the-clock assistance and
//             peace of mind for you and your loved ones.
//           </motion.p>
//           <motion.button
//             className="bg-accent text-white px-8 py-4 rounded-full text-lg hover:bg-accent-dark transition"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Get a Free Consult
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/Images/hero2.png";

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
          We go beyond home care by matching you with your perfect Caregiver,
          providing personalized care and offering 24/7 live support to give
          you peace of mind.
        </p>

        

        {/* <p className="font-semibold">400+ locations in 4 countries</p> */}

        <div className="flex items-center gap-3 p-4 rounded-full bg-accent-light w-fit shadow-md">
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
              href="#"
              className="text-primary-dark text-sm font-semibold underline hover:text-primary-darker"
            >
              Google Reviews
            </a>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-accent text-white py-2 px-6 rounded-full font-semibold">
            Contact Us
          </button>
          {/* <button className="bg-accent text-white py-2 px-6 rounded-full font-semibold">
            Careers
          </button> */}
        </div>
      </motion.div>

      {/* Right Image with Overlay Card */}
      <motion.div
        className="relative w-full lg:w-[55%]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={hero}
          alt="hero"
          className="rounded-xl w-full h-[350px] sm:h-[500px] lg:h-[650px] object-cover"
        />

        <motion.div
          className="hidden lg:block absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:bottom-8 lg:left-8 lg:translate-x-0 bg-white/90 p-6 rounded-2xl shadow-lg w-[90%] max-w-md backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 text-primary-dark font-medium mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            We’re open 24/7
          </div>

          {/* Heading */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Where do you <i className="font-normal">need care?</i>
          </h2>

          {/* Input */}
          <div className="flex bg-white rounded-full overflow-hidden border border-gray-200 mb-3">
            <input
              type="text"
              placeholder="Postcode/Town/Street"
              className="flex-grow px-4 py-2 text-sm text-gray-700 outline-none"
            />
            <button className="bg-primary hover:bg-primary-dark text-white px-6 flex items-center justify-center text-sm font-semibold rounded-r-full">
              Find <span className="ml-2">➔</span>
            </button>
          </div>

          {/* Location Button */}
          <button className="w-full flex items-center justify-center gap-2 text-primary-dark font-medium border border-primary rounded-full py-2 hover:bg-primary-light transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12m-9 0a9 9 0 1118 0 9 9 0 01-18 0zm0 0l9 0m0 0l0-9m0 0l0 18"
              />
            </svg>
            Use Current Location
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;