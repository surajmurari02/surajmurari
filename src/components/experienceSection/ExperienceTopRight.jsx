// const ExperienceTopRight = () => {
//   return (
//     <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
//       <p className="text-lg text-center text-lightGrey">
//         I specialize in{" "}
//         <span className="font-bold text-white">
//           React and modern JavaScript
//         </span>
//         , leveraging best practices to create scalable and maintainable
//         solutions. <br />
//         My experience spans working on diverse projects, from small business
//         websites to{" "}
//         <span className="font-bold text-white">complex front-end systems</span>,
//         always aiming for clean code and exceptional user experiences.
//       </p>
//     </div>
//   );
// };

// export default ExperienceTopRight;


import { motion } from "framer-motion";
import { useSelector } from 'react-redux';

const ExperienceTopRight = () => {
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
      {/* Gradient Background Overlay */}
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

            
      <div className="relative z-10 w-full max-w-sm mx-auto">
        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-3 h-3 rounded-full ${
            theme === 'light' ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-primary-500 to-accent-500'
          }`} />
          <h3 className={`text-lg font-semibold ${
            theme === 'light' ? 'text-slate-800' : 'text-white'
          }`}>
            My Expertise
          </h3>
        </div>

        <p className={`text-base leading-relaxed ${
          theme === 'light' ? 'text-slate-600' : 'text-dark-text/90'
        }`}>
          I specialize in{" "}
          <span className={`font-semibold ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent'
          }`}>
            Deep Learning, Computer Vision, and LLMs
          </span>
          , applying best practices to build optimized and scalable AI systems.
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex items-start gap-2">
            <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
              theme === 'light' ? 'bg-orange-400' : 'bg-primary-400'
            }`} />
            <span className={`text-sm ${
              theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
            }`}>
              <span className={`font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                Real-time video analytics
              </span> and computer vision systems
            </span>
          </div>
          <div className="flex items-start gap-2">
            <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
              theme === 'light' ? 'bg-red-400' : 'bg-accent-400'
            }`} />
            <span className={`text-sm ${
              theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
            }`}>
              <span className={`font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                Edge deployments
              </span> and GenAI applications
            </span>
          </div>
        </div>

        <div className={`mt-4 pt-4 border-t text-sm text-center italic ${
          theme === 'light' 
            ? 'border-slate-200 text-slate-500' 
            : 'border-dark-border text-dark-text/60'
        }`}>
          Always aiming for performance, reliability, and impact
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTopRight;
