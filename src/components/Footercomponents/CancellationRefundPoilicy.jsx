import React from 'react'

const CancellationRefundPoilicy = () => {
  return (
<div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col">
      {/* Header Section */}
      <header className="bg-green-800 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-semibold rounded-md">Cancellation Refund Policy</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 bg-white shadow-lg rounded-lg my-8 max-w-4xl">
        {/* Cancellation & Refund Policy Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">Cancellation & Refund Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Thank you for shopping with Height Veda. We value your satisfaction and want to ensure a positive experience with our products. Please read our refund policy carefully before purchasing from our website.
          </p>
        </section>

        {/* Refund Eligibility Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">Refund Eligibility</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer a 15-day 100% refund policy on all eligible products purchased from Height Veda. To be eligible for a refund, the following conditions must be met:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>The product must be purchased directly from our website <a href="http://www.heightveda.com" className="text-gray-700 hover:text-gray-900 rounded-md">www.heightveda.com</a></li>
            <li>The product must be in its original, unused, and unopened condition.</li>
            <li>You must initiate a refund request within 15 days from the date of purchase.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed italic rounded-md">
            Please note that the partial payment is non-refundable.
          </p>
        </section>

        {/* How to Request a Refund Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">How to Request a Refund</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To request a refund, please follow these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
            <li>Visit our Contact Us page.</li>
            <li>Fill out the contact form with the following information:
              <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                <li>Your full name</li>
                <li>Order number</li>
                <li>Email address associated with your order</li>
                <li>Reason for the refund request</li>
                <li>Any additional relevant information</li>
              </ul>
            </li>
            <li>Click "Submit" to send your request to our customer support team.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed rounded-md">
            In the case of a refund for a prepaid order, the customer will be responsible for taxes and shipping charges.
          </p>
        </section>

        {/* Refund Process Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">Refund Process</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once we receive your refund request, our customer support team will review it within 1-2 business days. If your request is approved, we will send you an email notification confirming your refund.
          </p>
          <p className="text-gray-700 leading-relaxed rounded-md">
            The refund will be processed using the same payment method you used for the original purchase. Please allow 5-7 business days for the refund to reflect in your account, although the exact timing may vary depending on your payment provider.
          </p>
        </section>

        {/* Return will be initiated within 2 to 3 days Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">Return will be initiated within 2 to 3 days</h2>
          <p className="text-gray-700 leading-relaxed rounded-md">
            Once your refund is confirmed, one of our courier partners will pick the parcel from your doorsteps within 2-3 business days.
          </p>
        </section>

        {/* Shipping Costs Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">Shipping Costs</h2>
          <p className="text-gray-700 leading-relaxed rounded-md">
            Shipping costs for returning products for a refund are the responsibility of the customer. We recommend using a trackable shipping service to ensure the safe return of your product.
          </p>
        </section>

        {/* Cancellation Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">Cancellation</h2>
          <p className="text-gray-700 leading-relaxed rounded-md">
            To cancel your order, please contact us within 60 minutes of placing your order.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed rounded-md">
            If you have any questions or concerns about our refund policy or need assistance with the refund process, please visit our <a href="#" className="text-gray-700 hover:text-gray-900 rounded-md">Contact Us Page</a>. Our customer support team is available to assist you.
          </p>
        </section>

        {/* Changes to this Refund Policy Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 rounded-md">Changes to this Refund Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4 rounded-md">
            Height Veda reserves the right to update or modify this refund policy at any time without prior notice. Any changes made will be effective immediately upon posting on our website.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 rounded-md">
            By purchasing from Height Veda, you acknowledge and agree to abide by the terms and conditions of this refund policy.
          </p>
          <p className="text-gray-700 leading-relaxed rounded-md">
            If you have any further questions or require clarification, please do not hesitate to contact us through our <a href="#" className="text-gray-700 hover:text-gray-900 rounded-md">Contact Us page</a>.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold mt-6 rounded-md">
            Thank you for choosing Height Veda.
          </p>
        </section>
      </main>
    </div>  )
}

export default CancellationRefundPoilicy