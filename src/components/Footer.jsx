import '../index.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <>
      <footer className="w-full bg-footerColor border-t-[1px] border-subheadingColor py-5">
        <div className="container flex justify-between mx-auto">
          <div className="flex flex-col">
            <h3 className="text-heading3Size font-bold mb-1">Stránky</h3>
            <Link to="/" className="my-1">
              <p className="text-paragraphSize text-black underline font-regular">
                Úvod
              </p>
            </Link>
            <Link to="/o-nas" className="my-1">
              <p className="text-paragraphSize text-black underline font-regular">
                O nás
              </p>
            </Link>
            <Link to="/adopce" className="my-1">
              <p className="text-paragraphSize text-black underline font-regular">
                Adopce
              </p>
            </Link>
            <Link to="/materialy" className="my-1">
              <p className="text-paragraphSize text-black underline font-regular">
                Materiály
              </p>
            </Link>
            <Link to="/kontakt" className="my-1">
              <p className="text-paragraphSize text-black underline font-regular">
                Kontakt
              </p>
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-heading3Size font-bold mb-1">Sociální sítě</h3>
            <div className="flex items-center">
              <a href="https://instagram.com" target="_blank" className="me-2">
                <FaInstagram className="text-footerIconSize" />
              </a>
              <a href="https://facebook.com" target="_blank" className="me-2">
                <FaFacebook className="text-footerIconSize" />
              </a>
              <a href="https://youtube.com" target="_blank" className="me-2">
                <FaYoutube className="text-footerIconSize" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-heading3Size font-bold mb-1">Dokumenty</h3>
            <Link to="/dokumenty/GDPR" className="my-1">
              <p className="text-paragraphSize text-black underline font-regular">
                Kontakt
              </p>
            </Link>
            <Link to="/dokumenty/vyrocni-zpravy" className="my-1">
              <p className="text-paragraphSize text-black underline font-regular">
                Výroční zprávy
              </p>
            </Link>
            <Link to="/dokumenty/stanovy" className="my-1">
              <p className="text-paragraphSize text-black underline font-regular">
                Stanovy
              </p>
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-heading3Size font-bold mb-1">Adresa</h3>
            <p className="text-paragraphSize text-black font-regular">
              Moravskoslezský spolek na ochranu zvířat z.s.
            </p>
            <p className="text-paragraphSize text-black font-regular">
              Josefská 867/16
            </p>
            <p className="text-paragraphSize text-black font-regular">
              747 06 Opava
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
