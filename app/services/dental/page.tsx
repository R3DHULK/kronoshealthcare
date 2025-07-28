import type { Metadata } from "next"
import DentalServicesClientPage from "./DentalServicesClientPage"

export const metadata: Metadata = {
  title: "Dental Services - Kronos Health Care Foundation | Best Dentist in Barasat",
  description:
    "Advanced dental care services in Barasat. Expert dental treatment, oral health care, and cosmetic dentistry by Dr. Sourav Chakraborty.",
  keywords:
    "dentist Barasat, dental clinic Barasat, teeth cleaning, root canal, dental implants, teeth whitening, oral health, dental care",
}

export default function DentalServicesPage() {
  return <DentalServicesClientPage />
}
