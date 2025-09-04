import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';
import BackgroundAnimation from './components/BackgroundAnimation';

const App: React.FC = () => {
  return (
    <div className="bg-[#0b2239] text-gray-200 min-h-screen relative overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Highlights />
          <Services />
          <BookingForm />
          <Reviews />
        </main>
        <Footer />
      </div>
      <MusicToggle />
    </div>
  );
};

export default App;