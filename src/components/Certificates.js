import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/Certificates/APS.png',
  '/Certificates/DBMS.png',
  '/Certificates/DSA.png',
  '/Certificates/JAVA.png',
  '/Certificates/NLP.png',
  '/Certificates/python.png',
  '/Certificates/RS.png',
];

// Clone first 3 items at the end for smooth transition
const extendedImages = [...images, ...images.slice(0, 3)];

const CertificateSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const itemWidth = 256 + 24; // w-64 + mx-3 = 256 + 12 + 12 = 280px

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset position without transition if we're at the fake end
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // match transition duration
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex]);

  const getTransformStyle = () => {
    return {
      transform: `translateX(calc(50% - ${(currentIndex + 0.5) * itemWidth}px))`,
      transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
    };
  };

  return (
    <div className="bg-gradient-to-r from-gray-500 via-indigo-500 to-red-700 py-16 px-6 ">
        
      <h2 className="text-3xl text-center font-bold text-black mb-8 ">My Certificates</h2>

      <div className="w-full max-w-5xl mx-auto overflow-hidden">
        <div
          ref={sliderRef}
          className="flex items-center"
          style={getTransformStyle()}
        >
          {extendedImages.map((src, index) => {
            const isActive = index % images.length === currentIndex % images.length;
            return (
              <div key={index} className="flex-shrink-0 w-64 mx-3">
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="w-full border-black object-contain rounded-lg shadow-2xl transition-all duration-700 ease-in-out  max-w-5xl mx-auto overflow-hidden h-[500px]"
                  style={{
                    transform: `scale(${isActive ? 2.5 : 0.9})`,
                    opacity: isActive ? 2 : 0.1,
                    boxShadow: isActive ? '0 0 25px rgba(255, 255, 255, 0)' : 'none',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CertificateSlider;
