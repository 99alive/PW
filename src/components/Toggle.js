import React from 'react';
import { motion } from 'framer-motion';

function Toggle({ isLightMode, toggleTheme }) {
  return (
    <motion.div
      className="toggle"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
      aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span className="icon">{isLightMode ? '🌙' : '☀️'}</span>
    </motion.div>
  );
}

export default Toggle;