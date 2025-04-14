import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className=" text-[#d30e00] p-4 font-semibold absolute top-0 left-0 w-full z-10 bg-transparent">
    <nav className="sticky top-0 left-0 lg:top-auto z-50 w-full bg-transparent font-bold p-5">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="Devsiddhi-Logo-(2).png" alt="" className="w-45" />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <span className="text-2xl">☰</span>
        </button>

        <ul
          className={`lg:flex space-x-8 text-[#964B00] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-[#FFD700]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFD700]">
              About
            </Link>
          </li>
          <li>
            <Link to="/count" className="hover:text-[#FFD700]">
              Count
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-[#FFD700]">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="post" className="hover:text-[#FFD700]">
              Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
