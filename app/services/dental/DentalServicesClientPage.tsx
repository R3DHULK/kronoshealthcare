"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Smile, Calendar, Phone, CheckCircle, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WriteReviewSection } from "@/components/write-review-section"

export default function DentalServicesClientPage() {
  const services = [
    {
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with advanced cosmetic dental procedures for enhanced aesthetics and confidence.",
      features: [
        "Teeth Whitening and Bleaching",
        "Dental Veneers and Laminates",
        "Smile Makeover Planning",
        "Tooth Bonding and Contouring",
        "Gum Contouring and Reshaping",
      ],
      image: "/images/dental/teethwhitening.webp",
      imageAlt: "Before and after teeth whitening treatment showing dramatic improvement in tooth color",
    },
    {
      title: "Implantology",
      description:
        "Advanced dental implant solutions for missing teeth with expertise from I.C.O.I (USA) certification.",
      features: [
        "Single Tooth Implants",
        "Multiple Teeth Implants",
        "Full Mouth Rehabilitation",
        "Implant-Supported Dentures",
        "Bone Grafting Procedures",
      ],
      image: "/images/dental/implantology.webp",
      imageAlt: "Dental implant model showing implant placement in jaw bone structure",
    },
    {
      title: "Orthodontics",
      description: "Comprehensive teeth straightening and bite correction treatments for all ages.",
      features: [
        "Traditional Metal Braces",
        "Ceramic and Clear Braces",
        "Invisible Aligners",
        "Pediatric Orthodontics",
        "Adult Orthodontic Treatment",
      ],
      image: "/images/dental/orthodontics.webp",
      imageAlt: "Close-up of orthodontic braces being adjusted with dental instruments",
    },
    {
      title: "General Dentistry",
      description: "Essential dental care services for maintaining optimal oral health and preventing dental problems.",
      features: [
        "Routine Dental Checkups",
        "Professional Teeth Cleaning",
        "Dental Fillings and Restorations",
        "Fluoride Treatments",
        "Oral Health Education",
      ],
      image: "/images/dental/general-dentistry.webp",
      imageAlt: "Cross-section dental model showing tooth anatomy and dental treatment procedures",
    },
    {
      title: "Oral & Maxillofacial Surgery",
      description: "Specialized surgical procedures for complex dental and facial conditions.",
      features: [
        "Wisdom Tooth Extraction",
        "Complex Tooth Extractions",
        "Jaw Surgery and Correction",
        "Facial Trauma Treatment",
        "Oral Pathology Management",
      ],
      image: "/images/dental/oralsurgery.webp",
      imageAlt: "Patient receiving oral surgery treatment in a professional clinical setting",
    },
    {
      title: "Prosthodontics",
      description: "Restoration and replacement of missing or damaged teeth with custom prosthetic solutions.",
      features: [
        "Complete and Partial Dentures",
        "Dental Crowns and Bridges",
        "Fixed and Removable Prosthetics",
        "Denture Repair and Adjustment",
        "Precision Attachment Prosthetics",
      ],
      image: "/images/dental/Prosthodontics.webp",
      imageAlt: "Dental professional demonstrating prosthetic dentures and dental restoration options",
    },
    {
      title: "Endodontics",
      description: "Specialized root canal treatments and procedures to save infected or damaged teeth.",
      features: [
        "Root Canal Treatment",
        "Endodontic Retreatment",
        "Pulp Therapy",
        "Apicoectomy Procedures",
        "Dental Trauma Management",
      ],
      image: "/images/dental/general-dentistry.webp",
      imageAlt: "Detailed view of root canal procedure and endodontic treatment",
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care designed specifically for infants, children, and adolescents.",
      features: [
        "Children's Dental Checkups",
        "Preventive Dental Care",
        "Pediatric Dental Fillings",
        "Fluoride Applications",
        "Dental Sealants for Kids",
      ],
      image: "/images/dental/Pediatric.webp",
      imageAlt: "Friendly dental professional interacting with a young child patient in a welcoming environment",
    },
    {
      title: "Periodontics",
      description: "Comprehensive treatment of gum diseases and maintenance of healthy gums and supporting structures.",
      features: [
        "Gum Disease Treatment",
        "Deep Cleaning (Scaling & Root Planing)",
        "Gum Surgery Procedures",
        "Periodontal Maintenance",
        "Gum Recession Treatment",
      ],
      image: "/images/dental/Periodontics.webp",
      imageAlt: "Periodontal cleaning procedure showing plaque removal and gum treatment",
    },
    {
      title: "Laser Dentistry",
      description: "Advanced laser technology for precise, comfortable, and minimally invasive dental treatments.",
      features: [
        "Laser Gum Treatment",
        "Laser Cavity Detection",
        "Soft Tissue Laser Surgery",
        "Laser Teeth Whitening",
        "Pain-Free Laser Procedures",
      ],
      image: "/images/dental/LaserDentistry.webp",
      imageAlt: "Patient receiving advanced laser dental treatment with modern laser technology",
    },
    {
      title: "TMJ Treatment",
      description: "Specialized treatment for temporomandibular joint disorders and jaw-related problems.",
      features: [
        "TMJ Disorder Diagnosis",
        "Jaw Pain Treatment",
        "Bite Adjustment Therapy",
        "Custom Night Guards",
        "TMJ Physical Therapy",
      ],
      image: "/images/dental/tmjtreatment.webp",
      imageAlt: "Happy patient showing successful results after TMJ treatment",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Smile className="text-green-600" size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Comprehensive Dental Services</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Advanced dental care and oral health services by Dr. Sourav Chakraborty with BDS qualification, MD(EMS),
              and specialized certification in Implantology from I.C.O.I (USA). Complete dental solutions from
              preventive care to complex surgical procedures with 13+ years of expertise.
            </p>
          </div>

          {/* Services Section - Now First */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Professional dental service images */}
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
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book Appointment Button for each service */}
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 mt-4"
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Dental Care?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Most Affordable Dental Care</h3>
                    <p className="text-gray-600 text-sm">
                      Quality dental treatment at the most competitive prices in Barasat
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Advanced Technology</h3>
                    <p className="text-gray-600 text-sm">Laser dentistry and modern dental equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Care</h3>
                    <p className="text-gray-600 text-sm">Complete dental solutions from preventive to surgical care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Painless Treatment</h3>
                    <p className="text-gray-600 text-sm">Comfortable and pain-free dental procedures</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 max-w-full overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Dental Appointment</h2>
              <p className="text-gray-700 mb-6">
                Maintain your oral health with regular dental checkups and professional treatments. Our comprehensive
                dental services ensure your smile stays healthy and beautiful.
              </p>
              <div className="space-y-4">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  onClick={() =>
                    window.open("https://wa.me/919330747369?text=I would like to book a dental appointment", "_blank")
                  }
                >
                  <Calendar className="mr-2" size={20} />
                  Book Dental Appointment via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 py-3 bg-transparent"
                  onClick={() => window.open("tel:+919330747369", "_blank")}
                >
                  <Phone className="mr-2" size={20} />
                  Call for Appointment
                </Button>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Clinic Hours</h3>
                <p className="text-green-700 text-sm">
                  Daily: 11:00 AM - 7:00 PM
                  <br />
                  Emergency dental care available by appointment
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center glass-card p-8 max-w-full overflow-hidden">
            <h3 className="text-2xl font-bold gradient-text mb-4">Complete Dental Care Solutions</h3>
            <p className="text-gray-700 mb-6">
              From routine cleanings to complex surgical procedures, we provide comprehensive dental care services with
              advanced technology and expert medical attention for all your oral health needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Users className="text-green-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Expert Dentist</h4>
                <p className="text-sm text-gray-600">BDS, MD(EMS), I.C.O.I certified</p>
              </div>
              <div>
                <Award className="text-blue-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Advanced Technology</h4>
                <p className="text-sm text-gray-600">Laser dentistry and modern equipment</p>
              </div>
              <div>
                <CheckCircle className="text-purple-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Complete Care</h4>
                <p className="text-sm text-gray-600">All dental specialties under one roof</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
