import Image from "next/image"
import { Award, Users, Clock, Heart, GraduationCap, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services with compassion and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Founder</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <Image
                  src="/sir.jpeg"
                  alt="Dr. Sourav Chakraborty - Founder"
                  width={200}
                  height={200}
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Dr. Sourav Chakraborty</h4>
                <p className="text-green-600 font-semibold mb-4">Founder & Chief Medical Officer</p>

                {/* Qualifications */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="text-blue-600 mr-2" size={16} />
                    <h5 className="font-semibold text-gray-700">Qualifications:</h5>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 ml-6">
                    <li>• BDS from Rajiv Gandhi University, Karnataka, India</li>
                    <li>• MD(EMS) from Oasis Institute under BSS, Pune</li>
                    <li>• Certificate in Implantology under I.C.O.I (USA)</li>
                    <li>• B.OPTOMETRY (Vision Science and Optics)</li>
                  </ul>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Briefcase className="text-purple-600 mr-2" size={16} />
                    <h5 className="font-semibold text-gray-700">Experience:</h5>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 ml-6">
                    <li>• 13+ years in comprehensive healthcare</li>
                    <li>• 8 years as Consultant at Smile and Profile Pvt Ltd</li>
                    <li>• Specialist in Dental, Optometry & General Medicine</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <Award className="text-green-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-800">5+ Years of Excellence</h4>
              </div>
              <p className="text-gray-700">
                Serving the Barasat community with unwavering commitment to quality healthcare and patient satisfaction.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-800">1000+ Happy Patients</h4>
              </div>
              <p className="text-gray-700">
                Our multispecialty approach has helped countless patients achieve better health and improved quality of
                life.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <Clock className="text-purple-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-800">13+ Years Experience</h4>
              </div>
              <p className="text-gray-700">
                Dr. Chakraborty brings extensive experience in eye care, dental treatment, and general medicine to
                provide comprehensive healthcare solutions.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center mb-4">
                <Heart className="text-red-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-800">Compassionate Care</h4>
              </div>
              <p className="text-gray-700">
                We believe in treating every patient with empathy, respect, and personalized attention to ensure the
                best possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
