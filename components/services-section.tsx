"use client"

import { Eye, Smile, Stethoscope, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: <Eye className="text-blue-600" size={48} />,
      title: "Eye Care Services",
      description:
        "Comprehensive eye examinations, vision correction, treatment of eye diseases, and advanced optometry services.",
      features: [
        "Complete Eye Examination",
        "Vision Correction & Glasses",
        "Contact Lens Fitting",
        "Eye Disease Treatment",
        "Pediatric Eye Care",
        "Glaucoma Management",
      ],
      link: "/services/eyes",
      color: "blue",
    },
    {
      icon: <Smile className="text-green-600" size={48} />,
      title: "Dental Services",
      description:
        "Advanced dental treatments including preventive care, restorative procedures, and cosmetic dentistry.",
      features: [
        "Dental Cleaning & Checkups",
        "Tooth Fillings & Crowns",
        "Root Canal Treatment",
        "Teeth Whitening",
        "Dental Implants",
        "Orthodontic Treatment",
      ],
      link: "/services/dental",
      color: "green",
    },
    {
      icon: <Stethoscope className="text-purple-600" size={48} />,
      title: "General Physician",
      description: "Primary healthcare services for common illnesses, health screenings, and preventive medicine.",
      features: [
        "General Health Checkups",
        "Fever & Infection Treatment",
        "Chronic Disease Management",
        "Health Screenings",
        "Vaccination Services",
        "Lifestyle Counseling",
      ],
      link: "/services/general",
      color: "purple",
    },
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive healthcare services under one roof with state-of-the-art facilities and expert care
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-${service.color}-500 mr-3`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={service.link}>
                <Button className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700 text-white`}>
                  Know More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card p-8">
          <h3 className="text-2xl font-bold gradient-text mb-4">More Services Coming Soon!</h3>
          <p className="text-gray-700 mb-6">
            We are continuously expanding our services to better serve the healthcare needs of our community.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
            onClick={() => window.open("https://wa.me/919330747369", "_blank")}
          >
            Book Appointment Today
          </Button>
        </div>
      </div>
    </section>
  )
}
