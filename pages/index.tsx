
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"
import PackageSection from "../components/package"
import TechnologyProgramsCarousel from "../components/TechnologyProgramsCarousel"
import PlacedCompanies from "../components/PlacedCompanies"
import AdvisorBot from "../components/AdvisorBot"
import SEO from "../components/SEO"
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
      <PackageSection />
      <TechnologyProgramsCarousel />
      <PlacedCompanies />
      <Testimonials />
 
      <AdvisorBot/>
      <Footer />
    </>
  )
}
