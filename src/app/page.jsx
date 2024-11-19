"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import '../styles/index.css';
import Homepage from "@/components/Homepage";
import About from "@/components/About";
import { motion, useScroll, useSpring } from 'framer-motion';
import Achievement from "@/components/Achievements";
import Achievement1 from "@/components/Achievements1";
import Slider from "@/components/Slider";

export default function Home() {
  const publicPath = process.env.NEXT_PUBLIC_PUBLIC_PATH;
  const [tabsData, settabsData] = useState([]);
  const [contactData, setcontactData] = useState([]);
  const [footerData, setfooterData] = useState([]);

  // Add scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchtabsData = async () => {
      try {
        const response = await fetch(publicPath + "/data/data.json");
        const data = await response.json();
        settabsData(data[0]);
        console.log(data[0]);
        setcontactData(data[3])
        setfooterData(data[4]);
      } catch {
        console.log("hllo")
      }
    };

    fetchtabsData();
  }, []);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

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
        <Navbar tabs={tabsData} />
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Achievement1 />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: true }}
      >
        <About />
      </motion.section>

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

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 70
        }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>

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
        <Footer contactOptions={contactData} footer={footerData} />
      </motion.footer>
    </>
  );
}