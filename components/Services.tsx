import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

export const servicesData = [
  { 
    id: 'laptop-check-up-speed-boost', 
    title: "Laptop Check-Up & Speed Boost", 
    description: "Get your slow device running like new with our optimization service.", 
    longDescription: "Over time, laptops accumulate unnecessary files, software, and processes that can drastically reduce performance. Our Speed Boost service is a deep-dive into your system to clean out the clutter, optimize settings, and ensure your hardware is performing at its peak. We don't just run an automated tool; our technicians manually inspect and tune your system for the best possible results.",
    keyFeatures: [
      "Full system diagnostics and health report.",
      "Junk file and bloatware removal.",
      "Startup program optimization.",
      "Operating system updates and security patches.",
      "Physical cleaning of internal fans and vents."
    ],
    price: "Starting from ₹999",
    images: [
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555617994-73a0a6d49a75?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['performance', 'slow computer', 'optimization', 'tune-up', 'speed'],
    testimonials: [
      { name: "Sunita P.", quote: "My 4-year-old laptop was unusably slow. After the speed boost service, it feels like a brand new machine. Incredible difference!" },
      { name: "Raj K.", quote: "The optimization service cleared up so much junk and now my boot-up time is cut in half. Highly recommend." }
    ]
  },
  { 
    id: 'windows-os-installation', 
    title: "Windows / OS Installation", 
    description: "Fresh OS installation or upgrade with all necessary drivers and software.", 
    longDescription: "Whether you're upgrading to the latest version of Windows or need a clean installation to fix persistent issues, we've got you covered. We ensure a clean, stable installation with all the necessary drivers for your hardware, plus essential software to get you up and running immediately. We also offer data backup and restoration as part of this service.",
    keyFeatures: [
      "Installation of any Windows or macOS version.",
      "All hardware drivers correctly installed and configured.",
      "Installation of essential software (browser, office suite, etc.).",
      "System updates and security configuration.",
      "Optional data backup and restoration."
    ],
    price: "Starting from ₹1299",
    images: [
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbb5b9?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop'
    ],
    tags: ['software', 'operating system', 'windows', 'macos', 'install', 'format']
  },
  { 
    id: 'virus-malware-removal', 
    title: "Virus & Malware Removal", 
    description: "Comprehensive scan and removal of all threats to secure your system.", 
    longDescription: "Viruses, spyware, and malware can compromise your data and damage your system. Our expert technicians use advanced tools to perform a deep scan of your computer, identify all malicious software, and remove it completely without damaging your important files. We'll also help you secure your system against future attacks.",
    keyFeatures: [
      "Deep scan with multiple industry-leading tools.",
      "Complete removal of viruses, trojans, spyware, and adware.",
      "System file and registry repair.",
      "Installation and configuration of antivirus software.",
      "Tips for safe browsing and avoiding future infections."
    ],
    price: "Starting from ₹899",
    images: [
      'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614064548237-02f1f1d0b418?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['security', 'antivirus', 'spyware', 'threats', 'protection']
  },
  { 
    id: 'ssd-ram-upgrade', 
    title: "SSD / RAM Upgrade", 
    description: "Boost your computer's speed and multitasking capabilities with a hardware upgrade.", 
    longDescription: "One of the most effective ways to improve your computer's performance is by upgrading the RAM or switching to a Solid State Drive (SSD). An SSD can make your computer boot up and load programs up to 10 times faster. More RAM allows you to run more applications simultaneously without slowdowns. We can recommend the best upgrade for your system and budget, and perform the installation professionally.",
    keyFeatures: [
      "Consultation on the best upgrade path for your device.",
      "High-quality RAM and SSDs from trusted brands.",
      "Professional installation and configuration.",
      "Cloning of your existing data to the new drive (for SSDs).",
      "Post-upgrade performance testing."
    ],
    price: "Contact for a quote (depends on parts)",
    images: [
      'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603460897593-c40c8f3a3a93?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591796399968-30545a68c4a0?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['hardware', 'performance', 'memory', 'storage', 'upgrade', 'fast']
  },
  { 
    id: 'screen-keyboard-replacement', 
    title: "Screen & Keyboard Replacement", 
    description: "Professional replacement for damaged laptop screens and keyboards.", 
    longDescription: "Accidents happen. A cracked screen or a keyboard with non-working keys can make your laptop unusable. We source high-quality, compatible replacement parts for all major laptop brands and models. Our technicians will carefully replace the damaged component and test it thoroughly to ensure it functions perfectly.",
    keyFeatures: [
      "Replacement for all types of laptop screens (LCD, LED, Touch).",
      "Fix for unresponsive or sticky keys, or full keyboard replacement.",
      "High-quality, OEM-spec parts.",
      "Quick turnaround time.",
      "Warranty on all replaced parts."
    ],
    price: "Contact for a quote (depends on parts)",
    images: [
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1964&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598986646512-9213b1ae485a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600000452243-7319952c1e8f?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['hardware', 'repair', 'broken screen', 'keyboard fix', 'damage']
  },
  { 
    id: 'data-backup-recovery', 
    title: "Data Backup & Recovery", 
    description: "Secure your important files or recover data from failed drives.", 
    longDescription: "Your data is precious. Whether you need to set up a robust backup solution to prevent data loss or recover files from a failed hard drive, our data experts can help. We use advanced techniques and tools to recover data from various scenarios, including accidental deletion, formatting, and physical drive damage.",
    keyFeatures: [
      "Data recovery from Hard Drives, SSDs, and USB drives.",
      "Recovery from formatted or corrupted partitions.",
      "Setting up automated local and cloud backup solutions.",
      "Secure data wiping services.",
      "Confidential and secure handling of your data."
    ],
    price: "Starting from ₹2499 for recovery",
    images: [
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633412802994-5c928c573636?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['storage', 'hard drive', 'ssd', 'lost files', 'backup', 'recovery'],
    testimonials: [
      { name: "Amit V.", quote: "I thought I lost all my family photos when my hard drive crashed. They managed to recover everything. I can't thank them enough!" }
    ]
  },
  { 
    id: 'custom-gaming-pc-build', 
    title: "Custom Gaming PC Build", 
    description: "We build high-performance gaming rigs tailored to your needs and budget.", 
    longDescription: "Get a PC that's built specifically for you. Whether you're a hardcore gamer, a content creator, or a professional needing a powerful workstation, we'll help you select the best components for your budget and performance goals. We handle the entire process from parts sourcing to assembly, OS installation, and stress testing.",
    keyFeatures: [
      "Personalized consultation to define your needs.",
      "Component selection and sourcing for optimal performance.",
      "Professional assembly and cable management.",
      "OS and driver installation, and system optimization.",
      "Rigorous stress testing to ensure stability."
    ],
    price: "Build fee + cost of parts",
    images: [
      'https://images.unsplash.com/photo-1625941398357-55a5b5505440?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598057076887-957386353911?q=80&w=1974&auto=format&fit=crop'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=v7MYOpFONCU',
    tags: ['gaming', 'pc build', 'custom computer', 'performance', 'hardware']
  },
  { 
    id: 'instant-remote-support', 
    title: "Instant Remote Support", 
    description: "Get immediate help for software issues without leaving your home.", 
    longDescription: "Facing a software glitch, driver issue, or need help installing a program? Our Instant Remote Support service allows our technicians to securely connect to your computer over the internet. We can diagnose and resolve many common software problems in real-time, saving you a trip to our shop.",
    keyFeatures: [
      "Secure, encrypted remote connection.",
      "Troubleshooting for software errors and crashes.",
      "Driver installation and updates.",
      "Software installation and setup assistance.",
      "Virus and malware check-ups."
    ],
    price: "Starting from ₹799 per session",
    images: [
      'https://images.unsplash.com/photo-1587571432426-59174ab723b7?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614741118884-62ac62b22863?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555949963-ff98db7ffbae?q=80&w=1935&auto=format&fit=crop'
    ],
    tags: ['remote', 'software', 'support', 'instant', 'troubleshooting', 'it help']
  },
  { 
    id: 'annual-maintenance-contract', 
    title: "Annual Maintenance Contract", 
    description: "Keep your systems in top shape with our yearly maintenance plan.", 
    longDescription: "Our Annual Maintenance Contract is a proactive solution to prevent computer problems before they occur. It's perfect for small businesses and individuals who rely on their systems daily. With regular check-ups, cleaning, and optimization, we ensure your computers run smoothly and securely all year round, minimizing downtime and unexpected repair costs.",
    keyFeatures: [
      "Scheduled preventive maintenance visits (quarterly/bi-annually).",
      "System optimization and cleanup.",
      "Software and security updates.",
      "Priority support and discounted repair rates.",
      "On-call and remote support."
    ],
    price: "Contact for customized AMC plans",
    images: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573496774431-c27072a492b4?q=80&w=2069&auto=format&fit=crop'
    ],
    tags: ['amc', 'support', 'business', 'it support', 'preventive']
  }
];

const ServiceCard: React.FC<{ id: string; title: string; description: string; imageUrl: string }> = ({ id, title, description, imageUrl }) => (
    <Link to={`/services/${id}`} className="block group h-full">
        <div className="glass-card h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent-violet)]/30 flex flex-col justify-start overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
              <span className="mt-auto font-semibold text-[var(--accent-cyan)] group-hover:text-white transition-colors">
                  Learn More &rarr;
              </span>
            </div>
        </div>
    </Link>
);

const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = useMemo(() => {
    if (!searchTerm) {
      return servicesData;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return servicesData.filter(service => 
      service.title.toLowerCase().includes(lowercasedTerm) ||
      service.description.toLowerCase().includes(lowercasedTerm) ||
      (service.tags && service.tags.some(tag => tag.toLowerCase().includes(lowercasedTerm)))
    );
  }, [searchTerm]);

  return (
    <section id="services" className="bg-[var(--bg-dark-navy)]/70 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-400">
            We offer a wide range of repair and maintenance services for all your tech needs.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <input 
            type="text"
            placeholder="Search for a service (e.g., 'slow computer', 'screen repair')..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border border-[var(--accent-violet)]/50 text-white rounded-md p-4 focus:ring-2 focus:ring-[var(--accent-cyan)] focus:border-[var(--accent-cyan)] transition placeholder-gray-500"
            aria-label="Search services"
          />
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.images[0]}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 glass-card">
            <p className="text-xl text-gray-300">No services found matching your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
