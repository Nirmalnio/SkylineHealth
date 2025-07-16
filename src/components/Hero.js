// import React from 'react';

// const Hero = () => {
//   return (
//     <div className="bg-cover bg-center h-screen" style={{backgroundImage: "url('/hero-image.jpg')"}}>
//       <div className="container mx-auto px-4 h-full flex items-center">
//         <div className="text-white max-w-lg">
//           <h1 className="text-5xl font-bold mb-4 text-black">Happier Aging</h1>
//           <p className="text-xl mb-8 text-black">Nurse Next Door provides compassionate, reliable and flexible senior home care services.</p>
//           <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg">Get a Free Consult</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://www.goodhire.com/static/f7bed1d034eb070a5a8d562c3a12dd7c/Article-caregiver-background-checks.png')",
      }}
    >
      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div
          className="text-white max-w-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Happier Aging
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Nurse Next Door provides compassionate, reliable and flexible senior home care services.
          </motion.p>
          <motion.button
            className="bg-[#52bed6] text-white px-8 py-4 rounded-full text-lg hover:bg-[#45a6bb] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Get a Free Consult
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

