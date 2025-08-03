import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { Heart, Clock, Shield, Home, Users, CheckCircle, Phone, MapPin, Star, User, UserCheck, Brain, Activity, MessageCircle, Eye, Puzzle, HandHeart, Target } from 'lucide-react';
import { GrUserExpert } from 'react-icons/gr';

export default function ChallengingBehaviourCarePage() {
  // Ref for the why choose us section
  const whyChooseUsRef = useRef(null);

  // Function to scroll to why choose us section
  const scrollToWhyChooseUs = () => {
    whyChooseUsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

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

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-[#99235C] via-purple-700 to-blue-700 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Puzzle className="w-4 h-4 mr-2" />
                Specialist Behavioural Care
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Challenging Behaviour{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Specialist one-to-one care for individuals with complex behaviours — in the safety and comfort of their own home across Devon.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <a href="/contact-us">
                  <motion.button 
                    className="bg-[#FFDFDF] text-[#99235C] px-8 py-4 rounded-full font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Get Free Consultation
                  </motion.button>
                </a>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold"
                  onClick={scrollToWhyChooseUs}
                  whileHover={{ backgroundColor: "white", color: "#99235C", scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More About Our Care
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Puzzle className="w-32 h-32 text-white/80" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Compassionate Care Section */}
      <motion.div 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Compassionate Care for{" "}
              <span className="text-[#99235C]">Complex Needs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we understand that challenging behaviours can be difficult for both
              individuals and families to manage. Our trained live-in carers provide calm, consistent support to help
              clients feel safe, understood, and respected — right at home in Devon.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl border-l-4 border-[#99235C] relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(153, 35, 92, 0.2)",
                scale: 1.02
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#99235C]/5 to-pink-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Home className="w-12 h-12 text-[#99235C] mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Safe Home Environment
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Receive specialized care in the familiar, secure environment of their own home.
              </motion.p>

              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-[#99235C]/20 rounded-full"
                animate={{ 
                  y: [-5, -15, -5],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute bottom-6 right-8 w-1 h-1 bg-pink-400/30 rounded-full"
                animate={{ 
                  y: [-3, -10, -3],
                  x: [-2, 2, -2],
                  opacity: [0.4, 0.9, 0.4]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -15, 
                rotateY: -5,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.2)",
                scale: 1.02
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Understanding & Respect
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Compassionate care that seeks to understand and respond to individual needs.
              </motion.p>

              <motion.div
                className="absolute top-6 right-6 w-2 h-2 bg-purple-600/20 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.8
                }}
              />
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(37, 99, 235, 0.2)",
                scale: 1.02
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Brain className="w-12 h-12 text-blue-600 mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Specialist Training
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Carers trained specifically in managing complex behaviours with expertise.
              </motion.p>

              <motion.div
                className="absolute top-5 right-5 w-2 h-2 bg-blue-600/20 rounded-full"
                animate={{ 
                  x: [-3, 3, -3],
                  y: [-2, -6, -2],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.1
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* What Is Challenging Behaviour Section */}
      <motion.div 
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...slideInLeft}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What Is <span className="text-[#99235C]">Challenging Behaviour?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Challenging behaviour can manifest in various ways and often stems from underlying conditions 
                such as autism, learning disabilities, brain injuries, or dementia.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenging behaviour can include:</h3>
              <motion.div 
                className="space-y-4"
              >
                {challengingBehaviours.map((behaviour, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#99235C]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 120,
                      damping: 15
                    }}
                    whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  >
                    <motion.div 
                      className="bg-[#FFDFDF] p-3 rounded-full"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <behaviour.icon className="w-6 h-6 text-[#99235C]" />
                    </motion.div>
                    <span className="text-gray-800 font-medium">
                      {behaviour.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              {...slideInRight}
            >
              <motion.div 
                className="bg-gradient-to-br from-[#99235C] to-purple-600 p-8 rounded-3xl text-white shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotateY: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Brain className="w-16 h-16 mb-6 text-white/80" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Understanding the Root Causes</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  These behaviours often stem from conditions such as autism, learning disabilities, 
                  brain injuries, or dementia. Our approach focuses on understanding the individual 
                  behind the behaviour.
                </p>
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-xl"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <GrUserExpert className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">
                    We believe every behaviour is a form of communication, and our role is to understand 
                    what your loved one is trying to tell us.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Care Approach Section */}
      <motion.div 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Approach to <span className="text-[#99235C]">Challenging Behaviour</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based strategies combined with compassionate care to ensure safety while preserving dignity
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {careApproach.map((approach, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-2xl group cursor-pointer"
                variants={staggerItem}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  borderColor: "#99235C"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="bg-[#FFDFDF] p-4 rounded-full w-fit mb-6 group-hover:bg-[#99235C] transition-colors duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <approach.icon className="w-8 h-8 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-[#FFDFDF] to-pink-100 p-8 rounded-2xl max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Eye className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ensuring Safety While Preserving Dignity</h3>
              <p className="text-lg text-gray-700">
                Our approach prioritizes both physical and emotional safety while maintaining the individual's 
                dignity and autonomy. We work to understand the person behind the behaviour, not just manage the symptoms.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Choose Skyline Section */}
      <motion.div 
        ref={whyChooseUsRef}
        className="py-20 bg-gradient-to-r from-[#99235C] to-purple-700 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-[#FFDFDF]">Skyline in Devon?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our live-in carers are specially trained to support individuals with high needs and complex behaviours.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl cursor-pointer"
                variants={staggerItem}
                whileHover={{ 
                  backgroundColor: "rgba(255,255,255,0.2)",
                  scale: 1.05,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 500 }}
                >
                  <CheckCircle className="w-12 h-12 text-[#FFDFDF] mb-4" />
                </motion.div>
                <p className="text-lg font-medium">{reason}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.3)", scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="w-12 h-12 text-[#FFDFDF] mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Expert Behavioural Support Across Devon</h3>
              <p className="text-lg opacity-90">
                Specialized training combined with local knowledge, providing expert challenging behaviour 
                support throughout Devon with understanding and compassion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            {...fadeInUp}
          >
            Let's Support <span className="text-[#99235C]">Your Family</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Whether your loved one has a learning disability, autism, or another condition associated with challenging behaviour, 
            we're here to provide reliable, expert care in Devon. Skyline Healthcare Solutions Ltd offers specialized 
            live-in support that understands and responds to complex needs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button 
              className="bg-[#99235C] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#7a1c49",
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href="tel:+447805694560" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 inline mr-2" />
                Contact Us Today
              </a>
            </motion.button>
            <motion.button 
              className="border-2 border-[#99235C] text-[#99235C] px-10 py-4 rounded-full font-semibold"
              whileHover={{ 
                backgroundColor: "#99235C", 
                color: "white",
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <a href="mailto:skylinehealthcaresolutions@outlook.com">
                Request Information
              </a>
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Puzzle className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding, Patience, and Expertise</h3>
            <p className="text-gray-700 text-lg">
              Our mission is to provide specialized care that recognizes the unique needs of each individual, 
              building trust and promoting positive outcomes through consistent, compassionate support.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}