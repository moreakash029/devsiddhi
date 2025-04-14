// src/App.jsx
import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Count from "./pages/Count";
import ContactUs from "./pages/ContactUs";
import Post from "./pages/Post";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/count" element={<Count />} />
        <Route path="/portfolio" element={<Upcoming />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/post" element={<Post />} />
      </Routes>

    </div>
  );
}

export default App;
