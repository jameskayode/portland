import React, { useState } from 'react';

const Topnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-2 md:p-4 flex justify-between items-center">
      <a href="/" className="text-white font-medium">
      GuruTech
      </a>
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex">
          <li className="mr-6">
            <a href="/" className="text-white hover:text-gray-600">Home</a>
          </li>
          <li className="mr-6">
            <a href="/projects" className="text-white hover:text-gray-600">Projects</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-white hover:text-gray-600">About</a>
          </li>
          <li className="mr-6">
            <a href="#footer" className="text-white hover:text-gray-600">Contact</a>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <button onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
    </nav>
  );
};

export default Topnav;

