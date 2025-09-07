// FIX: Replaced placeholder content with a valid React component and exported service data.
// This resolves module resolution errors in App.tsx and ServiceDetail.tsx, and parsing errors within this file.
import React from 'react';
import { Link } from 'react-router-dom';

// Icons for services
const TuneUpIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0077ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const OsIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0077ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const VirusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0077ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.364 15.364l-1.414-1.414M8.636 8.636l-1.414-1.414m0 5.656l1.414-1.414m5.657 0l1.414 1.414" />
    </svg>
);

const UpgradeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0077ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
    </svg>
);

const HardwareIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0077ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);

const DataIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0077ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const GamingPcIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0077ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-2.387-.477a2 2 0 01-.547-1.806zM12 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const MaintenanceIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0077ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm6-8a2 2 0 100-4 2 2 0 000 4zm-12 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);


export const servicesData = [
  {
    id: 'laptop-checkup',
    title: 'Laptop Check-Up & Speed Boost',
    icon: <TuneUpIcon />,
    shortDescription: 'Comprehensive diagnostics and optimization to make your machine run like new.',
    longDescription: `Is your laptop or PC running slower than it used to? Our comprehensive Check-Up & Speed Boost service is the perfect solution. We perform a deep-dive into your system to identify and resolve performance bottlenecks.
Our process includes:
- Complete hardware diagnostics to check for failing components.
- Cleaning up temporary files, junk data, and bloatware.
- Optimizing startup programs for faster boot times.
- Updating essential drivers and software for stability.
- Scanning for and removing minor malware threats.
- Defragmenting your hard drive (for non-SSDs).
Your device will feel faster, more responsive, and more reliable after our service.`,
    images: ["https://picsum.photos/400/300?random=10", "https://picsum.photos/400/300?random=11"],
    caseStudies: [
      {
        client: 'Local Small Business',
        problem: 'Office computers were extremely sluggish, impacting employee productivity.',
        solution: 'Performed our Speed Boost service on all 10 office workstations, removing unnecessary background processes and upgrading RAM on critical machines.',
        result: 'Achieved an average of 50% improvement in boot times and application loading speed, leading to a significant boost in daily workflow efficiency.'
      }
    ]
  },
  {
    id: 'os-installation',
    title: 'Windows / OS Installation',
    icon: <OsIcon />,
    shortDescription: 'Fresh and clean installation of Windows, macOS, or Linux, with all essential drivers.',
    longDescription: `Whether you're upgrading to a new operating system, recovering from a system crash, or just want a fresh start, our OS Installation service has you covered. We ensure a clean, stable, and optimized installation of your preferred operating system (Windows, macOS, or Linux).
Service includes:
- Backing up your important data (if required, additional service).
- Wiping the existing system and formatting the drive.
- Installing the latest version of your chosen OS.
- Installing all necessary hardware drivers for perfect compatibility.
- Applying all the latest system updates.
- Installing essential software like a web browser and PDF reader.
We'll hand you back a computer that's clean, fast, and ready to go.`,
    images: ["https://picsum.photos/400/300?random=12", "https://picsum.photos/400/300?random=13"],
    caseStudies: []
  },
  {
    id: 'virus-removal',
    title: 'Virus & Malware Removal',
    icon: <VirusIcon />,
    shortDescription: 'Expert removal of viruses, spyware, and malware to secure your data and privacy.',
    longDescription: `Computer viruses, spyware, and ransomware are serious threats that can compromise your personal data and damage your system. Our expert Virus & Malware Removal service uses advanced tools and techniques to hunt down and eliminate all types of malicious software.
We will:
- Perform multiple, in-depth scans with industry-leading security software.
- Manually identify and remove persistent threats and rootkits.
- Repair damage caused to your operating system files.
- Secure your browser and remove malicious extensions.
- Provide recommendations on how to stay safe online in the future.
Don't let malware control your digital life. We'll clean your system and restore your peace of mind.`,
    images: ["https://picsum.photos/400/300?random=14", "https://picsum.photos/400/300?random=15"],
    caseStudies: []
  },
  {
    id: 'hardware-upgrade',
    title: 'SSD / RAM Upgrade',
    icon: <UpgradeIcon />,
    shortDescription: 'Boost your computer\'s speed and multitasking capabilities with an SSD or RAM upgrade.',
    longDescription: `One of the most effective ways to speed up an aging computer is by upgrading its hardware. We specialize in two of the most impactful upgrades: Solid State Drives (SSDs) and RAM.
- **SSD Upgrade:** Replacing a traditional mechanical hard drive with an SSD is the single biggest performance boost you can get. Your computer will boot in seconds, applications will launch instantly, and the whole system will feel incredibly responsive. We handle the cloning of your data so you don't lose a thing.
- **RAM Upgrade:** If you often have many tabs or applications open at once, more RAM will allow for smoother multitasking without slowdowns. We'll identify the correct type of RAM for your system and install it for you.
Let us help you choose the right upgrade for your needs and budget.`,
    images: ["https://picsum.photos/400/300?random=16", "https://picsum.photos/400/300?random=17"],
    caseStudies: [
      {
        client: 'Graphic Design Student',
        problem: 'Laptop was struggling to run design software like Adobe Photoshop and Illustrator simultaneously.',
        solution: 'Upgraded the system RAM from 8GB to 16GB and replaced the old hard drive with a 1TB NVMe SSD.',
        result: 'The student reported a massive improvement, with software loading 5x faster and the ability to work on large projects without any lag or crashes.'
      }
    ]
  },
  {
    id: 'screen-keyboard-replacement',
    title: 'Screen & Keyboard Replacement',
    icon: <HardwareIcon />,
    shortDescription: 'Professional replacement for cracked laptop screens and malfunctioning keyboards.',
    longDescription: `Accidents happen. A cracked screen or a keyboard with non-working keys can make your laptop unusable. We offer professional, high-quality replacement services to get your device back in perfect working order.
- **Screen Replacement:** We can replace cracked, flickering, or dead screens on all major laptop brands. We use high-quality replacement panels that match or exceed original specifications.
- **Keyboard Replacement:** Spilled liquid or physical damage can ruin a keyboard. We can replace the entire keyboard assembly, restoring full functionality.
Our technicians are experienced in delicate laptop disassembly and will perform the repair carefully and efficiently.`,
    images: ["https://picsum.photos/400/300?random=18", "https://picsum.photos/400/300?random=19"],
    caseStudies: []
  },
  {
    id: 'data-recovery',
    title: 'Data Backup & Recovery',
    icon: <DataIcon />,
    shortDescription: 'Secure data backup solutions and recovery services for failed drives.',
    longDescription: `Your data is invaluable. We offer both proactive backup solutions and emergency recovery services.
- **Data Backup:** Don't wait for disaster to strike. We can help you set up a robust, automated backup system, either to an external drive or a cloud service, ensuring your important files are always safe.
- **Data Recovery:** If your hard drive has failed or you've accidentally deleted important files, don't panic. We use advanced software tools to recover data from failing hard drives, SSDs, and external storage devices. While not all data is always recoverable, we have a high success rate in retrieving precious photos, documents, and more.`,
    images: ["https://picsum.photos/400/300?random=20", "https://picsum.photos/400/300?random=21"],
    caseStudies: []
  },
  {
    id: 'custom-pc-build',
    title: 'Custom Gaming PC Build',
    icon: <GamingPcIcon />,
    shortDescription: 'Building high-performance custom PCs for gaming, streaming, or professional work.',
    longDescription: `Get the exact performance you need with a PC built specifically for you. Whether you're a hardcore gamer, a content creator, or a professional needing workstation power, we can design and build your dream machine.
Our process:
1. **Consultation:** We discuss your needs, budget, and desired performance.
2. **Part Selection:** We help you choose the best combination of components (CPU, GPU, RAM, etc.) for optimal performance and value.
3. **Professional Assembly:** We meticulously build your PC, ensuring clean cable management and optimal airflow.
4. **Testing & Optimization:** We rigorously test the system for stability and performance, installing the OS and necessary drivers.
Experience the difference of a professionally built custom PC.`,
    images: ["https://picsum.photos/400/300?random=22", "https://picsum.photos/400/300?random=23"],
    caseStudies: []
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contract',
    icon: <MaintenanceIcon />,
    shortDescription: 'Peace of mind with our annual contract for regular maintenance and priority support.',
    longDescription: `For businesses and individuals who rely on their computers daily, our Annual Maintenance Contract (AMC) offers complete peace of mind. The AMC is a proactive approach to IT support, preventing problems before they start.
Benefits include:
- **Scheduled Maintenance:** Regular check-ups (quarterly or bi-annually) to keep your systems optimized and secure.
- **Priority Support:** Get faster response times for any issues that arise.
- **Discounted Rates:** Enjoy lower costs for repairs and services not covered under the AMC.
- **Remote Assistance:** Quick troubleshooting for software issues via remote support.
An AMC is a smart investment to maximize uptime and minimize frustrating technical disruptions.`,
    images: ["https://picsum.photos/400/300?random=24", "https://picsum.photos/400/300?random=25"],
    caseStudies: []
  }
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => (
  <Link to={link} className="block group bg-blue-900/20 p-6 rounded-lg border-2 border-transparent hover:border-[#0077ff]/50 hover:bg-blue-900/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0077ff]/20">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-900/30 border-2 border-[#0077ff]/50 mb-4 transition-all duration-300 group-hover:bg-[#0077ff]/30 group-hover:shadow-[0_0_20px_rgba(0,119,255,0.7)]">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 text-sm">{description}</p>
    <span className="font-semibold text-[#0077ff] group-hover:text-blue-400 transition-colors text-sm">
      Learn More &rarr;
    </span>
  </Link>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#081c30] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          From simple tune-ups to complex hardware repairs, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon} 
              title={service.title} 
              description={service.shortDescription} 
              link={`/services/${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
