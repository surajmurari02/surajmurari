import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const SingleExperience = ({ experience }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative group min-h-[200px] sm:min-h-[320px] flex flex-col p-2 sm:p-6 rounded-md sm:rounded-2xl border transition-all duration-500 overflow-hidden ${
        theme === 'light' 
          ? 'bg-white border-gray-200 shadow-sm sm:bg-white/95 sm:border-blue-200/60 sm:shadow-lg sm:backdrop-blur-md sm:hover:shadow-2xl sm:hover:shadow-blue-500/15 sm:hover:border-blue-300/80' 
          : 'bg-gray-800 border-gray-600 shadow-sm sm:bg-dark-card/90 sm:border-primary-500/40 sm:shadow-glow-sm sm:backdrop-blur-md sm:hover:shadow-glow-lg sm:hover:border-primary-400/60'
      }`}
    >
      {/* Gradient Background Overlay - Hidden on mobile */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-blue-50/60 via-transparent to-indigo-50/40' 
          : 'bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/10'
      }`} />

      {/* Top Accent Bar - Hidden on mobile */}
      <div className={`absolute top-0 left-0 w-full h-1 hidden sm:block ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500' 
          : 'bg-gradient-to-r from-primary-500 via-accent-500 to-cyan'
      }`} />


      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section with Icons */}
        <div className="space-y-1 sm:space-y-3 mb-3 sm:mb-6">
          <div className="flex items-start justify-between">
            <h3 className={`font-bold text-base sm:text-xl leading-tight max-w-[calc(100%-80px)] ${
              theme === 'light' 
                ? 'text-gray-900 sm:bg-gradient-to-r sm:from-blue-600 sm:to-indigo-600 sm:bg-clip-text sm:text-transparent' 
                : 'text-white sm:bg-gradient-to-r sm:from-cyan sm:to-primary-400 sm:bg-clip-text sm:text-transparent'
            }`}>
              {experience.job}
            </h3>
          </div>
          
          {/* Company with Icon */}
          <div className="flex items-center gap-1 sm:gap-2">
            <FiMapPin className={`w-3 h-3 sm:w-4 sm:h-4 ${
              theme === 'light' ? 'text-gray-500 sm:text-indigo-500' : 'text-gray-400 sm:text-orange'
            }`} />
            <p className={`font-medium text-xs sm:text-base sm:font-semibold ${
              theme === 'light' ? 'text-gray-700 sm:text-indigo-600' : 'text-gray-300 sm:text-orange'
            }`}>
              {experience.company}
            </p>
          </div>
          
          {/* Date with Icon */}
          <div className="flex items-center gap-1 sm:gap-2">
            <FiCalendar className={`w-3 h-3 sm:w-4 sm:h-4 ${
              theme === 'light' ? 'text-gray-400 sm:text-slate-400' : 'text-gray-500 sm:text-lightGrey'
            }`} />
            <p className={`text-xs sm:text-sm font-medium ${
              theme === 'light' ? 'text-gray-600 sm:text-slate-500' : 'text-gray-400 sm:text-lightGrey'
            }`}>
              {experience.date}
            </p>
          </div>

          {/* Separator - Hidden on mobile */}
          <div className={`w-12 h-px hidden sm:block ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-400 to-transparent' 
              : 'bg-gradient-to-r from-primary-400 to-transparent'
          }`} />
        </div>

        {/* Key Achievements Section */}
        <div className="flex-grow">
          <h4 className={`text-xs sm:text-sm font-medium sm:font-semibold mb-1.5 sm:mb-3 uppercase tracking-wider ${
            theme === 'light' ? 'text-gray-600 sm:text-slate-600' : 'text-gray-400 sm:text-dark-text/80'
          }`}>
            <span className="sm:hidden">Key Points</span>
            <span className="hidden sm:inline">Key Achievements</span>
          </h4>
          <div className="space-y-1.5 sm:space-y-3">
            {experience.responsibilities.map((resp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-1.5 sm:gap-3 group/item"
              >
                {/* Ultra-simplified mobile bullet point */}
                <div className={`w-3 h-3 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 ${
                  theme === 'light' 
                    ? 'bg-gray-300 sm:bg-blue-100 group-hover/item:bg-gray-400 sm:group-hover/item:bg-blue-500 sm:group-hover/item:scale-110' 
                    : 'bg-gray-600 sm:bg-primary-900/40 group-hover/item:bg-gray-500 sm:group-hover/item:bg-primary-500 sm:group-hover/item:scale-110'
                }`}>
                  <div className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                    theme === 'light' 
                      ? 'bg-gray-600 sm:bg-blue-500 group-hover/item:bg-gray-700 sm:group-hover/item:bg-white' 
                      : 'bg-gray-300 sm:bg-primary-400 group-hover/item:bg-gray-200 sm:group-hover/item:bg-dark-bg'
                  }`} />
                </div>
                <p className={`text-xs sm:text-sm leading-snug sm:leading-relaxed transition-colors duration-300 ${
                  theme === 'light' 
                    ? 'text-gray-700 sm:text-slate-600 group-hover/item:text-gray-800 sm:group-hover/item:text-slate-700' 
                    : 'text-gray-300 sm:text-dark-text/80 group-hover/item:text-gray-200 sm:group-hover/item:text-white'
                }`}>
                  {resp}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default SingleExperience;
