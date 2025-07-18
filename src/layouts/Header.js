import React, { useState } from "react";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-2">
        <div>
          <a href="/">
            {/* <img src="https://www.skylinehealthcaresolutions.co.uk/wp-content/uploads/2025/03/SH-logo.png" className="h-20 w-auto" alt="logo" /> */}
            <h1 className="text-[#52bed6] font-bold text-lg">
              Skyline HealthCare<sup>®</sup>
            </h1>
          </a>
          <p className="text-sm text-gray-500 -mt-1">home care services</p>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-black relative">
        <li className="cursor-pointer">
          <a href="/home-care" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
        </li>

        {/* Services Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
            Services
          </span>

          {/* Dropdown menu */}
          {isServicesOpen && (
            <div className="absolute -left-20 top-10 mt-2 bg-white shadow-xl rounded-lg border p-6 flex space-x-12 z-50 w-[900px]">
              {/* Services Column */}
              <div className="flex flex-col space-y-4 w-1/2">
                <h3 className="font-semibold text-lg">Live-in Care Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <a
                      href="/services/alzheimers"
                      className="hover:text-[#52bed6]"
                    >
                      Alzheimer's Live-in Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/challenging-behaviour"
                      className="hover:text-[#52bed6]"
                    >
                      Challenging Behaviour Live-in Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/complex"
                      className="hover:text-[#52bed6]"
                    >
                      Complex Live-in Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/continence"
                      className="hover:text-[#52bed6]"
                    >
                      Continence Live-in Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/dementia"
                      className="hover:text-[#52bed6]"
                    >
                      Dementia Live-in Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/end-of-life"
                      className="hover:text-[#52bed6]"
                    >
                      End of Life Live-in Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/parkinsons"
                      className="hover:text-[#52bed6]"
                    >
                      Parkinson’s Live-in Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/respite"
                      className="hover:text-[#52bed6]"
                    >
                      Respite Live-in Care
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Side Image + Callout */}
              <div className="relative w-1/2 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZetxZEK9gZl9U8Hs-a8eyfpU2bDoprBRgA&s" // Replace with correct image path
                  alt="Staffing Support"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                  <h4 className="text-lg font-semibold">Staffing Support</h4>
                  <p className="text-sm">We can help with staffing shortages</p>
                </div>
              </div>
            </div>
          )}
        </li>

        <li className="cursor-pointer">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Funding
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="/about-us" className="text-gray-600 hover:text-gray-800">
            About
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right: CTA Buttons */}
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 rounded-full border border-[#52bed6] text-[#52bed6] font-medium hover:bg-pink-50 transition">
          Call 1-877-588-8609
        </button>
        <button className="flex items-center px-4 py-2 rounded-full bg-[#52bed6] text-white font-medium hover:bg-[#2f6c7a] transition">
          Free Care Consult
        </button>
      </div>
    </nav>
  );
};

export default Header;

// import LogoCircle from '../components/LogoCircle';

// const Header = () => {
//   return (
//     <header className="bg-[#002b45] text-white relative z-0">
//       <div className="flex justify-between items-center px-6 py-4">
//         <LogoCircle />
//         <nav className="space-x-6 text-lg font-semibold tracking-widest uppercase">
//           <a href="#">Home</a>
//           <a href="#">About Us</a>
//           <a href="#">Funding</a>
//           <a href="#">Services</a>
//           <a href="#">Contact Us</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
