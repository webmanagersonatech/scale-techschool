
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import PackageSection from "../components/package"
import TechnologyProgramsCarousel from "../components/TechnologyProgramsCarousel"
import PlacedCompanies from "../components/PlacedCompanies"
import SEO from "../components/SEO"
import PerformanceOutcomes from "../components/PerformanceOutcomes"
import PresenceSection from "../components/PresenceSection"
import ContactSection from "../components/ContactSection"
import PromoStrip from "../components/PromoStrip"
import { SITE_NAME, SITE_URL } from "../lib/seo"

export default function Home() {
  return (
    <>
      <SEO
        title="Industry-Ready Diploma & Certification Programmes"
        description="SCALE Tech School (Sona Centre for Advanced Learning & Entrepreneurship) offers industry-aligned diploma and certification programmes in AI, Data Science, Software Engineering, Cybersecurity, Business and more — built for career-ready graduates."
        url={SITE_URL}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/images/company-logo/SCALE-png.png`,
        }}
      />
      <Navbar />
      <Hero />
      <PromoStrip />
      <PackageSection />
      <TechnologyProgramsCarousel />
      <PlacedCompanies />
      <PerformanceOutcomes />
      <PresenceSection />
      <ContactSection />
      <Footer />
    </>
  )
}
