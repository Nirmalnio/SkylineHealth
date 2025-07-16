import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
// import Header from '../layouts/Header';
// import Footer from '../components/Footer';
import CareSteps from '../components/CareSteps';

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Hero />
      <Services />
      <CareSteps/>
      <CallToAction />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
