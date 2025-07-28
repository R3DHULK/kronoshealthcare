"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Eye, Calendar, Phone, CheckCircle, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WriteReviewSection } from "@/components/write-review-section"

export default function EyeServicesClientPage() {
  const services = [
    {
      title: "Vision Correction & Spectacles",
      description: "Comprehensive vision correction solutions with advanced spectacle types and enhancements.",
      features: [
        "Spectacle Types and Advancement",
        "Tint and UV Protector Lenses",
        "Progressive and Bifocal Lenses",
        "Computer Vision Glasses",
        "Sports and Safety Eyewear",
      ],
      image: "/images/eye/vision-correction-spectacles.jpg",
      imageAlt: "Modern eyeglasses being held up showing clear vision correction",
    },
    {
      title: "Contact Lens Services",
      description: "Professional contact lens fitting and management for all vision needs.",
      features: [
        "Contact Lens Consultation",
        "Soft and Hard Contact Lenses",
        "Specialty Contact Lenses",
        "Contact Lens Care Training",
        "Follow-up and Maintenance",
      ],
      image: "/images/eye/contact-lens.webp",
      imageAlt: "Close-up of a human eye showing detailed iris structure for contact lens fitting",
    },
    {
      title: "Vision Disorders Management",
      description: "Specialized treatment for various vision disorders and refractive errors.",
      features: [
        "Hypermetropia Management",
        "Astigmatism Management",
        "Anisometropia Management",
        "Myopia Control Programs",
        "Low Vision Management",
      ],
      image: "/images/eye/vision-disorder.jpeg",
      imageAlt: "Child undergoing vision disorder assessment with specialized testing equipment",
    },
    {
      title: "Pediatric Eye Care",
      description: "Comprehensive eye care services specifically designed for children and adolescents.",
      features: [
        "Pediatric Glasses with Therapy",
        "Vision Development Treatment",
        "School Vision Screening",
        "Lazy Eye (Amblyopia) Treatment",
        "Children's Eye Health Education",
      ],
      image: "/images/eye/pediatric-eye-care.jpg",
      imageAlt: "Child having comprehensive eye examination with phoropter testing device",
    },
    {
      title: "Advanced Eye Disease Treatment",
      description: "Specialized care for serious eye conditions requiring expert medical attention.",
      features: [
        "Glaucoma Management",
        "Retinopathy Management",
        "Dry Eye Management",
        "Cataract Consultation",
        "Diabetic Eye Care",
      ],
      image: "/images/eye/advanced-eye-disease-treatment.webp",
      imageAlt: "Patient receiving advanced laser eye treatment with modern medical equipment",
    },
    {
      title: "Comprehensive Eye Testing",
      description: "State-of-the-art computerized eye testing for accurate diagnosis and treatment planning.",
      features: [
        "Comprehensive Computerised Eye Test",
        "Digital Retinal Photography",
        "Visual Field Testing",
        "Corneal Topography",
        "Optical Coherence Tomography (OCT)",
      ],
      image: "/images/eye/comprehensive-eye-testing.jpg",
      imageAlt: "Patient undergoing comprehensive eye examination with slit lamp biomicroscope",
    },
    {
      title: "Surgical Services & Hospital Attachment",
      description: "Complete surgical eye care services with hospital facilities for complex procedures.",
      features: [
        "All Types of Eye Surgery",
        "Hospital Attachment Available",
        "Pre and Post-Surgical Care",
        "Emergency Eye Surgery",
        "Surgical Consultation",
      ],
      image: "/images/eye/surgical-services.jpg",
      imageAlt: "Modern operating room with surgical team performing advanced eye surgery",
    },
    {
      title: "Professional Eye Care Team",
      description: "Expert optometrists and ophthalmologists available for comprehensive eye care.",
      features: [
        "Optometrist Available",
        "Ophthalmologist by Appointment",
        "Specialist Consultations",
        "Emergency Eye Care",
        "Follow-up Care Programs",
      ],
      image: "/images/eye/professional-team.webp",
      imageAlt: "Professional medical team in surgical attire demonstrating expert eye care",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Eye className="text-blue-600" size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Comprehensive Eye Care Services</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Advanced eye care and vision services by Dr. Sourav Chakraborty with B.OPTOMETRY qualification and 13+
              years of experience in vision science and optics. Complete eye care solutions from basic vision correction
              to advanced surgical procedures.
            </p>
          </div>

          {/* Services Section - Now First */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 max-w-full overflow-hidden"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Professional eye care service images */}
                <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.imageAlt}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book Appointment Button for each service */}
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-4"
                  onClick={() =>
                    window.open(
                      `https://wa.me/919330747369?text=I would like to book an appointment for ${service.title}`,
                      "_blank",
                    )
                  }
                >
                  <Calendar className="mr-2" size={16} />
                  Book Appointment
                </Button>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Write Review Section */}
          <WriteReviewSection />

          {/* Why Choose Us and Booking Section - Now After Services and Testimonials */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 mt-16">
            <div className="glass-card p-8 max-w-full overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Eye Care?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Most Affordable Eye Care</h3>
                    <p className="text-gray-600 text-sm">Quality eye care at the most competitive prices in Barasat</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Equipment</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive computerized eye testing and modern diagnostic tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Complete Eye Care</h3>
                    <p className="text-gray-600 text-sm">From routine checkups to complex surgical procedures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Hospital Attachment</h3>
                    <p className="text-gray-600 text-sm">Surgical facilities and emergency care available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 max-w-full overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Eye Examination</h2>
              <p className="text-gray-700 mb-6">
                Regular eye examinations are crucial for maintaining good vision and detecting eye problems early. Our
                comprehensive computerized eye testing ensures accurate diagnosis and treatment.
              </p>
              <div className="space-y-4">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/919330747369?text=I would like to book an eye examination appointment",
                      "_blank",
                    )
                  }
                >
                  <Calendar className="mr-2" size={20} />
                  Book Eye Exam via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3 bg-transparent"
                  onClick={() => window.open("tel:+919330747369", "_blank")}
                >
                  <Phone className="mr-2" size={20} />
                  Call for Appointment
                </Button>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Clinic Hours</h3>
                <p className="text-blue-700 text-sm">
                  Daily: 11:00 AM - 7:00 PM
                  <br />
                  Emergency consultations available by appointment
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center glass-card p-8 max-w-full overflow-hidden">
            <h3 className="text-2xl font-bold gradient-text mb-4">Complete Eye Care Solutions</h3>
            <p className="text-gray-700 mb-6">
              From basic vision correction to advanced surgical procedures, we provide comprehensive eye care services
              with the latest technology and expert medical attention.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="text-blue-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Expert Team</h4>
                <p className="text-sm text-gray-600">Qualified optometrist and ophthalmologist</p>
              </div>
              <div>
                <Award className="text-green-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Advanced Technology</h4>
                <p className="text-sm text-gray-600">Computerized testing and modern equipment</p>
              </div>
              <div>
                <CheckCircle className="text-purple-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Complete Care</h4>
                <p className="text-sm text-gray-600">From consultation to surgery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
