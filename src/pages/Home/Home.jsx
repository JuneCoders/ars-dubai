import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import { SERVICES } from '../../utils/constants';
import styles from './Home.module.css';

const Home = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Logistics path animation
  const logisticsPath = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    const path = logisticsPath.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
      path.style.transition = 'stroke-dashoffset 2s ease-in-out';
      path.style.strokeDashoffset = '0';
    }
  }, []);

  // Stats counter animation
  const stats = [
    { id: 1, value: 10000, label: 'Global Partners', suffix: '+' },
    { id: 2, value: 99.7, label: 'On-Time Delivery', suffix: '%' },
    { id: 3, value: 150, label: 'Countries Covered', suffix: '+' },
    { id: 4, value: 24, label: 'Customer Support', suffix: '/7' }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section with Animated Background */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.floatingLogistics}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
          <svg className={styles.logisticsPath} viewBox="0 0 800 400">
            <path
              ref={logisticsPath}
              d="M50,200 Q200,50 350,200 T650,200"
              fill="none"
              stroke="rgba(0, 102, 204, 0.3)"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeIcon}>🚀</span>
                Trusted Worldwide Since 2010
              </div>
            </FadeIn>
            
            <SlideIn delay={0.3}>
              <h1 className={styles.heroTitle}>
                <span className={styles.gradientText}>Intelligent Logistics</span>
                <br />
                For The Modern World
              </h1>
            </SlideIn>
            
            <FadeIn delay={0.4}>
              <p className={styles.heroSubtitle}>
                Accelerate your supply chain with AI-powered logistics solutions, 
                real-time tracking, and seamless global connectivity.
              </p>
            </FadeIn>
            
            <div className={styles.heroActions}>
              <FadeIn delay={0.5}>
                <motion.button 
                  className={styles.primaryButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Shipping
                  <span className={styles.buttonIcon}>→</span>
                </motion.button>
              </FadeIn>
              
              <SlideIn delay={0.6}>
                <div className={styles.trackingWidget}>
                  <input 
                    type="text" 
                    placeholder="Enter tracking number" 
                    className={styles.trackingInput}
                  />
                  <button className={styles.trackButton}>
                    <span className={styles.trackIcon}>🔍</span>
                    Track
                  </button>
                </div>
              </SlideIn>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.logisticsNetwork}>
              <div className={styles.networkNode} style={{ top: '20%', left: '15%' }}>
                <div className={styles.nodePulse}></div>
                <span className={styles.nodeLabel}>LA</span>
              </div>
              <div className={styles.networkNode} style={{ top: '40%', left: '35%' }}>
                <div className={styles.nodePulse}></div>
                <span className={styles.nodeLabel}>NY</span>
              </div>
              <div className={styles.networkNode} style={{ top: '60%', left: '55%' }}>
                <div className={styles.nodePulse}></div>
                <span className={styles.nodeLabel}>DXB</span>
              </div>
              <div className={styles.networkNode} style={{ top: '30%', left: '75%' }}>
                <div className={styles.nodePulse}></div>
                <span className={styles.nodeLabel}>SIN</span>
              </div>
              
              {/* Animated connections */}
              <svg className={styles.networkConnections} viewBox="0 0 100 100">
                <line x1="15" y1="20" x2="35" y2="40" className={styles.connectionLine} />
                <line x1="35" y1="40" x2="55" y2="60" className={styles.connectionLine} />
                <line x1="55" y1="60" x2="75" y2="30" className={styles.connectionLine} />
              </svg>
              
              {/* Moving Package */}
              <motion.div 
                className={styles.movingPackage}
                animate={{
                  x: [0, 200, 200, 0, 0],
                  y: [0, 0, 100, 100, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                📦
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className={styles.trustedSection}>
        <div className={styles.container}>
          <FadeIn>
            <p className={styles.trustedLabel}>Trusted by industry leaders</p>
          </FadeIn>
          <div className={styles.logoGrid}>
            {['🏭', '🚢', '✈️', '🏪', '📱', '🏢'].map((logo, index) => (
              <motion.div
                key={index}
                className={styles.logoItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className={styles.companyLogo}>{logo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className={styles.stats} ref={ref}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                className={styles.statCard}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.statIcon}>📈</div>
                <motion.div 
                  className={styles.statValue}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.2 + 0.3
                  }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <FadeIn>
              <h2 className={styles.sectionTitle}>
                End-to-End <span className={styles.highlight}>Logistics Solutions</span>
              </h2>
            </FadeIn>
            <SlideIn delay={0.2}>
              <p className={styles.sectionSubtitle}>
                Comprehensive services designed to streamline your supply chain
              </p>
            </SlideIn>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                className={styles.serviceCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className={styles.serviceIcon}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ 
                    delay: index * 0.3 + 1,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <div className={styles.serviceFeatures}>
                  {service.features?.map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      {feature}
                    </span>
                  )) || ['Real-time Tracking', '24/7 Support', 'Global Network'].map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>
                
                <motion.div 
                  className={styles.serviceLine}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                />
                
                <Link to="/services" className={styles.learnMore}>
                  Learn more <span className={styles.arrow}>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <FadeIn delay={0.5}>
            <div className={styles.servicesCTA}>
              <Link to="/services" className={styles.viewAllButton}>
                View All Services
                <span className={styles.buttonArrow}>→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Animation Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <FadeIn>
            <h2 className={styles.sectionTitle}>
              Seamless <span className={styles.highlight}>Logistics Journey</span>
            </h2>
          </FadeIn>
          
          <div className={styles.processTimeline}>
            {[
              { step: 1, title: 'Pickup', description: 'Scheduled collection', icon: '🚚' },
              { step: 2, title: 'Processing', description: 'Documentation & sorting', icon: '🏢' },
              { step: 3, title: 'Transport', description: 'Multi-modal shipping', icon: '✈️' },
              { step: 4, title: 'Delivery', description: 'Last-mile fulfillment', icon: '📦' }
            ].map((step, index) => (
              <motion.div 
                key={step.step}
                className={styles.processStep}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < 3 && (
                  <motion.div 
                    className={styles.stepConnector}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.floatingPackage}></div>
          <div className={styles.floatingPackage}></div>
          <div className={styles.floatingPackage}></div>
        </div>
        
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className={styles.ctaText}>
                Join thousands of businesses that trust LogiFlow for their logistics needs
              </p>
              
              <div className={styles.ctaActions}>
                <motion.button 
                  className={styles.primaryButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Free
                </motion.button>
                
                <Link to="/contact" className={styles.secondaryButton}>
                  Schedule Demo
                </Link>
              </div>
              
              <div className={styles.ctaFeatures}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  No setup fees
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  30-day free trial
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  24/7 Support
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;