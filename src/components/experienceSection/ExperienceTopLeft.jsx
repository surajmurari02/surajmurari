// import ExperienceInfo from "./ExperienceInfo";

// const ExperienceTopLeft = () => {
//   return (
//     <div className="flex flex-col gap-6 w-[300px]">
//       <p className="text-orange font-bold uppercase text-3xl font-special text-center">
//         Since 2023
//       </p>
//       <div className="flex justify-center items-center gap-4">
//         <ExperienceInfo number="2" text="Years" />
//         <p className="font-bold text-6xl text-lightBrown">-</p>
//         <ExperienceInfo number="23" text="Websites" />
//       </div>
//       <p className="text-center">
//         With 3 years of experience building dynamic and user-friendly web
//         applications.
//       </p>
//       <ExperienceInfo number="$100k" text="Max Budget" />
//     </div>
//   );
// };

// export default ExperienceTopLeft;

import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { getDynamicStats } from '../../config/portfolio';
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dynamicStats = getDynamicStats();

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

      
      <div className="relative z-10 flex flex-col gap-6 w-full max-w-sm mx-auto">
        {/* Since badge */}
        <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider ${
          theme === 'light'
            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
            : 'bg-gradient-to-r from-orange to-lightOrange text-dark-bg shadow-glow'
        }`}>
          Since 2023
        </div>

        {/* Stats row */}
        <div className="flex justify-center items-center gap-4">
          <ExperienceInfo number={dynamicStats.experience.split(' ')[0]} text={dynamicStats.experience.split(' ')[1]} />
          <div className={`w-8 h-px ${
            theme === 'light' ? 'bg-gradient-to-r from-orange-400 to-red-400' : 'bg-gradient-to-r from-orange to-lightOrange'
          }`} />
          <ExperienceInfo number={`${dynamicStats.completedProjects}+`} text="Projects" />
        </div>

        {/* Description */}
        <p className={`text-center text-sm leading-relaxed ${
          theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
        }`}>
          Optimized & deployed real-world AI solutions using PyTorch, CUDA, YOLO, TensorRT, and LLMs across cloud and edge environments.
        </p>

        {/* Key metric */}
        <div className="text-center">
          <ExperienceInfo number="360%" text="Speed Boost" />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTopLeft;
