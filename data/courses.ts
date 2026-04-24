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

  // Add this line
  programDetails?: {
    Programme_focus?: string[];
    duration?: string[];
    Available_Formats?: string[];
    programmeOverview?: string;
    keyHighlights?: string[];
    whoCanEnrol?: string[];
    targetAudience?: string[];
    deliverables?: string[];
    objectives?: string[];
    pre_requisite?: string[];
  };
}

export const courses: Course[] = [
  {
    slug: "data-science-machine-learning-ai",

    title: "Data Science, ML & AI",

    description:
      "Master Artificial Intelligence and Machine Learning through hands-on projects, real-world case studies, and expert mentorship.",

    months: "5",
    hours: "159",
    projects: "11+",
    recommended: true,

    image:
      "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=740",

    brochure: "/brochures/ai-ml.pdf",

    features: {
      mentorship: true,
      careerSupport: true,
    },

    price: {
      original: 120000,
      offer: 49999,
    },

    rating: 4.8,
    reviewsCount: 1240,

    programDetails: {
      // Duration
      duration: [
        "5 months, 159 contact hours",
        "53 sessions (3 hours each)",
        "Offline / Weekend format",
      ],



      // Overview
      programmeOverview:
        "A gold-standard, industry-aligned programme covering the complete lifecycle of Data Science, Machine Learning, and Artificial Intelligence— from statistical foundations to deployment of AI applications.",

      // Highlights
      keyHighlights: [
        "Delivered using industry-relevant tools: Python, Tableau, and Power BI",
        "11+ real-world projects including a capstone project",
        "Hands-on, practical learning approach",
        "7 comprehensive modules covering Statistics, Python, Machine Learning, Deep Learning, Data Visualization, and Deployment",
      ],

      // Eligibility
      whoCanEnrol: [
        "Students: B.Tech, BCA, MCA, B.Com, M.Com, B.Sc (Maths/Statistics/Computer Science)",
        "Working professionals seeking AI/ML skills",
      ],
    },
  },

  {
    "slug": "clear-thought-is-clear-talk",
    "title": "Clear Thought is Clear Talk",
    "description": "A highly engaging and transformational workshop designed to enhance structured thinking, clarity of expression, and confident communication. Helps participants develop cognitive clarity, organise thoughts effectively, and articulate ideas with precision and impact.",
    "months": "0",
    "hours": "3",
    "projects": "8+",
    "recommended": true,
    "image": "https://img.freepik.com/premium-photo/woman-wearing-glasses-shirt-with-her-arms-crossed_1177960-41159.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
    "brochure": "/brochures/clear-thought-clear-talk.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 25000,
      "offer": 14999
    },
    "rating": 4.9,
    "reviewsCount": 845,
    "programDetails": {
      "duration": [
        "Executive Workshop (3–4 Hours)",
        "1-Day Intensive Programme",
        "2-Day Deep-Dive Workshop",
        "Offline / Corporate / Academic Format"
      ],
      "Programme_focus": [
        "Structured thinking & mental clarity",
        "Logical organisation of ideas",
        "Mind mapping & cognitive frameworks",
        "Clarity in verbal & professional communication",
        "Confidence in expression & decision-making"
      ],
      "programmeOverview": "A highly engaging and transformational workshop designed to enhance structured thinking, clarity of expression, and confident communication. Helps participants develop cognitive clarity, organise thoughts effectively, and articulate ideas with precision and impact.",
      "keyHighlights": [
        "Tools for structured & critical thinking",
        "Mind mapping techniques",
        "Overcoming mental clutter",
        "Communicating with clarity & confidence",
        "Thought organisation for problem-solving & leadership"
      ],
      "whoCanEnrol": [
        "Students & young professionals",
        "Corporate teams",
        "Emerging leaders & managers",
        "Faculty & academic administrators"
      ]
    }
  },

  {
    "slug": "business-statistics-for-data-science",
    "title": "Business Statistics for DS",
    "description": "A foundational programme designed to build strong statistical thinking essential for Data Science and Machine Learning, with equal emphasis on theory and interpretation.",
    "months": "0",
    "hours": "15",
    "projects": "6+",
    "recommended": false,
    "image": "https://img.freepik.com/premium-photo/bar-graph-statistics-analysis-business-concept_1182637-133793.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
    "brochure": "/brochures/business-statistics-data-science.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 18000,
      "offer": 9999
    },
    "rating": 4.7,
    "reviewsCount": 562,
    "programDetails": {

      "duration": [
        "15 hours - Online(Weekend)",
      ],
      "programmeOverview": "A foundational programme designed to build strong statistical thinking essential for Data Science and Machine Learning, with equal emphasis on theory and interpretation.",
      "keyHighlights": [
        "Statistical decision-making ",
        "Tools covered Python, R, Excel",
        "Hypothesis testing & ANOVA",
        "Probability distributions",
        "Descriptive statistics & data interpretation"
      ],
      "whoCanEnrol": [
        "Beginners in Data Science",
        "Professionals seeking to strengthen statistical foundations",
      ]
    }
  },

  {
    "slug": "python-programming",
    "title": "Python Programming",
    "description": "An introductory yet comprehensive course designed to make learners confident in Python programming, logical thinking, and text processing.",
    "months": "0",
    "hours": "15",
    "projects": "8+",
    "recommended": false,
    "image": "https://img.freepik.com/premium-photo/python-programming-code-abstract-technology-background_926199-2202275.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
    "brochure": "/brochures/python-programming.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 15000,
      "offer": 8499
    },
    "rating": 4.8,
    "reviewsCount": 723,
    "programDetails": {
      "duration": [
        "Duration 15 Hours Online (Weekend)",],
      "programmeOverview": "An introductory yet comprehensive course designed to make learners confident in Python programming, logical thinking, and text processing.",
      "keyHighlights": [
        "Text processing using regular expressions (Regex)",
        "Functions, loops, and conditional logic",
        "Python basics, control structures",
      ],
      "whoCanEnrol": [
        "Beginners from any academic background",
      ]
    }
  },

  {
    "slug": "data-manipulation-through-python",
    "title": "Data Manipulation through Python",
    "description": "Focused on data wrangling and transformation using Python libraries to extract meaningful insights from structured datasets.",
    "months": "0",
    "hours": "15",
    "projects": "7+",
    "recommended": false,
    "image": "https://img.freepik.com/premium-photo/data-analysis-business-finance-concept-uds_31965-314070.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
    "brochure": "/brochures/data-manipulation-python.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 18000,
      "offer": 9999
    },
    "rating": 4.7,
    "reviewsCount": 438,
    "programDetails": {
      "duration": [
        "15 hours , Online (Weekend)"],
      "programmeOverview": "Focused on data wrangling and transformation using Python libraries to extract meaningful insights from structured datasets. ",
      "keyHighlights": [
        "Python (Pandas, NumPy,Matplotlib, Seaborn)",
        "Data cleaning and preprocessing",
        "Handling missing values and outliers",
        "Data transformation and visualisation",
        "Time-series handling",
      ],
      "pre_requisite": [
        "Basic knowledge of Pythonand Statistics",

      ]
    }
  },

  {
    "slug": "data-analysis-with-excel-vba",
    "title": "Data Analysis with Excel & VBA ",
    "description": "A practical programme focused on Excel-based data analysis, automation, and advanced reporting for corporate and business users.",
    "months": "0",
    "hours": "15",
    "projects": "8+",
    "recommended": false,
    "image": "https://img.freepik.com/premium-photo/spreadsheet-document-information-financial-startup-concept-snugly_31965-662346.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
    "brochure": "/brochures/data-analysis-excel-vba.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 16000,
      "offer": 8999
    },
    "rating": 4.8,
    "reviewsCount": 621,
    "programDetails": {
      "duration": [
        "15 hours , Online (Weekend)"],
      "programmeOverview": "A practical programme focused on Excel-based data analysis, automation, and advanced reporting for corporate and business users.",
      "keyHighlights": [
        "Advanced Excel functions and formulas",
        "Pivot tables, Power Query & Power Pivot",
        "Macros and VBA automation",
        "Tools covered: Microsoft Excel, VBA",

      ],
      "whoCanEnrol": [
        "Corporate professionals",
        "Business analysts & Beginners",
      ]
    }
  },

  {
    "slug": "dashboarding-with-microsoft-power-bi",
    "title": "Dashboarding with Microsoft Power BI",
    "description": "A hands-on programme designed to build skills in data visualization, storytelling, and dashboard creation using Power BI.",
    "months": "0",
    "hours": "15",
    "projects": "7+",
    "recommended": false,
    "image": "https://img.freepik.com/free-photo/person-writing-sticky-notes-remember-task-computer-business-woman-using-post-it-memo-paper-as-reminder-work-project-planning-company-efficiency-inspiration_482257-30592.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
    "brochure": "/brochures/dashboarding-power-bi.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 17000,
      "offer": 9499
    },
    "rating": 4.8,
    "reviewsCount": 389,
    "programDetails": {
      "duration": [
        "15 hours , Online (Weekend)"],
      "programmeOverview": "A hands-on programme designed to build skills in data visualization, storytelling, and dashboard creation using Power BI. Learn to transform complex data into compelling, interactive visual stories that drive business decisions.",
      "keyHighlights": [
        "Data import and transformation ",
        "DAX formulas ",
        "Interactive dashboards and reports",
        "Tools covered: Microsoft Power BI",
      ],
      "whoCanEnrol": [
        "Data analysts",
        "Business intelligence professionals",
        "Aspiring dashboard developers",
        "Managers and decision-makers who work with data",
        "Anyone looking to master Power BI"
      ]
    }
  },

  {
    "slug": "corporate-politics-organizational-influence",
    "title": "Corporate Politics & Organizational Influence",
    "description": "A highly practical workshop designed to help professionals understand organisational dynamics, power structures, and influence strategies required for sustainable career growth.",
    "months": "0",
    "hours": "14",
    "projects": "8+",
    "recommended": false,
    "image": "https://img.freepik.com/free-photo/corporate-team-discussion-strategy-office_53876-124674.jpg?w=740",
    "brochure": "/brochures/corporate-politics-influence.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 35000,
      "offer": 24999
    },
    "rating": 4.9,
    "reviewsCount": 312,
    "programDetails": {
      "duration": [
        "15 hours , Online (Weekend)",
        "2-Day Intensive Workshop",
        "Offline / Corporate Format"
      ],
      "Programme_focus": ["Understanding formal vs informal organisational networks",
        "Power, perception & visibility management",
        "Ethical political intelligence ",
        "Strategic influence & stakeholder alignment",],
      "programmeOverview": "A highly practical workshop designed to help professionals understand organisational dynamics, power structures, and influence strategies required for sustainable career growth. ",
      "keyHighlights": [

        "Organisational dynamics & political realities",
        "Influence without authority",
        "Reputation & credibility capital",
        "Conflict navigation & survival strategies",
        "Personal political intelligence playbook"
      ],
      "whoCanEnrol": [
        "Mid-level managers",
        "Emerging leaders",
        "Senior professionals",

      ]
    }
  },

  {
    "slug": "senior-leadership-development-workshop",
    "title": "Senior Leadership Development Workshop",
    "description": "An executive-level intervention focused on leadership perception, decision psychology, influence, and high-impact strategic thinking for senior professionals.",
    "months": "0",
    "hours": "14",
    "projects": "6+",
    "recommended": true,
    "image": "https://img.freepik.com/free-photo/medium-shot-people-chatting-work_23-2149097913.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
    "brochure": "/brochures/senior-leadership-development.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 65000,
      "offer": 49999
    },
    "rating": 4.9,
    "reviewsCount": 187,
    "programDetails": {
      "duration": [
        "Leadership / CXO Format",
        "2-Day Intensive Workshop",
      ],
      "programmeOverview": "An executive-level intervention focused on leadership perception, decision psychology, influence, and high-impact strategic thinking for senior professionals.",
      "Programme_focus": [
        "Leadership influence & executive presence",
        "Strategic decision-making psychology",
        "Organisational alignment & stakeholder management",
        "High-stakes communication & perception management",

      ],
      "whoCanEnrol": [
        "Senior leaders",
        "Business heads",
        "High-potential executives",
      ]
    }
  },

  {
    "slug": "happiness-engineering-programmes",
    "title": "Happiness Engineering Programmes",
    "description": "A distinctive interdisciplinary programme designed to integrate psychology, human behaviour, performance science, and workplace well-being.",
    "months": "0",
    "hours": "12",
    "projects": "6+",
    "recommended": false,
    "image": "https://img.freepik.com/premium-photo/business-team-connect-pieces-gears-teamwork-partnership-integration-concept_709984-10212.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
    "brochure": "/brochures/happiness-engineering.pdf",
    "features": {
      "mentorship": true,
      "careerSupport": false
    },
    "price": {
      "original": 28000,
      "offer": 19999
    },
    "rating": 4.8,
    "reviewsCount": 256,
    "programDetails": {
      "programmeOverview": "A distinctive interdisciplinary programme designed to integrate psychology, human behaviour, performance science, and workplace well-being. Learn how happiness and performance are scientifically linked, and develop practical tools to enhance both individual and organisational thriving.",
      "Programme_focus": [
        "Science of happiness & performance",
        "Emotional resilience & cognitive clarity",
        "Behavioural design & productivity",
        "Workplace engagement & leadership energy",
      ],

      "Available_Formats": [
        "Executive Workshop",
        "Certification Programmes",
        "EducationaLeadership Interventions",

      ],
      "whoCanEnrol": [
        "Corporate teams",
        "Leaders & managers",
        "Educational institutions",

      ]
    }
  },

