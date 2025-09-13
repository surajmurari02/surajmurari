import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center group"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 -z-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan/40 to-orange/40 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main image container with modern effects */}
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan/20 via-orange/20 to-cyan/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <img
          src="/images/HexaPic_suraj.png"
          alt="Suraj Murari"
          className="relative max-h-[450px] w-auto drop-shadow-2xl transition-all duration-300 group-hover:drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        />
      </motion.div>

      {/* Enhanced background hexagon */}
      <motion.div 
        className="absolute -z-10 flex justify-center items-center"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <PiHexagonThin className="h-[500px] lg:h-[600px] w-auto text-cyan/30 blur-sm" />
      </motion.div>

      {/* Secondary rotating element */}
      <motion.div 
        className="absolute -z-10 flex justify-center items-center"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <PiHexagonThin className="h-[350px] lg:h-[400px] w-auto text-orange/20 blur-md" />
      </motion.div>

      {/* Orbiting accent */}
      <motion.div
        className="absolute w-3 h-3 bg-gradient-to-r from-cyan to-orange rounded-full"
        style={{
          transformOrigin: `150px 0px`,
          left: '50%',
          top: '50%'
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Modern decorative elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-1 h-12 bg-gradient-to-b from-cyan/50 to-transparent rounded-full"
        animate={{
          height: [48, 60, 48],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-1 h-8 bg-gradient-to-t from-orange/50 to-transparent rounded-full"
        animate={{
          height: [32, 48, 32],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
};

export default HeroPic;
