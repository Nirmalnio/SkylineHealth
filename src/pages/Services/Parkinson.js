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
  Zap,
  Activity,
  Volume2,
  Moon,
  Utensils,
  User,
  RotateCcw,
} from "lucide-react";

export default function ParkinsonCarePage() {
  const parkinsonSymptoms = [
    { icon: Zap, text: "Tremors or shaking" },
    { icon: Activity, text: "Muscle stiffness and slowed movement" },
    { icon: Users, text: "Difficulty with walking or balance" },
    { icon: Volume2, text: "Speech and swallowing issues" },
    { icon: Moon, text: "Fatigue and sleep disturbances" },
    { icon: Brain, text: "Mood changes or cognitive decline" },
  ];

  const careServices = [
    {
      icon: Shield,
      title: "Mobility & Fall Prevention",
      description: "Assistance with mobility, transfers, and fall prevention",
    },
    {
      icon: Clock,
      title: "Medication Management",
      description: "Medication reminders and management",
    },
    {
      icon: Utensils,
      title: "Meals & Hydration",
      description: "Help with meals, hydration, and swallowing difficulties",
    },
    {
      icon: User,
      title: "Personal Care",
      description: "Personal care (washing, dressing, toileting)",
    },
    {
      icon: RotateCcw,
      title: "Routine-Based Support",
      description: "Routine-based support to reduce stress and fatigue",
    },
    {
      icon: Activity,
      title: "Exercise & Activities",
      description: "Gentle exercise and daily activity encouragement",
    },
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Emotional support and companionship",
    },
    {
      icon: CheckCircle,
      title: "Consistent Care",
      description: "Consistent care to build trust and reduce anxiety",
    },
  ];

  const whyChooseUs = [
    {
      title: "Caregivers trained in Parkinson's support",
      description: "Specialized training for Parkinson's care",
    },
    {
      title: "24/7 live-in care",
      description: "Tailored to each stage of the condition",
    },
    {
      title: "One-to-one, consistent care",
      description: "To maintain routines and build trust",
    },
    {
      title: "Local service",
      description: "Covering all areas across Devon",
    },
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
                <Activity className="w-4 h-4 mr-2" />
                Specialist Parkinson's Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Parkinson's{" "}
                <span className="text-yellow-300">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Specialist one-to-one support for individuals living with Parkinson's — 
                delivered at home with dignity and consistency.
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

      {/* Living Well with Parkinson's Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Living Well with <span className="text-blue-600">Parkinson's</span>, at Home
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At <strong className="text-blue-600">Skyline Healthcare Solutions Ltd</strong>, we understand the daily challenges 
              of living with Parkinson's disease. Our live-in caregivers provide personalised, 
              round-the-clock support that promotes safety, independence, and comfort — 
              all from the familiarity of home.
            </p>
          </div>
        </div>
      </div>

      {/* What is Parkinson's Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Is <span className="text-blue-600">Parkinson's Disease?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Parkinson's is a progressive neurological condition that affects movement, 
                balance, and coordination. Common symptoms include:
              </p>

              <div className="space-y-4">
                {parkinsonSymptoms.map((symptom, index) => (
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
                <Activity className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Progressive Support</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Parkinson's affects everyone differently and progresses at different rates. 
                  Our caregivers are trained to adapt their support as symptoms change, 
                  ensuring consistent, compassionate care throughout the journey.
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
              Our <span className="text-blue-600">Parkinson's Care Services</span> Include:
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support designed specifically for the unique challenges 
              of living with Parkinson's disease
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
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
              We focus on helping clients maintain quality of life while offering 
              reassurance to families.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <CheckCircle className="w-12 h-12 text-yellow-300 mb-4" />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-lg opacity-90">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
              <MapPin className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Serving All of Devon</h3>
              <p className="text-lg opacity-90">
                Local expertise and deep understanding of Devon communities,
                providing specialized Parkinson's care close to home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We're Here <span className="text-blue-600">for You</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Whether you or your loved one is newly diagnosed or facing more advanced symptoms, 
            we're here to help you live with Parkinson's — not around it.
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
              Live with Parkinson's, Not Around It
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to help you maintain independence, dignity, and quality of life 
              while managing Parkinson's in the comfort of your own home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}