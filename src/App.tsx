import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Count from "./pages/Count";
import ContactUs from "./pages/ContactUs";
import Post from "./pages/Post";
import Upcoming from "./pages/Upcoming";
import CustomScrollbar from "./components/CustomScrollbar";

function App() {
  const location = useLocation();
  
  return (
    <div className="relative">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/count" element={<Count />} />
          <Route path="/portfolio" element={<Upcoming />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </AnimatePresence>
      <CustomScrollbar />
    </div>
  );
}

export default App;