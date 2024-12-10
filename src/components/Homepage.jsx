import React from "react";
import '../styles/wave.css';
import '../styles/homepage.css';
import SocialHandles from "./SocialHandles";

export default function Homepage() {
  return (
    <>
      <section 
        id="home" 
        className="pt-14 bg-transparent relative overflow-hidden flex flex-col md:flex-row justify-between items-center min-h-[500px] px-4 sm:px-6 lg:px-8"
      >
        {/* Left Column - Introduction */}
        <div 
          className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-4 mb-8 md:mb-0"
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2 tracking-tight"
          >
            Hi
          </h1>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-2 tracking-tight"
          >
            I'm Aditya,
          </h2>
          <h4 
            className="text-base md:text-lg text-gray-400 max-w-xl font-normal tracking-wide text-center md:text-center"
          >
            Student at Bennett University with strong technical skills anchored on extensive engineering coursework and a special focus on Development and DSA.
          </h4>
        </div>

        {/* Gooey Background Element */}
        <div 
          id="gooey" 
          className="hidden md:block h-[32vw] w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[5%] left-[58%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]"
          style={{zIndex: 1}}
        >
        </div>

        {/* Right Column - Developer Title and Social Handles */}
        <div 
          className="w-full md:w-1/2 flex flex-col items-center justify-center z-20 px-4"
        >
          <div className="text-center">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-900 to-pink-700 bg-clip-text text-transparent"
            >
              A MERN-Stack
            </h2>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-4"
            >
              Developer
            </h2>
            
            <div className="flex justify-center">
              <SocialHandles />
            </div>
          </div>
        </div>
      </section>

      {/* Wave Animation */}
      <div className="wave_anim absolute bottom-0 w-full">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <div className="wave wave5"></div>
      </div>
    </>
  );
}