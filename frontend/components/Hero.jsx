import React from 'react';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-24">
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
    </section>
  );
};

export default Hero; 