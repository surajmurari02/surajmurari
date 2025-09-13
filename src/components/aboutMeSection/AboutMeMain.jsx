import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { fadeIn } from "../../framerMotion/variants";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import Container from "../common/Container";

const AboutMeMain = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section id="about" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20' 
        : 'bg-gradient-to-br from-dark-bg via-dark-surface/60 to-primary-900/10'
    }`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className={`absolute inset-0 ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20' 
            : 'bg-gradient-to-r from-primary-900/5 via-transparent to-accent-900/5'
        }`} />
        
        {/* Floating orbs */}
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-300/20 to-cyan-300/15 opacity-60' 
            : 'bg-gradient-to-r from-primary-500/15 to-cyan/10 opacity-40'
        }`} />
        <div className={`absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-purple-300/15 to-pink-300/20 opacity-50' 
            : 'bg-gradient-to-r from-accent-500/10 to-orange/15 opacity-30'
        }`} style={{ animationDelay: '3s' }} />
        
        {/* Geometric shapes */}
        <div className={`absolute top-1/4 right-1/4 w-2 h-2 rounded-full animate-pulse ${
          theme === 'light' ? 'bg-blue-400' : 'bg-primary-400'
        }`} />
        <div className={`absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full animate-pulse ${
          theme === 'light' ? 'bg-purple-400' : 'bg-accent-400'
        }`} style={{ animationDelay: '1s' }} />
      </div>

      <Container size="lg" className="relative">
        {/* Modern Section Header */}
        <div className="flex flex-col items-center mb-16">
          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center ${
              theme === 'light' 
                ? 'text-gray-900' 
                : 'text-white'
            }`}
          >
            About <span className={theme === 'light' ? 'text-blue-600' : 'text-primary-500'}>Me</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg md:text-xl text-center max-w-4xl leading-relaxed ${
              theme === 'light' 
                ? 'text-gray-600' 
                : 'text-gray-300'
            }`}
          >
            Passionate about transforming{' '}
            <span className={`font-semibold ${theme === 'light' ? 'text-purple-600' : 'text-accent-500'}`}>complex problems</span>{' '}
            into intelligent solutions through{' '}
            <span className={`font-semibold ${theme === 'light' ? 'text-blue-600' : 'text-primary-500'}`}>cutting-edge AI/ML</span>{' '}
            technologies.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center mt-6 space-x-4"
          >
            <div className={`w-12 h-px ${
              theme === 'light' ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' : 'bg-gradient-to-r from-transparent via-primary-500 to-transparent'
            }`} />
            <div className={`w-2 h-2 rounded-full ${
              theme === 'light' ? 'bg-blue-400' : 'bg-primary-500'
            }`} />
            <div className={`w-12 h-px ${
              theme === 'light' ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent' : 'bg-gradient-to-r from-transparent via-primary-500 to-transparent'
            }`} />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 lg:order-1"
          >
            <AboutMeText />
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <AboutMeImage />
          </motion.div>
        </div>
      </Container>

      {/* Modern Decorative Elements */}
      <div className={`absolute left-0 top-1/2 w-32 h-px ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-blue-500/60 via-purple-500/40 to-transparent' 
          : 'bg-gradient-to-r from-primary-400/60 via-accent-400/40 to-transparent'
      }`} />
      <div className={`absolute right-0 top-1/2 w-32 h-px ${
        theme === 'light' 
          ? 'bg-gradient-to-l from-blue-500/60 via-purple-500/40 to-transparent' 
          : 'bg-gradient-to-l from-primary-400/60 via-accent-400/40 to-transparent'
      }`} />
      
      {/* Connection line between sections */}
      <div className={`absolute left-1/2 top-0 w-px h-8 transform -translate-x-1/2 ${
        theme === 'light' ? 'bg-gradient-to-b from-blue-400 to-transparent' : 'bg-gradient-to-b from-primary-400 to-transparent'
      }`} />
    </section>
  );
};

export default AboutMeMain;
