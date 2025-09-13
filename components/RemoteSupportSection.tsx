import React from 'react';
import { useNavigate } from 'react-router-dom';

const RemoteSupportSection: React.FC = () => {
    const navigate = useNavigate();

    const handleRequestSession = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const serviceName = 'Instant Remote Support';
        // Navigate to the home page's booking section with the service pre-selected
        navigate(`/#booking?service=${encodeURIComponent(serviceName)}`);
        
        // Use a timeout to ensure the navigation happens before scrolling
        setTimeout(() => {
            const bookingElement = document.getElementById('booking');
            bookingElement?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <section id="remote-support" className="bg-gradient-to-r from-[var(--accent-violet)]/90 to-[var(--accent-cyan)]/90 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Need Help Now? Try Our Instant Remote Support
                </h2>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
                    Get fast, convenient, and secure solutions for your software problems without ever leaving your desk. Our experts can connect to your computer remotely to diagnose and fix issues in real-time.
                </p>
                <a 
                    href="#booking"
                    onClick={handleRequestSession}
                    className="inline-block bg-white text-[var(--bg-dark-navy)] font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30"
                >
                    Request Remote Session
                </a>
            </div>
        </section>
    );
};

export default RemoteSupportSection;
