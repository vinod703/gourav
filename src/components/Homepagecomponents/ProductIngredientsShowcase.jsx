import React, { useState, useEffect } from 'react';

const ProductIngredientsShowcase = () => {
  const mainProductImage = "https://placehold.co/320x320/000/FFF?text=HEIGHT+VEDA+Product";
  const herbImages = [
    "https://placehold.co/80x80/E0F2F1/000?text=Herb1",
    "https://placehold.co/80x80/C8E6C9/000?text=Herb2",
    "https://placehold.co/80x80/A5D6A7/000?text=Herb3",
    "https://placehold.co/80x80/81C784/000?text=Herb4",
    "https://placehold.co/80x80/66BB6A/000?text=Herb5",
    "https://placehold.co/80x80/4CAF50/000?text=Herb6",
    "https://placehold.co/80x80/43A047/000?text=Herb7",
    "https://placehold.co/80x80/388E3C/000?text=Herb8",
    "https://placehold.co/80x80/2E7D32/000?text=Herb9",
    "https://placehold.co/80x80/1B5E20/000?text=Herb10",
    "https://placehold.co/80x80/8BC34A/000?text=Herb11",
    "https://placehold.co/80x80/CDDC39/000?text=Herb12",
  ];

  const numHerbs = herbImages.length;
  const circleRadius = 260;
  const herbSize = 80;

  const [currentHerbIndex, setCurrentHerbIndex] = useState(-1);

  useEffect(() => {
    let timer;

    const startSequence = () => {
      setCurrentHerbIndex(-1);
      timer = setTimeout(() => {
        animateNextHerb(0);
      }, 500);
    };

    const animateNextHerb = (index) => {
      if (index < numHerbs) {
        setCurrentHerbIndex(index);
        timer = setTimeout(() => {
          animateNextHerb(index + 1);
        }, 1000);
      } else {
        timer = setTimeout(() => {
          startSequence();
        }, 2000);
      }
    };

    startSequence();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [numHerbs]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 font-sans">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-10 text-center">
          The Power of Our Ingredients
        </h1>

        <div className="
          relative
          w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]
          flex items-center justify-center
          mx-auto
          md:w-[450px] md:h-[450px]
          sm:w-[380px] sm:h-[380px]
        ">
          {/* Central Product Image */}
          <div className="
            relative
            w-64 h-64 lg:w-96 lg:h-96
            rounded-full overflow-hidden
            shadow-xl border-4 border-green-700
            z-10
            md:w-[200px] md:h-[200px]
            sm:w-[150px] sm:h-[150px]
          ">
            <img
              src={mainProductImage}
              alt="HEIGHT VEDA Product"
              className="w-full h-full object-cover animate-zoom"
            />
          </div>

          {/* Surrounding Herb Images */}
          {herbImages.map((src, index) => {
            const isVisible = index <= currentHerbIndex;

            const angle = (index / numHerbs) * 2 * Math.PI;
            const x = circleRadius * Math.cos(angle);
            const y = circleRadius * Math.sin(angle);

            return (
              <div
                key={index}
                className={`
                  absolute rounded-full overflow-hidden border-2 border-lime-500 shadow-md
                  flex items-center justify-center
                  w-20 h-20
                  md:w-[60px] md:h-[60px]
                  sm:w-[50px] sm:h-[50px]
                  ${isVisible ? 'animate-fadeInOnce' : 'opacity-0'} // Use the new Tailwind animation class
                `}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%)`
                }}
              >
                <img
                  src={src}
                  alt={`Herb ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    
    </div>
  );
};

export default ProductIngredientsShowcase;
