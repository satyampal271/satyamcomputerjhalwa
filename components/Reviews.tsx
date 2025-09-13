import React, { useState, useEffect, useRef } from 'react';

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`h-5 w-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.366-2.445a1 1 0 00-1.175 0l-3.366 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.05 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);

const Rating: React.FC<{ stars: number }> = ({ stars }) => (
    <div className="flex">
        {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < stars} />)}
    </div>
);

const reviewsData = [
    { name: "Ankit S.", review: "Quick service and genuine parts. My laptop feels brand new. Highly recommended!", stars: 5 },
    { name: "Priya M.", review: "They recovered all my lost data after my hard drive failed. Absolutely lifesavers!", stars: 5 },
    { name: "Rahul V.", review: "Transparent pricing and the technicians are very knowledgeable. Great experience overall.", stars: 4 },
];

const Reviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
    };

    return (
        <section id="reviews" className="bg-[var(--bg-dark-navy)]/70 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                    We pride ourselves on providing the best service possible.
                </p>
                <div className="relative max-w-2xl mx-auto glass-card p-8 min-h-[250px] flex items-center justify-center">
                    <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[var(--accent-violet)]/80 hover:bg-[var(--accent-violet)] p-2 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    
                    <div className="relative w-full h-full overflow-hidden">
                        {reviewsData.map((review, index) => (
                           <div
                                key={index}
                                className={`carousel-item text-center ${index === currentIndex ? 'active' : (index > currentIndex ? 'inactive-next' : 'inactive-prev')}`}
                           >
                               <Rating stars={review.stars} />
                               <p className="text-gray-300 my-4 text-lg italic">"{review.review}"</p>
                               <p className="font-semibold text-[var(--accent-cyan)]">- {review.name}</p>
                           </div>
                        ))}
                    </div>
                    
                    <button onClick={handleNext} className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 bg-[var(--accent-violet)]/80 hover:bg-[var(--accent-violet)] p-2 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {reviewsData.map((_, index) => (
                            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-[var(--accent-cyan)]' : 'bg-gray-600 hover:bg-gray-400'}`}></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;