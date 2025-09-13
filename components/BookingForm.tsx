import React, { useState, FormEvent, useRef, useEffect } from 'react';

const servicesList = [
  "Laptop Check-Up & Speed Boost",
  "Windows / OS Installation",
  "Virus & Malware Removal",
  "SSD / RAM Upgrade",
  "Screen & Keyboard Replacement",
  "Data Backup & Recovery",
  "Custom Gaming PC Build",
  "Instant Remote Support",
  "Annual Maintenance Contract"
];

const timeSlots = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM"
];

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const serviceFromUrl = params.get('service');
    if (serviceFromUrl && servicesList.includes(serviceFromUrl)) {
      setSelectedService(serviceFromUrl);
    }
  }, []);
  
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
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="bg-[var(--bg-dark-navy)] py-20 animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center glass-card p-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-lg text-gray-300">Your booking request has been received. We will contact you shortly to confirm your appointment.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 btn-primary py-3 px-8 rounded-md"
          >
            Book Another Service
          </button>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="booking" className={`bg-[var(--bg-dark-navy)] py-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Book Your Service Slot</h2>
            <p className="text-lg text-gray-400 mb-12">
                Fill out the form below to schedule your repair or visit us in person.
            </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">Our Location</h3>
                  <a 
                      href="https://maps.app.goo.gl/mVy1Qx6RuLUDNcX86" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--accent-cyan)] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                      <span>Open in Maps</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                  </a>
              </div>
              <div className="glass-card aspect-video w-full overflow-hidden">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5999238314126!2d81.87118117505858!3d25.45174777754897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca5bf124976d%3A0x39050b86a83a059d!2sSatyam%20Computer%20%26%20CCTV%20Solution!5e0!3m2!1sen!2sin!4v1722363577329!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Satyam Computer Solution Location Map"
                 ></iframe>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Select Service</label>
                        <select id="service" name="service" required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                            <option value="">-- Choose a service --</option>
                            {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input type="text" id="name" name="name" required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input type="email" id="email" name="email" required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                        <input type="date" id="date" name="date" required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" min={new Date().toISOString().split('T')[0]}/>
                    </div>
                    <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">Preferred Time Slot</label>
                        <select id="time" name="time" required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition">
                            <option value="">-- Choose a time --</option>
                            {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">Device Details & Issue Description</label>
                    <textarea id="details" name="details" rows={4} required className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-3 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition" placeholder="e.g., Dell XPS 13, laptop is not turning on."></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn-primary w-full md:w-auto py-3 px-12 rounded-md">
                        Confirm Booking
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
