import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

// PaymentOptionsPage component - This handles displaying payment options and initiating payment
const PaymentOptionsPage = ({ deliveryDetails, onBackToForm }) => {
  const [showQr, setShowQr] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'failed', 'pending'
  const [activePaymentMethod, setActivePaymentMethod] = useState('upi'); // State to manage active payment method, UPI is active by default
  const [upiId, setUpiId] = useState('');
  const [upiIdError, setUpiIdError] = useState('');

  // Function to handle showing QR code and simulating payment
  const handleShowQr = async () => {
    setShowQr(true); // Show the QR image
    setPaymentProcessing(true); // Start processing indicator
    setPaymentStatus(null); // Clear previous status

    console.log("Initiating QR payment for:", deliveryDetails);

    // Simulate a payment API call to a backend
    try {
      // In a real application, you would make an API call to your backend here.
      // our backend would then interact with a Payment Gateway (e.g., PhonePe, Razorpay).
    

      setTimeout(() => {
        const success = Math.random() > 0.5; // 50% chance of success
        setPaymentProcessing(false); // Stop processing
        if (success) {
          setPaymentStatus('success');
          console.log("Simulated QR Payment successful!");
        } else {
          setPaymentStatus('failed');
          console.log("Simulated QR Payment failed!");
        }
      }, 3000); // Simulate 3-second payment processing
    } catch (error) {
      console.error("Error initiating QR payment:", error);
      setPaymentProcessing(false);
      setPaymentStatus('failed');
    }
  };

  // Function to handle UPI ID input changes
  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
    setUpiIdError(''); // Clear error on change
  };

  // Function to simulate UPI ID payment
  const handleUpiIdSubmit = async () => {
    if (!upiId.trim()) {
      setUpiIdError('Please enter your UPI ID');
      return;
    }
    // Basic UPI ID format validation (e.g., abc@bankname)
    if (!/^[\w.-]+@[\w.-]+$/.test(upiId.trim())) {
      setUpiIdError('Please enter a valid UPI ID (e.g., example@bank)');
      return;
    }

    setPaymentProcessing(true); // Start processing indicator
    setPaymentStatus(null); // Clear previous status
    setShowQr(false); // Hide QR if UPI ID is being used

    console.log("Initiating UPI ID payment for:", upiId, deliveryDetails);

    // Simulate a payment API call to a backend
    try {
      // In a real application, this would be a fetch call to your backend
    

      // For simulation:
      setTimeout(() => {
        const success = Math.random() > 0.5; // 50% chance of success
        setPaymentProcessing(false); // Stop processing
        if (success) {
          setPaymentStatus('success');
          console.log("Simulated UPI ID Payment successful!");
        } else {
          setPaymentStatus('failed');
          console.log("Simulated UPI ID Payment failed!");
        }
      }, 3000); // Simulate 3-second payment processing
    } catch (error) {
      console.error("Error initiating UPI ID payment:", error);
      setPaymentProcessing(false);
      setPaymentStatus('failed');
    }
  };

  // Function to simulate Credit/Debit Card & Net Banking payment
  const handleProceedWithCard = async () => {
    setPaymentProcessing(true); // Start processing indicator
    setPaymentStatus(null); // Clear previous status

    console.log("Initiating Card/Net Banking payment for:", deliveryDetails);

    try {
      // In a real application, this would be a fetch call to your backend
     

      setTimeout(() => {
        const success = Math.random() > 0.5; // 50% chance of success
        setPaymentProcessing(false); // Stop processing
        if (success) {
          setPaymentStatus('success');
          console.log("Simulated Card Payment successful!");
        } else {
          setPaymentStatus('failed');
          console.log("Simulated Card Payment failed!");
        }
      }, 3000); // Simulate 3-second payment processing
    } catch (error) {
      console.error("Error initiating Card payment:", error);
      setPaymentProcessing(false);
      setPaymentStatus('failed');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-4 relative max-h-[98vh] overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={onBackToForm}
          className="flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        <h1 className="text-xl font-bold text-gray-800">THE HEIGHT VEDA</h1>
        <div></div> {/* Placeholder for alignment */}
      </div>

      {/* Offer banner */}
      <div className="bg-green-100 p-2 text-center rounded-md mb-6">
        <p className="text-green-800 font-semibold text-sm">68% OFF* OFFER ONLY FOR TODAY ON ONLINE PAYMENT</p>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Order summary (1 Item)</h2>
          <div className="flex items-center">
            <span className="text-gray-500 line-through mr-2">₹1899.00</span>
            <span className="text-lg font-bold text-green-700">₹1499.00</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Delivery Details */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">Delivery details</h2>
          <button onClick={onBackToForm} className="text-blue-600 text-sm hover:underline">Change</button>
        </div>
        <p className="text-gray-700 font-medium">
          {deliveryDetails.firstName} {deliveryDetails.lastName}
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full ml-2">
            {deliveryDetails.addressType}
          </span>
        </p>
        <p className="text-gray-600 text-sm mt-1">
          {deliveryDetails.address}, {deliveryDetails.area}, {deliveryDetails.landmark ? `${deliveryDetails.landmark}, ` : ''}
          {deliveryDetails.city}, {deliveryDetails.state}, {deliveryDetails.pincode}
        </p>
        <p className="text-gray-600 text-sm">{deliveryDetails.email}</p>
        <p className="text-gray-600 text-sm mt-2">Standard delivery: Wednesday, Jun 04</p> {/* Static date for now */}
        <p className="text-green-700 text-sm font-medium">Free shipping for you</p>
      </div>

      {/* Pay via section */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Pay via</h2>

        {/* UPI Payment */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => setActivePaymentMethod(activePaymentMethod === 'upi' ? null : 'upi')}
          >
            <div className="flex items-center">
              {/* UPI Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 12m-2.592 3C14.08 15.598 13.11 16 12 16m-12 0v2a3 3 0 003 3h18a3 3 0 003-3v-2"
                />
              </svg>
              <span className="text-gray-800 font-medium">UPI payment</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 line-through mr-2">₹1899.00</span>
              <span className="text-green-700 font-bold mr-2">₹1499.00</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-400 transform transition-transform ${activePaymentMethod === 'upi' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* "Save ₹400" text with icon, always visible under the header */}
          <p className="text-green-700 text-sm font-medium mb-2 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Save ₹400
          </p>

          {activePaymentMethod === 'upi' && (
            <div className="mt-4">
              <p className="text-gray-600 text-sm mb-4">Scan the QR code & pay via any UPI app</p>

              {/* QR Code and Payment Status */}
              <div className="text-center">
                {paymentProcessing ? (
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <p className="text-gray-700">Processing payment...</p>
                  </div>
                ) : (
                  <>
                    {paymentStatus === 'success' && (
                      <div className="text-green-600 font-semibold text-lg py-4">
                        Payment Successful! 🎉
                      </div>
                    )}
                    {paymentStatus === 'failed' && (
                      <div className="text-red-600 font-semibold text-lg py-4">
                        Payment Failed. Please try again. 😔
                      </div>
                    )}
                    {paymentStatus === null && (
                      <>
                        <img
                          src="https://placehold.co/150x150/E0F2F1/000?text=Scan+QR" // Placeholder QR code
                          alt="QR Code"
                          className="mx-auto my-4 border border-gray-300 rounded-md"
                        />
                        <button
                          onClick={handleShowQr}
                          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out font-semibold text-sm"
                        >
                          Show QR
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>

              <div className="text-center my-4 text-gray-500">OR</div>

              {/* Enter UPI ID */}
              <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type="text"
                  name="upiId"
                  placeholder="Example@okhdicbank"
                  value={upiId}
                  onChange={handleUpiIdChange}
                  className={`flex-1 p-2.5 outline-none rounded-l-md text-sm ${upiIdError ? 'border-red-500' : ''}`}
                />
                <button
                  onClick={handleUpiIdSubmit}
                  className="bg-blue-600 text-white py-2.5 px-4 rounded-r-md hover:bg-blue-700 transition duration-200 ease-in-out font-semibold text-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!upiId.trim() || paymentProcessing}
                >
                  Verify & Pay
                </button>
              </div>
              {upiIdError && <p className="text-red-500 text-xs mt-1">{upiIdError}</p>}
            </div>
          )}
        </div>

        {/* Credit/Debit Card & Net Banking */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => setActivePaymentMethod(activePaymentMethod === 'card' ? null : 'card')}
          >
            <div className="flex items-center">
              {/* Card Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-gray-800 font-medium">Credit/Debit Card & Net Banking</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 line-through mr-2">₹1899.00</span>
              <span className="text-green-700 font-bold mr-2">₹1499.00</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-400 transform transition-transform ${activePaymentMethod === 'card' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          {/* "Save ₹400" text with icon */}
          <p className="text-green-700 text-sm font-medium mt-2 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Save ₹400
          </p>
          {activePaymentMethod === 'card' && (
            <div className="mt-4 text-center">
              {paymentProcessing ? (
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                  <p className="text-gray-700">Processing payment...</p>
                </div>
              ) : (
                <>
                  {paymentStatus === 'success' && (
                    <div className="text-green-600 font-semibold text-lg py-4">
                      Payment Successful! 🎉
                    </div>
                  )}
                  {paymentStatus === 'failed' && (
                    <div className="text-red-600 font-semibold text-lg py-4">
                      Payment Failed. Please try again. 😔
                    </div>
                  )}
                  {paymentStatus === null && (
                    <>
                      <p className="text-gray-600 text-sm">Credit/Debit Card & Net Banking options will be available here.</p>
                      {/* Placeholder for card details form */}
                      <button
                        onClick={handleProceedWithCard}
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition duration-200 ease-in-out"
                      >
                        Proceed with Card
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Wallets */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => setActivePaymentMethod(activePaymentMethod === 'wallets' ? null : 'wallets')}
          >
            <div className="flex items-center">
              {/* Wallet Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4-4m-4 0l-4 4" />
              </svg>
              <span className="text-gray-800 font-medium">Wallets</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 line-through mr-2">₹1899.00</span>
              <span className="text-green-700 font-bold mr-2">₹1499.00</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-400 transform transition-transform ${activePaymentMethod === 'wallets' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          {/* "Save ₹400" text with icon */}
          <p className="text-green-700 text-sm font-medium mt-2 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Save ₹400
          </p>
          {activePaymentMethod === 'wallets' && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">Wallet options will be available here.</p>
              {/* Placeholder for wallet selection */}
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm">Proceed with Wallet</button>
            </div>
          )}
        </div>

        {/* Net Banking */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => setActivePaymentMethod(activePaymentMethod === 'netbanking' ? null : 'netbanking')}
          >
            <div className="flex items-center">
              {/* Bank Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span className="text-gray-800 font-medium">Net Banking</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 line-through mr-2">₹1899.00</span>
              <span className="text-green-700 font-bold mr-2">₹1499.00</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-400 transform transition-transform ${activePaymentMethod === 'netbanking' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          {/* "Save ₹400" text with icon */}
          <p className="text-green-700 text-sm font-medium mt-2 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Save ₹400
          </p>
          {activePaymentMethod === 'netbanking' && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">Net Banking options will be available here.</p>
              {/* Placeholder for net banking selection */}
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm">Proceed with Net Banking</button>
            </div>
          )}
        </div>

        {/* Cash on Delivery (COD) - Placeholder */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => setActivePaymentMethod(activePaymentMethod === 'cod' ? null : 'cod')}
          >
            <div className="flex items-center">
              {/* COD Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-gray-800 font-medium">Cash on Delivery (COD)</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 line-through mr-2">₹1899.00</span>
              <span className="text-green-700 font-bold mr-2">₹1499.00</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-400 transform transition-transform ${activePaymentMethod === 'cod' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          {/* "Save ₹400" text with icon */}
          <p className="text-green-700 text-sm font-medium mt-2 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Save ₹400
          </p>
          {activePaymentMethod === 'cod' && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">You can pay with cash upon delivery.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm">Place COD Order</button>
            </div>
          )}
        </div>
      </div>

      {/* Phone Number Section at the bottom */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded-full p-2">
              {/* Phone Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <span className="font-bold text-gray-800 text-lg">+91 90098 23347</span>
          </div>
          {/* Edit Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-3.109 8.243a2 2 0 01.488-.088l5.316-5.316-2.828-2.828-5.316 5.316a2 2 0 01-.088.488l-.07.351a2 2 0 01.351.07l.488-.088z" />
          </svg>
        </div>
      </div>

      {/* Footer links and powered by info - Now outside the main payment card */}
      <div className="text-xs text-gray-500 mt-4 text-center">
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
          <a href="/terms-and-conditions" className="underline cursor-pointer hover:text-blue-600">T&C</a>
          <span>|</span>
          <a href="/privacy-policy" className="underline cursor-pointer hover:text-blue-600">Privacy Policy</a>
          <span>|</span>
          <span>73ab8c54</span> {/* Unique identifier */}
          <span>|</span>
          <span>Powered By <strong>Shiprocket</strong></span>
        </div>
      </div>

      {/* Loader CSS (Keep it in style tag as it's custom animation, not Tailwind utility) */}
      <style>{`
        .loader {
          border-top-color: #3498db;
          -webkit-animation: spinner 1.5s linear infinite;
          animation: spinner 1.5s linear infinite;
        }

        @-webkit-keyframes spinner {
          0% { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spinner {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Paymentform component - Your original component with minor fixes
const Paymentform = ({ onClose }) => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(true); // Changed to true to open PaymentOptionsPage directly
  const [formData, setFormData] = useState({
    pincode: '452001', // Pre-filled for direct access to PaymentOptionsPage
    firstName: 'Vinod',
    lastName: 'Makwana',
    address: '201, vijynagar',
    area: 'saiyaji squre',
    landmark: 'Near AB Road',
    city: 'Indore',
    state: 'Madhya Pradesh',
    email: 'vinodmakwana9009@gmail.com',
    addressType: 'Home',
    phone: '9009823347' // Updated phone number
  });
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validPincodes = {
    '452001': { city: 'Indore', state: 'Madhya Pradesh' },
    '110001': { city: 'New Delhi', state: 'Delhi' },
    '400001': { city: 'Mumbai', state: 'Maharashtra' },
    '560001': { city: 'Bengaluru', state: 'Karnataka' },
    '700001': { city: 'Kolkata', state: 'West Bengal' },
  };

  const validateField = (name, value) => {
    let error = '';
    const trimmedValue = value.trim();

    switch (name) {
      case 'pincode':
        if (trimmedValue.length === 0) {
          error = 'Enter your pincode';
        } else if (!/^\d+$/.test(trimmedValue)) {
          error = 'Pincode must contain only digits';
        } else if (trimmedValue.length !== 6) {
          error = 'Pincode must consist of 6 digits';
        } else if (!validPincodes[trimmedValue]) {
          error = 'Service not available for this pincode';
        }
        break;
      case 'firstName':
      case 'lastName':
      case 'address':
      case 'area':
      case 'city':
      case 'state':
        if (trimmedValue === '') {
          error = `Please enter your ${name.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
        }
        break;
      case 'phone':
        if (trimmedValue.length === 0) {
          error = 'Please enter your phone number';
        } else if (!/^\d{10}$/.test(trimmedValue)) {
          error = 'Phone number must be exactly 10 digits and contain only numbers';
        }
        break;
      case 'email':
        if (trimmedValue !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
          error = 'Please enter a valid email address';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'pincode') {
      const error = validateField(name, value);
      setFormErrors(prev => ({ ...prev, [name]: error }));
      if (value.length === 6 && validPincodes[value]) {
        setFormData(prev => ({
          ...prev,
          city: validPincodes[value].city,
          state: validPincodes[value].state
        }));
        setFormErrors(prev => ({ ...prev, city: '', state: '' }));
      } else if (value.length === 6 && !validPincodes[value]) {
         // Keep the error for invalid pincode
      } else {
        setFormData(prev => ({ ...prev, city: '', state: '' }));
      }
    } else {
      const error = validateField(name, value);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    const fieldsToValidate = ['pincode', 'firstName', 'lastName', 'address', 'area', 'city', 'state', 'phone'];
    if (formData.email.trim() !== '') {
        fieldsToValidate.push('email');
    }

    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const isSubmitDisabled = () => {
    const requiredFields = ['pincode', 'firstName', 'lastName', 'address', 'area', 'city', 'state', 'phone'];
    const hasEmptyFields = requiredFields.some(field => formData[field].trim() === '');
    const hasErrors = Object.values(formErrors).some(error => error !== '');

    return hasEmptyFields || hasErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValidationStatus = validateForm();

    if (currentValidationStatus) {
      setShowPaymentOptions(true);
    } else {
      console.log('Form has errors. Please correct them before proceeding.');
    }
  };

  const handleExitClick = () => {
    setShowExitConfirmation(true);
  };

  const handleConfirmExit = () => {
    setShowExitConfirmation(false);
    onClose();
  };

  const handleCancelExit = () => {
    setShowExitConfirmation(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      {!showPaymentOptions ? (
        // Form content (This part will not be shown initially due to showPaymentOptions = true)
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-4 relative max-h-[98vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={handleExitClick}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold p-2"
            aria-label="Close form"
          >
            ✕
          </button>
          
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Enter Delivery Details</h2>

          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Pincode input field */}
            <div>
              <input
                type="text"
                name="pincode"
                placeholder="Pincode*"
                value={formData.pincode}
                onChange={handleChange}
                className={`w-full p-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 ${formErrors.pincode ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                required
                maxLength="6"
              />
              {formErrors.pincode && <p className="text-red-500 text-xs mt-1">{formErrors.pincode}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <input type="text" name="firstName" placeholder="First name*" value={formData.firstName} onChange={handleChange} className={`w-full p-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 ${formErrors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`} required />
                {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
              </div>
              <div>
                <input type="text" name="lastName" placeholder="Last name*" value={formData.lastName} onChange={handleChange} className={`w-full p-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 ${formErrors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`} required />
                {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
              </div>
            </div>
            <div>
              <input type="text" name="address" placeholder="Flat, house number, floor, building*" value={formData.address} onChange={handleChange} className={`w-full p-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 ${formErrors.address ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`} required />
                {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
            </div>
            <div>
              <input type="text" name="area" placeholder="Area, street, sector, village*" value={formData.area} onChange={handleChange} className={`w-full p-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 ${formErrors.area ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`} required />
              {formErrors.area && <p className="text-red-500 text-xs mt-1">{formErrors.area}</p>}
            </div>
            <input type="text" name="landmark" placeholder="Landmark (optional)" value={formData.landmark} onChange={handleChange} className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <input type="text" name="city" placeholder="City*" value={formData.city} onChange={handleChange} className={`w-full p-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 ${formErrors.city ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`} required readOnly={!!validPincodes[formData.pincode]} />
                {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
              </div>
              <div>
                <input type="text" name="state" placeholder="State*" value={formData.state} onChange={handleChange} className={`w-full p-2.5 border rounded-md text-sm focus:outline-none focus:ring-2 ${formErrors.state ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`} required readOnly={!!validPincodes[formData.pincode]} />
                {formErrors.state && <p className="text-red-500 text-xs mt-1">{formErrors.state}</p>}
              </div>
            </div>
            <input type="email" name="email" placeholder="E-mail (optional)" value={formData.email} onChange={handleChange} className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
            {/* Address type radio buttons */}
            <div>
              <p className="text-xs font-medium text-gray-700 mb-1">Address type</p>
              <div className="flex gap-3">
                {['Home', 'Office', 'Others'].map((type) => (
                  <label key={type} className="flex items-center text-gray-700 text-sm">
                    <input
                      type="radio"
                      name="addressType"
                      value={type}
                      checked={formData.addressType === type}
                      onChange={handleChange}
                      className="mr-1.5 h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
 
            {/* Phone number input with country code */}
            <div>
              <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <span className="px-2.5 text-gray-500 border-r border-gray-300 text-sm">+91</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`flex-1 p-2.5 outline-none rounded-r-md text-sm ${formErrors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                  required
                  maxLength="10"
                />
              </div>
              {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out font-semibold text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isSubmitDisabled()}
            >
              Add Address & Proceed
            </button>
          </form>
          
          {/* Footer links and powered by info */}
          <div className="text-xs text-gray-500 mt-4 text-center">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
              <a href="/terms-and-conditions" className="underline cursor-pointer hover:text-blue-600">T&C</a>
              <span>|</span>
              <a href="/privacy-policy" className="underline cursor-pointer hover:text-blue-600">Privacy Policy</a>
              <span>|</span>
              <span>73ab8c54</span> {/* Updated unique ID */}
              <span>|</span>
              <span>Powered By <strong>Shiprocket</strong></span>
            </div>
          </div>
        </div>
      ) : (
        <PaymentOptionsPage
          deliveryDetails={formData}
          onBackToForm={() => setShowPaymentOptions(false)}
        />
      )}

      {showExitConfirmation && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 text-center relative">
            <button
              onClick={handleCancelExit}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold p-2"
              aria-label="Close confirmation dialog"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Are You Sure You Want To Exit?</h3>
            <div className="space-y-4">
              <button
                onClick={handleConfirmExit}
                className="w-full bg-white border border-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                Yes, exit checkout
              </button>
              <button
                onClick={handleCancelExit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 ease-in-out"
              >
                No, continue checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paymentform;
