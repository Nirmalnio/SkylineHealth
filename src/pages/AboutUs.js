import React from 'react';
import Header from '../layouts/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="relative bg-cover bg-center h-96" style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900/?healthcare,team')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Nurse Next Door, our mission is to make a difference in the lives of seniors by providing compassionate, high-quality home care services that enable them to live happily and independently in their own homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="https://homecare-aid.com/wp-content/uploads/2024/04/Why-Elderly-Care-Can-Be-So-Important.jpg" alt="Elderly care" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              <li><strong>Love:</strong> We approach every interaction with genuine care and empathy.</li>
              <li><strong>Optimism:</strong> We believe in the power of positivity and finding joy in every day.</li>
              <li><strong>Passion:</strong> We are passionate about making a difference in the lives of our clients.</li>
              <li><strong>Accountability:</strong> We take responsibility for our actions and deliver on our promises.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of caregivers and staff are committed to providing the best possible care for your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="https://source.unsplash.com/random/200x200/?person,doctor" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
            <p className="text-pink-500">Founder & CEO</p>
            <p className="text-gray-600 mt-2">Jane has over 20 years of experience in the healthcare industry.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="https://source.unsplash.com/random/200x200/?person,nurse" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
            <p className="text-pink-500">Head of Care Services</p>
            <p className="text-gray-600 mt-2">John leads our team of compassionate and skilled caregivers.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="https://source.unsplash.com/random/200x200/?person,manager" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold text-gray-800">Emily White</h3>
            <p className="text-pink-500">Client Relations Manager</p>
            <p className="text-gray-600 mt-2">Emily ensures our clients receive personalized and attentive service.</p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
