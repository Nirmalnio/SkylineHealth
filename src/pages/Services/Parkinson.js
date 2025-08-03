import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Clock,
  Shield,
  Home,
  Users,
  Brain,
  CheckCircle,
  Phone,
  MapPin,
  Star,
  Zap,
  Activity,
  Volume2,
  Moon,
  Utensils,
  User,
  RotateCcw,
} from "lucide-react";
import { GrUserExpert } from "react-icons/gr";

export default function ParkinsonCarePage() {
  // Ref for the specialist care section
  const specialistCareRef = useRef(null);

  // Function to scroll to specialist care section
  const scrollToSpecialistCare = () => {
    specialistCareRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const parkinsonSymptoms = [
    { icon: Zap, text: "Tremors or shaking" },
    { icon: Activity, text: "Muscle stiffness and slowed movement" },
    { icon: Users, text: "Difficulty with walking or balance" },
    { icon: Volume2, text: "Speech and swallowing issues" },
    { icon: Moon, text: "Fatigue and sleep disturbances" },
    { icon: Brain, text: "Mood changes or cognitive decline" },
  ];

  const careServices = [
    {
      icon: Shield,
      title: "Mobility & Fall Prevention",
      description: "Assistance with mobility, transfers, and fall prevention to keep your loved one safe and secure",
    },
    {
      icon: Clock,
      title: "Medication Management",
      description: "Careful medication reminders and management to maintain optimal treatment schedules",
    },
    {
      icon: Utensils,
      title: "Meals & Hydration",
      description: "Help with meals, hydration, and swallowing difficulties with patience and understanding",
    },
    {
      icon: User,
      title: "Personal Care",
      description: "Dignified personal care assistance including washing, dressing, and toileting needs",
    },
    {
      icon: RotateCcw,
      title: "Routine-Based Support",
      description: "Consistent routine-based support to reduce stress, fatigue, and maintain stability",
    },
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Compassionate emotional support and companionship throughout the journey",
    },
  ];

  const trustPoints = [
    "24/7 live-in care in the comfort of your own home",
    "A consistent, dedicated carer for familiarity and trust",
    "Clear communication with families every step of the way",
    "Local expertise serving families across Devon & Torbay",
    "Specialist training in Parkinson's disease care",
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
                <Activity className="w-4 h-4 mr-2" />
                Specialist Parkinson's Care
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Parkinson's{" "}
                <span className="text-[#FFDFDF]">Live-In Care</span>
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Specialist one-to-one support for individuals living with Parkinson's — 
                delivered at home with dignity and consistency across Devon & Torbay.
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
                  onClick={scrollToSpecialistCare}
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
                      <Heart className="w-32 h-32 text-white/80" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Supporting Daily Life Section */}
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
              Living Well with{" "}
              <span className="text-[#99235C]">Parkinson's Disease</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A Parkinson's diagnosis doesn't mean losing independence. At{" "}
              <strong className="text-[#99235C]">Skyline Healthcare Solutions Ltd</strong>, we provide
              personalized live-in care that helps individuals stay safe, supported, and
              comfortable in familiar surroundings — maintaining their routines, sense of self, and dignity.
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
                Home Comfort
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Stay in familiar surroundings with personal belongings, routines, and cherished memories close by.
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
                Safety & Security
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Comprehensive safety monitoring, fall prevention, and secure supervision 24/7.
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
                <Users className="w-12 h-12 text-blue-600 mb-4" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Consistent Care
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                One dedicated carer who becomes familiar with needs, preferences, and daily routines.
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

      {/* Understanding Conditions Section */}
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
                Understanding <span className="text-[#99235C]">Parkinson's Disease</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Parkinson's is a progressive neurological condition that affects movement,
                balance, and coordination. While each person's experience is unique,
                common symptoms include:
              </p>

              <motion.div 
                className="space-y-4"
              >
                {parkinsonSymptoms.map((symptom, index) => (
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
                      <symptom.icon className="w-6 h-6 text-[#99235C]" />
                    </motion.div>
                    <span className="text-gray-800 font-medium">
                      {symptom.text}
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
                  <Activity className="w-16 h-16 mb-6 text-white/80" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Progressive Support</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Parkinson's affects everyone differently and progresses at different rates. 
                  Our carers are specially trained to adapt their support as symptoms change, 
                  ensuring consistent, compassionate care throughout the journey.
                </p>
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-xl"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <GrUserExpert className="w-8 h-8 text-[#FFDFDF] mb-2" />
                  <p className="text-sm font-medium">Expert care team with specialized Parkinson's training</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* How We Support Section */}
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
              How We Support <span className="text-[#99235C]">Our Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our trained carers provide comprehensive support tailored 
              to the unique needs of those living with Parkinson's disease
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">One Dedicated Carer</h3>
              <p className="text-lg text-gray-700">
                For consistency and trust, we provide one dedicated carer who becomes familiar 
                with your loved one's needs, preferences, and daily routines — creating a sense of 
                security and reducing anxiety that can come with unfamiliar faces.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Specialist Care Section */}
      <motion.div 
        ref={specialistCareRef}
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
              Specialist Care You Can{" "}
              <span className="text-[#FFDFDF]">Trust</span>
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              All our live-in carers are trained in Parkinson's care, understanding 
              how to respond to changing symptoms with patience, compassion, and expertise. We prioritise:
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {trustPoints.map((point, index) => (
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
                  <CheckCircle className="w-10 h-10 text-[#FFDFDF] mb-4" />
                </motion.div>
                <p className="text-sm font-medium leading-relaxed">{point}</p>
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
              <h3 className="text-2xl font-bold mb-4">Serving Devon & Torbay</h3>
              <p className="text-lg opacity-90">
                Local expertise and deep understanding of our communities, 
                providing personalized care close to home with familiar faces you can trust.
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
              With our live-in service, your loved one receives round-the-clock care, 
              day and night — so you can rest easy knowing they're safe, supported, 
              and never alone.
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
            Get in Touch <span className="text-[#99235C]">Today</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-4 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Looking for trusted Parkinson's care at home in Devon or Torbay?
          </motion.p>
          <motion.p 
            className="text-xl font-bold text-gray-900 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <span className="text-[#99235C]">Skyline Healthcare Solutions Ltd</span> is here to help.
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
                Request Free Consultation
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
              <Heart className="w-12 h-12 text-[#99235C] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Live with Parkinson's, Not Around It
            </h3>
            <p className="text-gray-700 text-lg">
              Our mission is to help your loved one maintain independence, dignity, and quality of life 
              while managing Parkinson's in the familiar surroundings of home — because everyone
              deserves to age with grace and respect.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}