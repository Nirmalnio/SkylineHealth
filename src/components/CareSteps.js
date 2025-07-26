import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Instant Connection",
    desc: "Your call will be answered by a real person day or night. Contact us at any time to arrange a complimentary Caring Consultation™. We listen carefully to your needs—whether you require elder care, personal assistance, or support during recovery—to understand how we can make your life better.",
    image: "/step-1.png",
    color: "#99235c", // primary-dark blue
    bgGradient: "from-[#99235C] to-purple-600",
  },
  {
    step: 2,
    title: "Getting to Know You",
    desc: "A Care Designer will meet with you—either virtually or in person—to assess your individual needs and preferences before creating a bespoke Care Plan just for you. We'll then match you with the ideal perfect carer, chosen for their skills, their compassion, and a personality we believe you'll truly appreciate.",
    image: "/step-2.png",
    color: "#99235c", // primary-dark blue
    bgGradient: "from-[#99235C] to-purple-600",
  },
  {
    step: 3,
    title: "First Visit",
    desc: "We strive to send the same carer for every visit, so you can build a genuine relationship with your perfect match from day one. Our team will remain in regular contact—monitoring your care and making adjustments as needed throughout your care journey.",
    image: "/step-3.png",
    color: "#99235c", // primary-dark blue
    bgGradient: "from-[#99235C] to-purple-600",
  },
];

const CareSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.6,
      x: -20,
      filter: "blur(1px)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    active: {
      scale: 1,
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    inactive: {
      scale: 1,
      rotate: 0,
      boxShadow: "0 0 0 0px rgba(153, 35, 92, 0.4)",
    },
    active: {
      scale: 1.3,
      rotate: 360,
      boxShadow: "0 0 0 8px rgba(153, 35, 92, 0.2)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (custom) => ({
      pathLength: activeStep >= custom ? 1 : 0,
      opacity: activeStep >= custom ? 1 : 0.3,
      transition: {
        pathLength: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const imageVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      rotateY: -90,
      filter: "blur(10px)",
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotateY: 90,
      filter: "blur(10px)",
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const contentVariants = {
    inactive: {
      y: 20,
      opacity: 0.7,
      transition: {
        duration: 0.3,
      },
    },
    active: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-cyan-light to-blue-50 py-16 px-4 md:px-12 rounded-t-[3rem] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-12 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-primary-dark font-medium text-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Step by Step
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            What to Expect <br />
            <span className="italic font-normal bg-gradient-to-r from-primary-dark to-pink-400 bg-clip-text text-transparent">
              When Getting Care
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Step List */}
          <div className="relative">
            {/* Animated SVG Line */}
            <svg
              className="absolute top-0 left-2 w-1 h-full"
              viewBox="0 0 4 400"
              style={{ zIndex: 1 }}
            >
              <motion.path
                d="M2 0 L2 400"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                variants={lineVariants}
                initial="initial"
                animate="animate"
                custom={0}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="space-y-16 pl-10 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer group"
                  onMouseEnter={() => setActiveStep(index)}
                  variants={stepVariants}
                  initial="inactive"
                  animate={activeStep === index ? "active" : "inactive"}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated Step Dot */}
                  <motion.div
                    className="absolute -left-[38px] w-4 h-4 rounded-full border-2 border-white z-20"
                    style={{ backgroundColor: step.color }}
                    variants={dotVariants}
                    initial="inactive"
                    animate={activeStep === index ? "active" : "inactive"}
                  >
                    {/* Pulsing ring for active step */}
                    {activeStep === index && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: step.color }}
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [1, 0, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Step Content */}
                  <motion.div
                    variants={contentVariants}
                    initial="inactive"
                    animate={activeStep === index ? "active" : "inactive"}
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      activeStep === index
                        ? `bg-gradient-to-br ${step.bgGradient} shadow-lg border border-white/50`
                        : "bg-white/30 backdrop-blur-sm"
                    }`}
                  >
                    <motion.p
                      className="italic font-medium text-lg mb-1"
                      style={{
                        color: activeStep === index ? step.color : "#9CA3AF",
                      }}
                      animate={{
                        scale: activeStep === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Step {step.step}
                    </motion.p>
                    <motion.h3
                      className="text-2xl font-semibold mb-2"
                      animate={{
                        color: activeStep === index ? "#fff" : "#6B7280",
                      }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-700 text-sm text-white leading-relaxed"
                      animate={{
                        opacity: activeStep === index ? 1 : 0.8,
                      }}
                    >
                      {step.desc}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Image */}
          <motion.div
            className="flex justify-center items-center relative"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="relative w-full max-w-md">
              {/* Background decoration */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-800/20 to-pink-400/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative z-10"
                >
                  <img
                    src="https://www.athulyahomecare.com/images/BGLRE-healthcare.jpg"
                    alt={`Step ${steps[activeStep].step} illustration`}
                    className="rounded-2xl w-full shadow-2xl border-4 border-white/50"
                  />

                  {/* Step number overlay */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                    style={{ backgroundColor: steps[activeStep].color }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  >
                    {steps[activeStep].step}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareSteps;
