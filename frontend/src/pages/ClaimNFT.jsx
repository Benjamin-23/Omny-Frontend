import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ClaimNFT = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [nftClaimed, setNftClaimed] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedChain, setSelectedChain] = useState('eth');
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const particleCount = 15;
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10,
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const interval = setInterval(() => {
      generateParticles();
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const connectWallet = () => {
    setLoading(true);
    // Simulate wallet connection
    setTimeout(() => {
      setWalletConnected(true);
      setLoading(false);
    }, 1500);
  };

  const claimNFT = () => {
    setLoading(true);
    // Simulate NFT claiming
    setTimeout(() => {
      setNftClaimed(true);
      setLoading(false);
    }, 2000);
  };

  const faqItems = [
    {
      question: "What is the OMNY Founder's NFT?",
      answer: "The OMNY Founder's NFT is a limited edition digital collectible that grants you early access to platform features, governance rights, and exclusive rewards in the OMNY ecosystem."
    },
    {
      question: "What benefits do NFT holders receive?",
      answer: "Your NFT grants you access to exclusive features, governance rights, and future rewards in the OMNY ecosystem."
    },
    {
      question: "Which wallets are supported?",
      answer: "We currently support MetaMask, Phantom, and TON wallets. More wallet integrations coming soon!"
    },
    {
      question: "How long will the NFT claim be available?",
      answer: "The NFT claim period will be open for a limited time. Make sure to claim yours before the period ends!"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-omny-purple/5 via-purple-900/10 to-indigo-900/10 animate-gradient-slow"></div>
        
        {/* Mesh pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-omny-dark/40 to-omny-dark/80"></div>
        
        {/* Floating particles */}
        <div className="absolute w-2 h-2 bg-omny-purple/20 rounded-full animate-float" style={{top: '10%', left: '15%'}}></div>
        <div className="absolute w-3 h-3 bg-omny-purple/30 rounded-full animate-float-delayed" style={{top: '60%', left: '75%'}}></div>
        <div className="absolute w-2 h-2 bg-omny-purple/20 rounded-full animate-float" style={{top: '80%', left: '35%'}}></div>
        
        {/* Dynamic particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full animate-float-up"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              '--opacity': particle.opacity,
              '--duration': `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
          Claim Your Free NFT
        </h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Get your exclusive OMNY Founder's NFT and unlock early access to platform features
        </p>
        
        {/* NFT and Claim Form */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* NFT Preview */}
          <div className="relative bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm border border-omny-purple/20 h-full flex flex-col justify-between">
            <div className="text-center">
              <div className="bg-gradient-to-br from-omny-purple/20 to-purple-900/20 p-4 rounded-xl mb-6 inline-block">
                <div className="text-4xl">🌟</div>
              </div>
              <h2 className="text-2xl font-bold mb-4">OMNY Founder's NFT</h2>
              <div className="relative w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-omny-purple/30 to-purple-900/30 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="text-6xl animate-pulse">🔮</div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-omny-dark/80"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-omny-purple/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    Limited Edition
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Collection</span>
                <span>OMNY Founders</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Total Supply</span>
                <span>10,000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Claim Period</span>
                <span>Feb 1 - Mar 15, 2025</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Claimed</span>
                <span>3,721 / 10,000 (37.2%)</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-omny-purple to-purple-600 w-[37.2%]"></div>
              </div>
            </div>
          </div>
          
          {/* Claim Form */}
          <div className="bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm border border-omny-purple/20 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Claim Your NFT</h2>
            
            {nftClaimed ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="bg-green-500/20 p-4 rounded-full mb-4">
                  <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">NFT Claimed Successfully!</h3>
                <p className="text-gray-300 mb-8">
                  Your OMNY Founder's NFT has been sent to your wallet. You can now access exclusive features and rewards.
                </p>
                <Link to="/" className="text-omny-purple hover:text-purple-400 transition">
                  Return to Homepage
                </Link>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                <p className="text-gray-300 mb-6">
                  Connect your wallet and select your preferred blockchain to claim your exclusive OMNY Founder's NFT.
                </p>
                
                {!walletConnected ? (
                  <div className="flex-1 flex flex-col">
                    <div className="bg-omny-dark/30 p-6 rounded-xl mb-6">
                      <h3 className="font-bold mb-2">Step 1: Connect Your Wallet</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Connect your wallet to verify eligibility and claim your NFT.
                      </p>
                      <button 
                        onClick={connectWallet}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-omny-purple to-purple-600 px-6 py-3 rounded-full hover:bg-opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Connecting...
                          </span>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Connect Wallet
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div className="bg-omny-dark/30 p-6 rounded-xl opacity-50">
                      <h3 className="font-bold mb-2">Step 2: Select Blockchain</h3>
                      <p className="text-gray-400 text-sm">
                        Choose your preferred blockchain to receive your NFT.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col">
                    <div className="bg-omny-dark/30 p-6 rounded-xl mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">Step 1: Connect Your Wallet</h3>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">Connected</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Wallet connected: 0x7a...3f4d
                      </p>
                    </div>
                    
                    <div className="bg-omny-dark/30 p-6 rounded-xl mb-6">
                      <h3 className="font-bold mb-4">Step 2: Select Blockchain</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <button 
                          onClick={() => setSelectedChain('eth')}
                          className={`p-4 rounded-xl flex flex-col items-center justify-center border ${selectedChain === 'eth' ? 'border-omny-purple bg-omny-purple/10' : 'border-gray-700 hover:border-gray-600'}`}
                        >
                          <span className="text-2xl mb-2">Ξ</span>
                          <span className="text-sm">Ethereum</span>
                        </button>
                        <button 
                          onClick={() => setSelectedChain('sol')}
                          className={`p-4 rounded-xl flex flex-col items-center justify-center border ${selectedChain === 'sol' ? 'border-omny-purple bg-omny-purple/10' : 'border-gray-700 hover:border-gray-600'}`}
                        >
                          <span className="text-2xl mb-2">◎</span>
                          <span className="text-sm">Solana</span>
                        </button>
                        <button 
                          onClick={() => setSelectedChain('ton')}
                          className={`p-4 rounded-xl flex flex-col items-center justify-center border ${selectedChain === 'ton' ? 'border-omny-purple bg-omny-purple/10' : 'border-gray-700 hover:border-gray-600'}`}
                        >
                          <span className="text-2xl mb-2">💎</span>
                          <span className="text-sm">TON</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <p className="text-gray-400 text-sm mb-4">
                        By claiming this NFT, you agree to the <a href="#" className="text-omny-purple hover:text-purple-400 transition">Terms of Service</a>.
                      </p>
                      <button 
                        onClick={claimNFT}
                        disabled={loading}
                        className="group relative bg-gradient-to-r from-omny-purple to-purple-600 px-10 py-4 rounded-full transition-all duration-300 flex items-center gap-3 w-full justify-center overflow-hidden mt-auto disabled:opacity-70"
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Claiming...
                          </span>
                        ) : (
                          <>
                            <span className="relative z-10 font-medium">Claim NFT</span>
                            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-omny-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="max-w-4xl mx-auto mb-24 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
            About the OMNY Founder's NFT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm border border-omny-purple/20 text-center">
              <div className="bg-omny-purple/20 p-4 rounded-full inline-block mb-4">
                <span className="text-3xl">🔑</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Early Access</h3>
              <p className="text-gray-300">
                Get priority access to new features and platform updates before they're available to the public.
              </p>
            </div>
            
            <div className="bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm border border-omny-purple/20 text-center">
              <div className="bg-omny-purple/20 p-4 rounded-full inline-block mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Governance Rights</h3>
              <p className="text-gray-300">
                Participate in platform governance with enhanced voting power on key protocol decisions.
              </p>
            </div>
            
            <div className="bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm border border-omny-purple/20 text-center">
              <div className="bg-omny-purple/20 p-4 rounded-full inline-block mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Rewards</h3>
              <p className="text-gray-300">
                Earn boosted yields, special airdrops, and other exclusive benefits only available to NFT holders.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-omny-dark/50 p-6 rounded-xl backdrop-blur-sm border border-omny-purple/20">
                <button 
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-bold">{item.question}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`mt-4 text-gray-300 ${activeAccordion === index ? 'block' : 'hidden'}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimNFT;