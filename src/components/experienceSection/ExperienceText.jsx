import { useSelector } from 'react-redux';

const ExperienceText = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-center">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-primary-500 via-accent-500 to-cyan bg-clip-text text-transparent'
        }`}>
          Experience
        </h2>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
          theme === 'light' 
            ? 'text-slate-600' 
            : 'text-dark-text/80'
        }`}>
          Building innovative AI solutions with cutting-edge technologies
        </p>
      </div>
      
      {/* Decorative element */}
      <div className="flex items-center gap-3">
        <div className={`w-8 h-px ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-transparent to-blue-400' 
            : 'bg-gradient-to-r from-transparent to-primary-400'
        }`} />
        <div className={`w-2 h-2 rounded-full ${
          theme === 'light' ? 'bg-blue-500' : 'bg-primary-500'
        }`} />
        <div className={`w-8 h-px ${
          theme === 'light' 
            ? 'bg-gradient-to-l from-transparent to-indigo-400' 
            : 'bg-gradient-to-l from-transparent to-accent-400'
        }`} />
      </div>
    </div>
  );
};

export default ExperienceText;
