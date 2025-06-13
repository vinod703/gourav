import React, { useState, useEffect } from 'react';

const AnimatedButton = () => {
  const [buttonText, setButtonText] = useState('BUY NOW');
  const [isTextZoomed, setIsTextZoomed] = useState(false);

  useEffect(() => {
    const texts = ['BUY NOW', 'BUY 1 GET 1 FREE'];
    let textIndex = 0;

    const intervalId = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setButtonText(texts[textIndex]);
      setIsTextZoomed(prevZoom => !prevZoom);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <button
      className="relative w-48 md:w-56 lg:w-64 h-10 md:h-12 lg:h-14 rounded-lg overflow-hidden shadow-lg"
      onClick={() => console.log('Button clicked!')}
    >
      <div className="absolute top-0 left-0 right-0 bg-lime-500 text-white text-[8px] md:text-[10px] font-semibold py-0.5 px-2 rounded-t-lg flex items-center justify-center h-1/3">
        Extra ₹ 400 Off on Prepaid Orders
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-green-800 py-0.5 px-3 rounded-b-lg flex items-center justify-center h-2/3">
        <span 
          className={`text-white text-[10px] md:text-xs lg:text-sm font-bold transition-transform duration-300 ease-in-out ${
            isTextZoomed ? 'scale-105' : 'scale-100'
          }`}
        >
          {buttonText}
        </span>
      </div>
    </button>
  );
};

export default AnimatedButton;
