import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Camera, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <motion.div 
          className={styles.wrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>
              Let's Start Building Your <span className="text-gradient">Digital Future</span>
            </h2>
            <p className={styles.subtitle}>
              Ready to take your business to the next level? Reach out to us today. We're available 24/7 to answer your questions and start planning your perfect solution.
            </p>
            
            <a 
              href="https://wa.me/919550048902?text=Hi%20V%20Labs%20Brave!%20I'm%20interested%20in%20going%20digital." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn btn-primary ${styles.ctaBtn}`}
            >
              Reach Out to Us!
            </a>
          </div>

          <div className={styles.contactInfo}>
            <a href="tel:+919550048902" className={styles.infoCard}>
              <div className={styles.iconBox}><Phone size={24} /></div>
              <div className={styles.infoText}>
                <h4>Direct Call (24/7)</h4>
                <p>+91 95500 48902</p>
              </div>
            </a>
            
            <a href="mailto:v.labs.brave@gmail.com" className={styles.infoCard}>
              <div className={styles.iconBox}><Mail size={24} /></div>
              <div className={styles.infoText}>
                <h4>Email Us</h4>
                <p>v.labs.brave@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.instagram.com/v.labs.brave/" target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
              <div className={styles.iconBox}><Camera size={24} /></div>
              <div className={styles.infoText}>
                <h4>Instagram</h4>
                <p>@v.labs.brave</p>
              </div>
            </a>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}><MapPin size={24} /></div>
              <div className={styles.infoText}>
                <h4>Location</h4>
                <p>Kolhapur, Maharashtra & Telangana</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
