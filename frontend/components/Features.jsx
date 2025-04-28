import React from 'react';

const FeatureCard = ({ emoji, title, description }) => (
  <div className="group bg-omny-dark/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-omny-purple/10 transition duration-300">
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      emoji: '🔄',
      title: 'Cross-Chain Swaps',
      description: 'Seamlessly swap assets across multiple blockchains with optimal rates and minimal fees.'
    },
    {
      emoji: '🎨',
      title: 'NFT Staking',
      description: 'Stake NFTs in hybrid pools to earn enhanced yields and exclusive rewards.'
    },
    {
      emoji: '💧',
      title: 'Multi-Asset Liquidity',
      description: 'Provide liquidity across multiple assets and chains for maximized returns.'
    },
    {
      emoji: '⚡',
      title: 'DAO Governance',
      description: 'Participate in platform governance and shape the future of cross-chain DeFi.'
    }
  ];

  return (
    <section className="container mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-4">Core Features</h2>
      <p className="text-center text-white/70 max-w-2xl mx-auto mb-16">
        Discover how OMNY.FI revolutionizes DeFi with innovative features designed to maximize your cross-chain experience and investment potential.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            emoji={feature.emoji}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features; 