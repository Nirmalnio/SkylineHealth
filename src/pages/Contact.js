import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Heart, 
  Shield, 
  Users,
  MessageCircle,
  Calendar,
  CheckCircle
} from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "1-800-CARE-123",
      secondary: "Available 24/7 for emergencies",
      action: "Call Now",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@liveincare.com",
      secondary: "Response within 2 hours",
      action: "Send Email",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      primary: "Chat with our specialists",
      secondary: "Instant responses available",
      action: "Start Chat",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    }
  ];

  const services = [
    "Personal Care Assistance",
    "Companion Care",
    "Dementia & Alzheimer's Care",
    "Post-Surgery Recovery",
    "Medication Management",
    "Housekeeping Support",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#99235C] to-purple-800">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We're Here to
              <span className="block bg-gradient-to-r from-[#FFDFDF] to-white bg-clip-text text-transparent">
                Help You Care
              </span>
            </h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
              Compassionate live-in care services tailored to your family's unique needs. 
              Get in touch today for a free consultation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Quick Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 -mt-10">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`${method.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white/50 backdrop-blur-sm group cursor-pointer`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white rounded-full mb-6 group-hover:bg-[#99235C] transition-colors duration-300">
                  <method.icon className="w-8 h-8 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-lg font-semibold text-[#99235C] mb-2">{method.primary}</p>
                <p className="text-gray-600 mb-6">{method.secondary}</p>
                <button className="bg-[#99235C] text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  {method.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-pink-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Request Information</h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and our care specialists will contact you within 24 hours.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-800 font-semibold">Thank you! We'll be in touch soon.</p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                      focusedField === 'name' 
                        ? 'border-[#99235C] ring-4 ring-[#FFDFDF] transform scale-105' 
                        : 'border-gray-300 hover:border-[#99235C]'
                    }`}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'border-[#99235C] ring-4 ring-[#FFDFDF] transform scale-105' 
                        : 'border-gray-300 hover:border-[#99235C]'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                      focusedField === 'phone' 
                        ? 'border-[#99235C] ring-4 ring-[#FFDFDF] transform scale-105' 
                        : 'border-gray-300 hover:border-[#99235C]'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                      focusedField === 'service' 
                        ? 'border-[#99235C] ring-4 ring-[#FFDFDF] transform scale-105' 
                        : 'border-gray-300 hover:border-[#99235C]'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">How urgent is your need?</label>
                <div className="grid grid-cols-3 gap-4">
                  {['normal', 'soon', 'urgent'].map((level) => (
                    <label key={level} className="cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={level}
                        checked={formData.urgency === level}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-xl text-center transition-all duration-300 ${
                        formData.urgency === level
                          ? 'border-[#99235C] bg-[#FFDFDF] text-[#99235C] transform scale-105'
                          : 'border-gray-300 hover:border-[#99235C] hover:bg-pink-50'
                      }`}>
                        <div className="font-semibold capitalize">{level}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {level === 'normal' && 'Within 2 weeks'}
                          {level === 'soon' && 'Within 1 week'}
                          {level === 'urgent' && 'ASAP'}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Tell us about your needs</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  rows="6"
                  className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 resize-none ${
                    focusedField === 'message' 
                      ? 'border-[#99235C] ring-4 ring-[#FFDFDF] transform scale-105' 
                      : 'border-gray-300 hover:border-[#99235C]'
                  }`}
                  placeholder="Please describe the care needs, preferred schedule, any special requirements, and any questions you may have..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#99235C] to-purple-700 text-white py-5 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-[#99235C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </div>
          </div>

          {/* Contact Information & Features */}
          <div className="space-y-8">
            {/* Office Information */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <MapPin className="w-7 h-7 text-[#99235C] mr-3" />
                Visit Our Office
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#FFDFDF] rounded-full">
                    <MapPin className="w-5 h-5 text-[#99235C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Main Office</h4>
                    <p className="text-gray-600">123 Care Street<br />Compassion City, CC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#FFDFDF] rounded-full">
                    <Clock className="w-5 h-5 text-[#99235C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Hours</h4>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM<br />
                      Sun: Emergency calls only
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-[#FFDFDF] to-pink-100 rounded-xl border border-pink-200">
                  <p className="text-[#99235C] font-semibold text-center">
                    🚨 24/7 Emergency Support Available
                  </p>
                  <p className="text-gray-700 text-center mt-2">
                    For urgent care needs, call our emergency line anytime
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-white to-[#FFDFDF] rounded-3xl shadow-2xl p-10 border border-pink-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Families Trust Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-white rounded-full shadow-md group-hover:bg-[#99235C] transition-colors duration-300">
                    <Shield className="w-6 h-6 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Licensed & Insured</h4>
                    <p className="text-gray-600">All caregivers are thoroughly vetted and certified</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-white rounded-full shadow-md group-hover:bg-[#99235C] transition-colors duration-300">
                    <Users className="w-6 h-6 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Personalized Care Plans</h4>
                    <p className="text-gray-600">Customized to meet individual needs and preferences</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-white rounded-full shadow-md group-hover:bg-[#99235C] transition-colors duration-300">
                    <Calendar className="w-6 h-6 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Flexible Scheduling</h4>
                    <p className="text-gray-600">From part-time assistance to 24/7 live-in care</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-inner">
                <p className="text-[#99235C] font-bold text-center text-lg">
                  "The care team gave our family peace of mind during a difficult time."
                </p>
                <p className="text-gray-600 text-center mt-2">- Sarah M., Satisfied Family</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-center shadow-2xl">
          <div className="flex justify-center mb-4">
            <Phone className="w-10 h-10 text-white animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Need Immediate Care?</h3>
          <p className="text-red-100 mb-6 text-lg">
            Our emergency response team is available 24/7 for urgent situations
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Call Emergency Line: 1-800-URGENT-1
          </button>
        </div>
      </div>
    </div>
  );
}