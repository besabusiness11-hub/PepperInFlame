import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Landing from './pages/Landing';

// Tattoo Website Imports
import TattooLayout from './websites/tattoo/layouts/TattooLayout';
import TattooHome from './websites/tattoo/pages/TattooHome';
import TattooInspiration from './websites/tattoo/pages/TattooInspiration';
import TattooServices from './websites/tattoo/pages/TattooServices';
import TattooFAQ from './websites/tattoo/pages/TattooFAQ';

// Jewelry Website Imports
import JewelryLayout from './websites/jewelry/layouts/JewelryLayout';
import JewelryHome from './websites/jewelry/pages/JewelryHome';

import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          
          {/* Tattoo Website Routes */}
          <Route path="/tattoo" element={<TattooLayout />}>
            <Route index element={<TattooHome />} />
            <Route path="inspiration" element={<TattooInspiration />} />
            <Route path="services" element={<TattooServices />} />
            <Route path="faq" element={<TattooFAQ />} />
            <Route path="book" element={<div style={{padding: '10rem', textAlign: 'center', color: 'white'}}>Booking System Coming Soon</div>} />
          </Route>

          {/* Jewelry Website Routes */}
          <Route path="/jewelry" element={<JewelryLayout />}>
            <Route index element={<JewelryHome />} />
          </Route>

          {/* Placeholders for other routes */}
          <Route path="/piercing" element={<Landing />} />
          <Route path="/concept" element={<Landing />} />
          <Route path="/events" element={<Landing />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
