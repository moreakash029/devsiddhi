// src/components/Navbar.tsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToPage = (pageIndex: number) => {
    const container = document.querySelector(".overflow-x-auto") as HTMLElement;
    if (container) {
      container.scrollTo({
        left: window.innerWidth * pageIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className='sticky top-0 left-0 lg:top-auto z-50 w-full bg-transparent font-bold text-black p-5'>

    {/* <nav className="sticky top-0 left-0 z-50 w-full bg-transparent shadow-md font-bold text-black p-4"> */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="/DevsiddhiLogo.png" alt="Logo" className="w-40" />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <span className="text-2xl">☰</span>
        </button>

        <ul className={`lg:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <li>
            <button
              onClick={() => scrollToPage(0)}
              className="hover:text-yellow-400"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToPage(1)}
              className="hover:text-yellow-400"
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
