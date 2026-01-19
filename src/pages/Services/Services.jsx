import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import styles from './Services.module.css';

// Service data with images
const SERVICE_DATA = [
  {
    id: 1,
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain solutions with real-time visibility, inventory optimization, and supplier integration.',
    icon: '🚚',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop',
    category: 'supply-chain',
    features: ['Real-time Tracking', 'Inventory Optimization', 'Supplier Network', 'Demand Forecasting'],
    color: '#0066CC'
  },
  {
    id: 2,
    title: 'Warehousing Solutions',
    description: 'Smart warehousing with automation, climate control, and 24/7 security for optimal storage.',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w-800&auto=format&fit=crop',
    category: 'warehousing',
    features: ['Automated Storage', 'Climate Control', '24/7 Security', 'Inventory Management'],
    color: '#00CC66'
  },
  {
    id: 3,
    title: 'Air & Sea Freight',
    description: 'Global transportation network with multimodal options including air and sea freight.',
    icon: '✈️',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop',
    category: 'transportation',
    features: ['Air Freight', 'Sea Freight', 'Multimodal', 'Customs Support'],
    color: '#FF6600'
  },
  {
    id: 4,
    title: 'Customs Clearance',
    description: 'Fast and compliant customs documentation, clearance, and regulatory compliance services.',
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    category: 'compliance',
    features: ['Documentation', 'Compliance', 'Fast Tracking', 'Regulatory Support'],
    color: '#8B5CF6'
  },
  {
    id: 5,
    title: 'Last Mile Delivery',
    description: 'Efficient last-mile delivery solutions with real-time tracking and customer notifications.',
    icon: '📦',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop',
    category: 'delivery',
    features: ['Same Day Delivery', 'Real-time Updates', 'Customer Notifications', 'Route Optimization'],
    color: '#10B981'
  },
  {
    id: 6,
    title: 'Logistics Consulting',
    description: 'Expert consulting for optimized logistics operations, cost reduction, and strategy planning.',
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    category: 'consulting',
    features: ['Process Audit', 'Cost Analysis', 'Strategy Planning', 'Implementation'],
    color: '#F59E0B'
  },
  {
    id: 7,
    title: 'Cold Chain Logistics',
    description: 'Temperature-controlled logistics for pharmaceuticals, food, and other perishable goods.',
    icon: '❄️',
    image: 'https://images.unsplash.com/photo-1578911373217-41c6a7f40c9c?w=800&auto=format&fit=crop',
    category: 'specialized',
    features: ['Temperature Monitoring', 'Compliance', 'Special Handling', 'Quality Control'],
    color: '#3B82F6'
  },
  {
    id: 8,
    title: 'Reverse Logistics',
    description: 'Efficient returns management, product recovery, and waste management services.',
    icon: '🔄',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
    category: 'specialized',
    features: ['Returns Processing', 'Product Recovery', 'Waste Management', 'Sustainability'],
    color: '#EF4444'
  },
  {
    id: 9,
    title: 'Technology Solutions',
    description: 'Advanced logistics technology including IoT tracking, AI optimization, and blockchain.',
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
    category: 'technology',
    features: ['IoT Tracking', 'AI Optimization', 'Blockchain', 'Real-time Analytics'],
    color: '#8B5CF6'
  },
  {
    id: 10,
    title: 'Project Logistics',
    description: 'Specialized logistics for large-scale projects, heavy equipment, and complex shipments.',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop',
    category: 'specialized',
    features: ['Heavy Equipment', 'Oversized Cargo', 'Project Planning', 'Site Logistics'],
    color: '#F59E0B'
  },
  {
    id: 11,
    title: 'E-commerce Fulfillment',
    description: 'Complete e-commerce fulfillment including picking, packing, and shipping solutions.',
    icon: '🛒',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&auto=format&fit=crop',
    category: 'delivery',
    features: ['Order Processing', 'Packing', 'Shipping', 'Returns Management'],
    color: '#10B981'
  },
  {
    id: 12,
    title: 'Dangerous Goods',
    description: 'Safe and compliant handling of hazardous materials with specialized packaging.',
    icon: '⚠️',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop',
    category: 'specialized',
    features: ['Hazardous Materials', 'Special Packaging', 'Compliance', 'Safety Protocols'],
    color: '#EF4444'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Services', icon: '🌟', count: 12 },
  { id: 'supply-chain', label: 'Supply Chain', icon: '🔗', count: 1 },
  { id: 'warehousing', label: 'Warehousing', icon: '🏭', count: 1 },
  { id: 'transportation', label: 'Transportation', icon: '✈️', count: 1 },
  { id: 'delivery', label: 'Delivery', icon: '📦', count: 2 },
  { id: 'compliance', label: 'Compliance', icon: '📋', count: 1 },
  { id: 'consulting', label: 'Consulting', icon: '💡', count: 1 },
  { id: 'technology', label: 'Technology', icon: '🤖', count: 1 },
  { id: 'specialized', label: 'Specialized', icon: '⭐', count: 4 }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  const filteredServices = activeCategory === 'all' 
    ? SERVICE_DATA 
    : SERVICE_DATA.filter(service => service.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section with Background Image */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
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
                <span className={styles.badgeIcon}>🚀</span>
                Professional Logistics Services
              </div>
            </FadeIn>
            
            <SlideIn delay={0.3}>
              <h1 className={styles.heroTitle}>
                Comprehensive <span className={styles.gradientText}>Logistics Solutions</span>
              </h1>
            </SlideIn>
            
            <FadeIn delay={0.4}>
              <p className={styles.heroSubtitle}>
                From warehousing to last-mile delivery, we provide end-to-end logistics services 
                powered by cutting-edge technology and decades of expertise.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>12+</div>
                  <div className={styles.statLabel}>Services</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Countries</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>99.7%</div>
                  <div className={styles.statLabel}>Success Rate</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className={styles.waveDivider}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Browse By Category Section - Non-sticky */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Browse By <span className={styles.highlight}>Category</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Explore our specialized logistics services tailored to your needs
              </p>
            </div>
          </FadeIn>

          {/* <motion.div 
            className={styles.categoriesGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                className={`${styles.categoryCard} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.categoryIcon}>{category.icon}</div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryTitle}>{category.label}</h3>
                  <div className={styles.categoryCount}>{category.count} services</div>
                </div>
                <div className={styles.categoryArrow}>
                  <span className={styles.arrowIcon}>→</span>
                </div>
              </motion.button>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={styles.servicesGridSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {activeCategory === 'all' ? 'All' : CATEGORIES.find(c => c.id === activeCategory)?.label} Services
                <span className={styles.servicesCount}> ({filteredServices.length})</span>
              </h2>
            </div>
          </FadeIn>

          {filteredServices.length === 0 ? (
            <FadeIn>
              <div className={styles.noResults}>
                <div className={styles.noResultsIcon}>🔍</div>
                <h3>No services found</h3>
                <p>Try selecting a different category</p>
                <button 
                  className={styles.resetButton}
                  onClick={() => setActiveCategory('all')}
                >
                  Show All Services
                </button>
              </div>
            </FadeIn>
          ) : (
            <motion.div 
              className={styles.servicesGrid}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  className={styles.serviceCard}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.serviceImageContainer}>
                    <div 
                      className={styles.serviceImage}
                      style={{ 
                        backgroundImage: `url(${service.image})`,
                        backgroundColor: service.color
                      }}
                    >
                      <div className={styles.imageOverlay}></div>
                      <div className={styles.serviceIcon}>{service.icon}</div>
                    </div>
                    <div className={styles.serviceBadge}>
                      <span className={styles.badgeText}>Premium</span>
                    </div>
                  </div>

                  <div className={styles.serviceContent}>
                    <div className={styles.serviceHeader}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <div 
                        className={styles.categoryTag}
                        style={{ backgroundColor: `${service.color}20`, color: service.color }}
                      >
                        {CATEGORIES.find(c => c.id === service.category)?.label}
                      </div>
                    </div>
                    
                    <p className={styles.serviceDescription}>{service.description}</p>
                    
                    <div className={styles.serviceFeatures}>
                      {service.features.map((feature, index) => (
                        <span key={index} className={styles.featureTag}>
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className={styles.serviceFooter}>
                      <motion.button 
                        className={styles.learnMoreButton}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <span className={styles.buttonIcon}>→</span>
                      </motion.button>
                      
                      <div className={styles.serviceActions}>
                        <button className={styles.actionButton} title="Quick Quote">
                          💬
                        </button>
                        <button className={styles.actionButton} title="Save Service">
                          💾
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Our <span className={styles.highlight}>Service Process</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Simple and transparent workflow from consultation to delivery
              </p>
            </div>
          </FadeIn>

          <div className={styles.processSteps}>
            {[
              { step: 1, title: 'Consultation', description: 'Free initial consultation to understand your needs', icon: '💬' },
              { step: 2, title: 'Planning', description: 'Custom logistics strategy and planning', icon: '📋' },
              { step: 3, title: 'Implementation', description: 'Seamless deployment of logistics solutions', icon: '🚀' },
              { step: 4, title: 'Support', description: '24/7 monitoring and ongoing optimization', icon: '🛡️' }
            ].map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.2}>
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  {index < 3 && (
                    <div className={styles.stepArrow}>→</div>
                  )}
                </div>
              </FadeIn>
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
                Ready to Streamline Your Logistics?
              </h2>
              <p className={styles.ctaText}>
                Get a personalized logistics solution tailored to your business requirements
              </p>
              
              <div className={styles.ctaButtons}>
                <motion.button 
                  className={styles.primaryButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Free Consultation
                </motion.button>
                
                <button className={styles.secondaryButton}>
                  Download Brochure
                </button>
              </div>
              
              <div className={styles.ctaFeatures}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  No commitment
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  24/7 Support
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>✅</span>
                  Global Coverage
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Services;