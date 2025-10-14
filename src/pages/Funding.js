import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PoundSterling,
  Home,
  CheckCircle,
  Phone,
  FileText,
} from "lucide-react";
import {
  FaHome,
  FaHandHoldingHeart,
  FaUniversity,
  FaLightbulb,
  FaArrowDown,
} from "react-icons/fa";

export default function Funding() {
  const [activeCard, setActiveCard] = useState(0);
  const [showImportant, setShowImportant] = useState(false);

  const paymentOptions = [
    {
      id: 1,
      title: "Privately",
      description: "Self-funded care giving you complete control",
      icon: FaHome,
      color: "#99235c",
      bgGradient: "from-secondary to-secondary/80",
      details: "Full autonomy over care decisions and timing",
    },
    {
      id: 2,
      title: "Direct Payments",
      description: "Council funds that you manage yourself",
      icon: FaHandHoldingHeart,
      color: "#2E94B9",
      bgGradient: "from-primary to-primary/80",
      details: "Flexibility with council-allocated funding",
    },
    {
      id: 3,
      title: "Local Authority or NHS Support",
      description: "Government assistance for eligible individuals",
      icon: FaUniversity,
      color: "#059669",
      bgGradient: "from-emerald-600 to-teal-600",
      details: "Support based on assessed needs and eligibility",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Check if you qualify for benefits",
      action: "Check Eligibility",
      color: "bg-primary",
      link: "https://benefitscheck.ageuk.org.uk/Home/Start/",
    },
    {
      number: 2,
      title: "See if you're eligible for NHS Continuing Healthcare",
      action: "Check Eligibility",
      color: "bg-green-500",
      link: "https://www.curamcare.com/blogs/nhs-chc-funding",
    },
    {
      number: 3,
      title: "Apply for Local Authority Funding",
      action: "Apply Now",
      color: "bg-secondary",
      link: "https://www.curamcare.com/blogs/local-authority-funding",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowImportant(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % paymentOptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-14 lg:mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            variants={fadeInDown}
          >
            <PoundSterling className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Funding Your Live-In Care
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
            variants={fadeInUp}
          >
            Simple, Flexible, and Personal
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            variants={fadeInUp}
          >
            At Skyline Healthcare Solutions Ltd, our high-quality, 24/7 live-in
            care offers a cost-effective alternative to residential care homes,
            enabling you to remain comfortably and independently in your own
            home. We provide flexible funding options and guidance, making
            personalised care accessible and straightforward to arrange
          </motion.p>
        </motion.div>

        {/* Paying for Care Section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <motion.div 
            className="flex items-center mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-3xl sm:text-4xl text-secondary mr-3"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaHome />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Paying for Care
            </h2>
          </motion.div>

          <motion.p 
            className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            You can fund live-in care in 3 main ways:
          </motion.p>

          {/* Payment Options - Desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
            {paymentOptions.map((option, index) => {
              const IconComponent = option.icon;
              const isActive = activeCard === index;

              return (
                <motion.div
                  key={option.id}
                  className={`p-6 rounded-2xl h-[220px] border-2 shadow-lg transition-all duration-500 cursor-pointer ${
                    isActive
                      ? `bg-gradient-to-br ${option.bgGradient} text-white transform scale-105`
                      : "bg-white text-gray-800 border-white hover:shadow-xl"
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className={`text-3xl mb-4 ${isActive ? "text-white" : ""}`} 
                    style={{ color: !isActive ? option.color : undefined }}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className={`text-sm mb-4 ${isActive ? "text-white/90" : "text-gray-600"}`}>
                    {option.description}
                  </p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p 
                        className="text-xs text-white/80"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {option.details}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Payment Options - Mobile/Tablet */}
          <motion.div 
            className="lg:hidden space-y-4 sm:space-y-6 mb-6 sm:mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {paymentOptions.map((option, index) => {
              const IconComponent = option.icon;
              const isActive = activeCard === index;

              return (
                <motion.div 
                  key={option.id} 
                  className="relative"
                  variants={staggerItem}
                >
                  <motion.div
                    className={`p-5 sm:p-6 rounded-2xl border-2 shadow-lg transition-all duration-500 ${
                      isActive
                        ? `bg-gradient-to-br ${option.bgGradient} text-white`
                        : "bg-white text-gray-800 border-white"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div
                        className={`text-2xl sm:text-3xl ${isActive ? "text-white" : ""}`}
                        style={{ color: !isActive ? option.color : undefined }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold mb-2">
                          {option.title}
                        </h3>
                        <p className={`text-sm ${isActive ? "text-white/90" : "text-gray-600"}`}>
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  {index < paymentOptions.length - 1 && (
                    <motion.div 
                      className="flex justify-center py-3 sm:py-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.3 }}
                    >
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaArrowDown className="text-secondary text-lg sm:text-xl" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Important Note */}
          <AnimatePresence>
            {showImportant && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-4 sm:p-5 lg:p-6 rounded-r-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div 
                      className="text-orange-500 text-xl sm:text-2xl mt-1 flex-shrink-0"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                    >
                      <FaLightbulb />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">
                        Important:
                      </h3>
                      <p className="text-gray-700 mb-2 text-xs sm:text-sm lg:text-base">
                        Many start by paying privately and apply for council
                        funding once their savings drop below{" "}
                        <motion.span 
                          className="font-bold text-green-600 text-base sm:text-lg"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                        >
                          £23,350
                        </motion.span>
                        .
                      </p>
                      <p className="text-gray-600 italic text-xs sm:text-sm">
                        Your home won't count in the financial assessment if
                        you're living in it.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Direct Payments Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl shadow-lg p-6 sm:p-7 lg:p-8 text-white mb-8 sm:mb-10 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            💡 What Are Direct Payments?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Direct Payments let you take control of your care. You receive funds
            directly and choose how and who provides your support — like
            choosing Skyline as your provider!
          </motion.p>
        </motion.div>

        {/* Steps Section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleIn}
        >
          <motion.div 
            className="flex items-start sm:items-center mb-6 sm:mb-8 gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              3 Simple Steps to Get Started
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-5 lg:p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: index * 0.15,
                      duration: 0.5,
                      type: "spring"
                    }
                  }
                }}
                whileHover={{ x: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className={`${step.color} text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.number}
                </motion.div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                </div>
                <motion.a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 w-full sm:w-auto text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step.action}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Council Funding Section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div 
            className="flex items-start sm:items-center mb-6 sm:mb-8 gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Will the Council Help Fund My Care?
            </h2>
          </motion.div>

          <motion.div 
            className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-800 text-base sm:text-lg mb-3 sm:mb-4">
              You may qualify if your savings are under{" "}
              <span className="font-bold text-secondary">£23,350</span>.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              The council will assess your needs and finances through a{" "}
              <strong>
                <a
                  href="https://www.nhs.uk/social-care-and-support/help-from-social-services-and-charities/getting-a-needs-assessment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  free needs assessment
                </a>
              </strong>
              .
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl shadow-lg p-6 sm:p-7 lg:p-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Let's Talk About Your Options
            </h2>
          </motion.div>

          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have questions or need help understanding your options?
          </motion.p>

          <motion.a
            href="/contact-us"
            className="inline-block bg-white text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors font-bold text-base sm:text-lg shadow-lg w-full sm:w-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Contact us today for a free consultation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}