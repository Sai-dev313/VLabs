import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const team = [
    {
      name: "Vineeth",
      role: "Client Relations & Strategy",
      desc: "People skills — convincing, empathy, multilingual (Telugu, Hindi, English), client relations across Telangana & Kolhapur."
    },
    {
      name: "Vishal",
      role: "Client Relations",
      desc: "People skills — inter-language communication, building trust and client relations."
    },
    {
      name: "Vedangi",
      role: "Ideation & Networking",
      desc: "Networks & local influence in Kolhapur, ideation, brainstorming, non-technical visionary."
    },
    {
      name: "Shruthika",
      role: "Technical Problem-Solver",
      desc: "Local influence in Kolhapur & Sangli, Marathi-speaking network, hands-on technical problem-solver."
    },
    {
      name: "Sainath",
      role: "Product Development",
      desc: "End-to-end process support, product development, breaks business problems into steps, proposes the right solution."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
    <section id="about" className={`section-padding ${styles.about}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About <span className="text-gradient">V Labs</span></h2>
          <p className={styles.intro}>
            V Labs is five people gaining industry-ready skills in the tech domain — united by one goal: to help businesses digitalize with premium work at prices small businesses can actually afford. We serve any industry, any domain. Name your problem and we'll give you a ground-breaking, satisfactory solution — affordably.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member, idx) => (
            <motion.div key={idx} variants={itemVariants} className={styles.card}>
              <div className={styles.cardInner}>
                <h3 className={styles.name}>{member.name}</h3>
                <h4 className={styles.role}>{member.role}</h4>
                <p className={styles.desc}>{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p><strong>Key Message:</strong> Different perspectives when brainstorming = perfect solutions. Together, we cover every angle.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
