import React, { useState, useEffect } from "react";
import '../styles/wave.css';
import '../styles/homepage.css';
import SocialHandles from "./SocialHandles";


export default function Homepage () {

  return (
    <>
    <section id="home" className="pt-14 bg-transparent relative overflow-hidden" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",minHeight:"500px"}}>
    <div 
      style={{
        backgroundColor: "transparent",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        gap: "0.5rem",
      }}
    >
      <h1 
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #6366F1, #8B5CF6)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
          textAlign:"center",
        }}
      >
        Hi
      </h1>
      
      <h2 
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#E5E7EB", // gray-200
          marginBottom: "0.25rem",
          letterSpacing: "-0.02em",
          textAlign:"center",
        }}
      >
        I'm Aditya,
      </h2>
      
      
      
      <h4 
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          color: "#9CA3AF", // gray-400
          maxWidth: "600px",
          fontWeight: "normal",
          letterSpacing: "0.01em",
          textAlign:"center",
        }}
      >
        Student at Bennett University with strong technical skills anchored on extensive engineering coursework and a special focus on Front-end Development and DSA.
      </h4>
    </div>
    <div id="gooey" className="h-[32vw] w-[32vw] absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 top-[5%] left-[60%] blur-[20px] animate-[gooey_6s_ease-in-out_infinite_alternate]" style={{zIndex:"1"}}>
      
    </div>
    <div style={{width:"50%",zIndex:"200"}}>
    
      <h2
        style={{
          
          fontSize: "2.5rem",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #8B5CF6, #EC4899)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          textAlign: "center",
          animation: "pulse 2s infinite linear", // Apply rotation animation
          color:"black",
        }}
      >
        A MERN
        
      </h2>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #8B5CF6, #EC4899)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: "1rem",
          textAlign: "center",
          animation: "pulse 2s infinite linear", // Apply rotation animation
          color:"black",
        }}
      >
        Stack-developer
      </h2>
      <div style={{marginLeft:"36%"}}><SocialHandles/></div>
    </div>
      
    </section>
      <div className="wave_anim absolute bottom-0 ">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      <div className="wave wave5"></div>
    </div>
    </>
  );
};
