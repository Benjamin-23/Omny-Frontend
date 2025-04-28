import React from 'react';

const PartnerCard = ({ emoji, name, tier }) => (
  <div className="group bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-omny-purple/10 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-transparent hover:border-omny-purple/30 relative overflow-hidden">
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-4">{emoji}</div>
      <span className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors">{name}</span>
    </div>
    <div className={`absolute top-2 right-2 ${tier === 'Tier 1' ? 'bg-omny-purple/20' : 'bg-purple-500/20'} px-2 py-1 rounded-full text-xs`}>{tier}</div>
  </div>
);

const Partners = () => {
  const partners = [
    { emoji: '💎', name: 'TON', tier: 'Tier 1' },
    { emoji: '🌐', name: 'LayerZero', tier: 'Tier 1' },
    { emoji: '⚡', name: 'Solana', tier: 'Tier 2' },
    { emoji: '🚀', name: 'Stonfi', tier: 'Tier 2' }
  ];

  return (
    <section className="container mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-omny-purple to-purple-500">Strategic Partners</span>
      </h2>
      <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto text-center mb-16">
        Collaborating with industry leaders to bring you cutting-edge cross-chain solutions and enhanced DeFi capabilities.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
        {partners.map((partner, index) => (
          <PartnerCard 
            key={index}
            emoji={partner.emoji}
            name={partner.name}
            tier={partner.tier}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners; 