import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Breadcrumb from "../components/Breadcrumb"
import SEO from "../components/SEO"

const lastUpdated = "22 September 2026"

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      `These Terms & Conditions ("Terms") govern your access to and use of the Sona Tech-School / SCALE website, and your enrolment in any programme offered by SCALE (Sona Centre for Advanced Learning & Entrepreneurship), operated by the Sona Group ("SCALE", "we", "us" or "our"). By accessing our website, submitting an enquiry or admissions form, or enrolling in a course, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.`,
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      `Our programmes are open to individuals who meet the eligibility criteria published for each course (e.g. current enrolment in B.Tech, BE, MSc, M.Tech, MCA or equivalent streams). We reserve the right to verify eligibility documents and to refuse or cancel admission where criteria are not met or information provided is found to be false or misleading.`,
    ],
  },
  {
    title: "3. Admissions & Enrolment",
    body: [
      `Submitting an enquiry or application form does not guarantee admission. Admission is confirmed only upon completion of the applicable selection process, submission of required documents, and payment of applicable fees. Course batches, schedules, faculty and locations (including Salem and Bengaluru) are subject to change, and we will make reasonable efforts to notify enrolled students of material changes.`,
    ],
  },
  {
    title: "4. Fees & Payments",
    body: [
      `Programme fees, payment schedules and refund conditions are as published at the time of admission or as communicated separately in writing/email. Fees are payable through the payment methods specified by SCALE. We are not responsible for delays or failures caused by third-party payment gateways or banking systems.`,
    ],
  },
  {
    title: "5. Refunds & Cancellations",
    body: [
      `Refund eligibility, if any, is governed by the specific refund policy communicated at the time of admission for the relevant programme. In the absence of a specific written refund policy for a programme, fees already paid are generally non-refundable once a batch has commenced, except where required by applicable law.`,
    ],
  },
  {
    title: "6. Code of Conduct",
    body: [`Students enrolled in SCALE programmes are expected to:`],
    list: [
      "Attend classes, labs and assessments as per the programme schedule.",
      "Engage respectfully with faculty, mentors, staff and fellow students.",
      "Refrain from academic dishonesty, including plagiarism and unauthorised collaboration on assessments.",
      "Comply with campus, lab and facility usage rules, including safety guidelines.",
    ],
    footer:
      "Violation of the code of conduct may result in disciplinary action, including suspension or termination of enrolment, at SCALE's discretion.",
  },
  {
    title: "7. Placement Assistance",
    body: [
      `Where a programme includes placement assistance or connection to SCALE's hiring partner network, this is provided on a best-effort basis. SCALE does not guarantee employment, a specific salary, or a specific employer, and outcomes depend on the student's performance, eligibility and the availability of opportunities at the relevant time.`,
    ],
  },
  {
    title: "8. Intellectual Property",
    body: [
      `All content on the SCALE website and in course materials — including text, course structure, logos, graphics, videos and the SCALE and Sona Tech-School names and marks — is the property of SCALE/Sona Group or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works from this content without prior written permission, except for personal, non-commercial use directly related to your enrolled programme.`,
    ],
  },
  {
    title: "9. Website Use",
    body: [`When using our website, you agree not to:`],
    list: [
      "Use the site for any unlawful purpose or in violation of these Terms.",
      "Attempt to gain unauthorised access to our systems, data or user accounts.",
      "Upload or transmit malicious code, or interfere with the normal operation of the website.",
      "Scrape, copy or republish course, blog or placement data without permission.",
    ],
  },
  {
    title: "10. Third-Party Tools & Communications",
    body: [
      `Our website may use third-party tools (such as chat assistants, analytics and payment gateways) and communication channels (such as WhatsApp and email) to interact with you. Use of these tools is also subject to the respective third party's own terms and privacy practices.`,
    ],
  },
  {
    title: "11. Limitation of Liability",
    body: [
      `To the maximum extent permitted by applicable law, SCALE and the Sona Group shall not be liable for any indirect, incidental or consequential loss arising from your use of the website or enrolment in a programme, including loss of data, loss of opportunity, or interruption of services due to circumstances beyond our reasonable control.`,
    ],
  },
  {
    title: "12. Changes to Programmes & Terms",
    body: [
      `We may revise course content, schedules, fees or these Terms from time to time to reflect operational, regulatory or academic requirements. Updated Terms will be posted on this page with a revised "last updated" date, and continued use of our website or programmes after such changes constitutes acceptance of the updated Terms.`,
    ],
  },
  {
    title: "13. Governing Law",
    body: [
      `These Terms are governed by the laws of India, and any disputes arising out of or in connection with them shall be subject to the exclusive jurisdiction of the courts having jurisdiction over Ramanagara / Bengaluru, Karnataka.`,
    ],
  },
  {
    title: "14. Contact Us",
    body: [`For any questions regarding these Terms & Conditions, please contact us at:`],
    contact: true,
  },
]

export default function TermsAndConditionsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read the Terms & Conditions for Sona Tech-School (SCALE) — admissions, fees, code of conduct, placement assistance and website use."
      />
      <Navbar />
      <main className="pt-32 pb-20 bg-white">
        <section className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Terms & Conditions" }]} />
          </div>

          <p className="uppercase tracking-widest text-emerald-600 font-semibold text-sm mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal leading-tight">
            Terms &amp; Conditions
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
