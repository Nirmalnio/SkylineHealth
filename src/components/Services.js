// import React from 'react';

// const Services = () => {
//   return (
//     <div className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white shadow-md p-8 rounded-lg">
//             <h3 className="text-xl font-bold mb-4">Home Care</h3>
//             <p className="text-gray-600">From a few hours a week to 24/7 care, we can help you with cooking, cleaning, and personal care.</p>
//           </div>
//           <div className="bg-white shadow-md p-8 rounded-lg">
//             <h3 className="text-xl font-bold mb-4">Nursing Care</h3>
//             <p className="text-gray-600">Our licensed nurses can provide a full range of medical care in the comfort of your home.</p>
//           </div>
//           <div className="bg-white shadow-md p-8 rounded-lg">
//             <h3 className="text-xl font-bold mb-4">Specialty Care</h3>
//             <p className="text-gray-600">We offer specialized care for those with Alzheimer's, dementia, and other conditions.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Home Care",
    desc: "From a few hours a week to 24/7 care, we can help you with cooking, cleaning, and personal care.",
    image:
      "https://cdn.prod.website-files.com/67ab6f4970b90367b528f186/67c98eb3e88855a92201172e_Personal%20care%20%2B%20Help%20your%20loved%20ones%20with%20daily%20Thumbnail.webp",
  },
  // {
  //   title: "Nursing Care",
  //   desc: "Our licensed nurses can provide a full range of medical care in the comfort of your home.",
  //   image:
  //     "https://cdn.prod.website-files.com/67ab6f4970b90367b528f186/67c98e8ae88855a92200ef58_Respite%20Thumbnail.webp",
  // },
  // {
  //   title: "Specialty Care",
  //   desc: "We offer specialized care for those with Alzheimer's, dementia, and other conditions.",
  //   image:
  //     "https://cdn.prod.website-files.com/67ab6f4970b90367b528f186/67c98e70a613526a4b5951cf_Dementia%20Thumbnail.webp",
  // },
];

const Services = () => {
  return (
    <section className="bg-background-light py-16 px-4 md:px-8 rounded-t-[2rem]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <p className="px-6 py-2 rounded-full font-medium bg-accent text-white shadow">
            Our Services
          </p>
        </div>

        {/* Title and Description */}
        <motion.h2
          className="text-4xl font-bold"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What is <span className="italic font-normal">Live-In Care?</span>
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Live-in care means having a dedicated carer living with you, providing
          daily support and companionship at home. From preparing meals and
          helping with chores to assisting you with hobbies and routines, your
          carer is there to make each day comfortable and enjoyable.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden text-left"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{item.desc}</p>
                <button className="text-accent font-medium flex items-center hover:underline">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-accent hover:bg-accent-darker text-white px-6 py-3 rounded-full font-semibold flex items-center mx-auto transition-all">
            View all Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;