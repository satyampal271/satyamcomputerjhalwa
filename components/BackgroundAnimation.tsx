import React, { useState, useEffect } from 'react';

interface Star {
  id: number;
  style: React.CSSProperties;
}

const BackgroundAnimation: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const isMobile = window.innerWidth < 768;
      const starCount = isMobile ? 25 : 50;

      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 2 + 1; // 1px to 3px
        const duration = Math.random() * 20 + 15; // 15s to 35s
        const delay = Math.random() * 15; // 0s to 15s
        newStars.push({
          id: i,
          style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}vw`,
            top: '110vh', // Start below the viewport
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          },
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {stars.map(star => (
        <div key={star.id} className="star" style={star.style} />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
