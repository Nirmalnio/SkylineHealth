import React from 'react';
import { Heart, Clock, Shield, Home, Users, Brain, CheckCircle, Phone, MapPin, Star } from 'lucide-react';

export default function DementiaCarePage() {
  const symptoms = [
    { icon: Brain, text: "Forgetfulness and confusion" },
    { icon: Users, text: "Mood and personality changes" },
    { icon: Clock, text: "Difficulty with routine tasks" },
    { icon: MapPin, text: "Wandering and disorientation" },
    { icon: Phone, text: "Problems communicating" }
  ];

  const careServices = [
    {
      icon: Clock,
      title: "Structured Daily Routines",
      description: "Carefully planned activities to reduce anxiety and maintain familiarity"
    },
    {
      icon: Heart,
      title: "Personal Care Support",
      description: "Help with meals, medication, and daily personal care needs"
    },
    {
      icon: Brain,
      title: "Memory-Boosting Activities",
      description: "Gentle cognitive stimulation and engaging memory exercises"
    },
    {
      icon: Shield,
      title: "Behavioural Support",
      description: "Emotional reassurance and professional behavioural management"
    },
    {
      icon: Home,
      title: "Safety Monitoring",
      description: "Fall prevention and comprehensive home safety assessments"
    },
    {
      icon: Users,
      title: "Family Respite Care",
      description: "Support for family members with dedicated respite services"
    }
  ];

  const whyChooseUs = [
    "24/7 live-in care in the comfort of your home",
    "Reliable, consistent carers to build trust",
    "Local expertise serving families across Devon"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Skyline Healthcare Solutions Ltd</h1>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Specialized Dementia Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Dementia <span className="text-yellow-300">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Specialised one-to-one care for those living with dementia — right at home, across Devon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-32 h-32 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personalised Support Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personalised Support with <span className="text-blue-600">Dignity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Living with dementia doesn't mean losing independence. At Skyline Healthcare Solutions Ltd, 
              we provide live-in care across Devon that helps individuals stay safe, supported, and 
              comfortable in familiar surroundings.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Comfort</h3>
              <p className="text-gray-700">Stay in familiar surroundings that provide comfort and reduce anxiety.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-700">Comprehensive safety monitoring and fall prevention measures.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">One-to-One Care</h3>
              <p className="text-gray-700">Dedicated caregiver providing consistent, personalized attention.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Dementia Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Understanding <span className="text-blue-600">Dementia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dementia is a progressive condition that affects memory, thinking, and behaviour. 
                Our trained caregivers understand these challenges and provide compassionate support.
              </p>
              
              <div className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <symptom.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{symptom.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                <Brain className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Expert Care Team</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Our caregivers are specially trained in dementia care, providing the expertise 
                  and compassion needed to support both patients and families through this journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-blue-600">Dementia Care</span> Includes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, personalized care services designed specifically for dementia patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-100 p-4 rounded-full w-fit mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One Dedicated Caregiver</h3>
              <p className="text-lg text-gray-700">
                For consistency and trust, we provide one dedicated caregiver who becomes familiar 
                with your loved one's needs, preferences, and daily routines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Skyline Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-yellow-300">Skyline in Devon?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our caregivers are trained in dementia care and matched specifically to each client's needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <CheckCircle className="w-12 h-12 text-yellow-300 mb-4" />
                <p className="text-lg font-medium">{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
              <MapPin className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Serving All of Devon</h3>
              <p className="text-lg opacity-90">
                Local expertise and deep understanding of Devon communities, 
                providing personalized care close to home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We're Here to <span className="text-blue-600">Help</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            If your loved one is living with dementia and needs full-time care in Devon, we're here for you. 
            Skyline Healthcare Solutions Ltd offers trusted, compassionate live-in support tailored to every stage of dementia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5 inline mr-2" />
              Contact Us Today
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all">
              Request Information
            </button>
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Care, Every Day</h3>
            <p className="text-gray-700 text-lg">
              Our mission is to help your loved one maintain dignity, comfort, and quality of life 
              in the familiar surroundings of home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}