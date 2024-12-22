import React from "react";
import '../styles/wave.css';
import '../styles/homepage.css';
import SocialHandles from "./SocialHandles";

const Homepage = () => {
  const styles = `
    .line-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }

    .line {
      position: absolute;
      width: 1px;
      height: 100%;
      background: linear-gradient(
        180deg,
        transparent,
        rgba(99, 102, 241, 0.1),
        rgba(139, 92, 246, 0.1),
        transparent
      );
      animation: lineDrop 3s ease-in-out infinite;
      animation-delay: var(--delay);
    }

    @keyframes lineDrop {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(100%);
      }
    }

    .mobile-glow {
      position: absolute;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
      animation: floatGlow 6s ease-in-out infinite;
      display: none;
    }

    @media (max-width: 768px) {
      .mobile-glow {
        display: block;
      }
    }

    @keyframes floatGlow {
      0%, 100% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(20px, -20px);
      }
    }

    .main-container {
      min-height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .content-wrapper {
      flex-grow: 1;
      position: relative;
      z-index: 2;
    }

    .wave-container {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 1;
      pointer-events: none;
    }
  `;

  return (
    <div className="main-container">
      <style>{styles}</style>
      <div className="">
        <section
          id="home"
          className="h-full pt-14 bg-transparent relative overflow-hidden flex flex-col md:flex-row justify-between items-center min-h-[500px] px-4 sm:px-6 lg:px-8"
        >
          {/* Mobile Line Background */}
          <div className="line-bg">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="line"
                style={{
                  left: `${i * 14.28}%`,
                  '--delay': `${i * 0.5}s`
                }}
              />
            ))}
            <div className="mobile-glow" style={{ top: '10%', left: '10%' }} />
            <div className="mobile-glow" style={{ top: '40%', right: '10%' }} />
            <div className="mobile-glow" style={{ bottom: '20%', left: '30%' }} />
          </div>

          {/* Left Column - Introduction */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2 tracking-tight">
              Hi
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-2 tracking-tight">
              I'm Aditya,
            </h2>
            <h4 className="text-base md:text-lg text-gray-400 max-w-xl font-normal tracking-wide text-center md:text-center">
              Student at Bennett University with strong technical skills anchored on extensive engineering coursework and a special focus on Development and DSA.
            </h4>
          </div>

          {/* Gooey Background Element */}
          <div
            id="gooey"
            className="hidden md:block h-[32vw] w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[5%] left-[58%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]"
            style={{ zIndex: 1 }}
          />

          {/* Right Column - Developer Title and Social Handles */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center z-20 px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-900 to-pink-700 bg-clip-text text-transparent">
                A Mern-Stack
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-4">
                Developer
              </h2>
              <div className="flex justify-center">
                <SocialHandles />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Wave Animation */}
      <div className="wave-container">
        <div className="wave_anim w-full">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
          <div className="wave wave5"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;