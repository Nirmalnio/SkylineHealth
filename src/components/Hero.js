import React from 'react';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: "url('/hero-image.jpg')"}}>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Happier Aging</h1>
          <p className="text-xl mb-8">Nurse Next Door provides compassionate, reliable and flexible senior home care services.</p>
          <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg">Get a Free Consult</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
