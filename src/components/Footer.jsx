import React from 'react';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';
import logo1 from '../assets/ChatGPT_Image_Apr_21__2026__02_43_32_PM-removebg-preview.png';
import logo2 from '../assets/ChatGPT_Image_Apr_21__2026__09_37_50_PM-removebg-preview.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <Link to="hero" smooth={true} duration={500} style={{ cursor: 'pointer' }} className={styles.logoLink}>
              <img src={logo1} alt="V Labs Brave Logo" className={`logo-dark ${styles.logoImg}`} />
              <img src={logo2} alt="V Labs Brave Logo" className={`logo-light ${styles.logoImg}`} />
            </Link>
            <p className={styles.tagline}>We provide digital transformation to your business to make it visible for everyone.</p>
          </div>
          
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
              <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
              <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
              <li><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
              <li><Link to="faq" smooth={true} duration={500}>FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} V Labs Brave. All rights reserved.</p>
          <div className={styles.legal}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
