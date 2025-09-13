import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const SingleExperience = ({ experience }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative group min-h-[320px] flex flex-col p-6 rounded-2xl border backdrop-blur-md transition-all duration-500 overflow-hidden ${
        theme === 'light' 
          ? 'bg-white/95 border-blue-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300/80' 
          : 'bg-dark-card/90 border-primary-500/40 shadow-glow-sm hover:shadow-glow-lg hover:border-primary-400/60'
      }`}
    >
      {/* Gradient Background Overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-blue-50/60 via-transparent to-indigo-50/40' 
          : 'bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/10'
      }`} />

      {/* Top Accent Bar */}
      <div className={`absolute top-0 left-0 w-full h-1 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500' 
          : 'bg-gradient-to-r from-primary-500 via-accent-500 to-cyan'
      }`} />


      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section with Icons */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start justify-between">
            <h3 className={`font-bold text-xl leading-tight max-w-[calc(100%-80px)] ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-cyan to-primary-400 bg-clip-text text-transparent'
            }`}>
              {experience.job}
            </h3>
          </div>
          
          {/* Company with Icon */}
          <div className="flex items-center gap-2">
            <FiMapPin className={`w-4 h-4 ${
              theme === 'light' ? 'text-indigo-500' : 'text-orange'
            }`} />
            <p className={`font-semibold text-base ${
              theme === 'light' ? 'text-indigo-600' : 'text-orange'
            }`}>
              {experience.company}
            </p>
          </div>
          
          {/* Date with Icon */}
          <div className="flex items-center gap-2">
            <FiCalendar className={`w-4 h-4 ${
              theme === 'light' ? 'text-slate-400' : 'text-lightGrey'
            }`} />
            <p className={`text-sm font-medium ${
              theme === 'light' ? 'text-slate-500' : 'text-lightGrey'
            }`}>
              {experience.date}
            </p>
          </div>

          {/* Separator */}
          <div className={`w-12 h-px ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-400 to-transparent' 
              : 'bg-gradient-to-r from-primary-400 to-transparent'
          }`} />
        </div>

        {/* Key Achievements Section */}
        <div className="flex-grow">
          <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wider ${
            theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
          }`}>
            Key Achievements
          </h4>
          <div className="space-y-3">
            {experience.responsibilities.map((resp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 group/item"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 ${
                  theme === 'light' 
                    ? 'bg-blue-100 group-hover/item:bg-blue-500 group-hover/item:scale-110' 
                    : 'bg-primary-900/40 group-hover/item:bg-primary-500 group-hover/item:scale-110'
                }`}>
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    theme === 'light' 
                      ? 'bg-blue-500 group-hover/item:bg-white' 
                      : 'bg-primary-400 group-hover/item:bg-dark-bg'
                  }`} />
                </div>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  theme === 'light' 
                    ? 'text-slate-600 group-hover/item:text-slate-700' 
                    : 'text-dark-text/80 group-hover/item:text-white'
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
