import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import "../styles/about.css";
import { Award } from 'lucide-react';

const About = () => {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH || "";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [activeTab, setActiveTab] = useState("skills");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

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
      description: "39th rank SIH in Bennett University ",
    },
    {
      institution: "GFG HackFest",
      degree: "RANK-4th",
      year: "2024",
      description: "Role-MERN Stack",
    },
    {
      institution: "Benovate-Ideathon",
      degree: "RANK-1 Winner!!",
      year: "23-Nov-2024",
      description: "Role-MERN Stack",
    },
  ];
  const certificates = [
    {
      institution: "Javascript Intermediate",
      image: "/images/Screenshot 2024-11-26 145051.png",
      year: "2024",
      link:"https://www.hackerrank.com/certificates/iframe/039b5c3bb1b4",
      description: "Click !! ",
    },
    {
      institution: "GFG Hackfest Finalist",
      image: "/images/Screenshot 2024-10-29 151804.png",
      year: "2024",
      link:"https://media.geeksforgeeks.org/notifications/image(39)-min-20240923172036.png",
      description: "Click !!",
    },
    {
      institution: "Bennovate Ideathon",
      image: "/images/Screenshot 2024-11-29 112520.png",
      link:"",
      year: "2024",
      description: "Click !!",
    },
    {
      institution: "Digital Skills User experience",
      image: "/images/Screenshot 2024-11-29 113315.png",
      link:"https://www.futurelearn.com/certificates/e2m17oo",
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

  return (
    
    <section
      id="about"
      className="py-20 relative overflow-hidden flex justify-center items-center"
      style={{ zIndex: "200" }}
    >
     
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-green-900/20 to-indigo-900/20 animate-gradient-shift">
      <div id="gooey" className="h-[10vw] w-[10vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[44%] left-[88%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]" style={{zIndex:"1"}}>
      
      </div>
      <div id="gooey" className="h-[8vw] w-[8vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[58%] left-[88%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]" style={{zIndex:"1"}}>
      
      </div>
      <div id="gooey" className="h-[10vw] w-[10vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[45%] left-[2%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]" style={{zIndex:"1"}}>
      
      </div>
      <div id="gooey" className="h-[8vw] w-[8vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[58%] left-[2%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]" style={{zIndex:"1"}}>
      
      </div>
      </div>
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              opacity: Math.random() * 0.7 + 0.4,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-4 relative" ref={ref}>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500">
              About Me
            </span>
          </h1>

          <div className="flex justify-center gap-4 mt-8 mb-6">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "skills"
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Hackathons
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "certificates"
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>
        <div className="container-fluid bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          {activeTab === "skills" && (
            <div className="space-y-6 text-center">
              <h1>Technology-Stack</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-[1200px] w-full">
                
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={`
                      rounded-xl p-3 h-24 w-full max-w-[200px]
                      bg-gradient-to-br ${skill.gradient}
                      transform transition-all duration-300
                      ${hoveredSkill === skill.name ? "scale-105" : "scale-100"}
                      hover:shadow-lg hover:shadow-${skill.gradient.split("-")[2]}-500/20
                    `}
                    >
                      <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className="relative h-10 w-10 overflow-hidden">
                          <Image
                            src={publicPath + skill.image}
                            alt={skill.name}
                            fill
                            className="transition-transform duration-300 filter brightness-100"
                          />
                        </div>
                        <p className="text-xs font-semibold text-white text-center">
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
            <div className="flex overflow-x-auto p-4 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
                >
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {edu.institution}
                  </h3>
                  <p className="text-lg font-semibold text-gray-200 mt-2">
                    {edu.note}
                  </p>
                  <p className="text-lg font-semibold text-gray-200 mt-2">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-indigo-400 mt-1">{edu.year}</p>
                  <p className="text-gray-400 mt-2">{edu.description}</p>
                  <p className="text-gray-400 mt-2">{edu.description1}</p>
                </motion.div>
              ))}
            </div>
          )}
          {activeTab === "experience" && (
          <div className="flex overflow-x-auto p-4 gap-6">
                {experience.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 min-w-[320px] flex-shrink-0"
                  >
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {edu.institution}
                    </h3>
                    
                    <p className="text-lg font-semibold text-gray-200 mt-2">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-indigo-400 mt-1">
                      {edu.year}
                    </p>
                    <p className="text-gray-400 mt-2">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
          )}

          {activeTab === "certificates" && (
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                Professional Certifications
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Showcasing my continuous learning and professional development through verified certifications.
              </p>
            </div>
    
            <div className="flex overflow-x-auto space-x-6 pb-8 no-scrollbar">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 
                              hover:from-gray-700 hover:to-gray-800 
                              transition-all duration-300 
                              border border-gray-700 
                              min-w-[320px] 
                              max-w-[400px] 
                              flex-shrink-0 
                              shadow-lg 
                              hover:shadow-xl 
                              transform hover:-translate-y-2"
                  >
                    <div className="flex items-center mb-4">
                      <Award className="text-indigo-400 mr-3" size={32} />
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                        {cert.institution}
                      </h3>
                    </div>
                  <a href={cert.link} target="blank">
                    <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        src={publicPath + cert.image}
                        alt={cert.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
      
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-gray-200">
                        {cert.degree}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {cert.description}
                      </p>
                      {cert.issueDate && (
                        <div className="text-xs text-gray-500 mt-2">
                          Issued: {cert.issueDate}
                        </div>
                      )}
                    </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
