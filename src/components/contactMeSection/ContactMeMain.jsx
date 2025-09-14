import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.div
      id="contact"
      className="max-w-[1400px] mx-auto pt-8 md:pt-12 pb-12 md:pb-16 px-4 relative min-h-screen flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-orange/5 rounded-3xl blur-3xl -z-10"></div>
      
      {/* Modern Section Header */}
      <div className="flex flex-col items-center mb-6 lg:mb-8">
        {/* Main Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center ${
            theme === 'light' 
              ? 'text-gray-900' 
              : 'text-white'
          }`}
        >
          Let's <span className="text-cyan">Connect</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-base md:text-lg text-center max-w-4xl leading-relaxed ${
            theme === 'light' 
              ? 'text-gray-600' 
              : 'text-gray-300'
          }`}
        >
          Ready to transform your{' '}
          <span className="font-semibold text-orange">innovative ideas</span>{' '}
          into reality? Let's discuss how we can{' '}
          <span className="font-semibold text-cyan">collaborate</span>{' '}
          to build something amazing together.
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center mt-3 space-x-4"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
          <div className="w-2 h-2 rounded-full bg-cyan" />
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
        </motion.div>
      </div>

      {/* Main content with modern glass morphism effect */}
      <motion.div 
        className="relative backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/10 rounded-3xl p-6 lg:p-8 pb-8 lg:pb-12 shadow-2xl flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <ContactMeLeft />
          <ContactMeRight />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMeMain;
