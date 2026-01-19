import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Supply Chain Management',
    'Warehousing Solutions',
    'Transportation',
    'Customs Clearance',
    'Last Mile Delivery',
    'Logistics Consulting',
    'Cold Chain Logistics',
    'Other'
  ];

  const contactInfo = [
    {
      icon: '📍',
      title: 'Dubai Headquarters',
      details: [
        'LogiFlow Logistics FZCO',
        'Dubai Silicon Oasis',
        'DSO-IFZA, Dubai, UAE',
        'PO Box: 500001'
      ]
    },
    {
      icon: '📞',
      title: 'Contact Numbers',
      details: [
        'General Inquiries: +971 4 123 4567',
        'Sales: +971 4 123 4568',
        'Support: +971 4 123 4569',
        'Emergency: +971 50 123 4567'
      ]
    },
    {
      icon: '✉️',
      title: 'Email Addresses',
      details: [
        'General: info@logiflow.ae',
        'Sales: sales@logiflow.ae',
        'Support: support@logiflow.ae',
        'Careers: careers@logiflow.ae'
      ]
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: [
        'Sunday - Thursday: 8:00 AM - 6:00 PM',
        'Friday: 9:00 AM - 1:00 PM',
        'Saturday: Closed',
        'Emergency: 24/7 Available'
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      service: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const dubaiLocation = {
    lat: 25.2048,
    lng: 55.2708,
    address: 'Dubai Silicon Oasis, DSO-IFZA, Dubai, UAE'
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.dubaiSkyline}></div>
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeIcon}>📍</span>
                Dubai Headquarters
              </div>
            </FadeIn>
            
            <SlideIn delay={0.3}>
              <h1 className={styles.heroTitle}>
                Connect with Our <span className={styles.gradientText}>Dubai Team</span>
              </h1>
            </SlideIn>
            
            <FadeIn delay={0.4}>
              <p className={styles.heroSubtitle}>
                Get in touch with our logistics experts in Dubai. We're here to help 
                streamline your supply chain operations across the Middle East and beyond.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>2h</div>
                  <div className={styles.statLabel}>Response Time</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Languages</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={styles.contactGridSection}>
        <div className={styles.container}>
          <div className={styles.contactLayout}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <FadeIn>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>
                    Send us a <span className={styles.highlight}>Message</span>
                  </h2>
                  <p className={styles.formSubtitle}>
                    Fill out the form below and our team will get back to you within 2 hours
                  </p>
                </div>
              </FadeIn>

              {submitSuccess && (
                <motion.div 
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className={styles.successIcon}>✅</span>
                  <div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Our team will contact you within 2 hours. Thank you!</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={styles.formInput}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={styles.formInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      className={styles.formInput}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.formLabel}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="service" className={styles.formLabel}>
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className={styles.formInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your logistics requirements..."
                    className={styles.formTextarea}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div className={styles.formFooter}>
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  <p className={styles.formNote}>
                    By submitting this form, you agree to our privacy policy
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoContainer}>
              <FadeIn>
                <div className={styles.infoHeader}>
                  <h2 className={styles.infoTitle}>
                    Contact <span className={styles.highlight}>Information</span>
                  </h2>
                  <p className={styles.infoSubtitle}>
                    Multiple ways to reach our Dubai team
                  </p>
                </div>
              </FadeIn>

              <div className={styles.infoCards}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={styles.infoCard}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <h3 className={styles.cardTitle}>{info.title}</h3>
                    <div className={styles.cardDetails}>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={styles.detail}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className={styles.quickContact}>
                <h3 className={styles.quickTitle}>Quick Contact</h3>
                <div className={styles.quickButtons}>
                  <a href="tel:+97141234567" className={styles.callButton}>
                    <span className={styles.buttonIcon}>📞</span>
                    Call Now
                  </a>
                  <a href="https://wa.me/971501234567" className={styles.whatsappButton}>
                    <span className={styles.buttonIcon}>💬</span>
                    WhatsApp
                  </a>
                  <a href="mailto:info@logiflow.ae" className={styles.emailButton}>
                    <span className={styles.buttonIcon}>✉️</span>
                    Email Us
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className={styles.socialMedia}>
                <h3 className={styles.socialTitle}>Follow Us</h3>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon} title="LinkedIn">
                    <span>in</span>
                  </a>
                  <a href="#" className={styles.socialIcon} title="Twitter">
                    <span>𝕏</span>
                  </a>
                  <a href="#" className={styles.socialIcon} title="Facebook">
                    <span>f</span>
                  </a>
                  <a href="#" className={styles.socialIcon} title="Instagram">
                    <span>📷</span>
                  </a>
                  <a href="#" className={styles.socialIcon} title="YouTube">
                    <span>▶️</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Location Map */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Our <span className={styles.highlight}>Dubai</span> Location
              </h2>
              <p className={styles.sectionSubtitle}>
                Visit our headquarters in Dubai Silicon Oasis
              </p>
            </div>
          </FadeIn>

          <div className={styles.mapContainer}>
            {/* Interactive Map Placeholder */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapContent}>
                <div className={styles.mapMarker}>
                  <span className={styles.markerIcon}>📍</span>
                  <div className={styles.markerPulse}></div>
                </div>
                <div className={styles.mapOverlay}>
                  <h3 className={styles.mapTitle}>LogiFlow Dubai HQ</h3>
                  <p className={styles.mapAddress}>{dubaiLocation.address}</p>
                  <div className={styles.mapActions}>
                    <a 
                      href={`https://maps.google.com/?q=${dubaiLocation.lat},${dubaiLocation.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapButton}
                    >
                      Open in Google Maps
                    </a>
                    <a 
                      href={`https://waze.com/ul?ll=${dubaiLocation.lat},${dubaiLocation.lng}&navigate=yes`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapButton}
                    >
                      Open in Waze
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map Legend */}
              <div className={styles.mapLegend}>
                <div className={styles.legendItem}>
                  <span className={styles.legendIcon}>🏢</span>
                  <span className={styles.legendText}>Our Headquarters</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendIcon}>🚚</span>
                  <span className={styles.legendText}>Loading Docks</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendIcon}>🅿️</span>
                  <span className={styles.legendText}>Visitor Parking</span>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className={styles.locationDetails}>
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>Getting Here</h3>
                <ul className={styles.detailList}>
                  <li>
                    <strong>From Dubai Airport:</strong> 20-25 minutes via Sheikh Mohammed Bin Zayed Road
                  </li>
                  <li>
                    <strong>From Downtown Dubai:</strong> 15-20 minutes via Al Khail Road
                  </li>
                  <li>
                    <strong>Public Transport:</strong> Dubai Metro Red Line to Dubai Silicon Oasis Station
                  </li>
                </ul>
              </div>
              
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>Parking Information</h3>
                <ul className={styles.detailList}>
                  <li>Visitor parking available in front of the building</li>
                  <li>Underground parking with 200+ spaces</li>
                  <li>EV charging stations available</li>
                  <li>Truck parking at the rear loading docks</li>
                </ul>
              </div>
              
              <div className={styles.detailCard}>
                <h3 className={styles.detailTitle}>Accessibility</h3>
                <ul className={styles.detailList}>
                  <li>Wheelchair accessible entrance and facilities</li>
                  <li>Elevator access to all floors</li>
                  <li>Accessible parking spaces near entrance</li>
                  <li>Assistance animals welcome</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className={styles.officesSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Our <span className={styles.highlight}>Regional</span> Offices
              </h2>
              <p className={styles.sectionSubtitle}>
                Serving clients across the Middle East and Africa
              </p>
            </div>
          </FadeIn>

          <div className={styles.officesGrid}>
            {[
              {
                city: 'Abu Dhabi',
                country: 'UAE',
                address: 'Al Maryah Island, Abu Dhabi Global Market',
                phone: '+971 2 123 4567',
                services: ['Oil & Gas Logistics', 'Project Cargo']
              },
              {
                city: 'Riyadh',
                country: 'Saudi Arabia',
                address: 'King Abdullah Financial District',
                phone: '+966 11 123 4567',
                services: ['Retail Logistics', 'Construction Logistics']
              },
              {
                city: 'Doha',
                country: 'Qatar',
                address: 'West Bay, Doha',
                phone: '+974 4 123 4567',
                services: ['Event Logistics', 'Infrastructure Projects']
              },
              {
                city: 'Muscat',
                country: 'Oman',
                address: 'Al Khuwair, Muscat',
                phone: '+968 24 123 456',
                services: ['Port Operations', 'Customs Clearance']
              }
            ].map((office, index) => (
              <motion.div
                key={index}
                className={styles.officeCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.officeHeader}>
                  <div className={styles.officeFlag}>🇦🇪</div>
                  <div>
                    <h3 className={styles.officeCity}>{office.city}</h3>
                    <div className={styles.officeCountry}>{office.country}</div>
                  </div>
                </div>
                <div className={styles.officeBody}>
                  <p className={styles.officeAddress}>{office.address}</p>
                  <a href={`tel:${office.phone}`} className={styles.officePhone}>
                    {office.phone}
                  </a>
                  <div className={styles.officeServices}>
                    {office.services.map((service, idx) => (
                      <span key={idx} className={styles.serviceTag}>{service}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Frequently <span className={styles.highlight}>Asked Questions</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Quick answers to common questions about contacting us
              </p>
            </div>
          </FadeIn>

          <div className={styles.faqGrid}>
            {[
              {
                question: 'What are your business hours in Dubai?',
                answer: 'Our Dubai office operates Sunday through Thursday from 8:00 AM to 6:00 PM, and Fridays from 9:00 AM to 1:00 PM. Emergency support is available 24/7.'
              },
              {
                question: 'How quickly will I receive a response?',
                answer: 'We guarantee a response within 2 hours during business hours. For urgent matters, please call our emergency line for immediate assistance.'
              },
              {
                question: 'Do you provide services outside Dubai?',
                answer: 'Yes, we operate across the UAE and throughout the Middle East region. We have offices in Abu Dhabi, Riyadh, Doha, and Muscat.'
              },
              {
                question: 'What languages does your team speak?',
                answer: 'Our Dubai team is multilingual, fluent in English, Arabic, Hindi, Urdu, and over 15 other languages to serve our diverse client base.'
              },
              {
                question: 'Is parking available at your Dubai office?',
                answer: 'Yes, we have ample visitor parking, underground parking with 200+ spaces, EV charging stations, and dedicated truck parking at loading docks.'
              },
              {
                question: 'Can I schedule an in-person meeting?',
                answer: 'Absolutely! Please use the contact form to request a meeting, and our team will coordinate a suitable time with you within 24 hours.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className={styles.faqCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Optimize Your Logistics?
              </h2>
              <p className={styles.ctaText}>
                Contact our Dubai team today for a free consultation and customized logistics solution
              </p>
              
              <div className={styles.ctaButtons}>
                <a href="tel:+97141234567" className={styles.primaryButton}>
                  Call Now: +971 4 123 4567
                </a>
                <a href="mailto:sales@logiflow.ae" className={styles.secondaryButton}>
                  Request Quote
                </a>
              </div>
              
              <div className={styles.ctaFeatures}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  Free consultation
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  24/7 support
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  Multilingual team
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;