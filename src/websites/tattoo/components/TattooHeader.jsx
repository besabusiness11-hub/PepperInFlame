import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';

const TattooHeader = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on window resize if it becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="tattoo-header">
      <Link to="/tattoo" className="tattoo-logo">
        Pepper in Flame
      </Link>
      
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}

      <nav className={`tattoo-nav ${isMenuOpen ? 'active' : ''}`}>
        <NavLink 
          to="/tattoo" 
          end
          className={({ isActive }) => `tattoo-nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink 
          to="/tattoo/inspiration" 
          className={({ isActive }) => `tattoo-nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          {t.nav.inspiration}
        </NavLink>
        <NavLink 
          to="/tattoo/services" 
          className={({ isActive }) => `tattoo-nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          {t.nav.services}
        </NavLink>
        <NavLink 
          to="/tattoo/faq" 
          className={({ isActive }) => `tattoo-nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          {t.nav.faq}
        </NavLink>
        
        <button onClick={toggleLanguage} className="tattoo-btn-lang">
          {language === 'en' ? 'IT' : 'EN'}
        </button>
        
        <a href="tel:+1234567890" className="tattoo-btn-primary" onClick={closeMenu}>
          {t.nav.call}
        </a>

        <Link to="/tattoo/book" className="tattoo-btn-accent" onClick={closeMenu}>
          {t.nav.book}
        </Link>
      </nav>
    </header>
  );
};

export default TattooHeader;
