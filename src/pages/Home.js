import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import CareSteps from '../components/CareSteps';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CareSteps/>
      <CallToAction />
    </div>
  );
};

export default Home;
