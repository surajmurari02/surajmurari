import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  return (
    <div className="flex flex-col gap-6 h-full justify-center text-center lg:text-left relative">
      {/* Subtle background glow - Hidden on mobile */}
      <div className="absolute -left-4 -top-4 w-20 h-20 bg-gradient-to-r from-cyan/10 to-orange/10 rounded-full blur-2xl -z-10 hidden md:block"></div>
      
      {/* Modern role tag */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 w-fit mx-auto lg:mx-0"
      >
        <span className="w-2 h-2 bg-cyan rounded-full animate-pulse"></span>
        <h2 className="text-sm lg:text-base font-mono tracking-wider bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent uppercase font-semibold">
          Machine Learning Engineer
        </h2>
      </motion.div>

      {/* Enhanced name with gradient */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        animate="show"
        className="relative"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-none">
          <motion.span 
            className="block bg-gradient-to-r from-white via-orange to-cyan bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Suraj
          </motion.span>
          <motion.span 
            className="block bg-gradient-to-r from-cyan via-orange to-white bg-clip-text text-transparent ml-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Murari
          </motion.span>
        </h1>
        
        {/* Modern underline animation */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-1 bg-gradient-to-r from-cyan to-orange rounded-full mt-4"
        />
      </motion.div>

      {/* Enhanced mission statement */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="relative"
      >
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 font-light px-2 sm:px-0">
          Engineer on a{" "}
          <motion.span 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-orange to-cyan bg-clip-text text-transparent font-semibold">
              Mission
            </span>
          </motion.span>{" "}
          to Transform <br />
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="text-cyan font-medium"
          >
            Ideas
          </motion.span>{" "}
          into{" "}
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="text-orange font-medium"
          >
            Intelligent Systems
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="text-orange"
          >
            .
          </motion.span>
        </p>
      </motion.div>

      {/* Modern tech stack pills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="flex flex-wrap gap-2 sm:gap-3 mt-6 justify-center lg:justify-start"
      >
        {["AI/ML", "React", "Python", "Cloud"].map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 + index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="px-3 sm:px-4 py-2 text-sm font-medium bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-cyan/30 rounded-full text-cyan hover:border-orange/50 hover:text-orange transition-all duration-300 cursor-pointer"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroText;
