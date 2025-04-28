import React from 'react';
import { Link } from 'react-router-dom';

const NFTTokenomics = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
          NFT & Tokenomics
        </h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Explore our innovative three-token ecosystem and NFT staking mechanics
        </p>
        
        {/* NFT Minting & Staking */}
        <div className="relative mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-omny-purple to-purple-600 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-omny-dark/50 p-12 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">🎨</div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                NFT Ecosystem
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Mint and stake NFTs to earn sOMNY rewards while participating in our innovative liquidity pools.
                </p>
                <div className="space-y-4">
                  <div className="bg-omny-dark/30 p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Minting Benefits</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="text-omny-purple mr-3">→</span>
                        <span>Early access to new features</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-omny-purple mr-3">→</span>
                        <span>Boosted staking rewards</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-omny-purple mr-3">→</span>
                        <span>Governance voting power</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="text-center mb-6">
                  <div className="text-xl font-bold mb-2">NFT Staking Stats</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-omny-dark/50 rounded-lg">
                      <div className="text-2xl font-bold text-omny-purple">15,234</div>
                      <div className="text-sm text-gray-400">Total NFTs Staked</div>
                    </div>
                    <div className="p-4 bg-omny-dark/50 rounded-lg">
                      <div className="text-2xl font-bold text-omny-purple">2.5x</div>
                      <div className="text-sm text-gray-400">Max Yield Boost</div>
                    </div>
                  </div>
                </div>
                <div className="bg-omny-dark/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span>Staking Capacity</span>
                    <span>76.2%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[76%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Token Ecosystem */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="flex-shrink-0 bg-omny-purple/20 p-4 rounded-2xl">
                <div className="text-4xl">💰</div>
              </div>
              <div className="flex-grow">
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">TOKEN ECOSYSTEM</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  Three-Token Model
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* OMNY Token */}
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="flex items-center mb-4">
                  <div className="bg-omny-purple/20 p-2 rounded-full mr-3">
                    <span className="text-xl">🪙</span>
                  </div>
                  <h3 className="text-xl font-bold">OMNY Token</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  The governance token of the ecosystem, used for voting on protocol changes and fee discounts.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Supply:</span>
                    <span>1,000,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Initial Price:</span>
                    <span>$0.05</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Utility:</span>
                    <span>Governance, Fees</span>
                  </div>
                </div>
              </div>

              {/* sOMNY Token */}
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="flex items-center mb-4">
                  <div className="bg-omny-purple/20 p-2 rounded-full mr-3">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold">sOMNY Token</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Staked OMNY token that generates yield and provides enhanced governance rights.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Staking APY:</span>
                    <span>12-24%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Lock Period:</span>
                    <span>30-365 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Utility:</span>
                    <span>Yield, Boosted Voting</span>
                  </div>
                </div>
              </div>

              {/* veOMNY Token */}
              <div className="bg-omny-dark/30 p-6 rounded-xl border border-omny-purple/20">
                <div className="flex items-center mb-4">
                  <div className="bg-omny-purple/20 p-2 rounded-full mr-3">
                    <span className="text-xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold">veOMNY Token</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Vote-escrowed OMNY that provides maximum governance power and protocol revenue sharing.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Lock Period:</span>
                    <span>1-4 years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Voting Power:</span>
                    <span>Up to 4x</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Utility:</span>
                    <span>Max Governance, Revenue</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              {/* OMNY Distribution */}
              <div>
                <h3 className="text-xl font-bold mb-4">OMNY Token Allocation</h3>
                <div className="space-y-4">
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Community Treasury</span>
                      <span>30%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[30%]"></div>
                    </div>
                  </div>
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Team & Advisors</span>
                      <span>20%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[20%]"></div>
                    </div>
                  </div>
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Liquidity Mining</span>
                      <span>25%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[25%]"></div>
                    </div>
                  </div>
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Ecosystem Growth</span>
                      <span>15%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[15%]"></div>
                    </div>
                  </div>
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Initial Sale</span>
                      <span>10%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[10%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* sOMNY Distribution */}
              <div>
                <h3 className="text-xl font-bold mb-4">sOMNY Token Allocation</h3>
                <div className="space-y-4">
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Staking Rewards</span>
                      <span>50%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[50%]"></div>
                    </div>
                  </div>
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Liquidity Mining</span>
                      <span>30%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[30%]"></div>
                    </div>
                  </div>
                  <div className="bg-omny-dark/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span>Community Growth</span>
                      <span>20%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[20%]"></div>
                    </div>
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

export default NFTTokenomics; 