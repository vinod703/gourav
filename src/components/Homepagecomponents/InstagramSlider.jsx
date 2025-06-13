import React, { useState, useEffect } from "react";

const InstagramSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const instagramPosts = [
    {
      id: 1,
      image: "src/assets/instaslide.png", 
      alt: "Instagram Image 1",
      link: "#",
    },
    {
      id: 2,
      image: "src/assets/instaslide2.png", 
      alt: "Instagram Image 2",
      link: "#",
    },
    {
      id: 3,
      image: "src/assets/instaslide3.png", 
      link: "#",
    },
    {
      id: 4,
      image: "src/assets/instaslide4.png", 
      alt: "Instagram Image 4",
      link: "#",
    },
    {
      id: 5,
      image: "src/assets/instaslide5.png", 
      alt: "Instagram Image 5",
      link: "#",
    },
    {
      id: 6,
      image: "src/assets/instaslide6.png",
      alt: "Instagram Image 6",
      link: "#",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile
    ? instagramPosts.map((post) => [post])
    : [
        instagramPosts.slice(0, 3),
        instagramPosts.slice(3, 6),
      ];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full py-8 flex justify-center items-center px-4 sm:px-6 md:px-8"> {/* Responsive padding added */}
      {/* left  - classes added */}
      <button
        onClick={goPrev}
        className="flex-shrink-0 text-1xl px-2 py-3 rounded-full shadow-lg
                   bg-gradient-to-r from-green-600 to-green-800 text-white
                   hover:from-green-700 hover:to-green-900 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75
                   mr-2 sm:mr-4 md:mr-6" 
      >
        &lt;
      </button>

      <div className="overflow-hidden flex-grow max-w-6xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((group, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-full"
            >
              {group.map((post) => (
                <div key={post.id} className="aspect-square">
                  <a href={post.link} className="block w-full h-full">
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x300/CCCCCC/000000?text=Image%0ALoad%0AError`; }}
                    />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* right - Stylish classes added */}
      <button
        onClick={goNext}
        className="flex-shrink-0 text-1xl px-2 py-3 rounded-full shadow-lg
                   bg-gradient-to-r from-green-600 to-green-800 text-white
                   hover:from-green-700 hover:to-green-900 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75
                   ml-2 sm:ml-4 md:ml-6" 
      >
        &gt;
      </button>
    </div>
  );
};

export default InstagramSlider;
