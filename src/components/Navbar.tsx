import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const isHome = location.pathname === "/";

  return (
    // <nav className=" text-[#d30e00] p-4 font-semibold absolute top-0 left-0 w-full z-10 bg-transparent">
    <nav className="sticky top-0 left-0 lg:top-auto z-50 w-full bg-transparent font-bold p-5">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            {isHome ? (
              <img src="DevsiddhiLogo.png" alt="Home Logo" className="w-45" />
            ) : (
              <img
                src="Devsiddhi-Logo-(2).png"
                alt="Default Logo"
                className="w-45"
              />
            )}
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <span className="text-2xl">☰</span>
        </button>

        <ul
          className={`lg:flex space-x-8 text-[#B68842] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-[#D12023]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#D12023]">
              About
            </Link>
          </li>
          <li>
            <Link to="/count" className="hover:text-[#D12023]">
              Count
            </Link>
          </li>
          <li>
            <Link to="/portfolio-upcoming" className="hover:text-[#D12023]">
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-[#D12023]">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="post" className="hover:text-[#D12023]">
              Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
