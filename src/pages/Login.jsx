// General CSS import
import '../index.css';

// Components import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Contact section */}
      <section className="py-10 min-h-[70vh]">
        <div className="container mx-auto flex flex-col items-center px-16">
          <h2 className="text-heading2Size font-bold">Přihlásit se</h2>
          <form className="bg-white shadow-custom w-[90%] md:w-[60%] py-10 mt-5 flex flex-col items-center">
            <input
              type="text"
              placeholder="Uživatelské jméno..."
              className="border-b-[1px] border-b-black w-[80%] outline-none py-1 my-2"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Heslo..."
              className="border-b-[1px] border-b-black w-[80%] outline-none py-1 my-2"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              className="text-paragraphSize font-bold border-mainColor border-[3px] rounded-full px-10 py-2 mt-5 cursor-pointer hover:border-mainHoverColor duration-200 transition-all"
              value="Přihlásit se"
            />
          </form>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Login;
