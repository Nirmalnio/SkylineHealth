import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import accredited from "../assets/Images/accredited.png";
import { Mail, Phone } from "lucide-react";
import logo from "../assets/Images/image.png";

const liveInCareServices = [
  {
    name: "Dementia & Alzheimer Care",
    description:
      "Compassionate support for those living with memory loss and confusion.",
    link: "/services/dementia-care",
  },
  {
    name: "Challenging Behaviours Care",
    description:
      "Skilled care for individuals with behavioural or emotional difficulties.",
    link: "/services/challenging-behaviours-care",
  },
  {
    name: "Parkinson's Care",
    description:
      "Helping clients manage mobility, medication, and daily tasks.",
    link: "/services/parkinsons-care",
  },
  {
    name: "Continence Care",
    description:
      "Discreet and dignified assistance with bladder and bowel care.",
    link: "/services/continence-care",
  },
];

const liveInCareServices2 = [
  {
    name: "Complex Care",
    description:
      "Expert support for individuals with multiple or high-dependency conditions.",
    link: "/services/complex-care",
  },
  {
    name: "Respite Care",
    description:
      "Short-term live-in care to give family carers a well-earned break.",
    link: "/services/respite-care",
  },
  {
    name: "End of Life Care",
    description:
      "Sensitive, around-the-clock support for clients and their loved ones in their final stages.",
    link: "/services/end-of-life-care",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 sm:pt-16 lg:pt-20">
      {/* Top CTA Section */}
      <div className="flex items-center w-full flex-col justify-center mb-8 sm:mb-10 gap-y-4 sm:gap-y-5 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold leading-tight">
          Re-Discover Independence
          <br /> in Your <span className="italic">Own Home</span>.
        </h2>
      </div>

      <div className="bg-white rounded-t-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 max-w-screen-xl mx-auto text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 - Company Info */}
          <div className="flex flex-col">
            <div className="text-primary text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Skyline HealthCare
              <br />
              Solutions Ltd
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">
              Reach out <br />
              to our <em className="italic font-normal">Care Team.</em>
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
              We're available to support you every day of the year.
            </p>

            <div className="mt-4 sm:mt-6">
              <p className="mb-3 font-bold text-base sm:text-lg text-primary">
                Contact Us
              </p>
              <div className="flex gap-3 mb-4">
                <Mail className="text-primary mt-1 flex-shrink-0 w-5 h-5" />
                <a
                  href="mailto:skylinehealthcaresolutions@outlook.com"
                  className="font-semibold text-sm sm:text-base text-gray-700 hover:text-primary transition-colors break-all"
                >
                  skylinehealthcaresolutions@outlook.com
                </a>
              </div>
              <div className="flex gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0 w-5 h-5" />
                <a
                  href="tel:+447805694560"
                  className="font-semibold text-sm sm:text-base text-gray-700 hover:text-primary transition-colors"
                >
                  +44 7805 694560
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="flex flex-col">
            <h3 className="text-primary font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center md:text-left">
              Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-3">
              <div className="space-y-3">
                {liveInCareServices.map((service) => (
                  <div key={service.name}>
                    <a
                      href={service.link}
                      className="text-gray-700 hover:text-primary transition-colors text-sm block leading-relaxed"
                    >
                      {service.name} Live-in Care
                    </a>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {liveInCareServices2.map((service) => (
                  <div key={service.name}>
                    <a
                      href={service.link}
                      className="text-gray-700 hover:text-primary transition-colors text-sm block leading-relaxed"
                    >
                      {service.name} Live-in Care
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Accredited Image */}
            <div className="mt-6 sm:mt-8">
              <div className="w-full max-w-[400px] mx-auto md:mx-0 h-24 sm:h-32 rounded-lg flex items-center justify-center">
                <img
                  src={accredited}
                  alt="Accredited Badge"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Column 3 - Socials */}
          <div className="flex flex-col items-center lg:items-start md:col-span-2 lg:col-span-1">
            <div className="text-center lg:text-left w-full">
              <h3 className="text-primary font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                Socials
              </h3>
              <div className="flex gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                {[
                  { Icon: FaFacebook, href: "#", label: "Facebook" },
                  { Icon: FaInstagram, href: "#", label: "Instagram" },
                ].map(({ Icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="border-2 border-primary rounded-full p-2.5 sm:p-3 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Logo Image */}
            <div className="w-full flex justify-center lg:justify-start mt-4">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Skyline HealthCare Logo"
                  className="h-full w-full rounded-full border-4 sm:border-6 lg:border-8 border-primary object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-t border-white/20 max-w-screen-xl mx-auto gap-2">
        <span className="text-center sm:text-left">
          © 2025 Skyline HealthCare. All Rights Reserved.
        </span>
        <a 
          href="/privacy-policy" 
          className="underline hover:no-underline transition-all"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;