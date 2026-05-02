import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const prices = [
    { service: "AI Video Ads", price: "₹999" },
    { service: "Portfolio Sites", price: "₹7,999" },
    { service: "Websites", price: "₹7,999" },
    { service: "Website Rebuild + SEO", price: "₹8,999" },
    { service: "Digital Solutions", price: "₹14,999" },
    { service: "Restaurant / Business Software", price: "₹18,999" },
    { service: "E-Commerce Store", price: "₹24,999" }
  ];

  return (
    <section id="pricing" className={`section-padding ${styles.pricingSection}`}>
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
              Every Solution is <br/>
              <span className="text-gradient">Custom-Built for You</span>
            </h2>
            <p className={styles.subtitle}>
              No fixed packages. Pricing is a custom quotation based on your specific requirements and what V Labs can deliver as the perfect solution.
            </p>
            
            <a 
              href="https://wa.me/919550048902?text=Hi%20V%20Labs%20Brave!%20I'm%20interested%20in%20getting%20a%20custom%20quote." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn btn-primary ${styles.ctaBtn}`}
            >
              Get a Custom Quote
            </a>
          </motion.div>

          <motion.div 
            className={styles.priceList}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.listHeader}>
              <h3>Starting From</h3>
              <p>Reference points for our services</p>
            </div>
            <ul className={styles.list}>
              {prices.map((item, idx) => (
                <li key={idx} className={styles.listItem}>
                  <div className={styles.serviceName}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{item.service}</span>
                  </div>
                  <span className={styles.priceValue}>{item.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
