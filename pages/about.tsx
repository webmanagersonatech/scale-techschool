import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Breadcrumb from "../components/Breadcrumb"
import SEO from "../components/SEO"
import PresenceSection from "../components/PresenceSection"
import PerformanceOutcomes from "../components/PerformanceOutcomes"

const stats = [
  { value: "105", label: "Years of Group Legacy" },
  { value: "3", label: "Depths of Immersion" },
  { value: "4", label: "Programme Tracks" },
  { value: "3", label: "Development Programmes" },
];

const streams = [
  {
    title: "Computer Science & Allied Streams",
    desc: "For B.Tech, BE, MSc, M.Tech & MCA — AI Engineering, Data Science, Python, Enterprise AI and Unreal Engine programmes.",
  },
  {
    title: "Mechanical & Mechatronics & Allied Streams",
    desc: "For B.Tech, BE, MSc, M.Tech — Mechatronics Systems Engineering and SCALEBridge Aero Boot Camps.",
  },
  {
    title: "Electronics, Communication & Allied Streams",
    desc: "For ECE and related programmes — Electronics & Telecommunication Systems Engineering.",
  },
  {
    title: "Management, Analytics & Allied Streams",
    desc: "For business, management & related programmes — Statistics, Excel/VBA, Power BI, Communication, Leadership & Organisational Psychology.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about SCALE — Sona Centre for Advanced Learning & Entrepreneurship — our legacy, programme tracks and approach to industry-ready education."
      />
      <Navbar />
      <main className="pt-32 pb-20 bg-white">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-left mb-8">
            <Breadcrumb items={[{ label: "About" }]} />
          </div>
          <p className="uppercase tracking-widest text-emerald-600 font-semibold text-sm mb-4">
            About SCALE
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal leading-tight">
            A century of industry.
            <span className="block text-emerald-600">Building for what's next.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-7xl mx-auto">
            The Sona Group helped ignite Bengaluru's IT revolution. In the 1980s, the Valliappa
            Software Tech Park — today's Sona Towers on Millers Road — became the home of Texas
            Instruments, the first software MNC in India, soon followed by Oracle, Cisco and
            Verifone, helping shape the city into the Silicon Valley of India.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-7xl mx-auto">
            SCALE carries that legacy forward. An industry-integrated higher-education initiative
            backed by a 105-year heritage, it prepares day-one-ready technology professionals for
            Global Capability Centres and tech enterprises — blending a project-based curriculum,
            global mentorship, and 24/7 access to advanced labs across AI, Quantum Computing,
            Cybersecurity and Green IT.
          </p>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-royal">{s.value}</p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Sona Tech School */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-heading font-bold text-royal mb-4">
            Sona Tech School — Programme
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-7xl">
            The Sona Tech School is the teaching engine of SCALE — translating decades of industry
            partnership into structured learning pathways. Every programme is designed around
            what enterprises actually hire for: practical capability, applied projects, and
            credentials that carry weight from the first day on the job.
          </p>
          <p className="mt-3 italic text-emerald-700 font-medium">
            "Tomorrow's Technology, Today."
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {streams.map((s, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-royal text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>



        {/* Location */}
        <section className="max-w-7xl mx-auto px-6 mt-20 text-center">
          <p className="text-gray-500 text-sm tracking-wide uppercase">
            Sona Towers, Bengaluru &nbsp;·&nbsp; SCALE Campus, Bidadi
          </p>
          <p className="mt-2 text-royal font-semibold">Backed by a 105-Year Legacy</p>
        </section>

        {/* Expanded: About SCALE */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-heading font-bold text-royal mb-4">
            About SCALE
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
            <p>
              SCALE — the Sona Centre for Advanced Learning & Entrepreneurship — was set up to
              close the gap between what colleges teach and what the industry actually needs on
              day one. It sits at the intersection of the Sona Group's century-plus academic
              legacy and a fast-moving industry advisory network, translating both into
              structured, outcome-driven learning tracks.
            </p>
            <p>
              Rather than one-size-fits-all training, SCALE designs programme tracks around
              specific academic streams — Computer Science, Mechanical & Mechatronics,
              Electronics & Communication, and Management & Analytics — so that every learner
              gets a curriculum built for their background and career direction, not a generic
              add-on course.
            </p>
          </div>
        </section>

        {/* Expanded: About Sona Tech School */}
        <section className="max-w-7xl mx-auto px-6 mt-14">
          <h2 className="text-3xl font-heading font-bold text-royal mb-4">
            About Sona Tech School
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
            <p>
              Sona Tech School is SCALE's technology-focused teaching arm, delivering diploma and
              certification programmes in AI, Data Science, Software Engineering, Cybersecurity,
              Electronics and Mechatronics. Programmes combine instructor-led sessions,
              hands-on labs, and a capstone project so learners graduate with a portfolio, not
              just a certificate.
            </p>
            <p>
              Live batches currently run out of Salem and Bengaluru, with mentorship and career
              support built into most programmes — connecting learners to SCALE's placement
              network of hiring partners upon successful completion.
            </p>
          </div>
        </section>
      </main>

      {/* Where We Are + Performance Outcomes (items 10 & 11) */}
      <PresenceSection />
      <PerformanceOutcomes />

      <Footer />
    </>
  )
}
