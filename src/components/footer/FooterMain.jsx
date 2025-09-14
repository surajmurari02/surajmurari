import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

const FooterMain = () => {
  const theme = useSelector((state) => state.theme.mode);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/surajmurari02", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/suraj-murari/", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:surajmurari02@gmail.com", label: "Email" },
  ];


  return (
    <footer className="relative mt-8 overflow-hidden">
      {/* Modern background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-orange/5"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <Container size="lg">
        <div className="relative py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand Section - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-4">
                {isHomePage ? (
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-130}
                    className="cursor-pointer inline-block"
                  >
                    <motion.h3 
                      className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-orange to-cyan bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Suraj Murari
                    </motion.h3>
                  </Link>
                ) : (
                  <a
                    href="/"
                    className="cursor-pointer inline-block"
                  >
                    <motion.h3 
                      className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-orange to-cyan bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Suraj Murari
                    </motion.h3>
                  </a>
                )}
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-cyan to-orange rounded-full"
                />
              </div>
              
              <p className="text-lg leading-relaxed text-gray-300 max-w-md">
                Passionate <span className="text-cyan font-semibold">ML Engineer</span> & <span className="text-orange font-semibold">Full Stack Developer</span> crafting innovative solutions with cutting-edge technologies.
              </p>

              {/* Social Links with modern design */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:border-cyan/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan rounded-full animate-pulse"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {isHomePage ? (
                      <Link
                        spy={true}
                        smooth={true}
                        duration={800}
                        offset={-120}
                        to={item.section}
                        className="text-gray-400 hover:text-cyan transition-all duration-300 cursor-pointer group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                      </Link>
                    ) : (
                      <a
                        href={`/#${item.section}`}
                        className="text-gray-400 hover:text-cyan transition-all duration-300 cursor-pointer group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
                Get In Touch
              </h4>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Ready to bring your ideas to life? Let's collaborate and create something <span className="text-orange font-semibold">amazing</span> together.
                </p>
                
                {/* Quick contact info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <FiMapPin size={16} className="text-cyan" />
                    <span className="text-sm">Noida, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <FiMail size={16} className="text-orange" />
                    <span className="text-sm">surajmurari02@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-cyan/30 via-orange/30 to-transparent mb-8"
          />

          {/* Copyright Section - Modernized */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-gray-400 text-sm mb-2">
              © 2025 <span className="text-white font-medium">Suraj Murari</span>. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Built with</span>
              <motion.span 
                className="text-red-500"
                style={{ color: '#ef4444' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ♥
              </motion.span>
              <span>by</span>
              <span className="text-cyan font-medium">Suraj Murari</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-cyan/10 to-orange/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-orange/10 to-cyan/10 rounded-full blur-xl"></div>
      </Container>
    </footer>
  );
};

export default FooterMain;
