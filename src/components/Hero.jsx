import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const particleCount = 30; // Number of particles
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100, // Random horizontal position (0-100%)
          size: Math.random() * 3 + 1, // Random size (1-4px)
          opacity: Math.random() * 0.5 + 0.1, // Random opacity (0.1-0.6)
          delay: Math.random() * 5, // Random animation delay (0-5s)
          duration: Math.random() * 10 + 10, // Random animation duration (10-20s)
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Regenerate particles periodically to keep the animation fresh
    const interval = setInterval(() => {
      generateParticles();
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full animate-float-up"
            style={{
              left: `${particle.left}%`,
              bottom: '-10px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
      
      {/* Rest of your Hero component */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
            The Omnichain DeFi Hub for Seamless Cross-Chain Liquidity
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Unifying blockchain ecosystems through advanced cross-chain technology and AI-powered DeFi solutions
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-omny-purple px-8 py-3 rounded-full hover:bg-opacity-90 transition">
              Get Started
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-full hover:bg-white/20 transition">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 