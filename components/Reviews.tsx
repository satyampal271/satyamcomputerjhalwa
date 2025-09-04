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

const ReviewCard: React.FC<{ name: string; review: string; stars: number }> = ({ name, review, stars }) => (
    <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-6 flex flex-col h-full">
        <Rating stars={stars} />
        <p className="text-gray-300 my-4 flex-grow">"{review}"</p>
        <p className="font-semibold text-white">- {name}</p>
    </div>
);

const Reviews: React.FC = () => {
    const reviewsData = [
        { name: "Ankit S.", review: "Quick service and genuine parts. My laptop feels brand new. Highly recommended!", stars: 5 },
        { name: "Priya M.", review: "They recovered all my lost data after my hard drive failed. Absolutely lifesavers!", stars: 5 },
        { name: "Rahul V.", review: "Transparent pricing and the technicians are very knowledgeable. Great experience overall.", stars: 4 },
    ];

    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
            }
        },
        { rootMargin: "0px 0px -100px 0px" }
        );
        if (sectionRef.current) {
        observer.observe(sectionRef.current);
        }
        return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
        };
    }, []);

    return (
        <section ref={sectionRef} id="reviews" className="bg-[#081c30] py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                    We pride ourselves on providing the best service possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {reviewsData.map((review, index) => (
                        <div key={index} className={isVisible ? 'animate-fadeInUp' : 'opacity-0'} style={{ animationDelay: `${index * 120}ms` }}>
                            <ReviewCard {...review} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;