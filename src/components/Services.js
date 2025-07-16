import React from 'react';

const Services = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Home Care</h3>
            <p className="text-gray-600">From a few hours a week to 24/7 care, we can help you with cooking, cleaning, and personal care.</p>
          </div>
          <div className="bg-white shadow-md p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Nursing Care</h3>
            <p className="text-gray-600">Our licensed nurses can provide a full range of medical care in the comfort of your home.</p>
          </div>
          <div className="bg-white shadow-md p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Specialty Care</h3>
            <p className="text-gray-600">We offer specialized care for those with Alzheimer's, dementia, and other conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
