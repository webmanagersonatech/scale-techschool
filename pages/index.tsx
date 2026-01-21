
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"
import PackageSection from "../components/package"
import TechnologyProgramsCarousel from "../components/TechnologyProgramsCarousel"
import PlacedCompanies from "../components/PlacedCompanies"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PackageSection />
      <TechnologyProgramsCarousel />
      <section className="relative w-full overflow-hidden">
        {/* Fixed Video Wrapper */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/viedo-1.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Testimonials Content */}
        <div className="relative z-10">
          <Testimonials />
        </div>
      </section>

      <PlacedCompanies />
      <Footer />
    </>
  )
}
