import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import Container from "../common/Container";

const HeroMain = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-primary-50/80 via-transparent to-accent-50/60' 
            : 'bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/10'
        }`} />
      </div>

      <Container size="lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[350px]"
        >
          {/* Hero Text Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <HeroText />
          </div>

          {/* Hero Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroPic />
          </div>
        </motion.div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-4 w-2 h-32 bg-gradient-to-b from-primary-500 to-transparent opacity-60 rounded-full" />
      <div className="absolute bottom-20 right-4 w-2 h-24 bg-gradient-to-t from-accent-500 to-transparent opacity-60 rounded-full" />
    </section>
  );
};

export default HeroMain;
