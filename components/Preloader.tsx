import React from 'react';

const Preloader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className={`preloader ${!isLoading ? 'preloader-hidden' : ''}`}>
      <div className="spinner"></div>
      <p className="mt-6 text-lg text-gray-300 tracking-wider">Loading Satyam Computer Solutions...</p>
    </div>
  );
};

export default Preloader;
