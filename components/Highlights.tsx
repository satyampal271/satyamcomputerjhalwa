
import React from 'react';

const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 h-full">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[var(--accent-cyan)]/10 border-2 border-[var(--accent-cyan)]/30 mb-4 transition-all duration-300 group-hover:bg-[var(--accent-cyan)]/20 group-hover:shadow-[0_0_20px_var(--accent-cyan)]">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-white">{title}</h3>
    <p className="text-gray-400 mt-1 text-sm leading-relaxed">{description}</p>
  </div>
);

const FastIcon = () => (
    <svg className="h-10 w-10 text-[var(--accent-cyan)] animate-icon-pulse" style={{animationDelay: '0s'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const WarrantyIcon = () => (
    <svg className="h-10 w-10 text-[var(--accent-cyan)] animate-icon-pulse" style={{animationDelay: '1s'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.607 11.955 11.955 0 019 2.607c-.16.24-.33.48-.51.722A11.99 11.99 0 0112 21.944a11.955 11.955 0 01-8.618-3.04" />
    </svg>
);
const PricingIcon = () => (
    <svg className="h-10 w-10 text-[var(--accent-cyan)] animate-icon-pulse" style={{animationDelay: '2s'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.572 14.854A9 9 0 0112 21a9 9 0 01-8.572-6.146M3.428 9.146A9 9 0 0112 3a9 9 0 018.572 6.146" />
    </svg>
);


const Highlights: React.FC = () => {
  const highlightsData = [
    { icon: <FastIcon />, title: "Fast Service", description: "Quick turnaround time for all repairs." },
    { icon: <WarrantyIcon />, title: "Warranty on Parts", description: "6-month warranty on all replaced parts." },
    { icon: <PricingIcon />, title: "Transparent Pricing", description: "No hidden charges, clear estimates upfront." },
  ];

  return (
    <section className="bg-[var(--bg-dark-navy)] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Why Choose Us?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                We provide professional, reliable, and trustworthy computer repair services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 glass-card divide-y md:divide-y-0 md:divide-x divide-[var(--accent-violet)]/30">
            {highlightsData.map((item, index) => (
                <div key={index} className="group">
                    <HighlightCard icon={item.icon} title={item.title} description={item.description} />
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default Highlights;