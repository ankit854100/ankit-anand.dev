import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const socialLinks = [
    // { name: 'Twitter', icon: <FaTwitter />, link: 'https://twitter.com' },
    {
      name: 'GitHub',
      icon: FaGithub ? <FaGithub /> : null,
      link: 'https://github.com/ankit854100',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin ? <FaLinkedin /> : null,
      link: 'https://www.linkedin.com/in/ankit-anand-087254177/',
    },
    // { name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com' },
  ];

  return (
    <motion.footer
      id="contact"
      ref={ref}
      className="relative bg-gray-100 dark:bg-black p-8 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto text-center">
        <motion.div
          className="flex justify-center space-x-6 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-black dark:text-gray-900 p-3 bg-transparent border-2 border-b-4 border-r-4 border-black rounded-full transition hover:text-white hover:bg-yellow-400 dark:bg-white"
              whileHover={{ y: -5 }}
            >
              <span>{link.icon}</span>
            </motion.a>
          ))}
        </motion.div>
        <p className="text-black dark:text-white font-bold text-lg">
          &copy; 2025 Ankit Anand. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
