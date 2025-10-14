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
  FaShieldAlt,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";

const whyData = [
  {
    icon: BiSupport,
    title: "24/7 Live Support",
    desc: "Need help or have a question? Call us any time, day or night, and speak to a real person. We're here to support you whenever you need us.",
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
  {
    icon: FaShieldAlt,
    title: "CQC Registered",
    desc: "Regulated to the highest care standards, providing you with complete confidence in our quality and safety.",
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
    <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-visible relative">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 sm:mb-10 px-4">
          <em className="italic text-gray-700">Why</em>{" "}
          <span className="text-black font-bold">Skyline HealthCare?</span>
        </h2>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={12}
          slidesPerView={1.1}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={handleSlideChange}
          loop={true}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="px-2 sm:px-4 md:px-8 lg:px-12 py-6 sm:py-8 mt-6 sm:mt-8"
        >
          {whyData.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = index === activeIndex;
            return (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white border-t-4 border-primary rounded-2xl p-4 sm:p-5 lg:p-6 
                    h-[180px] sm:h-[200px] lg:h-[220px] 
                    my-12 sm:my-16 lg:my-20 
                    mx-2 sm:mx-3 lg:mx-5 
                    transition-all duration-500 ease-out ${
                    isActive
                      ? "transform scale-110 sm:scale-115 lg:scale-125 z-20 translate-y-[-10px] sm:translate-y-[-15px] lg:translate-y-[-20px] shadow-[0_15px_35px_rgba(0,0,0,0.2)] sm:shadow-[0_20px_40px_rgba(0,0,0,0.23)] lg:shadow-[0_25px_50px_rgba(0,0,0,0.25)] ring-2 sm:ring-3 lg:ring-4 ring-primary/20"
                      : "transform scale-90 sm:scale-90 lg:scale-90 opacity-60 shadow-md"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    filter: isActive ? "brightness(1.1)" : "brightness(0.8)",
                  }}
                >
                  <div className="text-xl sm:text-2xl mb-3 sm:mb-4 text-primary">
                    <IconComponent />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 sm:line-clamp-4">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}

          {/* CTA card */}
          <SwiperSlide>
            <div
              className={`bg-gradient-to-br from-primary/10 to-secondary/10 text-black rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between 
                h-[180px] sm:h-[200px] lg:h-[220px] 
                my-12 sm:my-16 lg:my-20 
                mx-2 sm:mx-3 lg:mx-5 
                transition-all duration-500 ease-out ${
                whyData.length === activeIndex
                  ? "transform scale-110 sm:scale-115 lg:scale-125 z-20 translate-y-[-10px] sm:translate-y-[-15px] lg:translate-y-[-20px] shadow-[0_15px_35px_rgba(0,0,0,0.2)] sm:shadow-[0_20px_40px_rgba(0,0,0,0.23)] lg:shadow-[0_25px_50px_rgba(0,0,0,0.25)] ring-2 sm:ring-3 lg:ring-4 ring-primary/20"
                  : "transform scale-90 sm:scale-90 lg:scale-90 opacity-60 shadow-md"
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
                <p className="text-xs sm:text-sm text-primary font-medium mb-2">
                  Let us handle the care, so you can focus on living.
                </p>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug mb-3 sm:mb-4 line-clamp-2">
                  Book your free care consultation today.
                </h3>
              </div>
              <a
                href="/contact"
                className="mt-auto inline-block bg-primary text-white font-semibold py-2 px-4 sm:px-5 text-xs sm:text-sm lg:text-base rounded-full hover:bg-primary/90 w-fit transition-all duration-300 transform hover:scale-105"
              >
                Contact Us →
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex justify-center items-center gap-3 lg:gap-4 mt-6 lg:mt-8">
          <button
            onClick={goPrev}
            className="bg-primary hover:bg-primary/90 text-white p-2.5 lg:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>

          <div className="flex gap-1.5 lg:gap-2">
            {[...whyData, {}].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.slideTo(index);
                  }
                }}
                className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="bg-primary hover:bg-primary/90 text-white p-2.5 lg:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center gap-1.5 mt-6">
          {[...whyData, {}].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (swiperRef.current && swiperRef.current.swiper) {
                  swiperRef.current.swiper.slideTo(index);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary scale-125"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for additional 3D effects */}
      <style jsx>{`
        .swiper-slide {
          transition: all 0.5s ease-out;
        }

        .transform {
          will-change: transform;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default WhySection;