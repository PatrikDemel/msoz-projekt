import '../index.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="w-full bg-footerColor border-t-[1px] border-subheadingColor py-5">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between px-5 md:px-0">
        {/* Links section */}
        <div className="flex flex-col mb-12 md:mb-0">
          <h3 className="text-heading3Size font-bold mb-2">Stránky</h3>
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

        {/* Social media section */}
        <div className="flex flex-col mb-12 md:mb-0">
          <h3 className="text-heading3Size font-bold mb-2">Sociální sítě</h3>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-footerIconSize" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className="text-footerIconSize" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaYoutube className="text-footerIconSize" />
            </a>
          </div>
        </div>

        {/* Documents section */}
        <div className="flex flex-col mb-12 md:mb-0">
          <h3 className="text-heading3Size font-bold mb-2">Dokumenty</h3>
          <Link to="/dokumenty/GDPR" className="my-1">
            <p className="text-paragraphSize text-black underline font-regular">
              GDPR
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

        {/* Address section */}
        <div className="flex flex-col">
          <h3 className="text-heading3Size font-bold mb-2">Adresa</h3>
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
      <div className="container mx-auto flex justify-center border-t-subheadingColor border-t-[1px] pt-3 mt-20 pb-10">
        <p className="text-[0.9rem] text-center">
          &copy;2024 - Tento web vytvořili Patrik Demel, Vojtěch Adam, Lukáš Hon
          a Šimon Večerek
        </p>
      </div>
    </footer>
  );
}

export default Footer;
