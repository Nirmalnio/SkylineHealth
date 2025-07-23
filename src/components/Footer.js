import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#52bed6] text-white pt-20">
      {/* Top CTA Section */}
      <div className="flex items-center w-full flex-col justify-center mb-10 gap-y-5">
        <p className="text-lg font-semibold">
          Book a complimentary caring consult
        </p>
        <button className="bg-cyan-50 text-[#52bed6] text-lg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
          Contact Us
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white rounded-t-3xl px-8 py-12 max-w-screen-xl mx-auto text-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1 - Company Info */}
          <div className="lg:col-span-4">
            <div className="text-[#52bed6] text-3xl font-bold mb-6">
              Skyline HealthCare
              <br />
              Solutions
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Reach out <br />
              to our <em className="italic font-normal">Care Team.</em>
            </h2>
            <p className="mb-6 text-gray-600">
              We're available to support you every day of the year.
            </p>

            <div className="mt-6">
              <p className="mb-3 font-bold text-lg text-[#52bed6]">Location</p>
              <div className="mb-4">
                <span className="font-semibold text-gray-700">
                  107 Heron Way, Torquay, Devon, TQ2 7SU
                </span>
              </div>
              <button className="bg-[#52bed6] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#45a5bb] transition-colors">
                <a href="https://maps.app.goo.gl/rwEFLfLfWKHi8Zu99?g_st=ic">
                  Find a Location <span className="ml-2">→</span>
                </a>
              </button>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="lg:col-span-4">
            <h3 className="text-[#52bed6] font-bold text-lg mb-6">Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
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
                      className="text-gray-700 hover:text-[#52bed6] transition-colors text-sm"
                    >
                      {service} Live-in Care
                    </a>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["Dementia", "End Of Life", "Parkinsons", "Respite"].map(
                  (service) => (
                    <div key={service}>
                      <a
                        href={`/services/${service
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-gray-700 hover:text-[#52bed6] transition-colors text-sm"
                      >
                        {service} Live-in Care
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.1411976753093!2d-3.5586472!3d50.49432979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486d0f00058f47c7%3A0x54071a8e8caa7f11!2sSkyline%20Health%20Care%20Solutions%20Ltd!5e0!3m2!1sen!2sin!4v1753285372235!5m2!1sen!2sin"
                width="100%"
                height="150"
                className="rounded-xl shadow-md border-2 border-gray-200"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 3 - Socials */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="text-center lg:text-left">
              <h3 className="text-[#52bed6] font-bold text-lg mb-6">Socials</h3>
              <div className="flex gap-4 justify-center lg:justify-end">
                {[
                  { Icon: FaFacebook, href: "#" },
                  { Icon: FaInstagram, href: "#" },
                  { Icon: FaYoutube, href: "#" },
                  { Icon: FaLinkedin, href: "#" },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="border-2 border-[#52bed6] rounded-full p-3 hover:bg-[#52bed6] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={`Social link ${idx + 1}`}
                  >
                    <Icon className="text-[#52bed6] hover:text-white w-5 h-5" />
                  </a>
                ))}
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
