import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const BlogHeader = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="flex flex-col items-center mb-16">
      {/* Back to Portfolio Link */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="self-start mb-8"
      >
        <Link
          to="/"
          className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 ${
            theme === 'light' 
              ? 'text-gray-600 hover:text-blue-600' 
              : 'text-gray-300 hover:text-cyan'
          }`}
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center ${
          theme === 'light' 
            ? 'text-gray-900' 
            : 'text-white'
        }`}
      >
        <span className="text-cyan">Blog</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`text-lg md:text-xl text-center max-w-4xl leading-relaxed mb-6 ${
          theme === 'light' 
            ? 'text-gray-600' 
            : 'text-gray-300'
        }`}
      >
        Insights, tutorials, and deep dives into{' '}
        <span className="font-semibold text-orange">AI/ML engineering</span>, from practical implementations to{' '}
        <span className="font-semibold text-cyan">industry trends</span> and career guidance.
      </motion.p>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center justify-center space-x-4"
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
        <div className="w-2 h-2 rounded-full bg-cyan" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
      </motion.div>
    </div>
  );
};

export default BlogHeader;