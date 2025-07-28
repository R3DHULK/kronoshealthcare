import type { Metadata } from "next"
import EyeServicesClientPage from "./EyeServicesClientPage"

export const metadata: Metadata = {
  title: "Eye Care Services - Kronos Health Care Foundation | Best Eye Doctor in Barasat",
  description:
    "Comprehensive eye care services in Barasat. Expert optometry, vision correction, eye disease treatment, and advanced eye care by Dr. Sourav Chakraborty.",
  keywords:
    "eye doctor Barasat, optometry Barasat, vision correction, eye care, glaucoma treatment, eye examination, contact lenses, glasses prescription",
}

export default function EyeServicesPage() {
  return <EyeServicesClientPage />
}
