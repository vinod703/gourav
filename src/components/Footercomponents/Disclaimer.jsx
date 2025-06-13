import React from 'react';

function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Header Section */}
      <header className="bg-green-800 py-6 px-4 shadow-md rounded-b-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight leading-tight rounded-md p-2">
            Disclaimer
          </h1>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-xl max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-600 pb-2">
          Height Veda - Disclaimer
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Height Veda is an ayurvedic product made with super herbs to support height and overall body growth.
          However, it is essential to understand the following disclaimers before use.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          This product is recommended for individuals aged between <span className="font-semibold text-green-700">12 to 35 years</span>.
          It is not suitable for children under this age unless specifically advised by a healthcare professional.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Height Veda is a dietary supplement and should not replace medical advice or treatment.
          Consult a doctor or qualified healthcare professional before starting this supplement,
          especially if you have pre-existing medical conditions, are taking medications, or are pregnant.
          Discontinue use if you experience any adverse effects and seek medical assistance immediately.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          The product is designed to support height growth and overall well-being through a combination of herbal ingredients.
          However, individual results may vary based on diet, genetics, lifestyle, exercise habits, and overall health.
          There is no guarantee of specific outcomes, as every individual responds differently to supplements.
          Height Veda is not intended to diagnose, treat, cure, or prevent any disease.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          The information provided on this website is for educational and informational purposes only and should not be taken as medical advice.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          By using this product, you agree to our terms and conditions and acknowledge that you assume full responsibility for its use.
        </p>

        <p className="text-sm text-gray-600 leading-relaxed italic border-t-2 border-green-200 pt-4">
          Height Veda is an Ayurvedic dietary supplement designed to support overall wellness and body development.
          Results may vary from person to person depending on age, diet, exercise, and other lifestyle factors.
          This product is not intended to diagnose, treat, cure, or prevent any disease.
          It is strongly recommended to consult your healthcare provider before starting any new supplement,
          especially if you are under medical supervision, pregnant, or have any underlying health conditions.
        </p>
      </main>
    </div>
  );
}

export default Disclaimer;
