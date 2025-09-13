// Icon Mapping Utility for Dynamic Skills
import { 
  SiPython, SiPytorch, SiOpencv, SiNvidia, SiDocker, SiFastapi, 
  SiMongodb, SiTensorflow, SiOpenai, SiIntel, SiTypescript,
  SiMysql, SiKeras, SiScikitlearn, SiHuggingface, SiGit,
  SiFlask, SiStreamlit, SiPostman
} from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

// Icon mapping object - add new icons here when adding new skills
export const iconMap = {
  // Programming Languages
  "SiPython": SiPython,
  "IoLogoJavascript": IoLogoJavascript,
  "SiTypescript": SiTypescript,
  "FaHtml5": FaHtml5,
  "FaCss3Alt": FaCss3Alt,
  
  // ML/AI Technologies
  "SiPytorch": SiPytorch,
  "SiTensorflow": SiTensorflow,
  "SiKeras": SiKeras,
  "SiScikitlearn": SiScikitlearn,
  "SiOpenai": SiOpenai,
  "SiOpencv": SiOpencv,
  "SiHuggingface": SiHuggingface,
  
  // Hardware/Optimization
  "SiNvidia": SiNvidia,
  "SiIntel": SiIntel,
  
  // Web Technologies
  "FaReact": FaReact,
  "SiFastapi": SiFastapi,
  "SiFlask": SiFlask,
  "SiStreamlit": SiStreamlit,
  
  // Databases
  "SiMongodb": SiMongodb,
  "SiMysql": SiMysql,
  
  // DevOps/Tools
  "SiDocker": SiDocker,
  "SiGit": SiGit,
  "SiPostman": SiPostman,
  "SiVisualstudiocode": FaCode,
  
  // Fallback icons for missing ones
  "SiXgboost": FaCode,
  "SiUltralytics": SiOpencv,
  "SiMobilenet": SiTensorflow,
  "SiLangchain": SiOpenai,
  "SiOllama": SiOpenai,
};

// Helper function to get icon component from string
export const getIconComponent = (iconName) => {
  return iconMap[iconName] || FaCode; // Default fallback icon
};

export default iconMap;