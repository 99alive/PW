import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

function Home({ isLightMode }) {
  const skills = ['React', 'JavaScript', 'Python', 'AI/ML Basics'];

  return (
    <main>
      <div className="split-section">
        <div className="left">
          <motion.img
            src={isLightMode ? '/desk-illustration-light.svg' : '/desk-illustration-dark.svg'}
            alt="Desk with laptop, Morehouse pennant, and coffee mug"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="right">
          <motion.div
            className="intro-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            👋 Hi, I’m [Your Name]—a coder passionate about tech and impact.
          </motion.div>
          <motion.h1 className="intro-text">
            <Typewriter
              options={{
                strings: ['I build projects that make a difference.'],
                autoStart: true,
                loop: false,
                delay: 50,
              }}
            />
          </motion.h1>
          <motion.p
            className="intro-subtext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Incoming freshman at Morehouse | Focused on tech for underserved communities
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/projects" className="cta-button">
              See My Projects
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
            <h3>Village Code Hub</h3>
            <p>Built a coding lab with salvaged electronics to teach kids programming. Used React and Python to create interactive lessons. Impact: 50+ kids learned to code.</p>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </motion.div>
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>AI Learning Assistant</h3>
            <p>Developed an AI-powered tool for neurodiverse students in Ghana. Used Python and TensorFlow for personalization. Impact: Improved learning outcomes for 20+ students.</p>
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