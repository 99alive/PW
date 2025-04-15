import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const achievements = [
    {
      title: 'Incoming Freshman at Morehouse College',
      date: 'Fall 2025',
      description: 'Starting my journey in computer science at Morehouse, ready to make an impact.',
      icon: '🎓',
    },
    {
      title: 'Founder of Village Code Hub',
      date: '2024',
      description: 'Built a coding lab with salvaged electronics, teaching 50+ kids to code.',
      icon: '💻',
    },
    {
      title: 'Young Tech Leader Award',
      date: '2023',
      description: 'Recognized at the Digital Advocacy Hackathon for innovative impact.',
      icon: '🏆',
    },
    {
      title: 'Top Young Scientist, Junior Graphic Report',
      date: '2022',
      description: 'Nationally recognized for STEM innovations tackling issues like water scarcity.',
      icon: '🏆',
    },
  ];

  return (
    <section className="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="about-container">
        {/* Left Column: Photo and Tagline */}
        <div className="about-left">
          <motion.div
            className="tagline"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fixing Problems, Building Futures
          </motion.div>
          <motion.div
            className="photo-container"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/mike-photo.jpg"
              alt="Mike working on a project"
              className="profile-photo"
              onError={() => console.log("Failed to load image: /mike-photo.jpg")}
            />
          </motion.div>
        </div>

        {/* Right Column: Bio and Achievements */}
        <div className="about-right">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>
            Hey, I’m Mike — [Morehouse ‘29], [CS Major], and proud [Bonner Scholar] 💛

I grew up in a small town, learning to fix radios and bikes 🛠️  
That hands-on curiosity grew into a passion for using tech to uplift others.

⚡ Started [Village Code Hub] — teaching 50+ kids to code with salvaged tech  
🤖 Built an offline AI tool to support neurodiverse students in Ghana  
👩🏾‍🔬 Led STEM workshops for girls with [Africa Loves Science]  
🌍 Grateful to be featured nationally for work on water access through STEM

I believe in tech that meets people where they are.  
I’m still learning, still building — with heart, humility, and hope.  
Let’s create something meaningful together 🤝✨
            </p>
          </motion.div>

          <motion.div
            className="achievements-timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3>My Journey</h3>
            <div className="timeline">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="timeline-icon">{achievement.icon}</div>
                  <div className="timeline-content">
                    <h4>{achievement.title}</h4>
                    <span className="timeline-date">{achievement.date}</span>
                    <p>{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;