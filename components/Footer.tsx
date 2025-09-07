import React from 'react';
import Logo from './Logo';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-[#0077ff] transition-colors">
        <span className="sr-only">Social Media</span>
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-[#081c30] border-t border-blue-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Logo />
                        <p className="mt-4 text-gray-400 text-sm">Your trusted partner for all computer and laptop repair needs.</p>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold tracking-wider uppercase">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#booking" className="text-gray-400 hover:text-white transition-colors">Book Now</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li><a href="mailto:info@satyamcomputers.com" className="hover:text-white">info@satyamcomputers.com</a></li>
                            <li><a href="tel:+911234567890" className="hover:text-white">+91 123 456 7890 (Call/WhatsApp)</a></li>
                            <li>123 Tech Avenue, Silicon Valley</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold tracking-wider uppercase">Follow Us</h3>
                        <div className="mt-4 flex space-x-4">
                            <SocialIcon href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                            {/* FIX: Corrected closing tag for SocialIcon component. It was </Icon> instead of </SocialIcon>. */}
                             <SocialIcon href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; 2025 Satyam Computer Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;