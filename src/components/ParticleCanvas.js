import React, { useEffect, useRef } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  let mouseX = 0,
    mouseY = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Resize canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    // Initialize particles
    const createParticles = () => {
      const numParticles = Math.min(window.innerWidth, window.innerHeight) * 0.1;
      particlesRef.current = Array.from({ length: numParticles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.5,
      }));
    };

    // Draw connecting lines
    const drawLine = (p1, p2, distance, maxDistance) => {
      const alpha = 1 - distance / maxDistance;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.3})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary collision
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= dx * force * 0.02;
          p.y -= dy * force * 0.02;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha * 0.6})`;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) drawLine(p, p2, distance, 100);
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Initialize animation
    resizeCanvas();
    animate();

    // Event listeners
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default ParticleCanvas;
