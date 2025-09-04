
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about-us" className="bg-[#0b2239] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h3 className="text-lg text-[#0077ff] font-semibold">Our Story</h3>
            <h2 className="text-3xl font-bold text-white mt-2 mb-4">Driven by Passion and Innovation</h2>
            <p className="text-gray-300 mb-4">
              Founded with a mission to bridge the gap between business needs and technological capabilities, Satyam has grown into a trusted partner for companies worldwide. We believe in creating solutions that are not only powerful and efficient but also elegant and user-friendly.
            </p>
            <p className="text-gray-300">
              Our team of experts is dedicated to pushing the boundaries of what's possible, leveraging cutting-edge technologies to solve complex challenges and drive tangible results for our clients.
            </p>
          </div>
          <div>
            <img 
              src="https://picsum.photos/600/400?random=2" 
              alt="Satyam Team"
              className="rounded-lg shadow-2xl shadow-blue-900/50 w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
