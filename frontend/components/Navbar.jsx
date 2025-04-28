import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-omny-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">OMNY.FI</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="hover:text-omny-purple transition">About</Link>
            <Link to="/features" className="hover:text-omny-purple transition">Features</Link>
            <Link to="/nft-tokenomics" className="hover:text-omny-purple transition">NFT & Tokenomics</Link>
            <Link to="/governance" className="hover:text-omny-purple transition">Governance</Link>
            <Link to="/roadmap" className="hover:text-omny-purple transition">Roadmap</Link>
            <Link to="/education" className="hover:text-omny-purple transition">Education Hub</Link>
            <Link to="/community" className="hover:text-omny-purple transition">Community</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <button className="hidden md:block bg-omny-purple px-6 py-2 rounded-full hover:bg-opacity-90 transition">
            Launch App
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link to="/about" className="hover:text-omny-purple transition">About</Link>
            <Link to="/features" className="hover:text-omny-purple transition">Features</Link>
            <Link to="/nft-tokenomics" className="hover:text-omny-purple transition">NFT & Tokenomics</Link>
            <Link to="/governance" className="hover:text-omny-purple transition">Governance</Link>
            <Link to="/roadmap" className="hover:text-omny-purple transition">Roadmap</Link>
            <Link to="/education" className="hover:text-omny-purple transition">Education Hub</Link>
            <Link to="/community" className="hover:text-omny-purple transition">Community</Link>
            <button className="bg-omny-purple px-6 py-2 rounded-full hover:bg-opacity-90 transition w-full">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 