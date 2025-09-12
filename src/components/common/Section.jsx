import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Section = ({ 
  id, 
  children, 
  className = '',
  size = 'default', // 'sm', 'default', 'lg', 'xl'
  background = 'default', // 'default', 'surface', 'gradient', 'grid'
  ...props 
}) => {
  const theme = useSelector((state) => state.theme.mode);

  const sizeClasses = {
    sm: 'py-16 md:py-20',
    default: 'py-20 md:py-24 lg:py-28',
    lg: 'py-24 md:py-28 lg:py-32',
    xl: 'py-28 md:py-32 lg:py-40'
  };

  const backgroundClasses = {
    default: theme === 'light' ? 'bg-light-bg' : 'bg-dark-bg',
    surface: theme === 'light' ? 'bg-light-surface' : 'bg-dark-surface',
    gradient: theme === 'light' 
      ? 'bg-gradient-to-br from-light-bg via-light-surface to-light-bg' 
      : 'bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg',
    grid: theme === 'light'
      ? 'bg-light-bg bg-grid-pattern'
      : 'bg-dark-bg bg-grid-pattern'
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
      className={`
        ${sizeClasses[size]} 
        ${backgroundClasses[background]}
        ${className}
      `}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;