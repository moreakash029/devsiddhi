import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CustomScrollbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/count", name: "Count" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/contact-us", name: "Contact Us" },
    { path: "/post", name: "Post" },
  ];

  const touchStartY = useRef(0);

  useEffect(() => {
    const currentIndex = routes.findIndex(
      (route) => route.path === location.pathname
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  const scrollToRoute = (index: number) => {
    if (isScrolling || index < 0 || index >= routes.length) return;

    setIsScrolling(true);
    setActiveIndex(index);
    navigate(routes[index].path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      if (e.deltaY > 0) {
        scrollToRoute(activeIndex + 1); // Scroll down
      } else if (e.deltaY < 0) {
        scrollToRoute(activeIndex - 1); // Scroll up
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          scrollToRoute(activeIndex + 1); // Swipe up → Next
        } else {
          scrollToRoute(activeIndex - 1); // Swipe down → Previous
        }
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isScrolling]);

  return (
    <div className="fixed bottom-[8%] left-1/2 transform -translate-x-1/2 z-50 w-2/3 md:w-1/3 h-2 bg-gray-800 bg-opacity-60 rounded-full">
      <div className="flex justify-between absolute w-full -top-3 px-1"></div>

      <div
        className="h-full bg-[#B68842] rounded-full transition-all duration-500"
        style={{
          width: `${100 / routes.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </div>
  );
};

export default CustomScrollbar;
