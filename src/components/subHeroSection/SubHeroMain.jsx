import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';
import Container from '../common/Container';
import { FiZap, FiCpu, FiCheckCircle } from 'react-icons/fi';

const SubHeroMain = () => {
  const theme = useSelector((state) => state.theme.mode);

  const highlights = [
    { 
      text: "Efficient Problem Solver", 
      icon: FiZap, 
      description: "Optimizing complex challenges",
      color: theme === 'light' ? 'from-blue-500 to-cyan-500' : 'from-primary-400 to-cyan'
    },
    { 
      text: "Deep Tech Builder", 
      icon: FiCpu, 
      description: "AI & ML Engineering",
      color: theme === 'light' ? 'from-indigo-500 to-purple-500' : 'from-accent-400 to-primary-400'
    },
    { 
      text: "Production-Ready Mindset", 
      icon: FiCheckCircle, 
      description: "Scalable system design",
      color: theme === 'light' ? 'from-purple-500 to-pink-500' : 'from-orange to-accent-400'
    }
  ];

  return (
    <section className={`py-8 md:py-12 relative overflow-hidden ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-slate-50/90 via-blue-50/60 to-indigo-50/40' 
        : 'bg-gradient-to-br from-dark-bg via-dark-surface/60 to-primary-900/20'
    }`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className={`absolute inset-0 ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-50/40 via-transparent to-indigo-50/40' 
            : 'bg-gradient-to-r from-primary-900/10 via-transparent to-accent-900/10'
        }`} />
        
        {/* Floating orbs */}
        <div className={`absolute -top-16 -left-16 w-48 h-48 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-300/20 to-cyan-300/15 opacity-60' 
            : 'bg-gradient-to-r from-primary-500/15 to-cyan/10 opacity-40'
        }`} />
        <div className={`absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-indigo-300/15 to-purple-300/20 opacity-50' 
            : 'bg-gradient-to-r from-accent-500/10 to-primary-500/15 opacity-30'
        }`} style={{ animationDelay: '2s' }} />
        
        {/* Subtle pattern */}
        <div className={`absolute inset-0 opacity-[0.02] ${
          theme === 'light' ? 'bg-grid-pattern' : 'bg-grid-pattern opacity-30'
        }`} />
      </div>

      <Container size="lg" className="relative w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-6"
        >
          <h2 className={`text-lg font-semibold mb-2 uppercase tracking-wider ${
            theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
          }`}>
            Core Strengths
          </h2>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
              : 'bg-gradient-to-r from-primary-500 to-accent-500'
          }`} />
        </motion.div>

        {/* Modern Cards Layout */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className={`relative group p-4 lg:p-5 h-full min-h-[180px] rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                theme === 'light' 
                  ? 'bg-white/90 border-blue-200/60 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/80' 
                  : 'bg-dark-card/90 border-primary-500/30 shadow-lg hover:shadow-xl hover:shadow-primary-500/20 hover:border-primary-400/50'
              }`}
            >
              {/* Icon with gradient background */}
              <div className={`relative w-12 h-12 rounded-2xl mb-3 bg-gradient-to-br ${highlight.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`w-full h-full rounded-2xl flex items-center justify-center ${
                  theme === 'light' ? 'bg-white' : 'bg-dark-card'
                }`}>
                  <highlight.icon className={`w-6 h-6 bg-gradient-to-br ${highlight.color} bg-clip-text text-transparent`} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-1 relative z-10">
                <h3 className={`text-base lg:text-lg font-bold transition-colors duration-300 ${
                  theme === 'light' 
                    ? 'text-slate-800 group-hover:text-slate-900' 
                    : 'text-white group-hover:text-white'
                }`}>
                  {highlight.text}
                </h3>
                
                <p className={`text-xs lg:text-sm transition-colors duration-300 ${
                  theme === 'light' 
                    ? 'text-slate-600 group-hover:text-slate-700' 
                    : 'text-dark-text/80 group-hover:text-dark-text/90'
                }`}>
                  {highlight.description}
                </p>
              </div>

              {/* Hover effect gradient - very subtle */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br ${highlight.color}`} />
              
              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 rounded-b-2xl bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center"
        >
          <p className={`text-lg italic ${
            theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
          }`}>
            "Building AI solutions that deliver real-world impact"
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default SubHeroMain;
