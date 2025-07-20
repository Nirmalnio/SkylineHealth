import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const whyData = [
  {
    icon: "💬",
    title: "24/7 Live Calling Support",
    desc: "Speak with a real person in 30 seconds or less every time you call, 24 hours a day, 7 days a week.",
  },
  {
    icon: "❤️",
    title: "Comprehensive Care at Every Age",
    desc: "Our services range from elder care to daily living support for people of all ages. Quality care, regardless of age.",
  },
  {
    icon: "👩‍⚕️",
    title: "Skilled Professionals",
    desc: "Our caregivers are trained, certified, and background-checked to ensure the best service.",
  },
  {
    icon: "🌟",
    title: "Personalized Care Plans",
    desc: "We tailor every care plan to the unique needs and preferences of each client.",
  },
  {
    icon: "🧠",
    title: "Memory Care Support",
    desc: "Specialized support for seniors dealing with Alzheimer's or other memory-related conditions.",
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
              className={`bg-white shadow-lg border-t-4 border-[#52bed6] rounded-2xl p-6 h-full`}
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* CTA card */}
        <SwiperSlide>
          <div className="bg-cyan-50 text-black rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
              <p className="text-sm text-[#52bed6] font-medium mb-2">
                Get back to living your life
              </p>
              <h3 className="text-2xl font-semibold leading-snug mb-4">
                Book a complimentary caring consultation
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
