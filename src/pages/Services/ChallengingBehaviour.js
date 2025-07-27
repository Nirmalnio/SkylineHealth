import React from 'react';
import { Heart, Clock, Shield, Home, Users, CheckCircle, Phone, MapPin, Star, User, UserCheck, Brain, Activity, MessageCircle, Eye, Puzzle, HandHeart, Target } from 'lucide-react';

export default function ChallengingBehaviourCarePage() {
  const challengingBehaviours = [
    { icon: MessageCircle, text: "Verbal or physical aggression" },
    { icon: Activity, text: "Self-injury or property damage" },
    { icon: User, text: "Withdrawal or refusal to engage" },
    { icon: Target, text: "Repetitive or obsessive behaviours" },
    { icon: Shield, text: "Resistance to personal care or support" }
  ];

  const careApproach = [
    {
      icon: HandHeart,
      title: "Building Trust & Relationships",
      description: "Developing strong, trusting relationships through consistent, patient care"
    },
    {
      icon: Target,
      title: "Positive Behaviour Support",
      description: "Using evidence-based positive behaviour support techniques and strategies"
    },
    {
      icon: Clock,
      title: "Calm, Predictable Routines",
      description: "Creating structured daily routines that provide security and reduce anxiety"
    },
    {
      icon: MessageCircle,
      title: "Emotional Regulation Support",
      description: "Supporting emotional regulation and improving communication skills"
    },
    {
      icon: User,
      title: "Promoting Independence",
      description: "Encouraging independence and supporting decision-making capabilities"
    },
    {
      icon: Users,
      title: "Family & Professional Collaboration",
      description: "Working closely with families and healthcare professionals for coordinated care"
    }
  ];

  const whyChooseUs = [
    "24/7 dedicated care in the client's home",
    "One-to-one consistency to reduce stress and build trust",
    "Tailored care plans based on expert assessment",
    "Full coverage across Devon"
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
                <Puzzle className="w-4 h-4 mr-2" />
                Specialist Behavioural Care
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Challenging Behaviour <span className="text-cyan-light">Live-In Care</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Specialist one-to-one care for individuals with complex behaviours — in the safety and comfort of their own home across Devon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#FFDFDF] text-[#99235C] px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-200 transition-all transform hover:scale-105 shadow-lg">
                  Get Expert Support
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
                    <Puzzle className="w-32 h-32 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compassionate Care Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Compassionate Care for <span className="text-primary-dark">Complex Needs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At <strong className="text-primary-dark">Skyline Healthcare Solutions Ltd</strong>, we understand that challenging behaviours can be difficult for both
              individuals and families to manage. Our trained live-in caregivers provide calm, consistent support to help
              clients feel safe, understood, and respected — right at home in Devon.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl border-l-4 border-primary-dark">
              <Home className="w-12 h-12 text-primary-dark mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Home Environment</h3>
              <p className="text-gray-700">Receive specialized care in the familiar, secure environment of their own home.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Understanding & Respect</h3>
              <p className="text-gray-700">Compassionate care that seeks to understand and respond to individual needs.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialist Training</h3>
              <p className="text-gray-700">Caregivers trained specifically in managing complex behaviours with expertise.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Is Challenging Behaviour Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Is <span className="text-primary-dark">Challenging Behaviour?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Challenging behaviour can manifest in various ways and often stems from underlying conditions 
                such as autism, learning disabilities, brain injuries, or dementia.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenging behaviour can include:</h3>
              <div className="space-y-4">
                {challengingBehaviours.map((behaviour, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#99235C]">
                    <div className="bg-[#FFDFDF] p-3 rounded-full">
                      <behaviour.icon className="w-6 h-6 text-[#99235C]" />
                    </div>
                    <span className="text-gray-800 font-medium">{behaviour.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#99235C] to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                <Brain className="w-16 h-16 mb-6 text-white/80" />
                <h3 className="text-2xl font-bold mb-4">Understanding the Root Causes</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  These behaviours often stem from conditions such as autism, learning disabilities, 
                  brain injuries, or dementia. Our approach focuses on understanding the individual 
                  behind the behaviour.
                </p>
                <div className="mt-6 bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <Star className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm opacity-90">
                    We believe every behaviour is a form of communication, and our role is to understand 
                    what your loved one is trying to tell us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Approach Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Approach to <span className="text-primary-dark">Challenging Behaviour</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based strategies combined with compassionate care to ensure safety while preserving dignity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careApproach.map((approach, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-[#FFDFDF] p-4 rounded-full w-fit mb-6">
                  <approach.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#FFDFDF] to-pink-100 p-8 rounded-2xl max-w-4xl mx-auto">
              <Eye className="w-12 h-12 text-primary-dark mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ensuring Safety While Preserving Dignity</h3>
              <p className="text-lg text-gray-700">
                Our approach prioritizes both physical and emotional safety while maintaining the individual's 
                dignity and autonomy. We work to understand the person behind the behaviour, not just manage the symptoms.
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
              Why Choose <span className="text-[#FFDFDF]">Skyline in Devon?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our live-in carers are specially trained to support individuals with high needs and complex behaviours.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <CheckCircle className="w-12 h-12 text-[#FFDFDF] mb-4" />
                <p className="text-lg font-medium">{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto">
              <MapPin className="w-12 h-12 text-[#FFDFDF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Expert Behavioural Support Across Devon</h3>
              <p className="text-lg opacity-90">
                Specialized training combined with local knowledge, providing expert challenging behaviour 
                support throughout Devon with understanding and compassion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Support <span className="text-primary-dark">Your Family</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Whether your loved one has a learning disability, autism, or another condition associated with challenging behaviour, 
            we're here to provide reliable, expert care in Devon. Skyline Healthcare Solutions Ltd offers specialized 
            live-in support that understands and responds to complex needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              <Phone className="w-5 h-5 inline mr-2" />
              Contact Us Today
            </button>
            <button className="border-2 border-primary-dark text-primary-dark px-10 py-4 rounded-full font-semibold hover:bg-primary-dark hover:text-white transition-all">
              Request Information
            </button>
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <Puzzle className="w-12 h-12 text-primary-dark mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding, Patience, and Expertise</h3>
            <p className="text-gray-700 text-lg">
              Our mission is to provide specialized care that recognizes the unique needs of each individual, 
              building trust and promoting positive outcomes through consistent, compassionate support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}