{
  "slug": "enterprise-ai-readiness-program-from-awareness-to-implementation",
  "title": "Enterprise AI Readiness Program",
  "description": "A highly engaging and transformational workshop that enhances structured thinking, clarity of expression, and confident communication by helping participants develop cognitive clarity, organize thoughts effectively, and articulate ideas with precision and impact.",
  "months": "0",
  "hours": "24",
  "projects": "4+",
  "recommended": true,
  "image": "https://img.freepik.com/premium-photo/businessman-using-tablet-stock-market-charts_533890-518.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80",
  "brochure": "/brochures/enterprise-ai-readiness.pdf",
  "features": {
    "mentorship": true,
    "careerSupport": true
  },
  "price": {
    "original": 45000,
    "offer": 34999
  },
  "rating": 4.8,
  "reviewsCount": 94,
  "programDetails": {
    "duration": [
      "3 Days / 5 Days (customizable)",
      "On-campus / Corporate onsite / Hybrid",
      "Methodology: Hands-on training, Live demos, Case studies, Mini-project"
    ],
    "programmeOverview": "A highly engaging and transformational workshop that enhances structured thinking, clarity of expression, and confident communication by helping participants develop cognitive clarity, organize thoughts effectively, and articulate ideas with precision and impact.",
    
    "targetAudience": [
      "MBA Students (Finance, Marketing, HR, Operations)",
      "Faculty members",
      "Corporate professionals (mid-level managers)"
    ],

    "deliverables": [
      "Training materials & templates",
      "Prompt library (ready-to-use)",
      "Access to tool stack (free/paid mix guidance)",
      "Certificate of completion",
      "Post-workshop support (optional)"
    ],

    "objectives": [
      "Improve productivity",
      "Automate routine workflows",
      "Make data-driven decisions",
      "Apply AI across business functions"
    ]
  }
}



];
