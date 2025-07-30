import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "TrackNetX - Vehicle Re-Identification",
    year: "Feb 2025",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "VisionStream - Real-Time Video Inference System",
    year: "Dec 2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "GenAIAssist - RAG-Based LLM Pipeline",
    year: "Nov 2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "SmartVision AI - Object Detection & Tracking",
    year: "Jan 2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
