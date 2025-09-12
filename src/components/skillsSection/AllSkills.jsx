import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import { SiPython, SiPytorch, SiOpencv, SiNvidia, SiDocker, SiFastapi, SiMongodb, SiTensorflow, SiOpenai } from "react-icons/si";
import { SiIntel } from "react-icons/si";
// import Nvidia_CUDA_Logo from "../../assets/icons/Nvidia_CUDA.svg";

// const skills = [
//   {
//     skill: "HTML",
//     icon: FaHtml5,
//   },
//   {
//     skill: "CSS",
//     icon: FaCss3Alt,
//   },
//   {
//     skill: "JavaScript",
//     icon: IoLogoJavascript,
//   },
//   {
//     skill: "TypeScript",
//     icon: SiTypescript,
//   },
//   {
//     skill: "ReactJS",
//     icon: FaReact,
//   },
//   {
//     skill: "Redux",
//     icon: SiRedux,
//   },
//   {
//     skill: "NextJS",
//     icon: SiNextdotjs,
//   },
//   {
//     skill: "TailwindCSS",
//     icon: RiTailwindCssFill,
//   },
// ];

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
    skill: "Openai",
    icon: SiOpenai,
  },
  // import { SiPython, SiPytorch, SiOpencv, SiNvidia, SiDocker, SiFastapi, SiMongodb, SiTensorflow, SiOpenai } from "react-icons/si";

  // {
  //   skill: "Hugging Face",
  //   icon: FaReact,
  // },
  // {
  //   skill: "Flask",
  //   icon: SiRedux,
  // },
  // {
  //   skill: "FastAPI",
  //   icon: SiNextdotjs,
  // },
  // {
  //   skill: "Streamlit",
  //   icon: RiTailwindCssFill,
  // },
];

const AllSkills = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
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

      {/* Skills Categories (Optional Enhancement) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300 rounded-full">
            Deep Learning
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-accent-100 text-accent-700 dark:bg-accent-900/20 dark:text-accent-300 rounded-full">
            Computer Vision
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-secondary-100 text-secondary-700 dark:bg-secondary-900/20 dark:text-secondary-300 rounded-full">
            Edge Computing
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300 rounded-full">
            AI Optimization
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AllSkills;
