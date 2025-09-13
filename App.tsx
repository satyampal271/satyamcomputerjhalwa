import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/OurProcess'; // Repurposed for Portfolio
import BlogSection from './components/BlogSection';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';
import StickyContactBar from './components/MusicToggle'; // Repurposed for StickyContactBar
import BackgroundAnimation from './components/BackgroundAnimation';
import Preloader from './components/Preloader';
import ServiceDetail from './components/ServiceDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MyAccount from './components/MyAccount';
import RemoteSupportSection from './components/RemoteSupportSection';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Highlights />
    <AboutSection />
    <Services />
    <RemoteSupportSection />
    <PortfolioSection />
    <Reviews />
    <BlogSection />
    <AiAssistant />
    <BookingForm />
  </>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // This will scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <div className="text-white">
      <Preloader isLoading={isLoading} />
      <BackgroundAnimation />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/my-account" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
        </Routes>
      </main>
      <StickyContactBar />
      <Footer />
    </div>
  );
};

export default App;
