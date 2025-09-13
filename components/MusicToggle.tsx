import React from 'react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.806 6.166l-1.335 4.869 4.893-1.295z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.384,17.752a2.2,2.2,0,0,1-1.083,1.183,4.483,4.483,0,0,1-4.522-.616,16.132,16.132,0,0,1-6.1-6.1,4.483,4.483,0,0,1-.617-4.522,2.2,2.2,0,0,1,1.183-1.083,3.61,3.61,0,0,1,2.542.259,1.444,1.444,0,0,1,.666,1.251,11.23,11.23,0,0,1-.533,3.541,1.443,1.443,0,0,1-1.3,1.123,3.472,3.472,0,0,0-.482.482,9.36,9.36,0,0,0,4.288,4.288,3.472,3.472,0,0,0,.482-.482,1.443,1.443,0,0,1,1.123-1.3,11.23,11.23,0,0,1,3.541-.533,1.444,1.444,0,0,1,1.251.666,3.61,3.61,0,0,1,.259,2.542Z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
    </svg>
);


const StickyContactBar: React.FC = () => {
    
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4 sticky-contact-bar">
            <a 
                href="https://wa.me/911234567890?text=Hello%2C%20I%20have%20an%20enquiry." 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
            >
                <WhatsAppIcon />
            </a>
            <a 
                href="tel:+911234567890"
                aria-label="Call us"
            >
                <PhoneIcon />
            </a>
            <a 
                href="#booking"
                onClick={(e) => handleScroll(e, 'booking')}
                aria-label="Book a service"
            >
                <CalendarIcon />
            </a>
        </div>
    );
};

export default StickyContactBar;