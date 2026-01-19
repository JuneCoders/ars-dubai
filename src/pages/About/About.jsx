import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import styles from './About.module.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Michael Rodriguez',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop',
      description: '20+ years in logistics, former VP at FedEx',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop',
      description: 'Supply chain expert with MBA from Stanford',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Technology Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
      description: 'Former Google engineer, logistics automation specialist',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Lisa Thompson',
      role: 'Customer Success',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop',
      description: '15 years in customer relations, logistics industry',
      linkedin: '#'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'Started with 5 employees in NYC' },
    { year: '2012', title: 'First Warehouse', description: 'Opened first automated warehouse in NJ' },
    { year: '2015', title: 'Global Expansion', description: 'Expanded to 50+ countries' },
    { year: '2018', title: 'Tech Platform', description: 'Launched AI-powered logistics platform' },
    { year: '2020', title: 'Sustainability', description: 'Achieved carbon-neutral operations' },
    { year: '2023', title: 'Industry Leader', description: 'Served 10,000+ businesses worldwide' }
  ];

  const values = [
    { icon: '🚀', title: 'Innovation', description: 'Constantly evolving with technology' },
    { icon: '🤝', title: 'Partnership', description: 'Building lasting client relationships' },
    { icon: '🎯', title: 'Precision', description: 'Accuracy in every shipment' },
    { icon: '🌱', title: 'Sustainability', description: 'Eco-friendly logistics solutions' },
    { icon: '⚡', title: 'Efficiency', description: 'Optimizing every step of the journey' },
    { icon: '🛡️', title: 'Reliability', description: 'Dependable service 24/7' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: '🏆' },
    { name: 'C-TPAT Certified', icon: '🛡️' },
    { name: 'GDP Compliant', icon: '📦' },
    { name: 'IATA Member', icon: '✈️' },
    { name: 'FMCSA Licensed', icon: '🚚' },
    { name: 'Green Logistics', icon: '🌿' }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.floatingLogistics}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
          <div className={styles.heroMap}>
            <div className={styles.mapDot} style={{ top: '30%', left: '15%' }}>🌎</div>
            <div className={styles.mapDot} style={{ top: '45%', left: '35%' }}>🌍</div>
            <div className={styles.mapDot} style={{ top: '60%', left: '55%' }}>🌏</div>
            <div className={styles.mapDot} style={{ top: '35%', left: '75%' }}>📍</div>
            <div className={styles.mapLines}></div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeIcon}>🚀</span>
                Our Story Since 2010
              </div>
            </FadeIn>
            
            <SlideIn delay={0.3}>
              <h1 className={styles.heroTitle}>
                Pioneering <span className={styles.gradientText}>Global Logistics</span>
                <br />
                for a Connected World
              </h1>
            </SlideIn>
            
            <FadeIn delay={0.4}>
              <p className={styles.heroSubtitle}>
                We're redefining logistics with innovative solutions that connect businesses 
                worldwide through technology, expertise, and relentless commitment to excellence.
              </p>
            </FadeIn>
            
            <div className={styles.heroStats}>
              <FadeIn delay={0.5}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>13+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Countries Served</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.7}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>10K+</div>
                  <div className={styles.statLabel}>Happy Clients</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <FadeIn>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>🎯</div>
                <h2 className={styles.missionTitle}>Our Mission</h2>
                <p className={styles.missionText}>
                  To revolutionize global supply chains by providing intelligent, 
                  efficient, and sustainable logistics solutions that empower 
                  businesses to thrive in a connected world.
                </p>
                <div className={styles.missionHighlight}>
                  <span className={styles.highlightIcon}>⚡</span>
                  <span>Redefining logistics excellence</span>
                </div>
              </div>
            </FadeIn>
            
            <SlideIn delay={0.2}>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>🔮</div>
                <h2 className={styles.visionTitle}>Our Vision</h2>
                <p className={styles.visionText}>
                  To become the world's most trusted logistics partner, creating 
                  seamless global trade networks powered by cutting-edge technology 
                  and unparalleled service.
                </p>
                <div className={styles.visionHighlight}>
                  <span className={styles.highlightIcon}>🌐</span>
                  <span>Connecting the world, one shipment at a time</span>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Our <span className={styles.highlight}>Journey</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Milestones in our path to logistics excellence
              </p>
            </div>
          </FadeIn>

          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                  <p className={styles.timelineDescription}>{milestone.description}</p>
                </div>
                <div className={styles.timelineDot}></div>
                {index < milestones.length - 1 && (
                  <div className={styles.timelineLine}></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Our <span className={styles.highlight}>Core Values</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                The principles that guide every decision we make
              </p>
            </div>
          </FadeIn>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Meet Our <span className={styles.highlight}>Leadership</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Experts driving innovation in logistics
              </p>
            </div>
          </FadeIn>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.memberImage}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    loading="lazy"
                  />
                  <div className={styles.memberOverlay}>
                    <a href={member.linkedin} className={styles.linkedinButton}>
                      in
                    </a>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <div className={styles.memberRole}>{member.role}</div>
                  <p className={styles.memberDescription}>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={styles.certificationsSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Certifications & <span className={styles.highlight}>Compliance</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Meeting the highest industry standards
              </p>
            </div>
          </FadeIn>

          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className={styles.certificationCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.certIcon}>{cert.icon}</div>
                <div className={styles.certName}>{cert.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className={styles.globalSection}>
        <div className={styles.container}>
          <div className={styles.globalContent}>
            <FadeIn>
              <h2 className={styles.globalTitle}>
                Global <span className={styles.highlight}>Footprint</span>
              </h2>
            </FadeIn>
            
            <div className={styles.globalStats}>
              <SlideIn delay={0.2}>
                <div className={styles.globalStat}>
                  <div className={styles.globalStatIcon}>🌎</div>
                  <div className={styles.globalStatContent}>
                    <div className={styles.globalStatNumber}>12</div>
                    <div className={styles.globalStatLabel}>Regional Hubs</div>
                  </div>
                </div>
              </SlideIn>
              
              <SlideIn delay={0.3}>
                <div className={styles.globalStat}>
                  <div className={styles.globalStatIcon}>🏭</div>
                  <div className={styles.globalStatContent}>
                    <div className={styles.globalStatNumber}>45+</div>
                    <div className={styles.globalStatLabel}>Warehouses</div>
                  </div>
                </div>
              </SlideIn>
              
              <SlideIn delay={0.4}>
                <div className={styles.globalStat}>
                  <div className={styles.globalStatIcon}>🤝</div>
                  <div className={styles.globalStatContent}>
                    <div className={styles.globalStatNumber}>200+</div>
                    <div className={styles.globalStatLabel}>Global Partners</div>
                  </div>
                </div>
              </SlideIn>
            </div>
            
            <FadeIn delay={0.5}>
              <p className={styles.globalText}>
                With strategic locations across 6 continents, we ensure seamless 
                logistics operations worldwide. Our network is designed for speed, 
                reliability, and efficiency.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Partner with Logistics Experts?
              </h2>
              <p className={styles.ctaText}>
                Join thousands of businesses that trust us for their logistics needs
              </p>
              
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.primaryButton}>
                  Get in Touch
                </Link>
                <Link to="/services" className={styles.secondaryButton}>
                  Explore Services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default About;