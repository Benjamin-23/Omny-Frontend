import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
          Education Hub
        </h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Master DeFi concepts and learn how to navigate the OMNY.FI ecosystem
        </p>

        {/* Beginner's Guide */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="flex-shrink-0 bg-omny-purple/20 p-4 rounded-2xl">
                <div className="text-4xl">📚</div>
              </div>
              <div className="flex-grow">
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">BEGINNER GUIDE</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  DeFi Fundamentals
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    Master the core concepts of decentralized finance and learn how to navigate the
                    DeFi ecosystem safely and effectively.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">01</span>
                    </div>
                    <span className="text-gray-300">What is DeFi and why does it matter?</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">02</span>
                    </div>
                    <span className="text-gray-300">Understanding blockchain technology</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">03</span>
                    </div>
                    <span className="text-gray-300">Setting up your first crypto wallet</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">04</span>
                    </div>
                    <span className="text-gray-300">Security best practices in DeFi</span>
                  </div>
                </div>

                <Link to="/defi-fundamentals" className="inline-flex items-center text-omny-purple hover:text-purple-400 transition group">
                  <span>View Full Guide</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="text-xl font-bold mb-6">Key Concepts</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Liquidity Pools & Automated Market Makers</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Yield Farming & Staking</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Impermanent Loss & Risk Management</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Cross-Chain Bridges & Interoperability</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-omny-purple/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-omny-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Governance & DAOs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Topics */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-br from-omny-purple/10 to-purple-900/10 p-8 rounded-3xl border border-omny-purple/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
              <div className="flex-shrink-0 bg-omny-purple/20 p-4 rounded-2xl">
                <div className="text-4xl">🚀</div>
              </div>
              <div className="flex-grow">
                <div className="text-sm text-omny-purple font-medium tracking-wider mb-2">ADVANCED TOPICS</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                  OMNY.FI Platform Mastery
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    Take your DeFi skills to the next level with advanced strategies and deep dives into OMNY.FI's unique features.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">01</span>
                    </div>
                    <span className="text-gray-300">Advanced Cross-Chain Strategies</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">02</span>
                    </div>
                    <span className="text-gray-300">Optimizing Yields with AI-powered Tools</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">03</span>
                    </div>
                    <span className="text-gray-300">NFT Staking & Hybrid Liquidity Pools</span>
                  </div>
                  <div className="flex items-center bg-omny-dark/30 p-4 rounded-xl transition hover:bg-omny-dark/40">
                    <div className="w-8 h-8 bg-omny-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-omny-purple">04</span>
                    </div>
                    <span className="text-gray-300">Governance Participation & Proposal Creation</span>
                  </div>
                </div>

                <Link to="/advanced-topics" className="inline-flex items-center text-omny-purple hover:text-purple-400 transition group">
                  <span>View Advanced Topics</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-omny-dark/30 p-8 rounded-xl border border-omny-purple/10">
                <h3 className="font-bold mb-6">Step-by-Step Guides</h3>
                <div className="space-y-4">
                  <Link to="/guides/getting-started" className="block p-4 bg-black/20 rounded-lg hover:bg-omny-purple/10 transition-all">
                    <div className="flex items-center justify-between">
                      <span>Getting Started with OMNY.FI</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                  <Link to="/guides/liquidity" className="block p-4 bg-black/20 rounded-lg hover:bg-omny-purple/10 transition-all">
                    <div className="flex items-center justify-between">
                      <span>Liquidity Pool Management</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                  <Link to="/guides/governance" className="block p-4 bg-black/20 rounded-lg hover:bg-omny-purple/10 transition-all">
                    <div className="flex items-center justify-between">
                      <span>Governance Participation Guide</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Webinars & FAQ */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Webinars */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-omny-purple to-purple-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🎯</div>
                <h2 className="text-2xl font-bold">Upcoming Webinars</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-omny-dark/30 p-4 rounded-xl">
                  <div className="text-sm text-omny-purple mb-2">March 15, 2025 • 2:00 PM UTC</div>
                  <h3 className="font-bold mb-2">DeFi Mastery Workshop</h3>
                  <p className="text-sm text-gray-300">Deep dive into advanced DeFi strategies and yield optimization techniques.</p>
                  <Link to="/webinars/defi-mastery" className="inline-flex items-center text-omny-purple text-sm mt-2 hover:text-purple-400 transition group">
                    <span>Register Now</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="bg-omny-dark/30 p-4 rounded-xl">
                  <div className="text-sm text-omny-purple mb-2">April 2, 2025 • 3:00 PM UTC</div>
                  <h3 className="font-bold mb-2">Cross-Chain Trading Strategies</h3>
                  <p className="text-sm text-gray-300">Learn how to maximize profits by trading across multiple blockchains.</p>
                  <Link to="/webinars/cross-chain-trading" className="inline-flex items-center text-omny-purple text-sm mt-2 hover:text-purple-400 transition group">
                    <span>Register Now</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/webinars" className="inline-flex items-center text-omny-purple hover:text-purple-400 transition group">
                  <span>View All Webinars</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-omny-purple to-purple-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm border border-omny-purple/20">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">❓</div>
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-omny-dark/30 p-4 rounded-xl">
                  <h3 className="font-bold mb-2">What makes OMNY.FI different from other DeFi platforms?</h3>
                  <p className="text-sm text-gray-300">OMNY.FI combines AI-powered yield optimization with seamless cross-chain functionality, allowing users to access the best opportunities across multiple blockchains from a single interface.</p>
                </div>
                <div className="bg-omny-dark/30 p-4 rounded-xl">
                  <h3 className="font-bold mb-2">How secure is the OMNY.FI platform?</h3>
                  <p className="text-sm text-gray-300">Security is our top priority. Our smart contracts have undergone rigorous audits by leading security firms, and we implement multiple layers of protection to safeguard user funds.</p>
                </div>
                <div className="bg-omny-dark/30 p-4 rounded-xl">
                  <h3 className="font-bold mb-2">Do I need technical knowledge to use OMNY.FI?</h3>
                  <p className="text-sm text-gray-300">While some DeFi knowledge is helpful, OMNY.FI is designed to be user-friendly for both beginners and advanced users. Our education hub provides all the resources you need to get started.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/faq" className="inline-flex items-center text-omny-purple hover:text-purple-400 transition group">
                  <span>View All FAQs</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 