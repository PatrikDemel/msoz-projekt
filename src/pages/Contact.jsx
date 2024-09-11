// General CSS import
import '../index.css';

// Components import
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  // UseState functions
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Contact section */}
      <section className="py-10 min-h-[70vh]">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-heading2Size font-bold">Kontakt</h2>
          <form className="bg-white shadow-custom w-[90%] md:w-[60%] py-10 mt-5 flex flex-col items-center">
            <input
              type="text"
              placeholder="Jméno a příjmení..."
              className="border-b-[1px] border-b-black w-[80%] outline-none py-1 my-2"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email..."
              className="border-b-[1px] border-b-black w-[80%] outline-none py-1 my-2"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="h-40 resize-none w-[80%] outline-none border-b-black border-b-[1px] py-1 my-2"
              placeholder="Zpráva..."
              required
              onChange={(e) => setMessage(e.target.value)}></textarea>
            <input
              type="submit"
              className="text-paragraphSize font-bold border-mainColor border-[3px] rounded-full px-10 py-2 mt-5 cursor-pointer hover:border-mainHoverColor duration-200 transition-all"
              value="Odeslat formulář"
            />
          </form>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Contact;
