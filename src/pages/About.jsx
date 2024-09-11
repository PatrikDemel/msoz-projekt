// General CSS import
import '../index.css';

// Components import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img from '../assets/about-hero-img.avif';
import teamPlaceholder from '../assets/team-placeholder.avif';

function About() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* About section */}
      <section>
        <div className="container flex flex-col items-center mx-auto py-10">
          <h2 className="text-heading2Size font-bold text-center">O nás</h2>
          {/* Left side */}
          <div className="flex flex-col md:flex-row justify-between mt-10">
            <div className="w-full md:w-3/5">
              <p className="text-paragraphSize text-subheadingColor mb-5">
                Snažíme se pomáhat v případech týraní zvířat či zanedbání péče,
                a to většinou na základě informací těch z Vás, kteří si všímáte,
                co se děje ve Vašem okolí. Podáváme podněty k šetření případů na
                příslušné kompetentní orgány, případně poskytujeme rady nebo
                doporučení ke konkrétním případům.
              </p>

              <p className="text-paragraphSize text-subheadingColor mb-5">
                Zasazujeme se o změnu legislativy (konkrétní zákony, předpisy,
                vyhlášky a nařízení týkající se ochrany zvířat), která ovlivňuje
                každodenní život zvířat. Chceme, aby zvířata přestala být
                vnímána jako věci, se kterými mohou jejich majitelé nakládat dle
                své libosti a bez větších postihů.
              </p>
              <p className="text-paragraphSize text-subheadingColor mb-5">
                Pomáháme s péčí a umisťováním opuštěných zvířat do nových
                domovů, a to prostřednictvím inzerce v různých médiích a
                spoluprací s podobně zaměřenými organizacemi. Do budoucna chceme
                vytvořit fungující síť pěstounských rodin, které by byly pro
                tato zvířata bez domova jakousi přestupní stanicí.
              </p>
              <p className="text-paragraphSize text-subheadingColor">
                Peníze spolku využíváme k financování akutních případů.
                Zjišťujeme situaci a monitorujeme podmínky v útulcích našeho
                regionu. V krajních případech informujeme o nesrovnalostech a
                tlačíme zodpovědné orgány ke sjednání nápravy.
              </p>
            </div>
            {/* Right side */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
              <img
                src={img}
                alt="Obrázek šťastného pejska"
                className="w-[80%] sm:w-[60%] md:w-[90%] rounded-xl aspect-square object-cover lg:aspect-auto mt-10 md:mt-0"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Team section */}
      <section className="bg-darkerSectionColor py-10">
        <div className="container mx-auto">
          <h2 className="text-heading2Size font-bold text-center">Náš tým</h2>
          {/* Team container */}
          <div className="flex w-full flex-wrap justify-center gap-10 mt-8">
            {/* Person */}
            <div className="flex flex-col w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl overflow-hidden">
              <img
                src={teamPlaceholder}
                alt="Jméno a příjmení"
                className="aspect-square object-cover"
              />
              <h3 className="bg-white py-3 text-paragraphSize font-semibold text-center">
                Jméno a příjmení
              </h3>
            </div>
            {/* Person */}
            <div className="flex flex-col w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl overflow-hidden">
              <img
                src={teamPlaceholder}
                alt="Jméno a příjmení"
                className="aspect-square object-cover"
              />
              <h3 className="bg-white py-3 text-paragraphSize font-semibold text-center">
                Jméno a příjmení
              </h3>
            </div>
            {/* Person */}
            <div className="flex flex-col w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl overflow-hidden">
              <img
                src={teamPlaceholder}
                alt="Jméno a příjmení"
                className="aspect-square object-cover"
              />
              <h3 className="bg-white py-3 text-paragraphSize font-semibold text-center">
                Jméno a příjmení
              </h3>
            </div>
            {/* Person */}
            <div className="flex flex-col w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl overflow-hidden">
              <img
                src={teamPlaceholder}
                alt="Jméno a příjmení"
                className="aspect-square object-cover"
              />
              <h3 className="bg-white py-3 text-paragraphSize font-semibold text-center">
                Jméno a příjmení
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default About;
