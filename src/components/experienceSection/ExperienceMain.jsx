import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { fadeIn } from "../../framerMotion/variants";
import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import Container from "../common/Container";

const ExperienceMain = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section 
      id="experience" 
      className={`py-16 md:py-24 relative overflow-hidden scroll-mt-32 ${
        theme === 'light' ? 'bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30' : 'bg-gradient-to-br from-dark-bg via-dark-surface/40 to-primary-900/10'
      }`}
      style={{ scrollMarginTop: '130px' }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className={`absolute inset-0 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/30' 
            : 'bg-gradient-to-br from-primary-900/20 via-dark-surface/30 to-accent-900/10'
        }`} />
        
        {/* Animated gradient orbs */}
        <div className={`absolute top-16 left-16 w-96 h-96 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-blue-200/30 to-indigo-300/20 opacity-60' 
            : 'bg-gradient-to-r from-primary-500/20 to-accent-500/15 opacity-40'
        }`} />
        <div className={`absolute bottom-16 right-16 w-80 h-80 rounded-full blur-3xl animate-float ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-indigo-200/25 to-purple-300/20 opacity-50' 
            : 'bg-gradient-to-r from-accent-500/15 to-cyan/10 opacity-30'
        }`} style={{ animationDelay: '4s' }} />
        
        {/* Subtle grid pattern */}
        <div className={`absolute inset-0 opacity-[0.02] ${
          theme === 'light' ? 'bg-grid-pattern' : 'bg-grid-pattern opacity-20'
        }`} />
      </div>

      <Container size="lg" className="relative space-y-12">
        {/* Section Header */}
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <ExperienceText />
        </motion.div>

        {/* Experience Stats/Top Section */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <ExperienceTop />
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <div className={`w-24 h-1 rounded-full ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
              : 'bg-gradient-to-r from-primary-500 to-accent-500'
          }`} />
        </motion.div>

        {/* Experiences List */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-x-auto overflow-y-visible relative z-10"
        >
          <div className="min-w-max lg:min-w-0 py-4">
            <AllExperiences />
          </div>
        </motion.div>
      </Container>

      {/* Decorative Lines */}
      <div className={`absolute left-0 top-1/3 w-16 h-px ${
        theme === 'light' ? 'bg-gradient-to-r from-blue-500 to-transparent' : 'bg-gradient-to-r from-primary-400 to-transparent'
      }`} />
      <div className={`absolute right-0 bottom-1/3 w-16 h-px ${
        theme === 'light' ? 'bg-gradient-to-l from-indigo-500 to-transparent' : 'bg-gradient-to-l from-accent-400 to-transparent'
      }`} />
    </section>
  );
};

export default ExperienceMain;
