import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Instant Connection",
    desc: "Your call is answered by a real person within 30 seconds, any time—day or night. Call us anytime to book a complimentary Caring Consult™. We listen to your needs—whether that’s elder care, personal care or recovery support—to learn how we can make your lives better.",
    image: "/step-1.png",
  },
  {
    step: 2,
    title: "Getting to Know You",
    desc: "A Care Designer meets with you, virtually or in person, to assess your needs and preferences before creating a Care Plan tailor-made for you. We match you with the perfect caregiver with the right skills, a kind heart and a personality you’ll love.",
    image: "/step-2.png",
  },
  {
    step: 3,
    title: "First Visit",
    desc: "We aim to send the same Caregiver every visit so you can grow your relationship with your perfect match Caregiver from day one. Our team stays in touch, monitoring care and making tweaks as needed throughout your care journey.",
    image: "/step-3.png",
  },
];

const CareSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-cyan-50 py-16 px-4 md:px-12 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-12 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-pink-600 font-medium text-lg">Step by Step</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What to Expect <br />
            <span className="italic font-normal">When Getting Care</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Step List */}
          <div className="relative">
            <div className="absolute top-0 left-2 w-1 h-full bg-pink-500"></div>
            <div className="space-y-16 pl-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setActiveStep(index)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div
                    className={`absolute -left-[38px] w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                      activeStep === index
                        ? "bg-pink-600 scale-110 shadow-md"
                        : "bg-pink-300"
                    }`}
                  ></div>
                  <p
                    className={`italic font-medium text-lg mb-1 ${
                      activeStep === index ? "text-pink-600" : "text-pink-400"
                    }`}
                  >
                    Step {step.step}
                  </p>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-gray-700 mt-2 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Image */}
          <motion.div
            className="space-y-10 flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              // key={idx}
              src="https://www.athulyahomecare.com/images/BGLRE-healthcare.jpg"
              alt="img"
              className="rounded-2xl w-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareSteps;
