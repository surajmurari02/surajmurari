import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../state/themeSlice';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <motion.button
      onClick={handleToggle}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 group ${
        theme === 'light'
          ? 'bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400'
          : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 180,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <HiMoon className="w-4 h-4 text-blue-500 group-hover:text-blue-400 transition-colors" />
        </motion.div>
        
        <motion.div
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -180,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <HiSun className="w-4 h-4 text-orange-500 group-hover:text-orange-400 transition-colors" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;