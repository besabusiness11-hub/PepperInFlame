import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      book: 'Book',
      call: 'Call',
      inspiration: 'Inspiration',
      services: 'Services',
      faq: 'FAQ',
      home: 'Home'
    },
    hero: {
      title: 'Pepper in Flame',
      subtitle: 'Where Art Meets Skin',
      tagline: 'Premium Tattoo Studio • Custom Artistry • Award-Winning Artists',
      cta: 'Start Your Journey'
    },
    stats: {
      years: '10+ Years',
      yearsDesc: 'Experience',
      clients: '5000+',
      clientsDesc: 'Happy Clients',
      artists: '3',
      artistsDesc: 'Master Artists',
      rating: '5.0',
      ratingDesc: 'Google Rating'
    },
    whyChoose: {
      title: 'Why Choose Pepper in Flame',
      subtitle: 'Excellence in Every Detail',
      items: [
        { title: 'Master Artists', desc: 'Our award-winning artists bring years of expertise and unique artistic vision to every piece.' },
        { title: 'Premium Safety', desc: 'Hospital-grade sterilization and top-tier equipment ensure your complete safety and peace of mind.' },
        { title: 'Custom Artistry', desc: 'Every tattoo is a bespoke masterpiece, designed exclusively for you through close collaboration.' },
        { title: 'Luxury Experience', desc: 'Private studio sessions in a refined, comfortable atmosphere designed for your relaxation.' }
      ]
    },
    process: {
      title: 'Your Journey With Us',
      subtitle: 'Four Simple Steps',
      steps: [
        { title: 'Consultation', desc: 'Share your vision in a free consultation. We discuss ideas, placement, and style.' },
        { title: 'Design', desc: 'Our artists create custom designs tailored specifically to you and your story.' },
        { title: 'Session', desc: 'Experience professional tattooing in our premium studio with complete comfort.' },
        { title: 'Aftercare', desc: 'Receive detailed care instructions and lifetime support for optimal healing.' }
      ]
    },
    reviews: {
      title: 'Client Stories',
      subtitle: 'Rated 5.0 on Google',
      cta: 'Read More Reviews',
      quote1: 'Absolutely incredible experience from start to finish. Marco brought my vision to life beyond what I imagined. The studio is pristine and the attention to detail is unmatched.',
      author1: 'Sarah Mitchell',
      quote2: 'Elena is a true artist. My sleeve is a masterpiece. The professionalism and care throughout the entire process made this such a positive experience.',
      author2: 'James Rodriguez',
      quote3: 'Best tattoo studio in the city, hands down. Luca\'s traditional work is exceptional. Clean, professional, and the result speaks for itself.',
      author3: 'Maria Bianchi'
    },
    instagram: {
      title: 'Follow Our Art',
      subtitle: '@pepperinflame',
      cta: 'View on Instagram'
    },
    ready: {
      title: 'Ready to Start Your Journey?',
      subtitle: 'Book a free consultation today and bring your vision to life',
      cta: 'Book Now'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Pricing & Booking',
      book: 'Book Service',
      items: [
        { name: 'Small Tattoo', desc: 'Minimalist designs, symbols, or small text. Approx 5x5cm.', price: '€80 - €150' },
        { name: 'Medium Tattoo', desc: 'Detailed pieces, portraits, or larger compositions. Approx 15x15cm.', price: '€200 - €400' },
        { name: 'Full Sleeve', desc: 'Complete arm coverage. Requires multiple sessions.', price: '€1200+' },
        { name: 'Cover Up', desc: 'Expert concealment of old or unwanted tattoos.', price: 'Consultation' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Common Questions',
      items: [
        { 
          question: 'Do I need an appointment?', 
          answer: 'Yes, we work primarily by appointment to ensure each client gets the attention they deserve. Walk-ins are welcome subject to availability, but we highly recommend booking in advance.' 
        },
        { 
          question: 'Is it painful?', 
          answer: 'Pain varies by person and placement. Our artists are experts in making the experience as comfortable as possible. We can also discuss numbing options for longer sessions.' 
        },
        { 
          question: 'How do I care for my new tattoo?', 
          answer: 'We will provide you with detailed aftercare instructions and a kit to ensure your tattoo heals perfectly. Generally, keep it clean, moisturized, and out of the sun for the first few weeks.' 
        },
        {
          question: 'What is the minimum age?',
          answer: 'You must be at least 18 years old with a valid photo ID. We do not tattoo minors, even with parental consent.'
        },
        {
          question: 'Can I bring a friend?',
          answer: 'To maintain a sterile and focused environment, we ask that you come alone to your appointment unless you require assistance.'
        }
      ]
    },
    inspiration: {
      title: 'Inspiration',
      subtitle: 'Browse by Artist',
      allWorks: 'All Works',
      bookArtist: 'Book Artist',
      artistSpecialist: 'Specialist',
      experience: 'Experience',
      tattoos: 'Tattoos'
    },
    artists: {
      marco: {
        name: 'Marco',
        style: 'Realism',
        bio: 'Specializing in hyper-realistic portraits and nature scenes. Over 8 years of experience creating stunning photorealistic tattoos.',
        experience: '8+ Years',
        tattoos: '500+'
      },
      elena: {
        name: 'Elena',
        style: 'Watercolor',
        bio: 'Master of vibrant watercolor techniques and abstract designs. Known for creating ethereal, flowing pieces with brilliant color.',
        experience: '6+ Years',
        tattoos: '400+'
      },
      luca: {
        name: 'Luca',
        style: 'Traditional',
        bio: 'Classic American and Japanese traditional tattoos. Bold lines, solid colors, and timeless designs are his signature.',
        experience: '10+ Years',
        tattoos: '800+'
      }
    },
    footer: {
      tagline: 'Premium tattoo studio delivering exceptional artistry and unforgettable experiences since 2014.',
      monFri: 'Mon - Fri: 10:00 - 20:00',
      saturday: 'Saturday: 11:00 - 19:00',
      sunday: 'Sunday: By Appointment',
      address1: '123 Art Street',
      address2: 'Downtown District',
      address3: 'City, 12345',
      connect: 'Connect',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.'
    },
    contact: {
      hours: 'Opening Hours',
      location: 'Location',
      phone: 'Phone',
      email: 'Email'
    }
  },
  it: {
    nav: {
      book: 'Prenota',
      call: 'Chiama',
      inspiration: 'Ispirazione',
      services: 'Servizi',
      faq: 'FAQ',
      home: 'Home'
    },
    hero: {
      title: 'Pepper in Flame',
      subtitle: 'Dove l\'Arte Incontra la Pelle',
      tagline: 'Studio Tatuaggi Premium • Arte Personalizzata • Artisti Premiati',
      cta: 'Inizia il Tuo Viaggio'
    },
    stats: {
      years: '10+ Anni',
      yearsDesc: 'di Esperienza',
      clients: '5000+',
      clientsDesc: 'Clienti Felici',
      artists: '3',
      artistsDesc: 'Artisti Master',
      rating: '5.0',
      ratingDesc: 'Valutazione Google'
    },
    whyChoose: {
      title: 'Perché Scegliere Pepper in Flame',
      subtitle: 'Eccellenza in Ogni Dettaglio',
      items: [
        { title: 'Artisti Master', desc: 'I nostri artisti premiati portano anni di esperienza e visione artistica unica in ogni opera.' },
        { title: 'Sicurezza Premium', desc: 'Sterilizzazione di grado ospedaliero e attrezzature di prima classe garantiscono la tua completa sicurezza.' },
        { title: 'Arte Personalizzata', desc: 'Ogni tatuaggio è un capolavoro su misura, progettato esclusivamente per te attraverso stretta collaborazione.' },
        { title: 'Esperienza Lusso', desc: 'Sessioni private in uno studio raffinato e confortevole progettato per il tuo relax.' }
      ]
    },
    process: {
      title: 'Il Tuo Viaggio Con Noi',
      subtitle: 'Quattro Semplici Passi',
      steps: [
        { title: 'Consultazione', desc: 'Condividi la tua visione in una consultazione gratuita. Discutiamo idee, posizionamento e stile.' },
        { title: 'Design', desc: 'I nostri artisti creano design personalizzati su misura per te e la tua storia.' },
        { title: 'Sessione', desc: 'Vivi un tatuaggio professionale nel nostro studio premium con completo comfort.' },
        { title: 'Cura', desc: 'Ricevi istruzioni dettagliate e supporto a vita per una guarigione ottimale.' }
      ]
    },
    reviews: {
      title: 'Storie dei Clienti',
      subtitle: 'Valutato 5.0 su Google',
      cta: 'Leggi Altre Recensioni',
      quote1: 'Esperienza assolutamente incredibile dall\'inizio alla fine. Marco ha dato vita alla mia visione oltre ogni aspettativa. Lo studio è impeccabile e l\'attenzione ai dettagli è impareggiabile.',
      author1: 'Sarah Mitchell',
      quote2: 'Elena è una vera artista. La mia manica è un capolavoro. La professionalità e la cura durante tutto il processo hanno reso questa esperienza così positiva.',
      author2: 'James Rodriguez',
      quote3: 'Il miglior studio di tatuaggi della città, senza dubbio. Il lavoro tradizionale di Luca è eccezionale. Pulito, professionale e il risultato parla da sé.',
      author3: 'Maria Bianchi'
    },
    instagram: {
      title: 'Segui la Nostra Arte',
      subtitle: '@pepperinflame',
      cta: 'Vedi su Instagram'
    },
    ready: {
      title: 'Pronto a Iniziare il Tuo Viaggio?',
      subtitle: 'Prenota una consultazione gratuita oggi e dai vita alla tua visione',
      cta: 'Prenota Ora'
    },
    services: {
      title: 'I Nostri Servizi',
      subtitle: 'Prezzi e Prenotazioni',
      book: 'Prenota Servizio',
      items: [
        { name: 'Tatuaggio Piccolo', desc: 'Design minimalisti, simboli o piccole scritte. Circa 5x5cm.', price: '€80 - €150' },
        { name: 'Tatuaggio Medio', desc: 'Pezzi dettagliati, ritratti o composizioni più grandi. Circa 15x15cm.', price: '€200 - €400' },
        { name: 'Manica Completa', desc: 'Copertura completa del braccio. Richiede sessioni multiple.', price: '€1200+' },
        { name: 'Cover Up', desc: 'Copertura esperta di tatuaggi vecchi o indesiderati.', price: 'Consultazione' }
      ]
    },
    faq: {
      title: 'Domande Frequenti',
      subtitle: 'Domande Comuni',
      items: [
        { 
          question: 'Ho bisogno di un appuntamento?', 
          answer: 'Sì, lavoriamo principalmente su appuntamento per garantire che ogni cliente riceva l\'attenzione che merita. I clienti senza appuntamento sono benvenuti in base alla disponibilità, ma consigliamo vivamente di prenotare in anticipo.' 
        },
        { 
          question: 'È doloroso?', 
          answer: 'Il dolore varia da persona a persona e in base alla posizione. I nostri artisti sono esperti nel rendere l\'esperienza il più confortevole possibile. Possiamo anche discutere opzioni di anestesia per sessioni più lunghe.' 
        },
        { 
          question: 'Come mi prendo cura del mio nuovo tatuaggio?', 
          answer: 'Ti forniremo istruzioni dettagliate per la cura e un kit per garantire che il tuo tatuaggio guarisca perfettamente. In generale, mantienilo pulito, idratato e lontano dal sole per le prime settimane.' 
        },
        {
          question: 'Qual è l\'età minima?',
          answer: 'Devi avere almeno 18 anni con un documento d\'identità valido con foto. Non tatuiamo minori, nemmeno con il consenso dei genitori.'
        },
        {
          question: 'Posso portare un amico?',
          answer: 'Per mantenere un ambiente sterile e concentrato, chiediamo che tu venga da solo al tuo appuntamento a meno che non richieda assistenza.'
        }
      ]
    },
    inspiration: {
      title: 'Ispirazione',
      subtitle: 'Cerca per Artista',
      allWorks: 'Tutti i Lavori',
      bookArtist: 'Prenota Artista',
      artistSpecialist: 'Specialista',
      experience: 'Esperienza',
      tattoos: 'Tatuaggi'
    },
    artists: {
      marco: {
        name: 'Marco',
        style: 'Realismo',
        bio: 'Specializzato in ritratti iper-realistici e scene naturali. Oltre 8 anni di esperienza nella creazione di tatuaggi fotorealistici straordinari.',
        experience: '8+ Anni',
        tattoos: '500+'
      },
      elena: {
        name: 'Elena',
        style: 'Acquerello',
        bio: 'Maestra delle tecniche ad acquerello vibranti e design astratti. Conosciuta per creare pezzi eterei e fluidi con colori brillanti.',
        experience: '6+ Anni',
        tattoos: '400+'
      },
      luca: {
        name: 'Luca',
        style: 'Tradizionale',
        bio: 'Tatuaggi tradizionali americani e giapponesi classici. Linee audaci, colori solidi e design senza tempo sono la sua firma.',
        experience: '10+ Anni',
        tattoos: '800+'
      }
    },
    footer: {
      tagline: 'Studio di tatuaggi premium che offre arte eccezionale ed esperienze indimenticabili dal 2014.',
      monFri: 'Lun - Ven: 10:00 - 20:00',
      saturday: 'Sabato: 11:00 - 19:00',
      sunday: 'Domenica: Su Appuntamento',
      address1: '123 Art Street',
      address2: 'Quartiere Centro',
      address3: 'Città, 12345',
      connect: 'Connettiti',
      privacy: 'Informativa Privacy',
      terms: 'Termini di Servizio',
      rights: 'Tutti i diritti riservati.'
    },
    contact: {
      hours: 'Orari di Apertura',
      location: 'Posizione',
      phone: 'Telefono',
      email: 'Email'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('it');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'it' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
