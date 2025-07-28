import { Shield, Heart, DollarSign, Award, Clock, Users } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Lifetime Service",
      description: "Committed to providing continuous care and support throughout your healthcare journey.",
    },
    {
      icon: <Shield className="text-green-500" size={32} />,
      title: "Hygienic Environment",
      description: "Maintaining the highest standards of cleanliness and sterilization for patient safety.",
    },
    {
      icon: <Award className="text-blue-500" size={32} />,
      title: "Advanced Treatment",
      description: "All advance dental treatment and eye care including therapy, investigation and management.",
    },
    {
      icon: <DollarSign className="text-yellow-500" size={32} />,
      title: "Affordable Prices",
      description: "Quality healthcare services at competitive and transparent pricing for all patients.",
    },
    {
      icon: <Clock className="text-purple-500" size={32} />,
      title: "Flexible Timings",
      description: "Convenient appointment slots to accommodate your busy schedule and urgent needs.",
    },
    {
      icon: <Users className="text-indigo-500" size={32} />,
      title: "Expert Team",
      description: "Experienced medical professionals dedicated to providing personalized care and treatment.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover what makes Kronos Health Care Foundation the preferred choice for healthcare in Barasat
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Our Promise to You</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="p-4">
              <h4 className="font-semibold text-green-600 mb-2">🏥 Lifetime Service</h4>
              <p>Continuous care and support for all your healthcare needs</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-600 mb-2">🧼 Hygienic Standards</h4>
              <p>Maintaining the highest levels of cleanliness and safety</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-purple-600 mb-2">💰 Affordable Prices</h4>
              <p>Quality healthcare that doesn't break your budget</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
