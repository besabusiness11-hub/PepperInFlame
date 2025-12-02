import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import '../styles/services.css';

const TattooServices = () => {
  const { t } = useLanguage();

  return (
    <section className="page-section">
      <div className="section-header">
        <h2 className="section-title">{t.services.title}</h2>
        <span className="section-subtitle">{t.services.subtitle}</span>
      </div>

      <div className="services-list">
        {t.services.items.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-info">
              <h3>{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
            <div className="service-action">
              <span className="service-price">{service.price}</span>
              <Link to="/tattoo/book" className="tattoo-btn-primary">
                {t.services.book}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TattooServices;
