import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <Router>
      <div className={`app ${isLightMode ? 'light' : 'dark'}`}>
        <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home isLightMode={isLightMode} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer isLightMode={isLightMode} />
      </div>
    </Router>
  );
}

export default App;