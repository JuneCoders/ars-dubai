import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import FadeIn from '../animations/FadeIn';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && 
          !e.target.closest(`.${styles.mobileMenu}`) &&
          !e.target.closest(`.${styles.hamburger}`)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <FadeIn>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <span className={styles.logoIcon}>🚀</span>
              <span className={styles.logoText}>LogiFlow</span>
              <span className={styles.logoTagline}>Global Logistics</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Navbar />
            <div className={styles.headerActions}>
              <ThemeToggle />
              <button className={styles.ctaButton}>
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className={styles.mobileNavToggle}>
            <div className={styles.mobileThemeToggle}>
              <ThemeToggle />
            </div>
            <button 
              className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.closeIcon}>×</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`} 
             onClick={() => setIsMobileMenuOpen(false)}></div>

        {/* Mobile Menu */}
        <nav className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
             aria-hidden={!isMobileMenuOpen}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileLogo}>
              <span className={styles.mobileLogoIcon}>🚀</span>
              <span className={styles.mobileLogoText}>LogiFlow</span>
            </div>
            <button 
              className={styles.mobileCloseButton}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileNavLinks}>
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`${styles.mobileNavLink} ${
                    location.pathname === item.path ? styles.active : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <span className={styles.mobileNavArrow}>→</span>
                </Link>
              ))}
            </div>
            
            <div className={styles.mobileActions}>
              <button className={styles.mobileCtaButton}>
                <span>Get Quote</span>
                <span className={styles.buttonArrow}>→</span>
              </button>
              
              <div className={styles.mobileContact}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <div>
                    <p className={styles.contactLabel}>Call us</p>
                    <a href="tel:+11234567890" className={styles.contactNumber}>
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <div>
                    <p className={styles.contactLabel}>Email us</p>
                    <a href="mailto:info@logiflow.com" className={styles.contactEmail}>
                      info@logiflow.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </FadeIn>
  );
};

export default Header;