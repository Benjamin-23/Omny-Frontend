import React from 'react';
import { Link } from 'react-router-dom';

const Governance = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
          DAO Governance
        </h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Shape the future of cross-chain DeFi through decentralized governance
        </p>

        {/* How DAO Works */}
        <div className="relative mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-omny-purple to-purple-600 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-omny-dark/50 p-12 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">⚡</div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                How Our DAO Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="text-2xl mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">Proposal Creation</h3>
                <p className="text-gray-300">
                  Hold 100k OMNY tokens to create and submit governance proposals for protocol changes.
                </p>
              </div>
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="text-2xl mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Community Voting</h3>
                <p className="text-gray-300">
                  OMNY holders vote on proposals with voting power proportional to their holdings.
                </p>
              </div>
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="text-2xl mb-4">03</div>
                <h3 className="text-xl font-bold mb-4">Implementation</h3>
                <p className="text-gray-300">
                  Approved proposals are automatically executed through smart contracts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Token */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="flex-shrink-0 bg-omny-purple/20 p-4 rounded-2xl">
                <div className="text-4xl">🪙</div>
              </div>
              <div className="flex-grow">
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">GOVERNANCE TOKEN</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  OMNY Token Utility
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    The OMNY token is the governance token of the OMNY.FI ecosystem, granting holders voting rights and other benefits within the platform.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">1B</div>
                    <div className="text-sm text-gray-400">Total Supply</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">30%</div>
                    <div className="text-sm text-gray-400">Community Allocation</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">100k</div>
                    <div className="text-sm text-gray-400">Proposal Threshold</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">5%</div>
                    <div className="text-sm text-gray-400">Quorum Requirement</div>
                  </div>
                </div>

                <Link to="/tokenomics" className="inline-flex items-center text-omny-purple hover:text-purple-400 transition group">
                  <span>View Full Tokenomics</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-6">Token Utility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Governance voting rights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Fee discounts on platform transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Staking rewards and yield boosters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Access to premium features and tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Protocol revenue sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Active Proposals */}
        <div className="relative mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-omny-purple to-purple-600 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-omny-dark/50 p-12 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">🗳️</div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                Active Proposals
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <div className="text-sm text-omny-purple mb-1">OIP-23</div>
                    <h3 className="text-xl font-bold">Increase Cross-Chain Liquidity Incentives</h3>
                    <p className="text-gray-300">Allocate additional rewards to cross-chain liquidity providers</p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    Active
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div>Ends in: 3 days</div>
                  <div>Current Votes: 8.2M OMNY (82% in favor)</div>
                </div>
              </div>
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <div className="text-sm text-omny-purple mb-1">OIP-24</div>
                    <h3 className="text-xl font-bold">Add TON Chain Integration</h3>
                    <p className="text-gray-300">Integrate TON blockchain for expanded cross-chain capabilities</p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    Active
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div>Ends in: 5 days</div>
                  <div>Current Votes: 6.5M OMNY (91% in favor)</div>
                </div>
              </div>
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <div className="text-sm text-omny-purple mb-1">OIP-25</div>
                    <h3 className="text-xl font-bold">New ETH-TON Liquidity Pool</h3>
                    <p className="text-gray-300">Add new ETH-TON liquidity pool with enhanced rewards</p>
                  </div>
                  <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                    Pending
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div>Starts in: 2 days</div>
                  <div>Quorum Required: 10M OMNY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance; 