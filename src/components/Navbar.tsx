import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const scrollToPage = (pageIndex: number) => {
    const container = document.querySelector(".overflow-x-auto") as HTMLElement;
    if (container) {
      container.scrollTo({
        left: window.innerWidth * pageIndex,
        behavior: "smooth",
      });
      setActivePageIndex(pageIndex);
    }
  };

  // Update active page based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".overflow-x-auto") as HTMLElement;
      if (container) {
        const scrollPosition = container.scrollLeft;
        const windowWidth = window.innerWidth;
        const currentPageIndex = Math.round(scrollPosition / windowWidth);
        setActivePageIndex(currentPageIndex);
      }
    };

    const container = document.querySelector(".overflow-x-auto") as HTMLElement;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const getNavItemClass = (pageIndex: number) => {
    return pageIndex === activePageIndex
      ? "text-yellow-400" // Active tab color
      : "text-white hover:text-yellow-400"; // Default and hover color
  };

  return (
    <nav className="sticky top-0 left-0 lg:top-auto z-50 w-full bg-transparent font-bold text-black p-5">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="/DevsiddhiLogo.png" alt="Logo" className="w-40" />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <span className="text-2xl">☰</span>
        </button>

        <ul
          className={`lg:flex space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <button
              onClick={() => scrollToPage(0)}
              className={getNavItemClass(0)}
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToPage(1)}
              className={getNavItemClass(1)}
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToPage(2)}
              className={getNavItemClass(2)}
            >
              Count
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToPage(3)}
              className={getNavItemClass(3)}
            >
              Projects
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToPage(4)}
              className={getNavItemClass(4)}
            >
              Contact us
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToPage(5)}
              className={getNavItemClass(5)}
            >
              Post
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}