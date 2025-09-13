import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { SiNvidia, SiPython, SiPytorch, SiIntel } from 'react-icons/si';

const ExperienceTopMiddle = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative group min-h-[420px] flex flex-col p-7 rounded-3xl border backdrop-blur-md transition-all duration-500 overflow-hidden ${
        theme === 'light' 
          ? 'bg-white/95 border-blue-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300/80' 
          : 'bg-dark-card/90 border-primary-500/40 shadow-glow-sm hover:shadow-glow-lg hover:border-primary-400/60'
      }`}>
        
        {/* Subtle inner glow on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-blue-50/60 via-transparent to-indigo-50/40' 
            : 'bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/10'
        }`} />
        
        {/* Top Accent Bar */}
        <div className={`absolute top-0 left-0 w-full h-1 ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500' 
            : 'bg-gradient-to-r from-primary-500 via-accent-500 to-cyan'
        }`} />

        
        {/* Decorative corner elements */}
        <div className={`absolute top-0 left-0 w-16 h-16 rounded-br-3xl ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-orange-200/40 to-transparent' 
            : 'bg-gradient-to-br from-primary-500/30 to-transparent'
        }`} />
        <div className={`absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl ${
          theme === 'light' 
            ? 'bg-gradient-to-tl from-red-200/40 to-transparent' 
            : 'bg-gradient-to-tl from-accent-500/30 to-transparent'
        }`} />
        
        {/* Content container */}
        <div className="relative z-10 w-full max-w-sm mx-auto">
          {/* AI Visual Representation */}
          <div className="relative mb-4">
            <div className={`absolute -inset-2 rounded-2xl blur-xl opacity-20 ${
              theme === 'light' 
                ? 'bg-gradient-to-br from-orange-400 to-red-400' 
                : 'bg-gradient-to-br from-primary-400 to-accent-400'
            }`} />
            
            {/* AI/ML Visual Grid */}
            <div className={`relative z-10 aspect-square rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02] p-6 ${
              theme === 'light' 
                ? 'bg-gradient-to-br from-orange-100 via-red-50 to-pink-100' 
                : 'bg-gradient-to-br from-primary-900/50 via-accent-900/30 to-dark-surface/80'
            }`}>
              
              {/* Central AI Brain Icon */}
              <div className="relative h-full flex items-center justify-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                  theme === 'light' 
                    ? 'bg-gradient-to-br from-orange-500 to-red-600 shadow-xl' 
                    : 'bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow'
                }`}>
                  <div className="text-3xl text-white">🧠</div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                  <div className={`absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 ${
                    theme === 'light' ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-green-500/40' : 'bg-gradient-to-br from-green-500 to-green-700 text-white shadow-green-500/60'
                  }`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                    <SiNvidia className="text-base drop-shadow-md relative z-10" />
                  </div>
                  <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 ${
                    theme === 'light' ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-blue-500/40' : 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-blue-500/60'
                  }`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                    <SiPython className="text-base drop-shadow-md relative z-10" />
                  </div>
                  <div className={`absolute left-1 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 ${
                    theme === 'light' ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-orange-500/40' : 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-orange-500/60'
                  }`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                    <SiPytorch className="text-base drop-shadow-md relative z-10" />
                  </div>
                  <div className={`absolute right-1 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 ${
                    theme === 'light' ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-cyan-500/40' : 'bg-gradient-to-br from-cyan-500 to-blue-700 text-white shadow-cyan-500/60'
                  }`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                    <SiIntel className="text-base drop-shadow-md relative z-10" />
                  </div>
                </div>
              </div>
              
              {/* Corner Tech Indicators */}
              <div className="absolute top-3 left-3 text-xs font-mono opacity-60">PyTorch</div>
              <div className="absolute top-3 right-3 text-xs font-mono opacity-60">CUDA</div>
              <div className="absolute bottom-3 left-3 text-xs font-mono opacity-60">TensorRT</div>
              <div className="absolute bottom-3 right-3 text-xs font-mono opacity-60">LLMs</div>
            </div>
            
            {/* Portfolio Badge */}
            <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-sm border ${
              theme === 'light'
                ? 'bg-white/95 border-white/60 text-slate-700 shadow-lg'
                : 'bg-dark-bg/95 border-primary-500/40 text-white shadow-glow'
            }`}>
              <span className="text-sm font-medium">AI Portfolio</span>
            </div>
          </div>
          
          {/* Clean tech stack display */}
          <div className="space-y-3">
            <h4 className={`text-sm font-semibold text-center ${
              theme === 'light' ? 'text-slate-700' : 'text-white'
            }`}>
              Core Technologies
            </h4>
            
            {/* Horizontal tech tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {['PyTorch', 'CUDA', 'TensorRT', 'LLMs'].map((tech, index) => (
                <span 
                  key={tech}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                    theme === 'light' 
                      ? 'bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-700' 
                      : 'bg-primary-900/30 text-primary-300 hover:bg-primary-800/40 hover:text-primary-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Subtle separator */}
            <div className="flex items-center justify-center pt-2">
              <div className={`w-8 h-px ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-transparent via-slate-300 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-primary-500/50 to-transparent'
              }`} />
            </div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-4 right-6 w-2 h-2 rounded-full animate-bounce ${
            theme === 'light' ? 'bg-orange-400/60' : 'bg-primary-400/60'
          }`} style={{ animationDelay: '0s' }} />
          <div className={`absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full animate-bounce ${
            theme === 'light' ? 'bg-red-400/60' : 'bg-accent-400/60'
          }`} style={{ animationDelay: '1s' }} />
          <div className={`absolute top-1/2 left-4 w-1 h-1 rounded-full animate-bounce ${
            theme === 'light' ? 'bg-pink-400/60' : 'bg-cyan/60'
          }`} style={{ animationDelay: '2s' }} />
        </div>
    </motion.div>
  );
};

export default ExperienceTopMiddle;
