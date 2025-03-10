// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactNode } from 'react';

interface CategoryBadgeProps {
  imageUrl: ReactNode;
  category: string;
  count: number;
  size?: 'sm' | 'md' | 'lg'; // Different sizes for responsiveness
}

const sizeClasses = {
  sm: {
    container: 'w-36 p-1',
    image: 'w-8 h-8',
    text: 'text-xs',
    badge: 'w-6 h-6 text-xs',
  },
  md: {
    container: 'w-64 p-2',
    image: 'w-12 h-12',
    text: 'text-sm',
    badge: 'w-8 h-8 text-sm',
  },
  lg: {
    container: 'w-80 p-3',
    image: 'w-16 h-16',
    text: 'text-lg',
    badge: 'w-10 h-10 text-lg',
  },
};

const Badge: React.FC<CategoryBadgeProps> = ({
  imageUrl,
  category,
  size = 'sm',
}) => {
  const styles = sizeClasses[size];

  return (
    <div
      className={`flex items-center bg-white rounded-full border-r-4 border-b-4 shadow-md border border-black relative ${styles.container} max-w-full cursor-pointer`}
    >
      {/* Left Circular Image */}
      <div
        className={`rounded-full overflow-hidden border border-black ${styles.image} flex items-center justify-center text-gray-900`}
      >
        {imageUrl}
      </div>

      {/* Category Name */}
      <span className={`flex-grow text-black font-bold ml-3 ${styles.text}`}>
        {category}
      </span>

      {/* Count Badge */}
      {/* <div
        className={`bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black border border-black ${styles.badge}`}
      >
        {count}
      </div> */}
    </div>
  );
};

export default Badge;
