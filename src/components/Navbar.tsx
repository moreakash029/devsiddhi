import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className=" text-[#d30e00] p-4 font-semibold absolute top-0 left-0 w-full z-10 bg-transparent">
    <nav className='sticky top-0 left-0 lg:top-auto z-50 w-full bg-transparent font-bold text-black p-5'>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="/DevsiddhiLogo.png" alt="" className='w-45' />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <span className="text-2xl">☰</span>
        </button>

        <ul className={`lg:flex space-x-4 text-[#ffffff] ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link to="/" className="hover:text-[#cf9797]">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#AB5B55]">About</Link>
          </li>
          <li>
            <Link to="/count" className="hover:text-[#AB5B55]">Count</Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-[#AB5B55]">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
