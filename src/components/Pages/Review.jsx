import React, { useState } from 'react';
import PaymentForm from '../Homepagecomponents/Paymentform';

// Main Review Component
const Review = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  
  const customers = [
    {
      name: "Rubal Dhankar",
      image: "/src/assets/Rahul.png", // Corrected path
      title: "Height Veda Customer",
      description: "Rubal highly recommends Height Veda to spread positivity and growth among his followers.",
      socialLinks: { facebook: "#", instagram: "#", youtube: "#" }
    },
    {
      name: "Sakshi Joshi",
      image: "/src/assets/Sakshi.png", // Corrected path
      title: "Height Veda Customer",
      description: "Sakshi shares her growth journey and satisfaction using Height Veda.",
      socialLinks: { facebook: "#", instagram: "#", youtube: "#" }
    },
    {
      name: "Vansh Fitness 🇮🇳",
      image: "/src/assets/Vansh.png", // Corrected path
      title: "Height Veda Customer",
      description: "Vansh recommends Height Veda for fitness transformation.",
      socialLinks: { facebook: "#", instagram: "#", youtube: "#" }
    },
    {
      name: "Boby",
      image: "/src/assets/Boby.png", // Corrected path
      title: "Height Veda Customer",
      description: "Boby found noticeable changes after using Height Veda.",
      socialLinks: { facebook: "#", instagram: "#", youtube: "#" }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-9 font-sans mb-12">
      <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 tracking-tight">HEIGHT VEDA CUSTOMERS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer border border-gray-200"
            onClick={() => setSelectedCustomer(customer)} // Open customer detail modal on click
          >
            <img
              src={customer.image}
              alt={customer.name}
              className="w-full h-64 object-cover object-center"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found"; }} // Fallback for image loading errors
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{customer.name}</h3>
              <p className="text-sm text-gray-600">{customer.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected customer details */}
      {selectedCustomer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCustomer(null)} // Close modal when clicking outside
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation inside the modal
          >
            {/* Close button for customer detail modal */}
            <button
              onClick={() => setSelectedCustomer(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold z-10"
              aria-label="Close customer details"
            >
              ✕
            </button>

            {/* Customer image section */}
            {/* Changed height to be responsive: max-h-[50vh] for mobile, md:h-[600px] for larger screens */}
            <div className="md:w-1/2 flex-shrink-0 max-h-[50vh] md:h-[600px]">
              <img
                src={selectedCustomer.image}
                alt={selectedCustomer.name}
                className="w-full h-full object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x600/cccccc/ffffff?text=Image+Not+Found"; }} // Fallback for image loading errors
              />
            </div>
            {/* Customer details and social links section */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-2">{selectedCustomer.name}</h2>
                <p className="text-gray-600 text-base mb-3">{selectedCustomer.title}</p>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedCustomer.description}</p>
              </div>

              {/* Social media links - Replaced react-icons with inline SVGs */}
              <div className="flex space-x-6 mb-6">
                <a href={selectedCustomer.socialLinks.facebook} className="text-blue-600 hover:text-blue-800 transition-colors duration-200" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.186-4.188 4.004v1.996z"/>
                  </svg>
                </a>
                <a href={selectedCustomer.socialLinks.instagram} className="text-pink-600 hover:text-pink-800 transition-colors duration-200" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href={selectedCustomer.socialLinks.youtube} className="text-red-600 hover:text-red-800 transition-colors duration-200" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.668.25-4.032 2.585-4.385 6.435-.352 3.851.015 6.185 4.385 6.435 3.6.246 11.626.245 15.23 0 3.668-.25 4.032-2.585 4.385-6.435.352-3.851-.015-6.185-4.385-6.435zm-11.615 9.816l4 2.5-4 2.5v-5z"/>
                  </svg>
                </a>
              </div>

              {/* Buy Now button */}
              <button
                onClick={() => {
                  setShowPaymentForm(true); // Open payment form
                  setSelectedCustomer(null); // Close customer detail modal
                }}
                className="mt-auto bg-green-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-200 ease-in-out shadow-md"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render PaymentForm modal if showPaymentForm is true */}
      {showPaymentForm && <PaymentForm onClose={() => setShowPaymentForm(false)} />}
    </div>
  );
};

export default Review;
