import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import '../styles/inspiration.css';
import '../styles/artist.css';
import pepperPost1 from '../../../assets/pepperPost1.jpg'
import pepperPost2 from '../../../assets/pepperPost2.jpg'
import pepperPost3 from '../../../assets/pepperPost3.jpg'
import pepperPost4 from '../../../assets/pepperPost4.jpg'
import pepperPost5 from '../../../assets/pepperPost5.jpg'

const artists = [
  { 
    id: 1, 
    name: 'Marco', 
    style: 'Realism',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    bio: 'Specializing in hyper-realistic portraits and nature scenes. Over 8 years of experience creating stunning photorealistic tattoos.',
    experience: '8+ Years',
    tattoos: '500+'
  },
  { 
    id: 2, 
    name: 'Elena', 
    style: 'Watercolor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    bio: 'Master of vibrant watercolor techniques and abstract designs. Known for creating ethereal, flowing pieces with brilliant color.',
    experience: '6+ Years',
    tattoos: '400+'
  },
  { 
    id: 3, 
    name: 'Luca', 
    style: 'Traditional',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    bio: 'Classic American and Japanese traditional tattoos. Bold lines, solid colors, and timeless designs are his signature.',
    experience: '10+ Years',
    tattoos: '800+'
  }
];

const galleryImages = [
  { id: 1, artistId: 1, artistName: 'Marco', src: pepperPost1 },
  { id: 2, artistId: 2, artistName: 'Elena', src: pepperPost2 },
  { id: 3, artistId: 3, artistName: 'Luca', src: pepperPost3 },
  { id: 4, artistId: 1, artistName: 'Marco', src: pepperPost4 },
  { id: 5, artistId: 2, artistName: 'Elena', src: pepperPost5 }
];

const TattooInspiration = () => {
  const { t } = useLanguage();
  const [selectedArtist, setSelectedArtist] = useState(null);

  const filteredImages = selectedArtist 
    ? galleryImages.filter(img => img.artistId === selectedArtist)
    : galleryImages;

  const selectedArtistData = selectedArtist 
    ? artists.find(a => a.id === selectedArtist)
    : null;

  const getArtistTranslation = (artistName) => {
    const key = artistName.toLowerCase();
    return t.artists[key] || {};
  };

  return (
    <section className="page-section">
      <div className="section-header">
        <h2 className="section-title">{t.inspiration.title}</h2>
        <span className="section-subtitle">{t.inspiration.subtitle}</span>
      </div>

      <div className="inspiration-filters">
        <button 
          className={`filter-btn ${selectedArtist === null ? 'active' : ''}`}
          onClick={() => setSelectedArtist(null)}
        >
          {t.inspiration.allWorks}
        </button>
        {artists.map(artist => (
          <button 
            key={artist.id}
            className={`filter-btn ${selectedArtist === artist.id ? 'active' : ''}`}
            onClick={() => setSelectedArtist(artist.id)}
          >
            {artist.name}
          </button>
        ))}
      </div>

      {selectedArtistData && (() => {
        const artistTrans = getArtistTranslation(selectedArtistData.name);
        return (
          <div className="artist-card">
            <div className="artist-header">
              <img src={selectedArtistData.image} alt={artistTrans.name} className="artist-image" />
              <div className="artist-info">
                <h3 className="artist-name">{artistTrans.name}</h3>
                <p className="artist-specialty">{artistTrans.style} {t.inspiration.artistSpecialist}</p>
                <p className="artist-bio">{artistTrans.bio}</p>
                <div className="artist-stats">
                  <div className="artist-stat">
                    <span className="artist-stat-number">{artistTrans.experience}</span>
                    <span className="artist-stat-label">{t.inspiration.experience}</span>
                  </div>
                  <div className="artist-stat">
                    <span className="artist-stat-number">{artistTrans.tattoos}</span>
                    <span className="artist-stat-label">{t.inspiration.tattoos}</span>
                  </div>
                </div>
                <Link to="/tattoo/book" className="tattoo-btn-accent">
                  {t.inspiration.bookArtist}
                </Link>
              </div>
            </div>
          </div>
        );
      })()}

      <div className="gallery-grid">
        {filteredImages.map(img => (
          <div key={img.id} className="gallery-item">
            <img src={img.src} alt={`Tattoo by ${img.artistName}`} />
            <div className="gallery-overlay">
              <span className="artist-name">{img.artistName}</span>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/tattoo/book" className="tattoo-btn-primary" style={{ fontSize: '0.7rem', padding: '0.5rem 1rem' }}>
                  {t.inspiration.bookArtist}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TattooInspiration;
