import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Community from './pages/community';
import './App.css';

function App() {
  return (
    <Router>
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
            <Route path="/community" element={<Community />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 