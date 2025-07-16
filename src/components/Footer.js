import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Nurse Next Door</h3>
            <p className="text-gray-400">24/7 Professional In-Home Care Services</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Home Care</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Nursing Care</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Specialty Care</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Franchising</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="/" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; 2025 Nurse Next Door. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
