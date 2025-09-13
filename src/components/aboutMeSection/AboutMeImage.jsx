import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const AboutMeImage = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Main Image Container with Glassmorphism */}
      <div className={`relative w-80 h-96 rounded-3xl overflow-hidden backdrop-blur-md border transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-white/20 border-white/30 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20'
          : 'bg-dark-card/30 border-primary-500/30 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/30'
      }`}>
        {/* Image */}
        <motion.img
          src="/images/about-me.jpg"
          alt="About Me - Suraj Murari"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          theme === 'light' 
            ? 'bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10'
            : 'bg-gradient-to-t from-primary-900/30 via-transparent to-accent-900/20'
        }`} />

      </div>

      {/* Modern Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background Shape */}
        <motion.div 
          className={`absolute -bottom-6 -left-6 w-72 h-80 rounded-3xl transition-all duration-700 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-blue-400/30 to-purple-400/30'
              : 'bg-gradient-to-br from-primary-500/30 to-accent-500/30'
          }`}
          animate={{
            rotate: isHovered ? -3 : -6,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Secondary Shape */}
        <motion.div 
          className={`absolute -top-4 -right-4 w-32 h-32 rounded-full transition-all duration-700 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20'
              : 'bg-gradient-to-br from-cyan/20 to-primary-400/20'
          }`}
          animate={{
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Floating Particles */}
        <motion.div 
          className={`absolute top-8 left-8 w-2 h-2 rounded-full ${
            theme === 'light' ? 'bg-blue-400' : 'bg-primary-400'
          }`}
          animate={{
            y: isHovered ? -10 : 0,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className={`absolute bottom-12 right-12 w-1 h-1 rounded-full ${
            theme === 'light' ? 'bg-purple-400' : 'bg-accent-400'
          }`}
          animate={{
            y: isHovered ? 10 : 0,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 -z-20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-blue-400/40 to-purple-400/40'
          : 'bg-gradient-to-br from-primary-500/40 to-accent-500/40'
      }`} />
    </motion.div>
  );
};

export default AboutMeImage;
