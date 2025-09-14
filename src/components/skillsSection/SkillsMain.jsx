import { useSelector } from 'react-redux';
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import Container from "../common/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section 
      id="skills" 
      className={`py-16 md:py-20 relative scroll-mt-32 ${
        theme === 'light' ? 'bg-gradient-to-b from-slate-50/40 to-white/60' : 'bg-dark-surface/10'
      }`}
      style={{ scrollMarginTop: '130px' }}
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-transparent via-primary-50/20 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-primary-900/3 to-transparent'
        }`} />
      </div>

      <Container size="lg" className="relative">
        {/* Skills Text Section */}
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <SkillsText />
        </motion.div>

        {/* Skills Content */}
        <div className="relative">
          {/* Desktop Skills */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <AllSkills />
          </motion.div>

          {/* Mobile Skills */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="block lg:hidden"
          >
            <AllSkillsSM />
          </motion.div>
        </div>
      </Container>

      {/* Decorative Lines - Hidden on mobile */}
      <div className={`absolute left-0 top-1/3 w-16 h-px hidden md:block ${
        theme === 'light' ? 'bg-gradient-to-r from-primary-400 to-transparent' : 'bg-gradient-to-r from-primary-500 to-transparent'
      }`} />
      <div className={`absolute right-0 bottom-1/3 w-16 h-px hidden md:block ${
        theme === 'light' ? 'bg-gradient-to-l from-accent-400 to-transparent' : 'bg-gradient-to-l from-accent-500 to-transparent'
      }`} />
    </section>
  );
};

export default SkillsMain;
