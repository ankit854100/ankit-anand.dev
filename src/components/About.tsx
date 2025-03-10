import React from 'react';
import { motion } from 'framer-motion';
import DP from '../assets/ankit.jpg';

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="relative bg-yellow-400 flex justify-center items-center pt-16 pb-36 border-t-4 border-b-4 border-black dark:border-white"
    >
      <div className="flex items-center space-x-12 max-w-4xl">
        {/* Image Container */}
        <div className="relative w-64 h-64">
          {/* Rotating Circle with Text */}
          <motion.div
            className="absolute -top-2 -right-3 w-24 h-24"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="black" />
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <text fill="white" fontSize="8" fontWeight="bold">
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME •
                </textPath>
              </text>
              {/* Center Symbol */}
              <text
                x="50"
                y="54"
                fill="white"
                fontSize="10"
                fontWeight="bold"
                textAnchor="middle"
              >
                ✱
              </text>
            </svg>
          </motion.div>

          {/* Profile Image */}
          <div className="border-4 border-r-8 border-b-8 border-black rounded-full overflow-hidden shadow-lg bg-gray-100 p-2 rounded-b-none">
            <img
              src={DP}
              alt="none"
              className="w-60 h-80 rounded-full rounded-b-none"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-black">WHO AM I?</h2>
          <p className="text-black mt-4 text-sm">
            A lead software Engineer at Persistent Systems. Proficient in
            crafting robust software solutions using ReactJS and JavaScript.
            Specialized in end-to-end development and successful deployment of
            complex projects.
          </p>
          {/* <button className="mt-4 flex items-center font-bold text-black border-b-2 border-black pb-1">
            LEARN MORE <span className="ml-2">➝</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
