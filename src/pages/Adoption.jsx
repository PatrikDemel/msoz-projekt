// General CSS import
import '../index.css';

// Components import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import animalPlaceholder from '../assets/animal-placeholder.avif';

function Adoption() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Adoption section */}
      <section className="py-10 min-h-[80vh]">
        <div className="container mx-auto">
          <h2 className="text-heading2Size font-bold text-center">
            Zvířata k adopci
          </h2>
          {/* Upper filter container */}
          <div className="flex w-full justify-center mt-3">
            <p className="bg-assetColor text-paragraphSize font-semibold px-7 py-2 rounded-full me-3">
              Pejsci
            </p>
            <p className="bg-assetColor text-paragraphSize font-semibold px-7 py-2 rounded-full">
              Kočičky
            </p>
          </div>
          {/* Animals */}
          <div className="flex flex-wrap gap-8 justify-center mt-10">
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
            {/* Animal */}
            <div className="flex flex-col items-center overflow-hidden w-[30%] md:w-[15%] bg-white shadow-custom rounded-xl">
              <img
                src={animalPlaceholder}
                alt="Obrázek kočičky"
                className="aspect-square object-cover"
              />
              <p className="text-paragraphSize font-semibold text-center py-3">
                Kočička
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Adoption;
