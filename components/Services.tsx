import React, { useState, useEffect, useRef } from 'react';

interface ServiceCardProps {
  imgSrc: string;
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imgSrc, title, description, price }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0077ff]/20 hover:border-[#0077ff] overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 flex-grow mb-4">{description}</p>
          <div className="mt-auto flex justify-between items-center">
              <span className="text-lg font-semibold text-[#0077ff]">{price}</span>
              <a href="#booking" onClick={(e) => handleScroll(e, 'booking')} className="inline-block bg-[#0077ff] text-white font-bold py-2 px-5 rounded-lg text-sm hover:bg-blue-600 transition-colors duration-300">
                  Book Now
              </a>
          </div>
      </div>
    </div>
  );
}

const Services: React.FC = () => {
  const servicesData: ServiceCardProps[] = [
    { imgSrc: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1920", title: "Laptop Check-Up & Speed Boost", description: "Complete hardware & software health report with performance tuning.", price: "Starts at $49" },
    { imgSrc: "https://images.unsplash.com/photo-1618177389593-5e6c8e390c5e?q=80&w=1920", title: "Windows / OS Installation", description: "Fresh install, driver setup & essential software configuration.", price: "Starts at $79" },
    { imgSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1920", title: "Virus & Malware Removal", description: "Deep cleaning, security patching & future protection advice.", price: "Starts at $69" },
    { imgSrc: "https://images.unsplash.com/photo-1555617958-d33c1a8a3554?q=80&w=1920", title: "SSD / RAM Upgrade", description: "Boost speed & performance with certified components.", price: "Parts + Labor" },
    { imgSrc: "https://images.unsplash.com/photo-1593152164398-352a7817e2b1?q=80&w=1920", title: "Screen & Keyboard Replacement", description: "Original spare parts, quick turnaround.", price: "Request Quote" },
    { imgSrc: "https://images.unsplash.com/photo-1558004533-2b2a42217116?q=80&w=1920", title: "Data Backup & Recovery", description: "Secure retrieval of lost files, cloud backup setup.", price: "Starts at $99" },
    { imgSrc: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=1920", title: "Custom Gaming PC Build", description: "High-performance components, expert assembly.", price: "Request Quote" },
    { imgSrc: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1920", title: "Annual Maintenance Contract", description: "Scheduled check-ups & priority support.", price: "$199/year" },
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
    <section ref={sectionRef} id="services" className="bg-[#081c30] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            From simple tune-ups to complex repairs, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {servicesData.map((service, index) => (
            <div key={index} className={isVisible ? 'animate-fadeInUp flex' : 'opacity-0 flex'} style={{ animationDelay: `${index * 120}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;