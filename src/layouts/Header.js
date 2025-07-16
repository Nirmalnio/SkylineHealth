// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         <div className="flex items-center">
//           <img src="/logo.png" alt="Nurse Next Door logo" className="h-12" />
//         </div>
//         <nav className="hidden md:flex space-x-8">
//           <a href="/" className="text-gray-600 hover:text-gray-800">Home Care</a>
//           <a href="/" className="text-gray-600 hover:text-gray-800">Nursing Care</a>
//           <a href="/" className="text-gray-600 hover:text-gray-800">About Us</a>
//           <a href="/" className="text-gray-600 hover:text-gray-800">Franchising</a>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <a href="/" className="text-gray-600 hover:text-gray-800">1-877-588-8609</a>
//           <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Free Care Consult</button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.png" alt="Logo" className="h-10" /> */}
        <div>
          <a href="/">
          <h1 className="text-[#52bed6] font-bold text-lg">
            Skyline HealthCare<sup>®</sup>
          </h1>
          </a>
          <p className="text-sm text-gray-500 -mt-1">home care services</p>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-black">
        <li className="cursor-pointer"><a href="/home-care" className="text-gray-600 hover:text-gray-800">Home Care</a></li>
        <li className="cursor-pointer"><a href="/" className="text-gray-600 hover:text-gray-800">Nursing Care</a></li>
        <li className="cursor-pointer"><a href="/about-us" className="text-gray-600 hover:text-gray-800">About Us</a></li>
        <li className="cursor-pointer"><a href="/" className="text-gray-600 hover:text-gray-800">Franchising</a></li>
      </ul>

      {/* Right: CTA Buttons */}
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 rounded-full border border-[#52bed6] text-[#52bed6] font-medium hover:bg-pink-50 transition">
          {/* <FaMapMarkerAlt className="mr-2" /> */}
          Call 1-877-588-8609
        </button>
        <button className="flex items-center px-4 py-2 rounded-full bg-[#52bed6] text-white font-medium hover:bg-[#2f6c7a] transition">
          {/* <FaPhoneAlt className="mr-2" /> */}
          Free Care Consult
          {/* <FaArrowRight className="ml-2" /> */}
        </button>
      </div>
    </nav>
  );
};

export default Header;
