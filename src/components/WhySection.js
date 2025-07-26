import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FaHeart,
  FaUserNurse,
  FaStar,
  FaBrain,
  FaClock,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";

const whyData = [
  {
    icon: BiSupport,
    title: "24/7 Live Support",
    desc: "Need help or have a question? Call us any time, day or night, and speak to a real person. We’re here to support you whenever you need us.",
  },
  {
    icon: FaHeart,
    title: "Care for All Ages",
    desc: "From elderly care to everyday support for younger adults, we provide comprehensive care across all age groups.",
  },
  {
    icon: FaUserNurse,
    title: "Trusted, Experienced Professionals",
    desc: "All our Carers are qualified, insured, and have at least 2 years of hands-on experience.",
  },
  {
    icon: FaStar,
    title: "Quality Care with a Personal Touch",
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
    desc: "Our monitoring process keeps track of every visit to ensure punctual, smooth, and reliable care.",
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

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="py-16 px-4 bg-white overflow-visible relative">
      <h2 className="text-6xl text-center mb-10">
        <em className="italic text-gray-700">Why</em>{" "}
        <span className="text-black font-bold">Skyline HealthCare?</span>
      </h2>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1.1}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        loop={true}
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
                    index === activeIndex
                      ? "brightness(1.1)"
                      : "brightness(0.8)",
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
      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mb-6 hidden md:flex">
        <button
          onClick={goPrev}
          className="bg-[#99235C] hover:bg-[#7a1c49] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#99235C]/50"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {[...whyData, {}].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (swiperRef.current && swiperRef.current.swiper) {
                  swiperRef.current.swiper.slideTo(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#99235C] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="bg-[#99235C] hover:bg-[#7a1c49] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#99235C]/50"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

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
