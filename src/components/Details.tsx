import React, { useState } from 'react';

const Details: React.FC = () => {
  const images = [
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x401',
    'https://via.placeholder.com/600x402',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-300 shadow-lg rounded-xl overflow-hidden">
      {/* Carousel */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt="Carousel"
          className="w-full h-80 object-cover"
        />

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ▶
        </button>

        {/* External Link */}
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 bg-black text-white text-xs px-4 py-1 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          EXTERNAL LINK
        </a>
      </div>

      {/* Project Description */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-black mb-2">Project Title</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          This project showcases advanced design principles with an emphasis on
          clean aesthetics, responsive layouts, and smooth user interactions.
          Each slide represents a unique feature, enhancing the user experience.
        </p>
      </div>
    </div>
  );
};

export default Details;
