import '../index.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-darkerSectionColor pt-5">
        <div className="container mx-auto flex justify-between">
          <div className="flex flex-col w-[55%] mt-20">
            <p className="text-subheadingColor text-paragraphSize font-bold">
              Nemůžeš zachránit všechny...
            </p>
            <h1 className="text-heading1Size font-bold -mt-2">
              Ale můžeš dát <span className="text-mainColor">domov </span>
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
                <div className="flex items-center ">
                  <FaArrowRight />
                  <p className="font-bold ms-2 text-paragraphSize">
                    Dozvědět se více
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-end w-[45%]">
            <img
              src="/src/assets/hero-img.png"
              alt="Obrázek pejska"
              className="w-3/4"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
