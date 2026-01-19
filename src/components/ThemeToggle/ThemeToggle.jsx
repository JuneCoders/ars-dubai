import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`${styles.themeToggle} ${isDarkMode ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={styles.toggleTrack}>
        <div className={styles.toggleThumb}>
          {isDarkMode ? '🌙' : '☀️'}
        </div>
      </div>
      <span className={styles.toggleText}>
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;