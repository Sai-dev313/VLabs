import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './StatsBar.module.css';

const StatCounter = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;
      
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, 50); // Adjust duration based on max value or just fixed interval
      
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <div className={styles.statItem} ref={ref}>
      <h3 className={styles.statValue}>
        {count}{suffix}
      </h3>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
};

const StatsBar = () => {
  const stats = [
    { value: "10", suffix: "+", label: "Projects Completed" },
    { value: "3", suffix: "+", label: "Happy Clients" },
    { value: "5", suffix: "", label: "Team Members" },
    { value: "7", suffix: " Days", label: "Average Delivery" },
    { value: "7", suffix: "+", label: "Industries Served" },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <motion.div 
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, idx) => (
            <StatCounter key={idx} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
