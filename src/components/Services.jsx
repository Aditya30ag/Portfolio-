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
      "name": "Zenith Pay",
      "icon": "/images/Screenshot 2025-02-26 003307.png",
      "link": "https://github.com/Aditya30ag/ChatRoom",
      "description": "The next-gen digital payment solution! Building a secure, intelligent, and location-aware UPI-based payment system with advanced transaction analytics & fraud prevention or recover fraud Amount."
    },
    {
      "name": "Baymax",
      "icon": "/images/Untitled design.png",
      "link": "https://github.com/Aditya30ag/ChatRoom",
      "description": "I contributed to the development of a Mental Health Management Chat Application, designed to help users monitor and manage their mental well-being. The app uses a conversational interface powered by a chatbot, where users can interact and log their emotional states. My role involved creating the frontend using React.js and Tailwind CSS, ensuring a smooth, responsive, and intuitive user experience.The app features sentiment analysis to detect signs of anxiety, depression, and other mental health conditions. Using FastAPI as the backend, I developed RESTful APIs for processing user inputs, performing sentiment analysis, and generating real-time mood-tracking reports. I also integrated machine learning models for condition detection, providing users with personalized feedback based on their emotional responses."
    },
    {
      "name": "Laundry Management System",
      "icon": "/images/Screenshot 2024-12-20 145241.png",
      "link": "https://github.com/Aditya30ag/FIleCompressor",
      "description": "A web-based application for Bennett University hostels designed to simplify and automate laundry operations while enhancing customer experience with efficient service management tools."
    },
    {
      "name": "Chat Application",
      "icon": "/images/Screenshot 2024-12-30 140301.png",
      "link": "https://github.com/Aditya30ag/ChatRoom",
      "description": "This chat room is a modern, real-time messaging platform powered by Socket.IO and Node.js. It offers seamless communication with instant message delivery and dynamic user interactions."
    }
  ];

  return (
    <section
      id="services"
      className="relative py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 overflow-hidden"></div>
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="h-[50vw] sm:h-[32vw] w-[50vw] sm:w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[10%] sm:top-[20%] left-[5%] sm:left-[6%] blur-[15px] sm:blur-[20px] opacity-30 sm:opacity-50 animate-[pulse_6s_ease-in-out_infinite_alternate]"></div>
        <div className="h-[50vw] sm:h-[32vw] w-[50vw] sm:w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[40%] sm:top-[20%] left-[25%] sm:left-[36%] blur-[15px] sm:blur-[20px] opacity-30 sm:opacity-50 animate-[pulse_8s_ease-in-out_infinite_alternate]"></div>
        <div className="h-[50vw] sm:h-[32vw] w-[50vw] sm:w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[70%] sm:top-[20%] left-[55%] sm:left-[66%] blur-[15px] sm:blur-[20px] opacity-30 sm:opacity-50 animate-[pulse_7s_ease-in-out_infinite_alternate]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center relative">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 bg-clip-text text-transparent inline-block">
            Project Work
          </span>
          <span className="absolute bottom-[-0.5rem] sm:bottom-[-0.7rem] left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 lg:w-64 h-1 bg-gradient-to-r from-[#6366F1] to-[#F43F5E] rounded-full" />
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl h-full flex flex-col"
              style={{ 
                animationName: 'fadeIn',
                animationDuration: '0.5s',
                animationTimingFunction: 'ease-in-out',
                animationFillMode: 'forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-70 blur-[1px]"></div>
              
              {/* Card content */}
              <div className="relative bg-gray-900 rounded-xl h-full flex flex-col z-10 overflow-hidden transition-all duration-300 hover:-translate-y-2">
                {/* Larger image container */}
                <div className="relative h-36 sm:h-44 md:h-48 lg:h-56 w-full border-b border-gray-800">
                  <div className="relative w-full h-full">
                    <Image
                      src={publicPath + service.icon}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 30vw"
                    />
                  </div>
                </div>

                <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
                  <h3 className="mb-1 sm:mb-2 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base text-gray-400 flex-grow line-clamp-3 sm:line-clamp-4">
                    {service.description}
                  </p>

                  <div className="flex justify-between items-center pt-2 sm:pt-3 border-t border-gray-800 mt-auto">
                    <button className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white bg-transparent border border-[#6366F1] rounded-md hover:bg-[#6366F1] transition-colors">
                      Demo
                    </button>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white bg-[#6366F1] rounded-md hover:bg-[#8B5CF6] transition-colors cursor-pointer"
                    >
                      Get Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
        
        @keyframes borderGlow {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Services;