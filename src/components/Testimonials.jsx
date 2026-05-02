import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul M.",
      role: "Restaurant Owner",
      text: "V Labs transformed how we handle orders. The custom management software they built saved us hours every week. Truly a game changer for our cafe.",
      rating: 5
    },
    {
      name: "Sneha P.",
      role: "Freelance Designer",
      text: "I needed a portfolio site that matched my aesthetic but didn't have the time to code it. They delivered exactly what I envisioned in just under a week.",
      rating: 5
    },
    {
      name: "Karthik Reddy",
      role: "Retail Shop Owner",
      text: "We were skeptical about moving our wholesale business online. The team explained everything, built a great Shopify store, and our sales grew by 40%.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className={`section-padding ${styles.testimonialsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client <span className="text-gradient">Stories</span>
          </motion.h2>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testi, idx) => (
            <motion.div key={idx} variants={itemVariants} className={styles.card}>
              <Quote className={styles.quoteIcon} size={32} />
              <div className={styles.stars}>
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={18} className={styles.starIcon} fill="currentColor" />
                ))}
              </div>
              <p className={styles.text}>"{testi.text}"</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.authorName}>{testi.name}</h4>
                  <p className={styles.authorRole}>{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
