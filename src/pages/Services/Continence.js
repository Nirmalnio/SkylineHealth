import React from 'react';
import { Heart, Clock, Shield, Home, Users, CheckCircle, Phone, MapPin, Star, User, UserCheck, Droplets, Activity } from 'lucide-react';

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
      description: "Compassionate assistance with personal hygiene and toileting needs"
    },
    {
      icon: Shield,
      title: "Product Management",
      description: "Professional incontinence pad and product management with discretion"
    },
    {
      icon: Activity,
      title: "Catheter & Stoma Care",
      description: "Expert care for catheters and stomas with proper medical protocols"
    },
    {
      icon: Home,
      title: "Laundry & Bedding",
      description: "Regular laundry and bedding changes to maintain cleanliness and comfort"
    },
    {
      icon: UserCheck,
      title: "Skin Integrity Checks",
      description: "Regular skin assessments and pressure care to prevent complications"
    },
    {
      icon: Clock,
      title: "Routine Setting",
      description: "Establishing helpful routines to prevent accidents and maintain dignity"
    }
  ];

  const whyChooseUs = [
    "Experienced, compassionate caregivers trained in personal care",
    "Live-in, 24/7 support — help is always available",
    "Discreet, respectful service focused on dignity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden ">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Specialized Continence Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Continence <span className="text-yellow-300">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Dignified, discreet support for bladder and bowel care — delivered with compassion, right at home across Devon.
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
                    <Shield className="w-32 h-32 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Care Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personal Care That Respects Your <span className="text-blue-600">Privacy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Skyline Healthcare Solutions Ltd, we understand that continence issues can be sensitive and deeply personal. 
              Our live-in carers provide respectful, round-the-clock support for individuals managing bladder or bowel conditions — 
              all in the comfort and dignity of their own home across Devon.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Comfort</h3>
              <p className="text-gray-700">Receive care in the privacy and comfort of your own familiar environment.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
              <Shield className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dignity First</h3>
              <p className="text-gray-700">Respectful care that maintains your dignity and independence at all times.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-700">Round-the-clock assistance whenever you need it, with complete discretion.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Is Continence Care Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Is <span className="text-blue-600">Continence Care?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Continence care supports people who experience various bladder and bowel conditions. 
                Our trained caregivers provide compassionate, professional support for these sensitive needs.
              </p>
              
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <condition.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{condition.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                <UserCheck className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Professional Care Team</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Our caregivers are specially trained in continence care, providing the expertise 
                  and sensitivity needed to support you with dignity and professionalism.
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
              How We <span className="text-blue-600">Support You</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, personalized care services designed to maintain your comfort, dignity, and well-being
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
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Support & Privacy Assurance</h3>
              <p className="text-lg text-gray-700">
                We understand the emotional challenges that come with continence issues. Our caregivers 
                provide not just physical support, but emotional reassurance and complete privacy protection.
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
              We prioritise independence, respect, and well-being — always with sensitivity and professionalism.
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
              <h3 className="text-2xl font-bold mb-4">Reliable Care Available Across Devon</h3>
              <p className="text-lg opacity-90">
                Local expertise and deep understanding of Devon communities, 
                providing discreet, professional care close to home.
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
            Whether your loved one needs long-term continence care or short-term recovery support, we're here to make life easier — and more comfortable. 
            Skyline Healthcare Solutions Ltd offers trusted, compassionate live-in support with complete discretion.
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
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Care, Complete Discretion</h3>
            <p className="text-gray-700 text-lg">
              Our mission is to help your loved one maintain dignity, comfort, and quality of life 
              with the most sensitive and professional continence care available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}