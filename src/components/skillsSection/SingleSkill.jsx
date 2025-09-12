import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const SingleSkill = ({ imgSvg, text }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.div 
      className="group relative cursor-pointer"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-primary-400 to-accent-400' 
          : 'bg-gradient-to-r from-primary-500 to-accent-500'
      }`} />

      {/* Main Card */}
      <div className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl border backdrop-blur-sm transition-all duration-500 group-hover:border-primary-400/50 ${
        theme === 'light' 
          ? 'bg-white/80 border-gray-200/30 shadow-lg hover:shadow-xl' 
          : 'bg-gray-800/50 border-gray-700/30 shadow-2xl hover:shadow-primary-500/10'
      }`}>
        
        {/* Icon Container */}
        <motion.div 
          className={`relative h-16 w-16 flex items-center justify-center rounded-xl text-3xl transition-all duration-500 ${
            theme === 'light' 
              ? 'bg-gradient-to-br from-primary-50 to-accent-50 text-primary-600 group-hover:from-primary-100 group-hover:to-accent-100 group-hover:text-primary-700' 
              : 'bg-gradient-to-br from-primary-900/30 to-accent-900/30 text-primary-400 group-hover:from-primary-800/40 group-hover:to-accent-800/40 group-hover:text-primary-300'
          }`}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          {imgSvg}
          
          {/* Icon Shine Effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Skill Name */}
        <p className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
          theme === 'light' 
            ? 'text-gray-700 group-hover:text-primary-700' 
            : 'text-gray-200 group-hover:text-primary-300'
        }`}>
          {text}
        </p>

        {/* Bottom Accent Line */}
        <div className={`h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-12 ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-primary-400 to-accent-400' 
            : 'bg-gradient-to-r from-primary-500 to-accent-500'
        }`} />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse" />
      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:animate-pulse" />
    </motion.div>
  );
};

export default SingleSkill;
