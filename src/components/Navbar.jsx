import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import logo1 from '../assets/ChatGPT_Image_Apr_21__2026__02_43_32_PM-removebg-preview.png';
import logo2 from '../assets/ChatGPT_Image_Apr_21__2026__09_37_50_PM-removebg-preview.png';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'FAQ', to: 'faq' }
  ];

  const handleNavClick = (to) => {
    setIsMenuOpen(false);
    if (!isHomePage) {
      navigate('/');
      // Timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          {isHomePage ? (
            <ScrollLink to="hero" smooth={true} duration={500} style={{ cursor: 'pointer' }} className={styles.logoLink}>
              <img src={logo1} alt="V Labs Brave Logo" className={`logo-dark ${styles.logoImg}`} />
              <img src={logo2} alt="V Labs Brave Logo" className={`logo-light ${styles.logoImg}`} />
            </ScrollLink>
          ) : (
            <RouterLink to="/" className={styles.logoLink}>
              <img src={logo1} alt="V Labs Brave Logo" className={`logo-dark ${styles.logoImg}`} />
              <img src={logo2} alt="V Labs Brave Logo" className={`logo-light ${styles.logoImg}`} />
            </RouterLink>
          )}
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                {isHomePage ? (
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className={styles.navLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <button
                    className={styles.navLink}
                    onClick={() => handleNavClick(link.to)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
          
          <div className={styles.actions}>
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <RouterLink to="/inquiry" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              Start Project
            </RouterLink>
          </div>
        </nav>

        <button className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
