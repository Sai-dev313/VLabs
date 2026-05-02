import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFloat.module.css';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/919550048902?text=Hi%20V%20Labs%20Brave!%20I'm%20interested%20in%20going%20digital."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>Chat with us!</span>
    </motion.a>
  );
};

export default WhatsAppFloat;
