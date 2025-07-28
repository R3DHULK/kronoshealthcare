import { Star, Quote } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      service: "Eye Care",
      rating: 5,
      text: "Dr. Chakraborty provided excellent eye care for my vision problems. The clinic is very clean and the staff is professional. Highly recommended!",
      location: "Barasat",
    },
    {
      name: "Rajesh Kumar",
      service: "Dental Treatment",
      rating: 5,
      text: "Amazing dental service! Got my root canal done here and the experience was painless. The doctor explained everything clearly and the treatment was affordable.",
      location: "Barasat",
    },
    {
      name: "Anita Das",
      service: "General Checkup",
      rating: 5,
      text: "Very satisfied with the general health checkup. Dr. Chakraborty is very knowledgeable and caring. The clinic maintains high hygiene standards.",
      location: "Barasat",
    },
    {
      name: "Suresh Ghosh",
      service: "Eye Care",
      rating: 5,
      text: "Excellent optometry services. Got my glasses prescription updated and the vision is crystal clear now. Great service at reasonable prices.",
      location: "Barasat",
    },
    {
      name: "Meera Banerjee",
      service: "Dental Care",
      rating: 5,
      text: "Outstanding dental care! The teeth cleaning was thorough and the doctor gave great advice on oral hygiene. Will definitely come back.",
      location: "Barasat",
    },
    {
      name: "Amit Roy",
      service: "General Medicine",
      rating: 5,
      text: "Dr. Chakraborty treated my chronic condition with great care. The follow-up service is excellent and the staff is very supportive.",
      location: "Barasat",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Voices of Trust and Healing</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our satisfied patients about their experience with Kronos Health Care Foundation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Quote className="text-green-500 mr-2" size={20} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-green-600">{testimonial.service}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card p-8">
          <h3 className="text-2xl font-bold gradient-text mb-4">Join Our Happy Patients</h3>
          <p className="text-gray-700 mb-6">
            Experience the same quality care and personalized attention that our patients love.
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="text-center">
              <div className="text-green-600">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-sm">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-sm">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-purple-600">
                <AnimatedCounter end={13} suffix="+" />
              </div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
