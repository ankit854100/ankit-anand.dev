import React from 'react';

interface ICardProps {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  image: string;
  link: string;
}

const Card: React.FC<ICardProps> = ({ title, date, author, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className={`relative max-w-lg mx-auto border-[3px] rounded-2xl overflow-hidden shadow-md transition-all border-r-8 border-b-8 bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-900 border-gray-900 dark:border-white cursor-pointer`}
      >
        {/* Image */}
        <div className="relative w-full h-72">
          <img src={image} alt="ankit" className="object-cover w-full h-full" />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <div
            className={`text-sm flex items-center dark:text-white text-gray-900 border-green-900 dark:border-white`}
          >
            <span>{date}</span>
            <span className="mx-2">—</span>
            <span>By {author}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
