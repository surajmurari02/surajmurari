import { useState, useMemo } from "react";
import { useSelector } from 'react-redux';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import ProjectFilter from "./ProjectFilter";
import Container from "../common/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Configuration: Change this number to set how many projects show initially
const INITIAL_PROJECTS_COUNT = 5;

const allProjects = [
  {
    name: "TrackNetX - Advanced Vehicle Re-Identification System",
    year: "Feb 2025",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
    category: "Computer Vision",
    tech: ["PyTorch", "CUDA", "TensorRT", "YOLO", "DeepSORT", "OpenCV"],
    description: "Production-ready vehicle re-identification system achieving 94% accuracy with 360% speed boost through TensorRT optimization. Deployed on edge devices for real-time traffic monitoring across multiple camera feeds."
  },
  {
    name: "VisionStream - High-Performance Inference Pipeline",
    year: "Dec 2024", 
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
    category: "MLOps",
    tech: ["Python", "TensorRT", "FastAPI", "Docker", "Kubernetes", "CUDA"],
    description: "Scalable video processing pipeline handling 100+ concurrent streams with <50ms latency. Features automatic model optimization, dynamic batching, and cloud-edge hybrid deployment architecture."
  },
  {
    name: "IntelliRAG - Context-Aware LLM Assistant",
    year: "Nov 2024",
    align: "right", 
    image: "/images/website-img-3.jpg",
    link: "#",
    category: "GenAI/LLM",
    tech: ["LangChain", "ChromaDB", "OpenAI", "FastAPI", "Redis", "PostgreSQL"],
    description: "Enterprise-grade RAG system with vector similarity search, semantic caching, and multi-modal document processing. Improved response accuracy by 40% while reducing inference costs by 60%."
  },
  {
    name: "SmartVision AI - Multi-Object Tracking System",
    year: "Jan 2024",
    align: "left",
    image: "/images/website-img-4.jpg", 
    link: "#",
    category: "Computer Vision",
    tech: ["Python", "YOLOv8", "DeepSORT", "OpenCV", "TensorRT", "CUDA"],
    description: "Real-time surveillance system tracking 50+ objects simultaneously with 97% accuracy. Features crowd density estimation, anomaly detection, and automated alert generation for security applications."
  },
  {
    name: "AutoML Model Optimization Framework",
    year: "Oct 2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#", 
    category: "MLOps",
    tech: ["PyTorch", "ONNX", "TensorRT", "Optuna", "MLflow", "Docker"],
    description: "Automated model compression and optimization toolkit achieving 70% model size reduction with <2% accuracy loss. Supports quantization, pruning, and knowledge distillation for edge deployment."
  },
  {
    name: "EmbedSearch - Semantic Search Engine",
    year: "Sep 2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
    category: "NLP/Embeddings", 
    tech: ["Sentence-BERT", "FAISS", "Elasticsearch", "Python", "FastAPI", "React"],
    description: "High-performance semantic search system using transformer embeddings and vector databases. Processes 10M+ documents with sub-second query response times and 89% user satisfaction rate."
  },
  {
    name: "CloudVision - Distributed Computer Vision Platform",
    year: "Aug 2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
    category: "Cloud AI",
    tech: ["AWS", "Lambda", "SageMaker", "S3", "DynamoDB", "Python"],
    description: "Serverless computer vision platform processing 1M+ images daily. Features automatic scaling, cost optimization, and real-time analytics dashboard with 99.9% uptime."
  },
  {
    name: "AI Portfolio Hub - Modern Showcase",
    year: "Present",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
    category: "Full Stack",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "EmailJS"],
    description: "Responsive portfolio website featuring dark/light themes, smooth animations, and modern UI/UX design. Optimized for performance with lazy loading and accessible components."
  }
];

const ProjectsMain = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    // Filter by category
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some(tech => tech.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  // Reset showAll when filter or search changes
  useMemo(() => {
    setShowAll(false);
  }, [activeFilter, searchQuery]);

  const displayedProjects = useMemo(() => {
    return showAll 
      ? filteredProjects 
      : filteredProjects.slice(0, INITIAL_PROJECTS_COUNT);
  }, [filteredProjects, showAll]);

  const hasMoreProjects = filteredProjects.length > INITIAL_PROJECTS_COUNT;
  const remainingCount = filteredProjects.length - INITIAL_PROJECTS_COUNT;

  return (
    <section id="projects" className={`py-12 md:py-16 relative ${
      theme === 'light' ? 'bg-gradient-to-b from-slate-50/90 to-white/90' : 'bg-dark-bg'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute inset-0 ${
          theme === 'light' ? 'bg-grid-pattern' : 'bg-grid-pattern'
        }`} />
      </div>

      <Container size="lg" className="relative space-y-12">
        {/* Section Header */}
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <ProjectsText />
        </motion.div>

        {/* Filter Component */}
        <motion.div
          variants={fadeIn("top", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectFilter
            projects={filteredProjects}
            onFilterChange={setActiveFilter}
            activeFilter={activeFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6 lg:space-y-8">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <motion.div
                key={`${project.name}-${activeFilter}-${searchQuery}`}
                variants={fadeIn("up", index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SingleProject
                  name={project.name}
                  year={project.year}
                  align={project.align}
                  image={project.image}
                  description={project.description}
                  tech={project.tech}
                  link={project.link}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-center py-20 rounded-2xl border ${
                theme === 'light' 
                  ? 'bg-light-card/50 border-light-border' 
                  : 'bg-dark-card/30 border-dark-border'
              }`}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                  theme === 'light' ? 'bg-primary-100 text-primary-600' : 'bg-primary-900/50 text-primary-400'
                }`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-semibold ${
                  theme === 'light' ? 'text-light-text' : 'text-dark-text'
                }`}>
                  No projects found
                </h3>
                <p className={`${
                  theme === 'light' ? 'text-light-textSecondary' : 'text-dark-textSecondary'
                }`}>
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            </motion.div>
          )}

          {/* Show More/Less Button */}
          {hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mt-12"
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/20'
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-glow hover:shadow-glow-lg'
                }`}
                aria-label={showAll ? 'Show fewer projects' : `Show ${remainingCount} more projects`}
              >
                {showAll ? (
                  <>
                    <FiChevronUp className="w-5 h-5" />
                    Show Less Projects
                  </>
                ) : (
                  <>
                    <FiChevronDown className="w-5 h-5" />
                    Show {remainingCount} More Project{remainingCount !== 1 ? 's' : ''}
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsMain;
