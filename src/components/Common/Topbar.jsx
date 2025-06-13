"use client"

import React, { useState, useEffect } from 'react'

const Topbar = () => {
  const [bannerText, setBannerText] = useState("No Side Effect")
  const bannerTexts = ["No Side Effect", "Fast Delivery", "Blend of 15 Super Herbs"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length)
    }, 3000) // Changed to 3 seconds for better readability

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setBannerText(bannerTexts[currentTextIndex])
  }, [currentTextIndex])

  return (
    <div className="w-full bg-[#08481d] text-white py-1">
      <div className="transition-opacity duration-500 text-center text-sm font-medium">
        {bannerText}
      </div>
    </div>
  )
}

export default Topbar