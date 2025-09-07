import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from './Services';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute('content') : '';

    if (service) {
      document.title = `${service.title} | Satyam Computer Solutions`;
      if (metaDescription) {
        metaDescription.setAttribute('content', service.shortDescription);
      }
    }

    // Cleanup function to reset title and description on component unmount
    return () => {
      document.title = originalTitle;
      if (metaDescription && originalDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
    };
  }, [serviceId, service]);

  if (!service) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fadeInUp">
        <h2 className="text-3xl font-bold text-white mb-4">Service Not Found</h2>
        <p className="text-lg text-gray-400 mb-8">The service you are looking for does not exist.</p>
        <Link to="/" className="inline-block bg-[#0077ff] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Return to Homepage
        </Link>
      </div>
    );
  }

  const handleBookNowClick = () => {
    navigate(`/?service=${encodeURIComponent(service.title)}#booking`);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fadeInUp">
      <div className="mb-8">
        <Link to="/#services" className="text-[#0077ff] hover:text-blue-400 transition-colors inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Services
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">{service.longDescription}</p>

          {service.caseStudies && service.caseStudies.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-white mb-6">Case Study</h2>
              {service.caseStudies.map((study, index) => (
                <div key={index} className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#0077ff] mb-2">{study.client}</h3>
                  <p className="text-gray-400 mb-4"><strong className="text-white">Problem:</strong> {study.problem}</p>
                  <p className="text-gray-400 mb-4"><strong className="text-white">Solution:</strong> {study.solution}</p>
                  <p className="text-gray-400"><strong className="text-white">Result:</strong> {study.result}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
            <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-6 sticky top-24">
                 <h2 className="text-2xl font-bold text-white mb-6">Service Gallery</h2>
                 <div className="grid grid-cols-2 gap-4 mb-8">
                     {service.images.map((img, index) => (
                        <div key={index} className="rounded-md overflow-hidden">
                           <img src={img} alt={`${service.title} example ${index + 1}`} className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500 ease-in-out" loading="lazy" />
                        </div>
                     ))}
                 </div>
                 <button onClick={handleBookNowClick} className="w-full bg-[#0077ff] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(0,119,255,0.5)] hover:shadow-[0_0_25px_rgba(0,119,255,0.8)]">
                    Book This Service
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;