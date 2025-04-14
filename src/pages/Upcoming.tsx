import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface ImageItem {
  src: string;
  title: string;
  caption: string;
}

const images: ImageItem[] = [
  {
    src: "assets/green.jpg",
    title: "DevSidhhi Green",
    caption: "Green Nature",
  },
  {
    src: "assets/fable.jpg",
    title: "DevSidhhi Fantasy",
    caption: "Fantasy Fable",
  },
  {
    src: "assets/felicia.jpg",
    title: "DevSidhhi Felicia",
    caption: "Felicia Portrait",
  },
  {
    src: "assets/Fabula.jpg",
    title: "DevSidhhi Fabula",
    caption: "Fabula Lights",
  },
];

const Upcoming: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSwapImage = (direction: number) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + images.length) % images.length
    );
  };

  const currentImage = images[currentIndex];

  return (
    <section className="relative px-12 py-10 text-[#B68842]">
      <div className="flex flex-col items-center gap-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center">
          Upcoming / Running Projects
        </h1>

        {/* Content */}
        <div className="flex flex-wrap items-center justify-center gap-10 w-full">
          {/* Image Section */}
          <div className="w-[600px] h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={currentImage.src}
              alt={currentImage.caption}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-4 max-w-sm">
            <h2 className="text-3xl font-bold">{currentImage.title}</h2>
            <p className="text-black">
              This is a brief overview of the project. It showcases some of the
              best work I've done using React, Tailwind, and other technologies.
            </p>
            <ul className="text-[#B68842] space-y-2">
              <li>
                <strong>Client:</strong> {currentImage.caption}
              </li>
            </ul>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center gap-4">
            <button
              className="w-12 h-12 bg-[#B68842] rounded-full flex items-center justify-center text-white text-xl hover:bg-[#D12023]"
              onClick={() => handleSwapImage(-1)}
              aria-label="Previous Project"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button
              className="w-12 h-12 bg-[#B68842] rounded-full flex items-center justify-center text-white text-xl hover:bg-[#D12023]"
              onClick={() => handleSwapImage(1)}
              aria-label="Next Project"
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
