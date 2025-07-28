"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Facebook, Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md py-12 px-4 mt-20 border-t border-gray-700/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="Kronos Health Care Foundation" width={40} height={40} />
              <div className="text-gray-100">
                <h3 className="font-bold">Kronos Health Care</h3>
                <p className="text-xs opacity-90">Foundation</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Your trusted healthcare partner in Barasat, providing comprehensive medical services with compassion and
              expertise for over 5 years.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mb-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-100 hover:text-blue-400 hover:bg-white/10"
                onClick={() => window.open("https://facebook.com/kronoshealthcare", "_blank")}
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-100 hover:text-pink-400 hover:bg-white/10"
                onClick={() => window.open("https://instagram.com/kronoshealthcare", "_blank")}
              >
                <Instagram size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-100 hover:text-red-400 hover:bg-white/10"
                onClick={() => window.open("https://youtube.com/kronoshealthcare", "_blank")}
              >
                <Youtube size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-100 hover:text-green-400 hover:bg-white/10"
                onClick={() => window.open("mailto:infokronoshealthcare@gmail.com", "_blank")}
              >
                <Mail size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="#home" className="block text-gray-300 hover:text-gray-100 transition-colors">
                Home
              </Link>
              <Link href="#about" className="block text-gray-300 hover:text-gray-100 transition-colors">
                About Us
              </Link>
              <Link href="#services" className="block text-gray-300 hover:text-gray-100 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-gray-100 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm">
              <Link href="/services/eyes" className="block text-gray-300 hover:text-gray-100 transition-colors">
                Eye Care
              </Link>
              <Link href="/services/dental" className="block text-gray-300 hover:text-gray-100 transition-colors">
                Dental Services
              </Link>
              <Link href="/services/general" className="block text-gray-300 hover:text-gray-100 transition-colors">
                General Physician
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📞 +91 93307 47369</p>
              <p>📧 infokronoshealthcare@gmail.com</p>
              <p>📍 Barasat, North 24 Parganas</p>
              <p>🌐 kronoshealthcare.in</p>
            </div>

            {/* WhatsApp Contact */}
            <div className="mt-4">
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open("https://wa.me/919330747369", "_blank")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">© {currentYear} Kronos Health Care Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
