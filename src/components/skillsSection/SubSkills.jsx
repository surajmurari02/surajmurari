import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SubSkills = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section className={`relative border-y ${
      theme === 'light' 
        ? 'border-primary-200/40' 
        : 'border-dark-border/60'
    }`}>
      {/* Subtle Gradient Overlay */}
      <div className={`absolute inset-0 z-20 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-primary-500/20 via-accent-500/25 to-primary-500/20'
          : 'bg-gradient-to-r from-cyan/20 via-orange/25 to-cyan/20'
      }`} />
      
      {/* Background Image */}
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden"
      >
        <img
          src="/images/subSkills.jpg"
          alt="Skills showcase background"
          className="w-full h-12 md:h-16 lg:h-20 object-cover"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default SubSkills;
