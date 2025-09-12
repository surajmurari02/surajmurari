import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-12 items-center">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ExperienceTopLeft />
        </motion.div>
        
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <ExperienceTopMiddle />
        </motion.div>
        
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ExperienceTopRight />
        </motion.div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden space-y-8">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <ExperienceTopMiddle />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ExperienceTopLeft />
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ExperienceTopRight />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTop;
