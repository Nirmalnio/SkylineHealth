import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import CareSteps from '../components/CareSteps';
import WhySection from '../components/WhySection';
import GoogleReviews from '../components/GoogleReviews';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhySection />
      <CareSteps/>
      <GoogleReviews/>
      {/* <CallToAction /> */}
    </div>
  );
};

export default Home;
