import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Nurse Next Door logo" className="h-12" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 hover:text-gray-800">Home Care</a>
          <a href="/" className="text-gray-600 hover:text-gray-800">Nursing Care</a>
          <a href="/" className="text-gray-600 hover:text-gray-800">About Us</a>
          <a href="/" className="text-gray-600 hover:text-gray-800">Franchising</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-800">1-877-588-8609</a>
          <button className="c text-white px-4 py-2 rounded-full">Free Care Consult</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
