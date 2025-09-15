import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FiExternalLink, FiGithub, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { fadeIn } from "../../framerMotion/variants";
import LazyImage from "../common/LazyImage";

const SingleProject = ({ name, year, align, image, link, description, tech }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative group w-full backdrop-blur-md border rounded-2xl overflow-hidden ${
        theme === 'light' 
          ? 'bg-white/95 border-blue-200/60 hover:border-blue-300/80 shadow-lg hover:shadow-xl hover:shadow-blue-500/10' 
          : 'bg-dark-card/90 border-primary-500/40 hover:border-primary-400/60 shadow-glow-sm hover:shadow-glow-lg'
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

      <div className={`flex w-full ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col-reverse gap-3 sm:gap-6 p-4 sm:p-6`}>
        {/* Project Info */}
        <div className="flex-1 relative z-10 space-y-2 sm:space-y-4">
          {/* Header with date */}
          <div className="space-y-1 sm:space-y-2">
            <div className="flex items-center gap-1.5 sm:gap-2 justify-start">
              <FiCalendar className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${
                theme === 'light' ? 'text-blue-500' : 'text-primary-400'
              }`} />
              <span className={`text-xs sm:text-sm font-medium ${
                theme === 'light' ? 'text-slate-500' : 'text-dark-text/70'
              }`}>
                {year}
              </span>
            </div>
            
            <h2 className={`text-base sm:text-lg md:text-2xl font-bold transition-colors leading-tight ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-cyan to-primary-400 bg-clip-text text-transparent'
            }`}>
              {name}
            </h2>

            {/* Separator - hidden on mobile */}
            <div className={`hidden sm:block w-12 h-px ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-blue-400 to-transparent' 
                : 'bg-gradient-to-r from-primary-400 to-transparent'
            }`} />
          </div>

          {/* Description */}
          {description && (
            <p className={`text-xs sm:text-sm md:text-base leading-relaxed transition-colors ${
              theme === 'light' ? 'text-slate-600' : 'text-dark-text/90'
            }`}>
              {description}
            </p>
          )}

          {/* Tech Stack */}
          {tech && tech.length > 0 && (
            <div className="space-y-1 sm:space-y-2">
              <h4 className={`text-xs font-semibold uppercase tracking-wider hidden sm:block ${
                theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
              }`}>
                Technologies
              </h4>
              {/* Mobile: Show only first 4 tech items, Desktop: Show all */}
              <div className="flex flex-wrap gap-1.5">
                {tech.slice(0, 4).map((techItem, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                      theme === 'light' 
                        ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300' 
                        : 'bg-primary-900/40 text-primary-300 border-primary-700 hover:bg-primary-800/50 hover:border-primary-600'
                    }`}
                  >
                    {techItem}
                  </motion.span>
                ))}
                {/* Desktop: Show remaining tech items */}
                <div className="hidden md:contents">
                  {tech.slice(4).map((techItem, index) => (
                    <motion.span
                      key={index + 4}
                      whileHover={{ scale: 1.05 }}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                        theme === 'light' 
                          ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300' 
                          : 'bg-primary-900/40 text-primary-300 border-primary-700 hover:bg-primary-800/50 hover:border-primary-600'
                      }`}
                    >
                      {techItem}
                    </motion.span>
                  ))}
                </div>
                {/* Mobile: Show +X more indicator if there are more than 4 items */}
                {tech.length > 4 && (
                  <span className={`md:hidden px-2.5 py-1 text-xs font-medium rounded-full border ${
                    theme === 'light' 
                      ? 'bg-slate-100 text-slate-600 border-slate-300' 
                      : 'bg-dark-border/40 text-dark-text/60 border-dark-border'
                  }`}>
                    +{tech.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 md:gap-3 pt-2 sm:pt-3">
            <motion.a
              href={link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-3 py-2 text-sm rounded-lg font-medium transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  : 'bg-primary-600 text-white hover:bg-primary-700 shadow-glow hover:shadow-glow-lg'
              }`}
              aria-label={`View ${name} project`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View</span>
            </motion.a>
            
            {/* GitHub link placeholder */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-3 py-2 text-sm rounded-lg font-medium border transition-all duration-300 ${
                theme === 'light'
                  ? 'border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                  : 'border-dark-border text-dark-text hover:border-primary-500 hover:text-primary-400'
              }`}
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Code</span>
            </motion.button>
          </div>
        </div>

        {/* Project Image */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-full md:w-80 h-32 sm:h-40 md:h-56 rounded-lg sm:rounded-xl overflow-hidden relative border border-white/20 shadow-lg"
        >
          <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 z-20 ${
            theme === 'light' 
              ? 'from-blue-900/20 to-transparent opacity-20 group-hover:opacity-0' 
              : 'from-primary-900/40 to-transparent opacity-30 group-hover:opacity-0'
          }`}></div>
          
          <LazyImage
            src={image}
            alt={`${name} project screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Image overlay badge - Hidden on mobile */}
          <div className={`hidden sm:block absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            theme === 'light'
              ? 'bg-white/90 text-blue-600 border border-blue-200'
              : 'bg-dark-bg/90 text-primary-300 border border-primary-500/40'
          }`}>
            Live Project
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
