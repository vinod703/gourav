import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react'; // Importing the Leaf icon from lucide-react


function About() {
    const [wellnessTip, setWellnessTip] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [buttonText, setButtonText] = useState('BUY NOW');
    const [isTextZoomed, setIsTextZoomed] = useState(false);
  
    const imageUrl = "https://placehold.co/1200x800/FFFFFF/000000?text=The+Height+Veda+Product";



   

    const images = [
        'https://placehold.co/1200x400/F0F8FF/000000?text=The+Height+Veda+Offer',
        'https://placehold.co/1200x400/ADD8E6/000000?text=Another+Great+Product',
        'https://placehold.co/1200x400/90EE90/000000?text=Wellness+Solutions'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);
    const benefits = [
        {
            title: "Purity Guaranteed",
            description: "Our herbs are sourced from a pure and clean environment, ensuring unmatched quality and purity."
        },
        {
            title: "Scientifically backed by Ayurvedic research.",
            description: "Height Veda is a blend of Ayurvedic knowledge and scientific research."
        },
        {
            title: "No harmful chemicals and additives",
            description: "We use only natural ingredients in our products, ensuring they are free from harmful chemicals and additives for a safe, side-effect-free experience."
        },
        {
            title: "Visible results",
            description: "With consistent use of Height Veda, you will experience visible results."
        },
        {
            title: "Trusted Product",
            description: "Thousands of satisfied users trust Height Veda and recommend it for height and overall body growth."
        },
        {
            title: "Environment friendly",
            description: "From sourcing to packaging, we adhere to eco-friendly practices."
        }
    ];

// A simple component for a service card
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 my-4 w-full sm:w-80 md:w-96 lg:w-80"> {/* Removed mx-2 */}
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full border-2 border-green-700 text-green-700 mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{title}</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">{description}</p>
        </div>
    );
};

