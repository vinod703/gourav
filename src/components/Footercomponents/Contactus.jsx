import React, { useState } from 'react';

import { Mail, Phone, User, MessageSquare } from 'lucide-react';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // State for controlling the message box visibility and content
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, i  would send this data to a backend.
    console.log('Form submitted:', formData);
    setMessageContent('Thank you for your message! We will get back to you soon.');
    setShowMessage(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* Header Section */}
      <header className="relative w-full overflow-hidden bg-white py-4 md:py-6 lg:py-8">
        <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10 gap-8">
          {/* Left Section: Doctor Image - Adjusted for more width and height */}
          <div className="flex-1 flex justify-center lg:justify-start w-full lg:w-1/2 h-full items-stretch"> {/* Increased width to 1/2 */}
            <img
              src="https://placehold.co/900x600/1A5D1A/FFFFFF?text=Doctor+Image" // Adjusted placeholder size for more width and height
              alt="Doctor"
              className="w-full h-auto object-cover rounded-lg shadow-lg" // Removed max-w to allow it to fill its container
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/900x600/1A5D1A/FFFFFF?text=Doctor"; }}
            />
          </div>

          {/* Middle Section: Product Images */}
          <div className="flex-1 flex items-center justify-center space-x-4 w-full lg:w-1/4"> {/* Adjusted width to 1/4 */}
            <img
              src="https://placehold.co/150x200/4CAF50/FFFFFF?text=Product+1"
              alt="Height Veda Product 1"
              className="w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-52 object-contain rounded-lg shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x200/4CAF50/FFFFFF?text=Product+Image"; }}
            />
            <img
              src="https://placehold.co/150x200/4CAF50/FFFFFF?text=Product+2"
              alt="Height Veda Product 2"
              className="w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-52 object-contain rounded-lg shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x200/4CAF50/FFFFFF?text=Product+Image"; }}
            />
          </div>

          {/* Right Section: Text and Customer Care Icon */}
          <div className="flex-1 flex flex-col items-center lg:items-end text-green-700 text-center lg:text-right w-full lg:w-1/4"> {/* Adjusted width to 1/4 */}
            {/* Customer Care Icon (Headset Icon) - Size remains small as requested */}
            <svg
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H7V21C7 21.6 7.4 22 8 22H8.2C8.6 22 8.9 21.8 9.1 21.5L12 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H11.2L8 19.2V16H4V4H20V16Z"/>
              <path d="M8 9H16V11H8V9ZM8 6H16V8H8V6ZM8 12H13V14H8V12Z"/>
            </svg>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              GET FREE TELEPHONIC CONSULTATION
            </p>
            <p className="text-md md:text-lg lg:text-xl font-medium">
              WITH OUR EXPERTS
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Customer Care Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Contact us
          </h2>
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Customer Care
          </h3>
          <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-8">
            For inquiries regarding orders, tracking, product usage, or bulk orders,
            please feel free to reach out to us at
          </p>
          <div className="flex items-center justify-center space-x-3 text-green-700 mb-4">
            <Mail className="w-7 h-7" />
            <a
              href="mailto:heightvedo@gmail.com"
              className="text-xl font-medium hover:underline"
            >
              heightvedo@gmail.com
            </a>
          </div>
        </section>

        {/* Get in Touch Section (Contact Form) */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Get in Touch
          </h3>
          <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-8">
            For any additional inquiries, kindly complete the contact form below.
            Our team will respond to you soon.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                <User className="inline-block mr-2 text-green-700" size={20} /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-lg"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                <Mail className="inline-block mr-2 text-green-700" size={20} /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-lg"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                <MessageSquare className="inline-block mr-2 text-green-700" size={20} /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-lg"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Custom Message Box */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
            <p className="text-xl font-semibold mb-4">{messageContent}</p>
            <button
              onClick={() => setShowMessage(false)}
              className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contactus;
