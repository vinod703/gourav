import React from 'react';

function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-green-800 py-6 shadow-md rounded-b-lg">
        <h1 className="text-white text-3xl font-bold text-center">Shipping Policy</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 md:p-10 lg:p-12 bg-white shadow-lg rounded-lg mt-8 mb-12 max-w-4xl">
        <p className="text-gray-700 mb-6 leading-relaxed">
          At <span className="font-semibold">Height Veda</span>, we strive to ensure a smooth and efficient shipping process for our valued customers. Please review the following information regarding our shipping policies:
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">Products:</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We specialize in herbal products, carefully crafted to bring nature's goodness to you.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">Shipping Carriers:</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We work with trusted shipping carriers including <span className="font-semibold">Delhivery</span> and <span className="font-semibold">Ship Rocket</span> to ensure reliable and timely delivery of your orders.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">Delivery Time:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 pl-4 leading-relaxed">
          <li>
            <span className="font-semibold">Domestic Orders:</span> Estimated delivery time is typically 5 to 7 business days from the date of purchase. Delivery times may vary depending on the destination and shipping method selected.
          </li>
          <li>
            <span className="font-semibold">International Orders:</span> Estimated delivery time is between 15 to 20 business days, depending on your location and local customs regulations.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-green-700 mb-3">Order Processing Time:</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Orders are processed within 24 to 48 hours of receipt. Once your order is confirmed, we work diligently to prepare it for shipment as quickly as possible.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">Shipping Costs:</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We are currently offering <span className="font-semibold">free shipping</span>.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mb-3">Contact Us:</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions or concerns regarding our shipping policies, please don't hesitate to <a href="#" className="text-blue-600 hover:underline font-semibold">contact us</a>. Our customer service team is here to assist you in your shopping experience.
        </p>
      </main>
    </div>
  );
}

export default ShippingPolicy;
