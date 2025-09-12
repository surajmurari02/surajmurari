import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const ProjectsText = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h2 className={`text-5xl md:text-6xl font-bold text-center relative ${ 
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan via-primary-400 to-accent-400 bg-clip-text text-transparent'
        }`}>
          Projects
        </h2>
        
        {/* Decorative underline */}
        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full ${ 
          theme === 'light'
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
            : 'bg-gradient-to-r from-cyan to-primary-500'
        }`} />
      </motion.div>

      {/* Enhanced Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6 text-center"
      >
        <p className={`text-lg md:text-xl leading-relaxed font-medium ${ 
          theme === 'light' ? 'text-slate-700' : 'text-white'
        }`}>
          I have worked on a range of <span className={`font-semibold ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-cyan to-primary-400 bg-clip-text text-transparent'
          }`}>AI and ML projects</span>, from real-time computer vision systems and embedding-based retrieval models to scalable LLM pipelines and hardware-accelerated inference deployments.
        </p>
        
        <p className={`text-base md:text-lg leading-relaxed ${ 
          theme === 'light' ? 'text-slate-600' : 'text-dark-text/90'
        }`}>
          These projects reflect a deep focus on <span className={`font-medium ${
            theme === 'light' ? 'text-slate-800' : 'text-white'
          }`}>performance, modular design, and real-world impact</span> across edge and cloud environments.
        </p>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center gap-8 mt-8"
        >
          <div className="text-center">
            <div className={`text-2xl font-bold ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-cyan to-primary-400 bg-clip-text text-transparent'
            }`}>
              10+
            </div>
            <div className={`text-sm ${
              theme === 'light' ? 'text-slate-500' : 'text-dark-text/70'
            }`}>
              AI Projects
            </div>
          </div>
          
          <div className={`w-px h-8 ${
            theme === 'light' ? 'bg-slate-300' : 'bg-dark-border'
          }`} />
          
          <div className="text-center">
            <div className={`text-2xl font-bold ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent'
            }`}>
              3+
            </div>
            <div className={`text-sm ${
              theme === 'light' ? 'text-slate-500' : 'text-dark-text/70'
            }`}>
              Years Experience
            </div>
          </div>
          
          <div className={`w-px h-8 ${
            theme === 'light' ? 'bg-slate-300' : 'bg-dark-border'
          }`} />
          
          <div className="text-center">
            <div className={`text-2xl font-bold ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-accent-400 to-orange bg-clip-text text-transparent'
            }`}>
              5+
            </div>
            <div className={`text-sm ${
              theme === 'light' ? 'text-slate-500' : 'text-dark-text/70'
            }`}>
              Technologies
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsText;
