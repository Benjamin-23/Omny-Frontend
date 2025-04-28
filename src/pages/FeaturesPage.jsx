import React from 'react';

const FeaturesPage = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
          Platform Features
        </h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Discover our innovative features powered by advanced AI and cross-chain technology
        </p>
        
        {/* Cross-Chain Swaps */}
        <div className="relative mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-omny-purple to-purple-600 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-omny-dark/50 p-12 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="text-4xl mr-4">🔄</div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                  Cross-Chain Swaps (TCCP)
                </h2>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-omny-purple/20 px-4 py-1 rounded-full text-sm">
                  Powered by AI
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our Trustless Cross-Chain Protocol (TCCP) enables seamless asset swaps across multiple blockchains with minimal slippage and maximum security.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">10+</div>
                    <div className="text-sm text-gray-400">Supported Chains</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">0.1%</div>
                    <div className="text-sm text-gray-400">Average Slippage</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">30s</div>
                    <div className="text-sm text-gray-400">Average Swap Time</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">$500M+</div>
                    <div className="text-sm text-gray-400">Total Volume</div>
                  </div>
                </div>
              </div>
              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">AI-optimized routing for best rates across chains</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Gas fee optimization to reduce transaction costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">MEV protection for all transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Real-time price monitoring and execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Staking */}
        <div className="relative mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-omny-purple rounded-2xl blur opacity-25"></div>
          <div className="relative bg-omny-dark/50 p-12 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="text-4xl mr-4">🎨</div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                  NFT Staking
                </h2>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-omny-purple/20 px-4 py-1 rounded-full text-sm">
                  Exclusive Rewards
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Stake your NFTs in our hybrid pools to earn enhanced yields and exclusive rewards, unlocking new utility for your digital collectibles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">5</div>
                    <div className="text-sm text-gray-400">NFT Collections</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">15%</div>
                    <div className="text-sm text-gray-400">Average APY</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">1,000+</div>
                    <div className="text-sm text-gray-400">Staked NFTs</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">Weekly</div>
                    <div className="text-sm text-gray-400">Reward Distribution</div>
                  </div>
                </div>
              </div>
              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-4">Staking Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Earn passive income from your NFT holdings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Access to exclusive platform features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Boosted yields based on NFT rarity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Priority access to new platform features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Asset Liquidity */}
        <div className="relative mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-omny-purple to-purple-600 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-omny-dark/50 p-12 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="text-4xl mr-4">💧</div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                  Multi-Asset Liquidity
                </h2>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-omny-purple/20 px-4 py-1 rounded-full text-sm">
                  Optimized Returns
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Provide liquidity across multiple assets and chains simultaneously, with our AI-powered system automatically rebalancing your portfolio for maximum returns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">20+</div>
                    <div className="text-sm text-gray-400">Liquidity Pools</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">18%</div>
                    <div className="text-sm text-gray-400">Average APY</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">$250M+</div>
                    <div className="text-sm text-gray-400">Total Liquidity</div>
                  </div>
                  <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/10 hover:border-omny-purple/30 transition">
                    <div className="text-xl font-bold mb-2">Daily</div>
                    <div className="text-sm text-gray-400">Rebalancing</div>
                  </div>
                </div>
              </div>
              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-4">Liquidity Provider Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Diversified exposure across multiple assets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Reduced impermanent loss through AI optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Auto-compounding rewards for maximum growth</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Single-transaction entry for multiple pools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DAO Governance */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-omny-purple rounded-2xl blur opacity-25"></div>
          <div className="relative bg-omny-dark/50 p-12 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div className="flex items-center">
                <div className="text-4xl mr-4">⚡</div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                  DAO Governance
                </h2>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-omny-purple/20 px-4 py-1 rounded-full text-sm">
                  Community Driven
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Participate in platform governance through our decentralized autonomous organization.
                </p>
                <div className="space-y-4">
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Active Proposals</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">12 Live</span>
                    </div>
                  </div>
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Governance Participation</span>
                      <span className="text-omny-purple">68%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-4">Governance Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Vote on protocol upgrades and parameter changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Submit proposals for new features or integrations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Participate in treasury allocation decisions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Earn rewards for active governance participation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage; 