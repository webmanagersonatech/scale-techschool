
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"
import PackageSection from "../components/package"
import TechnologyProgramsCarousel from "../components/TechnologyProgramsCarousel"
import PlacedCompanies from "../components/PlacedCompanies"
import AdvisorBot from "../components/AdvisorBot"


export default function Home() {
  return (
    <>
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
