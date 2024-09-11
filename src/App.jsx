import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Adoption from './pages/Adoption';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter basename="/msoz">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/adopce" element={<Adoption />} />
          <Route path="/materialy" element={<Resources />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
