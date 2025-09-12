import { motion } from "framer-motion";

const ContactText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl lg:text-3xl font-bold text-orange mb-6 flex items-center gap-3">
        <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
        Get In Touch
      </h3>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p className="text-lg lg:text-xl">
          Let's connect and create something <span className="text-cyan font-semibold">impactful</span>.
        </p>
        <p className="text-base lg:text-lg">
          Open to full-time roles, collaborations, startup ideas, or even a good tech conversation over coffee ☕
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {["Full-time", "Freelance", "Collaborations", "Startups"].map((tag, index) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-cyan/20 to-orange/20 rounded-full text-sm lg:text-base border border-cyan/30 text-cyan font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactText;
