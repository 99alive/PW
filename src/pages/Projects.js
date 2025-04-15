import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'EduConnect_Ghana',
      description: 'EduConnect—a discussion platform designed to connect students and educators in a dynamic, interactive environment.',
      github: 'https://github.com/your-repo',
      demo: 'https://youtu.be/SV9_Q6cNg0s',
    },
    {
      title: 'AI Learning Assistant',
      description: 'Currently building an AI-powered tool for neurodiverse students in Ghana, making education more accessible and inclusive.',
      github: 'https://github.com/your-repo',
      demo: 'https://your-demo-link',
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed this portfolio site to showcase my skills and projects, learning React along the way.',
      github: 'https://github.com/99alive/WP',
      demo: 'https://your-demo-link',
    },
    {
      title: 'High School & Gap Year Journey',
      description: 'Collaborated on a team to build a web app raising awareness for digital equity, using React and Firebase. Won 2nd place for innovative design and impact. Impact: Reached 500+ users with advocacy resources.',
      github: 'https://sites.google.com/view/michaelowusu/home?authuser=1',
      demo: 'https://your-demo-link',
    },
  ];

  return (
    <section className="projects">
      <h2>All Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;