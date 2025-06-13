import { Star, CheckCircle, Phone } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

// Assuming these components exist in the specified paths
import FAQSection from "../Homepagecomponents/FAQSection";
import InstagramSlider from "../Homepagecomponents/InstagramSlider";
import TestimonialSlider from "../Homepagecomponents/TestimonialSlider";
import AnimatedButton from "../Homepagecomponents/AnimatedButton";
import { FaStar } from 'react-icons/fa';
import Fixedbutton from "../Homepagecomponents/fixedbutton";
import Roundimgesanimation from "../Homepagecomponents/Roundimgesanimation";

const Home = () => {
  const [buttonText, setButtonText] = useState("BUY NOW");
  const [isTextZoomed, setIsTextZoomed] = useState(false);

  // // // State for the rotating herb display
  // // const [rotationAngle, setRotationAngle] = useState(0);
  // // const [loadedHerbsCount, setLoadedHerbsCount] = useState(0);

  // // Data for the rotating herb images - NOW USING PLACEHOLDER URLs


  // // Crucial: Adjusted circleRadius based on image for proper spacing.
  // // Central image diameter is 256px. Herb image diameter is 64px.
  // // To have space, the radius for herbs should be (256/2) + (64/2) + desired_gap.
  // // 128 (center radius) + 32 (herb radius) + 40 (gap) = 200. Let's make it 220 for more clear space.
  // const circleRadius = 220; // Radius of the circle on which herbs are placed

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratings = [
    { star: 5, percent: 95, count: 1825 },
    { star: 4, percent: 60, count: 450 },
    { star: 3, percent: 30, count: 113 },
    { star: 2, percent: 10, count: 15 },
    { star: 1, percent: 5, count: 6 },
  ];

  // Effect for changing button text
  useEffect(() => {
    const texts = ["BUY NOW", "BUY 1 GET 1 FREE"];
    let textIndex = 0;

    const intervalId = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setButtonText(texts[textIndex]);
      setIsTextZoomed((prevZoom) => !prevZoom);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Effect for rotating herbs and loading them sequentially
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Video/Image */}
        <div className="relative rounded-lg overflow-hidden border border-green-800">
          <div className="relative">
            <video
              src="/your-video-file.mp4"
              className="w-full h-auto"
              poster="\src\assets\mainvideothumbnil.png"
              id="mainVideo"
            >
              Your browser does not support the video tag.
            </video>
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={() => {
                const video = document.getElementById('mainVideo');
                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                }
              }}
            >
              <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
       
        </div>

        {/* Right Column - Product Info */}
        <div className="flex flex-col space-y-6 items-center justify-center h-full">
          {/* Checkout Security */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">100%</span>
              <span className="text-2xl font-bold text-green-500">SAFE</span>
              <span className="text-2xl font-bold">Checkout</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <div className="bg-gray-100 p-2 rounded">
                <CheckCircle className="text-green-600" size={20} />
              </div>
              <img src="/src/assets/Upi.jpeg" alt="UPI" className="h-8 object-contain" />
              <img src="/src/assets/Mastercard.jpg" alt="Mastercard" className="h-8 object-contain" />
              <img src="/src/assets/AmericanExpress.png" alt="American Express" className="h-8 object-contain" />
              <img src="/src/assets/Discover.png" alt="Discover" className="h-8 object-contain" />
            </div>
          </div>
          {/* Price and Buy Button */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold">₹1,899</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">
                Buy 1 Get 1 FREE
              </button>
            </div>
            <div className="mt-4">
              <AnimatedButton />
            </div>
          </div>

          {/* Ratings */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src="/path/to/google-logo.png" alt="Google" className="h-8" />
              <span className="text-3xl font-bold">4.9</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <CheckCircle className="text-green-600" size={20} />
              <span className="font-bold">4634 + Reviews</span>
            </div>
          </div>

          <hr className="border-gray-300" />
        </div>
      </div>

      {/* Additional Content */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold  text-black">What is Height Veda?</h2>
        <p className="text-lg mt-4 text-gray-600">
          Height Veda is a Body Growth Supplement that has all the balanced and time-tested herbs and nutrients needed
          for body growth of children, teenagers, women, and men between the ages of 12-35.
        </p>
      </div>
      <div className="bg-gray-100 py-8 text-center">
        <h2 className="text-3xl font-bold  text-black">Height Veda काम कैसे करता है ?</h2>
        <p className="text-lg mt-4  text-black">
          Height Veda में मौजूद सुपर हर्ब्स हमारे शरीर को वो सभी पोषक तत्व प्रदान करती है, जो Height Growth के लिए सबसे जरूरी होते हैं।
        </p>
        <div className="flex justify-center mt-4">
          <AnimatedButton />
        </div>
      </div>

      {/* Experts View Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold">Experts View</h2>
        <Slider {...sliderSettings} className="px-4 mt-6">
          {/* Expert 1 */}
          <div className="px-2">
            <div className="relative rounded-lg overflow-hidden border border-gray-300">
              <video
                id="expertVideo1" 
                src="/videos/how-it-works.mp4" 
                className="w-full h-[300px] object-cover" 
                poster="\src\assets\expert1.png"
                loop
                muted
              />
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  const video = document.getElementById('expertVideo1');
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }}
              >
                <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3">
                <h3 className="text-xl font-bold">HOW IT WORKS?</h3>
              </div>
            </div>
          </div>
          {/* Expert 2 */}
          <div className="px-2">
            <div className="relative rounded-lg overflow-hidden border border-gray-300">
              <video
                id="expertVideo2"
                src="/videos/why-choose.mp4"
                className="w-full h-[300px] object-cover"
                poster="\src\assets\expert2.png"
                loop
                muted
              />
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  const video = document.getElementById('expertVideo2');
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }}
              >
                <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3">
                <h3 className="text-xl font-bold">WHY CHOOSE HEIGHT VEDA?</h3>
              </div>
            </div>
          </div>
          {/* Expert 3 */}
          <div className="px-2">
            <div className="relative rounded-lg overflow-hidden border border-gray-300">
              <video
                id="expertVideo3"
                src="/videos/how-its-made.mp4"
                className="w-full h-[300px] object-cover"
                poster="/src/assets/expert3.png"
                loop
                muted
              />
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  const video = document.getElementById('expertVideo3');
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }}
              >
                <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3">
                <h3 className="text-xl font-bold">HOW IT IS MADE?</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* End of Experts View Section */}

      {/* How To Use and Benefits Section */}
      <div className="flex flex-wrap mt-8 justify-center max-w-7xl mx-auto px-4">
        {/* How To Use Card */}
        <div className="w-full md:w-1/2 p-4">
          <div className="relative rounded-lg overflow-hidden border border-gray-300 bg-white shadow-md h-full flex flex-col">
            <div className="flex-grow flex flex-col h-full">
              <div className="h-1/2">
                <img
                  src="/src/assets/Howtouse.png"
                  alt="How To Use Height Veda"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 md:p-6 flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">How To Use?</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                    <span className="font-semibold text-sm md:text-base">Daily Intake:</span>
                    <span className="text-sm md:text-base">With 1 Scoop of Height Veda</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                    <span className="font-semibold text-sm md:text-base">Method:</span>
                    <span className="text-sm md:text-base">200ml of Milk or Water</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                    <span className="font-semibold text-sm md:text-base">Frequency:</span>
                    <span className="text-sm md:text-base">Twice daily</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 text-center rounded-b-xl flex justify-center">
              <button
                className="relative w-48 md:w-56 lg:w-64 h-14 rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
                onClick={() => console.log("Button clicked!")}
              >
                <div className="absolute inset-x-0 bottom-0 bg-green-800 py-0.5 px-3 rounded-lg flex items-center justify-center h-full">
                  <span
                    className={`text-white text-[18px] md:text-xl lg:text-2xl font-bold transition-transform duration-300 ease-in-out ${
                      isTextZoomed ? "scale-105" : "scale-100"
                    }`}
                  >
                    {buttonText}
                  </span>
                </div>
              </button>
            </div>
          </div>
          
        </div>

        {/* Benefits Card */}
        <div className="w-full md:w-1/2 p-4">
          <div className="relative rounded-lg overflow-hidden border border-gray-300 bg-white shadow-md h-full flex flex-col">
            <div className="flex-grow p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Height Veda</h2>
              <div className="space-y-4">
                {[
                  "शरीर के विकास में मदद करता है।",
                  "केल्शियम और जरुरी मिनरल्स को आसानी से शरीर में घुलने में मदद करता है।",
                  "पोषक तत्वों को शरीर में बेहतर तरीके से पहुंचाने में मदद करता है।",
                  "मांसपेशियों और अन्य हिस्सों को बढ़ने में मदद करता है।",
                  "शरीर के हिस्सों को जल्दी ठीक करने और पुनर्जीवित करने की क्षमता बढ़ाता है।",
                  "शरीर के विकास के लिए पिट्यूटरी लैंड को एक्टिवेट करता है।",
                  "ऊर्जा, संतुलन और ताकत को बढ़ाता है।",
                  "पाचन सुधारकर शरीर की अतिरिक्त गर्मी को कम करने में मदद करता है।"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-green-800 font-bold text-xl">✓</span>
                    <p className="text-gray-800 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-4 px-6 text-center rounded-b-xl flex justify-center">
              <button
                className="relative w-48 md:w-56 lg:w-64 h-14 rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
                onClick={() => console.log("Button clicked!")}
              >
                <div className="absolute inset-x-0 bottom-0 bg-green-800 py-0.5 px-3 rounded-lg flex items-center justify-center h-full">
                  <span
                    className={`text-white text-[18px] md:text-xl lg:text-2xl font-bold transition-transform duration-300 ease-in-out ${
                      isTextZoomed ? "scale-105" : "scale-100"
                    }`}
                  >
                    {buttonText}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End of New Section */}

    <Roundimgesanimation/>
      {/* End Power of 15 Super Herbs Section */}

      {/* Customer Reviews Section */}
      <div className="w-full px-4 md:px-16 py-8 md:py-10 bg-white mx-auto max-w-screen-lg mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-6 md:mb-10">Customer Reviews</h2>

        {/* Row Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-10">
          {/* Left Summary */}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h3 className="text-4xl md:text-5xl font-extrabold text-yellow-500">2409</h3>
            <p className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">Reviews</p>
            <div className="flex justify-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg md:text-xl" />
                ))}
            </div>
            <p className="text-black font-semibold text-base md:text-lg">4.7 Rating Out of 5</p>
          </div>

          {/* Ratings Breakdown */}
          <div className="w-full md:w-2/3 space-y-3 md:space-y-4 px-2 md:px-0">
            {ratings.map((item, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3 relative">
                {/* Left side star & number */}
                <span className="w-4 text-xs md:text-sm font-medium">{item.star}</span>
                <FaStar className="text-yellow-500 text-xs md:text-sm" />

                {/* Bar */}
                <div className="w-full h-2 md:h-3 bg-[#e9dfcd] rounded-full relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>

                {/* Count */}
                <span className="w-10 md:w-12 text-xs md:text-sm font-medium text-right">{item.count}</span>

                {/* Rate Us button - Repositioned for mobile */}
           
              </div>
            ))}
          </div>
        </div>
        {/* Rate Us button - Positioned below ratings */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#ecb133] hover:bg-yellow-500 text-black px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
            <FaStar className="text-black" />
            Rate Us
          </button>
        </div>
      </div>
      {/* End Customer Reviews Section */}

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* FAQ Section */}
      <FAQSection />

      {/* Instagram Slider */}
      <InstagramSlider />
        
     <Fixedbutton/>

    </div>
  );
};

export default Home;

