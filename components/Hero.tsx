import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative text-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555774698-0b77e0abfe79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2239] via-[#0b2239]/80 to-[#0b2239]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbnoaXNlKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg text-[#0077ff] font-semibold tracking-wide uppercase">Fast, Reliable, Affordable</h2>
          <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Laptop & Computer Services
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Book your service slot online in just a few clicks.
          </p>
          <div className="mt-8">
            <a href="#booking" onClick={(e) => handleScroll(e, 'booking')} className="inline-block bg-[#0077ff] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(0,119,255,0.5)] hover:shadow-[0_0_25px_rgba(0,119,255,0.8)]">
              Book a Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;