import React from 'react';
import { motion } from 'framer-motion';
import { Fullscreen } from 'lucide-react';

const FloatingContactImage = () => {
  return (
    <motion.img
      src="https://asingla.netlify.app/static/media/floating_contact.33436ad5f0d9d8b68087.png"
      alt="Floating Contact"
      initial={{ 
        y: 0,
        x: '20%',
        scale: 1 
      }}
      height={Fullscreen}
      animate={{ 
        y: [0, -20, 0], // Reduced vertical movement
        rotate: [0, 3, -3, 0], // Reduced rotation
        scale: [1, 1.2, 1] // Subtler scaling
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: "easeInOut"
      }}
      style={{ height: '120px', width: '120px',position:"relative",left:"90%"}}
      className="h-16 w-16 absolute right-6 bottom-4 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    />
  );
};

export default FloatingContactImage;