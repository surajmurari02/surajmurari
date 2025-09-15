import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <motion.div 
      className="flex flex-col gap-4 sm:gap-8 w-full"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <ContactText />
      <ContactForm />
    </motion.div>
  );
};

export default ContactMeLeft;
