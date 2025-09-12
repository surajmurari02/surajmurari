import { motion } from "framer-motion";

const SingleInfo = ({ text, Image }) => {
  return (
    <motion.div 
      className="flex gap-4 items-center justify-start group cursor-pointer"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan/20 to-orange/20 group-hover:from-cyan/30 group-hover:to-orange/30 transition-all duration-300">
        <Image className="text-xl text-cyan group-hover:scale-110 transition-transform duration-300" />
      </div>
      <p className="text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
        {text}
      </p>
    </motion.div>
  );
};

export default SingleInfo;
