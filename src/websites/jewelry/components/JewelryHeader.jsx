import { useState } from 'react';
import '../styles/header.css';

const JewelryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="jewelry-header">
      <div className="jewelry-header-container">
        <div className="jewelry-logo">
          <h1>ARYA</h1>
          <p className="jewelry-subtitle">Gioielleria</p>
        </div>

        <button 
          className="jewelry-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`jewelry-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>Chi Siamo</button></li>
            <li><button onClick={() => scrollToSection('collection')}>Collezione</button></li>
            <li><button onClick={() => scrollToSection('services')}>Servizi</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contatti</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default JewelryHeader;
