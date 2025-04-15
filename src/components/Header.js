import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import { motion } from 'framer-motion';

function Header({ isLightMode, toggleTheme }) {
  return (
    <header>
      <motion.div
        className="logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mike
      </motion.div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="/resume.pdf" download className="resume-link">Resume</a>
      </nav>
      <Toggle isLightMode={isLightMode} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;