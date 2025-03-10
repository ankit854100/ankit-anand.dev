// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactNode } from 'react';
import { SiPersistent, SiKotlin } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoAndroid } from 'react-icons/io';
import { motion } from 'framer-motion';
import Badge from './Badge';
import { tags } from './Skills';

interface IExperience {
  title: string;
  company: string;
  duration: string;
  skills: { id: number; image: ReactNode; label: string }[];
  icon: ReactNode;
}

const interExp = [
  {
    id: 1,
    label: 'Android',
    image: <IoLogoAndroid size={20} />,
  },
  {
    id: 1,
    label: 'Kotlin',
    image: <SiKotlin size={20} />,
  },
];

const experiences: IExperience[] = [
  {
    title: 'Lead Software Engineer',
    company: 'Persistent Systems',
    duration: 'Jan 2024 - Present',
    skills: tags,
    icon: <SiPersistent size={30} />,
  },
  {
    title: 'Senior Software Engineer',
    company: 'Persistent Systems',
    duration: 'July 2022 - Dec 2023 ',
    skills: tags,
    icon: <SiPersistent size={30} />,
  },
  {
    title: 'Software Engineer',
    company: 'Persistent Systems',
    duration: 'June 2021 - June 2022',
    skills: tags,
    icon: <SiPersistent size={30} />,
  },
  {
    title: 'Intern',
    company: 'Curiosity Live',
    duration: 'Sept 2020 - Nov 2020',
    skills: tags,
    icon: <FaReact size={30} />,
  },
  {
    title: 'Intern',
    company: 'Stealth mode startup',
    duration: 'June 2020 - Aug 2020',
    skills: interExp,
    icon: <IoLogoAndroid size={30} />,
  },
];

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-900"
    >
      <motion.div
        className="w-3/4 py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="relative border-l-4 border-black dark:border-white">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-8 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="absolute -left-16 w-16 h-16 flex items-center justify-center rounded-full shadow-md border-r-4 border-b-4 bg-yellow-400 border-black dark:border-yellow-700">
                <span className="text-xl">{exp.icon}</span>
              </div>
              <div className=" p-6 w-full ml-6 border-[3px] rounded-2xl border-r-8 border-b-8 overflow-hidden shadow-md transition-all border-black dark:border-white bg-white dark:bg-black">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p>{exp.company}</p>
                <p className="text-sm">{exp.duration}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx}>
                      <Badge
                        key={skill.id}
                        imageUrl={skill.image}
                        category={skill.label}
                        count={0}
                        size="sm"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
