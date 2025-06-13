import React, { useState, useEffect } from 'react';

const Topbar = () => {
    const [bannerText, setBannerText] = useState("No Side Effect");
    const bannerTexts = ["No Side Effect", "Fast Delivery", "Blend of 15 Super Herbs"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [bannerTexts.length]);

    useEffect(() => {
        setBannerText(bannerTexts[currentTextIndex]);
    }, [currentTextIndex, bannerTexts]);

    return (
        // Topbar container
        <div className="w-full min-w-full bg-[#08481d] text-white py-2 text-center font-medium h-[68px] flex items-center justify-center">
            {/* Animated text */}
            <div className="transition-opacity duration-500 text-xl sm:text-2xl font-bold px-2">{bannerText}</div>
        </div>
    );
};

export default Topbar;