import React from 'react';

const TrustBadge: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-2 text-sm text-gray-300">
    <div className="text-[var(--accent-cyan)]">{icon}</div>
    <span>{text}</span>
  </div>
);

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative text-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="hero-circuit-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark-navy)] via-[var(--bg-dark-navy)]/80 to-[var(--bg-dark-navy)]"></div>
      <div className="circuit-glow" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
      <div className="circuit-glow" style={{ bottom: '5%', right: '10%', animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-fadeInUp">
            Your Trusted IT Partner – Satyam Computer Solution
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fadeInUp leading-relaxed" style={{ animationDelay: '150ms'}}>
            Reliable, fast, and transparent solutions for all your computer and IT needs. We empower your success through technology.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '300ms'}}>
            <a href="#booking" onClick={(e) => handleScroll(e, 'booking')} className="btn-primary py-3 px-8 rounded-md">
              Book a Service
            </a>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="inline-block bg-transparent border border-[var(--accent-violet)] text-white font-bold py-3 px-8 rounded-md hover:bg-[var(--accent-violet)] hover:text-white transition-all duration-300">
              Explore Services
            </a>
          </div>
          <div className="mt-12 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap animate-fadeInUp" style={{ animationDelay: '450ms'}}>
              <TrustBadge icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>} text="5+ Years Experience" />
              <TrustBadge icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} text="Govt. & Private Sector Trusted" />
              <TrustBadge icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>} text="Certified Technicians" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;