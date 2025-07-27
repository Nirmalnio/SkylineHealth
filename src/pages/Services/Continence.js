import React from 'react';
import { Heart, Clock, Shield, Home, Users, CheckCircle, Phone, MapPin, Star, User, UserCheck, Droplets, Activity, Brain, Eye } from 'lucide-react';
import { GrUserExpert } from 'react-icons/gr';

export default function ContinenceCarePage() {
  const conditions = [
    { icon: Droplets, text: "Incontinence (bladder or bowel)" },
    { icon: Activity, text: "Catheter or stoma care needs" },
    { icon: User, text: "Limited mobility affecting toileting" },
    { icon: Heart, text: "Post-surgery recovery or chronic conditions" },
    { icon: Shield, text: "Neurological disorders causing continence issues" }
  ];

  const careServices = [
    {
      icon: User,
      title: "Toileting & Hygiene Support",
      description: "Compassionate assistance with personal hygiene and toileting needs with complete dignity and respect"
    },
    {
      icon: Shield,
      title: "Product Management",
      description: "Professional incontinence pad and product management with discretion and proper protocols"
    },
    {
      icon: Activity,
      title: "Catheter & Stoma Care",
      description: "Expert care for catheters and stomas with proper medical protocols and gentle attention"
    },
    {
      icon: Home,
      title: "Laundry & Bedding",
      description: "Regular laundry and bedding changes to maintain cleanliness, comfort, and home hygiene"
    },
    {
      icon: UserCheck,
      title: "Skin Integrity Checks",
      description: "Regular skin assessments and pressure care to prevent complications and maintain health"
    },
    {
      icon: Clock,
      title: "Routine Setting",
      description: "Establishing helpful routines to prevent accidents and maintain dignity throughout the day"
    }
  ];

  const trustPoints = [
    "24/7 live-in care in the comfort of your own home",
    "A consistent, dedicated carer for familiarity and trust",
    "Clear communication with families every step of the way",
    "Local expertise serving families across Devon & Torbay",
    "Specialist training in continence and personal care",
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
                <Shield className="w-4 h-4 mr-2" />
                Specialized Continence Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Continence{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Dignified, discreet support for bladder and bowel care — delivered with compassion, 
                right at home across Devon & Torbay.
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
              Personal Care That Respects Your{" "}
              <span className="text-[#99235C]">Privacy & Dignity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At{" "}
              <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we understand that continence issues can be sensitive and deeply personal. 
              Our live-in carers provide respectful, round-the-clock support for individuals managing bladder or bowel conditions — 
              all in the comfort and dignity of their own home.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl border-l-4 border-[#99235C]">
              <Home className="w-12 h-12 text-[#99235C] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Comfort</h3>
              <p className="text-gray-700">Receive care in the privacy and comfort of your own familiar environment with personal belongings nearby.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dignity First</h3>
              <p className="text-gray-700">Respectful care that maintains your dignity and independence at all times with complete discretion.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-700">Round-the-clock assistance whenever you need it, with one dedicated carer for consistency.</p>
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
                What Is <span className="text-[#99235C]">Continence Care?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Continence care supports people who experience various bladder and bowel conditions. 
                Our trained carers provide compassionate, professional support for these sensitive needs 
                with complete understanding and respect.
              </p>
              
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#99235C]"
                  >
                    <div className="bg-[#FFDFDF] p-3 rounded-full">
                      <condition.icon className="w-6 h-6 text-[#99235C]" />
                    </div>
                    <span className="text-gray-800 font-medium">
                      {condition.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#99235C] to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                <UserCheck className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Professional Care Team</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Our carers are specially trained in continence care, providing the expertise
                  and sensitivity needed to support you with dignity and professionalism throughout your care journey.
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <GrUserExpert className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">Expert care team with specialized continence training</p>
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
              Comprehensive, personalized care services designed to maintain your comfort, 
              dignity, and well-being with complete sensitivity
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Support & Privacy Assurance</h3>
              <p className="text-lg text-gray-700">
                We understand the emotional challenges that come with continence issues. Our carers
                provide not just physical support, but emotional reassurance and complete privacy protection
                with one dedicated carer who becomes familiar with your needs and preferences.
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
              All our live-in carers are trained in continence care, understanding 
              how to provide sensitive support with patience, compassion, and expertise. We prioritise:
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
                providing discreet, professional care close to home with familiar faces you can trust.
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
              and never alone with their continence care needs.
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
            Looking for trusted continence care at home in Devon or Torbay?
          </p>
          <p className="text-xl font-bold text-gray-900 mb-8">
            <span className="text-[#99235C]">Skyline Healthcare Solutions Ltd</span> is here to help.
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
              Request Free Consultation
              </a>
            </button>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl">
            <Heart className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compassionate Care, Complete Discretion
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to help your loved one maintain dignity, comfort, and quality of life 
              with the most sensitive and professional continence care available — because everyone
              deserves to age with grace and respect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}