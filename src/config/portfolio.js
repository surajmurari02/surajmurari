// Portfolio Configuration
// Update these values to automatically calculate experience, projects, etc.

export const portfolioConfig = {
  // Experience Calculation
  experience: {
    startDate: "2023-02-14", // Format: YYYY-MM-DD
    // This will automatically calculate years, months from start date to current date
  },
  
  // Stats that will be dynamically calculated or manually updated
  stats: {
    // These will be calculated dynamically based on data below
    totalProjects: null, // Will be calculated from projects array length
    technologiesCount: null, // Will be calculated from technologies array length
    
    // Manual stats (update as needed)
    happyClients: 15,
    coffeeConsumed: 500, // Just for fun!
  },
  
  // Skills System with categories and icons (extracted from resume)
  skills: {
    // Main skills displayed in the skills section
    main: [
      // Core Programming Languages
      {
        name: "Python",
        icon: "SiPython",
        category: "programming",
        level: "expert"
      },
      {
        name: "MySQL",
        icon: "SiMysql",
        category: "database",
        level: "advanced"
      },
      
      // Deep Learning & ML Frameworks
      {
        name: "PyTorch",
        icon: "SiPytorch", 
        category: "ml",
        level: "expert"
      },
      {
        name: "TensorFlow",
        icon: "SiTensorflow",
        category: "ml",
        level: "expert"
      },
      {
        name: "Keras",
        icon: "SiKeras",
        category: "ml",
        level: "expert"
      },
      {
        name: "Scikit-learn",
        icon: "SiScikitlearn",
        category: "ml",
        level: "expert"
      },
      {
        name: "XGBoost",
        icon: "SiXgboost",
        category: "ml",
        level: "advanced"
      },
      
      // Computer Vision & Image Processing
      {
        name: "OpenCV",
        icon: "SiOpencv",
        category: "computer-vision",
        level: "expert"
      },
      {
        name: "Ultralytics",
        icon: "SiUltralytics",
        category: "computer-vision",
        level: "expert"
      },
      {
        name: "MobileNet",
        icon: "SiMobilenet",
        category: "computer-vision",
        level: "expert"
      },
      
      // Hardware Acceleration & Optimization
      {
        name: "CUDA",
        icon: "SiNvidia",
        category: "optimization",
        level: "expert"
      },
      {
        name: "TensorRT",
        icon: "SiNvidia",
        category: "optimization",
        level: "expert"
      },
      {
        name: "DeepStream",
        icon: "SiNvidia",
        category: "optimization",
        level: "expert"
      },
      {
        name: "OpenVINO",
        icon: "SiIntel",
        category: "optimization",
        level: "advanced"
      },
      
      // LLMs & GenAI
      {
        name: "OpenAI",
        icon: "SiOpenai",
        category: "llm",
        level: "expert"
      },
      {
        name: "Hugging Face",
        icon: "SiHuggingface",
        category: "llm",
        level: "expert"
      },
      {
        name: "LangChain",
        icon: "SiLangchain",
        category: "llm",
        level: "advanced"
      },
      {
        name: "Ollama",
        icon: "SiOllama",
        category: "llm",
        level: "advanced"
      },
      
      // DevOps & Deployment
      {
        name: "Docker",
        icon: "SiDocker",
        category: "devops",
        level: "expert"
      },
      {
        name: "Git",
        icon: "SiGit",
        category: "devops",
        level: "expert"
      },
      
      // Web Frameworks & APIs
      {
        name: "FastAPI",
        icon: "SiFastapi",
        category: "backend",
        level: "expert"
      },
      {
        name: "Flask",
        icon: "SiFlask",
        category: "backend",
        level: "advanced"
      },
      {
        name: "Streamlit",
        icon: "SiStreamlit",
        category: "frontend",
        level: "advanced"
      },
      
      // Databases
      {
        name: "MongoDB",
        icon: "SiMongodb",
        category: "database",
        level: "advanced"
      },
      
      // Tools & Other Technologies
      {
        name: "Postman",
        icon: "SiPostman",
        category: "tools",
        level: "advanced"
      },
      {
        name: "VS Code",
        icon: "SiVisualstudiocode",
        category: "tools",
        level: "expert"
      }
    ],
    
    // Skill categories for badges
    categories: [
      {
        name: "Deep Learning",
        color: "primary",
        skills: ["PyTorch", "TensorFlow", "OpenAI"]
      },
      {
        name: "Computer Vision", 
        color: "accent",
        skills: ["OpenCV", "TensorRT", "DeepStream"]
      },
      {
        name: "Edge Computing",
        color: "secondary", 
        skills: ["TensorRT", "OpenVINO", "DeepStream", "CUDA"]
      },
      {
        name: "AI Optimization",
        color: "primary",
        skills: ["TensorRT", "OpenVINO", "CUDA"]
      },
      {
        name: "Full Stack Development",
        color: "accent",
        skills: ["React", "FastAPI", "MongoDB", "Docker"]
      }
    ]
  },
  
  // Legacy technologies list (for backward compatibility)
  technologies: [
    // Programming Languages
    "Python", "JavaScript", "TypeScript", "Java", "C++", "R",
    
    // ML/AI Technologies
    "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLTK", "spaCy",
    
    // Web Technologies
    "React", "Node.js", "Express", "Next.js", "HTML5", "CSS3", "Tailwind CSS",
    
    // Databases
    "MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis",
    
    // Cloud & DevOps
    "AWS", "Google Cloud", "Docker", "Kubernetes", "Git", "CI/CD",
    
    // Data Science
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Apache Spark"
  ],
  
  
  // Projects (add new projects here - total count will be calculated)
  projects: [
    {
      id: 1,
      title: "AI-Powered Recommendation System",
      description: "Machine learning system for personalized recommendations",
      technologies: ["Python", "TensorFlow", "MongoDB", "FastAPI"],
      status: "completed", // completed, ongoing, planned
      year: 2024
    },
    {
      id: 2, 
      title: "Real-time Data Analytics Dashboard",
      description: "Interactive dashboard for business intelligence",
      technologies: ["React", "Python", "PostgreSQL", "Docker"],
      status: "completed",
      year: 2024
    },
    {
      id: 3,
      title: "Computer Vision Security System", 
      description: "AI-based security monitoring system",
      technologies: ["Python", "OpenCV", "PyTorch", "FastAPI"],
      status: "completed",
      year: 2023
    },
    {
      id: 4,
      title: "NLP Sentiment Analysis Tool",
      description: "Advanced sentiment analysis for social media",
      technologies: ["Python", "NLTK", "spaCy", "React"],
      status: "completed", 
      year: 2023
    },
    {
      id: 5,
      title: "E-commerce ML Platform",
      description: "Full-stack ML platform for e-commerce optimization",
      technologies: ["Python", "React", "MongoDB", "AWS"],
      status: "ongoing",
      year: 2024
    }
  ],
  
  // Personal Information
  personal: {
    name: "Suraj Murari",
    role: "Machine Learning Engineer", 
    email: "surajmurari02@gmail.com",
    location: "India",
    bio: "Passionate ML Engineer and Full Stack Developer specializing in AI/ML solutions, computer vision, and modern web technologies."
  },
  
  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/surajmurari",
    github: "https://github.com/surajmurari", 
    twitter: "https://twitter.com/surajmurari",
    email: "mailto:surajmurari02@gmail.com"
  }
};

// Utility function to calculate experience
export const calculateExperience = () => {
  const startDate = new Date(portfolioConfig.experience.startDate);
  const currentDate = new Date();
  
  const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                     (currentDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  return {
    totalMonths,
    years,
    months,
    formatted: years > 0 ? `${years}+ Years` : `${months} Months`,
    detailed: `${years} Years, ${months} Months`
  };
};


// Utility function to get dynamic stats
export const getDynamicStats = () => {
  const experience = calculateExperience();
  const completedProjects = portfolioConfig.projects.filter(p => p.status === 'completed').length;
  const totalProjects = portfolioConfig.projects.length;
  
  return {
    experience: experience.formatted,
    experienceDetailed: experience.detailed,
    totalProjects,
    completedProjects,
    technologiesCount: portfolioConfig.technologies.length,
    happyClients: portfolioConfig.stats.happyClients,
    coffeeConsumed: portfolioConfig.stats.coffeeConsumed
  };
};

export default portfolioConfig;