import { Outlet } from 'react-router-dom';
import JewelryHeader from '../components/JewelryHeader';
import JewelryFooter from '../components/JewelryFooter';
import '../styles/main.css';

const JewelryLayout = () => {
  return (
    <div className="jewelry-layout">
      <JewelryHeader />
      <main className="jewelry-main">
        <Outlet />
      </main>
      <JewelryFooter />
    </div>
  );
};

export default JewelryLayout;
