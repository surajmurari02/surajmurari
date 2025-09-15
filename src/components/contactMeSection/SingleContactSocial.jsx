import { motion } from "framer-motion";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <motion.div 
      className="relative group"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan to-orange rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-orange/50 text-orange rounded-lg sm:rounded-xl hover:border-orange/80 hover:text-white hover:shadow-lg hover:shadow-orange/25 transition-all duration-300"
      >
        <Icon className="text-base sm:text-lg" />
      </a>
    </motion.div>
  );
};

export default SingleContactSocial;
