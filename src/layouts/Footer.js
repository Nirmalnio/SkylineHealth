import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import accredited from "../assets/Images/accredited.png";
import { Mail, Phone } from "lucide-react";
import logo from "../assets/Images/image.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-white pt-20">
      {/* Top CTA Section */}
      <div className="flex items-center w-full flex-col justify-center mb-10 gap-y-5">
        <h2 className="text-[42px] text-center font-bold">
          Re-Discover Independence
          <br /> in Your <span className="italic">Own Home</span>.
        </h2>
        {/* <p className="text-lg font-semibold">
          Book a complimentary caring consult
        </p>
        <button className="bg-cyan-50 text-accent text-lg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
          Contact Us
        </button> */}
      </div>

      <div className="bg-white rounded-t-3xl px-8 py-12 max-w-screen-xl mx-auto text-black">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12">
        {/* Column 1 - Company Info */}
        <div className="flex-1 max-w-sm">
          <div className="text-primary-dark text-3xl font-bold mb-6">
            Skyline HealthCare
            <br />
            Solutions Ltd
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Reach out <br />
            to our <em className="italic font-normal">Care Team.</em>
          </h2>
          <p className="mb-6 text-gray-600">
            We're available to support you every day of the year.
          </p>

          <div className="mt-6">
            <p className="mb-3 font-bold text-lg text-primary-dark">Contact Us</p>
            <div className="flex gap-3 mb-4">
              <Mail className="text-primary-dark mt-1" />
              <a
                href="mailto:skylinehealthcaresolutions@outlook.com"
                className="font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                skylinehealthcaresolutions@outlook.com
              </a>
            </div>
            <div className="flex gap-3">
              <Phone className="text-primary-dark mt-1" />
              <a
                href="tel:+447805694560"
                className="font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                +44 7805 694560
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div className="flex-1 max-w-sm">
          <h3 className="text-primary-dark font-bold text-lg mb-6 text-center">Services</h3>
          <div className="flex flex-col sm:flex-row gap-x-8 gap-y-3">
            <div className="space-y-3 flex-1">
              {[
                "Alzheimers",
                "Challenging Behaviour",
                "Complex",
                "Continence",
              ].map((service) => (
                <div key={service}>
                  <a
                    href={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors text-sm block"
                  >
                    {service} Live-in Care
                  </a>
                </div>
              ))}
            </div>
            <div className="space-y-3 flex-1">
              {["Dementia", "End Of Life", "Parkinsons", "Respite"].map(
                (service) => (
                  <div key={service}>
                    <a
                      href={`/services/${service
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors text-sm block"
                    >
                      {service} Live-in Care
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Accredited Image Placeholder */}
          <div className="mt-6">
            <div className="w-full h-32 rounded-lg flex items-center justify-center">
              <img
                src={accredited}
                alt="Accredited Badge"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Column 3 - Socials */}
        <div className="flex-1 max-w-sm flex flex-col items-center lg:items-start">
          <div className="text-center w-full">
            <h3 className="text-primary-dark font-bold text-lg mb-6">Socials</h3>
            <div className="flex gap-4 justify-center lg:justify-center mb-8">
              {[
                { Icon: FaFacebook, href: "#", label: "Facebook" },
                { Icon: FaInstagram, href: "#", label: "Instagram" },
              ].map(({ Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="border-2 border-primary-dark rounded-full p-3 hover:bg-primary-dark hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-primary-dark" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Logo Image Placeholder */}
          <div className="w-full items-center flex justify-center">
            <div className="w-[250px] h-[250px] flex items-center justify-center">
              <img src={logo} alt="Skyline HealthCare Logo" className="h-full w-full rounded-full border-[8px] border-primary-dark" />
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Bottom Copyright */}
      <div className="text-sm flex flex-col sm:flex-row justify-between items-center px-8 py-6 border-t border-white/20 max-w-screen-xl mx-auto">
        <span className="mb-2 sm:mb-0">
          © 2025 Nirmal Technologies. All Rights Reserved.
        </span>
        <a href="#" className="underline hover:no-underline transition-all">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;