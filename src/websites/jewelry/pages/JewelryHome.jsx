import '../styles/home.css';

const JewelryHome = () => {
  return (
    <div className="jewelry-home">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-video-container">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/aryavideo.webm" type="video/webm" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">ARYA</h1>
          <p className="hero-tagline">Unici Distributori Europei</p>
          <p className="hero-location">
            <svg className="location-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Treviso
          </p>
          <a 
            href="https://maps.google.com/?q=Treviso,Italy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-cta"
          >
            Vieni a Trovarci
          </a>
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">Chi Siamo</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-placeholder">
                {/* Placeholder per foto gioielleria */}
              </div>
            </div>
            <div className="about-text">
              <p>
                Arya non è solo una gioielleria, è un'esperienza di lusso autentico. 
                Da oltre trent'anni siamo gli unici distributori europei di creazioni esclusive 
                che incarnano eleganza senza tempo e maestria artigianale.
              </p>
              <p>
                Ogni gioiello che presentiamo racconta una storia di eccellenza, selezionato 
                con cura per soddisfare i clienti più esigenti. La nostra missione è offrire 
                non solo un prodotto, ma un'emozione che dura per sempre.
              </p>
              <p>
                Nel cuore di Treviso, vi accogliamo in uno spazio dove tradizione e modernità 
                si fondono, dove ogni visita diventa un momento speciale dedicato a voi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selezione Gioielli */}
      <section id="collection" className="collection-section">
        <div className="section-container">
          <h2 className="section-title">La Nostra Collezione</h2>
          <p className="collection-subtitle">Ogni pezzo è disponibile in negozio</p>
          
          <div className="collection-grid">
            {/* Anelli */}
            <div className="collection-category">
              <h3>Anelli</h3>
              <div className="collection-items">
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine anello 1 */}
                  </div>
                </div>
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine anello 2 */}
                  </div>
                </div>
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine anello 3 */}
                  </div>
                </div>
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine anello 4 */}
                  </div>
                </div>
              </div>
            </div>

            {/* Collane */}
            <div className="collection-category">
              <h3>Collane</h3>
              <div className="collection-items">
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine collana 1 */}
                  </div>
                </div>
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine collana 2 */}
                  </div>
                </div>
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine collana 3 */}
                  </div>
                </div>
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine collana 4 */}
                  </div>
                </div>
              </div>
            </div>

            {/* Bracciali */}
            <div className="collection-category">
              <h3>Bracciali</h3>
              <div className="collection-items">
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine bracciale 1 */}
                  </div>
                </div>
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine bracciale 2 */}
                  </div>
                </div>
              </div>
            </div>

            {/* Orologi */}
            <div className="collection-category">
              <h3>Orologi</h3>
              <div className="collection-items">
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine orologio 1 */}
                  </div>
                </div>
                <div className="collection-item">
                  <div className="item-image-placeholder">
                    {/* Placeholder per immagine orologio 2 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="services" className="services-section">
        <div className="section-container">
          <h2 className="section-title">I Nostri Servizi</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Incisioni Personalizzate</h3>
              <p>Rendi unico il tuo gioiello con incisioni personalizzate di alta precisione</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="8" r="7" strokeWidth="2"/>
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Gioielli su Misura</h3>
              <p>Creazione di gioielli personalizzati seguendo i tuoi desideri e la tua visione</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Valutazioni</h3>
              <p>Perizie professionali per la valutazione accurata dei tuoi gioielli</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Fedi Nuziali</h3>
              <p>Consulenza dedicata per scegliere le fedi perfette per il vostro grande giorno</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Scegliere Noi */}
      <section id="why-us" className="why-us-section">
        <div className="section-container">
          <h2 className="section-title">Perché Scegliere Arya</h2>
          <div className="why-us-grid">
            <div className="why-us-item">
              <span className="check-icon">✓</span>
              <h3>Oltre 30 anni di esperienza</h3>
              <p>Tradizione e competenza nel settore della gioielleria di lusso</p>
            </div>
            <div className="why-us-item">
              <span className="check-icon">✓</span>
              <h3>Distribuzioni esclusive</h3>
              <p>Unici distributori europei di collezioni prestigiose</p>
            </div>
            <div className="why-us-item">
              <span className="check-icon">✓</span>
              <h3>Assistenza post-vendita</h3>
              <p>Ti seguiamo anche dopo l'acquisto con servizi dedicati</p>
            </div>
            <div className="why-us-item">
              <span className="check-icon">✓</span>
              <h3>Consulenza personalizzata</h3>
              <p>Un approccio su misura per ogni cliente e ogni occasione</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Gioielleria */}
      <section id="gallery" className="gallery-section">
        <div className="section-container">
          <h2 className="section-title">Il Nostro Atelier</h2>
          <div className="gallery-grid">
            {/* Foto hero 16:9 */}
            <div className="gallery-item gallery-item-hero">
              <div className="gallery-image-placeholder">
                {/* Placeholder per foto hero negozio */}
              </div>
            </div>
            
            {/* 4 foto quadrate */}
            <div className="gallery-item gallery-item-square">
              <div className="gallery-image-placeholder">
                {/* Placeholder per foto quadrata 1 */}
              </div>
            </div>
            <div className="gallery-item gallery-item-square">
              <div className="gallery-image-placeholder">
                {/* Placeholder per foto quadrata 2 */}
              </div>
            </div>
            <div className="gallery-item gallery-item-square">
              <div className="gallery-image-placeholder">
                {/* Placeholder per foto quadrata 3 */}
              </div>
            </div>
            <div className="gallery-item gallery-item-square">
              <div className="gallery-image-placeholder">
                {/* Placeholder per foto quadrata 4 */}
              </div>
            </div>
            
            {/* Foto panoramica */}
            <div className="gallery-item gallery-item-panoramic">
              <div className="gallery-image-placeholder">
                {/* Placeholder per foto panoramica */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dove Trovarci e Contatti Unificati */}
      <section id="contact" className="contact-location-section">
        <div className="section-container">
          <h2 className="section-title">Vieni a Trovarci</h2>
          <div className="contact-location-content">
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.8359!2d12.2433!3d45.6669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQwJzAwLjgiTiAxMsKwMTQnMzYuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Arya Gioielli"
              ></iframe>
            </div>

            <div className="contact-location-info">
              {/* Indirizzo e Orari affiancati */}
              <div className="info-row">
                <div className="info-block">
                  <h3>Indirizzo</h3>
                  <p className="info-detail">Via Roma 123</p>
                  <p className="info-detail">31100 Treviso (TV)</p>
                </div>

                <div className="info-block">
                  <h3>Orari</h3>
                  <p className="info-detail">Lun - Ven: 9:00 - 12:30</p>
                  <p className="info-detail">15:30 - 19:30</p>
                  <p className="info-detail">Sab: 9:00 - 19:00</p>
                  <p className="info-detail">Dom: Chiuso</p>
                </div>
              </div>

              <div className="info-block">
                <h3>Contatti</h3>
                <div className="contact-buttons">
                  {/* Telefono e WhatsApp affiancati */}
                  <a href="tel:+390422123456" className="contact-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="contact-btn-text">
                      <span className="contact-btn-label">Telefono</span>
                      <span className="contact-btn-value">+39 0422 123456</span>
                    </div>
                  </a>

                  <a href="https://wa.me/390422123456" target="_blank" rel="noopener noreferrer" className="contact-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <div className="contact-btn-text">
                      <span className="contact-btn-label">WhatsApp</span>
                      <span className="contact-btn-value">+39 0422 123456</span>
                    </div>
                  </a>

                  {/* Email full width sotto */}
                  <a href="mailto:info@aryagioielli.it" className="contact-btn full-width">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="contact-btn-text">
                      <span className="contact-btn-label">Email</span>
                      <span className="contact-btn-value">info@aryagioielli.it</span>
                    </div>
                  </a>
                </div>
                
                <a 
                  href="https://maps.google.com/?q=Via+Roma+123,+Treviso,+Italy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="maps-cta-btn"
                >
                  Apri su Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JewelryHome;
