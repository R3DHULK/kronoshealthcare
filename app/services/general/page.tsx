import type { Metadata } from "next"
import GeneralServicesClientPage from "./GeneralServicesClientPage"

export const metadata: Metadata = {
  title: "General Physician Services - Kronos Health Care Foundation | Best Doctor in Barasat",
  description:
    "Comprehensive general medicine and primary healthcare services in Barasat. Expert medical consultation and treatment by Dr. Sourav Chakraborty.",
  keywords:
    "general physician Barasat, family doctor, primary healthcare, medical consultation, health checkup, fever treatment, chronic disease management",
}

export default function GeneralServicesPage() {
  return <GeneralServicesClientPage />
}
