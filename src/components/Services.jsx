import React from 'react';
import { motion } from 'framer-motion';
import { Video, Globe, ShoppingBag, LayoutDashboard, User, Cpu, LineChart, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: "AI-Generated Video Ads",
      desc: "For brands and small businesses who can't afford a production crew but want aggressive, engaging ads for Instagram.",
      price: "₹999 – ₹1,999",
      icon: <Video size={32} />
    },
    {
      title: "Business / CTA Websites",
      desc: "We design and develop fully customized websites end-to-end in a week, tailored to your exact business requirement.",
      price: "₹7,999",
      icon: <Globe size={32} />
    },
    {
      title: "E-Commerce Store",
      desc: "We build complete Shopify stores with a custom UI — for businesses ready to shift from WhatsApp orders to a professional online store.",
      price: "₹24,999",
      icon: <ShoppingBag size={32} />
    },
    {
      title: "Restaurant / Business Management Software",
      desc: "End-to-end business management software — drag-and-drop interface, modern design, easy to understand and use.",
      price: "₹18,999",
      icon: <LayoutDashboard size={32} />
    },
    {
      title: "Portfolio Sites",
      desc: "A polished personal portfolio website for individuals running end-to-end services in their domain — your proof of work, online.",
      price: "₹7,999",
      icon: <User size={32} />
    },
    {
      title: "Digital Solutions",
      desc: "We build various tailored digital solutions — from custom CRMs to AI-powered automation — designed around your exact needs.",
      price: "₹14,999",
      icon: <Cpu size={32} />
    },
    {
      title: "Website Rebuild + SEO",
      desc: "We rebuild and rebrand your existing website with custom SEO to make it visible, modern, and performing again.",
      price: "₹8,999",
      icon: <LineChart size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className={`section-padding ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Name Your Problem.<br/>
            <span className="text-gradient">We'll Build the Solution.</span>
          </motion.h2>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className={styles.card}>
              <div className={styles.iconBox}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>Starting: {service.price}</span>
                <button className={styles.arrowBtn} aria-label="Learn more">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
