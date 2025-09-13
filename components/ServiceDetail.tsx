import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from './Services';
import TextToSpeech from './TextToSpeech';
import PCBuilder from './PCBuilder';

// Child component for rendering details, preventing hook-related errors
const ServiceDetailContent: React.FC<{ serviceId: string | undefined }> = ({ serviceId }) => {
  const navigate = useNavigate();
  const service = serviceId ? servicesData.find(s => s.id === serviceId) : undefined;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [serviceId]);

  useEffect(() => {
    if (!service) {
      navigate('/', { replace: true });
    }
  }, [service, navigate]);

  if (!service) {
    return null; // Render nothing while redirecting
  }

  const bookingLink = `/#booking?service=${encodeURIComponent(service.title)}`;

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? service.images.length - 1 : prevIndex - 1
    );
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handleBookNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate(`/#booking?service=${encodeURIComponent(service.title)}`);
      setTimeout(() => {
          document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
  };
  
  const getVideoId = (url: string) => {
    const match = url.match(/(?:v=)([\w-]+)/);
    return match ? match[1] : null;
  };

  const contentToRead = `
    Service Details for ${service.title}.
    ${service.longDescription}.
    The key features are: ${service.keyFeatures.join('. ')}.
  `;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <Link to="/#services" className="text-[var(--accent-cyan)] hover:text-white transition-colors mb-8 inline-block">&larr; Back to all services</Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
        <p className="text-xl text-gray-300 mb-8">{service.description}</p>
        
        <div className="mb-8">
            <TextToSpeech textToRead={contentToRead} />
        </div>

        {service.images && service.images.length > 0 && (
          <div className="mb-8 relative group rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-black/20">
                {service.images.map((img, index) => (
                  <img
                      key={index}
                      src={img}
                      alt={`${service.title} image ${index + 1}`}
                      className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                      loading="lazy"
                  />
              ))}
            </div>
            
            <button onClick={handlePrevImage} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <button onClick={handleNextImage} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {currentImageIndex + 1} / {service.images.length}
            </div>
          </div>
        )}

        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Service Details</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">{service.longDescription}</p>
          
          <h3 className="text-xl font-bold text-white mb-3">Key Features:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 marker:text-[var(--accent-cyan)]">
            {service.keyFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
          </ul>
          
          {service.testimonials && service.testimonials.length > 0 && (
            <div className="my-8">
              <h3 className="text-xl font-bold text-white mb-4">What Our Clients Say</h3>
              <div className="space-y-4">
                {service.testimonials.map((testimonial, index) => (
                  <blockquote key={index} className="bg-[var(--accent-violet)]/20 p-4 rounded-lg border border-[var(--accent-violet)]/30">
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                    <footer className="text-right font-semibold text-[var(--accent-cyan)] mt-2">- {testimonial.name}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          )}

          {service.videoUrl && getVideoId(service.videoUrl) && (
            <div className="my-8">
              <h3 className="text-xl font-bold text-white mb-4">Video Showcase</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-[var(--accent-violet)]/30 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${getVideoId(service.videoUrl)}`}
                  title="Custom PC Build Showcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {service.id !== 'custom-gaming-pc-build' && (
            <>
              <div className="text-2xl font-semibold text-[var(--accent-cyan)] my-8">{service.price}</div>
              <a href={bookingLink} onClick={handleBookNav} className="btn-primary py-3 px-8 rounded-md">
                Book This Service
              </a>
            </>
          )}
        </div>
      </div>
      
      {service.id === 'custom-gaming-pc-build' && (
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Interactive PC Builder</h2>
            <p className="text-lg text-gray-400">
              Select your desired components below to get a real-time price estimate for your custom build.
            </p>
          </div>
          <PCBuilder />
        </div>
      )}
    </>
  );
};

// Main component to get params and pass them down
const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  return (
    <main className="bg-[var(--bg-dark-navy)] py-20 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ServiceDetailContent serviceId={serviceId} />
      </div>
    </main>
  );
};

export default ServiceDetail;
