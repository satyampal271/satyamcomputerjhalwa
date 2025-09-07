import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-slow-rotate">
      <circle cx="20" cy="20" r="19" stroke="#0077ff" strokeWidth="2"/>
      <path d="M26.5 14C26.5 12.6193 25.3807 11.5 24 11.5H18C15.2386 11.5 13 13.7386 13 16.5V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M13.5 26C13.5 27.3807 14.6193 28.5 16 28.5H22C24.7614 28.5 27 26.2614 27 23.5V23" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="27" cy="13.5" r="3" fill="#0077ff" stroke="white" strokeWidth="2" className="animate-pulse-node" style={{ animationDelay: '0s' }}/>
      <circle cx="13" cy="26.5" r="3" fill="#0077ff" stroke="white" strokeWidth="2" className="animate-pulse-node" style={{ animationDelay: '1.5s' }}/>
    </svg>
    <span className="text-2xl font-bold text-white tracking-wider">SATYAM</span>
  </div>
);

export default Logo;