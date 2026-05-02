import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './WhyDigitalize.module.css';

const WhyDigitalize = () => {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>
              The Era Has Already Shifted.<br/>
              <span className="text-gradient">Don't Get Left Behind.</span>
            </h2>
            
            <div className={styles.storyBox}>
              <Quote className={styles.quoteIcon} size={40} />
              <p className={styles.story}>
                In the early 2010s, everyone was switching from keypad phones to smartphones. By 2018, even grandma had one — because everyone wanted to be part of the new era. The same transformation is happening right now for businesses. The age of AI and digitalization is already here. If your business isn't online, you're already behind. This is the perfect moment to enter. And if you don't — you'll understand why you should have.
              </p>
            </div>
            
            <p className={styles.supporting}>
              We offer premium digital services at prices far below the market — because we believe every business, big or small, deserves to be visible online.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.imageBox}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.glowEffect}></div>
            <div className={styles.abstractShape}>
              {/* Abstract decorative element representing digitalization */}
              <div className={styles.circle}></div>
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDigitalize;
