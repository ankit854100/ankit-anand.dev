import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  image: string;
  link: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [startIndex]);

  const updateVisibleCards = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 320; // Assuming each card is around 320px wide
      setVisibleCards(Math.floor(containerWidth / cardWidth));
    }
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div
      id="home"
      className={`relative w-full overflow-hidden pt-6 pb-6 bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-900`}
      ref={containerRef}
    >
      {/* Card Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${startIndex * (100 / visibleCards)}%)`,
        }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%/var(--visible-cards))] p-2"
          >
            <Card {...item} />
            {/* Passing theme and item to Card */}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`p-2 border-2 border-b-4 border-r-4 rounded-full shadow-lg transition-transform hover:scale-150 bg-gray-100 dark:bg-black dark:text-white text-black border-black dark:border-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`p-2 border-2 border-b-4 border-r-4 rounded-full shadow-lg transition-transform hover:scale-150 bg-gray-100 dark:bg-black dark:text-white text-black border-black dark:border-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
