// General CSS import
import '../index.css';

// Components import
import { Routes, Route } from 'react-router-dom';
import GDPR from './GDPR';
import VyrocniZpravy from './VyrocniZpravy';
import Stanovy from './Stanovy';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Documents() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/GDPR" element={<GDPR />} />
        <Route path="/vyrocni-zpravy" element={<VyrocniZpravy />} />
        <Route path="/stanovy" element={<Stanovy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Documents;
