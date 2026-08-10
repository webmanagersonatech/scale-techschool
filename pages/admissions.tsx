import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

const pathwaySteps = [
  {
    tier: "ICP",
    name: "Industry Certificate Programme",
    hrs: "15 hrs",
    desc: "Weekend · Offline. Learn the fundamentals — the entry point into any technology or management track.",
  },
  {
    tier: "IDP",
    name: "Industry Diploma Programme",
    hrs: "30 hrs",
    desc: "3+ industry projects. Learn, apply and build on top of your certificate.",
  },
  {
    tier: "AIDP",
    name: "Advanced Industry Diploma",
    hrs: "60 hrs",
    desc: "20 weekend sessions, live instructor-led. Specialise, lead and deliver — the advanced credential.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-white">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-emerald-600 font-semibold text-sm mb-4">
            Enroll Now · 2026–27
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal leading-tight">
            Begin where you are.
            <span className="block text-emerald-600">Go as far as you choose.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-7xl mx-auto">
            From Certificate to Advanced Diploma — one continuous pathway, built with global
            industry leaders to prepare day-one-ready professionals for Global Capability Centres
            and the modern enterprise.
          </p>
        </section>

        {/* Pathway */}
        <section className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {pathwaySteps.map((s, i) => (
              <div key={i} className="relative bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <span className="inline-block text-xs font-bold tracking-wide bg-royal text-white px-3 py-1 rounded-full mb-4">
                  {s.tier}
                </span>
                <h3 className="font-semibold text-royal text-lg">{s.name}</h3>
                <p className="text-emerald-600 text-sm font-medium mt-1 mb-3">{s.hrs}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                {i < pathwaySteps.length - 1 && (
                  <span className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-gray-300 text-2xl">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Postgraduate Certificate Programmes run 150 contact hours over 6 months (50 × 3-hour
            weekend-executive sessions) for professionals stepping into FinTech, Cybersecurity,
            Blockchain and Data Science.
          </p>
        </section>

        {/* How to apply */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-heading font-bold text-royal mb-8 text-center">
            How to Apply
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Choose your Programme", desc: "Browse the full portfolio across Computer Science, Mechanical & Mechatronics, Electronics, and Management & Analytics streams." },
              { step: "02", title: "Enquire", desc: "Reach out to our operations team at Sona Towers, Millers Road, and we'll walk you through eligibility, format and fees." },
              { step: "03", title: "Enroll & Begin", desc: "Start at Certificate level and progress continuously through Diploma and Advanced Diploma at your own pace." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-royal text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-royal mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enquire CTA */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-royal text-white rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Enquire Here</h2>
            <p className="text-white/80 mb-6">(+91) 094425 92141</p>
            <p className="text-white/70 text-sm mb-8">
              Sona Towers, Millers Road, Bengaluru · SCALE Campus, Bidadi
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-gold text-royal font-semibold hover:bg-yellow-400 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
