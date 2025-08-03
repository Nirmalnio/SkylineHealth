import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { Heart, Clock, Shield, Home, Users, CheckCircle, Phone, MapPin, Star, User, UserCheck, Flower2, Stethoscope, MessageCircle, Utensils, Moon, HandHeart } from 'lucide-react';
import { GrUserExpert } from 'react-icons/gr';

export default function EndOfLifeCarePage() {
  // Ref for the why choose us section
  const whyChooseUsRef = useRef(null);

  // Function to scroll to why choose us section
  const scrollToWhyChooseUs = () => {
    whyChooseUsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

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
    "Experienced end-of-life carers trained in palliative support",
    "24/7 live-in care tailored to your loved one's needs",
    "One-to-one attention in the comfort of home",
    "Compassionate, local care delivered across Devon"
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
                <Flower2 className="w-4 h-4 mr-2" />
                Compassionate End of Life Care
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                End of Life{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Comfort, dignity, and peace — compassionate care for your loved one's final journey at home in Devon.
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
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Flower2 className="w-32 h-32 text-white/80" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Sensitive Support Section */}
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
              Sensitive Support at Life's{" "}
              <span className="text-[#99235C]">Most Important Time</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At{" "}
              <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we provide 24/7 live-in care to support individuals and families 
              during the final stages of life. Our goal is to ensure your loved one feels safe, comfortable, 
              and respected — in the familiar surroundings of home.
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
                y: -10, 
                rotateY: 2,
                boxShadow: "0 20px 40px rgba(153, 35, 92, 0.15)",
                scale: 1.01
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#99235C]/3 to-pink-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ scale: 0, rotate: 120 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: -120 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Home className="w-12 h-12 text-[#99235C] mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Home Comfort
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Experience final moments in the warmth and familiarity of their own home environment.
              </motion.p>

              <motion.div
                className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#99235C]/15 rounded-full"
                animate={{ 
                  y: [-3, -8, -3],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
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
                y: -10, 
                rotateY: -2,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.15)",
                scale: 1.01
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/3 to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ scale: 0, rotate: -120 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: 120 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
              >
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Dignity & Respect
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                Compassionate care that honors their wishes and maintains dignity throughout.
              </motion.p>

              <motion.div
                className="absolute top-6 right-6 w-1.5 h-1.5 bg-purple-600/15 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ 
                  duration: 3, 
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
                y: -10, 
                rotateY: 2,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)",
                scale: 1.01
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/3 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ scale: 0, rotate: 120 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: -120 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                Family Support
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                Emotional support for the whole family during this most difficult time.
              </motion.p>

              <motion.div
                className="absolute top-5 right-5 w-1.5 h-1.5 bg-blue-600/15 rounded-full"
                animate={{ 
                  x: [-2, 2, -2],
                  y: [-1, -4, -1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.1
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* What Is End of Life Care Section */}
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
                What Is <span className="text-[#99235C]">End of Life Care?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                End of life care supports people with terminal or life-limiting conditions, 
                focusing on comfort, dignity, and quality of life during their final journey.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our care ensures:</h3>
              <motion.div 
                className="space-y-4"
              >
                {endOfLifeSupport.map((support, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#99235C]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ x: 3, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                  >
                    <motion.div 
                      className="bg-[#FFDFDF] p-3 rounded-full"
                      whileHover={{ rotate: 180, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <support.icon className="w-6 h-6 text-[#99235C]" />
                    </motion.div>
                    <span className="text-gray-800 font-medium">{support.text}</span>
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
                whileHover={{ scale: 1.01, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotateY: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Moon className="w-16 h-16 mb-6 text-white/80" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">A Peaceful Environment</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  We create a calm, peaceful environment where your loved one can pass with dignity, 
                  surrounded by the comfort of home and the people they love most.
                </p>
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-xl"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                  transition={{ duration: 0.4 }}
                >
                  <GrUserExpert className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">
                    We work alongside district nurses, GPs, and hospices to ensure seamless care 
                    that meets both medical and emotional needs.
                  </p>
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
              How We <span className="text-[#99235C]">Support You</span> and Your Loved One
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, compassionate care services designed to provide comfort, dignity, and peace during life's final chapter
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
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  borderColor: "#99235C"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div 
                  className="bg-[#FFDFDF] p-4 rounded-full w-fit mb-6 group-hover:bg-[#99235C] transition-colors duration-300"
                  whileHover={{ rotate: 180, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
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
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-[#FFDFDF] to-pink-100 p-8 rounded-2xl max-w-4xl mx-auto"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Flower2 className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Calm, Peaceful Environment</h3>
              <p className="text-lg text-gray-700">
                We understand the profound importance of this time. Our carers provide not just medical support, 
                but create an atmosphere of tranquility, love, and respect for passing with complete dignity.
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
              Compassionate end of life care that honors your loved one's wishes while supporting your entire family.
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
                  backgroundColor: "rgba(255,255,255,0.15)",
                  scale: 1.02,
                  y: -3
                }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 600 }}
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
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.25)", scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPin className="w-12 h-12 text-[#FFDFDF] mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Compassionate Care Across Devon</h3>
              <p className="text-lg opacity-90">
                Local expertise combined with specialized palliative care training, 
                providing sensitive end of life support throughout Devon communities.
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
            whileHover={{ scale: 1.01, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-16 h-16 text-[#99235C] mx-auto mb-6" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              24/7 <span className="text-[#99235C]">Compassionate Support</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              With our end of life live-in service, your loved one receives round-the-clock compassionate care, 
              ensuring they are never alone and always comfortable during this sacred time.
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
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">24/7 Presence</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-8 h-8 text-[#99235C] mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Compassionate Care</p>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
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
            Here When It <span className="text-[#99235C]">Matters Most</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-4 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            We understand how difficult this time can be. Let us walk alongside you with care, compassion, and unwavering support.
          </motion.p>
          <motion.p 
            className="text-xl font-bold text-gray-900 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <span className="text-[#99235C]">Skyline Healthcare Solutions Ltd</span> provides the gentle, professional end of life care your loved one deserves.
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
                scale: 1.03, 
                backgroundColor: "#7a1c49",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
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
                scale: 1.01
              }}
              whileTap={{ scale: 0.99 }}
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
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ scale: 1.01, boxShadow: "0 15px 35px rgba(0,0,0,0.08)" }}
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <HandHeart className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              With Dignity, Love, and Respect
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to ensure your loved one's final journey is filled with comfort, dignity, and peace, 
              surrounded by the love of family in the place they call home — because everyone deserves to pass 
              with grace and honor.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}