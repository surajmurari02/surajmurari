import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// Basic security utilities
const sanitizeInput = (input) => {
  if (!input) return '';
  return input
    .replace(/[<>"']/g, '') // Remove basic HTML characters
    .trim();
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 320;
};

const containsSuspiciousContent = (text) => {
  const suspiciousPatterns = [
    /<script/i, 
    /javascript:/i, 
    /\b(select|insert|update|delete)\b.*\b(from|into|where)\b/i,
    /[;&|`$(){}]/g,
    /\b(eval|exec|system)\b/i,
    /(href|src)\s*=\s*["']?(javascript|data):/i
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(text));
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const form = useRef();

  // Rate limiting - check on component mount
  useEffect(() => {
    const lastAttempt = localStorage.getItem('contactFormLastAttempt');
    const attempts = parseInt(localStorage.getItem('contactFormAttempts') || '0');
    
    if (lastAttempt) {
      const timeSince = Date.now() - parseInt(lastAttempt);
      if (timeSince < 15 * 60 * 1000) { // 15 minutes
        setAttemptCount(attempts);
        if (attempts >= 3) {
          setIsBlocked(true);
          setTimeout(() => {
            setIsBlocked(false);
            setAttemptCount(0);
            localStorage.removeItem('contactFormAttempts');
            localStorage.removeItem('contactFormLastAttempt');
          }, 15 * 60 * 1000 - timeSince);
        }
      } else {
        localStorage.removeItem('contactFormAttempts');
        localStorage.removeItem('contactFormLastAttempt');
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    // Sanitize inputs first
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanMessage = sanitizeInput(message);
    
    if (!cleanName) {
      newErrors.name = "Name is required";
    } else if (cleanName.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (cleanName.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    } else if (containsSuspiciousContent(cleanName)) {
      newErrors.name = "Name contains invalid characters";
    }
    
    if (!cleanEmail) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(cleanEmail)) {
      newErrors.email = "Please enter a valid email address";
    } else if (containsSuspiciousContent(cleanEmail)) {
      newErrors.email = "Email contains invalid content";
    }
    
    if (!cleanMessage) {
      newErrors.message = "Message is required";
    } else if (cleanMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (cleanMessage.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    } else if (containsSuspiciousContent(cleanMessage)) {
      newErrors.message = "Message contains prohibited content";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    // Check if blocked by rate limiting
    if (isBlocked) {
      setErrors({ submit: "Too many attempts. Please wait before trying again." });
      return;
    }
    
    // Check honeypot (bot detection)
    if (honeypot) {
      console.warn('Bot detected via honeypot');
      setErrors({ submit: "Please try again." });
      return;
    }
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setSuccess("");
    
    try {
      // Sanitize form data before sending
      const formData = new FormData();
      formData.append('from_name', sanitizeInput(name));
      formData.append('from_email', sanitizeInput(email));
      formData.append('message', sanitizeInput(message));
      
      await emailjs.sendForm("service_pkunaql", "template_oaz6lq9", form.current, {
        publicKey: "vnCbWhvWBivub_VSp",
      });
      
      setEmail("");
      setName("");
      setMessage("");
      setSuccess("🎉 Message sent successfully! I'll get back to you soon.");
      setErrors({});
      
      // Reset rate limiting on successful send
      localStorage.removeItem('contactFormAttempts');
      localStorage.removeItem('contactFormLastAttempt');
      setAttemptCount(0);
    } catch (error) {
      console.log("FAILED...", error.text);
      
      // Update rate limiting on failure
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      localStorage.setItem('contactFormAttempts', newAttemptCount.toString());
      localStorage.setItem('contactFormLastAttempt', Date.now().toString());
      
      if (newAttemptCount >= 3) {
        setIsBlocked(true);
        setErrors({ submit: "Too many failed attempts. Please wait 15 minutes before trying again." });
        setTimeout(() => {
          setIsBlocked(false);
          setAttemptCount(0);
          localStorage.removeItem('contactFormAttempts');
          localStorage.removeItem('contactFormLastAttempt');
        }, 15 * 60 * 1000);
      } else {
        setErrors({ submit: `Failed to send message. Please try again. (${newAttemptCount}/3 attempts)` });
      }
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

      <form ref={form} onSubmit={sendEmail} className="space-y-3 mb-4">
        {/* Honeypot field - hidden from users but visible to bots */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />
        {/* Name Field */}
        <div className="relative">
          <motion.input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className={`w-full h-9 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-800/20 to-gray-700/30 backdrop-blur-sm border ${
              errors.name ? 'border-red-500/50' : focusedField === 'name' ? 'border-cyan/50' : 'border-white/30'
            } px-3 sm:px-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-all duration-300`}
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
            className={`w-full h-9 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-800/20 to-gray-700/30 backdrop-blur-sm border ${
              errors.email ? 'border-red-500/50' : focusedField === 'email' ? 'border-cyan/50' : 'border-white/30'
            } px-3 sm:px-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-all duration-300`}
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
            className={`w-full rounded-lg sm:rounded-xl bg-gradient-to-r from-gray-800/20 to-gray-700/30 backdrop-blur-sm border ${
              errors.message ? 'border-red-500/50' : focusedField === 'message' ? 'border-cyan/50' : 'border-white/30'
            } p-3 sm:p-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-all duration-300 resize-none`}
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
          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 text-xs text-gray-400">
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

        {/* Rate limiting warning */}
        {attemptCount > 0 && !isBlocked && (
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-3 text-yellow-400 text-sm text-center">
            ⚠️ {attemptCount}/3 attempts used. Please be careful with submissions.
          </div>
        )}

        {/* Blocked warning */}
        {isBlocked && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm text-center">
            🛑 Too many attempts. Please wait 15 minutes before trying again.
          </div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading || isBlocked}
          className={`w-full h-9 sm:h-10 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
            isLoading || isBlocked
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-cyan to-orange hover:from-cyan/80 hover:to-orange/80 hover:shadow-lg hover:shadow-cyan/25'
          }`}
          whileHover={!isLoading && !isBlocked ? { scale: 1.02 } : {}}
          whileTap={!isLoading && !isBlocked ? { scale: 0.98 } : {}}
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