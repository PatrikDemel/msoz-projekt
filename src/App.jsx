import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Adoption from './pages/Adoption';

function App() {
  return (
    <>
      <BrowserRouter basename="/msoz">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/adopce" element={<Adoption />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
