import React, { useState, useEffect, useRef } from 'react';

const PortfolioCard = ({ image, title, category, description, delay }: { image: string, title: string, category: string, description: string, delay: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`glass-card block overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent-violet)]/30 flex flex-col h-full ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: `${delay}ms`}}
        >
            <div className="h-48 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <span className="text-xs font-semibold bg-[var(--accent-violet)]/30 text-[var(--accent-violet)] px-2 py-1 rounded-full">{category}</span>
                    <h3 className="text-lg font-bold text-white mb-2 mt-3 group-hover:text-[var(--accent-cyan)] transition-colors">{title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}

const PortfolioSection: React.FC = () => {
    const projects = [
        {
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
            title: 'IT Infrastructure AMC for Municipal Corp',
            category: 'Government Sector',
            description: 'Provided comprehensive Annual Maintenance Contracts for over 200 systems, ensuring zero downtime for critical public services.',
        },
        {
            image: 'https://images.unsplash.com/photo-1573496774431-c27072a492b4?q=80&w=2069&auto=format&fit=crop',
            title: 'Cybersecurity Upgrade for a National Bank',
            category: 'Private Sector',
            description: 'Implemented a multi-layered security protocol, including network security and employee training, to protect sensitive financial data.',
        },
        {
            image: 'https://images.unsplash.com/photo-1598057076887-957386353911?q=80&w=1974&auto=format&fit=crop',
            title: 'Custom PC Builds for a Design Studio',
            category: 'Private Sector',
            description: 'Designed and built 15 high-performance workstations for 3D rendering and graphic design, boosting productivity by 40%.',
        },
        {
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
            title: 'Data Recovery for a State Department',
            category: 'Government Sector',
            description: 'Successfully recovered critical archival data from a failing server system with a 99.8% success rate, preserving important records.',
        },
    ];

    return (
        <section id="portfolio" className="bg-[var(--bg-dark-navy)] py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Portfolio</h2>
                    <p className="text-lg text-gray-400">
                        We are proud to have served a diverse range of clients in both the government and private sectors.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <PortfolioCard 
                            key={index}
                            {...project}
                            delay={index * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;