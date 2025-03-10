import React from 'react';
import Navbar from '@components/Navbar';
import Carousel from '@components/Carousel';
import Experience from '@components/Experience';
import Skills from '@components/Skills';
import About from '@components/About';
import Footer from '@components/Footer';
import blockly from '../assets/blockly-SS4.png';
import nfl from '../assets/nfl-SS1.png';
import ecom from '../assets/flowers-SS1.png';
import ide from '../assets/ide.png';

const items = [
  {
    id: '1',
    title: 'Early Coding: Coding environment for Kids',
    subtitle: 'coding env',
    date: '2020',
    author: 'Ankit Anand',
    image: blockly,
    link: 'https://github.com/ankit854100/blockly-using-router',
  },
  {
    id: '2',
    title: 'Flowers and Cakes: Buy and Sell your items',
    subtitle: 'e-commerce',
    date: '2021',
    author: 'Ankit Anand',
    image: ecom,
    link: 'https://github.com/ankit854100/flowers-and-cakes',
  },
  {
    id: '2',
    title: 'NFL Fantasy Gaming',
    subtitle: 'functional UI',
    date: '2021',
    author: 'Ankit Anand',
    image: nfl,
    link: 'https://github.com/ankit854100/NFL',
  },
  {
    id: '2',
    title: 'Web IDE',
    subtitle: 'IDE',
    date: '2021',
    author: 'Ankit Anand',
    image: ide,
    link: 'https://github.com/ankit854100/codepen_clone',
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Carousel items={items} />
      <Skills />
      <Experience />
      <About />
      <Footer />
      {/* <AppRoutes /> */}
    </>
  );
};

export default Home;
