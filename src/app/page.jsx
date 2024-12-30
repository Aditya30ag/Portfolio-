"use client";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import '../styles/index.css';
import Homepage from "@/components/Homepage";
import About from "@/components/About";
import { motion, useScroll, useSpring } from 'framer-motion';
import Slider from "@/components/Slider";
import Wave from "@/components/Wave";
import { useEffect } from "react";

export default function Home() {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH;

  // Add scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "#0070f3",
          transformOrigin: "0%",
          zIndex: 1000
        }}
      />

      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <Navbar/>
      </motion.nav>

      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          type: "spring",
          bounce: 0.4
        }}
        viewport={{ once: true }}
      >
        <Homepage />
      </motion.section>
      <Wave/>
      
      {/* <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      > */}
        <About />
      {/* </motion.section> */}

      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.7,
          type: "spring",
          bounce: 0.3
        }}
        viewport={{ once: true }}
      >
        <Slider />
      </motion.section>

      {/* <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      > */}
        <Services/>
      {/* </motion.section> */}

      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 70
        }}
        viewport={{ once: true }}
      > */}
        <Contact />
      {/* </motion.section> */}

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 70
        }}
        viewport={{ once: true }}
      >
        <Footer/>
      </motion.footer>
    </>
  );
}