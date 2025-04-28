import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
          About OMNY.FI
        </h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Pioneering the future of decentralized finance through innovative cross-chain solutions and AI-powered technology
        </p>
        
        {/* Vision Section */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-omny-purple/20 p-4 rounded-2xl mb-4">
                <div className="text-4xl">🌟</div>
              </div>
              <div>
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">OUR VISION</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  Building the Future of Cross-Chain DeFi
                </h2>
              </div>
              <div className="max-w-2xl mx-auto mt-6">
                <p className="text-gray-300 leading-relaxed">
                  OMNY.FI is pioneering the next evolution of DeFi by creating a seamless, unified ecosystem that transcends blockchain boundaries. We envision a future where cross-chain DeFi is accessible to everyone, from beginners to advanced users.
                </p>
              </div>
            </div>

            {/* Features and Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Key Features */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                  <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-omny-purple">01</span>
                  </div>
                  <span className="text-gray-300">Automatically optimizes yields across chains</span>
                </div>
                <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                  <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-omny-purple">02</span>
                  </div>
                  <span className="text-gray-300">Minimizes risks through AI-driven analysis</span>
                </div>
                <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                  <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-omny-purple">03</span>
                  </div>
                  <span className="text-gray-300">Simplifies complex DeFi operations</span>
                </div>
              </div>

              {/* Platform Metrics */}
              <div className="space-y-4">
                <div className="group bg-omny-dark/40 p-6 rounded-xl border border-omny-purple/5 transition hover:border-omny-purple/20">
                  <div className="text-3xl font-bold text-omny-purple mb-2">10+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition">Blockchain Networks Integrated</div>
                </div>
                <div className="group bg-omny-dark/40 p-6 rounded-xl border border-omny-purple/5 transition hover:border-omny-purple/20">
                  <div className="text-3xl font-bold text-omny-purple mb-2">24/7</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition">AI-Powered Optimization</div>
                </div>
                <div className="group bg-omny-dark/40 p-6 rounded-xl border border-omny-purple/5 transition hover:border-omny-purple/20">
                  <div className="text-3xl font-bold text-omny-purple mb-2">100%</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition">Security Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -right-12 -top-12 w-24 h-24 bg-omny-purple/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -left-8 -bottom-8 w-20 h-20 bg-purple-600/20 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Key Challenges */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-omny-purple to-purple-500">
              Key Challenges We're Solving
            </span>
          </h2>
          <p className="text-center text-gray-300/70 mb-12 max-w-2xl mx-auto">
            Our team is dedicated to addressing the core challenges in DeFi, making cross-chain interactions seamless and secure for everyone. Through innovative solutions and cutting-edge technology, we're reshaping the future of decentralized finance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-omny-purple/10 transition-all duration-300 border border-transparent hover:border-omny-purple/30">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-4">Fragmented Liquidity</h3>
              <p className="text-gray-300">
                Unifying scattered liquidity across multiple chains through our innovative cross-chain protocols.
              </p>
            </div>

            <div className="group bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-omny-purple/10 transition-all duration-300 border border-transparent hover:border-omny-purple/30">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Cross-Chain Risks</h3>
              <p className="text-gray-300">
                Advanced security measures and AI-driven risk assessment to protect cross-chain transactions.
              </p>
            </div>

            <div className="group bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-omny-purple/10 transition-all duration-300 border border-transparent hover:border-omny-purple/30">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-4">Decentralized Governance</h3>
              <p className="text-gray-300">
                True community-driven development through our innovative DAO structure and voting mechanisms.
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Preview */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-omny-purple rounded-2xl blur opacity-25"></div>
          <div className="relative bg-omny-dark/50 p-12 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="text-4xl mr-4">🚀</div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                  7-Month Roadmap Overview
                </h2>
              </div>
              <Link to="/roadmap" className="bg-white/10 px-6 py-2 rounded-full hover:bg-white/20 transition flex items-center group">
                View Full Roadmap
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-omny-purple/20 px-3 py-1 rounded-full text-sm mr-4">Phase 1</div>
                <div>
                  <h3 className="font-bold mb-2">Community Building & NFT Airdrop</h3>
                  <p className="text-gray-300">Initial community development and exclusive NFT distribution to early supporters.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-omny-purple/20 px-3 py-1 rounded-full text-sm mr-4">Phase 2</div>
                <div>
                  <h3 className="font-bold mb-2">Platform Development</h3>
                  <p className="text-gray-300">Core infrastructure development and security audits.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-omny-purple/20 px-3 py-1 rounded-full text-sm mr-4">Phase 3</div>
                <div>
                  <h3 className="font-bold mb-2">Mainnet Launch</h3>
                  <p className="text-gray-300">Official platform launch with full feature set and multi-chain support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -left-12 -top-12 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>
          <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-omny-purple/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About; 