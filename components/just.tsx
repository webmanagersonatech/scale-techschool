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
    original: number | null;
    offer: number | null;
  };

  rating?: number;
  reviewsCount?: number;
  
  // Optional fields for different course types
  duration_and_mode?: string[];
  programme_overview?: string;
  key_highlights?: string[];
  key_learning_areas?: string[];
  who_can_enrol?: string[];
  ideal_for?: string[];
  modules?: string[];
  prerequisite?: string[];
  programme_focus?: string[];
  available_formats?: string[];
  objective?: string[];
  target_audience?: string[];
  deliverables?: string[];
}

export const courses: Course[] = [
  {
    slug: "data-science-machine-learning-ai-comprehensive-programme",
    title: "Data Science, ML & AI",
    description: "Master Artificial Intelligence & Machine Learning with hands-on projects and mentorship.",
    months: "5",
    hours: "159",
    projects: "11",
    recommended: true,
    image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=740",
    brochure: "/brochures/ai-ml.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    price: {
      original: 120000,
      offer: 49999
    },
    rating: 4.8,
    reviewsCount: 1240,
    duration_and_mode: [
      "5 months, 159 contact hours",
      "53 sessions (3 hours each)",
      "Offline / Weekend format"
    ],
    programme_overview: "A gold-standard, industry-aligned programme covering the complete lifecycle of Data Science, Machine Learning, and Artificial Intelligence—from statistical foundations to deployment of AI applications.",
    key_highlights: [
      "Delivered using open-source technologies (Python, Tableau, Power BI)",
      "11 real-world projects + capstone",
      "Hands-on learning",
      "7 comprehensive modules covering Statistics, Python, ML, DL, Visualization, and Deployment"
    ],
    modules: [
      "Module 1: Python Programming Fundamentals",
      "Module 2: Statistics for Data Science",
      "Module 3: Machine Learning Algorithms",
      "Module 4: Deep Learning & Neural Networks",
      "Module 5: Data Visualization",
      "Module 6: Model Deployment",
      "Module 7: Capstone Project"
    ],
    who_can_enrol: [
      "Students: B.Tech, BCA, MCA, B.Com, M.Com, B.Sc (Maths/Statistics/CS)",
      "Working professionals seeking AI/ML skills"
    ]
  },
  {
    slug: "clear-thought-is-clear-talk",
    title: "CLEAR THOUGHT IS CLEAR TALK",
    description: "A highly engaging and transformational workshop designed to enhance structured thinking, clarity of expression, and confident communication.",
    months: "Not applicable (workshop format)",
    hours: "Varies by format",
    projects: "0",
    recommended: true,
    image: "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?w=740",
    brochure: "/brochures/clear-thought.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    price: {
      original: null,
      offer: null
    },
    rating: 4.7,
    reviewsCount: 980,
    programme_overview: "A highly engaging and transformational workshop designed to enhance structured thinking, clarity of expression, and confident communication. The programme helps participants develop cognitive clarity, organise thoughts effectively, and articulate ideas with precision and impact.",
    key_learning_areas: [
      "Tools for structured & critical thinking",
      "Mind mapping techniques",
      "Overcoming mental clutter",
      "Communicating with clarity & confidence",
      "Thought organisation for problem-solving & leadership"
    ],
    duration_and_mode: [
      "Executive Workshop (3–4 Hours)",
      "1-Day Intensive Programme",
      "2-Day Deep-Dive Workshop",
      "Offline / Corporate / Academic Format"
    ],
    ideal_for: [
      "Students & young professionals",
      "Corporate teams",
      "Emerging leaders & managers",
      "Faculty & academic administrators"
    ]
  },
  {
    slug: "business-statistics-for-data-science",
    title: "Business Statistics for Data Science",
    description: "A foundational programme designed to build strong statistical thinking essential for Data Science and Machine Learning.",
    months: "Not applicable (15 hours total)",
    hours: "15",
    projects: "0",
    recommended: false,
    image: "https://img.freepik.com/premium-photo/business-woman-holding-hand-graph-with-circular-economy-symbol-graph-showing-earnings_117255-2024.jpg?w=740",
    brochure: "/brochures/business-statistics.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    price: {
      original: null,
      offer: null
    },
    rating: 4.6,
    reviewsCount: 760,
    duration_and_mode: [
      "15 hours",
      "Online (Weekend)"
    ],
    who_can_enrol: [
      "Beginners in Data Science",
      "Professionals seeking to strengthen statistical foundations"
    ],
    programme_overview: "A foundational programme designed to build strong statistical thinking essential for Data Science and Machine Learning, with equal emphasis on theory and interpretation.",
    key_highlights: [
      "Statistical decision-making",
      "Tools covered: Python, R, Excel",
      "Hypothesis testing & ANOVA",
      "Probability distributions",
      "Descriptive statistics & data interpretation"
    ]
  },
  {
    slug: "python-programming",
    title: "PYTHON PROGRAMMING",
    description: "An introductory yet comprehensive course designed to make learners confident in Python programming.",
    months: "Not applicable (15 hours total)",
    hours: "15",
    projects: "0",
    recommended: false,
    image: "https://img.freepik.com/free-photo/programming-code-abstract-technology-background_53876-124233.jpg?w=740",
    brochure: "/brochures/python-programming.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    price: {
      original: null,
      offer: null
    },
    rating: 4.5,
    reviewsCount: 0,
    programme_overview: "An introductory yet comprehensive course designed to make learners confident in Python programming, logical thinking, and text processing.",
    key_highlights: [
      "Text processing using regular expressions",
      "Functions, loops, and conditional logic",
      "Python basics, data types, and control structures"
    ],
    modules: [
      "Introduction to Python",
      "Data Types & Variables",
      "Control Flow",
      "Functions & Modules",
      "File Handling",
      "Regular Expressions"
    ],
    who_can_enrol: [
      "Beginners from any academic background"
    ],
    duration_and_mode: [
      "15 hours",
      "Online (Weekend)"
    ]
  },
  {
    slug: "data-manipulation-through-python",
    title: "Data Manipulation through Python",
    description: "Focused on data wrangling and transformation using Python libraries.",
    months: "Not applicable (15 hours total)",
    hours: "15",
    projects: "0",
    recommended: false,
    image: "https://img.freepik.com/free-photo/data-science-analytics-concept_53876-124235.jpg?w=740",
    brochure: "/brochures/data-manipulation-python.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    price: {
      original: null,
      offer: null
    },
    rating: 4.5,
    reviewsCount: 0,
    programme_overview: "Focused on data wrangling and transformation using Python libraries to extract meaningful insights from structured datasets.",
    key_highlights: [
      "Python (Pandas, NumPy, Matplotlib, Seaborn)",
      "Data cleaning and preprocessing",
      "Handling missing values and outliers",
      "Data transformation and visualisation",
      "Time-series handling"
    ],
    modules: [
      "Introduction to Pandas",
      "Data Cleaning Techniques",
      "Data Transformation",
      "Data Visualization",
      "Working with Time Series"
    ],
    duration_and_mode: [
      "15 hours",
      "Online (Weekend)"
    ],
    prerequisite: [
      "Basic knowledge of Python and Statistics"
    ],
    who_can_enrol: [
      "Data Science Beginners",
      "Analytics Professionals"
    ]
  }
  // Add your other courses here following the same pattern
];

