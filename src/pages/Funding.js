import React, { useState, useEffect } from "react";
import {
  PoundSterling,
  Home,
  CheckCircle,
  Phone,
  FileText,
  Users,
  Heart,
} from "lucide-react";
import {
  FaHome,
  FaHandHoldingHeart,
  FaUniversity,
  FaLightbulb,
  FaArrowDown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
      bgGradient: "from-[#99235c] to-purple-600",
      details: "Full autonomy over care decisions and timing",
    },
    {
      id: 2,
      title: "Direct Payments",
      description: "Council funds that you manage yourself",
      icon: FaHandHoldingHeart,
      color: "#1e40af",
      bgGradient: "from-blue-600 to-indigo-600",
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
      color: "bg-blue-500",
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
      color: "bg-purple-500",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const importantVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <PoundSterling className="w-4 h-4 mr-2" />
            Funding Your Live-In Care
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Flexible, and Personal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Skyline Healthcare Solutions Ltd, our high-quality, 24/7 live-in
            care offers a cost-effective alternative to residential care homes,
            enabling you to remain comfortably and independently in your own
            home. We provide flexible funding options and guidance, making
            personalised care accessible and straightforward to arrange
          </p>
        </div>

        {/* Animated Paying for Care Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-8">
            <motion.div
              className="text-4xl text-[#99235c] mr-3"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaHome />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900">
              Paying for Care
            </h2>
          </div>

          <p className="text-gray-600 mb-8 text-lg">
            You can fund live-in care in 3 main ways:
          </p>

          {/* Animated Flowchart */}
          <motion.div
            className="relative mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-start relative">
                {paymentOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  const isActive = activeCard === index;

                  return (
                    <motion.div
                      key={option.id}
                      className="flex-1 max-w-sm mx-4"
                      variants={cardVariants}
                      whileHover="hover"
                      onMouseEnter={() => setActiveCard(index)}
                    >
                      <motion.div
                        className={`relative p-6 rounded-2xl h-[200px] border-2 border-white shadow-lg transition-all duration-500 ${
                          isActive
                            ? `bg-gradient-to-br ${option.bgGradient} text-white transform scale-105`
                            : "bg-white text-gray-800 hover:shadow-xl"
                        }`}
                        animate={
                          isActive
                            ? { boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }
                            : {}
                        }
                      >
                        {/* Animated background effect for active card */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                              background: `linear-gradient(135deg, ${option.color}20, transparent)`,
                            }}
                            variants={pulseVariants}
                            animate="animate"
                          />
                        )}

                        <div className="relative z-10">
                          <motion.div
                            className={`text-3xl mb-4 ${
                              isActive ? "text-white" : ""
                            }`}
                            style={{
                              color: !isActive ? option.color : undefined,
                            }}
                            animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent />
                          </motion.div>

                          <h3 className="text-xl font-bold mb-3">
                            {option.title}
                          </h3>

                          <p
                            className={`text-sm mb-4 ${
                              isActive ? "text-white/90" : "text-gray-600"
                            }`}
                          >
                            {option.description}
                          </p>

                          <motion.p
                            className={`text-xs ${
                              isActive ? "text-white/80" : "text-gray-500"
                            }`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={
                              isActive
                                ? { opacity: 1, height: "auto" }
                                : { opacity: 0, height: 0 }
                            }
                            transition={{ duration: 0.3 }}
                          >
                            {option.details}
                          </motion.p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Connecting arrows */}
                <svg
                  className="absolute top-1/2 left-0 w-full h-20 pointer-events-none"
                  style={{ zIndex: -1 }}
                >
                  <motion.path
                    d="M 120 10 Q 300 -20 480 10"
                    stroke="#99235c"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="8,4"
                    variants={arrowVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.path
                    d="M 600 10 Q 780 -20 960 10"
                    stroke="#99235c"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="8,4"
                    variants={arrowVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              {paymentOptions.map((option, index) => {
                const IconComponent = option.icon;
                const isActive = activeCard === index;

                return (
                  <motion.div
                    key={option.id}
                    variants={cardVariants}
                    className="relative"
                  >
                    <motion.div
                      className={`p-6 rounded-2xl border-2 border-white shadow-lg transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-br ${option.bgGradient} text-white`
                          : "bg-white text-gray-800"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`text-2xl ${isActive ? "text-white" : ""}`}
                          style={{
                            color: !isActive ? option.color : undefined,
                          }}
                        >
                          <IconComponent />
                        </motion.div>

                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">
                            {option.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              isActive ? "text-white/90" : "text-gray-600"
                            }`}
                          >
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Connecting arrow for mobile */}
                    {index < paymentOptions.length - 1 && (
                      <motion.div
                        className="flex justify-center py-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 + index * 0.3 }}
                      >
                        <FaArrowDown className="text-[#99235c] text-xl" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Important Note */}
          <AnimatePresence>
            {showImportant && (
              <motion.div
                variants={importantVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-orange-500 text-2xl mt-1"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 4,
                      }}
                    >
                      <FaLightbulb />
                    </motion.div>

                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <span>Important:</span>
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Many start by paying privately and apply for council
                        funding once their savings drop below{" "}
                        <motion.span
                          className="font-bold text-green-600 text-lg"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        >
                          £23,350
                        </motion.span>
                        .
                      </p>
                      <p className="text-gray-600 italic text-sm">
                        Your home won't count in the financial assessment if
                        you're living in it.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Direct Payments Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">
            💡 What Are Direct Payments?
          </h2>
          <p className="text-xl leading-relaxed">
            Direct Payments let you take control of your care. You receive funds
            directly and choose how and who provides your support — like
            choosing Skyline as your provider!
          </p>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              3 Simple Steps to Get Started
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-center space-x-6 p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 100,
                    scale: 0.9,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      delay: index * 0.2,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  x: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  {step.number}
                </motion.div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {step.title}
                  </h3>
                </div>
                <motion.button
                  className="bg-gray-900 w-[170px] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href={step.link}>{step.action}</a>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Council Funding Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Will the Council Help Fund My Care?
            </h2>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
            <p className="text-gray-800 text-lg mb-4">
              You may qualify if your savings are under{" "}
              <span className="font-bold text-purple-600">£23,350</span>.
            </p>
            <p className="text-gray-700">
              The council will assess your needs and finances through a{" "}
              <strong><a href="https://www.nhs.uk/social-care-and-support/help-from-social-services-and-charities/getting-a-needs-assessment/" target="_blank" rel="noopener noreferrer">free needs assessment</a></strong>.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-[#FFDFDF] to-pink-100 rounded-2xl shadow-lg p-8 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Phone className="w-8 h-8 mr-3 text-primary-dark" />
            <h2 className="text-3xl font-bold text-gray-900">
              Let's Talk About Your Options
            </h2>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Have questions or need help understanding your options?
          </p>

          <button className="bg-[#FFF] text-[#99235C] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg">
            Contact us today for a free consultation
          </button>
        </div>
      </div>
    </div>
  );
}
