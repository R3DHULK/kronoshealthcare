"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get in touch with us for appointments, inquiries, or emergency services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    City Nights, 40C-Jessore Road
                    <br />
                    Dakbanglow More, Barasat
                    <br />
                    Kolkata - 700124, West Bengal
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 93307 47369</p>
                  <p className="text-sm text-gray-500">Available for appointments & inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">infokronoshealthcare@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Operating Hours</h4>
                  <div className="text-gray-600 text-sm">
                    <p className="font-medium text-green-600">Daily: 11:00 AM - 7:00 PM</p>
                    <p className="text-gray-500 mt-1">Open all days of the week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>

            <div className="space-y-4 mb-8">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                onClick={() => window.open("https://wa.me/919330747369", "_blank")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
                Book Appointment via WhatsApp
              </Button>

              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3 bg-transparent"
                onClick={() => window.open("tel:+919330747369", "_blank")}
              >
                <Phone className="mr-2" size={20} />
                Call for Appointment
              </Button>

              <Button
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-3 bg-transparent"
                onClick={() => window.open("mailto:infokronoshealthcare@gmail.com", "_blank")}
              >
                <Mail className="mr-2" size={20} />
                Send Email Inquiry
              </Button>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us on Social Media</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  onClick={() => window.open("https://facebook.com/kronoshealthcare", "_blank")}
                >
                  <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-600 text-pink-600 hover:bg-pink-50 bg-transparent"
                  onClick={() => window.open("https://instagram.com/kronoshealthcare", "_blank")}
                >
                  <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent col-span-2"
                  onClick={() => window.open("https://youtube.com/kronoshealthcare", "_blank")}
                >
                  <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube Channel
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center glass-card p-8 hover-lift">
          <h3 className="text-2xl font-bold gradient-text mb-4">Visit Our Clinic</h3>
          <p className="text-gray-700 mb-4">
            Located at City Nights, Dakbanglow More, Barasat - easily accessible and convenient for all patients.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Daily Hours:</strong> 11:00 AM - 7:00 PM | <strong>Contact:</strong> +91 93307 47369
          </p>
        </div>
      </div>
    </section>
  )
}
