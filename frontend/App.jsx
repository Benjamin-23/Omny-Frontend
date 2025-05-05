import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IotaClientProvider, WalletProvider } from "@iota/dapp-kit";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Community from "./pages/community";
import ClaimButton from "./src/components/ClaimButton";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IotaClientProvider>
        <WalletProvider>
          <Router>
            <div className="font-helvetica bg-omny-dark text-white min-h-screen">
              <Navbar />
              <main className="pt-24 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 backdrop-stars"></div>
                <div className="absolute inset-0 bg-gradient-radial from-omny-purple/20 via-transparent to-transparent"></div>

                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Hero />
                        <Features />
                        <Stats />
                        <Partners />
                        <CTA />
                      </>
                    }
                  />
                  <Route path="/community" element={<Community />} />
                  {/* Add other routes as needed */}
                </Routes>
              </main>
              <Footer />
            </div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">
                  IOTA Token Claim
                </h1>
                <ClaimButton />
              </div>
            </div>
          </Router>
        </WalletProvider>
      </IotaClientProvider>
    </QueryClientProvider>
  );
}

export default App;
