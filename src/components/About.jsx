import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
// import "../styles/about.css";
import { Award } from "lucide-react";

const About = () => {
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
  const skills = [
    {
      name: "React",
      image: "/images/Screenshot 2024-11-04 234142.png",
      type: 2,
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      name: "Tailwind",
      image: "/images/Screenshot 2024-11-04 234832.png",
      type: 1,
      gradient: "from-cyan-500 to-teal-400",
    },
    {
      name: "Node.js",
      image: "/images/Screenshot 2024-11-04 234216.png",
      type: 1,
      gradient: "from-green-600 to-emerald-500",
    },
    {
      name: "Figma",
      image: "/images/Screenshot 2024-11-19 011336.png",
      type: 1,
      gradient: "from-purple-600 to-pink-500",
    },
    {
      name: "JavaScript",
      image: "/images/Screenshot 2024-11-04 234128.png",
      type: 1,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      name: "Python",
      image: "/images/Screenshot 2024-11-04 234227.png",
      type: 2,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Next.js",
      image: "/images/Screenshot 2024-11-19 011028.png",
      type: 2,
      gradient: "from-gray-800 to-gray-900",
    },
    {
      name: "Package Manager",
      image: "/images/Screenshot 2024-11-19 010800.png",
      type: 1,
      gradient: "from-red-600 to-pink-600",
    },
    {
      name: "MongoDB",
      image: "/images/Screenshot 2024-11-04 234212.png",
      type: 1,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "GIT",
      image: "/images/Screenshot 2024-11-19 014112.png",
      type: 1,
      gradient: "from-orange-500 to-emerald-600",
    },
  ];

  const education = [
    {
      institution: "BENNETT UNIVERSITY",
      note: "UNDER-GRADUATION (B.Tech)",
      degree: "Bachelor of Science in Computer Science",
      year: "2024-2028",
      description: "Major in Software Engineering",
      description1: "",
    },
    {
      institution: "ST Dominic SR SEC School,Mathura",
      note: "CLASS-12",
      degree: "Percentage - 85%",
      year: "2023",
      description:
        "Had exemplary academic track record with multiple academic excellence award.",
      description1:
        "Represented school on multiple platforms including on national level.",
    },
  ];
  const experience = [
    {
      institution: "SIH BU",
      degree: "RANK-39th",
      year: "2024",
      image: "/images/Screenshot 2024-12-02 002240.png",
      description: "39th rank SIH in Bennett University ",
    },
    {
      institution: "GFG HackFest",
      degree: "RANK-4th",
      year: "2024",
      image: "/images/Screenshot 2024-12-02 003809.png",
      description: "Role-MERN Stack",
    },
    {
      institution: "Benovate-Ideathon",
      degree: "Winner!!",
      year: "23-Nov-2024",
      image: "/images/Screenshot 2024-12-02 002240.png",
      description: "Role-MERN Stack",
    },
  ];

  return (
    <section
      id="about"
      className="py-10 md:py-20 h-full relative overflow-hidden flex justify-center items-center"
    >
      {/* Background gradient and gooey elements remain the same */}
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

      {/* Star background remains the same */}
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
        className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative w-full"
        ref={ref}
      >
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500">
              About Me
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-8 mb-4 md:mb-6">
            {["skills", "education", "experience"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-base transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>
        </div>

        <div className="container-fluid bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg rounded-2xl p-4 md:p-8 shadow-2xl">
          {activeTab === "skills" && (
            <div className="space-y-6 text-center">
              <h1 className="text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Technology-Stack
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 max-w-[1200px] w-full mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 md:p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={`
                      rounded-xl p-2 md:p-3 h-20 md:h-24 w-full max-w-[200px]
                      bg-gradient-to-br ${skill.gradient}
                      transform transition-all duration-300
                      ${hoveredSkill === skill.name ? "scale-105" : "scale-100"}
                    `}
                    >
                      <div className="flex flex-col items-center justify-center h-full w-full">
                        {skill.image && (
                          <div className="relative h-6 w-6 md:h-10 md:w-10 overflow-hidden">
                            <Image
                              src={skill.image}
                              alt={skill.name}
                              fill
                              className="transition-transform duration-300 filter brightness-100"
                            />
                          </div>
                        )}

                        <p className="text-[10px] md:text-xs font-semibold text-white text-center mt-1">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-white rounded-full"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="flex overflow-x-auto p-2 md:p-4 gap-3 md:gap-6 scrollbar-hide">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 min-w-[280px] md:min-w-[320px] flex-shrink-0"
                >
                  <h3 className="text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {edu.institution}
                  </h3>
                  <p className="text-sm md:text-lg font-semibold text-gray-200 mt-2">
                    {edu.note}
                  </p>
                  <p className="text-sm md:text-lg font-semibold text-gray-200 mt-2">
                    {edu.degree}
                  </p>
                  <p className="text-xs md:text-sm text-indigo-400 mt-1">
                    {edu.year}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mt-2">
                    {edu.description}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mt-2">
                    {edu.description1}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="flex overflow-x-auto p-2 md:p-4 gap-3 md:gap-6 scrollbar-hide">
              {experience.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 min-w-[280px] md:min-w-[320px] flex-shrink-0"
                >
                  {edu.image && (
                    <div className="absolute top-4 right-4">
                      <Image
                        src={edu.image}
                        alt={""}
                        width={40}
                        height={40}
                        className="object-contain opacity-100 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}

                  <h3 className="text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {edu.institution}
                  </h3>

                  <p className="text-sm md:text-lg font-semibold text-gray-200 mt-2">
                    {edu.degree}
                  </p>
                  <p className="text-xs md:text-sm text-indigo-400 mt-1">
                    {edu.year}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mt-2">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
