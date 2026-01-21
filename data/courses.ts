export interface Course {
  slug: string;
  title: string;
  description: string;
  months: string;
  hours: string;
  projects: string;
  recommended?: boolean;
  image: string;
  brochure: string;

  features: {
    mentorship: boolean;
    careerSupport: boolean;
  };

  price?: {
    original: number;
    offer: number;
  };

  rating?: number;
  reviewsCount?: number;
}

export const courses: Course[] = [
  {
    slug: "ai-ml",
    title: "AI & ML",
    description:
      "Master Artificial Intelligence & Machine Learning with hands-on projects and mentorship.",
    months: "8",
    hours: "400+",
    projects: "5+",
    recommended: true,
    image:
      "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=740",
    brochure: "/brochures/ai-ml.pdf",
    features: { mentorship: true, careerSupport: true },
    price: { original: 120000, offer: 49999 },
    rating: 4.8,
    reviewsCount: 1240,
  },

  {
    slug: "data-science",
    title: "Data Science & Analytics",
    description:
      "Learn data analytics, visualization, and predictive modeling with expert guidance.",
    months: "6",
    hours: "290+",
    projects: "4+",
    recommended: true,
    image:
      "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?w=740",
    brochure: "/brochures/data-science.pdf",
    features: { mentorship: true, careerSupport: true },
    price: { original: 90000, offer: 39999 },
    rating: 4.7,
    reviewsCount: 980,
  },

  {
    slug: "cloud-devops",
    title: "Cloud DevOps",
    description:
      "Build, deploy, and manage scalable cloud infrastructure with DevOps practices.",
    months: "6",
    hours: "290+",
    projects: "6+",
    image:
      "https://img.freepik.com/premium-photo/business-woman-holding-hand-graph-with-circular-economy-symbol-graph-showing-earnings_117255-2024.jpg?w=740",
    brochure: "/brochures/cloud-devops.pdf",
    features: { mentorship: true, careerSupport: true },
    price: { original: 85000, offer: 36999 },
    rating: 4.6,
    reviewsCount: 760,
  },

  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    description:
      "Learn front-end and back-end development with hands-on projects using modern frameworks.",
    months: "7+",
    hours: "420+",
    projects: "3+",
    image:
      "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?w=740",
    brochure: "/brochures/full-stack.pdf",
    features: { mentorship: true, careerSupport: true },
    price: { original: 85000, offer: 35999 },
    rating: 4.6,
    reviewsCount: 860,
  },

  {
    slug: "cyber-security",
    title: "Cyber Security",
    description:
      "Protect networks, systems, and data by mastering cybersecurity principles and tools.",
    months: "6",
    hours: "260+",
    projects: "4+",
    image:
      "https://img.freepik.com/premium-photo/data-protection-cyber-security-privacy-shield-with-keyhole-icon-global-business-internet_505353-10.jpg?w=740",
    brochure: "/brochures/cyber-security.pdf",
    features: { mentorship: true, careerSupport: true },
    price: { original: 80000, offer: 34999 },
    rating: 4.5,
    reviewsCount: 640,
  },

  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    description:
      "Design user-friendly interfaces and experiences with hands-on projects and industry practices.",
    months: "5",
    hours: "220+",
    projects: "5+",
    image:
      "https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?w=740",
    brochure: "/brochures/ui-ux-design.pdf",
    features: { mentorship: true, careerSupport: true },
    price: { original: 70000, offer: 29999 },
    rating: 4.7,
    reviewsCount: 720,
  },


];
