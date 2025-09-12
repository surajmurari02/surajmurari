import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleSkill from "./SingleSkill";

import { SiPython, SiPytorch, SiOpencv, SiNvidia, SiDocker, SiOpenai } from "react-icons/si";
import { SiIntel } from "react-icons/si";

const skills = [
  {
    skill: "Python",
    icon: SiPython,
  },
  {
    skill: "PyTorch",
    icon: SiPytorch,
  },
  {
    skill: "OpenCV",
    icon: SiOpencv,
  },
  {
    skill: "TensorRT",
    icon: SiNvidia,
  },
  {
    skill: "CUDA",
    icon: SiNvidia,
  },
  {
    skill: "DeepStream",
    icon: SiNvidia,
  },
  {
    skill: "OpenVINO",
    icon: SiIntel,
  },
  {
    skill: "Docker",
    icon: SiDocker,
  },
  {
    skill: "OpenAI",
    icon: SiOpenai,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Skills Grid for Mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              className="flex justify-center"
            >
              <SingleSkill
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Skills Categories for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300 rounded-full">
            Deep Learning
          </span>
          <span className="px-2 py-1 text-xs font-medium bg-accent-100 text-accent-700 dark:bg-accent-900/20 dark:text-accent-300 rounded-full">
            Computer Vision
          </span>
          <span className="px-2 py-1 text-xs font-medium bg-secondary-100 text-secondary-700 dark:bg-secondary-900/20 dark:text-secondary-300 rounded-full">
            Edge Computing
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AllSkillsSM;
