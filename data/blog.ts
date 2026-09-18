export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Industry Trends" | "Student Stories" | "Faculty Insights" | "Announcements";
  author: string;
  date: string; // ISO date
  readMinutes: number;
  coverImage?: string;
  content: string; // simple HTML, rendered with dangerouslySetInnerHTML like brochureContent
}

// Starter posts so the section launches with real content. Editorial team can
// add further posts here (or this can be migrated to a headless CMS later —
// see BLOG-SETUP-NOTES.md in the repo root).
export const blogPosts: BlogPost[] = [
  {
    slug: "why-industry-diplomas-matter-in-2026",
    title: "Why Industry-Aligned Diplomas Matter More Than Ever",
    excerpt:
      "As hiring bars rise across tech and core-engineering roles, short, industry-aligned diplomas are closing the gap between classroom learning and job readiness.",
    category: "Industry Trends",
    author: "SCALE Editorial Team",
    date: "2026-08-01",
    readMinutes: 4,
    coverImage: "/images/blog/industry-diplomas-2026.svg",
    content: `
      <p class="mb-4 text-slate-700 leading-relaxed">Employers today expect graduates to be productive from day one. That's a tall order when a four-year degree often leaves gaps in applied, hands-on skills — which is exactly where focused, industry-aligned diploma programmes come in.</p>
      <p class="mb-4 text-slate-700 leading-relaxed">Programmes built around real projects, current tools, and mentor feedback compress the learning curve dramatically, helping students walk into interviews with a portfolio, not just a transcript.</p>
      <p class="text-slate-700 leading-relaxed">At Sona Tech School, every programme is anchored to a capstone project and career-support track — designed to make the jump from classroom to career as short as possible.</p>
    `,
  },
  {
    slug: "student-story-from-classroom-to-first-job",
    title: "From Classroom to First Job: A Student's Journey",
    excerpt:
      "One learner's path through a Tech School programme — the challenges, the capstone project, and the first offer letter.",
    category: "Student Stories",
    author: "SCALE Editorial Team",
    date: "2026-08-15",
    readMinutes: 3,
    coverImage: "/images/blog/student-journey.svg",
    content: `
      <p class="mb-4 text-slate-700 leading-relaxed">Every cohort has a story worth telling. This post is a placeholder for a real student feature — interview quotes, photos, and their programme journey.</p>
      <p class="text-slate-700 leading-relaxed">Reach out to the marketing team to nominate a student or alum for the next feature.</p>
    `,
  },
  {
    slug: "faculty-insight-teaching-ai-fundamentals",
    title: "Faculty Insight: Teaching AI Fundamentals That Actually Stick",
    excerpt:
      "A faculty perspective on what makes AI/ML concepts click for learners coming from very different academic backgrounds.",
    category: "Faculty Insights",
    author: "SCALE Faculty",
    date: "2026-09-01",
    readMinutes: 5,
    coverImage: "/images/blog/faculty-ai-fundamentals.svg",
    content: `
      <p class="mb-4 text-slate-700 leading-relaxed">Placeholder faculty-authored post. Replace with a real interview or write-up from a Sona Tech School instructor on their teaching approach.</p>
    `,
    
  },

  {
    slug: "faculty-insight-teaching-ai-fundamentals",
    title: "Faculty Insight: Teaching AI Fundamentals That Actually Stick",
    excerpt:
      "A faculty perspective on what makes AI/ML concepts click for learners coming from very different academic backgrounds.",
    category: "Faculty Insights",
    author: "SCALE Faculty",
    date: "2026-09-01",
    readMinutes: 5,
    coverImage: "/images/blog/faculty-ai-fundamentals.svg",
    content: `
      <p class="mb-4 text-slate-700 leading-relaxed">Placeholder faculty-authored post. Replace with a real interview or write-up from a Sona Tech School instructor on their teaching approach.</p>
    `,
  },


  
];
