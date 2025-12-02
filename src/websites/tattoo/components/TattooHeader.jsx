import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';

const TattooHeader = () => {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <header className="tattoo-header">
      <Link to="/tattoo" className="tattoo-logo">
        Pepper in Flame
      </Link>
      
      <nav className="tattoo-nav">
        <NavLink 
          to="/tattoo" 
          end
          className={({ isActive }) => `tattoo-nav-link ${isActive ? 'active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/tattoo/inspiration" 
          className={({ isActive }) => `tattoo-nav-link ${isActive ? 'active' : ''}`}
        >
          {t.nav.inspiration}
        </NavLink>
        <NavLink 
          to="/tattoo/services" 
          className={({ isActive }) => `tattoo-nav-link ${isActive ? 'active' : ''}`}
        >
          {t.nav.services}
        </NavLink>
        <NavLink 
          to="/tattoo/faq" 
          className={({ isActive }) => `tattoo-nav-link ${isActive ? 'active' : ''}`}
        >
          {t.nav.faq}
        </NavLink>
        
        <button onClick={toggleLanguage} className="tattoo-btn-lang">
          {language === 'en' ? 'IT' : 'EN'}
        </button>
        
        <a href="tel:+1234567890" className="tattoo-btn-primary">
          {t.nav.call}
        </a>

        <Link to="/tattoo/book" className="tattoo-btn-accent">
          {t.nav.book}
        </Link>
      </nav>
    </header>
  );
};

export default TattooHeader;
