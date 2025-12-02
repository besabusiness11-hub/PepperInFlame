import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import '../styles/home.css';
import pepperPost1 from '../../../assets/pepperPost1.jpg'
import pepperPost2 from '../../../assets/pepperPost2.jpg'
import pepperPost3 from '../../../assets/pepperPost3.jpg'
import pepperPost4 from '../../../assets/pepperPost4.jpg'
import pepperImage1 from '../../../assets/pepperImage1.jpg'

const TattooHome = () => {
  const { t } = useLanguage();

  const reviews = [
    { 
      name: t.reviews.author1, 
      text: t.reviews.quote1,
      stars: 5 
    },
    { 
      name: t.reviews.author2, 
      text: t.reviews.quote2,
      stars: 5 
    },
    { 
      name: t.reviews.author3, 
      text: t.reviews.quote3,
      stars: 5 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="tattoo-hero">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/peppervideo.webm" type="video/webm" />
        </video>
        <div className="hero-content">
          <p className="hero-tagline">{t.hero.tagline}</p>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <Link to="/tattoo/book" className="tattoo-btn-accent" style={{ fontSize: '1rem', padding: '1rem 3rem' }}>
            {t.hero.cta}
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{t.stats.years}</div>
            <div className="stat-label">{t.stats.yearsDesc}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{t.stats.clients}</div>
            <div className="stat-label">{t.stats.clientsDesc}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{t.stats.artists}</div>
            <div className="stat-label">{t.stats.artistsDesc}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{t.stats.rating}</div>
            <div className="stat-label">{t.stats.ratingDesc}</div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="page-section">
        <div className="section-header">
          <h2 className="section-title">{t.whyChoose.title}</h2>
          <span className="section-subtitle">{t.whyChoose.subtitle}</span>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 className="feature-title">{t.whyChoose.items[0].title}</h3>
            <p className="feature-desc">{t.whyChoose.items[0].desc}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="feature-title">{t.whyChoose.items[1].title}</h3>
            <p className="feature-desc">{t.whyChoose.items[1].desc}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h3 className="feature-title">{t.whyChoose.items[2].title}</h3>
            <p className="feature-desc">{t.whyChoose.items[2].desc}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="feature-title">{t.whyChoose.items[3].title}</h3>
            <p className="feature-desc">{t.whyChoose.items[3].desc}</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="page-section process-section">
        <div className="section-header">
          <h2 className="section-title">{t.process.title}</h2>
          <span className="section-subtitle">{t.process.subtitle}</span>
        </div>
        
        <div className="process-grid">
          {t.process.steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{index + 1}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="page-section reviews-section">
        <div className="section-header">
          <h2 className="section-title">{t.reviews.title}</h2>
          <span className="section-subtitle">{t.reviews.subtitle}</span>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">{'★'.repeat(review.stars)}</div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">{review.name}</div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="tattoo-btn-primary">
            {t.reviews.cta}
          </a>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="page-section instagram-section">
        <div className="section-header">
          <h2 className="section-title">{t.instagram.title}</h2>
          <span className="section-subtitle">{t.instagram.subtitle}</span>
        </div>
        
        <div className="instagram-grid">
          {[
            pepperPost1,
            pepperPost2,
            pepperPost3,
            pepperPost4
          ].map((src, i) => (
            <div key={i} className="instagram-item">
              <img src={src} alt={`Instagram post ${i + 1}`} />
              <div className="instagram-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://www.instagram.com/pepperinflame_tattoo/" target="_blank" rel="noreferrer" className="tattoo-btn-primary">
            {t.instagram.cta}
          </a>
        </div>
      </section>

      {/* Ready to Start */}
      <section className="ready-section" style={{ backgroundImage: `url(${pepperImage1})` }}>
        <h2 className="section-title">{t.ready.title}</h2>
        <p className="ready-subtitle">{t.ready.subtitle}</p>
        <Link to="/tattoo/book" className="tattoo-btn-accent" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
          {t.ready.cta}
        </Link>
      </section>
    </>
  );
};

export default TattooHome;
