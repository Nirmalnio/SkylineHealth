import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Text */}
        <a href="/" className="flex items-center space-x-2">
          {/* <img
            src="/logo.png" // replace with actual logo
            alt="Skyline Logo"
            className="h-10 w-auto"
          /> */}
          <div className="leading-4">
            <h1 className="text-[#52bed6] font-bold text-lg">
              Skyline HealthCare<sup>®</sup>
            </h1>
            <p className="text-sm text-gray-500">home care services</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-black">
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-black relative">
            {/* <li className="cursor-pointer">
              <a
                href="/home-care"
                className="text-gray-600 hover:text-gray-800"
              >
                Home
              </a>
            </li> */}

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href='/home-care'>
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Services
              </span>
              </a>

              {/* Dropdown menu */}
              {isServicesOpen && (
                <div className="absolute -left-20 top-10 mt-2 bg-white shadow-xl rounded-lg border p-6 flex space-x-12 z-50 w-[900px]">
                  {/* Services Column */}
                  <div className="flex flex-col space-y-4 w-1/2">
                    <h3 className="font-semibold text-lg">
                      Live-in Care Services
                    </h3>
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
                      <h4 className="text-lg font-semibold">
                        Staffing Support
                      </h4>
                      <p className="text-sm">
                        We can help with staffing shortages
                      </p>
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
        </nav>
          <div className="hidden lg:flex space-x-4">
            <button className="flex items-center px-4 py-2 rounded-full border border-[#52bed6] text-[#52bed6] font-medium hover:bg-pink-50 transition">
              Call 1-877-588-8609
            </button>
            <button className="flex items-center px-4 py-2 rounded-full bg-[#52bed6] text-white font-medium hover:bg-[#2f6c7a] transition">
              Free Care Consult
            </button>
          </div>

        {/* Right: Hamburger on mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <HiOutlineMenuAlt3 size={28} className="text-black" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <a href="/" className="flex items-center space-x-2">
              <div className="leading-4">
                <h1 className="text-[#52bed6] font-bold text-lg">
                  Skyline HealthCare<sup>®</sup>
                </h1>
                <p className="text-sm text-gray-500">home care services</p>
              </div>
            </a>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <RxCross2 size={28} />
            </button>
          </div>

          {/* Dropdowns */}
          <div className="space-y-6 text-lg">
            {/* <a href="/about-us" className="block font-semibold">Home</a> */}
            <div>
              <button
                className="flex items-center justify-between w-full font-semibold"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <span>{isServicesOpen ? "▲" : "▼"}</span>
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-2 text-gray-600" style={{ display: 'flex', flexDirection: 'column' }}>
                  <ul className="flex-col space-y-3">
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
              )}
            </div>

            <a href="/about-us" className="block font-semibold">Funding</a>
            <a href="/about-us" className="block font-semibold">About</a>
            <a href="#" className="block font-semibold">Contact Us</a>

            <div className="mt-6">
              <button className="w-full border border-[#52bed6] rounded-full py-2 text-[#52bed6] font-medium flex items-center justify-center">
                📍 Find a Location
              </button>

              <button className="w-full mt-4 bg-[#52bed6] text-white font-semibold py-3 rounded-full flex items-center justify-center">
                🟢 Call 1-877-588-8609
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
