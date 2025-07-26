import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { 
  FaHeart, 
  FaUserNurse, 
  FaStar, 
  FaBrain, 
  FaClock, 
  FaUsers 
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import "swiper/css";

const whyData = [
  {
    icon: BiSupport,
    title: "24/7 Live Support",
    desc: "Need help or have a question? Call us any time — day or night — and speak to a real person in under 30 seconds.",
  },
  {
    icon: FaHeart,
    title: "Care for All Ages",
    desc: "From elderly care to everyday support for younger adults, we provide comprehensive care across all age groups.",
  },
  {
    icon: FaUserNurse,
    title: "Trusted, Experienced Professionals",
    desc: "All our Carers and Nurses are qualified, insured, and have at least 2 years of hands-on experience.",
  },
  {
    icon: FaStar,
    title: "Quality Home Care with a Personal Touch",
    desc: "At Skyline Healthcare Solutions Ltd, we deliver compassionate, professional live-in care tailored to your unique needs.",
  },
  {
    icon: FaBrain,
    title: "Your Perfect Carer Match",
    desc: "We carefully match you with a trusted Carer based on your preferences, personality, and care requirements.",
  },
  {
    icon: FaClock,
    title: "Always Reliable",
    desc: "Our advanced monitoring system tracks every visit to ensure punctual, smooth, and reliable care.",
  },
  {
    icon: FaUsers,
    title: "Consistent Care from Familiar Faces",
    desc: "We aim to assign the same Carer every time, so they understand your routine, needs, and even your favorite meals.",
  },
];

const WhySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="py-16 px-4 bg-white overflow-visible">
      <h2 className="text-6xl text-center mb-10">
        <em className="italic text-gray-700">Why</em>{" "}
        <span className="text-black font-bold">Skyline HealthCare?</span>
      </h2>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1.1}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="px-2 md:px-12 py-8 mt-8"
      >
        {whyData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <SwiperSlide key={index}>
              <div
                className={`bg-white border-t-4 border-[#99235C] rounded-2xl p-6 h-[200px] my-20 mx-5 transition-all duration-500 ease-out ${
                  index === activeIndex
                    ? "transform scale-125 z-20 translate-y-[-20px] shadow-[0_25px_50px_rgba(0,0,0,0.25)] ring-4 ring-[#99235C]/20"
                    : "transform scale-90 opacity-60 shadow-md"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  filter:
                    index === activeIndex ? "brightness(1.1)" : "brightness(0.8)",
                }}
              >
                <div className="text-2xl mb-4 text-[#99235C]">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </SwiperSlide>
          );
        })}

        {/* CTA card */}
        <SwiperSlide>
          <div
            className={`bg-gradient-to-br from-[#FFDFDF] to-pink-100 text-black rounded-2xl p-6 flex flex-col justify-between h-[200px] my-20 mx-5 transition-all duration-500 ease-out ${
              whyData.length === activeIndex
                ? "transform scale-125 z-20 translate-y-[-20px] shadow-[0_25px_50px_rgba(0,0,0,0.25)] ring-4 ring-[#99235C]/20"
                : "transform scale-90 opacity-60 shadow-md"
            }`}
            style={{
              transformStyle: "preserve-3d",
              filter:
                whyData.length === activeIndex
                  ? "brightness(1.1)"
                  : "brightness(0.8)",
            }}
          >
            <div>
              <p className="text-sm text-[#99235C] font-medium mb-2">
                Let us handle the care, so you can focus on living.
              </p>
              <h3 className="text-2xl font-semibold leading-snug mb-4">
                Book your free care consultation today.
              </h3>
            </div>
            <a
              href="/contact"
              className="mt-auto inline-block bg-[#99235C] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#7a1c49] w-fit transition-all duration-300 transform hover:scale-105"
            >
              Contact Us →
            </a>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom CSS for additional 3D effects */}
      <style jsx>{`
        .swiper-slide {
          transition: all 0.5s ease-out;
        }

        .transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default WhySection;