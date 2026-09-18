export interface Faq {
  question: string;
  answer: string;
}

// TODO(client): review/expand this list — these are starter FAQs based on
// publicly visible site content. Add programme-specific or admissions-specific
// questions as needed.
export const faqs: Faq[] = [
  {
    question: "What programmes does Sona Tech School offer?",
    answer:
      "We offer industry-aligned diploma and certification programmes across Computer Science & AI, Mechanical & Mechatronics, Electronics & Communication, and Management & Analytics streams. Browse all programmes on our Courses page.",
  },
  {
    question: "Where are the batches held?",
    answer:
      "Live, instructor-led batches currently run out of Salem and Bengaluru. Check the specific programme page for the batch locations available for that course.",
  },
  {
    question: "Is there a discount for group or batch enrolments?",
    answer:
      "Yes — groups of 3 or more get a discount that increases with group size. Enquire with our team via the contact form or phone for the exact quote for your group.",
  },
  {
    question: "Do programmes include placement support?",
    answer:
      "Most programmes include mentorship and career support, with eligible learners getting access to SCALE's placement network and hiring partners.",
  },
  {
    question: "How do I get a brochure for a specific programme?",
    answer:
      "Every programme page has a 'Download Brochure' option with detailed curriculum, outcomes, and format.",
  },
  {
    question: "How can I talk to someone directly?",
    answer:
      "Call us at +91 94425 92175, WhatsApp us using the chat button, or fill out the enquiry form on our Contact page and we'll get back to you.",
  },
];
