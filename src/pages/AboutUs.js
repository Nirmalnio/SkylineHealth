import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaBrain,
  FaHandshake,
  FaHome,
  FaBullseye,
  FaEye,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { FaEarListen } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import GoogleReviews from "../components/GoogleReviews";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardHover = {
  scale: 1.05,
  y: -8,
  transition: { duration: 0.3, ease: "easeOut" }
};

const buttonHover = {
  scale: 1.05,
  y: -2,
  transition: { duration: 0.2, ease: "easeOut" }
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function About() {
  const values = [
    {
      icon: FaHeart,
      title: "Compassion",
      desc: "We care deeply and treat every client with warmth and respect",
    },
    {
      icon: FaEarListen,
      title: "Listening",
      desc: "We take the time to understand each person's needs, wishes, and routines",
    },
    {
      icon: FaBrain,
      title: "Expertise",
      desc: "Our carers are trained, experienced, and always learning",
    },
    {
      icon: FaHandshake,
      title: "Trust",
      desc: "We build strong bonds with families through transparency and consistency",
    },
    {
      icon: FaHome,
      title: "Independence",
      desc: "We support clients in living their lives on their terms, at home",
    },
    {
      icon: AiOutlineSafety,
      title: "Safety",
      desc: "We prioritize the safety and well-being of clients by following best practices, risk assessments, and proactive care planning.",
    },
  ];

  const whyChooseUs = [
    "Small, family-run company focused on personal attention",
    "Consistent carers who often become like extended family",
    "Fully regulated by the Care Quality Commission (CQC)",
    "Serving only Torbay and Devon, ensuring local focus and responsiveness",
    "Genuinely bespoke care built around the individual based on their needs and preferences",
  ];

  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-br from-blue-light to-cyan-light relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-brand-blue rounded-full opacity-10"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-medium rounded-full opacity-15"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 3 }
          }}
        />

        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <motion.p 
            className="text-brand-blue font-medium text-lg mb-4"
            variants={fadeInUp}
          >
            Bespoke 'Live-in' Care in South Torbay & Devon
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-text-dark leading-tight mb-6"
            variants={fadeInUp}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Skyline
            </motion.span>
            <br />
            <motion.span 
              className="text-brand-blue italic font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Healthcare
            </motion.span>
            <br />
            <motion.span 
              className="text-2xl md:text-3xl font-normal text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Solutions Ltd
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-text-secondary mt-6 text-base md:text-lg max-w-md leading-relaxed"
            variants={fadeInUp}
          >
            A small, family-run, CQC-registered live-in care provider. We help
            individuals remain in the comfort of their own homes surrounded by
            familiar routines, personal belongings, and the people they love.
          </motion.p>
          <motion.a 
            href="/contact-us"
            variants={fadeInUp}
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8"
          >
            <button className="px-8 py-4 bg-brand-blue hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
              Get in Touch Today →
            </button>
          </motion.a>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <div className="relative w-full max-w-lg mx-auto">
            <motion.div 
              className="absolute -left-10 -bottom-10 w-96 h-96 bg-blue-medium rounded-full opacity-20 blur-3xl -z-10"
              animate={floatingAnimation}
            />
            <motion.div 
              className="absolute -right-5 -top-5 w-64 h-64 bg-cyan-medium rounded-full opacity-25 blur-2xl -z-10"
              animate={{
                ...floatingAnimation,
                transition: { ...floatingAnimation.transition, delay: 2 }
              }}
            />
            <motion.img
              src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67b353fb8d343fbc691f6669_about-hero-image.webp"
              alt="Elderly person at home with carer"
              className="w-full rounded-2xl object-cover shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-brand-blue font-medium text-lg mb-2"
              variants={fadeInUp}
            >
              Our Mission & Vision
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-text-dark mb-8"
              variants={fadeInUp}
            >
              We Believe Care Should
              <br />
              Feel Like{" "}
              <span className="text-brand-blue italic font-serif">Family</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-light to-cyan-light p-8 rounded-3xl"
              variants={fadeInLeft}
              whileHover={cardHover}
            >
              <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaBullseye className="text-3xl mr-3 text-[#99235C]" />
                </motion.div>
                Our Mission
              </h3>
              <p className="text-gray-800 leading-relaxed">
                To empower people to live independently in their own homes by
                delivering exceptional, personalised care that promotes dignity,
                choice, and quality of life.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-light to-cyan-light p-8 rounded-3xl"
              variants={fadeInRight}
              whileHover={cardHover}
            >
              <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaEye className="text-3xl mr-3 text-[#99235C]" />
                </motion.div>
                Our Vision
              </h3>
              <p className="text-gray-800 leading-relaxed">
                To be Torbay and Devon's most trusted live-in care provider,
                known for our heartfelt approach, family values, and commitment
                to truly person-centred care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-gradient-to-br from-cyan-light to-blue-light py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-brand-blue font-medium text-lg mb-2"
              variants={fadeInUp}
            >
              What Drives Us
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4"
              variants={fadeInUp}
            >
              Our{" "}
              <span className="text-brand-blue italic font-serif">Values</span>
            </motion.h2>
            <motion.p 
              className="text-gray-800 text-lg max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Our live-in carers offer more than just practical help—they
              bring companionship, trust, and peace of mind, forming lasting
              relationships with those they support.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
                  variants={fadeInUp}
                  whileHover={cardHover}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="text-4xl mb-4 text-[#99235C]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE SKYLINE */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -top-4 -left-4 w-full h-full bg-brand-blue rounded-2xl opacity-10"
                  animate={{
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67c9bf2674f0a8d2a1f7da97_Secondary%20image%20(getting%20care%20should%20be%20easy)%201.jpeg"
                  alt="Family care moment"
                  className="relative w-full rounded-2xl object-cover shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <motion.p 
                className="text-brand-blue font-medium text-lg mb-2"
                variants={fadeInUp}
              >
                Personal & Professional
              </motion.p>
              <motion.h2 
                className="text-4xl font-extrabold text-text-dark mb-6"
                variants={fadeInUp}
              >
                Why Families Choose{" "}
                <span className="text-brand-blue italic font-serif">
                  Skyline
                </span>
              </motion.h2>
              <motion.p 
                className="text-gray-800 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                We're proud to keep our service small enough to stay personal —
                where every client matters and every relationship counts.
              </motion.p>

              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                {whyChooseUs.map((reason, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-3"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-6 h-6 bg-[#99235C] rounded-full flex items-center justify-center mt-0.5"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaCheckCircle className="text-white text-sm" />
                    </motion.div>
                    <p className="text-gray-700 leading-relaxed">{reason}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-gradient-to-br from-blue-light to-cyan-light py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-brand-blue font-medium text-lg mb-2"
              variants={fadeInUp}
            >
              Our Service
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4"
              variants={fadeInUp}
            >
              Bespoke{" "}
              <motion.span 
                className="text-brand-blue italic font-serif"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                24/7
              </motion.span>{" "}
              Care
            </motion.h2>
            <motion.p 
              className="text-gray-800 text-lg max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              We specialise in bespoke 24/7 care, helping individuals remain in
              the comfort of their own home with consistent, compassionate
              support.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: FaHome,
                title: "Stay at Home",
                desc: "Remain in familiar surroundings with personal belongings, routines, and cherished memories close by."
              },
              {
                icon: FaUsers,
                title: "Consistent Carers",
                desc: "Build meaningful relationships with dedicated carers who become like extended family members."
              },
              {
                icon: FaShieldAlt,
                title: "CQC Registered",
                desc: "Fully regulated and compliant, giving you complete peace of mind about quality and safety."
              }
            ].map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
                  variants={fadeInUp}
                  whileHover={cardHover}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center"
                  >
                    <IconComponent className="text-5xl mb-4 text-[#99235C]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-text-dark mb-4 text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#99235C] py-20 px-6 md:px-16 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full opacity-5"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-10"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 4 }
          }}
        />

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-6"
            variants={fadeInUp}
          >
            Ready to Talk About <span className="italic font-serif">Care?</span>
          </motion.h2>
          <motion.p 
            className="text-pink-200 mb-8"
            variants={fadeInUp}
          >
            We'd love to hear from you. Get in touch today to arrange a free
            consultation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
          >
            <motion.button 
              className="px-8 py-4 bg-white text-[#99235C] rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              variants={fadeInUp}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+447805694560" className="flex items-center justify-center gap-2">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPhone className="text-lg" />
                </motion.div>
                Call Us Today
              </a>
            </motion.button>
            <motion.button 
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#99235C] transition-all flex items-center justify-center gap-2"
              variants={fadeInUp}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:skylinehealthcaresolutions@outlook.com"
                className="flex items-center justify-center gap-2"
              >
                <motion.div
                  whileHover={{ rotate: -15 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-lg" />
                </motion.div>
                Enquire Now
              </a>
            </motion.button>
          </motion.div>
          <motion.p 
            className="mt-8 text-pink-200 text-sm"
            variants={fadeInUp}
          >
            Serving families across South Torbay & Devon with compassionate,
            professional care
          </motion.p>
        </motion.div>
      </section>

      <GoogleReviews />
    </div>
  );
}