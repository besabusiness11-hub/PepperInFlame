import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TattooHeader from '../components/TattooHeader';
import TattooFooter from '../components/TattooFooter';
import '../styles/main.css';

const TattooLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="tattoo-layout">
      <TattooHeader />
      <main className="tattoo-main">
        <Outlet />
      </main>
      <TattooFooter />
    </div>
  );
};

export default TattooLayout;
