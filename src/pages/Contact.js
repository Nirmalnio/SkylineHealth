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
      primary: "+44 7805 694560",
      secondary: "Available 24/7 for emergencies",
      action: "Call Now",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "skylinehealthcaresolutions@outlook.com",
      secondary: "Response within 2 hours",
      action: "Send Email",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
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
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white animate-pulse" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
              We're Here to
              <span className="block bg-gradient-to-r from-[#FFDFDF] to-white bg-clip-text text-transparent">
                Help You Care
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed px-4">
              Compassionate live-in care services tailored to your family's unique needs. 
              Get in touch today for a free consultation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Methods */}
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Contact us directly through any of the methods below. Our care specialists are ready to help.
              </p>
            </div>

            {/* Responsive contact methods grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`${method.bgColor} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-white/50 backdrop-blur-sm group cursor-pointer`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 sm:p-4 bg-white rounded-full mb-4 sm:mb-6 group-hover:bg-[#99235C] transition-colors duration-300">
                      <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                    <p className="text-base sm:text-lg font-semibold text-[#99235C] mb-2 break-all sm:break-normal">{method.primary}</p>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{method.secondary}</p>
                    <button className="bg-[#99235C] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                      {method.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information & Features */}
          <div className="space-y-6 sm:space-y-8">
            {/* Office Information */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-pink-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#99235C] mr-2 sm:mr-3" />
                Visit Our Office
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-[#FFDFDF] rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#99235C]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Main Office</h4>
                    <p className="text-gray-600 text-sm sm:text-base">107 Heron Way<br />Torquay, Devon, TQ2 7SU</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-[#FFDFDF] rounded-full flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#99235C]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Office Hours</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM<br />
                      Sun: Emergency calls only
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-gradient-to-r from-[#FFDFDF] to-pink-100 rounded-xl border border-pink-200">
                  <p className="text-[#99235C] font-semibold text-center text-sm sm:text-base">
                    🚨 24/7 Emergency Support Available
                  </p>
                  <p className="text-gray-700 text-center mt-2 text-xs sm:text-sm">
                    For urgent care needs, call our emergency line anytime
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-white to-[#FFDFDF] rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-pink-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Why Families Trust Us</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="p-2 sm:p-3 bg-white rounded-full shadow-md group-hover:bg-[#99235C] transition-colors duration-300 flex-shrink-0">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Licensed & Insured</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">All caregivers are thoroughly vetted and certified</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="p-2 sm:p-3 bg-white rounded-full shadow-md group-hover:bg-[#99235C] transition-colors duration-300 flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Personalized Care Plans</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Customized to meet individual needs and preferences</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="p-2 sm:p-3 bg-white rounded-full shadow-md group-hover:bg-[#99235C] transition-colors duration-300 flex-shrink-0">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Flexible Scheduling</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">From part-time assistance to 24/7 live-in care</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-inner">
                <p className="text-[#99235C] font-bold text-center text-base sm:text-lg">
                  "The care team gave our family peace of mind during a difficult time."
                </p>
                <p className="text-gray-600 text-center mt-2 text-xs sm:text-sm">- Sarah M., Satisfied Family</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}