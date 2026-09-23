import Link from "next/link"
import { motion } from "framer-motion"
import {
  Youtube,
  Instagram,
  Linkedin,
  X,
  Twitter,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react"
import { courses } from "../data/courses"

// Mirrors the main navbar so Quick Links always stay in sync with it
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "All Courses", href: "/courses" },
  { name: "Admissions", href: "/admissions" },
  { name: "Blog", href: "/blog" },
  { name: "Teams", href: "/faculty" },
  { name: "Contact", href: "/contact" },
]

// Distinct course categories, linked to the filterable /courses page
const categories = Array.from(
  new Set(courses.map((c) => c.category).filter(Boolean))
) as string[]

export default function Footer() {
  return (
    <footer className="bg-royal text-white pt-16 font-poppins">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/20 pb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/company-logo/SCALE.webp"
                alt="Sona Tech-School Logo"
                className="w-16 object-contain"
              />
              <h2 className="text-xl font-poppins font-semibold">Sona Tech-School</h2>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Empowering future leaders with world-class education,
              innovation, and excellence.
            </p>

         
<div className="flex gap-4 mb-4">
  {[
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/company/scale-sona-centre-for-advanced-learning-entrepreneurship/",
    },
    {
      Icon: X,
      url: "https://x.com/scale_blr",
    },
    {
      Icon: Instagram,
      url: "https://www.instagram.com/scale_blr",
    },
    {
      Icon: Youtube,
      url: "https://youtube.com/@scale-blr",
    },
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


          {/* Quick Links — ChevronRight, same style as Course Categories */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-white/80 hover:text-gold transition"
                  >
                    <ChevronRight
                      size={16}
                      className="shrink-0 text-gold/80 group-hover:text-gold group-hover:translate-x-0.5 transition-transform"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Course Categories — same clean style as Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Course Categories</h3>
            <ul className="space-y-3 text-sm">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/courses?category=${encodeURIComponent(cat)}`}
                    className="group flex items-center gap-2.5 text-white/80 hover:text-gold transition"
                  >
                    <ChevronRight
                      size={16}
                      className="shrink-0 text-gold/80 group-hover:text-gold group-hover:translate-x-0.5 transition-transform"
                    />
                    <span className="leading-snug">{cat}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="group flex items-center gap-2.5 text-gold font-semibold hover:underline transition"
                >
                  <ChevronRight
                    size={16}
                    className="shrink-0 group-hover:translate-x-0.5 transition-transform"
                  />
                  <span>View All Courses</span>
                </Link>
              </li>
            </ul>
          </div>


          {/* Connect With Us */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>

            <ul className="text-sm text-white/80 space-y-3 flex flex-col">
              <li>
                <a
                  href="https://maps.google.com/?q=Sona+Towers,+71+Millers+Road,+Vasanth+Nagar,+Bengaluru+–+560052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-gold transition"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold/80" />
                  <span>
                    Sona Towers, 71 Millers Road, Vasanth Nagar,
                    Bengaluru – 560052, Karnataka, India.
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@scaleindia.in"
                  className="flex items-center gap-2.5 hover:text-gold transition"
                >
                  <Mail size={16} className="shrink-0 text-gold/80" />
                  contact@scaleindia.in
                </a>
              </li>

              <li>
                <a
                  href="tel:+919442592175"
                  className="flex items-center gap-2.5 hover:text-gold transition"
                >
                  <Phone size={16} className="shrink-0 text-gold/80" />
                  +91 94425 92175
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/919442592175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-gold transition"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-gold/80">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12.004 2C6.486 2 2.01 6.477 2.01 12c0 1.887.517 3.653 1.417 5.166L2 22l4.958-1.397A9.94 9.94 0 0012.004 22C17.522 22 22 17.523 22 12S17.522 2 12.004 2zm0 18.09a8.06 8.06 0 01-4.32-1.24l-.31-.185-3.246.915.874-3.19-.202-.325a8.08 8.08 0 01-1.244-4.256c0-4.466 3.633-8.098 8.098-8.098 4.464 0 8.096 3.632 8.096 8.098 0 4.465-3.632 8.281-8.096 8.281z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Sona Tech-School. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gold transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}