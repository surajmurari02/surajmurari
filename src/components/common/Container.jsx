import { useSelector } from 'react-redux';

const Container = ({ 
  children, 
  size = 'default', // 'sm', 'default', 'lg', 'xl', 'full'
  className = '',
  ...props 
}) => {
  const theme = useSelector((state) => state.theme.mode);

  const sizeClasses = {
    sm: 'max-w-2xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl', 
    xl: 'max-w-8xl',
    full: 'max-w-full'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        mx-auto 
        px-4 
        sm:px-6 
        lg:px-8 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;