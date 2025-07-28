import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingScreen } from "@/components/loading-screen"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackToTopButton } from "@/components/back-to-top-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kronos Health Care Foundation - Best Polyclinic in Barasat | Eye Care, Dental & General Medicine",
  description:
    "Kronos Health Care Foundation - Leading multispecialty polyclinic in Barasat offering comprehensive eye care, dental treatment, and general physician services. 5+ years of trusted healthcare with Dr. Sourav Chakraborty.",
  keywords:
    "polyclinic Barasat, eye care Barasat, dental clinic Barasat, general physician Barasat, multispecialty clinic, eye treatment, dental treatment, healthcare Barasat, Dr Sourav Chakraborty, optometry, dentist near me",
  authors: [{ name: "Kronos Health Care Foundation" }],
  creator: "Kronos Health Care Foundation",
  publisher: "Kronos Health Care Foundation",
  robots: "index, follow",
  openGraph: {
    title: "Kronos Health Care Foundation - Best Polyclinic in Barasat",
    description:
      "Leading multispecialty polyclinic offering eye care, dental treatment, and general physician services in Barasat.",
    url: "https://kronoshealthcare.in",
    siteName: "Kronos Health Care Foundation",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kronos Health Care Foundation - Best Polyclinic in Barasat",
    description: "Leading multispecialty polyclinic offering comprehensive healthcare services in Barasat.",
  },
  alternates: {
    canonical: "https://kronoshealthcare.in",
  },
    generator: 'Sumalya Chatterjee'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Barasat" />
        <meta name="geo.position" content="22.7196;88.4815" />
        <meta name="ICBM" content="22.7196, 88.4815" />
      </head>
      <body className={inter.className}>
        <LoadingScreen />
        {children}
        <WhatsAppButton />
        <BackToTopButton />
      </body>
    </html>
  )
}
