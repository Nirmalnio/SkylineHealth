import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { Heart, Clock, Shield, Home, CheckCircle, Phone, MapPin, User, Calendar, Coffee, Sunrise, RefreshCw, Utensils, Activity } from 'lucide-react';
import { GrUserExpert } from 'react-icons/gr';

export default function RespiteCarePage() {
  // Ref for the why choose us section
  const whyChooseUsRef = useRef(null);

  // Function to scroll to why choose us section
  const scrollToWhyChooseUs = () => {
    whyChooseUsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

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
                <Coffee className="w-4 h-4 mr-2" />
                Trusted Respite Care
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Respite{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Trusted short-term care, so you can take a break — with peace of mind your loved one is in safe hands across Devon.
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
                      <Coffee className="w-32 h-32 text-white/80" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Support When You Need It Most Section */}
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
              Support When You{" "}
              <span className="text-[#99235C]">Need It Most</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At{" "}
              <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we offer short-term live-in care to give family carers
              time to rest, recharge, or attend to personal needs. Whether it's a few days or a few weeks,
              we'll step in with the same level of warmth, respect, and professionalism.
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
                <Sunrise className="w-12 h-12 text-[#99235C] mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Time to Recharge
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Take the break you deserve while knowing your loved one receives excellent care.
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
                Peace of Mind
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Professional, experienced carers provide the same high standard of care you would.
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
                <Home className="w-12 h-12 text-blue-600 mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Home Comfort
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Your loved one stays in their familiar environment with minimal disruption to routines.
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

      {/* What Is Respite Care Section */}
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
                What Is <span className="text-[#99235C]">Respite Care?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Respite live-in care is temporary, full-time care provided in the comfort of the person's own home. 
                It gives families a break without compromising on quality or continuity of care.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Consider Respite Care:</h3>
              <motion.div 
                className="space-y-4"
              >
                {whenToConsider.map((reason, index) => (
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
                      <reason.icon className="w-6 h-6 text-[#99235C]" />
                    </motion.div>
                    <span className="text-gray-800 font-medium">{reason.text}</span>
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
                  <RefreshCw className="w-16 h-16 mb-6 text-white/80" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Flexible Care Solutions</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Whether you need a few days to attend to personal matters or several weeks for a well-deserved 
                  holiday, our respite care adapts to your schedule and requirements.
                </p>
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-xl"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <GrUserExpert className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">From short-term emergency support to planned respite breaks, we're here when you need us most.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Care Services Section */}
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
              What Our Respite <span className="text-[#99235C]">Live-In Care</span> Includes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive care services that maintain the same high standards and routines your loved one is accustomed to
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {careServices.map((service, index) => (
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
                  <service.icon className="w-8 h-8 text-[#99235C] group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
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
                <Heart className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Caring is a Full-Time Job</h3>
              <p className="text-lg text-gray-700">
                We understand the dedication required to care for someone you love. Our respite care ensures 
                you can take the time you need while your loved one receives the same level of compassionate, 
                professional care they deserve.
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
              Why Choose Skyline in{" "}
              <span className="text-[#FFDFDF]">Devon?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Trusted respite care that gives you peace of mind and your loved one the comfort they deserve.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl cursor-pointer"
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
              <h3 className="text-2xl font-bold mb-4">Local Respite Care Across Devon</h3>
              <p className="text-lg opacity-90">
                Available throughout Devon with local knowledge and understanding of community resources, 
                providing reliable respite care when and where you need it most.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* 24/7 Peace of Mind Section */}
      <motion.div 
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            className="bg-white p-12 rounded-3xl shadow-xl"
            {...scaleIn}
            whileHover={{ scale: 1.02, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-16 h-16 text-[#99235C] mx-auto mb-6" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              24/7 <span className="text-[#99235C]">Peace of Mind</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              With our respite live-in service, your loved one receives round-the-clock care, 
              day and night — so you can rest easy knowing they're safe, supported, 
              and never alone while you take the break you deserve.
            </p>
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mt-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.1 }}
              >
                <Clock className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">24/7 Availability</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.1 }}
              >
                <Heart className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Compassionate Care</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.1 }}
              >
                <Home className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">In Your Own Home</p>
              </motion.div>
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
            Take a Break, <span className="text-[#99235C]">We've Got You Covered</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-4 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Caring for someone is a full-time job — but you don't have to do it alone.
          </motion.p>
          <motion.p 
            className="text-xl font-bold text-gray-900 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Let <span className="text-[#99235C]">Skyline Healthcare Solutions Ltd</span> step in and support you with professional, 
            compassionate respite care that gives you the time you need.
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
            className="mt-12 bg-gradient-to-br from-[#FFDFDF] to-pink-100 p-8 rounded-2xl"
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
              <Coffee className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              You Deserve a Break
            </h3>
            <p className="text-gray-700 text-lg">
              Whether it's a few days or a few weeks, our respite care ensures your loved one 
              receives the same warmth, respect, and professional care you provide every day — 
              because everyone deserves to be cared for with dignity and compassion.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}