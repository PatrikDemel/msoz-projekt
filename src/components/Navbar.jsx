import '../index.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="w-full border-b-subheadingColor border-b-[1px] py-2">
        <div className="container flex justify-between mx-auto items-center">
          <Link to="/" className="w-24">
            <img src={logo} alt="Logo" className="w-full" />
          </Link>
          <div className="flex">
            <Link to="/" className="px-3">
              <p className="text-navbarSize text-black font-semibold hover:text-mainColor transition-all duration-200">
                Úvod
              </p>
            </Link>
            <Link to="/o-nas" className="px-3">
              <p className="text-navbarSize text-black font-semibold hover:text-mainColor transition-all duration-200">
                O nás
              </p>
            </Link>
            <Link to="/adopce" className="px-3">
              <p className="text-navbarSize text-black font-semibold hover:text-mainColor transition-all duration-200">
                Adopce
              </p>
            </Link>
            <Link to="/materialy" className="px-3">
              <p className="text-navbarSize text-black font-semibold hover:text-mainColor transition-all duration-200">
                Materiály
              </p>
            </Link>
            <Link to="/kontakt" className="px-3">
              <p className="text-navbarSize text-black font-semibold hover:text-mainColor transition-all duration-200">
                Kontakt
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
