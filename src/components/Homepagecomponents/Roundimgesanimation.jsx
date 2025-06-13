import React, { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';

const Roundimgesanimation = () => {
    const herbImages = [
        "/src/assets/herb1.png",
        "/src/assets/herb2.png",
        "/src/assets/herb3.png",
        "/src/assets/herb4.png",
        "/src/assets/herb5.png",
        "/src/assets/herb6.png",
        "/src/assets/herb7.png",
        "/src/assets/herb8.png",
        "/src/assets/herb9.png",
        "/src/assets/herb10.png",
      ];
      const numHerbs = herbImages.length; // This will now be 12

      const [rotationAngle, setRotationAngle] = useState(0);
      const [loadedHerbsCount, setLoadedHerbsCount] = useState(0);

      useEffect(() => {
        const rotationInterval = setInterval(() => {
          setRotationAngle((prevAngle) => (prevAngle + 1) % 360); // Rotate 1 degree per interval
        }, 50); // Adjust speed of rotation
    
        const loadHerbsInterval = setInterval(() => {
          setLoadedHerbsCount((prevCount) => {
            if (prevCount < numHerbs) {
              return prevCount + 1;
            } else {
              clearInterval(loadHerbsInterval); // Stop loading after all herbs are visible
              return prevCount;
            }
          });
        }, 200); // Time between each herb appearing
    
        return () => {
          clearInterval(rotationInterval);
          clearInterval(loadHerbsInterval);
        };
      }, [numHerbs]); // Depend on numHerbs to re-run if number of herbs changes
    
  return (
    <div>{/* Power of 15 Super Herbs Section - REVISED */}
    <div className="flex flex-col items-center font-sans bg-gray-100 py-6 px-8 sm:px-8 sm:py-6">
      <h1 className="text-3xl font-bold mb-4 text-center  text-black">Power Of 15 Super Herbs</h1>
      <p className="text-lg font-bold text-center mb-4   text-black">
        Experience the magic of Ayurveda with 15 rare super herbs, carefully selected and sourced to ensure the
        highest quality. These rare herbs are rooted in centuries of Ayurvedic wisdom. Known for their natural
        benefits, they support naturally height growth and overall body development.
      </p>
      <p className="text-lg font-bold text-center mb-4 text-gray-600">
        Height Veda में मौजूद 15 शक्तिशाली जड़ी-बूटियाँ आपके शरीर को वो सभी पोषक तत्व प्रदान करती है जो आपकी हाइट नेचुरली बढ़ने मदद
        करते हैं।
      </p>
      {/* Circular Herb Display Section */}
<style>
{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}
html {
  margin: 0;
  padding: 0;
}

@keyframes zoomInOut {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
.animate-zoom-in-out {
  animation: zoomInOut 3s ease-in-out infinite;
}
`}
</style>

<div className="w-full max-w-[500px] mx-auto h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] relative flex justify-center items-center">
<div className="absolute w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-green-500 z-10 bg-white flex items-center justify-center animate-zoom-in-out shadow-lg">
  <img
    src="/src/assets/heightvedaproduct.png?text=HEIGHT+VEDA%0AProduct"
    alt="HEIGHT VEDA Product"
    className="w-full h-full object-cover rounded-full"
    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/250x250/CCCCCC/000000?text=Image%0ALoad%0AError`; }}
  />
</div>

<div
  className="absolute w-full h-full flex justify-center items-center"
  style={{ transform: `rotate(${rotationAngle}deg)` }}
>
  {herbImages.map((src, index) => {
    const dynamicRadius = window.innerWidth < 768 ? 100 : 140;
    const angle = (index / numHerbs) * 2 * Math.PI;
    const x = dynamicRadius * Math.cos(angle);
    const y = dynamicRadius * Math.sin(angle);
    return (
      <div
        key={index}
        className={`absolute w-11 h-11 md:w-16 md:h-16  lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-green-500 transition-all duration-500 ease-in-out shadow-md
          ${index < loadedHerbsCount ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: `translate(-50%, -50%) rotate(${-rotationAngle}deg)`,
        }}
      >
        <img
          src={src}
          alt={`Herb ${index + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/50x50/CCCCCC/000000?text=Error`; }}
        />
      </div>
    );
  })}
</div>
</div>
<div>
<AnimatedButton />
</div>
</div></div>
  )
}

export default Roundimgesanimation