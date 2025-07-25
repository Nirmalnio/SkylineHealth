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
      description: "Round-the-clock dedicated support with continuous monitoring and personalized attention"
    },
    {
      icon: Stethoscope,
      title: "Medical Support & Device Management",
      description: "Expert assistance with medication, mobility aids, and specialized medical equipment"
    },
    {
      icon: User,
      title: "Personal Care & Daily Routines",
      description: "Comprehensive support with all aspects of personal care and daily living activities"
    },
    {
      icon: Utensils,
      title: "Meal Preparation & Nutrition",
      description: "Specialized nutrition management including dietary requirements and feeding support"
    },
    {
      icon: MessageCircle,
      title: "Behavioural Support & Emotional Care",
      description: "Professional behavioral guidance and emotional reassurance tailored to individual needs"
    },
    {
      icon: UserCheck,
      title: "Specialist Training & Communication",
      description: "Ongoing carer training and regular updates with families and healthcare professionals"
    }
  ];

  const whyChooseUs = [
    "Fully trained live-in caregivers with specialist expertise",
    "Customised care plans built around your unique needs",
    "Consistency and continuity from a dedicated caregiver",
    "Support across all areas of Devon with local knowledge"
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
                <Heart className="w-4 h-4 mr-2" />
                Expert Complex Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Complex <span className="text-yellow-300">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Expert care for individuals with multiple or high-level needs — provided at home, with dignity and compassion across Devon.
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

      {/* Specialist Support Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Specialist Support for <span className="text-blue-600">Complex Conditions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Skyline Healthcare Solutions Ltd, we offer 24/7 live-in care for clients with complex health or behavioural needs. 
              Our experienced caregivers deliver tailored support that promotes safety, comfort, and independence — 
              all in the familiar setting of your own home in Devon.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home-Based Care</h3>
              <p className="text-gray-700">Receive specialized care in the comfort and familiarity of your own home environment.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
              <Shield className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Dignity</h3>
              <p className="text-gray-700">Professional care that prioritizes your safety while maintaining dignity and independence.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Caregivers</h3>
              <p className="text-gray-700">Highly trained professionals with expertise in complex care conditions and needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who Is Complex Care For Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Who Is <span className="text-blue-600">Complex Care</span> For?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Complex Live-In Care supports individuals living with multiple or challenging conditions 
                that require specialized knowledge, continuous monitoring, and expert medical support.
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
                <Stethoscope className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Medical Expertise</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Our caregivers receive specialized training for complex conditions, working closely with 
                  healthcare providers to ensure the highest standard of medical and personal care.
                </p>
                <div className="mt-6 bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-sm opacity-90">
                    We collaborate with families, healthcare providers, and local authorities to deliver 
                    safe, high-quality care at home.
                  </p>
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
              Our Complex Care <span className="text-blue-600">Services Include</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, specialized care services designed to meet the most complex health and behavioral needs
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate & Professional Approach</h3>
              <p className="text-lg text-gray-700">
                We understand that complex care needs require not just medical expertise, but also empathy, 
                patience, and a deep commitment to maintaining quality of life and personal dignity.
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
              We deliver expert complex care with compassion, consistency, and complete dedication to your well-being.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
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
              <h3 className="text-2xl font-bold mb-4">Trusted Care Across Devon</h3>
              <p className="text-lg opacity-90">
                Local expertise combined with specialist training, providing complex care solutions 
                with deep understanding of Devon communities and healthcare networks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Talk About <span className="text-blue-600">Your Needs</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            If you or your loved one needs complex care at home in Devon, we're here to help with compassion, expertise, and consistency. 
            Skyline Healthcare Solutions Ltd provides specialized live-in support tailored to the most challenging health conditions.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Care, Lasting Comfort</h3>
            <p className="text-gray-700 text-lg">
              Our mission is to provide the highest level of complex care while maintaining dignity, 
              comfort, and quality of life in the safety and familiarity of home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}