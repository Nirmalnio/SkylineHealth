import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  User,
  Home,
  Shield,
  Brain,
  MoreHorizontal,
  Activity,
  Pill,
  ArrowRight,
  Menu,
  X,
  MapPin,
  ChevronDown,
} from "lucide-react";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const homeCareServices = [
    {
      name: "Dementia Care",
      description:
        "Compassionate support for those living with memory loss and confusion.",
      icon: <User className="w-5 h-5 text-[#52bed6]" />,
    },
    {
      name: "Alzheimer's Care",
      description: "Specialist care to maintain routine, safety, and comfort at home.",
      icon: <Brain className="w-5 h-5 text-[#52bed6]" />,
    },
    {
      name: "Parkinson’s Care",
      description:
        "Helping clients manage mobility, medication, and daily tasks.",
      icon: <Heart className="w-5 h-5 text-[#52bed6]" />,
    },
    {
      name: "Continence Care",
      description: "Discreet and dignified assistance with bladder and bowel care.",
      icon: <Brain className="w-5 h-5 text-[#52bed6]" />,
    },
  ];

  const nursingCareServices = [
    {
      name: "Complex Care",
      description: "Expert support for individuals with multiple or high-dependency conditions.",
      icon: <Shield className="w-5 h-5 text-[#52bed6]" />,
    },
    {
      name: "Respite Care",
      description: "Short-term live-in care to give family carers a well-earned break.",
      icon: <Home className="w-5 h-5 text-[#52bed6]" />,
    },
    {
      name: "End of Life Care",
      description: "Sensitive, around-the-clock support for clients and their loved ones in their final stages.",
      icon: <Pill className="w-5 h-5 text-[#52bed6]" />,
    },
    {
      name: "Challenging Behaviours Care",
      description: "Skilled care for individuals with behavioural or emotional difficulties.",
      icon: <Pill className="w-5 h-5 text-[#52bed6]" />,
    },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Text */}
        <a href="/" className="flex items-center space-x-2">
          <div className="leading-4">
            <h1 className="text-[#52bed6] font-bold text-lg">
              Skyline HealthCare<sup>®</sup>
            </h1>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-black">
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-black relative">
            {/* Services Dropdown */}
            <li
              className="relative"
              onClick={() => setIsServicesOpen((prev) => !prev)}
            >
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer flex items-center">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </span>

              {/* AnimatePresence allows exit animation */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute -left-80 top-10 mt-2 bg-white shadow-2xl rounded-lg border p-8 flex flex-col items-center space-x-12 z-50 w-[1300px]"
                    style={{gap: '30px'}}
                  >
                    <div className="flex w-[100%]" style={{ gap: '20px' }}>
                    {/* Home Care Services Column */}
                    <div className="flex flex-col space-y-6 w-[25%]">
                      <h3 className="font-semibold text-lg text-gray-800 border-b border-gray-100 pb-2">
                        Live In Care Services
                      </h3>
                      <div className="space-y-4">
                        {homeCareServices.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <div className="flex-shrink-0 mt-1">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800 text-sm">
                                {service.name}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* <button className="flex items-center text-[#52bed6] hover:text-[#52bed6] text-sm font-medium mt-4">
                        <MoreHorizontal className="w-4 h-4 mr-2" />
                        Show all Home Care Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button> */}
                    </div>

                    {/* Nursing Care Services Column */}
                    <div className="flex flex-col space-y-6 w-[25%]">
                      <h3 className="font-semibold text-lg text-gray-800 border-b border-gray-100 pb-2">
                        Live In Care Services
                      </h3>
                      <div className="space-y-4">
                        {nursingCareServices.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <div className="flex-shrink-0 mt-1">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800 text-sm">
                                {service.name}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* <button className="flex items-center text-[#52bed6] hover:text-[#52bed6] text-sm font-medium mt-4">
                        <MoreHorizontal className="w-4 h-4 mr-2" />
                        Show all Nursing Care Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button> */}
                    </div>

                    {/* Right Side Image + Callout */}
                    <div className="relative w-[50%] rounded-lg overflow-hidden shadow-md h-80">
                      <img
                        src="https://www.nurseregistry.com/wp-content/uploads/2023/11/how-to-choose-a-nurse-staffing-agency.jpg"
                        alt="Staffing Support"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 text-white p-6">
                        <div className="bg-[#52bed6] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">
                          Staffing Support
                        </h4>
                        <p className="text-sm opacity-90 mb-4">
                          We can help with staffing shortages
                        </p>
                      </div>
                    </div>
                    </div>
                    <p>We are open 24/7, speak to our care team now <span className="text-[#52bed6]">+44 7805 694560</span></p>
                  </motion.div>
                )}
              </AnimatePresence>
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
              <a
                href="/franchising"
                className="text-gray-600 hover:text-gray-800"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="flex items-center px-4 py-2 rounded-full border border-[#52bed6] text-[#52bed6] font-medium hover:bg-pink-50 transition">
            <MapPin className="w-4 h-4 mr-2" />
            Find a Location
          </button>
          <button className="flex items-center px-4 py-2 rounded-full bg-[#52bed6] text-white font-medium hover:bg-[#52bed6] transition">
            {/* <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div> */}
            Call +44 7805 694560
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={28} className="text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto"
          >
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
                <X size={28} />
              </button>
            </div>

            <div className="space-y-6 text-lg">
              <div>
                <button
                  className="flex items-center justify-between w-full font-semibold"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services <span>{isServicesOpen ? "▲" : "▼"}</span>
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      className="ml-4 mt-4 space-y-4"
                    >
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-800">
                          Live In Care Services
                        </h4>
                        {homeCareServices.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 text-sm text-gray-600"
                          >
                            {service.icon}
                            <span>{service.name}</span>
                          </div>
                        ))}
                        {nursingCareServices.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 text-sm text-gray-600"
                          >
                            {service.icon}
                            <span>{service.name}</span>
                          </div>
                        ))}
                      </div>
                      {/* <div className="space-y-4 mt-6">
                        <h4 className="font-medium text-gray-800">
                          Nursing Care Services
                        </h4>
                        {nursingCareServices.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 text-sm text-gray-600"
                          >
                            {service.icon}
                            <span>{service.name}</span>
                          </div>
                        ))}
                      </div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/resources" className="block font-semibold">
                Funding
              </a>
              <a href="/abou-ust" className="block font-semibold">
                About
              </a>
              <a href="/franchising" className="block font-semibold">
                Contact Us
              </a>

              <div className="mt-8 space-y-4">
                <button className="w-full border border-[#52bed6] rounded-full py-3 text-[#52bed6] font-medium flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find a Location
                </button>

                <button className="w-full bg-[#52bed6] text-white font-semibold py-3 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Call 1-877-588-8609
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom banner - matching the "We are open 24/7" from the image */}
      {/* <div className="hidden md:block fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 z-40">
        <div className="flex items-center justify-center space-x-4 text-sm">
          <span className="text-gray-700">
            We are open 24/7, speak to our care team now
          </span>
          <a
            href="tel:1-877-588-8609"
            className="text-[#52bed6] font-semibold hover:text-[#52bed6]"
          >
            1-877-588-8609
          </a>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
