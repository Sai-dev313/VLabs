import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const services = [
    "AI-Generated Video Ads", "Business Websites", "E-Commerce Stores",
    "Restaurant Software", "Portfolio Sites", "Digital Solutions", "SEO & Rebuild"
  ];

  // Duplicate for infinite scrolling effect
  const tickerItems = [...services, ...services, ...services];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className={styles.subhead}>
            Meekosam Memu Unnam — <span className="text-gradient">We're There For You</span>
          </motion.h2>
          
          <motion.h1 variants={itemVariants} className={styles.headline}>
            We build your digital future.
          </motion.h1>
          
          <motion.p variants={itemVariants} className={styles.description}>
            We help your business launch digitally and gain visibility online for your targeted customers.
          </motion.p>
          
          <motion.div variants={itemVariants} className={styles.ctaGroup}>
            <Link to="contact" smooth={true} duration={800} className="btn btn-primary">
              Let's Go Digital <ArrowRight size={18} style={{marginLeft: '8px'}} />
            </Link>
            <Link to="portfolio" smooth={true} duration={800} className={`btn btn-secondary ${styles.secBtn}`}>
              Maa Pani Chudandi, Mee Pani Chepinchukondi
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.tickerWrapper}>
        <motion.div 
          className={styles.ticker}
          animate={{ x: [0, -1920] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {tickerItems.map((item, index) => (
            <div key={index} className={styles.tickerItem}>
              {item} <span className={styles.dot}>•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
