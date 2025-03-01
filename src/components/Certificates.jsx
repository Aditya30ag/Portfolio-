import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

const Certificates = () => {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH || "";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [activeTab, setActiveTab] = useState("skills");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial size
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const certificates = [
    {
      institution: "Javascript Intermediate",
      image: "/images/Screenshot 2024-11-26 145051.png",
      year: "2024",
      link: "https://www.hackerrank.com/certificates/iframe/039b5c3bb1b4",
      description: "Click !! ",
    },
    {
      institution: "GFG Hackfest Finalist",
      image: "/images/Screenshot 2024-10-29 151804.png",
      year: "2024",
      link: "https://media.geeksforgeeks.org/notifications/image(39)-min-20240923172036.png",
      description: "Click !!",
    },
    {
      institution: "Bennovate Ideathon",
      image: "/images/Screenshot 2024-11-29 112520.png",
      year: "2024",
      description: "Click !!",
    },
    {
      institution: "HackStreet 3.0 (JIIT,Nodia)",
      image: "/images/Screenshot 2025-02-05 130750.png",
      year: "2024",
      description: "Click !!",
    },
    {
      institution: "Tech Arena (Bennett University)",
      image: "/images/Screenshot_1-3-2025_82652_.jpeg",
      year: "2024",
      description: "Click !!",
    },
    {
      institution: "Digital Skills User experience",
      image: "/images/Screenshot 2024-11-29 113315.png",
      link: "https://www.futurelearn.com/certificates/e2m17oo",
      year: "2024",
      description: "Click !!",
    },
    {
      institution: "SIH BU",
      image: "/images/Screenshot 2024-11-26 145150.png",
      year: "2024",
      description: "Click !!",
    },
  ];

  // Calculate the width of each card
  const cardWidth = isMobile ? 280 : 320; // in pixels

  return (
    <section
      id="about"
      className="py-10 md:py-20 relative overflow-hidden flex justify-center items-center"
      style={{ zIndex: "200" }}
    >
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${cardWidth}px * ${certificates.length}));
          }
        }
        
        .scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .scroll-wrapper {
          display: flex;
          width: calc(${cardWidth}px * ${certificates.length * 2});
          animation: scroll 30s linear infinite;
        }
        
        .scroll-wrapper:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .scroll-wrapper {
            width: calc(${cardWidth}px * ${certificates.length * 2});
          }
        }
      `}</style>

      {/* Background gradient and gooey elements */}
      <div className="line-bg">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="line"
            style={{
              left: `${i * 24.28}%`,
              "--delay": `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Star background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-2 bg-white rounded-full hidden md:block"
            initial={{
              x:
                typeof window !== "undefined"
                  ? Math.random() * window.innerWidth
                  : 0,
              y:
                typeof window !== "undefined"
                  ? Math.random() * window.innerHeight
                  : 0,
              opacity: Math.random() * 0.7 + 0.4,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div
        className="mx-auto px-4 md:px-6 lg:px-8 relative w-full"
        ref={ref}
      >
        <div className="w-full mx-auto px-2 md:px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 md:mb-4">
              Professional Certifications
            </h2>
            <p className="text-xs md:text-base text-gray-400 max-w-2xl mx-auto">
              Showcasing my continuous learning and professional development
              through verified certifications.
            </p>
          </div>

          <div className="scroll-container">
            <div className="scroll-wrapper">
              {/* Original set of cards */}
              {certificates.map((cert, index) => (
                <motion.div
                  key={`original-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 
                              hover:from-gray-700 hover:to-gray-800 
                              transition-all duration-300 
                              border border-gray-700 
                              min-w-[280px] md:min-w-[320px] 
                              max-w-[320px] md:max-w-[350px]
                              h-auto
                              flex-shrink-0 
                              shadow-lg 
                              hover:shadow-xl 
                              transform hover:-translate-y-2
                              mx-3"
                >
                  <div className="flex items-center mb-2 md:mb-4">
                    <Award
                      className="text-indigo-400 mr-2 md:mr-3"
                      size={isMobile ? 24 : 32}
                    />
                    <h3 className="text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {cert.institution}
                    </h3>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <div className="relative mb-2 md:mb-4 h-32 md:h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={cert.image}
                        alt={cert.institution}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <p className="text-sm md:text-lg font-semibold text-gray-200">
                        {cert.degree}
                      </p>
                      <p className="text-xs md:text-sm text-gray-400">
                        {cert.description}
                      </p>
                      {cert.issueDate && (
                        <div className="text-[10px] md:text-xs text-gray-500 mt-1">
                          Issued: {cert.issueDate}
                        </div>
                      )}
                    </div>
                  </a>
                </motion.div>
              ))}

              {/* Duplicated set of cards for seamless looping */}
              {certificates.map((cert, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 
                              hover:from-gray-700 hover:to-gray-800 
                              transition-all duration-300 
                              border border-gray-700 
                              min-w-[280px] md:min-w-[320px] 
                              max-w-[320px] md:max-w-[350px]
                              h-auto
                              flex-shrink-0 
                              shadow-lg 
                              hover:shadow-xl 
                              transform hover:-translate-y-2
                              mx-3"
                >
                  <div className="flex items-center mb-2 md:mb-4">
                    <Award
                      className="text-indigo-400 mr-2 md:mr-3"
                      size={isMobile ? 24 : 32}
                    />
                    <h3 className="text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {cert.institution}
                    </h3>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <div className="relative mb-2 md:mb-4 h-32 md:h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={cert.image}
                        alt={cert.institution}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <p className="text-sm md:text-lg font-semibold text-gray-200">
                        {cert.degree}
                      </p>
                      <p className="text-xs md:text-sm text-gray-400">
                        {cert.description}
                      </p>
                      {cert.issueDate && (
                        <div className="text-[10px] md:text-xs text-gray-500 mt-1">
                          Issued: {cert.issueDate}
                        </div>
                      )}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;