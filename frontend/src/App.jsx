import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './pages/About';
import FeaturesPage from './pages/FeaturesPage';
import ClaimNFT from './pages/ClaimNFT';
import Education from './pages/Education';
import Governance from './pages/Governance';
import NFTTokenomics from './pages/NFTTokenomics';
import Roadmap from './pages/Roadmap';
import Community from './pages/community';
import './App.css';

function App() {
  return (
    <div className="font-helvetica bg-omny-dark text-white min-h-screen">
      <Navbar />
      <main className="pt-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 backdrop-stars"></div>
        <div className="absolute inset-0 bg-gradient-radial from-omny-purple/20 via-transparent to-transparent"></div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Stats />
              <Partners />
              <CTA />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/claim-nft" element={<ClaimNFT />} />
          <Route path="/education" element={<Education />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/nft-tokenomics" element={<NFTTokenomics />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/community" element={<Community />} />
          {/* Add more routes for other pages */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 