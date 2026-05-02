import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Why should we choose you over agencies with professional proof?",
      a: "We may be new, but we bring 5 sharp minds, industry-ready skills, and hunger that established agencies have lost. You get premium work, faster turnaround, and a team that actually cares about your business — not just the invoice."
    },
    {
      q: "Why are your prices so affordable compared to other agencies?",
      a: "Because we're not here to make money off small businesses — we're here to grow with them. Our goal is to make digitalization accessible to every business that deserves to be online."
    },
    {
      q: "How are you different from others offering the same at low prices?",
      a: "We don't cut corners. Every project is custom-designed for the client's industry, customer base, and goals. We don't resell templates. We build."
    },
    {
      q: "What is your motive?",
      a: "To digitalize every single business that wants to grow — and to prove that going digital doesn't have to be expensive, complicated, or out of reach."
    },
    {
      q: "Do you provide maintenance after the project is handed over?",
      a: "Yes — we support you after handover. We're not a one-and-done agency. We're your digital partners."
    },
    {
      q: "How much does it cost?",
      a: "Pricing starts at ₹999 for AI ads and ₹7,999 for websites. Everything is custom-quoted based on your exact needs — no hidden fees, no surprises."
    },
    {
      q: "What details do I need to share with you?",
      a: "Just tell us what your business does, who your customers are, and what you want the website to do. We'll handle the rest and guide you step by step."
    },
    {
      q: "What information needs to go on the website?",
      a: "We'll help you figure it out. Typically: your services, pricing, contact details, and business background. We send you a simple checklist so nothing gets missed."
    },
    {
      q: "Is it available in regional languages?",
      a: "Yes. We can build in Telugu, Hindi, Marathi, Kannada, and more. Our team itself is multilingual — we get it."
    },
    {
      q: "Is it really affordable?",
      a: "Yes. Our prices are designed for Indian small businesses. You get custom, professional work — not a DIY template — at a fraction of typical agency rates."
    },
    {
      q: "What do you actually build?",
      a: "Websites, e-commerce stores, business management software, AI video ads, digital solutions, portfolio sites, and more — across any industry."
    },
    {
      q: "How long does it take?",
      a: "Websites are delivered in exactly one week. Other projects (software, e-commerce, custom tools) have timelines we discuss upfront — always before we start."
    },
    {
      q: "What if I don't have images or content ready?",
      a: "No problem. We can start with placeholders and stock assets. We'll guide you on what you need and when — you can update anytime once you're ready."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section-padding ${styles.faqSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(index)}
              >
                <span className={styles.question}>{faq.q}</span>
                <ChevronDown 
                  className={`${styles.icon} ${activeIndex === index ? styles.iconOpen : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className={styles.accordionContent}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.answer}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