useEffect(() => {
    const texts = ['BUY NOW', 'BUY 1 GET 1 FREE'];
    let textIndex = 0;

    const intervalId = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setButtonText(texts[textIndex]);
      setIsTextZoomed(prevZoom => !prevZoom);
    }, 2000); // Change text every 2 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 
    return (
        <div className="font-inter">
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="min-w-full w-full flex-shrink-0">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover" // Adjusted for responsiveness
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/1200x400/CCCCCC/000000?text=Image+Not+Found";
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-green-800' : 'bg-gray-300'
                                } focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="max-w-[90rem] mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Left Section: About Height Veda */}
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold text-green-800 mb-6">ABOUT HEIGHT VEDA</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Height Veda is one of the best Ayurvedic body growth formula, which helps in height and overall body development.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We believe in the power of nature to support your height and overall growth. Our journey began with a passion for bringing you the best herbs sourced directly from the mountains. Located in India, the heart of Ayurveda, our brand mixes traditional wisdom with modern science. We are dedicated to providing high-quality products that promote your overall growth and well-being. Choose us for natural solutions that help you grow and feel your best.
                            </p>
                        </div>

                        {/* Right Section: Product Offer */}
                        <div className="md:w-1/2 flex justify-center">
                            <div className="bg-white p-10 rounded-xl shadow-lg text-center w-full max-w-2xl">
                                <h3 className="text-4xl font-bold text-black mb-3">BUY 1 GET 1</h3>
                                <p className="text-5xl font-black text-green-800 mb-8">FREE</p>
                                <div className="flex items-center justify-center gap-8">
                                    <img
                                        src="/images/product1.png"
                                        alt="Height Veda Product 1"
                                        className="w-24 h-auto sm:w-32 md:w-40" // Adjusted for responsiveness
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://placehold.co/120x180/E0F2F7/000000?text=HEIGHT+VEDA";
                                        }}
                                    />
                                    <span className="text-5xl font-bold text-gray-400">+</span>
                                    <img
                                        src="/images/product2.png"
                                        alt="Height Veda Product 2"
                                        className="w-24 h-auto sm:w-32 md:w-40" // Adjusted for responsiveness
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://placehold.co/120x180/E0F2F7/000000?text=HEIGHT+VEDA";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 w-full p-4 sm:p-8 font-inter">
                <div className="flex justify-center items-center bg-gray-50 p-4 sm:p-8">
                    <div className="bg-white rounded-lg shadow-xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-center w-full">
                        {/* Left Section: Product Image - exactly half width on large screens */}
                        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4">
                            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center justify-center"> {/* Added max-w for better control */}
                                <div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3/5 bg-gradient-to-t from-green-100 via-white to-transparent rounded-full opacity-80"
                                    style={{ filter: 'blur(45px)', zIndex: 0 }}
                                ></div>
                                <img
                                    src="https://placehold.co/250x350/C1D8C1/ffffff?text=Height+Veda+Bottle"
                                    alt="The Height Veda Product"
                                    className="w-full h-auto object-contain z-10 rounded-lg"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/250x350/C1D8C1/ffffff?text=Image+Error"; }}
                                />
                            </div>
                        </div>

                        {/* Right Section: "Why Choose Height Veda?" Benefits - exactly half width on large screens */}
                        <div className="flex flex-col items-start w-full lg:w-1/2 px-4 mt-8 lg:mt-0"> {/* Changed items-center to items-start */}
                            <h2 className="text-4xl font-bold text-green-700 mb-6 text-left">WHY CHOOSE HEIGHT VEDA?</h2> {/* Changed text-center lg:text-left to text-left */}
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0">
                                        <Leaf className="w-10 h-10 text-green-600" fill="currentColor" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-2xl text-gray-800 text-left">{benefit.title}</h3> {/* Added text-left */}
                                        <p className="text-gray-600 mt-1 text-lg text-left">{benefit.description}</p> {/* Added text-left */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
  <div className="bg-gray-50 font-inter py-8 px-4 sm:px-6 lg:px-8">
      {/* Changed mb-0 to mb-4 to give a small space between heading and cards,
          while removing mt-8 from the cards container below. */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center">
        EXPERIENCE OUR SERVICES
      </h2>

      {/* Increased max-w-6xl to max-w-7xl to accommodate wider cards */}
      {/* Removed mt-8 from here, as spacing is now handled by mb-4 on the heading */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-7xl mx-auto"> {/* Changed items-stretch to items-center */}
        <ServiceCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          }
          title="Join Our Mission"
          description="Be a part of our mission to spread health and happiness worldwide. Choose HEIGHT VEDA for a life in harmony with nature."
        />

        <ServiceCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z"></path>
              <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z"></path>
            </svg>
          }
          title="Free Telephonic Consultation"
          description="We understand that every individual is unique. That's why we offer free telephonic consultations to guide you on your journey to wellness."
        />

        <ServiceCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          }
          title="Global Reach, Personal Touch"
          description="Height Veda touched lives across the globe, earning love and trust for their effectiveness. We take pride in fostering a community that values health and well-being."
        />
      </div>
    </div>
    <div className="bg-white font-inter">
      <div className="bg-white overflow-hidden w-full">
        <div className="py-3 px-6 text-center text-gray-700 font-semibold text-lg md:text-xl rounded-t-xl">
          TRUSTED BY THOUSANDS
        </div>

        <div className="relative flex items-center justify-center h-[40vh] sm:h-[50vh] md:h-[60vh]"> {/* Adjusted for responsiveness */}
          <img
            src="https://placehold.co/900x500/E0E0E0/333333?text=Group+of+Happy+People"
            alt="Group of happy people"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/900x500/E0E0E0/333333?text=Image+Not+Found"; }}
          />
        </div>

        <div className="py-4 px-6 text-center rounded-b-xl flex justify-center">
          <button
            className="relative w-48 md:w-56 lg:w-64 h-14 rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
            onClick={() => console.log('Button clicked!')}
          >
            <div className="absolute inset-x-0 bottom-0 bg-green-800 py-0.5 px-3 rounded-lg flex items-center justify-center h-full">
              <span
                className={`text-white text-[18px] md:text-xl lg:text-2xl font-bold transition-transform duration-300 ease-in-out ${isTextZoomed ? 'scale-105' : 'scale-100'}`}
              >
                {buttonText}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 flex flex-col items-center justify-start font-sans py-4">
      {/* Content wrapper with a maximum width for better readability on larger screens */}
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16 max-w-4xl w-full text-center">
        {/* Top section: "POWER OF 15 SUPER HERBS" and description */}
        <div className="mb-8">
          {/* Main title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">
            POWER OF 15 SUPER HERBS
          </h1>
          {/* Description paragraph */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Experience the magic of Ayurveda with 15 rare super herbs carefully selected and sourced to ensure the highest quality. These rare herbs are rooted
            in centuries of Ayurvedic wisdom. Known for their natural benefits, they support natural height growth and overall body development.
          </p>
        </div>

        {/* Image section: Group of doctors */}
        <div className="mb-10">
          {/* Image with responsive sizing and rounded corners */}
          <img
            src="https://placehold.co/800x450/cccccc/ffffff?text=Doctors+in+India"
            alt="Group of doctors"
            className="w-full h-auto rounded-lg shadow-md mx-auto"
            // Fallback for image loading errors
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "https://placehold.co/800x450/cccccc/ffffff?text=Image+Not+Available";
            }}
          />
        </div>

        {/* Bottom section: "HEIGHT VEDA" and "BODY GROWTH FORMULA" */}
        <div>
          {/* Product name */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-700 mb-4 tracking-tighter">
            HEIGHT VEDA
          </h2>
          {/* Tagline within a styled box */}
          <div className="inline-block border-2 border-green-600 rounded-full px-6 py-2 md:px-8 md:py-3 bg-green-50 shadow-inner">
            <p className="text-lg md:text-xl font-semibold text-green-800 tracking-wide">
              BODY GROWTH FORMULA
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap mt-8 justify-center max-w-7xl mx-auto px-4">
        {/* How To Use Card */}
        <div className="w-full md:w-1/2 p-4">
          <div className="relative rounded-lg overflow-hidden border border-gray-300 bg-white shadow-md h-full flex flex-col">
            <div className="flex-grow flex flex-col h-full">
              {/* Image for "How To Use" section, now with a placeholder suggesting steps */}
              <div className="h-1/2 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://placehold.co/600x300/e0e0e0/333333?text=How+To+Use%3A+Steps+1-2-3"
                  alt="How To Use Height Veda"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x300/cccccc/ffffff?text=Image+Not+Available";
                  }}
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-center">How To Use?</h3>
                {/* "Best Enjoyed Within 30 Minutes" text added here */}
                <h4 className="text-xl font-bold mb-3 text-center">Recommended Dosage</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-2"> {/* Changed items-center to items-start */}
                    <span className="text-green-800 font-bold text-xl">✓</span> {/* Checkmark icon */}
                    <span className="font-semibold text-left">Daily Intake:</span> {/* Added text-left */}
                    <span className="text-left">With 1 Scoop of Height Veda</span> {/* Added text-left */}
                  </div>
                  <div className="flex items-start gap-2"> {/* Changed items-center to items-start */}
                    <span className="text-green-800 font-bold text-xl">✓</span> {/* Checkmark icon */}
                    <span className="font-semibold text-left">Method:</span> {/* Added text-left */}
                    <span className="text-left">200ml of Milk or Water</span> {/* Added text-left */}
                  </div>
                  <div className="flex items-start gap-2"> {/* Changed items-center to items-start */}
                    <span className="text-green-800 font-bold text-xl">✓</span> {/* Checkmark icon */}
                    <span className="font-semibold text-left">Frequency:</span> {/* Added text-left */}
                    <span className="text-left">Twice daily</span> {/* Added text-left */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              {/* Button with dynamic text */}
              <button className="bg-green-800 text-white rounded-full px-8 py-3 font-bold hover:bg-green-900 transition w-full">
                {buttonText}
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
                  "पाचन सुधारकर शरीर की अतिरिक्त गर्मी को कम करने में मदद करता।"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-green-800 font-bold text-xl">✓</span>
                    <p className="text-gray-800 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6">
              {/* Button with dynamic text */}
              <button className="bg-green-800 text-white rounded-full px-8 py-3 font-bold hover:bg-green-900 transition w-full">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-100 py-0"> {/* Removed min-h-screen and changed py-4 to py-0 */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-full lg:max-w-5xl xl:max-w-7xl">
        {/*
          The image is displayed here.
          - h-[500px] for default height
          - md:h-[700px] for medium screens
          - xl:h-[900px] for extra large screens
          - w-full ensures it always takes full width of its container.
         
        */}
        <img
          src={imageUrl}
          alt="The Height Veda Product with Home Delivery"
          className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[900px] object-cover rounded-lg" // Adjusted for responsiveness
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/1200x800/CCCCCC/333333?text=Image+Not+Available"; // Fallback placeholder
          }}
        />
      </div>
    </div> 
  </div>
    );
}

export default About;
