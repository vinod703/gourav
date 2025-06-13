// FaqPage.jsx
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "Does Height Veda really work?",
    answer:
      "Yes, Height Veda is scientifically formulated, and many users have seen positive results. It works from within and promotes natural growth.",
  },
  {
    question: "Does it contain chemicals?",
    answer:
      "Height Veda is formulated with natural ingredients that are carefully selected to support height growth. Our formula prioritizes safety and effectiveness without harmful chemicals.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Results vary from person to person. Most users start noticing changes within 2-3 months of consistent use. For optimal results, we recommend using Height Veda for at least 6 months.",
  },
  {
    question: "Is it suitable for all age groups?",
    answer:
      "Height Veda works best for individuals between 12-25 years, during active growth phases. However, adults up to 30 years may also see benefits with consistent use.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Height Veda is made with natural ingredients and is generally well-tolerated. No significant side effects have been reported when used as directed.",
  },
  {
    question: "Does Height Veda only increase height?",
    answer:
      "While Height Veda primarily focuses on height growth, many users report additional benefits like improved posture, stronger bones, and better overall health.",
  },
  {
    question: "Are there fake products in the market?",
    answer:
      "Yes, due to Height Veda's popularity, counterfeit products exist. Always purchase from our official website or authorized retailers to ensure you receive the genuine product.",
  },
]

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([])

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">FAQs</h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-lg text-gray-800">{faq.question}</span>
              {openIndexes.includes(index) ? (
                <ChevronUp className="h-6 w-6 text-blue-600 transition-transform duration-300 transform rotate-0" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-500 transition-transform duration-300 transform rotate-180" />
              )}
            </button>
            <div className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${openIndexes.includes(index) ? 'max-h-screen p-4 pt-0 border-t border-gray-200' : 'max-h-0'}
            `}>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}