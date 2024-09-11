// General CSS import
import '../index.css';

// Components import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import articlePlaceholder from '../assets/article-placeholder.avif';

function Resources() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Resources section */}
      <section className="py-10 px-2">
        <div className="container mx-auto">
          <h2 className="text-center text-heading2Size font-bold mb-5">
            Materiály
          </h2>
          {/* Article */}
          <div className="flex w-[100%] md:w-[70%] mx-auto border-[1px] border-subheadingColor gap-x-4 items-stratch mb-5">
            <img
              src={articlePlaceholder}
              alt="Náhledový obrázek článku"
              className="w-[20%] object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-heading3Size font-bold mt-3 mb-1">
                Co dělat, když si pořídím psa
              </h3>
              <p className="text-paragraphSize text-subheadingColor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Quisque tincidunt scelerisque libero. Praesent dapibus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Cum sociis natoque penatibus et
                magnis...
              </p>
            </div>
          </div>
          {/* Article */}
          <div className="flex w-[100%] md:w-[70%] mx-auto border-[1px] border-subheadingColor gap-x-4 items-stratch mb-5">
            <img
              src={articlePlaceholder}
              alt="Náhledový obrázek článku"
              className="w-[20%] object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-heading3Size font-bold mt-3 mb-1">
                Co dělat, když si pořídím psa
              </h3>
              <p className="text-paragraphSize text-subheadingColor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Quisque tincidunt scelerisque libero. Praesent dapibus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Cum sociis natoque penatibus et
                magnis...
              </p>
            </div>
          </div>
          {/* Article */}
          <div className="flex w-[100%] md:w-[70%] mx-auto border-[1px] border-subheadingColor gap-x-4 items-stratch mb-5">
            <img
              src={articlePlaceholder}
              alt="Náhledový obrázek článku"
              className="w-[20%] object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-heading3Size font-bold mt-3 mb-1">
                Co dělat, když si pořídím psa
              </h3>
              <p className="text-paragraphSize text-subheadingColor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Quisque tincidunt scelerisque libero. Praesent dapibus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Cum sociis natoque penatibus et
                magnis...
              </p>
            </div>
          </div>
          {/* Article */}
          <div className="flex w-[100%] md:w-[70%] mx-auto border-[1px] border-subheadingColor gap-x-4 items-stratch mb-5">
            <img
              src={articlePlaceholder}
              alt="Náhledový obrázek článku"
              className="w-[20%] object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-heading3Size font-bold mt-3 mb-1">
                Co dělat, když si pořídím psa
              </h3>
              <p className="text-paragraphSize text-subheadingColor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Quisque tincidunt scelerisque libero. Praesent dapibus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Cum sociis natoque penatibus et
                magnis...
              </p>
            </div>
          </div>
          {/* Article */}
          <div className="flex w-[100%] md:w-[70%] mx-auto border-[1px] border-subheadingColor gap-x-4 items-stratch">
            <img
              src={articlePlaceholder}
              alt="Náhledový obrázek článku"
              className="w-[20%] object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-heading3Size font-bold mt-3 mb-1">
                Co dělat, když si pořídím psa
              </h3>
              <p className="text-paragraphSize text-subheadingColor">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Quisque tincidunt scelerisque libero. Praesent dapibus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Cum sociis natoque penatibus et
                magnis...
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

export default Resources;
