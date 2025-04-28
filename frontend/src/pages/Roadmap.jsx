import React from 'react';
import { Link } from 'react-router-dom';

const Roadmap = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
          Development Roadmap
        </h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Our journey to revolutionize cross-chain DeFi from February to September 2025
        </p>

        {/* Phase 1: Community Engagement */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="flex-shrink-0 bg-omny-purple/20 p-4 rounded-2xl">
                <div className="text-4xl">🌟</div>
              </div>
              <div className="flex-grow">
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">PHASE 1 • FEBRUARY 2025</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  Community Engagement & NFT Airdrop
                </h2>
              </div>
              <div className="md:self-start">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-green-400 text-sm font-medium">Current Phase</span>
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    Kickstarting our journey with community building and rewarding early adopters through exclusive NFT airdrops.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-gray-300">Website launch</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-gray-300">Social media channels</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Founder's NFT airdrop</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Community AMA sessions</span>
                  </div>
                </div>
              </div>

              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-4">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Reach 10,000 community members across all platforms</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Distribute 5,000 Founder's NFTs to early supporters</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Establish core community governance structure</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Launch education hub with DeFi fundamentals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Protocol Development */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="flex-shrink-0 bg-omny-purple/20 p-4 rounded-2xl">
                <div className="text-4xl">⚙️</div>
              </div>
              <div className="flex-grow">
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">PHASE 2 • MARCH-APRIL 2025</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  Protocol Development
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    Building the core protocol infrastructure and smart contracts for cross-chain functionality.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Smart contract development</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Cross-chain bridge implementation</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">AI optimization engine</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Security audits</span>
                  </div>
                </div>
              </div>

              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-4">Technical Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Support for 5+ major blockchains at launch</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Gas optimization reducing fees by up to 40%</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">AI-powered yield strategies with auto-rebalancing</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Comprehensive security audits by leading firms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: Token Launch */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="flex-shrink-0 bg-omny-purple/20 p-4 rounded-2xl">
                <div className="text-4xl">🚀</div>
              </div>
              <div className="flex-grow">
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">PHASE 3 • MAY-JUNE 2025</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  Token Launch & Governance
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    Launching our three-token ecosystem and establishing decentralized governance mechanisms.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">OMNY token launch</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Governance portal</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Staking mechanisms</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Initial liquidity pools</span>
                  </div>
                </div>
              </div>

              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-4">Tokenomics Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Three-token model: OMNY, sOMNY, and veOMNY</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">NFT staking with boosted rewards</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Governance voting power based on token holdings</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Protocol revenue sharing for token holders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 4 & 5 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="flex-shrink-0 bg-omny-purple/20 p-4 rounded-2xl">
                <div className="text-4xl">🚀</div>
              </div>
              <div className="flex-grow">
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">PHASE 4 & 5 • JULY-SEPTEMBER 2025</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  Platform Launch
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    Public testnet launch followed by full mainnet deployment with complete feature set and ecosystem activation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Beta testnet release</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Community testing phase</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">→</span>
                    </div>
                    <span className="text-gray-300">Mainnet deployment</span>
                  </div>
                </div>
              </div>

              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-4">Launch Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Cross-chain swaps with optimized routing</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">AI-powered yield strategies</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">NFT staking and rewards</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Full governance implementation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 