import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Services />
      <CallToAction />
      <Footer/>
    </div>
  );
};

export default Home;
