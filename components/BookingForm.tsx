import React, { useState, FormEvent, useRef, useEffect } from 'react';

const servicesList = [
  "Laptop Check-Up & Speed Boost",
  "Windows / OS Installation",
  "Virus & Malware Removal",
  "SSD / RAM Upgrade",
  "Screen & Keyboard Replacement",
  "Data Backup & Recovery",
  "Custom Gaming PC Build",
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
    // In a real app, you'd handle form submission here (e.g., API call)
  };

  if (submitted) {
    return (
      <section id="booking" className="bg-[#0b2239] py-20 animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-900/20 border border-green-500 rounded-lg p-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-lg text-gray-300">Your booking request has been received. We will contact you shortly to confirm your appointment.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-block bg-[#0077ff] text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Book Another Service
          </button>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="booking" className={`bg-[#0b2239] py-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Book Your Service Slot</h2>
            <p className="text-lg text-gray-400 mb-12">
                Fill out the form below to schedule your repair.
            </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-blue-900/20 border border-blue-800/50 rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Select Service</label>
                    <select id="service" name="service" required className="w-full bg-[#081c30] border border-blue-700 text-white rounded-md p-3 focus:ring-[#0077ff] focus:border-[#0077ff]">
                        <option value="">-- Choose a service --</option>
                        {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-[#081c30] border border-blue-700 text-white rounded-md p-3 focus:ring-[#0077ff] focus:border-[#0077ff]" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required className="w-full bg-[#081c30] border border-blue-700 text-white rounded-md p-3 focus:ring-[#0077ff] focus:border-[#0077ff]" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full bg-[#081c30] border border-blue-700 text-white rounded-md p-3 focus:ring-[#0077ff] focus:border-[#0077ff]" />
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                    <input type="date" id="date" name="date" required className="w-full bg-[#081c30] border border-blue-700 text-white rounded-md p-3 focus:ring-[#0077ff] focus:border-[#0077ff]" min={new Date().toISOString().split('T')[0]}/>
                </div>
                 <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">Preferred Time Slot</label>
                    <select id="time" name="time" required className="w-full bg-[#081c30] border border-blue-700 text-white rounded-md p-3 focus:ring-[#0077ff] focus:border-[#0077ff]">
                        <option value="">-- Choose a time --</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
            </div>
            <div>
                 <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">Device Details & Issue Description</label>
                 <textarea id="details" name="details" rows={4} required className="w-full bg-[#081c30] border border-blue-700 text-white rounded-md p-3 focus:ring-[#0077ff] focus:border-[#0077ff]" placeholder="e.g., Dell XPS 13, laptop is not turning on."></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="inline-block w-full md:w-auto bg-[#0077ff] text-white font-bold py-3 px-12 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(0,119,255,0.5)] hover:shadow-[0_0_25px_rgba(0,119,255,0.8)]">
                    Confirm Booking
                </button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;