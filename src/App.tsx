// src/App.jsx
import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
