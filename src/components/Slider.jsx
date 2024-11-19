import React, { useState } from 'react';
import Image from 'next/image';

const LOGOS = [
  {
    name: 'Mongo DB',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-04 234212.png'
  },
  {
    name: 'Figma',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-19 011336.png'
  },
  {
    name: 'Tailwind',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-04 234832.png'
  },
  {
    name: 'JavaScript',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-04 234128.png'
  },
  {
    name: 'Git',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-19 014112.png'
  },
  {
    name: 'Node.js',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-04 234216.png'
  },
  {
    name: 'React',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-04 234142.png'
  },
  {
    name: 'Python',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-04 234227.png'
  },
  {
    name: 'Package Manger',
    className: 'w-24 h-24',  // Increased from w-16 h-16
    src: '/images/Screenshot 2024-11-19 010800.png'
  }
];

const Slider = () => {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH || '';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full bg-gray-50 py-12 overflow-hidden" style={{ zIndex: "200", borderRadius: "50px", opacity: 0.9 }}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex space-x-16"  // Increased spacing from space-x-12
            style={{
              animation: isHovered ? 'none' : 'slide 25s linear infinite',
              transform: isHovered ? 'translateX(0)' : 'none'
            }}
          >
            {/* First set of logos */}
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex flex-col items-center justify-center shrink-0"
              >
                <div className="relative w-28 h-28 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">  {/* Increased from w-20 h-20 */}
                  <Image
                    src={publicPath + logo.src}
                    alt={`${logo.name} logo`}
                    width={240}  // Increased from 180
                    height={240}  // Increased from 180
                    className="object-contain p-2 opacity-100"  // Added opacity-100 for full opacity
                  />
                </div>
                <span className="mt-3 text-sm text-gray-600">{logo.name}</span>  {/* Increased mt-2 to mt-3 */}
              </div>
            ))}

            {/* Duplicated set for seamless loop */}
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex flex-col items-center justify-center shrink-0"
              >
                <div className="relative w-28 h-28 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={publicPath + logo.src}
                    alt={`${logo.name} logo`}
                    width={240}
                    height={240}
                    className="object-contain p-2 opacity-100"
                  />
                </div>
                <span className="mt-3 text-sm text-gray-600">{logo.name}</span>
              </div>
            ))}

            {/* Third set for smoother infinite loop */}
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-3-${index}`}
                className="flex flex-col items-center justify-center shrink-0"
              >
                <div className="relative w-28 h-28 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={publicPath + logo.src}
                    alt={`${logo.name} logo`}
                    width={240}
                    height={240}
                    className="object-contain p-2 opacity-100"
                  />
                </div>
                <span className="mt-3 text-sm text-gray-600">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default Slider;