import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../animations/FadeIn';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Supply Chain', path: '/services#supply-chain' },
      { label: 'Warehousing', path: '/services#warehousing' },
      { label: 'Transportation', path: '/services#transportation' },
      { label: 'Customs Clearance', path: '/services#customs' }
    ],
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'News', path: '/news' },
      { label: 'Contact', path: '/contact' }
    ],
    Resources: [
      { label: 'Blog', path: '/blog' },
      { label: 'Tracking', path: '/tracking' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Documentation', path: '/docs' }
    ],
    Legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' }
    ]
  };

  return (
    <FadeIn>
      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerContainer}>
            {/* Brand Section */}
            <div className={styles.brandSection}>
              <div className={styles.footerLogo}>
                <span className={styles.logoIcon}>🚀</span>
                <span className={styles.logoText}>LogiFlow</span>
              </div>
              <p className={styles.tagline}>
                Delivering excellence in global logistics since 2010
              </p>
              <div className={styles.socialLinks}>
                {['twitter', 'linkedin', 'facebook', 'instagram'].map((platform) => (
                  <a 
                    key={platform}
                    href={`https://${platform}.com`}
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                  >
                    {platform === 'twitter' && '𝕏'}
                    {platform === 'linkedin' && 'in'}
                    {platform === 'facebook' && 'f'}
                    {platform === 'instagram' && '📷'}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className={styles.linkSection}>
                <h3 className={styles.linkCategory}>{category}</h3>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.label} className={styles.linkItem}>
                      <Link to={link.path} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
            <div className={styles.newsletterSection}>
              <h3 className={styles.newsletterTitle}>Stay Updated</h3>
              <p className={styles.newsletterText}>
                Subscribe to our newsletter for logistics insights
              </p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.newsletterButton}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <p className={styles.copyright}>
              © {currentYear} LogiFlow Logistics. All rights reserved.
            </p>
            <div className={styles.paymentMethods}>
              {['💳', '💰', '🏦', '💵'].map((icon, index) => (
                <span key={index} className={styles.paymentIcon}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
};

export default Footer;