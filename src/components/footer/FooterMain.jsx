import { Link } from "react-scroll";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const FooterMain = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <footer className={`py-16 mt-20 border-t transition-colors duration-500 ${
      theme === 'light' 
        ? 'bg-light-surface/80 border-light-border' 
        : 'bg-dark-surface/50 border-dark-border'
    }`}>
      <Container size="lg">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className={`text-3xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent`}>
              Suraj Murari
            </h3>
            <p className={`text-sm leading-relaxed ${
              theme === 'light' ? 'text-light-textSecondary' : 'text-dark-textSecondary'
            }`}>
              Passionate ML Engineer & Full Stack Developer crafting innovative solutions with cutting-edge technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className={`text-lg font-semibold ${
              theme === 'light' ? 'text-light-text' : 'text-dark-text'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-120}
                    to={item.section}
                    className={`text-sm transition-colors duration-300 cursor-pointer hover:text-primary-500 ${
                      theme === 'light' ? 'text-light-textSecondary' : 'text-dark-textSecondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-2 lg:col-span-1"
          >
            <h4 className={`text-lg font-semibold ${
              theme === 'light' ? 'text-light-text' : 'text-dark-text'
            }`}>
              Get In Touch
            </h4>
            <div className="space-y-2 text-sm">
              <p className={`${
                theme === 'light' ? 'text-light-textSecondary' : 'text-dark-textSecondary'
              }`}>
                Ready to bring your ideas to life? Let's collaborate and create something amazing together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`w-full h-px mb-8 ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-transparent via-light-border to-transparent' 
            : 'bg-gradient-to-r from-transparent via-dark-border to-transparent'
        }`} />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className={`text-sm ${
            theme === 'light' ? 'text-light-textMuted' : 'text-dark-textMuted'
          }`}>
            © 2025 Suraj Murari. All rights reserved.
          </p>
          
          <div className={`text-sm flex items-center gap-2 ${
            theme === 'light' ? 'text-light-textMuted' : 'text-dark-textMuted'
          }`}>
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default FooterMain;
