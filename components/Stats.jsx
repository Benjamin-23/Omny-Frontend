import React from 'react';

const StatItem = ({ value, label }) => (
  <div className="p-8">
    <div className="text-4xl font-bold mb-2">{value}</div>
    <div className="text-gray-300">{label}</div>
  </div>
);

const Stats = () => {
  const stats = [
    { value: '$500M+', label: 'Total Value Locked' },
    { value: '10+', label: 'Supported Chains' },
    { value: '100K+', label: 'Active Users' }
  ];

  return (
    <section className="px-6 py-8 relative">
      <div className="absolute inset-0 bg-omny-purple/5 backdrop-blur-sm"></div>
      <div className="relative grid md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <StatItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Stats; 