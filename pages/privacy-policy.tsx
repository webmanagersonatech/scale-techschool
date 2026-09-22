import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Breadcrumb from "../components/Breadcrumb"
import SEO from "../components/SEO"

const lastUpdated = "22 September 2026"

const sections = [
  {
    title: "1. Introduction",
    body: [
      `This Privacy Policy explains how Sona Tech-School / SCALE (Sona Centre for Advanced Learning & Entrepreneurship), operated by the Sona Group ("SCALE", "we", "us" or "our"), collects, uses, discloses and protects the personal information of visitors to our website and prospective, current and past students ("you") who interact with us online or offline.`,
      `By using our website, submitting an enquiry, or enrolling in a programme, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use our website or share your information with us.`,
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      `We may collect the following categories of information:`,
    ],
    list: [
      "Contact details — name, email address, phone number, WhatsApp number and postal address.",
      "Academic information — educational qualifications, institution, stream, year of study and academic records shared during admissions.",
      "Enquiry and application data — course preferences, messages submitted through contact and admissions forms, and any documents you choose to upload.",
      "Payment information — billing details processed for fees or admissions, handled through our payment partners; we do not store full card or bank details on our servers.",
      "Technical data — IP address, browser type, device information, pages visited and time spent, collected automatically through cookies and analytics tools.",
      "Communications — records of calls, emails, WhatsApp messages and chatbot conversations (including via our AdvisorBot) made with our admissions or support teams.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: ["We use the information we collect to:"],
    list: [
      "Respond to enquiries and provide information about our courses and admissions process.",
      "Process applications, enrolments and fee payments.",
      "Send updates about programmes, batches, events, brochures and placement opportunities.",
      "Improve our website, courses and services based on usage patterns and feedback.",
      "Comply with legal, regulatory and accreditation requirements.",
      "Prevent fraud and maintain the security of our systems.",
    ],
  },
  {
    title: "4. Cookies & Tracking Technologies",
    body: [
      `Our website uses cookies and similar tracking technologies to remember your preferences, understand how visitors use our site, and improve your browsing experience. You can control or disable cookies through your browser settings; doing so may affect certain features of the website.`,
    ],
  },
  {
    title: "5. Sharing of Information",
    body: [
      `We do not sell your personal information. We may share your information with:`,
    ],
    list: [
      "Group entities and affiliated institutions within the Sona Group, for admissions coordination and record-keeping.",
      "Service providers who support us with hosting, payment processing, communications (email, SMS, WhatsApp) and analytics, under confidentiality obligations.",
      "Hiring and placement partners, only where you have expressed interest in placement opportunities and consented to sharing your profile.",
      "Regulators, accreditation bodies or government authorities, where required by law.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      `We retain personal information for as long as necessary to fulfil the purposes described in this policy, including admissions processing, academic record-keeping, and legal or regulatory obligations. Enquiry data from individuals who do not proceed with admission may be retained for a reasonable period for follow-up and analytics, after which it is deleted or anonymised.`,
    ],
  },
  {
    title: "7. Data Security",
    body: [
      `We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
    ],
  },
  {
    title: "8. Your Rights",
    body: [`Subject to applicable law, you may:`],
    list: [
      "Request access to the personal information we hold about you.",
      "Request correction of inaccurate or incomplete information.",
      "Request deletion of your information, subject to our legal and record-keeping obligations.",
      "Withdraw consent to receive marketing communications at any time.",
    ],
    footer: "To exercise these rights, please contact us using the details in Section 11 below.",
  },
  {
    title: "9. Third-Party Links",
    body: [
      `Our website may contain links to third-party websites, including social media platforms and payment gateways. We are not responsible for the privacy practices or content of these third-party sites, and we encourage you to review their privacy policies separately.`,
    ],
  },
  {
    title: "10. Children's Privacy",
    body: [
      `Our courses and website are intended for prospective students, generally above the age of 16. Where a prospective student is a minor, we expect information to be submitted with the knowledge and involvement of a parent or guardian.`,
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      `If you have questions about this Privacy Policy or wish to exercise any of your rights, please contact us at:`,
    ],
    contact: true,
  },
  {
    title: "12. Changes to This Policy",
    body: [
      `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational or regulatory reasons. The updated version will be posted on this page with a revised "last updated" date. We encourage you to review this policy periodically.`,
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy for Sona Tech-School (SCALE) — how we collect, use, share and protect your personal information."
      />
      <Navbar />
      <main className="pt-32 pb-20 bg-white">
        <section className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          </div>

          <p className="uppercase tracking-widest text-emerald-600 font-semibold text-sm mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: {lastUpdated}</p>

          <div className="mt-12 space-y-10">
            {sections.map((sec, i) => (
              <div key={i}>
                <h2 className="text-2xl font-heading font-bold text-royal mb-3">
                  {sec.title}
                </h2>
                {sec.body.map((p, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
                {sec.list && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    {sec.list.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )}
                {sec.footer && (
                  <p className="text-gray-600 leading-relaxed mt-3">{sec.footer}</p>
                )}
                {sec.contact && (
                  <div className="mt-4 bg-gray-50 rounded-2xl p-6 text-sm text-gray-600 space-y-2">
                    <p className="font-semibold text-royal">Sona Tech-School (SCALE)</p>
                    <p>#43/1A, Billekempanahalli village, Bidadi Hobli, Ramanagara – 562109, Karnataka, India.</p>
                    <p>Email: contact@scaleindia.in</p>
                    <p>Phone: +91 94425 92175</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
