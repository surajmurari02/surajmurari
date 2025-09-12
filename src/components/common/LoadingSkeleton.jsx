const LoadingSkeleton = ({ 
  className = '', 
  variant = 'default',
  count = 1,
  ...props 
}) => {
  const variants = {
    default: 'h-4 bg-grey/20',
    text: 'h-4 bg-grey/20 rounded',
    title: 'h-8 bg-grey/20 rounded w-3/4',
    avatar: 'h-16 w-16 bg-grey/20 rounded-full',
    image: 'h-48 bg-grey/20 rounded-lg',
    button: 'h-10 bg-grey/20 rounded-lg w-24',
    card: 'h-64 bg-grey/20 rounded-xl'
  };

  const skeletonClass = variants[variant] || variants.default;

  return (
    <div className={`animate-pulse ${className}`} {...props}>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={`${skeletonClass} bg-gradient-to-r from-grey/10 via-lightGrey/20 to-grey/10 animate-pulse ${
            count > 1 && index < count - 1 ? 'mb-3' : ''
          }`}
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s infinite'
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSkeleton;