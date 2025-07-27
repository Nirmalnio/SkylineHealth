import React from 'react';
import { Heart, Clock, Shield, Home, Users, CheckCircle, Phone, MapPin, Star, User, UserCheck, Flower2, Stethoscope, MessageCircle, Utensils, Moon, HandHeart } from 'lucide-react';

export default function EndOfLifeCarePage() {
  const endOfLifeSupport = [
    { icon: Shield, text: "Physical comfort" },
    { icon: Stethoscope, text: "Pain and symptom management" },
    { icon: Heart, text: "Emotional and spiritual support" },
    { icon: Flower2, text: "Dignity and respect in their final days" }
  ];

  const careServices = [
    {
      icon: User,
      title: "Personal Care & Comfort",
      description: "Gentle assistance with washing, dressing, and toileting with complete dignity"
    },
    {
      icon: Stethoscope,
      title: "Medication & Pain Relief",
      description: "Professional support with medication management and pain relief coordination"
    },
    {
      icon: Heart,
      title: "Emotional Comfort & Companionship",
      description: "Compassionate presence and emotional support during difficult moments"
    },
    {
      icon: Utensils,
      title: "Nutrition & Hydration Support",
      description: "Gentle assistance with eating, drinking, and maintaining comfort"
    },
    {
      icon: MessageCircle,
      title: "Family & Professional Communication",
      description: "Respectful liaison with family members and healthcare professionals"
    },
    {
      icon: HandHeart,
      title: "Grief & Bereavement Support",
      description: "Compassionate support for loved ones during and after this difficult time"
    }
  ];

  const whyChooseUs = [
    "Experienced end-of-life caregivers trained in palliative support",
    "24/7 live-in care tailored to your loved one's needs",
    "One-to-one attention in the comfort of home",
    "Compassionate, local care delivered across Devon"
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
                <Flower2 className="w-4 h-4 mr-2" />
                Compassionate End of Life Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                End of Life{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Comfort, dignity, and peace — compassionate care for your loved one's final journey at home in Devon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#FFDFDF] text-[#99235C] px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-200 transition-all transform hover:scale-105 shadow-lg">
                  Get Compassionate Support
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#99235C] transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Flower2 className="w-32 h-32 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sensitive Support Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sensitive Support at Life's{" "}
              <span className="text-[#99235C]">Most Important Time</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At{" "}
              <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we provide 24/7 live-in care to support individuals and families 
              during the final stages of life. Our goal is to ensure your loved one feels safe, comfortable, 
              and respected — in the familiar surroundings of home.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl border-l-4 border-[#99235C]">
              <Home className="w-12 h-12 text-[#99235C] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Comfort</h3>
              <p className="text-gray-700">Experience final moments in the warmth and familiarity of their own home environment.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dignity & Respect</h3>
              <p className="text-gray-700">Compassionate care that honors their wishes and maintains dignity throughout.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Support</h3>
              <p className="text-gray-700">Emotional support for the whole family during this most difficult time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Is End of Life Care Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Is <span className="text-[#99235C]">End of Life Care?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                End of life care supports people with terminal or life-limiting conditions, 
                focusing on comfort, dignity, and quality of life during their final journey.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our care ensures:</h3>
              <div className="space-y-4">
                {endOfLifeSupport.map((support, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#99235C]"
                  >
                    <div className="bg-[#FFDFDF] p-3 rounded-full">
                      <support.icon className="w-6 h-6 text-[#99235C]" />
                    </div>
                    <span className="text-gray-800 font-medium">{support.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#99235C] to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                <Moon className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">A Peaceful Environment</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  We create a calm, peaceful environment where your loved one can pass with dignity, 
                  surrounded by the comfort of home and the people they love most.
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <Star className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">
                    We work alongside district nurses, GPs, and hospices to ensure seamless care 
                    that meets both medical and emotional needs.
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
              How We <span className="text-[#99235C]">Support You</span> and Your Loved One
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, compassionate care services designed to provide comfort, dignity, and peace during life's final chapter
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
              <Flower2 className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Calm, Peaceful Environment</h3>
              <p className="text-lg text-gray-700">
                We understand the profound importance of this time. Our caregivers provide not just medical support, 
                but create an atmosphere of tranquility, love, and respect for passing with complete dignity.
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
              Compassionate end of life care that honors your loved one's wishes while supporting your entire family.
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
              <h3 className="text-2xl font-bold mb-4">Compassionate Care Across Devon</h3>
              <p className="text-lg opacity-90">
                Local expertise combined with specialized palliative care training, 
                providing sensitive end of life support throughout Devon communities.
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
              24/7 <span className="text-[#99235C]">Compassionate Support</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              With our end of life live-in service, your loved one receives round-the-clock compassionate care, 
              ensuring they are never alone and always comfortable during this sacred time.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">24/7 Presence</p>
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
            Here When It <span className="text-[#99235C]">Matters Most</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            We understand how difficult this time can be. Let us walk alongside you with care, compassion, and unwavering support.
          </p>
          <p className="text-xl font-bold text-gray-900 mb-8">
            <span className="text-[#99235C]">Skyline Healthcare Solutions Ltd</span> provides the gentle, professional end of life care your loved one deserves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#99235C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#7a1c49] transition-all transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5 inline mr-2" />
              Contact Us Today
            </button>
            <button className="border-2 border-[#99235C] text-[#99235C] px-10 py-4 rounded-full font-semibold hover:bg-[#99235C] hover:text-white transition-all">
              Request Information
            </button>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl">
            <HandHeart className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              With Dignity, Love, and Respect
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to ensure your loved one's final journey is filled with comfort, dignity, and peace, 
              surrounded by the love of family in the place they call home — because everyone deserves to pass 
              with grace and honor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}