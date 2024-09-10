// General CSS import
import '../index.css';

// Components import
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icons import
import {
  FaArrowRight,
  FaCarSide,
  FaPhone,
  FaPrint,
  FaWalking,
  FaHandHoldingHeart,
  FaSun,
  FaDog,
  FaSuitcase,
} from 'react-icons/fa';
import { FaPumpSoap, FaBowlRice } from 'react-icons/fa6';

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <section className="bg-darkerSectionColor pt-5">
        {/* Responsive container */}
        <div className="container mx-auto flex justify-between">
          {/* Left side */}
          <div className="flex flex-col w-[55%] mt-20">
            <p className="text-subheadingColor text-paragraphSize font-bold">
              Nemůžeš zachránit všechny...
            </p>
            <h1 className="text-heading1Size font-bold -mt-2">
              Ale můžeš dát <span className="text-mainColor">domov</span>{' '}
              jednomu.
            </h1>
            <p className="text-subheadingColor font-semibold mb-10 text-paragraphSize mt-2">
              Snažíme se pomáhat v případech týrání zvířat či zanedbání péče, a
              to většinou na základě informací těch z Vás, kteří si všímáte, co
              se děje ve Vašem okolí. Podáváme podněty k šetření případů na
              příslušné kompetentní orgány, případně poskytujeme rady nebo
              doporučení ke konkrétním případům...
            </p>
            <Link to="/o-nas">
              <div className="py-2 px-14 border-[4px] border-mainColor hover:border-mainHoverColor duration-200 transition-all rounded-full inline-block">
                <div className="flex items-center">
                  <FaArrowRight />
                  <p className="font-bold ms-2 text-paragraphSize">
                    Dozvědět se více
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* Right side */}
          <div className="flex justify-end w-[45%]">
            <img
              src="/src/assets/hero-img.png"
              alt="Obrázek pejska"
              className="w-3/4"
            />
          </div>
        </div>
      </section>

      {/* Donate section */}
      <section>
        {/* Responsive container */}
        <div className="container mx-auto flex flex-col items-center py-10">
          <h2 className="text-heading2Size font-bold">Přispět</h2>
          {/* Boxes container */}
          <div className="flex w-full justify-center mt-7">
            {/* Box */}
            <div className="bg-white flex flex-col items-center py-8 px-20 shadow-custom mx-5">
              <h3 className="text-heading3Size font-bold mb-3">QR kód</h3>
              <img src="/src/assets/qr-placeholder.png" alt="QR kód" />
            </div>
            {/* Box */}
            <div className="bg-white flex flex-col items-center py-8 px-20 shadow-custom mx-5">
              <h3 className="text-heading3Size font-bold mb-3">
                Jednorázová SMS
              </h3>
              <p className="text-paragraphSize font-semibold">DMS MSSOZ 30</p>
              <p className="text-paragraphSize font-semibold">DMS MSSOZ 60</p>
              <p className="text-paragraphSize font-semibold">DMS MSSOZ 90</p>
              <p className="text-paragraphSize font-bold mt-10">
                Telefonní číslo: 87 777
              </p>
            </div>
            {/* Box */}
            <div className="bg-white flex flex-col items-center py-8 px-20 shadow-custom mx-5">
              <h3 className="text-heading3Size font-bold mb-3">Trvalá SMS</h3>
              <p className="text-paragraphSize font-semibold">
                DMS TRV MSSOZ 30
              </p>
              <p className="text-paragraphSize font-semibold">
                DMS TRV MSSOZ 60
              </p>
              <p className="text-paragraphSize font-semibold">
                DMS TRV MSSOZ 90
              </p>
              <p className="text-paragraphSize font-bold mt-10">
                Telefonní číslo: 87 777
              </p>
            </div>
          </div>
          {/* Lower container */}
          <p className="text-paragraphSize mt-10">
            Cena u jednorázové DMS je 30Kč, 60Kč nebo 90Kč...
          </p>
        </div>
      </section>

      {/* Needs section */}
      <section className="bg-darkerSectionColor">
        {/* Responsive container */}
        <div className="container mx-auto flex justify-center gap-x-20 py-10">
          {/* Left side */}
          <div className="flex flex-col items-center w-2/5">
            <h2 className="text-heading2Size font-bold mb-5">
              Koho potřebujeme
            </h2>
            {/* Boxes generating */}
            {[
              {
                icon: FaCarSide,
                title: 'Řidiče',
                description:
                  'Lidé s vlastním autem, co jsou ochotni někam zajet, něco zkontrolovat nebo něco odvézt. Benzín neproplácíme.',
              },
              {
                icon: FaPhone,
                title: 'Obvolávače',
                description:
                  'Někoho, kdo by za nás vyhledával a posílal žádosti o různé garanty nebo dotace.',
              },
              {
                icon: FaPrint,
                title: 'Tiskárníka',
                description:
                  'Někoho, kdo by nám zdarma mohl kopírovat letáčky k propagaci. Spousta lidí totiž nefunguje pouze přes FB.',
              },
              {
                icon: FaWalking,
                title: 'Propagátora',
                description:
                  'Někoho, kdo by byl ochoten obejít zverimexy, veterinární ordinace apod. a poptal se, zda jim mohou nechat naše letáčky.',
              },
              {
                icon: FaHandHoldingHeart,
                title: 'Charitativní spolky',
                description:
                  'Různá zařízení, která by byla ochotna si zřídit tzv. charitativní obchůdek, kde by výtěžek z prodeje šel na náš účet.',
              },
              {
                icon: FaSun,
                title: 'Teréňáka',
                description:
                  'Někoho, kdo je ochotný jít do terénu - navštěvovat případy, kdy nám někdo nahlásí týrání apod., zjistit, jaká je situace a improvizovat na místě.',
              },
              {
                icon: FaDog,
                title: 'Pejskaře',
                description: 'Psí psychology a psí pěstouny pro dočasnou péči.',
              },
            ].map(({ icon: Icon, title, description }) => (
              // Box
              <div
                className="flex bg-white shadow-custom px-4 py-3 my-2 w-full"
                key={title}>
                <div className="flex justify-center me-4">
                  <Icon className="text-mainColor text-[2rem]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-heading3Size font-bold">{title}</h3>
                  <p className="text-paragraphSize text-subheadingColor font-semibold">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center w-2/5">
            <h2 className="text-heading2Size font-bold mb-5">Co potřebujeme</h2>
            {/* Boxes generating */}
            {[
              {
                icon: FaBowlRice,
                title: 'Výživa',
                description:
                  'Kvalitní psí a kočičí granule (v žádném případě ne Propesko, Chappi, Pedigree, ...), to způsobuje zažívací problémy, které by se následně řešili veterinárně. Trainer, Ok Cat, Ok Dog, Felix kapsičky, Calibra, Platinum, Taste of Wild, Nutra Nuggets, Meowing Heads, Magnusson, Farm Fresh, Belcando, Topstein, Nutra Gold, Brit, Acana, Barking Heas, Purizon, Artemis, Orien, Applaws, Granada Pet Natural Taste, Carna4, Sam’s Field, Camilove, Purina Cat Chow. Dále masové psí a kočičí konzervy, kočičí kapsičky a konzervy Felix, jaterní granule a konzervy, ledvinové granule a konzervy, senior granule, krmné oleje, psí a kočičí pamlsky, kloubní výživu, jakékoliv vitamínové doplňky, sušený heřmánek nebo heřmánkový čaj.',
              },
              {
                icon: FaPumpSoap,
                title: 'Čistící prostředky',
                description:
                  'Jakékoliv čistící prostředky, Savo, enzymatické čističe, Biokill, prací prostředky, borová voda, ušní roztoky, Bravecto.',
              },
              {
                icon: FaSuitcase,
                title: 'Vybavení',
                description:
                  'Plastové přepravky (funkční a nerozbité), klec pro štěňata, obojky, vodítka, funkční stříhací strojek, pěkné a čisté pelíšky.',
              },
            ].map(({ icon: Icon, title, description }) => (
              // Box
              <div
                className="flex bg-white shadow-custom px-4 py-3 my-2 w-full"
                key={title}>
                <div className="flex justify-center me-4">
                  <Icon className="text-mainColor text-[2rem]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-heading3Size font-bold">{title}</h3>
                  <p className="text-paragraphSize text-subheadingColor font-semibold">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
