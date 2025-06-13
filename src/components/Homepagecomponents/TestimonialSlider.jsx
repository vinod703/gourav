
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Kumar",
    age: "19 years",
    location: "Delhi",
    rating: 5,
    text: "Height Veda ने मेरी हाइट बढ़ाने में बहुत मदद की। मैं इस प्रोडक्ट से बहुत खुश हूं।",
    image: "/testimonials/rahul.jpg"
  },
  {
    name: "Priya Sharma",
    age: "17 years",
    location: "Mumbai",
    rating: 5,
    text: "3 महीने के उपयोग के बाद मुझे अच्छे परिणाम दिखाई दिए। बहुत अच्छा प्रोडक्ट है।",
    image: "/testimonials/priya.jpg"
  },
  {
    name: "Amit Patel",
    age: "21 years",
    location: "Ahmedabad",
    rating: 5,
    text: "Height Veda की वजह से मेरी हाइट में 2 इंच का इजाफा हुआ है। धन्यवाद Height Veda टीम।",
    image: "/testimonials/amit.jpg"
  }
];

const TestimonialSlider = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.age} • {testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
