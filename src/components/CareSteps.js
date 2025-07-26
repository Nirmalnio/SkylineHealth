import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Instant Connection",
    desc: "Your call will be answered by a real person day or night. Contact us at any time to arrange a complimentary Caring Consultation™. We listen carefully to your needs—whether you require elder care, personal assistance, or support during recovery—to understand how we can make your life better.",
    image: "/step-1.png",
  },
  {
    step: 2,
    title: "Getting to Know You",
    desc: "A Care Designer will meet with you—either virtually or in person—to assess your individual needs and preferences before creating a bespoke Care Plan just for you. We’ll then match you with the ideal perfect carer, chosen for their skills, their compassion, and a personality we believe you’ll truly appreciate.",
    image: "/step-2.png",
  },
  {
    step: 3,
    title: "First Visit",
    desc: "We strive to send the same carer for every visit, so you can build a genuine relationship with your perfect match from day one. Our team will remain in regular contact—monitoring your care and making adjustments as needed throughout your care journey.",
    image: "/step-3.png",
  },
];

const CareSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-cyan-light py-16 px-4 md:px-12 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-12 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary-dark font-medium text-lg">Step by Step</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What to Expect <br />
            <span className="italic font-normal">When Getting Care</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Step List */}
          <div className="relative">
            <div className="absolute top-0 left-2 w-1 h-full bg-primary-dark"></div>
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
                        ? "bg-primary-dark scale-110 shadow-md"
                        : "bg-pink-300"
                    }`}
                  ></div>
                  <p
                    className={`italic font-medium text-lg mb-1 ${
                      activeStep === index ? "text-primary-dark" : "text-pink-400"
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
