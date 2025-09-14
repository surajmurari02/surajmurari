import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center gap-4 lg:gap-6"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Modern illustration with floating animation */}
      <motion.div 
        className="relative"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 1, -1, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-orange/20 rounded-full blur-2xl"></div>
        <img
          src="/images/email-image.png"
          alt="Contact illustration"
          className="relative max-w-[200px] lg:max-w-[250px] drop-shadow-2xl"
        />
      </motion.div>

      {/* Contact info with staggered animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactInfo />
      </motion.div>

      {/* Social links with staggered animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <ContactSocial />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange/10 to-transparent rounded-full blur-2xl"></div>
    </motion.div>
  );
};

export default ContactMeRight;
