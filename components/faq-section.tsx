"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What services does Kronos Health Care Foundation offer?",
      answer:
        "We offer comprehensive eye care, dental services, and general physician consultations. Our services include eye examinations, vision correction, dental treatments, general health checkups, and more.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling us at +91 93307 47369, messaging us on WhatsApp, or emailing us at infokronoshealthcare@gmail.com. We offer flexible timing to accommodate your schedule.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We accept various insurance plans and also offer affordable cash payment options. Please contact us to verify if your insurance is accepted.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 6:00 PM. Emergency services are available 24/7.",
    },
    {
      question: "Is the clinic hygienic and safe?",
      answer:
        "Yes, we maintain the highest standards of hygiene and sterilization. All equipment is properly sanitized, and we follow strict safety protocols to ensure patient safety.",
    },
    {
      question: "What makes Dr. Sourav Chakraborty qualified?",
      answer:
        "Dr. Chakraborty is MBBS qualified with M.Ed. in both Dental and Optometry. He has over 10 years of experience in providing comprehensive healthcare services.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700">Get answers to common questions about our services and clinic</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="text-green-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-green-600 flex-shrink-0" size={20} />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
