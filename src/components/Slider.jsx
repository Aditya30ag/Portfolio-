import React from 'react';
import Image from 'next/image';

const LOGOS = [
  {
    name: 'Mongo DB',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-04 234212.png'
  },
  {
    name: 'Figma',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-19 011336.png'
  },
  {
    name: 'Tailwind',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-04 234832.png'
  },
  {
    name: 'JavaScript',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-04 234128.png'
  },
  {
    name: 'Git',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-19 014112.png'
  },
  {
    name: 'Node.js',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-04 234216.png'
  },
  {
    name: 'React',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-04 234142.png'
  },
  {
    name: 'Python',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-04 234227.png'
  },
  {
    name: 'Package Manager',
    className: 'w-24 h-24',
    src: '/images/Screenshot 2024-11-19 010800.png'
  }
];

const Slider = () => {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH || '';

  return (
    <div className="w-full bg-gray-50 py-12 overflow-hidden" style={{ zIndex: "2000", borderRadius: "50px", opacity: 0.9 ,marginTop:"40px"}}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-250px * ${LOGOS.length}));
              }
            }
          `}</style>
          
          <div className="flex animate-[scroll_25s_linear_infinite] space-x-16">
            {[...Array(2)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex space-x-16">
                {LOGOS.map((logo, index) => (
                  <div
                    key={`logo-${setIndex}-${index}`}
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
            ))}
          </div>

          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default Slider;