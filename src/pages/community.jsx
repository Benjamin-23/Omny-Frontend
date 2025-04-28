import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
    const [faqOpen, setFaqOpen] = useState({});

    const toggleFaq = (index) => {
        setFaqOpen(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="font-helvetica text-white min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 backdrop-stars"></div>
            <div className="absolute inset-0 bg-gradient-radial from-omny-purple/20 via-transparent to-transparent"></div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-24">
                <div className="text-center max-w-4xl mx-auto animate-fade-in">
                    <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                        Join the OMNY Ecosystem and Mint Your Free NFT
                    </h1>
                    <p className="text-xl text-gray-300 mb-12">
                        Connect your wallet, follow our channels, and claim a free limited-edition NFT as part of our early
                        community. OMNY is building the next-gen DeFi platform with cross-chain swaps, NFT staking, and decentralized
                        governance.
                    </p>
                    <button id="hero-connect-wallet"
                        className="relative group bg-gradient-to-r from-omny-purple via-purple-600 to-purple-500 px-10 py-5 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-4 mx-auto shadow-lg shadow-omny-purple/20 hover:shadow-xl hover:shadow-omny-purple/30 overflow-hidden">
                        <span className="relative z-10 text-lg font-medium">Start Now: Connect Wallet</span>
                        <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                        <div
                            className="absolute -inset-1 bg-gradient-to-r from-omny-purple via-purple-500 to-pink-500 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                        </div>
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="container mx-auto px-6 py-24 relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-omny-purple/10 to-transparent rounded-3xl"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-omny-purple/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    <div
                        className="backdrop-blur-sm bg-omny-dark/30 p-8 rounded-2xl border border-omny-purple/20 hover:border-omny-purple/40 transition-all duration-500 group">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-omny-purple to-purple-500 flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2
                                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                                    About OMNY
                                </h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                OMNY is an omnichain DeFi platform revolutionizing decentralized finance. We bring together
                                cross-chain swaps, NFT staking, and decentralized governance, enabling seamless interaction across blockchains
                                like Ethereum, Solana, and TON.
                            </p>
                            <div
                                className="w-full h-1 bg-gradient-to-r from-omny-purple to-transparent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                            </div>
                        </div>
                    </div>

                    <div
                        className="backdrop-blur-sm bg-omny-dark/30 p-8 rounded-2xl border border-omny-purple/20 hover:border-omny-purple/40 transition-all duration-500 group">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-omny-purple to-purple-500 flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                </div>
                                <h2
                                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-omny-purple">
                                    About the NFT
                                </h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                As an early supporter of OMNY, you can mint a unique NFT that grants you access to future
                                rewards, governance participation, and exclusive perks within our platform.
                            </p>
                            <div
                                className="w-full h-1 bg-gradient-to-r from-omny-purple to-transparent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Claim Steps */}
            <section className="container mx-auto px-6 py-24 relative">
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-omny-purple/5 to-transparent"></div>
                <div className="absolute top-1/4 -left-20 w-60 h-60 bg-omny-purple/10 rounded-full blur-3xl animate-pulse">
                </div>
                <div
                    className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000">
                </div>

                <h2
                    className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white via-omny-purple to-purple-500 bg-clip-text text-transparent">
                    How to Claim Your NFT
                </h2>

                <div className="max-w-7xl mx-auto relative">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-omny-purple/20 via-transparent to-omny-purple/20 blur-xl">
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Step 1 */}
                        <div
                            className="group bg-gradient-to-br from-omny-dark/80 to-omny-dark/40 p-8 rounded-2xl backdrop-blur-xl border border-omny-purple/30 hover:border-omny-purple/60 transition-all duration-500 hover:transform hover:-translate-y-2">
                            <div
                                className="text-5xl mb-6 bg-gradient-to-r from-omny-purple to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                                1️⃣</div>
                            <h3
                                className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                                Connect Wallet</h3>
                            <p className="text-gray-300 mb-8">Connect your preferred wallet to get started</p>
                            <div className="space-y-3">
                                <button
                                    className="w-full bg-gradient-to-r from-omny-purple/20 to-purple-500/20 px-4 py-3 rounded-lg hover:from-omny-purple/30 hover:to-purple-500/30 transition-all duration-300 flex items-center gap-3 justify-center group-hover:shadow-lg group-hover:shadow-omny-purple/20">
                                    <img src="/images/metamask.svg" alt="MetaMask" className="w-6 h-6" />
                                    MetaMask
                                </button>
                                <button
                                    className="w-full bg-gradient-to-r from-omny-purple/20 to-purple-500/20 px-4 py-3 rounded-lg hover:from-omny-purple/30 hover:to-purple-500/30 transition-all duration-300 flex items-center gap-3 justify-center group-hover:shadow-lg group-hover:shadow-omny-purple/20">
                                    <img src="/images/phantom.svg" alt="Phantom" className="w-6 h-6" />
                                    Phantom
                                </button>
                                <button
                                    className="w-full bg-gradient-to-r from-omny-purple/20 to-purple-500/20 px-4 py-3 rounded-lg hover:from-omny-purple/30 hover:to-purple-500/30 transition-all duration-300 flex items-center gap-3 justify-center group-hover:shadow-lg group-hover:shadow-omny-purple/20">
                                    <img src="/images/ton.svg" alt="TON" className="w-6 h-6" />
                                    TON Wallet
                                </button>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div
                            className="group bg-gradient-to-br from-omny-dark/80 to-omny-dark/40 p-8 rounded-2xl backdrop-blur-xl border border-omny-purple/30 hover:border-omny-purple/60 transition-all duration-500 hover:transform hover:-translate-y-2">
                            <div
                                className="text-5xl mb-6 bg-gradient-to-r from-omny-purple to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                                2️⃣</div>
                            <h3
                                className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                                Follow Channels</h3>
                            <p className="text-gray-300 mb-8">Join our community channels</p>
                            <div className="space-y-3">
                                <a href="#" target="_blank"
                                    className="w-full bg-gradient-to-r from-[#229ED9]/20 to-[#229ED9]/10 px-4 py-3 rounded-lg hover:from-[#229ED9]/30 hover:to-[#229ED9]/20 transition-all duration-300 flex items-center gap-3 justify-center group-hover:shadow-lg group-hover:shadow-[#229ED9]/20">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-5.374-12-12-12z" />
                                    </svg>
                                    Telegram
                                </a>
                                <a href="#" target="_blank"
                                    className="w-full bg-gradient-to-r from-[#1DA1F2]/20 to-[#1DA1F2]/10 px-4 py-3 rounded-lg hover:from-[#1DA1F2]/30 hover:to-[#1DA1F2]/20 transition-all duration-300 flex items-center gap-3 justify-center group-hover:shadow-lg group-hover:shadow-[#1DA1F2]/20">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                    Twitter
                                </a>
                                <a href="#" target="_blank"
                                    className="w-full bg-gradient-to-r from-[#7289DA]/20 to-[#7289DA]/10 px-4 py-3 rounded-lg hover:from-[#7289DA]/30 hover:to-[#7289DA]/20 transition-all duration-300 flex items-center gap-3 justify-center group-hover:shadow-lg group-hover:shadow-[#7289DA]/20">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                    Discord
                                </a>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div
                            className="group bg-gradient-to-br from-omny-dark/80 to-omny-dark/40 p-8 rounded-2xl backdrop-blur-xl border border-omny-purple/30 hover:border-omny-purple/60 transition-all duration-500 hover:transform hover:-translate-y-2">
                            <div
                                className="text-5xl mb-6 bg-gradient-to-r from-omny-purple to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                                3️⃣</div>
                            <h3
                                className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-omny-purple bg-clip-text text-transparent">
                                Mint NFT</h3>
                            <p className="text-gray-300 mb-8">Claim your free NFT</p>
                            <button id="mint-nft" disabled
                                className="w-full bg-gradient-to-r from-omny-purple/30 to-purple-500/30 px-6 py-4 rounded-lg text-gray-400 cursor-not-allowed transition-all duration-300 group-hover:shadow-lg group-hover:shadow-omny-purple/20">
                                Complete Previous Steps
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="container mx-auto px-6 py-24">
                <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="bg-omny-dark/50 p-6 rounded-xl backdrop-blur-sm border border-omny-purple/20">
                        <button 
                            onClick={() => toggleFaq(1)}
                            className="flex justify-between items-center w-full text-left">
                            <span className="font-bold">What can I do with my NFT?</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`mt-4 text-gray-300 ${faqOpen[1] ? 'block' : 'hidden'}`}>
                            Your NFT grants you access to exclusive features, governance rights, and future rewards in the
                            OMNY ecosystem.
                        </div>
                    </div>

                    <div className="bg-omny-dark/50 p-6 rounded-xl backdrop-blur-sm border border-omny-purple/20">
                        <button 
                            onClick={() => toggleFaq(2)}
                            className="flex justify-between items-center w-full text-left">
                            <span className="font-bold">Which wallets are supported?</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`mt-4 text-gray-300 ${faqOpen[2] ? 'block' : 'hidden'}`}>
                            We currently support MetaMask, Phantom, and TON wallets. More wallet integrations coming soon!
                        </div>
                    </div>

                    <div className="bg-omny-dark/50 p-6 rounded-xl backdrop-blur-sm border border-omny-purple/20">
                        <button 
                            onClick={() => toggleFaq(3)}
                            className="flex justify-between items-center w-full text-left">
                            <span className="font-bold">How long will the NFT claim be available?</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`mt-4 text-gray-300 ${faqOpen[3] ? 'block' : 'hidden'}`}>
                            The NFT claim period will be open for a limited time. Make sure to claim yours before the period
                            ends!
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community; 