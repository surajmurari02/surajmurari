import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import Container from "../common/Container";
import { fadeIn } from '../../framerMotion/variants';
import { FiZap, FiCpu, FiCheckCircle } from 'react-icons/fi';

const HeroMain = () => {
  const theme = useSelector((state) => state.theme.mode);

  const highlights = [
    { 
      text: "Efficient Problem Solver", 
      icon: FiZap, 
      description: "Optimizing complex challenges",
      color: theme === 'light' ? 'from-blue-500 to-cyan-500' : 'from-primary-400 to-cyan'
    },
    { 
      text: "Deep Tech Builder", 
      icon: FiCpu, 
      description: "AI & ML Engineering",
      color: theme === 'light' ? 'from-indigo-500 to-purple-500' : 'from-accent-400 to-primary-400'
    },
    { 
      text: "Production-Ready Mindset", 
      icon: FiCheckCircle, 
      description: "Scalable system design",
      color: theme === 'light' ? 'from-purple-500 to-pink-500' : 'from-orange to-accent-400'
    }
  ];

  return (
    <section id="hero" className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className={`absolute inset-0 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-primary-50/80 via-transparent to-accent-50/60' 
            : 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
        }`} />
        
        {/* Subtle animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-orange/5"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Container size="lg" className="flex flex-col justify-center flex-1">
        {/* Main Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
        >
          {/* Hero Text Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <HeroText />
          </div>

          {/* Hero Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroPic />
          </div>
        </motion.div>

        {/* Core Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className={`text-lg font-semibold mb-2 uppercase tracking-wider ${
              theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
            }`}>
              Core Strengths
            </h2>
            <div className={`w-16 h-1 mx-auto rounded-full ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                : 'bg-gradient-to-r from-primary-500 to-accent-500'
            }`} />
          </div>

          {/* Core Strengths Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.2)}
                initial="hidden"
                animate="show"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`relative group p-4 lg:p-5 h-full min-h-[160px] rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                  theme === 'light' 
                    ? 'bg-white/90 border-blue-200/60 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/80' 
                    : 'bg-dark-card/90 border-primary-500/30 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 hover:border-primary-400/50'
                }`}
              >
                {/* Icon with gradient background */}
                <div className={`relative w-12 h-12 rounded-2xl mb-3 bg-gradient-to-br ${highlight.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-full h-full rounded-2xl flex items-center justify-center ${
                    theme === 'light' ? 'bg-white' : 'bg-dark-card'
                  }`}>
                    <highlight.icon className={`w-6 h-6 bg-gradient-to-br ${highlight.color} bg-clip-text text-transparent`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1 relative z-10">
                  <h3 className={`text-base lg:text-lg font-bold transition-colors duration-300 ${
                    theme === 'light' 
                      ? 'text-slate-800 group-hover:text-slate-900' 
                      : 'text-white group-hover:text-white'
                  }`}>
                    {highlight.text}
                  </h3>
                  
                  <p className={`text-xs lg:text-sm transition-colors duration-300 ${
                    theme === 'light' 
                      ? 'text-slate-600 group-hover:text-slate-700' 
                      : 'text-dark-text/80 group-hover:text-dark-text/90'
                  }`}>
                    {highlight.description}
                  </p>
                </div>

                {/* Hover effect gradient */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br ${highlight.color}`} />
                
                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 rounded-b-2xl bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center pt-4"
          >
            <p className={`text-lg italic ${
              theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
            }`}>
              "Building AI solutions that deliver real-world impact"
            </p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Enhanced Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 left-6 w-1 bg-gradient-to-b from-cyan to-transparent rounded-full"
        animate={{
          height: [80, 120, 80],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-6 w-1 bg-gradient-to-t from-orange to-transparent rounded-full"
        animate={{
          height: [60, 100, 60],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 border border-cyan/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-gradient-to-r from-orange/40 to-cyan/40 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

    </section>
  );
};

export default HeroMain;
