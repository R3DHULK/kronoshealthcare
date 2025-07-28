"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/clinic.jpg"
          alt="Kronos Health Care Foundation Clinic Interior"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-blue-100/40"></div>
      </div>

      {/* 3D Medical Animations around the title - positioned around fixed title */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Around the title area - closer positioning */}
        <div
          className="absolute top-1/2 left-1/4 floating-animation"
          style={{ animationDelay: "0s", transform: "translate(-50%, -50%)" }}
        >
          <div className="text-4xl opacity-30">🩺</div>
        </div>

        <div
          className="absolute top-1/3 right-1/4 floating-animation"
          style={{ animationDelay: "1s", transform: "translate(50%, -50%)" }}
        >
          <div className="text-4xl opacity-25">💊</div>
        </div>

        <div
          className="absolute top-2/3 left-1/3 floating-animation"
          style={{ animationDelay: "2s", transform: "translate(-50%, 50%)" }}
        >
          <div className="text-4xl opacity-30">👁️</div>
        </div>

        <div
          className="absolute top-2/3 right-1/3 floating-animation"
          style={{ animationDelay: "3s", transform: "translate(50%, 50%)" }}
        >
          <div className="text-4xl opacity-25">🦷</div>
        </div>

        <div
          className="absolute top-1/2 left-1/6 floating-animation"
          style={{ animationDelay: "4s", transform: "translate(-50%, -50%)" }}
        >
          <div className="text-3xl opacity-20">💉</div>
        </div>

        <div
          className="absolute top-1/2 right-1/6 floating-animation"
          style={{ animationDelay: "5s", transform: "translate(50%, -50%)" }}
        >
          <div className="text-3xl opacity-25">👓</div>
        </div>

        {/* Additional medical items */}
        <div
          className="absolute top-1/4 left-1/2 floating-animation"
          style={{ animationDelay: "6s", transform: "translate(-50%, -50%)" }}
        >
          <div className="text-3xl opacity-20">🏥</div>
        </div>

        <div
          className="absolute bottom-1/4 left-1/2 floating-animation"
          style={{ animationDelay: "7s", transform: "translate(-50%, 50%)" }}
        >
          <div className="text-3xl opacity-25">⚕️</div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto fade-in">
          {/* Fixed title - no floating animation */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Kronos Health Care Foundation</h1>
          <h2 className="text-xl md:text-2xl text-green-700 mb-2 font-semibold">
            A Unit of Eye & Dental and General Diagnosis
          </h2>
          <h3 className="text-lg md:text-xl text-blue-700 mb-8 font-medium">
            A Unit of Multispeciality Vision & Dental Treatment and General Diagnosis Centre
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Providing comprehensive healthcare services in Barasat for over 5 years. Your trusted partner for eye care,
            dental treatment, and general medical services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg pulse-animation"
              onClick={() => window.open("https://wa.me/919330747369", "_blank")}
            >
              <Phone className="mr-2" size={20} />
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg bg-white/80"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </Button>
          </div>
          <div className="mt-8 text-gray-600">
            <p className="text-sm font-medium">📞 Emergency: +91 93307 47369</p>
            <p className="text-sm font-medium">📧 infokronoshealthcare@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
