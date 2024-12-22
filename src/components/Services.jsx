import React from 'react';
import Image from 'next/image';

const Services = () => {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH || '';
  const services = [
    {
      "name": "Voting System",
      "icon": "/images/Screenshot 2024-11-27 104704.png",
      "link": "https://github.com/Aditya30ag/votingapp.git",
      "description": "This platform enables users to create, manage, and participate in secure and efficient voting processes. It ensures transparency, accuracy, and accessibility, catering to a variety of voting scenarios like elections, surveys, or polls."
    },
    {
      "name": "Agro-Safal",
      "icon": "/images/Screenshot 2024-11-20 012724.png",
      "link": "https://github.com/Aditya30ag/Project.git",
      "description": "A comprehensive platform designed for farmers and agribusinesses, Agro-Safal provides tools and resources to improve crop management, access market insights, and enhance productivity through innovative agricultural solutions."
    },
    {
      "name": "Emotion Detector",
      "icon": "/images/Screenshot 2024-11-21 195313.png",
      "link": "https://github.com/Aditya30ag/FIleCompressor",
      "description": "Uses images or video to analyze facial expressions and detect emotions like happiness, sadness, anger, etc. Uses machine learning models or algorithms (e.g., neural networks, SVMs) trained on labeled emotional data."
    },
    {
      "name": "Laundry Management System",
      "icon": "/images/Screenshot 2024-12-20 145241.png",
      "link": "https://github.com/Aditya30ag/FIleCompressor",
      "description": "The Online Laundry Management System is a web-based application for bennett university hostels designed to simplify and automate the operations of laundry businesses and enhance the customer experience. This project focuses on creating a user-friendly, efficient platform that connects customers with laundry service providers while offering robust management tools for the business."
    }
  ];

  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-20px) scale(1.05); }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-400px * 4)); }
    }

    .animate-float-slow {
      animation: float 8s ease-in-out infinite;
    }

    .animate-fade-in {
      animation: fadeIn 0.8s ease-in-out;
    }

    .service-card {
      transition: transform 0.3s ease-in-out;
    }

    .service-card:hover {
      transform: translateY(-8px);
    }

    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }

    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .scroll-container:hover .scroll-content {
      animation-play-state: paused;
    }

    @media (max-width: 768px) {
      .service-card {
        width: 85vw;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      .service-card {
        width: 350px;
      }
    }
  `;

  return (
    <section
      id="services"
      className="relative py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20 overflow-hidden bg-gradient-to-br from-blue-900/20 via-green-900/20 to-indigo-900/20"
      style={{
        background: 'linear-gradient(to bottom, rgb(3, 7, 18), rgb(17, 24, 39))',
      }}
    >
      <style>{styles}</style>

      <div className="absolute inset-0 opacity-5 overflow-hidden bg-gradient-to-br from-blue-900/20 via-green-900/20 to-indigo-900/20">
      </div>
      
      {/* Responsive gooey backgrounds */}
      <div className="hidden md:block">
        <div className="h-[32vw] w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[20%] left-[6%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]" style={{zIndex:"1"}}>
        </div>
        <div className="h-[32vw] w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[20%] left-[36%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]" style={{zIndex:"1"}}>
        </div>
        <div className="h-[32vw] w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[20%] left-[66%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]" style={{zIndex:"1"}}>
        </div>
      </div>

      <div className="max-w-full mx-auto relative z-10">
        <h1 className="mb-6 md:mb-10 text-3xl md:text-4xl font-bold text-center relative">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 bg-clip-text text-transparent inline-block">
            Project Work
          </span>
          <span className="absolute bottom-[-0.5rem] left-0 w-full h-1 bg-gradient-to-r from-[#6366F1] to-[#F43F5E] rounded-full" />
        </h1>

        <div className="w-full overflow-hidden scroll-container">
          <div className="flex gap-8 pb-4 animate-fade-in scroll-content" 
               style={{
                 animation: 'scroll 15s linear infinite',
                 width: 'fit-content',
                 paddingLeft: '0%'
               }}>
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="service-card bg-gray-900 border border-gray-800 rounded-lg shadow-[#6366F1_-8px_10px_0px_2px] flex-none w-[400px]"
              >
                <div className="relative h-36 md:h-48 w-full flex items-center justify-center mt-4 p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={publicPath + service.icon}
                      alt={service.name}
                      fill
                      className="object-contain transition-transform duration-300 filter brightness-100"
                    />
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="mb-2 md:mb-3 text-base md:text-lg font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-400">
                    {service.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <button className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white bg-transparent border-2 border-[#6366F1] rounded-md hover:bg-[#6366F1] transition-colors">
                    </button>
                    <a
                      href={service.link}
                      target='blank'
                      className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white bg-[#6366F1] rounded-md hover:bg-[#8B5CF6] transition-colors cursor-pointer"
                    >
                      Get Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;