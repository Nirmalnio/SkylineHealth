import React from "react";
import {
  Heart,
  Clock,
  Shield,
  Home,
  Users,
  Brain,
  CheckCircle,
  Phone,
  MapPin,
  Star,
  HelpCircle,
  Repeat,
  Eye,
} from "lucide-react";

export default function AlzheimerCarePage() {
  const alzheimerSymptoms = [
    { icon: Brain, text: "Short-term memory loss" },
    { icon: Repeat, text: "Repeating questions or misplacing items" },
    { icon: HelpCircle, text: "Difficulty with familiar tasks" },
    { icon: MapPin, text: "Confusion or disorientation" },
    { icon: Users, text: "Mood or personality changes" },
  ];

  const careSupport = [
    {
      icon: Clock,
      title: "Daily Structure & Routines",
      description: "Gentle daily structure and familiar routines",
    },
    {
      icon: Heart,
      title: "Personal Care & Medication",
      description: "Help with personal care and medication management",
    },
    {
      icon: Brain,
      title: "Memory Stimulation",
      description: "Activities to encourage memory and mental stimulation",
    },
    {
      icon: Eye,
      title: "Safe Supervision",
      description: "Safe supervision to reduce confusion and prevent wandering",
    },
    {
      icon: Users,
      title: "Emotional Support",
      description: "Emotional reassurance and companionship",
    },
    {
      icon: Shield,
      title: "Family Respite",
      description: "Respite for family caregivers who need a break",
    },
  ];

  const trustPoints = [
    "A consistent caregiver for familiarity and trust",
    "A safe and comfortable home setting",
    "Clear communication with families every step of the way",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Specialized Alzheimer's Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Alzheimer's{" "}
                <span className="text-yellow-300">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Compassionate, round-the-clock support for those living with
                Alzheimer's — right in the comfort of home.
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

      {/* Supporting Daily Life Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Supporting Daily Life with{" "}
              <span className="text-blue-600">Dignity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              An Alzheimer's diagnosis doesn't mean losing independence. At{" "}
              <strong className="text-blue-600">Skyline Healthcare Solutions Ltd</strong>, we help clients maintain their
              routines, sense of self, and dignity — with one-to-one live-in
              care that adapts as their needs change.
            </p>
          </div>
        </div>
      </div>

      {/* What is Alzheimer's Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What is <span className="text-blue-600">Alzheimer's Disease?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Alzheimer's is a progressive condition that affects memory,
                thinking, and behaviour over time. Common early symptoms include:
              </p>

              <div className="space-y-4">
                {alzheimerSymptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm"
                  >
                    <div className="bg-blue-100 p-3 rounded-full">
                      <symptom.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-gray-800 font-medium">
                      {symptom.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                <Brain className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Understanding the Journey</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Every person's experience with Alzheimer's is unique. Our caregivers 
                  are specially trained to provide compassionate support that adapts 
                  to each stage of the condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Support Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Support <span className="text-blue-600">Alzheimer's Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our trained caregivers provide comprehensive support tailored 
              to the unique needs of those living with Alzheimer's
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careSupport.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 p-4 rounded-full w-fit mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialist Care Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Specialist Care You Can{" "}
              <span className="text-yellow-300">Trust</span>
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              All our live-in caregivers are trained in Alzheimer's care and understand 
              how to respond to changing behaviours with patience and calm. We prioritise:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <CheckCircle className="w-12 h-12 text-yellow-300 mb-4" />
                <p className="text-lg font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 24/7 Peace of Mind Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              24/7 <span className="text-blue-600">Peace of Mind</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With our live-in service, your loved one receives round-the-clock care, 
              day and night — so you can rest easy knowing they're safe, supported, 
              and not alone.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch <span className="text-blue-600">Today</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Looking for trusted Alzheimer's care at home?
          </p>
          <p className="text-xl font-bold text-gray-900 mb-8">
            <span className="text-blue-600">Skyline Healthcare Solutions Ltd</span> is here to help.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compassionate Care, Every Day
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to help your loved one maintain dignity, comfort,
              and quality of life in the familiar surroundings of home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}