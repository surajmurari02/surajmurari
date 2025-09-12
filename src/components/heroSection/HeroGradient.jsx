import { useSelector } from 'react-redux';

const HeroGradient = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Minimal gradient orbs */}
      <div className={`absolute top-20 right-80 w-48 h-48 rounded-full blur-3xl animate-float ${
        theme === 'light' 
          ? 'bg-primary-200/30' 
          : 'bg-primary-500/15'
      }`} style={{ animationDelay: '0s' }} />
      
      <div className={`absolute bottom-20 left-20 w-32 h-32 rounded-full blur-2xl animate-float ${
        theme === 'light' 
          ? 'bg-accent-200/25' 
          : 'bg-accent-500/10'
      }`} style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default HeroGradient;
