import React from 'react'
import '../styles/wave.css';

export default function Wave() {
  return (
    <div className="wave-container">
        <div className="wave_anim w-full">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <div className="wave wave5"></div>
        </div>
    </div>
  )
}
