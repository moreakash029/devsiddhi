// src/App.tsx
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="overflow-x-auto overflow-y-hidden h-full scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="flex w-[200vw] h-full">
          <div className="w-screen flex-shrink-0 snap-start">
            <Home />
          </div>
          <div className="w-screen flex-shrink-0 snap-start">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
