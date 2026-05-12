import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './InquiryPage.module.css';

// TODO: Replace this with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyoWZ4XpRnimxM2sOftlqfFrQ4P4lnixMrL1vdSm6MJ08fjKY7yoWKRvJ8eVC3ccMc/exec';

const servicesOptions = [
  'Website Development',
  'AI Solutions',
  'Branding',
  'Social Media Management',
  'SEO',
  'Video Editing',
  'Automation',
  'Graphic Design',
  'Other'
];

const InquiryPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    business: '',
    services: [],
    requirements: '',
    countryCode: '+91',
    phoneNumber: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleService = (service) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    if (GOOGLE_SCRIPT_URL === 'YOUR_WEB_APP_URL_HERE') {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'error',
        text: 'Configuration error: Google Script URL is not set. Please add it to the code.'
      });
      return;
    }

    try {
      // Send data to Google Apps Script
      // mode: 'no-cors' is required to post to Google Apps Script from a browser without CORS setup
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Because 'no-cors' returns an opaque response, we assume success if no network error occurred
      setSubmitMessage({
        type: 'success',
        text: "Thank you! Your inquiry has been submitted successfully. We'll be in touch soon."
      });

      // Reset form
      setFormData({
        fullName: '',
        business: '',
        services: [],
        requirements: '',
        countryCode: '+91',
        phoneNumber: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={16} className={styles.badgeIcon} />
            <span>Inquiry form</span>
          </div>
          <h1 className={styles.title}>Tell us about your<br />project</h1>
        </div>

        {submitMessage && (
          <div className={`${styles.messageBox} ${submitMessage.type === 'success' ? styles.successMessage : styles.errorMessage}`}>
            {submitMessage.type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
            <p>{submitMessage.text}</p>
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={styles.input}
              placeholder="Jane Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Business / Brand */}
          <div className={styles.formGroup}>
            <label htmlFor="business" className={styles.label}>Business / Brand</label>
            <input
              type="text"
              id="business"
              name="business"
              className={styles.input}
              placeholder="Acme Co."
              value={formData.business}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>

          {/* Services Interested In */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Services Interested In</label>
            <div className={styles.pillsContainer}>
              {servicesOptions.map(service => (
                <button
                  key={service}
                  type="button"
                  className={`${styles.pill} ${formData.services.includes(service) ? styles.pillActive : ''}`}
                  onClick={() => toggleService(service)}
                  disabled={isSubmitting}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className={styles.formGroup}>
            <label htmlFor="requirements" className={styles.label}>Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              className={styles.textarea}
              placeholder="Tell us what you're planning to build..."
              value={formData.requirements}
              onChange={handleInputChange}
              rows={4}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Contact Number */}
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>Contact Number</label>
            <div className={styles.phoneInputContainer}>
              <select
                name="countryCode"
                className={styles.countrySelect}
                value={formData.countryCode}
                onChange={handleInputChange}
                disabled={isSubmitting}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+971">+971</option>
                <option value="+61">+61</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={styles.phoneInput}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryPage;
