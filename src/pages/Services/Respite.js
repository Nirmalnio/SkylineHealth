import React from 'react';
import { Heart, Clock, Shield, Home, Users, CheckCircle, Phone, MapPin, Star, User, UserCheck, Calendar, Coffee, Sunrise, RefreshCw, Utensils, Activity } from 'lucide-react';
import { GrUserExpert } from 'react-icons/gr';

export default function RespiteCarePage() {
  const whenToConsider = [
    { icon: Calendar, text: "You're going on holiday or need time off" },
    { icon: Heart, text: "You're recovering from illness or surgery" },
    { icon: RefreshCw, text: "You're feeling overwhelmed or burnt out" },
    { icon: Activity, text: "Your loved one's condition has changed and needs temporary extra support" }
  ];

  const careServices = [
    {
      icon: User,
      title: "24/7 Personal Care Support",
      description: "Round-the-clock assistance with personal care needs and daily living activities"
    },
    {
      icon: Shield,
      title: "Medication & Mobility Assistance",
      description: "Professional support with medication management and mobility requirements"
    },
    {
      icon: Heart,
      title: "Companionship & Emotional Support",
      description: "Warm companionship and emotional reassurance to maintain well-being"
    },
    {
      icon: Utensils,
      title: "Meal Preparation & Household Tasks",
      description: "Nutritious meal preparation and essential household maintenance"
    },
    {
      icon: Home,
      title: "Familiar Home Environment",
      description: "Care provided in the comfort of their own home to reduce disruption"
    },
    {
      icon: Clock,
      title: "Consistent Care Routines",
      description: "Maintaining established routines to keep things calm and steady"
    }
  ];

  const whyChooseUs = [
    "Experienced live-in carers, even for complex needs",
    "Flexible care plans — from a few days to several weeks",
    "Fully local service across all areas of Devon",
    "Peace of mind for you and comfort for your loved one"
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
                <Coffee className="w-4 h-4 mr-2" />
                Trusted Respite Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Respite{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Trusted short-term care, so you can take a break — with peace of mind your loved one is in safe hands across Devon.
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
                    <Coffee className="w-32 h-32 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support When You Need It Most Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Support When You{" "}
              <span className="text-[#99235C]">Need It Most</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At{" "}
              <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we offer short-term live-in care to give family carers
              time to rest, recharge, or attend to personal needs. Whether it's a few days or a few weeks,
              we'll step in with the same level of warmth, respect, and professionalism.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl border-l-4 border-[#99235C]">
              <Sunrise className="w-12 h-12 text-[#99235C] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time to Recharge</h3>
              <p className="text-gray-700">Take the break you deserve while knowing your loved one receives excellent care.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peace of Mind</h3>
              <p className="text-gray-700">Professional, experienced carers provide the same high standard of care you would.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Comfort</h3>
              <p className="text-gray-700">Your loved one stays in their familiar environment with minimal disruption to routines.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Is Respite Care Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Is <span className="text-[#99235C]">Respite Care?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Respite live-in care is temporary, full-time care provided in the comfort of the person's own home. 
                It gives families a break without compromising on quality or continuity of care.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Consider Respite Care:</h3>
              <div className="space-y-4">
                {whenToConsider.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#99235C]"
                  >
                    <div className="bg-[#FFDFDF] p-3 rounded-full">
                      <reason.icon className="w-6 h-6 text-[#99235C]" />
                    </div>
                    <span className="text-gray-800 font-medium">{reason.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#99235C] to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                <RefreshCw className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Flexible Care Solutions</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Whether you need a few days to attend to personal matters or several weeks for a well-deserved 
                  holiday, our respite care adapts to your schedule and requirements.
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <GrUserExpert className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">From short-term emergency support to planned respite breaks, we're here when you need us most.</p>
                </div>
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
              What Our Respite <span className="text-[#99235C]">Live-In Care</span> Includes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive care services that maintain the same high standards and routines your loved one is accustomed to
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careServices.map((service, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Caring is a Full-Time Job</h3>
              <p className="text-lg text-gray-700">
                We understand the dedication required to care for someone you love. Our respite care ensures 
                you can take the time you need while your loved one receives the same level of compassionate, 
                professional care they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Skyline Section */}
      <div className="py-20 bg-gradient-to-r from-[#99235C] to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Skyline in{" "}
              <span className="text-[#FFDFDF]">Devon?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Trusted respite care that gives you peace of mind and your loved one the comfort they deserve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all"
              >
                <CheckCircle className="w-12 h-12 text-[#FFDFDF] mb-4" />
                <p className="text-lg font-medium">{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
              <MapPin className="w-12 h-12 text-[#FFDFDF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Local Respite Care Across Devon</h3>
              <p className="text-lg opacity-90">
                Available throughout Devon with local knowledge and understanding of community resources, 
                providing reliable respite care when and where you need it most.
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
              With our respite live-in service, your loved one receives round-the-clock care, 
              day and night — so you can rest easy knowing they're safe, supported, 
              and never alone while you take the break you deserve.
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
            Take a Break, <span className="text-[#99235C]">We've Got You Covered</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Caring for someone is a full-time job — but you don't have to do it alone.
          </p>
          <p className="text-xl font-bold text-gray-900 mb-8">
            Let <span className="text-[#99235C]">Skyline Healthcare Solutions Ltd</span> step in and support you with professional, 
            compassionate respite care that gives you the time you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#99235C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#7a1c49] transition-all transform hover:scale-105 shadow-lg">
              <a href="tel:+447805694560" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 inline mr-2" />
                Contact Us Today
              </a>
            </button>
            <button className="border-2 border-[#99235C] text-[#99235C] px-10 py-4 rounded-full font-semibold hover:bg-[#99235C] hover:text-white transition-all">
              <a
                href="mailto:skylinehealthcaresolutions@outlook.com"
              >
                Request Information
              </a>
            </button>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl">
            <Coffee className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              You Deserve a Break
            </h3>
            <p className="text-gray-700 text-lg">
              Whether it's a few days or a few weeks, our respite care ensures your loved one 
              receives the same warmth, respect, and professional care you provide every day — 
              because everyone deserves to be cared for with dignity and compassion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}