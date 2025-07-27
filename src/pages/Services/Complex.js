import React from 'react';
import { Heart, Clock, Shield, Home, Users, CheckCircle, Phone, MapPin, Star, User, UserCheck, Brain, Activity, Stethoscope, Utensils, MessageCircle, Eye } from 'lucide-react';

export default function ComplexCarePage() {
  const conditions = [
    { icon: Heart, text: "Multiple long-term conditions" },
    { icon: User, text: "Physical or learning disabilities" },
    { icon: Brain, text: "Brain or spinal injuries" },
    { icon: Activity, text: "Neurological disorders (e.g. MS, stroke, epilepsy)" },
    { icon: Stethoscope, text: "PEG feeding or tracheostomy care" },
    { icon: Shield, text: "Palliative and end-of-life needs" },
    { icon: MessageCircle, text: "Mental health or behavioural challenges" }
  ];

  const careServices = [
    {
      icon: Eye,
      title: "24/7 Supervision & One-to-One Care",
      description: "Round-the-clock dedicated support with continuous monitoring and personalized attention to ensure safety"
    },
    {
      icon: Stethoscope,
      title: "Medical Support & Device Management",
      description: "Expert assistance with medication, mobility aids, and specialized medical equipment management"
    },
    {
      icon: User,
      title: "Personal Care & Daily Routines",
      description: "Comprehensive support with all aspects of personal care and daily living activities with dignity"
    },
    {
      icon: Utensils,
      title: "Meal Preparation & Nutrition",
      description: "Specialized nutrition management including dietary requirements and feeding support tailored to needs"
    },
    {
      icon: MessageCircle,
      title: "Behavioural Support & Emotional Care",
      description: "Professional behavioral guidance and emotional reassurance tailored to individual needs and challenges"
    },
    {
      icon: UserCheck,
      title: "Specialist Training & Communication",
      description: "Ongoing carer training and regular updates with families and healthcare professionals for continuity"
    }
  ];

  const trustPoints = [
    "24/7 live-in care in the comfort of your own home",
    "A consistent, dedicated caregiver for familiarity and trust",
    "Clear communication with families every step of the way",
    "Local expertise serving families across Devon & Torbay",
    "Specialist training in complex care conditions and needs",
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
                <Heart className="w-4 h-4 mr-2" />
                Expert Complex Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Complex{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Expert care for individuals with multiple or high-level needs — provided at home, 
                with dignity and compassion across Devon & Torbay.
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
              Specialist Support for{" "}
              <span className="text-[#99235C]">Complex Conditions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At{" "}
              <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we offer 24/7 live-in care for clients with complex health or behavioural needs. 
              Our experienced caregivers deliver tailored support that promotes safety, comfort, and independence — 
              all in the familiar setting of your own home.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl border-l-4 border-[#99235C]">
              <Home className="w-12 h-12 text-[#99235C] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home-Based Care</h3>
              <p className="text-gray-700">Receive specialized care in the comfort and familiarity of your own home environment with personal belongings nearby.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Dignity</h3>
              <p className="text-gray-700">Professional care that prioritizes your safety while maintaining dignity and independence at all times.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Caregivers</h3>
              <p className="text-gray-700">Highly trained professionals with expertise in complex care conditions and specialized medical needs.</p>
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
                Who Is <span className="text-[#99235C]">Complex Care</span> For?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Complex Live-In Care supports individuals living with multiple or challenging conditions 
                that require specialized knowledge, continuous monitoring, and expert medical support with 
                compassionate understanding.
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
                <Stethoscope className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Medical Expertise</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Our caregivers receive specialized training for complex conditions, working closely with 
                  healthcare providers to ensure the highest standard of medical and personal care throughout the journey.
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <Star className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">Expert care team with specialized complex care training</p>
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
              Comprehensive, specialized care services designed to meet the most complex 
              health and behavioral needs with expert attention
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate & Professional Approach</h3>
              <p className="text-lg text-gray-700">
                We understand that complex care needs require not just medical expertise, but also empathy, 
                patience, and a deep commitment to maintaining quality of life and personal dignity. 
                Our dedicated caregiver becomes familiar with your unique needs and preferences.
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
              All our live-in caregivers are trained in complex care, understanding 
              how to provide specialized support with patience, compassion, and expertise. We prioritise:
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
                Local expertise combined with specialist training, providing complex care solutions 
                with deep understanding of our communities and healthcare networks.
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
              and never alone with their complex care needs.
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
            Looking for trusted complex care at home in Devon or Torbay?
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
              Expert Care, Lasting Comfort
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to provide the highest level of complex care while maintaining dignity, 
              comfort, and quality of life in the safety and familiarity of home — because everyone
              deserves to age with grace and respect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}