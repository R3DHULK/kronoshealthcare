"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WriteReviewSection } from "@/components/write-review-section"
import { Stethoscope, Calendar, Phone, CheckCircle, Users, Award, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GeneralServicesClientPage() {
  const services = [
    {
      title: "General Health Checkups",
      description: "Comprehensive health assessments and routine medical examinations for all age groups.",
      features: [
        "Complete Physical Exam",
        "Vital Signs Monitoring",
        "Health Risk Assessment",
        "Preventive Care Counseling",
        "Medical History Review",
      ],
      image: "/images/general/generalhealthcheckup.webp",
      imageAlt: "Doctor taking patient's blood pressure during comprehensive health checkup",
    },
    {
      title: "Acute Care Services",
      description: "Treatment for common illnesses, infections, and acute medical conditions.",
      features: [
        "Fever & Cold Treatment",
        "Respiratory Infections",
        "Digestive Issues",
        "Skin Conditions",
        "Minor Injury Treatment",
      ],
      image: "/images/general/acutecareservices.jpg",
      imageAlt: "Medical consultation for acute care treatment",
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing care and management of chronic health conditions and diseases.",
      features: [
        "Diabetes Management",
        "Hypertension Control",
        "Heart Disease Care",
        "Arthritis Treatment",
        "Thyroid Disorder Management",
      ],
      image: "/images/general/chronicdisease.jpg",
      imageAlt: "Doctor monitoring chronic disease management",
    },
    {
      title: "Preventive Healthcare",
      description: "Vaccination services, health screenings, and lifestyle counseling for disease prevention.",
      features: [
        "Vaccination Services",
        "Health Screenings",
        "Lifestyle Counseling",
        "Nutrition Guidance",
        "Exercise Recommendations",
      ],
      image: "/images/general/preventivehealthcare.jpg",
      imageAlt: "Preventive healthcare consultation and vaccination services",
    },
    {
      title: "Blood Test and Blood Culture",
      description: "Comprehensive blood testing and culture services for accurate diagnosis and health monitoring.",
      features: [
        "Complete Blood Count (CBC)",
        "Blood Sugar Testing",
        "Lipid Profile Testing",
        "Blood Culture for Infections",
        "Liver & Kidney Function Tests",
      ],
      image: "/images/general/bloodtest.jpg",
      imageAlt: "Blood test and laboratory services for medical diagnosis",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      <section className="pt-24 pb-16 px-4 overflow-x-hidden">
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Stethoscope className="text-purple-600" size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">General Physician Services</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive primary healthcare and general medicine services by Dr. Sourav Chakraborty, MBBS with 13+
              years of experience in treating various medical conditions.{" "}
              <span className="font-semibold text-green-600">Most affordable healthcare services in Barasat</span>{" "}
              without compromising on quality.
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

                {/* Professional medical service images */}
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
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book Appointment Button for each service */}
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 mt-4"
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our General Medicine?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Qualified MBBS Doctor</h3>
                    <p className="text-gray-600 text-sm">
                      Dr. Sourav Chakraborty with MBBS degree and 13+ years experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Most Affordable in Barasat</h3>
                    <p className="text-gray-600 text-sm">
                      Quality healthcare at the most competitive prices in the market
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Care</h3>
                    <p className="text-gray-600 text-sm">Complete medical care for all family members</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Personalized Treatment</h3>
                    <p className="text-gray-600 text-sm">Individualized care plans for each patient</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 max-w-full overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Medical Consultation</h2>
              <p className="text-gray-700 mb-6">
                Get expert medical advice and treatment for your health concerns. Schedule your consultation with our
                experienced physician at the most affordable rates in Barasat.
              </p>
              <div className="space-y-4">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                  onClick={() =>
                    window.open("https://wa.me/919330747369?text=I would like to book a medical consultation", "_blank")
                  }
                >
                  <Calendar className="mr-2" size={20} />
                  Book Consultation via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-3 bg-transparent"
                  onClick={() => window.open("tel:+919330747369", "_blank")}
                >
                  <Phone className="mr-2" size={20} />
                  Call for Appointment
                </Button>
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Medical Emergency</h3>
                <p className="text-purple-700 text-sm">
                  For medical emergencies, call us immediately at +91 93307 47369. We provide urgent medical
                  consultation and guidance at affordable rates.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center glass-card p-8 max-w-full overflow-hidden">
            <h3 className="text-2xl font-bold gradient-text mb-4">Complete Medical Care Solutions</h3>
            <p className="text-gray-700 mb-6">
              From routine checkups to complex medical conditions, we provide comprehensive healthcare services with
              expert medical attention at the most affordable prices in Barasat.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="text-purple-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Expert Doctor</h4>
                <p className="text-sm text-gray-600">MBBS qualified with 13+ years experience</p>
              </div>
              <div>
                <DollarSign className="text-green-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Most Affordable</h4>
                <p className="text-sm text-gray-600">Best prices in Barasat market</p>
              </div>
              <div>
                <Award className="text-blue-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Quality Care</h4>
                <p className="text-sm text-gray-600">No compromise on treatment quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
