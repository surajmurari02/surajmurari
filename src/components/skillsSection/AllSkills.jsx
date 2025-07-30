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
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
