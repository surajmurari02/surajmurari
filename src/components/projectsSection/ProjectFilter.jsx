import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { HiSearch, HiX } from 'react-icons/hi';

const ProjectFilter = ({ projects, onFilterChange, activeFilter, searchQuery, onSearchChange }) => {
  const theme = useSelector((state) => state.theme.mode);
  
  const categories = ['All', 'Machine Learning', 'Web Development', 'Computer Vision', 'AI/LLM'];
  
  const clearSearch = () => {
    onSearchChange('');
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-sm sm:max-w-md mx-auto">
        <div className="relative">
          <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-grey" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/50 ${
              theme === 'light'
                ? 'bg-lightCard text-lightText border border-lightBorder focus:border-cyan'
                : 'bg-lightBrown text-white border border-lightBrown'
            }`}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0.5 sm:p-1 rounded-full hover:bg-grey/20 transition-colors"
              aria-label="Clear search"
            >
              <HiX className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-grey" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onFilterChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-300 border text-sm sm:text-base ${
              activeFilter === category
                ? 'bg-cyan text-white border-cyan shadow-cyanShadow'
                : theme === 'light'
                ? 'bg-lightCard text-lightText border-lightBorder hover:border-cyan hover:text-cyan'
                : 'bg-lightBrown text-white border-lightBrown hover:border-cyan hover:text-cyan'
            }`}
            aria-pressed={activeFilter === category}
            aria-label={`Filter by ${category}`}
          >
            {/* Show shorter names on mobile for some categories */}
            <span className="sm:hidden">
              {category === 'Machine Learning' ? 'ML' : 
               category === 'Web Development' ? 'Web Dev' : 
               category === 'Computer Vision' ? 'CV' : 
               category === 'AI/LLM' ? 'AI/LLM' : category}
            </span>
            <span className="hidden sm:inline">{category}</span>
          </motion.button>
        ))}
      </div>

      {/* Results Count */}
      {searchQuery && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center text-sm ${
            theme === 'light' ? 'text-lightTextSecondary' : 'text-lightGrey'
          }`}
        >
          {projects.length} project{projects.length !== 1 ? 's' : ''} found
        </motion.p>
      )}
    </div>
  );
};

export default ProjectFilter;