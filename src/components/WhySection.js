import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const whyData = [
  {
    icon: "💬",
    title: "24/7 Live Support",
    desc: "Need help or have a question? Call us any time — day or night — and speak to a real person in under 30 seconds.",
  },
  {
    icon: "❤️",
    title: "Care for All Ages",
    desc: "From elderly care to everyday support for younger adults, we provide comprehensive care across all age groups.",
  },
  {
    icon: "👩‍⚕️",
    title: "Trusted, Experienced Professionals",
    desc: "All our Caregivers and Nurses are qualified, insured, and have at least 2 years of hands-on experience.",
  },
  {
    icon: "🌟",
    title: "Quality Home Care with a Personal Touch",
    desc: "At Skyline Healthcare Solutions Ltd, we deliver compassionate, professional live-in care tailored to your unique needs.",
  },
  {
    icon: "🧠",
    title: "Your Perfect Caregiver Match",
    desc: "We carefully match you with a trusted Caregiver based on your preferences, personality, and care requirements.",
  },
  {
    icon: "🧠",
    title: "Always On Time, Always Reliable",
    desc: "Our advanced monitoring system tracks every visit to ensure punctual, smooth, and reliable care.",
  },
  {
    icon: "🧠",
    title: "Consistent Care from Familiar Faces",
    desc: "We aim to assign the same Caregiver every time, so they understand your routine, needs, and even your favorite meals.",
  },
];

const WhySection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-6xl text-center mb-10">
        <em className="italic text-gray-700">Why</em>{" "}
        <span className="text-black font-bold">Skyline HealthCare?</span>
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1.1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="px-2 md:px-12"
      >
        {whyData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`bg-white shadow-lg border-t-4 border-[#52bed6] rounded-2xl p-6 h-[200px] mb-[20px]`}
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* CTA card */}
        <SwiperSlide>
          <div className="bg-cyan-50 text-black rounded-2xl p-6 shadow-lg flex flex-col justify-between h-[200px]">
            <div>
              <p className="text-sm text-[#52bed6] font-medium mb-2">
                Let us handle the care, so you can focus on living.
              </p>
              <h3 className="text-2xl font-semibold leading-snug mb-4">
                Book your free care consultation today.
              </h3>
            </div>
            <a
              href="/contact"
              className="mt-auto inline-block bg-[#52bed6] text-white font-semibold py-2 px-4 rounded-full hover:bg-pink-700 transition"
            >
              Contact Us →
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WhySection;
