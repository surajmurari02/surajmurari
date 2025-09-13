import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa";

const LoadMoreSkill = ({ onClick, isLoadMore, remainingCount }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.div 
      className="group relative cursor-pointer"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-primary-400 to-accent-400' 
          : 'bg-gradient-to-r from-primary-500 to-accent-500'
      }`} />

      {/* Main Card */}
      <div className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl border backdrop-blur-sm transition-all duration-500 group-hover:border-primary-400/50 border-2 border-dashed ${
        theme === 'light' 
          ? 'bg-white/80 border-primary-300/50 shadow-lg hover:shadow-xl hover:border-primary-500/70' 
          : 'bg-gray-800/50 border-primary-600/50 shadow-2xl hover:shadow-primary-500/10 hover:border-primary-400/70'
      }`}>
        {/* Icon Container */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-primary-100 to-accent-100 group-hover:from-primary-200 group-hover:to-accent-200' 
            : 'bg-gradient-to-br from-primary-900/50 to-accent-900/50 group-hover:from-primary-800/60 group-hover:to-accent-800/60'
        }`}>
          <div className={`transition-colors duration-300 ${
            theme === 'light' 
              ? 'text-primary-600 group-hover:text-primary-700' 
              : 'text-primary-400 group-hover:text-primary-300'
          }`}>
            {isLoadMore ? <FaPlus size={16} /> : <FaMinus size={16} />}
          </div>
        </div>
        
        {/* Text */}
        <div className={`text-center transition-colors duration-300 ${
          theme === 'light' 
            ? 'text-gray-700 group-hover:text-gray-900' 
            : 'text-gray-300 group-hover:text-white'
        }`}>
          <div className="text-sm font-medium">
            {isLoadMore ? "Load More" : "Show Less"}
          </div>
          {isLoadMore && (
            <div className="text-xs opacity-75 mt-1">
              ({remainingCount} more)
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadMoreSkill;