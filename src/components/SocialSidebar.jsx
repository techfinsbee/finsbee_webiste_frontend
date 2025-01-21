import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg m-4" style={{zIndex:"100000"}}>
      <div className="flex flex-col space-y-4 p-4">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-black transition-colors duration-300">
          <Twitter size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
          <Youtube size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;