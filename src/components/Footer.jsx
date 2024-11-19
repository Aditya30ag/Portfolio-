import React from "react";
import Image from "next/image";
import SocialHandles from "./SocialHandles";
import { Link } from 'react-scroll';

const Footer = ({footer}) => {
  return (
    <footer className="bg-black py-12 px-4 relative overflow-hidden">
      {/* Dark theme colored bar at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-indigo-600"></div>
        <div className="flex-1 bg-purple-600"></div>
        <div className="flex-1 bg-violet-600"></div>
        <div className="flex-1 bg-indigo-600"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Image Column */}
          <div className="space-y-6">
            <div className="transition-transform hover:scale-105">
              
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              
            </div>
            <div className="py-4">
              <SocialHandles />
            </div>
          </div>

          {/* Navigation Columns */}
          {footer.map((list, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-gray-200 text-lg font-semibold mb-4 relative">
                {list.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-indigo-600"></span>
              </h3>
              <nav className="space-y-3">
                {list.routes.map((route, i) => (
                  <Link
                    key={i}
                    to={route.id || ''}
                    smooth={true}
                    className="block text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer text-sm"
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h4 className="text-gray-500 text-sm">
              Copyright &copy; All rights reserved - {new Date().getFullYear()}
            </h4>
            <p className="text-gray-500 text-sm flex items-center">
              Built with 
              <span className="inline-flex mx-1">
                <span className="text-purple-500">❤</span>
              </span>
              by 
              <span className="ml-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 bg-clip-text text-transparent font-medium">
                GDG-Tech Team
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;