import React from 'react'

const Fixedbutton = () => {
  return (
   <div>
   <style>
     {`
     /* Phone flip animation */
     @keyframes phone-flip {
       0% {
         transform: rotateY(0deg);
       }
       /* Fast flip completes by 10% of the total duration (e.g., 0.25s for a 2.5s cycle) */
       10% {
         transform: rotateY(360deg);
       }
       /* Hold the 360deg state until 100% of the duration to create a 2-second pause */
       100% {
         transform: rotateY(360deg);
       }
     }

     .animate-phone-flip {
       /* Total animation duration: 0.5s for flip + 2s for pause = 2.5s */
       animation: phone-flip 2.5s infinite linear;
     }

     /* Text fade and zoom animation */
     @keyframes text-fade-zoom {
       0% {
         opacity: 1;
         transform: scale(1);
       }
       5% { /* Quick fade out and slight shrink (less zoom) */
         opacity: 0;
         transform: scale(0.95); /* हल्का ज़ूम */
       }
       10% { /* Stay hidden for approximately 0.2 seconds (5% of 4s) */
         opacity: 0;
         transform: scale(0.95); /* हल्का ज़ूम */
       }
       15% { /* Quick fade in and zoom slightly beyond normal (less zoom) */
         opacity: 1;
         transform: scale(1.05); /* हल्का ज़ूम */
       }
       20% { /* Settle back to normal size */
         opacity: 1;
         transform: scale(1);
       }
       100% { /* Remain visible until the next cycle starts */
         opacity: 1;
         transform: scale(1);
       }
     }

     .animate-text-zoom-fade {
       /* Total animation duration for text: 4 seconds */
       animation: text-fade-zoom 4s infinite ease-in-out;
     }
     `}
   </style>
   <div className="fixed bottom-12 right-4 z-50 hidden sm:block">
     <a
       href="tel:+1234567890"
       className="flex items-center gap-2 bg-white rounded-full shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 px-4 py-2 sm:px-8 sm:py-3" /* Changed padding classes */
       style={{ perspective: '1000px' }}
     >
       <div className="bg-green-800 rounded-full p-2 sm:p-3 animate-phone-flip" style={{ transformStyle: 'preserve-3d' }}>
         {/* Inline SVG for the phone icon */}
         <svg
           className="text-white"
           width="20"
           height="20"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
         >
           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-3.67A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
         </svg>
       </div>
       <div className="flex flex-col items-start">
         {/* "CALL NOW" text */}
         <span className="font-bold text-green-800 text-sm sm:text-lg animate-text-zoom-fade">CALL NOW</span>
         {/* "TO BOOK YOUR ORDER" text, now green and smaller */}
         <span className="font-bold text-green-800 text-xs sm:text-sm animate-text-zoom-fade">TO BOOK YOUR ORDER</span>
       </div>
     </a>
   </div>
 </div>
  )
}

export default Fixedbutton