import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Ammamma Inti Vantalu",
      domain: "Food & Home Business",
      desc: "Home food business. Custom UI frontend tailored to their shop theme, connected to a Shopify backend. Full end-to-end e-commerce store.",
      color: "#FF6A1A"
    },
    {
      title: "Solar Credit",
      domain: "Clean Energy / Tech",
      desc: "Solar energy project. Built a peer-to-peer energy trading platform with real-time data updates and fully responsive design.",
      color: "#3B82F6"
    },
    {
      title: "Vijetha Hospital",
      domain: "Healthcare",
      desc: "Hospital website with custom theme, patient reviews, responsive modern layout, and an appointment booking form linked to Google Sheets.",
      color: "#10B981"
    },
    {
      title: "Personal Portfolio",
      domain: "Personal Brand",
      desc: "A clean, professional personal portfolio for an individual showcasing their proof of work and services.",
      color: "#8B5CF6"
    }
  ];

  const dreamClients = [
    "Healthcare", "Hotels", "Restaurants", "Education", "E-Commerce"
  ];

  return (
    <section id="portfolio" className={`section-padding ${styles.portfolioSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We've <span className="text-gradient">Built</span>
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.cardVisual} style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)` }}>
                <div className={styles.visualPlaceholder}>
                  <div className={styles.browserBar}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div>
                  <div className={styles.browserContent}>
                    <span>Preview</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.domain}>{project.domain}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <button className={styles.viewBtn}>
                  View Case Study <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.dreamClients}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={styles.dreamTitle}>Ready to build for:</h3>
          <div className={styles.tags}>
            {dreamClients.map((client, idx) => (
              <span key={idx} className={styles.tag}>{client}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
