import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';
import BackgroundAnimation from './components/BackgroundAnimation';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ServiceDetail from './components/ServiceDetail';

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Highlights />
    <AboutSection />
    <Services />
    <BookingForm />
    <Reviews />
    <BlogSection />
  </main>
);

const App: React.FC = () => {
  return (
    <div className="bg-[#0b2239] text-gray-200 min-h-screen relative overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <MusicToggle />
    </div>
  );
};

export default App;