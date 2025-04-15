import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home({ isLightMode }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const strings = [
    'I use tech to empower underserved communities.',
    'I teach kids to code with Village Code Hub.',
    'I love making science fun and engaging for young minds.',
    'Serving my community is a core part of who I am.',
  ];
  const skills = ['React', 'JavaScript', 'Python', 'AI/ML', 'Community Leadership'];

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    const typingSpeed = isDeleting ? 30 : 50; // Faster deletion, slower typing
    const pauseDuration = 1500; // Pause for 1.5 seconds after typing/deleting

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentString.length) {
        // Typing
        setDisplayedText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayedText(currentString.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentString.length) {
        // Pause after typing, then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next string after deleting
        setIsDeleting(false);
        setCurrentStringIndex((currentStringIndex + 1) % strings.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentStringIndex, strings]);

  return (
    <main>
      <div className="split-section">
        <div className="left">
          {!isImageLoaded && <div className="image-placeholder">Loading...</div>}
          <motion.img
            src={isLightMode ? '/desk-illustration-light.svg' : '/desk-illustration-dark.svg'}
            alt="Desk with laptop, Morehouse pennant, and coffee mug"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isImageLoaded ? 1 : 0, scale: isImageLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.8 }}
            onLoad={() => setIsImageLoaded(true)}
            style={{ display: isImageLoaded ? 'block' : 'none' }}
          />
        </div>
        <div className="right">
          <motion.div
            className="intro-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            👋 Hi, I’m Mike—a coder with a heart for impact.
          </motion.div>
          <motion.h1
            className="intro-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
            <span className="cursor">|</span>
          </motion.h1>
          <motion.p
            className="intro-subtext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Incoming freshman at Morehouse | Advocate for STEM education
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/projects" className="cta-button">
              Explore My Work
            </Link>
          </motion.div>
        </div>
      </div>
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>EduConnect_Ghana</h3>
            <p>EduConnect—a discussion platform designed to connect students and educators in a dynamic, interactive environment.</p>
            <a href="https://github.com/99alive/EduConnect-Ghana.git" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </motion.div>
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>AI Learning Assistant</h3>
            <p>Building an AI-powered tool for neurodiverse students in Ghana, using Python and TensorFlow to personalize learning. Impact: Improved outcomes for 20+ students.</p>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </motion.div>
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="skill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;