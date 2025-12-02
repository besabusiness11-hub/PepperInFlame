import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import '../styles/faq.css';

const TattooFAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="page-section">
      <div className="section-header">
        <h2 className="section-title">{t.faq.title}</h2>
        <span className="section-subtitle">{t.faq.subtitle}</span>
      </div>

      <div className="faq-container">
        {t.faq.items.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-content">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TattooFAQ;
