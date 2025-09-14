import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const ExperienceText = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto">
      {/* Main Title - Styled like Let's Connect */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center ${
          theme === 'light' 
            ? 'text-gray-900' 
            : 'text-white'
        }`}
      >
        <span className={`${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Experience</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`text-base sm:text-lg md:text-xl text-center max-w-4xl leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0 ${
          theme === 'light' 
            ? 'text-gray-600' 
            : 'text-gray-300'
        }`}
      >
        <span className="hidden sm:inline">Building </span>
        <span className="font-semibold text-orange">
          <span className="sm:hidden">Creating </span>
          <span className="hidden sm:inline">innovative </span>AI solutions
        </span>
        <span className="hidden sm:inline"> with{' '}</span>
        <span className="sm:hidden"> using{' '}</span>
        <span className="font-semibold text-cyan">cutting-edge technologies</span>
      </motion.p>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center justify-center space-x-4"
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
        <div className="w-2 h-2 rounded-full bg-cyan" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
      </motion.div>
    </div>
  );
};

export default ExperienceText;
