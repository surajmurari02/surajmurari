import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className={`lg:text-2xl sm:text-xl uppercase font-semibold ${
          theme === 'light' ? 'text-slate-600' : 'text-lightGrey'
        }`}
      >
        Machine Learning Engineer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        animate="show"
        className={`md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase ${
          theme === 'light' ? 'text-orange' : 'text-orange'
        }`}
      >
        Suraj <br className="sm:hidden md:block" />
        Murari
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className={`text-lg mt-4 leading-relaxed ${
          theme === 'light' ? 'text-slate-700' : 'text-gray-300'
        }`}
      >
        Engineer on a Mission to Transform Ideas <br /> into Intelligent Systems.
      </motion.p>
    </div>
  );
};

export default HeroText;
