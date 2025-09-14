import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { getDynamicStats } from '../../config/portfolio';
import { useMemo } from 'react';

const ProjectsText = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dynamicStats = getDynamicStats();
  
  // Calculate actual project count from the projects array in this component
  const projectStats = useMemo(() => {
    // Import the projects array to get actual count
    const allProjects = [
      { name: "TrackNetX - Advanced Vehicle Re-Identification System", category: "Computer Vision" },
      { name: "VisionStream - High-Performance Inference Pipeline", category: "MLOps" },
      { name: "IntelliRAG - Context-Aware LLM Assistant", category: "GenAI/LLM" },
      { name: "SmartVision AI - Multi-Object Tracking System", category: "Computer Vision" },
      { name: "AutoML Model Optimization Framework", category: "MLOps" },
      { name: "EmbedSearch - Semantic Search Engine", category: "NLP/Embeddings" },
      { name: "CloudVision - Distributed Computer Vision Platform", category: "Cloud AI" },
      { name: "AI Portfolio Hub - Modern Showcase", category: "Full Stack" }
    ];
    
    return {
      totalProjects: allProjects.length,
      aiProjects: allProjects.filter(p => 
        p.category.includes('AI') || 
        p.category.includes('Computer Vision') || 
        p.category.includes('MLOps') || 
        p.category.includes('GenAI') ||
        p.category.includes('NLP')
      ).length
    };
  }, []);
  
  const stats = [
    { 
      number: `${projectStats.aiProjects}+`, 
      label: "AI Projects",
      gradient: theme === 'light' 
        ? 'from-blue-600 to-cyan-600' 
        : 'from-cyan to-primary-400'
    },
    { 
      number: dynamicStats.experience, 
      label: "Experience",
      gradient: theme === 'light' 
        ? 'from-purple-600 to-indigo-600' 
        : 'from-primary-400 to-accent-400'
    },
    { 
      number: `${Math.min(dynamicStats.technologiesCount, 25)}+`, 
      label: "Technologies",
      gradient: theme === 'light' 
        ? 'from-indigo-600 to-purple-600' 
        : 'from-accent-400 to-orange'
    }
  ];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto">
      {/* Main Title - Styled like Let's Connect */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center ${
          theme === 'light' 
            ? 'text-gray-900' 
            : 'text-white'
        }`}
      >
        <span className="text-cyan">Projects</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`text-lg md:text-xl text-center max-w-4xl leading-relaxed mb-6 ${
          theme === 'light' 
            ? 'text-gray-600' 
            : 'text-gray-300'
        }`}
      >
        I have worked on a range of{' '}
        <span className="font-semibold text-orange">AI and ML projects</span>, from real-time computer vision systems and embedding-based retrieval models to scalable LLM pipelines and hardware-accelerated inference deployments.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`text-base md:text-lg text-center max-w-4xl leading-relaxed mb-6 ${
          theme === 'light' 
            ? 'text-gray-600' 
            : 'text-gray-300'
        }`}
      >
        These projects reflect a deep focus on{' '}
        <span className="font-semibold text-cyan">performance, modular design, and real-world impact</span>{' '}
        across edge and cloud environments.
      </motion.p>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center justify-center mb-8 space-x-4"
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
        <div className="w-2 h-2 rounded-full bg-cyan" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
      </motion.div>

      {/* Key Stats - Dynamic Data */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-center items-center gap-8 mt-8"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div className="text-center">
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className={`text-sm ${
                theme === 'light' ? 'text-slate-500' : 'text-dark-text/70'
              }`}>
                {stat.label}
              </div>
            </div>
            {index < stats.length - 1 && (
              <div className={`w-px h-8 ml-8 ${
                theme === 'light' ? 'bg-slate-300' : 'bg-dark-border'
              }`} />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsText;
