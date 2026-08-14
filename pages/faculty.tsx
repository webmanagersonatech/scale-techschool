import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

const founders = [
  {
    name: "C. Valliappa",
    role: "Chairman",
    photo: "/images/team/c-valliappa.png",
    bio: "Chairman of The Sona Group, is a prominent industrialist in South India with diverse interests spanning textiles, construction, and information technology. He has served as President of both the Industrial and Trade Chambers, including the Greater Mysore Chamber of Commerce and Industry and the Federation of Karnataka Chambers of Commerce & Industry. A pivotal figure in placing India on the global IT map, he facilitated the partnership between Texas Instruments and the Sona Valliappa Group. In recognition of his contributions, he was invited by the White House to explore U.S.-India business opportunities a rare distinction awarded to only one Indian businessman annually.",
  },
  {
    name: "Thyagu Valliappa",
    role: "Founder & Chief Mentor",
    photo: "/images/team/thyagu-valliappa.png",
    bio: "Thyagu Valliappa is a fourth-generation entrepreneur and a transformative leader known for driving innovation across diverse sectors including technology, real estate, textiles, healthcare, logistics, and education. With over four decades of entrepreneurial experience, he has mentored more than 50 startups and played a pivotal role in shaping India's startup and industry ecosystem. As Founder & Chief Mentor of SCALE, he brings unmatched industry insight, a global mindset, and a passion for developing future-ready leaders. His work spans building world-class infrastructure, pioneering sportainment, advancing heritage healthcare, and strengthening industry–academia partnerships. A visionary strategist and thought leader, he continues to inspire change through innovation, sustainability, and purposeful leadership.",
  },
];

const leadershipTeam = [
  {
    name: "Dr. M. Venugopal",
    role: "Vice President — Operations",
    org: "SCALE",
    photo: "/images/team/m-venugopal.png",
  },
  {
    name: "Dr. Sheelan Misra",
    role: "Dean (Marketing Strategy, IR & Industry Collaboration)",
    org: "SCALE",
    photo: "/images/team/sheelan-misra.png",
  },
];

const nonFacultyTeam = [
  { name: "Akhil Narayan", role: "Learning & Development Manager", org: "SCALE", photo: "/images/team/akhil-narayan.png" },
  { name: "Abhinav A Dinesh", role: "Head of Communications", org: "SCALE", photo: "/images/team/abhinav-dinesh.png" },
  { name: "Vaishnav Kiran", role: "Creative Lead", org: "SCALE", photo: "/images/team/vaishnav-kiran.png" },
  { name: "H. J. Chakradhar Reddy", role: "Operations", org: "SCALE", photo: "/images/team/chakradhar-reddy.png" },
];

function FramedPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto h-40 w-40">
      {/* Gold corner brackets */}
      <span className="absolute -top-2 -left-2 h-6 w-6 border-t-4 border-l-4 border-gold" />
      <span className="absolute -top-2 -right-2 h-6 w-6 border-t-4 border-r-4 border-gold" />
      <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-4 border-l-4 border-gold" />
      <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-4 border-r-4 border-gold" />

      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function PersonCard({ name, role, org, photo }: { name: string; role: string; org?: string; photo: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition">
      <FramedPhoto src={photo} alt={name} />
      <h3 className="mt-5 font-semibold text-royal">{name}</h3>
      <p className="text-sm text-emerald-600 mt-1">{role}</p>
      {org && <p className="text-xs text-gray-400 mt-1">{org}</p>}
    </div>
  );
}

export default function FacultyPage() {
  return (
    <>
      <SEO
        title="Faculty & Team"
        description="Meet the faculty and team behind SCALE Tech School's industry-aligned diploma and certification programmes."
      />
      <Navbar />
      <main className="pt-32 pb-20 bg-white">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-left mb-8">
            <Breadcrumb items={[{ label: "Teams" }]} />
          </div>
          <p className="uppercase tracking-widest text-emerald-600 font-semibold text-sm mb-4">
            Our Leadership Team
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal leading-tight">
            Experienced faculty and industry experts
            <span className="block text-emerald-600">guiding the partnership.</span>
          </h1>
        </section>

        {/* Founders */}
        <section className="max-w-7xl mx-auto px-6 mt-16 space-y-12">
          {founders.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col gap-8 sm:items-start ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
            >
              <div className="shrink-0">
                <FramedPhoto src={f.photo} alt={f.name} />
              </div>
              <div>
                <h3 className="font-heading font-bold uppercase text-royal text-2xl">{f.name}</h3>
                <p className="text-royal italic text-sm mb-3">{f.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{f.bio}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-heading font-bold text-royal mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {leadershipTeam.map((p, i) => (
              <PersonCard key={i} {...p} />
            ))}
          </div>
        </section>

        {/* Non-Faculty Team */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-heading font-bold uppercase mb-8 text-center">
            <span className="text-gold">Non Faculty</span>{" "}
            <span className="text-royal">Team</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nonFacultyTeam.map((p, i) => (
              <PersonCard key={i} {...p} />
            ))}
          </div>
        </section>

        {/* Faculty Development Programme callout */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-royal text-white p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Enriching the people who build the future.
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
              Beyond credential-led pathways, the Tech School runs a dedicated{" "}
              <span className="text-gold font-semibold">Faculty Development Programme</span> —
              an NEP-aligned, NIRF-oriented programme strengthening teaching effectiveness,
              research productivity and institutional performance, with hands-on exposure to
              40+ modern AI and digital tools.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}