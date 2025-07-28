"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Image
                src="/logo.png"
                alt="Kronos Health Care Foundation Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="text-white">
                <h1 className="text-lg font-bold">Kronos Health Care</h1>
                <p className="text-xs opacity-90">Foundation</p>
              </div>
            </Link>

            {/* Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 relative z-[60]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible z-[55]" : "opacity-0 invisible z-[-1]"
        }`}
        onClick={closeMenu}
      >
        <div className="flex items-center justify-center min-h-screen pt-20 pb-8">
          <nav className="text-center max-w-md w-full px-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col space-y-6">
              <Link
                href="/#home"
                className="text-xl md:text-2xl text-gray-100 hover:text-green-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-xl md:text-2xl text-gray-100 hover:text-green-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                href="/#why-choose-us"
                className="text-xl md:text-2xl text-gray-100 hover:text-green-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Why Choose Us
              </Link>

              {/* Services Section */}
              <div className="text-white py-2">
                <p className="text-xl md:text-2xl font-semibold mb-4 text-green-400">Services</p>
                <div className="space-y-3">
                  <Link
                    href="/services/eyes"
                    className="block text-lg md:text-xl text-white hover:text-green-300 transition-colors py-1"
                    onClick={closeMenu}
                  >
                    👁️ Eye Care
                  </Link>
                  <Link
                    href="/services/dental"
                    className="block text-lg md:text-xl text-white hover:text-green-300 transition-colors py-1"
                    onClick={closeMenu}
                  >
                    🦷 Dental Services
                  </Link>
                  <Link
                    href="/services/general"
                    className="block text-lg md:text-xl text-white hover:text-green-300 transition-colors py-1"
                    onClick={closeMenu}
                  >
                    🩺 General Physician
                  </Link>
                </div>
              </div>

              <Link
                href="/#testimonials"
                className="text-xl md:text-2xl text-gray-100 hover:text-green-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
              <Link
                href="/#contact"
                className="text-xl md:text-2xl text-gray-100 hover:text-green-400 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Contact Us
              </Link>

              {/* Quick Action Buttons */}
              <div className="pt-6 space-y-3">
                <Button
                  className="w-full max-w-xs bg-green-600 hover:bg-green-700 text-white py-3 text-base md:text-lg font-medium"
                  onClick={() => {
                    window.open("https://wa.me/919330747369", "_blank")
                    closeMenu()
                  }}
                >
                  📱 Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="w-full max-w-xs border-white text-white hover:bg-white hover:text-gray-900 py-3 text-base md:text-lg font-medium bg-transparent"
                  onClick={() => {
                    window.open("tel:+919330747369", "_blank")
                    closeMenu()
                  }}
                >
                  📞 Call Now
                </Button>
              </div>

              {/* Contact Info */}
              <div className="pt-4 text-gray-300 text-sm space-y-1">
                <p>📞 +91 93307 47369</p>
                <p>📧 infokronoshealthcare@gmail.com</p>
                <p>📍 Barasat, North 24 Parganas</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
