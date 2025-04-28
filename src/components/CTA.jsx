import React from 'react';

const CTA = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-omny-purple rounded-3xl blur opacity-25"></div>
        <div className="relative bg-gradient-to-br from-omny-dark/90 to-omny-dark/70 rounded-3xl p-12 text-center backdrop-blur-sm border border-omny-purple/20">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-r from-omny-purple to-purple-600 p-1 rounded-full">
              <div className="bg-omny-dark px-8 py-3 rounded-full">
                <span className="text-sm font-medium bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">100K+ Active Users & Growing</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-omny-purple to-purple-500 bg-clip-text text-transparent">
              Experience the Future of DeFi
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join OMNY.FI's ecosystem and unlock the power of AI-driven cross-chain solutions. 
              Trade, stake, and earn across multiple blockchains seamlessly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button className="group relative bg-gradient-to-r from-omny-purple to-purple-600 px-10 py-4 rounded-full transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden">
              <span className="relative z-10 font-medium">Launch dApp</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-omny-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="group relative px-10 py-4 rounded-full transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center border border-omny-purple hover:border-purple-500">
              <span className="bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent font-medium">View Documentation</span>
              <svg className="w-5 h-5 text-omny-purple group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-omny-purple/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 