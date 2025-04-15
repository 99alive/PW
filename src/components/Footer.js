import React from 'react';

function Footer({ isLightMode }) {
  return (
    <footer className={isLightMode ? 'light' : 'dark'}>
      <p>Built with ☕ by Mike</p>
      <div className="socials">
        <a href="owusumichaelosei799@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/michael-owusu-42a481268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/99alive" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;