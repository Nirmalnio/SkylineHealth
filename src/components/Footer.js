// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-bold mb-4">Nurse Next Door</h3>
//             <p className="text-gray-400">24/7 Professional In-Home Care Services</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold mb-4">Services</h3>
//             <ul>
//               <li><a href="/" className="text-gray-400 hover:text-white">Home Care</a></li>
//               <li><a href="/" className="text-gray-400 hover:text-white">Nursing Care</a></li>
//               <li><a href="/" className="text-gray-400 hover:text-white">Specialty Care</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold mb-4">Company</h3>
//             <ul>
//               <li><a href="/" className="text-gray-400 hover:text-white">About Us</a></li>
//               <li><a href="/" className="text-gray-400 hover:text-white">Careers</a></li>
//               <li><a href="/" className="text-gray-400 hover:text-white">Franchising</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold mb-4">Connect</h3>
//             <div className="flex space-x-4">
//               <a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
//               <a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
//               <a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center text-gray-500 mt-8">
//           <p>&copy; 2025 Nurse Next Door. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-[#52bed6] text-white pt-20">
      <motion.div
        className="bg-white rounded-t-3xl px-8 py-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 h-full text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Column 1 */}
        <motion.div variants={fadeUp} custom={1} className="col-span-2">
          <div className="flex items-center mb-4 text-4xl">💗</div>
          <h2 className="text-3xl font-semibold mb-2">
            Get Connected <br />
            to our <em className="italic font-normal">Care Team.</em>
          </h2>
          <p className="mb-6">We are here for you 365 days a year.</p>
          <button className="bg-[#52bed6] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2f6c7a] transition">
            Find a Location <span className="ml-2">➜</span>
          </button>

          <div className="mt-6 text-sm text-gray-600">
            <p className="mb-2">Location</p>
            <div className="flex items-center gap-2">
              <img src="https://flagcdn.com/gb.svg" alt="UK" className="h-5" />
              <span className="font-semibold">United Kingdom</span>
            </div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div variants={fadeUp} custom={2}>
          <h3 className="text-[#52bed6] font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Personal Care</li>
            <li>Respite Care</li>
            <li>Post-Operative Care</li>
            <li>Alzheimers and Dementia Care</li>
            <li>In-Home Nursing Care</li>
            <li>Medication Management</li>
            <li className="font-semibold">View all Services</li>
          </ul>
        </motion.div>

        {/* Column 3 */}
        <motion.div variants={fadeUp} custom={3}>
          <h3 className="text-[#52bed6] font-semibold mb-3">Locations</h3>
          <p className="mb-4 text-sm">Find your location</p>

          <h3 className="text-[#52bed6] font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Podcast</li>
            <li>Blog</li>
            <li>Happier aging</li>
            <li>Staffing support</li>
          </ul>

          <h3 className="text-[#52bed6] font-semibold mt-4 mb-2">About</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Careers</li>
          </ul>
        </motion.div>

        {/* Column 4 */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="text-[#52bed6] font-semibold mb-3">Socials</h3>
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="border border-[#52bed6] rounded-full p-2 hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="text-[#52bed6]" />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://t4.ftcdn.net/jpg/04/85/93/57/360_F_485935742_y0unNRYlyCdG4Ut1gcLtfUg4aRt037WG.jpg"
              alt="Franchise"
              className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="absolute z-20 top-4 left-4 text-white">
              <p className="text-sm">Become a Franchisee</p>
              <p className="text-lg font-bold leading-tight">
                Build a Business <br /> with Heart
              </p>
              <p className="mt-2 text-sm font-semibold underline">
                Learn More ➜
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <div className="text-sm flex justify-between items-center px-8 py-4 border-t border-white/30">
        <span>© 2025 Nirmal Technologies. All Rights Reserved.</span>
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
