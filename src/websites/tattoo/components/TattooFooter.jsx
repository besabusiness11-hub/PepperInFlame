import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';

const TattooFooter = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="tattoo-footer">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem', textAlign: 'left' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--tattoo-accent)' }}>PEPPER IN FLAME</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>
              {t.footer.tagline}
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', color: 'var(--tattoo-accent)' }}>{t.contact.hours}</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.5rem' }}>{t.footer.monFri}</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.5rem' }}>{t.footer.saturday}</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{t.footer.sunday}</p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', color: 'var(--tattoo-accent)' }}>{t.contact.location}</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1rem' }}>
              {t.footer.address1}<br/>
              {t.footer.address2}<br/>
              {t.footer.address3}
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', color: 'var(--tattoo-accent)' }}>{t.footer.connect}</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#fff', transition: 'color 0.3s' }}>Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#fff', transition: 'color 0.3s' }}>Facebook</a>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              <a href="tel:+1234567890" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>+1 (234) 567-890</a><br/>
              <a href="mailto:info@pepperinflame.com" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none' }}>info@pepperinflame.com</a>
            </p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Pepper in Flame. {t.footer.rights}</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/tattoo" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.footer.privacy}</Link>
            <Link to="/tattoo" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TattooFooter;
