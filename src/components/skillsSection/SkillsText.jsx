import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const SkillsText = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="flex flex-col items-center">
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
          theme === 'light' 
            ? 'bg-primary-100 text-primary-700 border border-primary-200' 
            : 'bg-primary-900/20 text-primary-300 border border-primary-800/30'
        }`}
      >
        <span className="mr-2">🚀</span>
        Technical Expertise
      </motion.div>

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
        My <span className="text-primary-500">Skills</span>
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
        I not only work with these{' '}
        <span className="font-semibold text-accent-500">AI/ML technologies</span>{' '}
        but specialize in using them with{' '}
        <span className="font-semibold text-primary-500">best practices</span>{' '}
        to deliver optimized, production-ready solutions. I've been applying these tools across{' '}
        <span className="font-semibold text-accent-500">real-world projects</span>{' '}
        to build intelligent systems for edge and cloud deployment.
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
          theme === 'light' ? 'bg-gradient-to-r from-transparent via-primary-400 to-transparent' : 'bg-gradient-to-r from-transparent via-primary-500 to-transparent'
        }`} />
        <div className={`w-2 h-2 rounded-full ${
          theme === 'light' ? 'bg-primary-400' : 'bg-primary-500'
        }`} />
        <div className={`w-12 h-px ${
          theme === 'light' ? 'bg-gradient-to-r from-transparent via-primary-400 to-transparent' : 'bg-gradient-to-r from-transparent via-primary-500 to-transparent'
        }`} />
      </motion.div>
    </div>
  );
};

export default SkillsText;
