import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Doctors from '../components/sections/Doctors';
import Facilities from '../components/sections/Facilities';
import Testimonials from '../components/sections/Testimonials';
import Statistics from '../components/sections/Statistics';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <Doctors />
      <Facilities />
      <Statistics />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home; 