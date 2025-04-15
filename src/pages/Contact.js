import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>Interested in collaborating on tech projects for social good? Let’s connect!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;