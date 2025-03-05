import React from 'react';
import { Instagram, Github, Linkedin, Youtube } from 'lucide-react';

const SocialHandles = () => {
  const socialHandles = [
    {
      name: "Instagram",
      icon: <Instagram />,
      link: "https://www.instagram.com/__.aditya_agrawal_/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/aditya-a-527150303?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Buh6JvriVRJaua8NOLXKXzw%3D%3D",
    },
    {
      name: "YouTube",
      icon: <Youtube />,
      link: "https://www.youtube.com/@Coder-python-Coder",
    },
    {
      name: "GitHub",
      icon: <Github />,
      link: "https://github.com/Aditya30ag",
    }
  ];

  return (
    <div className="flex gap-6 items-center justify-center p-8">
      {socialHandles.map((handle, index) => (
        <a
          key={index}
          href={handle.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group transition-all duration-500 hover:scale-110"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"/>
          <div className="relative p-4 rounded-full bg-gray-800 group-hover:bg-gradient-to-br from-blue-600 to-purple-600 transition-all duration-500">
            {React.cloneElement(handle.icon, { 
              size: 24,
              strokeWidth: 2,
              className: "text-blue-400 group-hover:text-white transition-colors duration-500 animate-bounce group-hover:animate-none"
            })}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;