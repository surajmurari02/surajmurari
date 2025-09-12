import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState("");

  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setSuccess("");
    
    try {
      await emailjs.sendForm("service_pkunaql", "template_oaz6lq9", form.current, {
        publicKey: "vnCbWhvWBivub_VSp",
      });
      
      setEmail("");
      setName("");
      setMessage("");
      setSuccess("🎉 Message sent successfully! I'll get back to you soon.");
      setErrors({});
    } catch (error) {
      console.log("FAILED...", error.text);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    blur: { 
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-cyan/20 border border-green-500/30 rounded-xl text-green-400 text-center"
          >
            {success}
          </motion.div>
        )}
      </AnimatePresence>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* Name Field */}
        <div className="relative">
          <motion.input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className={`w-full h-12 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border ${
              errors.name ? 'border-red-500/50' : focusedField === 'name' ? 'border-cyan/50' : 'border-white/10'
            } px-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/30 transition-all duration-300`}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) {
                setErrors({ ...errors, name: "" });
              }
            }}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField('')}
            variants={inputVariants}
            animate={focusedField === 'name' ? 'focus' : 'blur'}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-sm mt-1 ml-1"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Field */}
        <div className="relative">
          <motion.input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className={`w-full h-12 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border ${
              errors.email ? 'border-red-500/50' : focusedField === 'email' ? 'border-cyan/50' : 'border-white/10'
            } px-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/30 transition-all duration-300`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors({ ...errors, email: "" });
              }
            }}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
            variants={inputVariants}
            animate={focusedField === 'email' ? 'focus' : 'blur'}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-sm mt-1 ml-1"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Field */}
        <div className="relative">
          <motion.textarea
            name="message"
            rows="4"
            placeholder="Your Message..."
            required
            className={`w-full rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border ${
              errors.message ? 'border-red-500/50' : focusedField === 'message' ? 'border-cyan/50' : 'border-white/10'
            } p-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/30 transition-all duration-300 resize-none`}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) {
                setErrors({ ...errors, message: "" });
              }
            }}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField('')}
            variants={inputVariants}
            animate={focusedField === 'message' ? 'focus' : 'blur'}
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-500">
            {message.length}/500
          </div>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-sm mt-1 ml-1"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className={`w-full h-12 rounded-xl font-semibold text-lg transition-all duration-300 ${
            isLoading 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-cyan to-orange hover:from-cyan/80 hover:to-orange/80 hover:shadow-lg hover:shadow-cyan/25'
          }`}
          whileHover={!isLoading ? { scale: 1.02 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            </div>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
          )}
        </motion.button>

        <AnimatePresence>
          {errors.submit && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-red-400 text-sm text-center"
            >
              {errors.submit}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default ContactForm;
