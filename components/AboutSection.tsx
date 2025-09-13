import React from 'react';
import TextToSpeech from './TextToSpeech';

const AboutSection: React.FC = () => {
    const contentToRead = `
    About Satyam Computer Solution.
    With over a decade of experience in the IT service industry, Satyam Computer Solution was founded on the principle of providing reliable, efficient, and transparent tech support. We understand how crucial your devices are to your daily life and work.
    Our team of certified technicians is passionate about technology and dedicated to solving your computer problems. From simple tune-ups to complex hardware repairs and custom builds, we approach every job with professionalism and a commitment to customer satisfaction.
    Our key principles are:
    Expert Technicians: Certified professionals with years of hands-on experience.
    Customer-Centric: We prioritize clear communication and your complete satisfaction.
    Quality Guarantee: We use high-quality parts and stand behind our work with a warranty.
  `;

  return (
    <section id="about-us" className="bg-[var(--bg-dark-navy)] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">About Satyam Computer Solution</h2>
            <div className="mb-6">
              <TextToSpeech textToRead={contentToRead} />
            </div>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              With over a decade of experience in the IT service industry, Satyam Computer Solution was founded on the principle of providing reliable, efficient, and transparent tech support. We understand how crucial your devices are to your daily life and work.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our team of certified technicians is passionate about technology and dedicated to solving your computer problems. From simple tune-ups to complex hardware repairs and custom builds, we approach every job with professionalism and a commitment to customer satisfaction.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--accent-cyan)] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span><strong>Expert Technicians:</strong> Certified professionals with years of hands-on experience.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[var(--accent-cyan)] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span><strong>Customer-Centric:</strong> We prioritize clear communication and your complete satisfaction.</span>
              </li>
              <li className="flex items-start">
                 <svg className="w-6 h-6 text-[var(--accent-cyan)] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span><strong>Quality Guarantee:</strong> We use high-quality parts and stand behind our work with a warranty.</span>
              </li>
            </ul>
             <div className="mt-8 glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Our Certifications</h3>
              <p className="text-gray-400">Our technicians hold industry-recognized certifications, ensuring your devices are in skilled hands. (e.g., CompTIA A+, Microsoft Certified Professional).</p>
            </div>
          </div>
          <div className="relative h-80 md:h-full rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-violet)]/20 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1964&auto=format&fit=crop" 
              alt="Technician working on a laptop" 
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;