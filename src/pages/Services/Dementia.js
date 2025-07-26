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

export default function DementiaAlzheimerCarePage() {
  const commonSymptoms = [
    { icon: Brain, text: "Short-term memory loss and forgetfulness" },
    { icon: Repeat, text: "Repeating questions or misplacing items" },
    { icon: HelpCircle, text: "Difficulty with familiar tasks and routines" },
    { icon: MapPin, text: "Confusion, disorientation, and wandering" },
    { icon: Users, text: "Mood and personality changes" },
    { icon: Phone, text: "Problems communicating effectively" },
  ];

  const careSupport = [
    {
      icon: Clock,
      title: "Daily Structure & Routines",
      description: "Carefully planned activities and familiar routines to reduce anxiety and maintain stability",
    },
    {
      icon: Heart,
      title: "Personal Care & Medication",
      description: "Help with meals, medication management, and daily personal care needs",
    },
    {
      icon: Brain,
      title: "Memory Stimulation",
      description: "Gentle cognitive stimulation, memory exercises, and engaging activities",
    },
    {
      icon: Eye,
      title: "Safe Supervision",
      description: "24/7 supervision to prevent wandering, falls, and ensure home safety",
    },
    {
      icon: Shield,
      title: "Behavioral Support",
      description: "Professional behavioral management and emotional reassurance during difficult moments",
    },
    {
      icon: Users,
      title: "Family Respite Care",
      description: "Dedicated respite services and support for family caregivers who need a break",
    },
  ];

  const trustPoints = [
    "24/7 live-in care in the comfort of your own home",
    "A consistent, dedicated caregiver for familiarity and trust",
    "Clear communication with families every step of the way",
    "Local expertise serving families across Devon & Torbay",
    "Specialist training in dementia and Alzheimer's care",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#99235C] via-purple-700 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Specialized Dementia & Alzheimer's Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Dementia & Alzheimer's{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Compassionate, round-the-clock support for those living with
                dementia or Alzheimer's — right in the comfort of home across Devon & Torbay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#FFDFDF] text-[#99235C] px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-200 transition-all transform hover:scale-105 shadow-lg">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#99235C] transition-all">
                  Learn More About Our Care
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
              <span className="text-[#99235C]">Dignity & Compassion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A dementia or Alzheimer's diagnosis doesn't mean losing independence. At{" "}
              <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we provide
              personalized live-in care that helps individuals stay safe, supported, and
              comfortable in familiar surroundings — maintaining their routines, sense of self, and dignity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl border-l-4 border-[#99235C]">
              <Home className="w-12 h-12 text-[#99235C] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Comfort</h3>
              <p className="text-gray-700">Stay in familiar surroundings with personal belongings, routines, and cherished memories close by.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Security</h3>
              <p className="text-gray-700">Comprehensive safety monitoring, fall prevention, and secure supervision 24/7.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consistent Care</h3>
              <p className="text-gray-700">One dedicated caregiver who becomes familiar with needs, preferences, and daily routines.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Conditions Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Understanding <span className="text-[#99235C]">Dementia & Alzheimer's</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Both dementia and Alzheimer's are progressive conditions that affect memory,
                thinking, and behavior over time. While Alzheimer's is the most common form of dementia,
                both conditions share similar symptoms and care needs:
              </p>

              <div className="space-y-4">
                {commonSymptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#99235C]"
                  >
                    <div className="bg-[#FFDFDF] p-3 rounded-full">
                      <symptom.icon className="w-6 h-6 text-[#99235C]" />
                    </div>
                    <span className="text-gray-800 font-medium">
                      {symptom.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#99235C] to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                <Brain className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Understanding the Journey</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Every person's experience with dementia or Alzheimer's is unique. Our caregivers 
                  are specially trained to provide compassionate support that adapts 
                  to each stage of the condition.
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <Star className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">Expert care team with specialized dementia training</p>
                </div>
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
              How We Support <span className="text-[#99235C]">Our Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our trained caregivers provide comprehensive support tailored 
              to the unique needs of those living with dementia or Alzheimer's
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careSupport.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="bg-[#FFDFDF] p-4 rounded-full w-fit mb-6 group-hover:bg-[#99235C] transition-colors">
                  <service.icon className="w-8 h-8 text-[#99235C] group-hover:text-white transition-colors" />
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

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#FFDFDF] to-pink-100 p-8 rounded-2xl max-w-4xl mx-auto">
              <Heart className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One Dedicated Caregiver</h3>
              <p className="text-lg text-gray-700">
                For consistency and trust, we provide one dedicated caregiver who becomes familiar 
                with your loved one's needs, preferences, and daily routines — creating a sense of 
                security and reducing anxiety that can come with unfamiliar faces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specialist Care Section */}
      <div className="py-20 bg-gradient-to-r from-[#99235C] to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Specialist Care You Can{" "}
              <span className="text-[#FFDFDF]">Trust</span>
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              All our live-in caregivers are trained in dementia and Alzheimer's care, understanding 
              how to respond to changing behaviors with patience, compassion, and expertise. We prioritise:
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 mb-12">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all"
              >
                <CheckCircle className="w-10 h-10 text-[#FFDFDF] mb-4" />
                <p className="text-sm font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
              <MapPin className="w-12 h-12 text-[#FFDFDF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Serving Devon & Torbay</h3>
              <p className="text-lg opacity-90">
                Local expertise and deep understanding of our communities, 
                providing personalized care close to home with familiar faces you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 24/7 Peace of Mind Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <Shield className="w-16 h-16 text-[#99235C] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              24/7 <span className="text-[#99235C]">Peace of Mind</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              With our live-in service, your loved one receives round-the-clock care, 
              day and night — so you can rest easy knowing they're safe, supported, 
              and never alone.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">24/7 Availability</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Compassionate Care</p>
              </div>
              <div className="text-center">
                <Home className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">In Your Own Home</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch <span className="text-[#99235C]">Today</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Looking for trusted dementia or Alzheimer's care at home in Devon or Torbay?
          </p>
          <p className="text-xl font-bold text-gray-900 mb-8">
            <span className="text-[#99235C]">Skyline Healthcare Solutions Ltd</span> is here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#99235C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#7a1c49] transition-all transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5 inline mr-2" />
              Contact Us Today
            </button>
            <button className="border-2 border-[#99235C] text-[#99235C] px-10 py-4 rounded-full font-semibold hover:bg-[#99235C] hover:text-white transition-all">
              Request Free Consultation
            </button>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl">
            <Heart className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compassionate Care, Every Day
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to help your loved one maintain dignity, comfort,
              and quality of life in the familiar surroundings of home — because everyone
              deserves to age with grace and respect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}