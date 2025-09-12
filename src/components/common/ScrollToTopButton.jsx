import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-glow-md transition-all duration-300 ${
            theme === 'light' 
              ? 'bg-light-card text-primary-600 hover:bg-primary-50 hover:shadow-glow-lg border border-light-border'
              : 'bg-dark-card text-primary-400 hover:bg-dark-surface hover:shadow-glow-lg border border-dark-border'
          }`}
          aria-label="Scroll to top"
        >
          <HiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;