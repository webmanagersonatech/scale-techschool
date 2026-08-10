
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react"
import { courses } from "../data/courses"

// Mirrors the main navbar so Quick Links always stay in sync with it
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "All Courses", href: "/courses" },
  { name: "Admissions", href: "/admissions" },
  { name: "Teams", href: "/faculty" },
  { name: "Contact", href: "/contact" },
]

// Distinct course categories, linked to the filterable /courses page
const categories = Array.from(
  new Set(courses.map((c) => c.category).filter(Boolean))
) as string[]

export default function Footer() {
  return (
    <footer className="bg-royal text-white pt-16 font-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/company-logo/SCALE.webp"
                alt="Sona Tech-School Logo"
                className="w-16 object-contain"
              />
              <h2 className="text-2xl font-heading">Sona Tech-School</h2>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Empowering future leaders with world-class education,
              innovation, and excellence.
            </p>
    <div className="flex gap-4 mb-4">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/sonamanagement" },
                { Icon: Instagram, url: "https://www.instagram.com/sona_mba/?hl=en" },
                { Icon: Linkedin, url: "https://www.linkedin.com/school/sona-school-of-management/" },
                { Icon: Twitter, url: "https://x.com/sonamba" },
              ].map(({ Icon, url }, i) => (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-gold text-white hover:text-royal transition"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
           
          </div>


          {/* Quick Links — kept in sync with the navbar */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Categories — link straight into the filtered courses page */}
          <div>
            <h3 className="font-semibold mb-4">Course Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/courses?category=${encodeURIComponent(cat)}`}
                    className="text-white/80 hover:text-gold transition"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="text-gold font-semibold hover:underline transition"
                >
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>


          {/* Social / Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>

        



            <p className="text-sm text-white/80 space-y-2 flex flex-col">
              <span className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  #43/1A, Billekempanahalli village, Bidadi Hobli,
                  Ramanagara – 562109, Karnataka, India.
                </span>
              </span>

              <span className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                contact@scaleindia.in
              </span>

              <span className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                +91 94425 92175
              </span>
            </p>



          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Sona Tech-School. All rights reserved.</p>

          {/* <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#privacy" className="hover:text-gold transition">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-gold transition">
              Terms & Conditions
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
