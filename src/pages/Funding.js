import React from 'react';
import { PoundSterling, Home, CheckCircle, Phone, FileText, Users, Heart } from 'lucide-react';

export default function Funding() {
  const fundingOptions = [
    { title: 'Privately', description: 'Self-funded care giving you complete control' },
    { title: 'Direct Payments', description: 'Council funds that you manage yourself' },
    { title: 'Local Authority or NHS Support', description: 'Government assistance for eligible individuals' }
  ];

  const steps = [
    { 
      number: 1, 
      title: 'Check if you qualify for benefits',
      action: 'Check Eligibility',
      color: 'bg-blue-500',
      link: 'https://benefitscheck.ageuk.org.uk/Home/Start/'
    },
    { 
      number: 2, 
      title: 'See if you\'re eligible for NHS Continuing Healthcare',
      action: 'Check Eligibility',
      color: 'bg-green-500',
      link: 'https://www.curamcare.com/blogs/nhs-chc-funding'
    },
    { 
      number: 3, 
      title: 'Apply for Local Authority Funding',
      action: 'Apply Now',
      color: 'bg-purple-500',
      link: 'https://www.curamcare.com/blogs/local-authority-funding'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Skyline Healthcare Solutions Ltd</h1>
          </div>
        </div>
      </div> */}

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
            At Skyline Healthcare Solutions Ltd, we offer high-quality, 24/7 live-in care that's often more 
            affordable than moving to a care home — and lets you stay in the comfort of your own home.
          </p>
        </div>

        {/* Paying for Care Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-8">
            <Home className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Paying for Care</h2>
          </div>
          
          <p className="text-gray-600 mb-8 text-lg">
            You can fund live-in care in 3 main ways:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {fundingOptions.map((option, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <p className="text-gray-800">
              <strong>💡 Important:</strong> Many start by paying privately and apply for council funding once their 
              savings drop below <span className="font-bold text-green-600">£23,350</span>.
            </p>
            <p className="text-gray-700 mt-2">
              <em>Your home won't count in the financial assessment if you're living in it.</em>
            </p>
          </div>
        </div>

        {/* Direct Payments Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">💡 What Are Direct Payments?</h2>
          <p className="text-xl leading-relaxed">
            Direct Payments let you take control of your care. You receive funds directly and choose how and 
            who provides your support — like choosing Skyline as your provider!
          </p>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-8">
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">3 Simple Steps to Get Started</h2>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center space-x-6 p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                </div>
                <button className="bg-gray-900 w-[170px] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  <a href={step.link}>
                  {step.action}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Council Funding Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Will the Council Help Fund My Care?</h2>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
            <p className="text-gray-800 text-lg mb-4">
              You may qualify if your savings are under <span className="font-bold text-purple-600">£23,350</span>.
            </p>
            <p className="text-gray-700">
              The council will assess your needs and finances through a <strong>free needs assessment</strong>.
            </p>
          </div>

          {/* <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg">
            Request a Needs Assessment
          </button> */}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-lg p-8 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Phone className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Let's Talk About Your Options</h2>
          </div>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions or need help understanding your options?
          </p>

          <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg">
            Contact us today for a free consultation
          </button>
        </div>
      </div>

      {/* Footer
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 p-2 rounded-lg mr-3">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Skyline Healthcare Solutions Ltd</h3>
          </div>
          <p className="text-gray-400">
            Providing compassionate, professional live-in care services
          </p>
        </div>
      </footer> */}
    </div>
  );
}