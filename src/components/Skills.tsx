// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BsFiletypeScss } from 'react-icons/bs';
import { SiWebpack, SiRedux } from 'react-icons/si';
import Badge from './Badge';

export const tags = [
  { id: 1, label: 'ReactJS', count: 4, image: <FaReact size={20} /> },
  {
    id: 2,
    label: 'Javascript',
    count: 4,
    image: <IoLogoJavascript size={20} />,
  },
  {
    id: 3,
    label: 'Typescript',
    count: 3,
    image: <BiLogoTypescript size={20} />,
  },
  { id: 4, label: 'HTML5', count: 3, image: <FaHtml5 size={20} /> },
  { id: 5, label: 'CSS3', count: 3, image: <FaCss3 size={20} /> },
  {
    id: 6,
    label: 'TailwindCSS',
    count: 3,
    image: <RiTailwindCssFill size={20} />,
  },
  { id: 7, label: 'SCSS', count: 3, image: <BsFiletypeScss size={20} /> },
  {
    id: 8,
    label: 'Micro Frontend',
    count: 3,
    image: <SiWebpack size={20} />,
  },
  { id: 7, label: 'Redux', count: 3, image: <SiRedux /> },
];

const Skills: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const step = () => {
      if (!isPaused && containerRef.current) {
        setOffset((prevOffset) => {
          const newOffset = prevOffset - 1.5; // Slower speed
          return newOffset < -containerRef.current!.scrollWidth / 2
            ? 0
            : newOffset;
        });
      }
      animationFrameId = requestAnimationFrame(step);
    };

    if (!isPaused) {
      animationFrameId = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div
      id="skills"
      className="relative bg-yellow-400 py-6 overflow-hidden border-b-4 border-t-4 border-black"
    >
      {/* Popular Tags Label */}
      <div className="absolute -top-2 left-3 transform bg-white px-3 py-1 border-2 border-b-4 border-black rounded-md font-bold text-lg z-40">
        Skills
      </div>

      <div
        className="flex space-x-6 whitespace-nowrap items-center w-full"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          transform: `translateX(${offset}px)`,
          transition: isPaused ? 'none' : 'transform 0.1s linear',
        }}
      >
        {[...tags, ...tags].map((tag, index) => (
          <div key={index} className={index % 2 === 0 ? ' mt-8' : ' mb-8'}>
            <Badge imageUrl={tag.image} category={tag.label} count={0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
