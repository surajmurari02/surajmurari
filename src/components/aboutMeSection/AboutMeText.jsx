import { Link } from "react-scroll";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMail } from "react-icons/fi";

const AboutMeText = () => {
  const theme = useSelector((state) => state.theme.mode);

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "25+", label: "Projects Completed" },
    { number: "10+", label: "Technologies Mastered" },
  ];

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center space-y-8">
      {/* Intro & Title */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-white to-dark-text bg-clip-text text-transparent'
          }`}>
            Hi, I'm Suraj Murari
          </h3>
          <p className={`text-lg font-medium ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent'
          }`}>
            Machine Learning Engineer & AI Solutions Architect
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`text-base leading-relaxed ${
            theme === 'light' ? 'text-slate-600' : 'text-dark-text/90'
          }`}
        >
          Passionate about building <span className={`font-semibold ${
            theme === 'light' ? 'text-blue-600' : 'text-primary-400'
          }`}>real-world AI solutions</span> that make a difference. I specialize in deep learning, computer vision, and hardware-accelerated inference using cutting-edge tools like PyTorch, OpenCV, TensorRT, and OpenVINO.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className={`text-base leading-relaxed ${
            theme === 'light' ? 'text-slate-600' : 'text-dark-text/90'
          }`}
        >
          I work on <span className={`font-semibold ${
            theme === 'light' ? 'text-purple-600' : 'text-accent-400'
          }`}>scalable ML pipelines</span>, LLM integration, and edge deployments, always focusing on delivering impactful, production-ready solutions.
        </motion.p>
      </div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-6 w-full max-w-sm"
      >
        {stats.map((stat, index) => (
          <div key={index} className={`text-center p-3 rounded-xl ${
            theme === 'light' ? 'bg-white/60 backdrop-blur-sm' : 'bg-dark-card/40 backdrop-blur-sm'
          }`}>
            <div className={`text-2xl font-bold ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent'
            }`}>
              {stat.number}
            </div>
            <div className={`text-xs font-medium ${
              theme === 'light' ? 'text-slate-600' : 'text-dark-text/80'
            }`}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modern CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
      >
        {/* Primary CTA - Projects */}
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
              : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 shadow-lg hover:shadow-primary-500/25'
          } hover:scale-105 active:scale-95`}
        >
          <span>View Projects</span>
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

        {/* Secondary CTA - Contact */}
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="contact"
          className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border-2 backdrop-blur-sm ${
            theme === 'light' 
              ? 'border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300'
              : 'border-primary-400/50 text-primary-300 hover:bg-primary-500/10 hover:border-primary-400'
          } hover:scale-105 active:scale-95`}
        >
          <FiMail className="w-4 h-4" />
          <span>Get In Touch</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutMeText;
