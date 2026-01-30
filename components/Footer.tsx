
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react"

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
                src="https://pgdm.scaleindia.in/images/about/logo.webp"
                alt="Sona Tech-School Logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-2xl font-heading">Sona Tech-School</h2>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Empowering future leaders with world-class education,
              innovation, and excellence.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#courses"
                  className="text-white/80 hover:text-gold transition"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-gold transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-4">MBA Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://pgdm.scaleindia.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold transition"
                >
                  PGDM – Bangalore Campus
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.sonabusinessschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold transition"
                >
                  MBA – Salem Campus
                </Link>
              </li>


            </ul>
          </div>


          {/* Social / Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>

            <div className="flex gap-4 mb-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-gold text-white hover:text-royal transition"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>


            <p className="text-sm text-white/80 space-y-1 flex flex-col">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Bangalore, Karnataka
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} /> info@sonatechschool.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} /> +91 98765 43210
              </span>
            </p>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Sona Tech-School. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gold transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
