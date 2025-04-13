import { JSX, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Projects";

type Page = {
  path: string;
  component: JSX.Element;
  ref: React.RefObject<HTMLDivElement | null>;
};
import Count from "./pages/Count";
import ContactUs from "./pages/ContactUs";
import Upcoming from "./pages/Upcoming";
import ContactSection from "./pages/ContactSection";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const pages: Page[] = [
    { path: "/", component: <Home />, ref: useRef<HTMLDivElement>(null) },
    { path: "/about", component: <About />, ref: useRef<HTMLDivElement>(null) },
    { path: "/count", component: <Count />, ref: useRef<HTMLDivElement>(null) },
    {
      path: "/projects",
      component: <Portfolio />,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      path: "/projects",
      component: <Upcoming />,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      path: "/projects",
      component: <ContactSection />,
      ref: useRef<HTMLDivElement>(null),
    },

    {
      path: "/contact-us",
      component: <ContactUs />,
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
