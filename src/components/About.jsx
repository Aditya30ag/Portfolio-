import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import "../styles/about.css";

const About = () => {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH || '';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [activeTab, setActiveTab] = useState('skills');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const skills = [
    { name: 'React', image: '/images/Screenshot 2024-11-04 234142.png', type: 2, gradient: 'from-blue-600 to-cyan-500' },
    { name: 'Tailwind', image: '/images/Screenshot 2024-11-04 234832.png', type: 1, gradient: 'from-cyan-500 to-teal-400' },
    { name: 'Node.js', image: '/images/Screenshot 2024-11-04 234216.png', type: 1, gradient: 'from-green-600 to-emerald-500' },
    { name: 'Figma', image: '/images/Screenshot 2024-11-19 011336.png', type: 1, gradient: 'from-purple-600 to-pink-500' },
    { name: 'JavaScript', image: '/images/Screenshot 2024-11-04 234128.png', type: 1, gradient: 'from-yellow-500 to-orange-500' },
    { name: 'Python', image: '/images/Screenshot 2024-11-04 234227.png', type: 2, gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Next.js', image: '/images/Screenshot 2024-11-19 011028.png', type: 2, gradient: 'from-gray-800 to-gray-900' },
    { name: 'Package Manager', image: '/images/Screenshot 2024-11-19 010800.png', type: 1, gradient: 'from-red-600 to-pink-600' },
    { name: 'MongoDB', image: '/images/Screenshot 2024-11-04 234212.png', type: 1, gradient: 'from-green-500 to-emerald-600' },
    { name: 'GIT', image: '/images/Screenshot 2024-11-19 014112.png', type: 1, gradient: 'from-orange-500 to-emerald-600' },
  ];

  const education = [
    {
      institution: "BENNETT UNIVERSITY",
      note:"UNDER-GRADUATION (B.Tech)",
      degree: "Bachelor of Science in Computer Science",
      year: "2024-2028",
      description: "Major in Software Engineering",
      description1: ""
    },
    {
      institution: "ST Dominic SR SEC School,Mathura",
      note:"CLASS-12",
      degree: "Percentage - 85%",
      year: "2023",
      description: "Had exemplary academic track record with multiple academic excellence award.",
      description1:"Represented school on multiple platforms including on national level."
    }
  ];
  const experience = [
    {
      institution: "SIH BU",
      degree: "RANK-39th",
      year: "2024",
      description: "39th rank in Smarth India Hackathon in Bennett University "
    },
    {
      institution: "GFG HackFest",
      degree: "4th Rank in GFG HackFest",
      year: "2024",
      description: "Role-MERN Stack"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden flex justify-center items-center" style={{zIndex:"200"}}>
      <div className="max-w-6xl mx-auto px-4 relative" ref={ref}>
        <div
         
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500">
              About Me
            </span>
          </h1>
          
          <div className="flex justify-center gap-4 mt-8 mb-6">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Hackathons
            </button>
          </div>
        </div>
          <div className="container-fluid bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          {activeTab === 'skills' && (
            <div className="space-y-6">
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
                    <div className={`
                      rounded-xl p-3 h-24 w-full max-w-[200px]
                      bg-gradient-to-br ${skill.gradient}
                      transform transition-all duration-300
                      ${hoveredSkill === skill.name ? 'scale-105' : 'scale-100'}
                      hover:shadow-lg hover:shadow-${skill.gradient.split('-')[2]}-500/20
                    `}>
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

            {activeTab === 'education' && (
              <div className="space-y-6">
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
                    <p className="text-lg font-semibold text-gray-200 mt-2">{edu.note}</p>
                    <p className="text-lg font-semibold text-gray-200 mt-2">{edu.degree}</p>
                    <p className="text-sm text-indigo-400 mt-1">{edu.year}</p>
                    <p className="text-gray-400 mt-2">{edu.description}</p>
                    <p className="text-gray-400 mt-2">{edu.description1}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experience.map((edu, index) => (
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
                    
                    <p className="text-lg font-semibold text-gray-200 mt-2">{edu.degree}</p>
                    <p className="text-sm text-indigo-400 mt-1">{edu.year}</p>
                    <p className="text-gray-400 mt-2">{edu.description}</p>

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