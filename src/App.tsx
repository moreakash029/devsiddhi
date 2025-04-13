import { JSX, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"; // Example third page

type Page = {
  path: string;
  component: JSX.Element;
  ref: React.RefObject<HTMLDivElement | null>;
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Define all pages here
  const pages: Page[] = [
    { path: "/", component: <Home />, ref: useRef<HTMLDivElement>(null) },
    { path: "/about", component: <About />, ref: useRef<HTMLDivElement>(null) },
    {
      path: "/contact",
      component: <Contact />,
      ref: useRef<HTMLDivElement>(null),
    },
  ];

  useLayoutEffect(() => {
    const currentPage = pages.find((page) => page.path === location.pathname);
    currentPage?.ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [location.pathname]);

  const handleScroll = () => {
    const scrollLeft = scrollContainerRef.current?.scrollLeft || 0;
    const width = window.innerWidth;

    const index = Math.round(scrollLeft / width);
    const path = pages[index]?.path;

    if (path && path !== location.pathname) {
      navigate(path, { replace: true });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className=" overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory flex custom-scrollbar"
      >
        {pages.map(({ component, ref, path }) => (
          <div
            key={path}
            ref={ref}
            className="w-screen flex-shrink-0 snap-start"
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
