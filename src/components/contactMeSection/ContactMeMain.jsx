import { motion } from "framer-motion";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <motion.div
      id="contact"
      className="max-w-[1400px] mx-auto mt-[100px] px-4 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-orange/5 rounded-3xl blur-3xl -z-10"></div>
      
      {/* Header with modern styling */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-cyan via-orange to-cyan bg-clip-text text-transparent mb-4">
          Let's Connect
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss how we can work together.
        </p>
      </motion.div>

      {/* Main content with modern glass morphism effect */}
      <motion.div 
        className="relative backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactMeLeft />
          <ContactMeRight />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMeMain;
