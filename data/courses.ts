export interface Course {
  slug: string;
  title: string;
  description: string;
  months: string;
  hours: string;
  category?: string;
  projects: string;
  recommended?: boolean;
  image: string;
  brochure: string;
  features: {
    mentorship: boolean;
    careerSupport: boolean;
  };
  price?: {
    original?: number;
    offer?: number;
    options?: {
      duration: string;
      price: number;
    }[];
  };
  rating?: number;
  brochureContent: string;
}

// Sona Tech School — Programme Portfolio
// Sourced from: Sona Tech School Prospectus 2026-27 (SCALE — Sona Centre for Advanced Learning & Entrepreneurship)
export const courses: Course[] = [
  // ========================================================================
  // COMPUTER SCIENCE & ALLIED STREAMS
  // ========================================================================

  // 1. Advanced Computing & AI Engineering CSE Program
  {
    slug: "advanced-computing-ai-engineering-cse",
    title: "Advanced Computing & AI Engineering (CSE)",
    description: "An Advanced Industry Diploma combining applied Python, data structures & algorithms, full-stack development, and AI/ML foundations for CSE, BE, MSc and MCA students.",
    months: "80 Hours (Blended)",
    category: "Computer Science & Allied Streams",
    hours: "80",
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Advanced-Computing-&-AI-Engineering-CSE.webp",
    brochure: "/brochures/advanced-computing-ai-engineering-cse.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
      <!-- ================= Program Information ================= -->
     <!-- ================= Program Information ================= -->
<section class="space-y-4">
  <h2 class="text-3xl font-bold text-slate-900">Program Information</h2>
  <div class="bg-slate-100 p-6 grid gap-4 lg:grid-cols-2">
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Course Outcomes</h3>
      <p class="mt-0.5 text-slate-700">Applied Python, Data Structures, Full Stack Development, and AI/ML Foundations</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Format</h3>
      <p class="mt-0.5 text-slate-700">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Target Audience</h3>
      <p class="mt-0.5 text-slate-700">Intermediate programmers seeking industry-ready skills</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Prerequisites</h3>
      <p class="mt-0.5 text-slate-700">Basic Python syntax, introductory programming</p>
    </div>
  </div>
</section>

<!-- ================= Professional Certification ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Professional Certification</h2>
  <div class="mt-5 bg-slate-100 p-6 grid gap-4 md:grid-cols-2">
    <ul class="space-y-1.5 px-5 text-slate-700">
      <li class="flex items-center gap-2"><span class="text-emerald-600 text-lg">✓</span> Python Data Structure &amp; Algorithms</li>
      <li class="flex items-center gap-2"><span class="text-emerald-600 text-lg">✓</span> Project Management</li>
      <li class="flex items-center gap-2"><span class="text-emerald-600 text-lg">✓</span> AI/ML Foundation</li>
    </ul>
    <ul class="space-y-1.5 px-5 text-slate-700">
      <li class="flex items-center gap-2"><span class="text-emerald-600 text-lg">✓</span> Introduction to Networking</li>
      <li class="flex items-center gap-2"><span class="text-emerald-600 text-lg">✓</span> Python</li>
    </ul>
  </div>
</section>

<!-- ================= Course Objectives ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Course Objectives</h2>
  <div class="mt-5 bg-slate-100 p-6">
    <ul class="grid gap-x-8 gap-y-2 text-slate-700 lg:grid-cols-2">
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Develop proficiency in Python programming with object-oriented design and practical utilities.</span>
      </li>
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Implement and analyze core data structures and algorithms.</span>
      </li>
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Build production-ready full stack applications with authentication, database integration, and containerization.</span>
      </li>
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Understand mathematical foundations and implement basic machine learning workflows.</span>
      </li>
    </ul>
  </div>
</section>

<!-- ================= Course Outcomes ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Course Outcomes (COs)</h2>
  <div class="mt-5 grid gap-4 md:grid-cols-2">
    <div class="p-5">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO1</p>
      <h3 class="mt-0.5 text-lg font-bold text-slate-900">Python Programming</h3>
      <p class="mt-2 text-slate-700">Apply object-oriented Python programming, file handling, decorators, and basic concurrency to build structured applications.</p>
    </div>
    <div class="p-5">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO2</p>
      <h3 class="mt-0.5 text-lg font-bold text-slate-900">Data Structures and Algorithms</h3>
      <p class="mt-2 text-slate-700">Implement fundamental data structures and algorithms while analyzing their performance characteristics.</p>
    </div>
    <div class="p-5">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO3</p>
      <h3 class="mt-0.5 text-lg font-bold text-slate-900">Full Stack Development</h3>
      <p class="mt-2 text-slate-700">Design, develop and deploy a web application integrating backend APIs, frontend components, authentication, database, and containerization.</p>
    </div>
    <div class="p-5">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO4</p>
      <h3 class="mt-0.5 text-lg font-bold text-slate-900">AI/ML Foundations</h3>
      <p class="mt-2 text-slate-700">Explain key mathematical concepts and implement basic machine learning models using standard frameworks.</p>
    </div>
  </div>
</section>

<!-- ================= Course Structure ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Course Structure</h2>
  <div class="mt-5 space-y-4">

    <!-- Module 1 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 1 &middot; 20 Hours Total</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Python Programming</h3>
      <p class="mt-1 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Object-oriented programming (classes, inheritance, encapsulation)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Memory management and garbage collection</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> File handling (text, JSON, binary)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Decorators for logging and tracing</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Basic threading and synchronization</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Socket programming fundamentals</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Banking system OOP project (3 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Decorator implementation challenges (2 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> File processing pipeline (2 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Threaded file monitoring utility (1.75 hours)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 2 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 2 &middot; 20 Hours Total</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Data Structures &amp; Algorithms</h3>
      <p class="mt-1 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Linear structures (lists, stacks, queues, hash maps)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Binary search trees and tree traversals</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Graph representation and traversal (DFS, BFS)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Sorting algorithms (merge, quick)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Dynamic programming introduction</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Algorithm complexity analysis</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Stack/queue implementations (2 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> BST operations (2.5 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Graph algorithms (2 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Sorting algorithm comparison (2.25 hours)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 3 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 3 &middot; 20 Hours Total</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Full Stack Development</h3>
      <p class="mt-1 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Flask REST API development</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> JWT authentication implementation</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> React components and API integration</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Database integration (SQLAlchemy)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Redis caching fundamentals</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Docker containerization</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Application logging and basic monitoring</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> REST API development (3 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Full stack integration (2.5 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Docker deployment (2 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Authentication enhancement (1.25 hours)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 4 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 4 &middot; 20 Hours Total</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">AI/ML Foundations</h3>
      <p class="mt-1 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Linear algebra for ML (vectors, matrices)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Calculus fundamentals (derivatives, gradients)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Machine learning workflow and evaluation</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Scikit-learn and TensorFlow basics</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Model training and validation techniques</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Mathematical foundations practice (2 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Data preprocessing (2 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Model implementation (2.75 hours)</li>
            <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span> Model evaluation and comparison (2 hours)</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>
    `
  },

  // 2. Intelligent Systems and Enterprise Technology IT Program
  {
    slug: "intelligent-systems-enterprise-technology-it",
    title: "Intelligent Systems and Enterprise Technology (IT)",
    description: "An Advanced Industry Diploma focusing on intelligent systems, enterprise technology integration, and modern IT infrastructure for B Tech, BE, MSc, M Tech & MCA students.",
    months: "80 Hours (Blended)",
    hours: "80",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "/images/course-image/Intelligent-Systems-and-Enterprise-Technology-(IT).webp",
    brochure: "/brochures/intelligent-systems-enterprise-technology-it.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
      <!-- ================= Program Information ================= -->
<section class="space-y-4">
  <h2 class="text-3xl font-bold text-slate-900">Program Information</h2>
  <div class="bg-slate-100 p-6 grid gap-4 lg:grid-cols-2">
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Course Outcomes</h3>
      <p class="mt-0.5 text-slate-700">Applied Python, Data Structures, Full Stack Development, and AI/ML Foundations</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Format</h3>
      <p class="mt-0.5 text-slate-700">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Target Audience</h3>
      <p class="mt-0.5 text-slate-700">Intermediate programmers seeking industry-ready skills</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Prerequisites</h3>
      <p class="mt-0.5 text-slate-700">Basic Python syntax, introductory programming</p>
    </div>
  </div>
</section>

<!-- ================= Professional Certification ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Professional Certification</h2>
  <div class="mt-5 bg-slate-100 p-6 grid gap-4 md:grid-cols-2">
    <ul class="space-y-1.5 text-slate-700">
      <li class="flex items-center gap-2">
        <span class="text-emerald-600 text-lg">✓</span>
        <span>Python Data Structure &amp; Algorithms</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-emerald-600 text-lg">✓</span>
        <span>Project Management</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-emerald-600 text-lg">✓</span>
        <span>AI/ML Foundation</span>
      </li>
    </ul>
    <ul class="space-y-1.5 text-slate-700">
      <li class="flex items-center gap-2">
        <span class="text-emerald-600 text-lg">✓</span>
        <span>Introduction to Networking</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-emerald-600 text-lg">✓</span>
        <span>Python</span>
      </li>
    </ul>
  </div>
</section>

<!-- ================= Course Objectives ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Course Objectives</h2>
  <div class="mt-5 bg-slate-100 p-6">
    <ul class="grid gap-x-8 gap-y-2.5 text-slate-700 lg:grid-cols-2">
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Develop proficiency in Python programming with object-oriented design and practical utilities.</span>
      </li>
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Implement and analyze core data structures and algorithms.</span>
      </li>
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Build production-ready full stack applications with authentication, database integration, and containerization.</span>
      </li>
      <li class="flex items-start gap-2.5">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Understand mathematical foundations and implement basic machine learning workflows.</span>
      </li>
    </ul>
  </div>
</section>

<!-- ================= Course Outcomes ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Course Outcomes (COs)</h2>
  <div class="mt-5 grid gap-4 md:grid-cols-2">
    <div class="p-5">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO1</p>
      <h3 class="mt-0.5 text-lg font-bold text-slate-900">Python Programming</h3>
      <p class="mt-2 text-slate-700">Apply object-oriented Python programming, file handling, decorators, and basic concurrency to build structured applications.</p>
    </div>
    <div class="p-5">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO2</p>
      <h3 class="mt-0.5 text-lg font-bold text-slate-900">Data Structures and Algorithms</h3>
      <p class="mt-2 text-slate-700">Implement fundamental data structures and algorithms while analyzing their performance characteristics.</p>
    </div>
    <div class="p-5">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO3</p>
      <h3 class="mt-0.5 text-lg font-bold text-slate-900">Full Stack Development</h3>
      <p class="mt-2 text-slate-700">Design, develop and deploy a web application integrating backend APIs, frontend components, authentication, database, and containerization.</p>
    </div>
    <div class="p-5">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO4</p>
      <h3 class="mt-0.5 text-lg font-bold text-slate-900">AI/ML Foundations</h3>
      <p class="mt-2 text-slate-700">Explain key mathematical concepts and implement basic machine learning models using standard frameworks.</p>
    </div>
  </div>
</section>

<!-- ================= Course Structure ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Course Structure</h2>
  <div class="mt-5 space-y-4">

    <!-- Module 1 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 1 &middot; 20 Hours Total</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Python Programming</h3>
      <p class="mt-1 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Object-oriented programming (classes, inheritance, encapsulation)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Memory management and garbage collection</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>File handling (text, JSON, binary)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Decorators for logging and tracing</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Basic threading and synchronization</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Socket programming fundamentals</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Banking system OOP project (3 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Decorator implementation challenges (2 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>File processing pipeline (2 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Threaded file monitoring utility (1.75 hours)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 2 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 2 &middot; 20 Hours Total</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Data Structures &amp; Algorithms</h3>
      <p class="mt-1 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Linear structures (lists, stacks, queues, hash maps)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Binary search trees and tree traversals</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Graph representation and traversal (DFS, BFS)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Sorting algorithms (merge, quick)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Dynamic programming introduction</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Algorithm complexity analysis</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Stack/queue implementations (2 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>BST operations (2.5 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Graph algorithms (2 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Sorting algorithm comparison (2.25 hours)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 3 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 3 &middot; 20 Hours Total</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Full Stack Development</h3>
      <p class="mt-1 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Flask REST API development</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>JWT authentication implementation</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>React components and API integration</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Database integration (SQLAlchemy)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Redis caching fundamentals</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Docker containerization</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Application logging and basic monitoring</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>REST API development (3 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Full stack integration (2.5 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Docker deployment (2 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Authentication enhancement (1.25 hours)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 4 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 4 &middot; 20 Hours Total</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">AI/ML Foundations</h3>
      <p class="mt-1 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Linear algebra for ML (vectors, matrices)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Calculus fundamentals (derivatives, gradients)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Machine learning workflow and evaluation</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Scikit-learn and TensorFlow basics</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Model training and validation techniques</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Mathematical foundations practice (2 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Data preprocessing (2 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Model implementation (2.75 hours)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Model evaluation and comparison (2 hours)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>
    `
  },

  // 3. Artificial Intelligence & Machine Learning Program
  {
    slug: "artificial-intelligence-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    description: "A comprehensive program covering AI/ML foundations, deep learning, LLMs, RAG, and agentic systems for B Tech, BE, MSc, M Tech & MCA students.",
    months: "80 Hours (Blended)",
    hours: "80",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "/images/course-image/Artificial-Intelligence-&-Machine-Learning.webp",
    brochure: "/brochures/artificial-intelligence-machine-learning.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
      <!-- ================= Program Information ================= -->
<section class="space-y-4">
  <h2 class="text-3xl font-bold text-slate-900">Program Information</h2>
  <div class="bg-slate-100 p-6 grid gap-4 lg:grid-cols-2">
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Course Outcomes</h3>
      <p class="mt-0.5 text-slate-700">Applied Python, Data Structures, Full Stack Development, and AI/ML Foundations</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Format</h3>
      <p class="mt-0.5 text-slate-700">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Target Audience</h3>
      <p class="mt-0.5 text-slate-700">Intermediate programmers seeking industry-ready skills</p>
    </div>
    <div class="border-l-4 border-emerald-600 px-4 py-1">
      <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Prerequisites</h3>
      <p class="mt-0.5 text-slate-700">Basic Python syntax, introductory programming</p>
    </div>
  </div>
</section>

<!-- ================= Professional Certification ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Professional Certification</h2>
  <div class="mt-5 bg-slate-100 p-6 grid gap-4 md:grid-cols-2">
    <ul class="space-y-1.5 text-slate-700">
      <li class="flex items-start gap-2">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Linear Algebra and Statistics</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>ML Statistical Foundations Programme Certificate by Wolfram</span>
      </li>
    </ul>
    <ul class="space-y-1.5 text-slate-700">
      <li class="flex items-start gap-2">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Calculus Review: Integrals</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Calculus Review: Limits &amp; Derivatives</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-emerald-600 text-lg leading-tight">✓</span>
        <span>Project Management</span>
      </li>
    </ul>
  </div>
</section>

<!-- ================= Revised Curriculum ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Revised Curriculum</h2>
  <div class="mt-5 overflow-x-auto rounded-lg bg-slate-100 p-4 sm:p-5">
    <div class="min-w-[700px] overflow-hidden rounded-lg">
      <table class="w-full border-collapse">
        <thead>
          <tr class="">
            <th class="w-[90px] border border-slate-300 p-2.5 text-left text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm">Module</th>
            <th class="min-w-[280px] border border-slate-300 p-2.5 text-left text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm">Topic</th>
            <th class="w-[100px] border border-slate-300 p-2.5 text-center text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm">ILT (h)</th>
            <th class="w-[100px] border border-slate-300 p-2.5 text-center text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm">SL (h)</th>
            <th class="w-[100px] border border-slate-300 p-2.5 text-center text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm">SE (h)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="border border-slate-300 p-2.5 text-slate-700">1</td>
            <td class="border border-slate-300 p-2.5 text-slate-700">Python, DSA and Algorithms</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">10</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">6</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">3</td>
          </tr>
          <tr class="">
            <td class="border border-slate-300 p-2.5 text-slate-700">2</td>
            <td class="border border-slate-300 p-2.5 text-slate-700">Math Foundations (Linear Alg/Calc)</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">10</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">6</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">4</td>
          </tr>
          <tr class="">
            <td class="border border-slate-300 p-2.5 text-slate-700">3</td>
            <td class="border border-slate-300 p-2.5 text-slate-700">Keras and TF Runtime Engine</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">10</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">6</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">4</td>
          </tr>
          <tr class="">
            <td class="border border-slate-300 p-2.5 text-slate-700">4</td>
            <td class="border border-slate-300 p-2.5 text-slate-700">LLMs, RAG and Agentic Systems</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">10</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">7</td>
            <td class="border border-slate-300 p-2.5 text-center text-slate-700">4</td>
          </tr>
          <tr class="bg-emerald-600 font-bold text-white">
            <td class="border border-slate-300 p-2.5" colspan="2">TOTAL</td>
            <td class="border border-slate-300 p-2.5 text-center">40</td>
            <td class="border border-slate-300 p-2.5 text-center">25</td>
            <td class="border border-slate-300 p-2.5 text-center">15</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ================= Detailed Module Breakdown ================= -->
<section class="mt-10">
  <h2 class="text-3xl font-bold text-slate-900">Detailed Module Breakdown</h2>
  <div class="mt-5 space-y-4">

    <!-- Module 1 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 1 &middot; 10h ILT | 6h SL</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Python, DSA and Algorithms</h3>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Concepts</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Vector spaces, SVD/PCA</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Gradient descent</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Partial derivatives, and multivariate calculus</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Deriving backpropagation</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Manual implementation of matrix decomposition (PCA) using NumPy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 2 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 2 &middot; 10h ILT | 6h SL</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Math Foundations (Linear Alg/Calc)</h3>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Concepts</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Vector spaces, SVD/PCA, gradient descent</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Partial derivatives, and multivariate calculus</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Deriving backpropagation</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Manual implementation of matrix decomposition (PCA) using NumPy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 3 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 3 &middot; 10h ILT | 6h SL</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">Keras &amp; TensorFlow Runtime</h3>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Concepts</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Keras: Sequential vs. Functional APIs, custom layers/callbacks, loss functions</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>TF Runtime: Computational graphs, eager vs. graph execution, tf.GradientTape, XLA compilation, and memory profiling</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Building custom training loops using tf.GradientTape</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Compiling with XLA, and profiling execution time</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Module 4 -->
    <div class="bg-slate-100 p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 4 &middot; 10h ILT | 7h SL</p>
      <h3 class="mt-0.5 text-xl font-bold text-slate-900">LLMs, RAG and Agents</h3>
      <div class="mt-4 grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="font-bold text-slate-900">Concepts</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Transformers, Milvus/Ollama, LangChain agents</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>PEFT/LoRA fine-tuning, FastAPI, and asynchronous API deployment</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
          <ul class="mt-2 space-y-1 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600">✓</span>
              <span>Developing an agentic RAG system with self-correction logic and deploying it as a streaming API</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>
    `
  },

  {
    slug: "data-science-machine-learning-ai-engineering-icp",
    title: "Data Science, Machine Learning & AI Engineering (ICP)",
    description:
      "An Industry Certificate Program covering AI & Data Science fundamentals, Python, data analytics, machine learning, enterprise AI, and Generative AI for students, graduates, analysts, engineers, working professionals, and career changers.",

    months: "5 Days",
    hours: "15",

    category: "Computer Science & Allied Streams",
    projects: "1-3 Mini Project(s)",
    recommended: false,
    price: {

      offer: 11999
    },
    image: "/images/course-image/Data-Science,-Machine-Learning-&-AI-Engineering-(ICP).webp",

    brochure:
      "/brochures/data-science-machine-learning-ai-engineering-icp.pdf",

    features: {
      mentorship: true,
      careerSupport: true,
    },

    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to AI & Data Science
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Python Foundations for AI
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analysis & Visualisation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Machine Learning Foundations
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Enterprise AI & Generative AI
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">
        
        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
         
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Visualization Adoption
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Real-Time Reporting Replacing Static Reports
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Enterprise Analytics Expansion
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Power BI Global Adoption Growth
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to analyse & interpret business datasets
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build ML models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Perform EDA
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Create dashboards
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply statistical methods
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Utilise AI tools
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Communicate insights through data storytelling
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span> 
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span> 
      Working Professionals <span class="text-slate-300 mx-2">|</span> 
      Career Changers
    </p>
  </div>
</section>
`,
  },


  {
    slug: "data-science-machine-learning-ai-engineering-idp",
    title: "Data Science, Machine Learning & AI Engineering (IDP)",
    description:
      "An Industry Diploma Program with curriculum covering Data Science, Python, analytics, ML, Power BI, and Generative AI for students, graduates, analysts, and professionals.",

    months: "~1–2 Months",
    hours: "30",
    category: "Computer Science & Allied Streams",
    projects: "3+ Industry Projects",
    recommended: false,
    price: {

      offer: 22999
    },
    image: "/images/course-image/Data-Science,-Machine-Learning-&-AI-Engineering-(IDP).webp",

    brochure:
      "/brochures/data-science-machine-learning-ai-engineering-icp.pdf",

    features: {
      mentorship: true,
      careerSupport: true,
    },

    brochureContent: `
 <section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <!-- Header with course details -->
    <div class="mb-6 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
          <div class=" mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
        <span class="font-bold text-slate-900">30 HRS</span>
        <span class="text-slate-300">|</span>
        <span>3+ INDUSTRY PROJECTS</span>
      </div>
      </div>

      <!-- Course details - inline, no boxes -->
    
    </div>

    <!-- Two column layout -->
    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Curriculum Highlights -->
      <div>
        <h3 class="mb-3 text-lg font-bold text-slate-900">
          Curriculum Highlights
        </h3>

        <ul class="space-y-1.5 text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Data Science Foundations
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Python for Analytics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Data Manipulation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Business Statistics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Machine Learning Foundations
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Business Intelligence with Power BI
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Generative AI for Business
          </li>
        </ul>
      </div>

    
       

        

        <!-- Career Entry Points -->
        <div class="mt-6 pt-6 border-t border-slate-200">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Capstone Projects
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Customer Churn Prediction
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
             Retail Analytics Dashboard
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI-Powered Business Insights
            </li>
        
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Adoption
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data-Driven Decisions
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Digital Transformation - Generative AI
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Demand
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to analyse & interpret business datasets
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build ML models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Perform EDA
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Create dashboards
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply statistical methods
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Utilise AI tools
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Communicate insights through data storytelling
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <!-- Removed box styling -->
    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span> 
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span> 
      Working Professionals <span class="text-slate-300 mx-2">|</span> 
      Career Changers
    </p>
  </div>

</section>
`,
  },

  {
    slug: "data-science-machine-learning-ai-engineering-aidp",
    title: "Data Science, Machine Learning & AI Engineering (AIDP)",
    description:
      "An Advanced Industry Diploma Program with 60 contact hours and 20 weekend sessions covering Data Science, Python, analytics, ML, Power BI, and Generative AI for students, graduates, analysts, and professionals.",
    months: "2–6 Months",
    hours: "60",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    price: {

      offer: 68999
    },
    image: "/images/course-image/Data-Science,-Machine-Learning-&-AI-Engineering-(AIDP).webp",

    brochure:
      "/brochures/data-science-machine-learning-ai-engineering-idp.pdf",

    features: {
      mentorship: true,
      careerSupport: true,
    },

    brochureContent: `
 <section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Data Science, Machine Learning & AI Engineering
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Become an AI professional ready for the future.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Data Science and AI
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Python Programming
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Exploration & Visualisation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Statistical Analysis
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            First ML Models
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Data Science and ML
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Feature Engineering
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Regression & Classification
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Clustering
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Model Deployment
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Artificial Intelligence
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Deep Learning & Neural Networks
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            TensorFlow & Keras
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Computer Vision
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Natural Language Processing
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Generative AI and Enterprise AI
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            LLMs & Prompt Engineering
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Agents & RAG
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            MLOps & Cloud AI
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Enterprise AI Strategy
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Python</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Scikit-Learn</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">TensorFlow / Keras</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Hugging Face</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">OpenAI · Claude · Gemini</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Power BI</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">AWS / Azure AI</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise AI Innovation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Scientist
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Machine Learning Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Transformation Consultant
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class=" px-3 py-1.5 text-sm font-medium text-slate-700 ">Project-Based Learning</span>
      <span class=" px-3 py-1.5 text-sm font-medium text-slate-700 ">Industry Mentorship</span>
      <span class=" px-3 py-1.5 text-sm font-medium text-slate-700 ">Portfolio Development</span>
      <span class=" px-3 py-1.5 text-sm font-medium text-slate-700 ">Capstone Showcase</span>
    </div>
  </div>

</section>
`,
  },


  // 6. Python Software Engineering & Application Development ICP
  {
    slug: "python-software-engineering-application-development-icp",
    title: "Python Software Engineering & Application Development (ICP)",
    description: "An Industry Certificate Program covering Python fundamentals, loops, functions, data structures, and automation for students, graduates, and professionals.",
    months: "5 Days",
    hours: "15",
    projects: "1-3 Mini Project(s)",
    price: {

      offer: 11999
    },
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "/images/course-image/Python-Software-Engineering-&-Application-Development-(ICP).webp",
    brochure: "/brochures/python-software-engineering-application-development-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Programming & Python
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Python Fundamentals
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Loops & Iterative Programming
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Functions & Modular Programming
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Structures
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              File Handling & Automation
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI & Automation Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data-Driven Business Models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Workflow Automation
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Developer Demand
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Technology Expansion
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Foundational programming capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Practical Python implementation skills
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Coding confidence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Logical thinking ability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Introductory automation exposure
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `,
  },


  // 7. Python Software Engineering & Application Development IDP
  {
    slug: "python-software-engineering-application-development-idp",
    title: "Python Software Engineering & Application Development (IDP)",
    description: "An Industry Diploma Program with 3+ industry projects covering Data Science, Python, ML, BI, and Generative AI for students and professionals.",
    months: "~1–2 Months",
    hours: "30",
    projects: "3+ Industry Projects",
    price: {

      offer: 22999
    },
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "/images/course-image/Python-Software-Engineering-&-Application-Development-(IDP).webp",
    brochure: "/brochures/python-software-engineering-application-development-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <!-- Header with course details -->
    <div class="mb-6 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>3+ INDUSTRY PROJECTS</span>
        </div>
      </div>
    </div>

    <!-- Two column layout -->
    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Curriculum Highlights -->
      <div>
        <h3 class="mb-3 text-lg font-bold text-slate-900">
          Curriculum Highlights
        </h3>

        <ul class="space-y-1.5 text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Data Science Foundations
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Python for Analytics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Data Manipulation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Business Statistics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Machine Learning Foundations
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Business Intelligence with Power BI
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Generative AI for Business
          </li>
        </ul>
      </div>

      <!-- RIGHT: Capstone Projects -->
      <div class="flex flex-col justify-center">
        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Capstone Projects
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Customer Churn Prediction
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Retail Analytics Dashboard
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI-Powered Business Insights
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Adoption
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data-Driven Decisions
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Digital Transformation - Generative AI
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Demand
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to analyse & interpret business datasets
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build ML models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Perform EDA
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Create dashboards
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply statistical methods
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Utilise AI tools
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Communicate insights through data storytelling
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // 8. Python Software Engineering & Application Development AIDP
  {
    slug: "python-software-engineering-application-development-aidp",
    title: "Python Software Engineering & Application Development (AIDP)",
    description: "An Advanced Industry Diploma program to become a professional Python developer for modern technology careers with 60 contact hours and 20 weekend sessions.",
    months: "2–6 Months",
    category: "Computer Science & Allied Streams",
    hours: "60",
    price: {

      offer: 68999
    },
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Python-Software-Engineering-&-Application-Development-(AIDP).webp",
    brochure: "/brochures/python-software-engineering-application-development-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Python Software Engineering & Application Development
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Become a professional Python developer for modern technology careers.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Python Programming Foundations
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Fundamentals & Logic
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Functions
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Structures
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            File Operations
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Python Development
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Object-Oriented Programming
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Database Connectivity
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            API Integration
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Automation Projects
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Python Engineering
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Design Patterns
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Multithreading
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Async Programming
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Testing & Optimisation
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise & AI-Enabled Development
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            REST API & Flask
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Web Applications
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Git & Version Control
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI-Assisted Development
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Python</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">VS Code</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">SQLite / MySQL</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">REST APIs · Postman</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Flask</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Git & GitHub</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">OpenAI · Claude · Gemini</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise Python Solution
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Python Developer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Backend Developer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automation Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Application Developer
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },

  // 9. Data Engineering & Advanced Analytics with Python ICP
  {
    slug: "data-engineering-advanced-analytics-python-icp",
    title: "Data Engineering & Advanced Analytics with Python (ICP)",
    description: "An Industry Certificate Program covering Data Analytics, NumPy, Pandas, data cleaning, EDA, and visualization for students, graduates, analysts, and professionals.",
    months: "5 Days",
    price: {

      offer: 11999
    },
    hours: "15",
    projects: "1-3 Mini Project(s)",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "/images/course-image/Data-Engineering-&-Advanced-Analytics-with-Python-(ICP).webp",
    brochure: "/brochures/data-engineering-advanced-analytics-python-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Data Analytics & Python
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              NumPy Foundations
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Pandas Fundamentals
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Cleaning & Transformation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Exploratory Data Analysis
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Visualization & Reporting
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data-Driven Enterprises
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI & ML Expansion
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automation & Analytics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analytical Talent Demand
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Professional-level Python development
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to build scalable applications
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automation engineering; API integration
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI-enabled development
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Portfolio-ready projects
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // 10. Data Engineering & Advanced Analytics with Python IDP
  {
    slug: "data-engineering-advanced-analytics-python-idp",
    title: "Data Engineering & Advanced Analytics with Python (IDP)",
    description: "An Industry Diploma Program covering Data Analytics, Python, NumPy, Pandas, data cleaning, and EDA for students, graduates, analysts, and professionals.",
    months: "~1–2 Months",
    hours: "30",
    price: {

      offer: 22999
    },
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "/images/course-image/Data-Engineering-&-Advanced-Analytics-with-Python-(IDP).webp",
    brochure: "/brochures/data-engineering-advanced-analytics-python-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Data Analytics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Python for Data Analytics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              NumPy for Data Processing
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Pandas Fundamentals
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Cleaning & Preparation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Exploratory Data Analysis
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data-Driven Enterprises
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          BI Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI & ML Expansion
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automation & Analytics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analytical Talent Demand
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to import & process complex datasets
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Clean and prepare data for analysis
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Perform EDA
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Create visualizations
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Identify patterns and trends
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // 11. Data Engineering & Advanced Analytics with Python AIDP
  {
    slug: "data-engineering-advanced-analytics-python-aidp",
    title: "Data Engineering & Advanced Analytics with Python (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions covering Python analytics, NumPy, Pandas, data cleaning, EDA, and business reporting.",
    months: "2–6 Months",
    hours: "60",
    price: {

      offer: 68999
    },
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "/images/course-image/Data-Engineering-&-Advanced-Analytics-with-Python-(AIDP).webp",
    brochure: "/brochures/data-engineering-advanced-analytics-python-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Data Engineering & Advanced Analytics with Python
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Become an advanced data analytics professional with Python.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Data Manipulation
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Python Analytics Environment
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            NumPy & Pandas
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Cleaning
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Transformation
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Analytics & Reporting
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Exploratory Data Analysis
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Business Reporting
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Visualisation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Insight Generation
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Data Processing
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Advanced Pandas
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Multi-Source Integration
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Feature Engineering
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Large Dataset Handling
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Data Analytics
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Pipeline Concepts
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Predictive Analytics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Governance
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Data Preparation
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Python</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Pandas / NumPy</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Matplotlib · Plotly · Seaborn</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Power BI</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Jupyter</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">ETL & Pipeline Concepts</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise Data Analytics Transformation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          BI Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Junior Data Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Science Associate
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },
  // 12. Enterprise AI Transformation & Governance ICP
  {
    slug: "enterprise-ai-transformation-governance-icp",
    title: "Enterprise AI Transformation & Governance (ICP)",
    description: "An Industry Certificate Program covering Enterprise AI, Generative AI, prompt engineering, AI productivity, workflow automation, and responsible AI for professionals.",
    months: "5 Days",
    hours: "15",
    price: {

      offer: 11999
    },
    projects: "1-3 Mini Project(s)",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "/images/course-image/Enterprise-AI-Transformation-&-Governance-(ICP).webp",
    brochure: "/brochures/enterprise-ai-transformation-governance-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Enterprise AI
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Generative AI Fundamentals
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Prompt Engineering & AI Communication
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Productivity & Workplace Transformation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Workflow Automation & AI Systems
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Responsible AI & Governance
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Generative AI Adoption
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Workflow Automation Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI-Powered Decision Making
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Enterprise Transformation via AI
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Workforce Evolution requiring AI adaptability
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Understanding of enterprise AI ecosystems
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Awareness of Generative AI workflows
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Practical prompt engineering exposure
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI-assisted productivity capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Enterprise transformation understanding
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI governance and ethics awareness
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // 13. Enterprise AI Transformation & Governance IDP
  {
    slug: "enterprise-ai-transformation-governance-idp",
    title: "Enterprise AI Transformation & Governance (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering Enterprise AI, Generative AI, prompt engineering, automation, and business analytics for professionals.",
    months: "~1–2 Months",
    hours: "30",
    price: {

      offer: 22999
    },
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "/images/course-image/Enterprise-AI-Transformation-&-Governance-(IDP).webp",
    brochure: "/brochures/enterprise-ai-transformation-governance-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Foundations of Enterprise AI
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Generative AI Fundamentals
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Prompt Engineering & AI Communication
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Productivity & Workplace Transformation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Intelligent Automation Concepts
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Business Analytics & Performance Monitoring
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Generative AI Adoption & AI-Powered Decision Making
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Intelligent Automation & Digital Transformation
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Governance requirements
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to evaluate AI opportunities across business functions
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Use Generative AI tools effectively
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Design AI-enhanced workflows
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Develop AI adoption roadmaps
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Assess organisational AI readiness
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Understand AI governance and ethics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Support enterprise AI transformation initiatives
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // 14. Enterprise AI Transformation & Governance AIDP
  {
    slug: "enterprise-ai-transformation-governance-aidp",
    title: "Enterprise AI Transformation & Governance (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to lead enterprise AI transformation and innovation for professionals.",
    months: "2–6 Months",
    hours: "60",
    price: {

      offer: 68999
    },
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "/images/course-image/Enterprise-AI-Transformation-&-Governance-(AIDP).webp",
    brochure: "/brochures/enterprise-ai-transformation-governance-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Enterprise AI Transformation & Governance
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Lead enterprise AI transformation & innovation.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Enterprise AI
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Enterprise AI Ecosystem
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Business Applications
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Generative AI Fundamentals
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Adoption Trends
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Generative AI
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Prompt Engineering
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Productivity Tools
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Research Workflows
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Departmental AI Applications
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          AI Strategy & Organisational Readiness
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Readiness Frameworks
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Maturity Models
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Governance
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Change Management
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise AI Transformation
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Strategy Development
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Operating Models
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Transformation Roadmaps
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Enterprise Innovation
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">ChatGPT · Claude · Gemini</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Microsoft Copilot</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">AI Research Platforms</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Automation Tools</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">AI Readiness Frameworks</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise AI Transformation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Transformation Associate
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Digital Transformation Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Strategy Associate
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Enterprise AI Consultant
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },


  // 14. Introduction to Unreal Engine
  {
    slug: "introduction-to-unreal-engine",
    title: "Introduction to Unreal Engine",
    description: "A foundational program covering Unreal Engine installation, UI navigation, level creation, asset import, lighting, cinematics, and rendering for beginners.",
    months: "~1–2 Months",
    hours: "30",
    price: {

      offer: 6000
    },
    projects: "1 Project",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "/images/course-image/Introduction-to-Unreal-Engine.webp",
    brochure: "/brochures/introduction-to-unreal-engine.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6 bg-slate-100 ">
<div class="bg-slate-100 p-8">
    <h2 class="text-3xl font-bold text-emerald-400 ">
      Introduction to Unreal Engine
    </h2>

    <div class="mt-2 grid gap-4 md:grid-cols-2">

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 1: Introduction to Unreal Engine
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Epic Games and Unreal Engine
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Installing the Epic Games launcher
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Unreal Engine versions and Installation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Choosing the right project template
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Unreal project folder structure
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 2: UI Layout & Navigation
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Unreal Engine interface breakdown
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Navigating the viewport
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Customizing workspace layout
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Accessing the content browser
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Transformation tools
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 3: Creating & Managing Levels
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Creating new levels
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Level templates
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Environment light mixer
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Quick access addition and place actors tab
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Structuring & organizing levels
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 4: Importing Assets
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Online 3D marketplaces
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            3D asset types and file formats
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Importing assets to Unreal Engine
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Troubleshooting
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Organizing imported assets and naming convention
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 5: Lighting Setup
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Basic light properties
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Types of lights
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Ray tracing, Path tracing and Lumen
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Lighting the environment
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Emissive objects
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 6: Level Setup
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Creating a landscape
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Adding imported assets
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding scale
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Introduction to foliage
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Level design
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 7: Cinematics
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Sequencer overview
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Creating a Level Sequence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Camera actors and Camera movement basics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Keyframing fundamentals
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Simple animations and Camera cuts
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Previewing cinematics
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 8: Rendering
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Rendering basics overview
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Viewport vs final render
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Movie Render Queue introduction
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Render settings basics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Resolution and aspect ratio
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Output formats
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Simple render optimization
          </li>
        </ul>
      </div>

    </div>
    </div>
  </section>
    `
  },

  // 15. Unreal Engine Foundation
  {
    slug: "unreal-engine-foundation",
    title: "Unreal Engine Foundation",
    description: "A comprehensive program covering Unreal Engine from basics to advanced topics including materials, Niagara particles, Blueprints, VR walkthrough, and cinematics.",
    months: "2–6 Months",
    hours: "60",
    projects: "1 Capstone",
    price: {

      offer: 15000
    },
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "/images/course-image/Unreal-Engine-Foundation.webp",
    brochure: "/brochures/unreal-engine-foundation.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">
<div class="bg-slate-100 p-8">
    <h2 class="text-3xl font-bold text-emerald-400">
      Unreal Engine Foundation
    </h2>

    <div class="mt-2 grid gap-4 md:grid-cols-2">

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 1: Introduction to Unreal Engine
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Epic Games and Unreal Engine
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Installing the Epic Games launcher
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Unreal Engine versions and Installation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Choosing the right project template
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Unreal project folder structure
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 2: UI Layout & Navigation
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Unreal Engine interface breakdown
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Navigating the viewport
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Customizing workspace layout
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Accessing the content browser
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Transformation tools
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 3: Creating & Managing Levels
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Creating new levels
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Level templates
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Environment light mixer
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Quick access addition and place actors tab
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Structuring & organizing levels
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 4: Materials and Textures
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Introduction to material graph editor
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Importing textures and masks
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Introduction to UVs
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Time node and simple animations
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Material instances
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 5: Importing Assets
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Online 3D marketplaces
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            3D asset types and file formats
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Importing assets to Unreal Engine
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Troubleshooting
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Organizing imported assets and naming convention
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 6: Static Meshes and Skeletal Meshes
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Vertices, Triangles and Quads
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Applying materials to static meshes
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Setting up LODs
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding bones and armature
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Skeletal meshes
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 7: Lighting Setup
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Light properties and rendering lights
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Types of lights
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding PBL
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Lighting environment using PBL
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Post Process
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 8: Landscape System
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Light properties and rendering lights
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Types of lights
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding PBL
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Lighting environment using PBL
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Post Process
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 9: Foliage and Environment Optimization
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Importing foliage assets
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding instances
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Introduction to the foliage tab
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Landscape grass types
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Adding foliage in level
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 10: Niagara Particle System
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding Niagara systems and emitters
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Life cycle stages and modules
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Applying forces and texture sampling
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Triggering particle system based on event handling
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 11: Introduction to Blueprints
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Navigating the blueprint UI
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding variables & conditional statements
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding construction script
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Functions and event handling
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Inter and intra blueprint communication
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 12: Understanding Actors and Components
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Implementing meshes
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Animation using timeline node
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Interacting with triggers and collision
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Spawning actors in the level
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 13: Event-Driven Logic
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding event driven inputs
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Creating custom input events and key binds
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Implementing virtual joysticks for Android and iOS
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Understanding input events for different platforms
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 14: VR Walkthrough
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Integration of virtual world into VR device
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Implementing locomotion setup
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Creating interactive objects and environment
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 15: Cinematics
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Sequencer overview
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Creating a Level Sequence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Camera actors and Camera movement basics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Keyframing fundamentals
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Simple animations and Camera cuts
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Previewing cinematics
          </li>
        </ul>
      </div>

      <div class="p-5">
        <h3 class="text-lg font-bold ">
          Module 16: Rendering
        </h3>
        <ul class="mt-3 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Rendering basics overview
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Viewport vs final render
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Movie Render Queue introduction
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Render settings basics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Resolution and aspect ratio
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Output formats
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Simple render optimization
          </li>
        </ul>
      </div>

    </div>
        </div>
  </section>
    `
  },

  {
    slug: "mechatronics-systems-engineer",
    title: "Mechatronics Systems Engineer - Global and Industry Level Finishing School",
    description: "An Advanced Industry Diploma program for mechatronics systems engineering with 80 contact hours covering control systems, sensors, PID, motors, and system integration.",
    months: "80 Hours (Blended)",
    category: "Mechanical & Mechatronics & Allied Streams",
    hours: "80",
    projects: "1 Capstone",

    recommended: true,
    image: "/images/course-image/Mechatronics-Systems-Engineer---Global-and-Industry-Level-Finishing-School.webp",
    brochure: "/brochures/mechatronics-systems-engineer-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Mechatronics Systems Engineer — Global and Industry Level Finishing School
        </h2>
      </div>

      <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
        Specialise · Lead · Deliver
      </p>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">80</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Total Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">40</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">15</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Evaluation</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">25</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Hours Self Learning</p>
      </div>
    </div>
  </div>

  <!-- PROGRAM INFORMATION -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">Program Information</h3>

    <div class="bg-white p-5">
      <div class="space-y-3 text-sm text-slate-700">
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-900">Learning Outcome</p>
          <p class="mt-1">Design and tune control systems under realistic noise and latency.</p>
          <p>Integrate mechanical, electrical, and embedded components under multi-constraint environments.</p>
          <p>Measure, debug, and iterate based on clear performance metrics.</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-900">Format</p>
          <p class="mt-1">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-900">Target Audience</p>
          <p class="mt-1">Intermediate programmers seeking industry-ready skills</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-900">Prerequisites</p>
          <p class="mt-1">Basic Python syntax, introductory programming</p>
        </div>
      </div>
    </div>
  </div>

  <!-- PROFESSIONAL CERTIFICATION -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">Professional Certification</h3>
    <div class="bg-white p-5">
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Product and Industrial Design: SOLIDWORKS Essential Training
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Product and Industrial Design: Composite Design and Manufacturing, Validation and Production
        </li>
      </ul>
    </div>
  </div>

  <!-- PROGRAM STRUCTURE -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="text-lg font-bold text-slate-900">
      Program Structure <span class="text-sm font-normal text-slate-500">(35 Hours Guided)</span>
    </h3>

    <div class="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">

      <!-- MODULE 1 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 1: Signals, Systems &amp; Perception (6 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Recover truth from corrupted signals, not just compute transforms.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>System response, LTI concepts</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Frequency response, filtering</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Intro to sensor fusion (IMU + encoder)</li>
            </ul>
          </div>

          <div class="bg-white p-4 text-center">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor</p>
            <p class="mt-1 font-mono text-sm text-slate-800">y(t) = x(t) ∗ h(t)</p>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: Sensor Lies Lab</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Take IMU + encoder data with induced noise and drift.</li>
              <li>Design low-pass, complementary, or Kalman-style filters.</li>
              <li>Reconstruct usable pose/velocity from corrupted data.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <p class="text-sm">Random spikes, step offsets, drift, bias shift.</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Mean absolute error vs ground truth (pose, velocity)</li>
              <li>Root-mean-squared (RMS) error over time</li>
              <li>Filter lag vs. noise rejection trade-off (qualitative + plot-based)</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">Drone IMU stabilization, EV battery-state sensing, motion-capture reliability.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 2 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 2: Control Systems Under Reality (7 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Move from textbook control to tuning under delay, noise, and instability.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>PID basics, feedforward, integrator anti-windup</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Stability margins (gain/phase), Bode intro</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Real-time control concept: sampling rate vs loop latency</li>
            </ul>
          </div>

          <div class="bg-white p-4 text-center">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor</p>
            <p class="mt-1 font-mono text-sm text-slate-800">G(s) = Y(s) / U(s)</p>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: The Unstable Drone</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Tune a simulated drone pitch/altitude controller.</li>
              <li>Implement constraints on maximum gain and minimum damping.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <ul class="space-y-0.5 text-sm">
              <li>Simulated sensor delay (50-100 ms latency)</li>
              <li>Quantization and stochastic noise on feedback</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Settling time (5% or 2% error)</li>
              <li>Maximum overshoot (%)</li>
              <li>Maximum sustained oscillation amplitude before stabilization</li>
              <li>Stability "dwell time" under perturbations</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">Drone flight controllers, aircraft pitch/roll loops, ESC-level motor control.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 3 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 3: Structures &amp; Materials Under Load (5 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Design for fatigue, reliability, and "survival," not just ultimate strength.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Stress-strain basics, factor of safety</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Fatigue limits, cyclic loading</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Vibration and modal behavior (conceptual)</li>
            </ul>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: Break the Frame</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Design a UAV arm / robot chassis to meet stiffness targets and mass budget.</li>
              <li>Fabricate or 3D-print depending on lab access.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <p class="text-sm">Incremental load steps until failure, induced vibration cycling (shaker or actuator).</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Failure load (N) and failure mode (buckling vs fracture)</li>
              <li>Mass-to-stiffness ratio (Stiffness / Mass)</li>
              <li>Number of cycles to failure at 50% load</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">UAV frame fatigue, EV sub-frame durability, robotic arm repeatability.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 4 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 4: Motors, Rotor Dynamics &amp; Energy (7 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Treat motors as energy systems, not just torque sources.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Torque-speed curves, efficiency</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Rotor dynamics: unbalance, gyroscopic effects intro</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Power loss, heating, thermal limits</li>
            </ul>
          </div>

          <div class="bg-white p-4 text-center">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor</p>
            <p class="mt-1 font-mono text-sm text-slate-800">T = J (dω/dt)</p>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: Motor Under Stress</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Characterise a BLDC or brushed DC motor under variable load.</li>
              <li>Measure torque-speed and efficiency curves.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <p class="text-sm">Imbalance on the rotor, step-load transients, thermal overload (time-limited).</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Peak efficiency at nominal load (%)</li>
              <li>Efficiency spread across load (plot + summary)</li>
              <li>Stable operating window (rpm range without vibration failure)</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">EV drivetrain efficiency, drone propulsion units, industrial actuators.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 5 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 5: Electronics &amp; Embedded Intelligence (6 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Build real-time "nervous systems," not just blink LEDs.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Embedded control loop structure</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>PWM, ADC, interrupts, timing, watchdogs</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Real-time scheduling concepts (soft real-time)</li>
            </ul>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: Controller Under Deadline</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <p class="text-sm">Implement a closed-loop motor or actuator control at 500-1000 Hz, meeting hard timing constraints (e.g., 1 ms loop time).</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <p class="text-sm">Artificial CPU-load (logging, background tasks), interrupt collisions, dropped ticks.</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Loop timing jitter (standard deviation of loop time)</li>
              <li>Maximum deviation of control performance under load (e.g., motor overshoot)</li>
              <li>Percentage of "on-time" vs "missed" cycles</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">ESCs in drones, EV motor controllers, industrial servo drives.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 6 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 6: System Integration War Room (4 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Force students to integrate everything under constraints and evaluate "survivability."</p>

        <div class="mt-3 space-y-3">

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Capstone: "Build a Surviving System"</p>
            <p class="mt-1 text-sm">Students choose one:</p>
            <ul class="space-y-0.5 text-sm">
              <li>Self-balancing robot</li>
              <li>Drone stabilization rig (2-axis testbed)</li>
              <li>Simulated EV motor control + load interface</li>
            </ul>
          </div>

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Constraints</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Power budget (e.g., 12V, 5A limit)</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Noisy sensors (IMU + encoders, synthetic noise)</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Mechanical imperfections (unbalanced rotors, gear backlash)</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Limited code/memory footprint (e.g., no heavy-ML libraries)</li>
            </ul>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Evaluation Metrics (Rubric-Style)</p>
            <ul class="mt-1.5 space-y-1 text-sm">
              <li>Functional Success: Does the system achieve its primary objective (balancing, stabilizing, tracking) for ≥ 5 minutes?</li>
              <li>Stability Duration: Time until failure or degradation beyond usable thresholds.</li>
              <li>Efficiency: Energy used per unit task (e.g., joules per degree of rotation or per 10 seconds of balancing).</li>
              <li>Failure Mode Analysis: Did it fail due to control, power, hardware, or software?</li>
              <li>Iteration Quality: Number of documented design changes and measured improvement in metrics.</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">Tools & Technologies</h3>
    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">SOLIDWORKS</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">MATLAB / Simulink</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Embedded C / Arduino</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Sensor Fusion Kits (IMU + Encoder)</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">PID Tuning &amp; Control Rigs</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">3D Printing / Fabrication</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">
    <div class="bg-slate-100 p-6 md:p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">Capstone</p>
      <h4 class="mt-1.5 text-xl font-bold text-slate-900">Build a Surviving System</h4>
      <p class="mt-2 text-sm text-slate-700">
        Self-balancing robot, drone stabilization rig, or simulated EV motor control + load interface — built and evaluated under real power, sensor, and mechanical constraints.
      </p>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">Career Outcomes</h3>
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Mechatronics Systems Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Robotics Controls Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Embedded Systems Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automation & Robotics Associate
        </li>
      </ul>
    </div>
  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">Learning Experience</h3>
    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },


  // 17. SCALEBridge Aero Boot Camp (IM1 & IM2)
  {
    slug: "scalebridge-aero-boot-camp-im1-im2",
    title: "SCALEBridge Aero Boot Camp (IM1 & IM2)",
    description: "A rigorous 4-6 week intensive program in Aerospace Design, Analysis & Simulation powered by SonStar 3DX, with digital prototyping and live capstone projects.",
    months: "1.5 Months",
    hours: "80-120",
    category: "Mechanical & Mechatronics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/SCALEBridge-Aero-Boot-Camp-(IM1-&-IM2).webp",
    brochure: "/brochures/scalebridge-aero-boot-camp-im1-im2.pdf",
    price: {
      original: null,
      offer: null,
      options: [
        { duration: "4 Weeks", price: 10000 },
        { duration: "6 Weeks", price: 15000 }
      ]
    },
    features: {
      mentorship: true,
      careerSupport: true,

    },
    brochureContent: `
<section class="space-y-6">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-8">
    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          70 Years of Engineering Education • Now in Bangalore!
        </p>
        <h2 class="mt-2 text-3xl font-bold">
          SCALEBridge Aero Boot Camp (IM1 & IM2)
        </h2>
      </div>
      <p class="text-sm font-semibold uppercase tracking-widest text-slate-300">
        Industry Model · Now Enrolling
      </p>
    </div>

    <p class="text-sm text-slate-700 mb-6">
      Step into the future of aerospace with our rigorous 4 and 6-week intensive programmes in Aerospace Design, Analysis &amp; Simulation. Built for engineers, faculty, and industry professionals, these courses are designed to close the gap between academia and industry.
    </p>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div class="p-4 text-center bg-white">
        <p class="text-3xl font-bold text-emerald-400">1,000+</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Trained Engineers (Tamil Nadu)</p>
      </div>
      <div class="p-4 text-center bg-white">
        <p class="text-3xl font-bold text-emerald-400">100+</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Placed in Global OEM Companies</p>
      </div>
      <div class="p-4 text-center bg-white">
        <p class="text-3xl font-bold text-emerald-400">4-6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Weeks</p>
      </div>
    </div>

    <p class="mt-8 font-bold text-slate-900">Built for one reason: Your seat at a global OEM.</p>
    <p class="text-sm text-slate-600">Powered by SonStar 3DX &amp; Unreal Engine</p>
  </div>

  <!-- YOUR AEROSPACE CAREER STARTS HERE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-2 text-2xl font-bold text-slate-900">Your Aerospace Career Starts Here</h3>
    <div class="rounded-2xl bg-slate-50 p-6">
      <p class="text-sm text-slate-700">
        Designed for freshers, passed-out engineers, faculty, and corporate trainees, this programme delivers real-world exposure through the SonStar 3DX platform — from digital prototyping to live capstone projects.
      </p>
    </div>
  </div>

  <!-- PROGRAM FEATURES & HIGHLIGHTS -->
  <div class="px-8 bg-slate-100 ">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Program Features &amp; Highlights</h3>
    <div class="rounded-2xl bg-slate-50 p-6">
      <p class="text-sm text-slate-700">
        Both tracks feature industry-oriented live projects and comprehensive CAD / CAE integration on SonStar 3DX, alongside 15 Hours of Aerospace Theory.
      </p>
    </div>
  </div>

  <!-- PROGRAM TRACKS -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Program Tracks</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- STANDARD TRACK -->
      <div>
        <p class="text-base font-bold">Standard Track (4-Weeks)</p>
        <div class="mt-4 flex gap-3">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold t">01</span>
          <div class="flex-1 rounded-lg p-4 t">
            <p class="text-xs font-bold uppercase tracking-wider">Includes:</p>
            <ul class="mt-1 space-y-0.5 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 text-sm leading-tight">✓</span>
                75 Hours of Digital Prototyping Lab
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 text-sm leading-tight">✓</span>
                5 Hours of Soft Skills Training
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ADVANCED TRACK -->
      <div>
        <p class="text-base font-bold text-indigo-950">Advanced Track (6-Weeks)</p>
        <div class="mt-4 flex gap-3">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
          <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
            <p class="text-xs font-bold uppercase tracking-wider">Includes:</p>
            <ul class="mt-1 space-y-0.5 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 text-sm leading-tight">✓</span>
                105 Hours of Digital Prototyping Lab
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 text-sm leading-tight">✓</span>
                10 Hours of Soft Skills Training
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

</section>
    `
  },

  // 17. SCALEBridge Aero Boot Camp (AMI & AM2)
  {
    slug: "scalebridge-aero-boot-camp-ami-am2",
    title: "SCALEBridge Aero Boot Camp (AMI & AM2)",
    description: "Step into the future of aerospace with our intensive training in Aerospace Design, Analysis, Manufacturing, and Simulation using the SonaStar 3DX Platform. Built to bridge the gap between academic knowledge and real industry needs, this program equips you with modern engineering tools through two flexible tracks.",
    months: "1.5 Months",
    hours: "80-120",
    category: "Mechanical & Mechatronics & Allied Streams",
    projects: "1 Capstone",
    price: {
      original: null,
      offer: null,
      options: [
        { duration: "4 Weeks", price: 10000 },
        { duration: "6 Weeks", price: 15000 }
      ]
    },
    recommended: false,
    image: "/images/course-image/SCALEBridge-Aero-Boot-Camp-(AMI-&-AM2).webp",
    brochure: "/brochures/scalebridge-aero-boot-camp-ami-am2.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-6">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-8">
    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          70 Years of Engineering Education • Now in Bangalore!
        </p>
        <h2 class="mt-2 text-3xl font-bold">
          SCALEBridge Aero Boot Camp (AMI & AM2)
        </h2>
      </div>
      <p class="text-sm font-semibold uppercase tracking-widest text-slate-300">
        Industry Model • Now Enrolling
      </p>
    </div>

    <p class="text-sm text-slate-700 mb-6">
      Step into the future of aerospace with our intensive training in Aerospace Design, Analysis, Manufacturing, and Simulation using the SonaStar 3DX Platform. Built to bridge the gap between academic knowledge and real industry needs, this program equips you with modern engineering tools through two flexible tracks.
    </p>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div class="p-4 text-center bg-white">
        <p class="text-3xl font-bold text-emerald-400">1,000+</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Trained Engineers (Tamil Nadu)</p>
      </div>
      <div class="p-4 text-center bg-white">
        <p class="text-3xl font-bold text-emerald-400">100+</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Placed in Global OEM Companies</p>
      </div>
      <div class="p-4 text-center bg-white">
        <p class="text-3xl font-bold text-emerald-400">4-6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Weeks</p>
      </div>
    </div>

    <p class="mt-8 font-bold text-slate-900">Built for one reason: Your seat at a global OEM.</p>
    <p class="text-sm text-slate-600">Powered by SonaStar 3DX &amp; Unreal Engine</p>
  </div>

  <!-- YOUR AEROSPACE CAREER STARTS HERE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Your Aerospace Career Starts Here</h3>
    <div class="rounded-2xl bg-slate-50 p-6">
      <p class="text-sm text-slate-700">
        Designed for freshers, passed-out engineers, faculty, and corporate trainees, this programme delivers real-world exposure through the SonaStar 3DX platform — from digital prototyping to live capstone projects.
      </p>
    </div>
  </div>

  <!-- PROGRAM FEATURES & HIGHLIGHTS -->
  <div class="px-8 bg-slate-100 ">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Program Features &amp; Highlights</h3>
    <div class="rounded-2xl bg-slate-50 p-6">
      <p class="text-sm text-slate-700">
        Both tracks feature industry-oriented live projects and comprehensive CAD / CAE Integration on SonaStar 3DX alongside 15 Hours of Aerospace Theory.
      </p>
    </div>
  </div>

  <!-- PROGRAM TRACKS -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Program Tracks</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- STANDARD TRACK -->
      <div>
        <p class="text-base font-bold">Standard Track (4-Weeks)</p>
        <div class="mt-4 flex gap-3">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold">01</span>
          <div class="flex-1 rounded-lg p-4">
            <p class="text-xs font-bold uppercase tracking-wider">Includes:</p>
            <ul class="mt-1 space-y-0.5 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 text-sm leading-tight">✓</span>
                An accelerated path focused on core training in Aerospace Design
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 text-sm leading-tight">✓</span>
                Analysis, and Simulation
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ADVANCED TRACK -->
      <div>
        <p class="text-base font-bold text-indigo-950">Advanced Track (6-Weeks)</p>
        <div class="mt-4 flex gap-3">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold">01</span>
          <div class="flex-1 rounded-lg bg-indigo-950 p-4">
            <p class="text-xs font-bold uppercase tracking-wider">Includes:</p>
            <ul class="mt-1 space-y-0.5 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 text-sm leading-tight">✓</span>
                An expanded, deep-dive curriculum offering comprehensive theoretical and practical experience across Design, Analysis
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 text-sm leading-tight">✓</span>
                Manufacturing, and Simulation
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

</section>
    `
  },

  // 19. Electronics & Telecommunication Systems Engineering Program
  {
    slug: "electronics-telecommunication-systems-engineer",
    title: "Electronics & Telecommunication Systems Engineer",
    description: "An Advanced Industry Diploma program for electronics & telecommunication systems engineering with 80 contact hours covering embedded systems, RTL/semiconductor design, physical chip implementation, and communication networks.",
    months: "80 Hours (Blended)",
    hours: "80",
    category: "Electronics Communication & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Electronics-&-Telecommunication-Systems-Engineer.webp",
    brochure: "/brochures/electronics-telecommunication-systems-engineer-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Electronics & Telecommunication Systems Engineer
        </h2>
      </div>

      <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
        Specialise · Lead · Deliver
      </p>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">80</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Total Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">40</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">15</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Evaluation</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">25</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Hours Self Learning</p>
      </div>
    </div>
  </div>

  <!-- PROGRAM INFORMATION -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">Program Information</h3>

    <div class="bg-white p-5">
      <div class="space-y-3 text-sm text-slate-700">
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-900">Learning Outcome</p>
          <p class="mt-1">Design and debug embedded and communication systems under realistic signal and timing constraints.</p>
          <p>Integrate electronic, embedded, communication, and semiconductor subsystems under multi-constraint environments.</p>
          <p>Implement RTL, physical design, and verification workflows using industry-standard EDA tools.</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-900">Format</p>
          <p class="mt-1">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-900">Target Audience</p>
          <p class="mt-1">Intermediate programmers seeking industry-ready skills</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-900">Prerequisites</p>
          <p class="mt-1">Basic Python syntax, introductory programming</p>
        </div>
      </div>
    </div>
  </div>

  <!-- PROFESSIONAL CERTIFICATION -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">Professional Certification</h3>
    <div class="bg-white p-5">
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          PLC Industrial Controls and Programming
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          RTL To GDSII: Installation and Tools Hands on Experience
        </li>
      </ul>
    </div>
  </div>

  <!-- PROGRAM STRUCTURE -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="text-lg font-bold text-slate-900">
      Program Structure <span class="text-sm font-normal text-slate-500">(30 Hours Guided)</span>
    </h3>

    <div class="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">

      <!-- MODULE 1 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 1: Signals, Systems &amp; Communication Perception (6 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Recover truth from corrupted communication and electronic signals, not just compute transforms.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Signal response and LTI concepts</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Frequency response and filtering</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Sampling and quantization</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Intro to communication noise and signal recovery</li>
            </ul>
          </div>

          <div class="bg-white p-4 text-center">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor</p>
            <p class="mt-1 font-mono text-sm text-slate-800">y(t) = x(t) ∗ h(t)</p>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: Sensor Lies Lab</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Take communication signals with induced noise and distortion.</li>
              <li>Design low-pass and digital filtering approaches.</li>
              <li>Reconstruct usable information from corrupted signals.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <p class="text-sm">Random spikes, frequency interference, signal attenuation, drift and packet corruption.</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Signal-to-Noise Ratio (SNR)</li>
              <li>Root-mean-squared (RMS) error</li>
              <li>Bit Error Rate (BER)</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">Wireless communication systems, telecom base stations, satellite telemetry, IoT communication reliability.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 2 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 2: Embedded Systems &amp; Real-Time Electronics (7 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Move from textbook embedded systems to real-time electronic system engineering under delay, noise, and instability.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Embedded control loop structure</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>PWM, ADC, interrupts, timing, watchdogs</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>UART, SPI, I2C communication</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Real-time scheduling concepts</li>
            </ul>
          </div>

          <div class="bg-white p-4 text-center">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor</p>
            <p class="mt-1 font-mono text-sm text-slate-800">T = 1 / f</p>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: The Unstable Drone</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Implement a closed-loop embedded control system.</li>
              <li>Meet hard timing constraints.</li>
              <li>Integrate sensors and communication modules.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <p class="text-sm">Artificial CPU load, interrupt collisions, timing jitter, communication packet loss.</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Loop timing jitter</li>
              <li>Communication latency</li>
              <li>Maximum deviation under load</li>
              <li>Percentage of "on-time" vs "missed" cycles</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">Embedded IoT systems, automotive ECUs, telecom controllers, industrial automation systems.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 3 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 3: Semiconductor Logic &amp; RTL Engineering (5 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Design digital systems from RTL abstraction to synthesized hardware implementation.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>CMOS fundamentals</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Verilog HDL basics</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>RTL abstraction and logic design</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Functional simulation and synthesis</li>
            </ul>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: Break the Frame</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Design RTL modules in Verilog.</li>
              <li>Simulate logic functionality.</li>
              <li>Generate synthesized netlists.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <p class="text-sm">Timing violations, clock synchronization issues, logic mismatches.</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Functional correctness</li>
              <li>Timing closure</li>
              <li>Area utilization</li>
              <li>Logic efficiency</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">FPGA systems, ASIC design, processor subsystems, consumer electronics chips.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 4 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 4: Physical Design &amp; Chip Implementation (7 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Treat semiconductor implementation as a complete physical engineering workflow, not just logic design.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Floorplanning fundamentals</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Placement and Routing (PnR)</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Clock Tree Synthesis (CTS)</li>
            </ul>
          </div>

          <div class="bg-white p-4 text-center">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor</p>
            <p class="mt-1 font-mono text-sm text-slate-800">T = J (dω/dt)</p>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: Motor Under Stress</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Create floorplans and placement layouts.</li>
              <li>Perform routing and timing analysis.</li>
              <li>Validate DRC and LVS compliance.</li>
              <li>Generate GDSII outputs.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <p class="text-sm">Routing congestion, clock skew, DRC violations, timing failures.</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Area utilization</li>
              <li>Routing congestion score</li>
              <li>DRC violation count</li>
              <li>Timing performance</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">Semiconductor tapeout workflows, AI accelerator hardware, VLSI physical design, processor implementation pipelines.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 5 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 5: Communication Networks &amp; Telecom Systems (6 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Build intelligent communication systems under bandwidth, latency, and reliability constraints.</p>

        <div class="mt-3 space-y-3">

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Spine</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Networking fundamentals</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Cellular communication basics</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Optical communication introduction</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Communication protocol stacks</li>
            </ul>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Experiential Lab: Controller Under Deadline</p>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Task</p>
            <ul class="space-y-0.5 text-sm">
              <li>Configure communication nodes.</li>
              <li>Analyze network traffic.</li>
              <li>Optimize throughput and latency.</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Failure Injection</p>
            <ul class="space-y-0.5 text-sm">
              <li>Packet delay</li>
              <li>Congestion</li>
              <li>Signal interference</li>
              <li>Bandwidth throttling</li>
            </ul>
            <p class="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Metrics</p>
            <ul class="space-y-0.5 text-sm">
              <li>Network throughput</li>
              <li>Packet delivery ratio</li>
              <li>Communication latency</li>
              <li>Reliability under load</li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping</p>
            <p class="mt-1 text-sm text-slate-700">5G systems, telecom switching infrastructure, satellite communication, smart city networks.</p>
          </div>

        </div>
      </div>

      <!-- MODULE 6 -->
      <div>
        <p class="text-base font-bold text-slate-900">Module 6: System Integration War Room (4 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Force students to integrate electronics, embedded systems, semiconductor workflows, and communication systems under constraints and evaluate "survivability."</p>

        <div class="mt-3 space-y-3">

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Capstone: "Build a Surviving System"</p>
            <p class="mt-1 text-sm">Students choose one:</p>
            <ul class="space-y-0.5 text-sm">
              <li>Smart IoT monitoring system</li>
              <li>Wireless telemetry node</li>
              <li>FPGA communication controller</li>
              <li>Embedded automation system</li>
            </ul>
          </div>

          <div class="bg-white p-4">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Constraints</p>
            <ul class="mt-1.5 space-y-1 text-sm text-slate-700">
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Power budget limits</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Noisy communication environments</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Hardware timing constraints</li>
              <li class="flex items-start gap-2"><span class="text-emerald-600">✓</span>Limited memory and compute footprint</li>
            </ul>
          </div>

          <div class="bg-slate-900 p-4 text-slate-100">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-400">Evaluation Metrics (Rubric-Style)</p>
            <ul class="mt-1.5 space-y-1 text-sm">
              <li>Functional Success: Does the system achieve its primary objective continuously under constraints?</li>
              <li>Stability Duration: Time until failure or degradation beyond usable thresholds.</li>
              <li>Efficiency: Energy usage per communication or processing task.</li>
              <li>Failure Mode Analysis: Did it fail due to communication, hardware, timing, or software issues?</li>
              <li>Iteration Quality: Number of documented design changes and measured improvement in metrics.</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">Tools & Technologies</h3>
    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Verilog HDL</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">EDA Tools (Synthesis, PnR, DRC/LVS)</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Embedded C / Microcontrollers</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">MATLAB / Simulink</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Communication Protocol Analyzers</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">PLC Industrial Controls</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">
    <div class="bg-slate-100 p-6 md:p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">Capstone</p>
      <h4 class="mt-1.5 text-xl font-bold text-slate-900">Build a Surviving System</h4>
      <p class="mt-2 text-sm text-slate-700">
        Smart IoT monitoring system, wireless telemetry node, FPGA communication controller, or embedded automation system — built and evaluated under real power, communication, and timing constraints.
      </p>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">Career Outcomes</h3>
      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Electronics & Telecommunication Systems Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Embedded Systems Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          RTL / Physical Design Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Communication Networks Engineer
        </li>
      </ul>
    </div>
  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">Learning Experience</h3>
    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },

  // Applied Statistics & Quantitative Business Analytics ICP
  {
    slug: "applied-statistics-quantitative-business-analytics-icp",
    title: "Applied Statistics & Quantitative Business Analytics (ICP)",
    description: "An Industry Certificate Program covering business statistics, descriptive statistics, probability, data distributions, correlation & regression, and hypothesis testing for business decisions.",
    months: "5 Days",
    hours: "15",
    price: {

      offer: 11999
    },
    projects: "1-3 Mini Project(s)",
    category: "Management, Analytics & Allied Streams",
    recommended: false,
    image: "/images/course-image/Applied-Statistics-&-Quantitative-Business-Analytics-(ICP).webp",
    brochure: "/brochures/applied-statistics-quantitative-business-analytics-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Business Statistics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Descriptive Statistics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Probability Concepts
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Distributions & Sampling
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Correlation & Regression Basics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Hypothesis Testing & Business Decisions
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data-Driven Enterprises
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI & ML Expansion
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automation & Analytics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analytical Talent Demand
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Foundational statistical understanding
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business data interpretation capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analytical thinking
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Probability and forecasting awareness
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Decision-making confidence using data
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // Applied Statistics & Quantitative Business Analytics IDP
  {
    slug: "applied-statistics-quantitative-business-analytics-idp",
    title: "Applied Statistics & Quantitative Business Analytics (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering business statistics, data visualization, probability, sampling & estimation, and hypothesis testing for business decision-making.",
    months: "~1–2 Months",
    hours: "30",
    price: {

      offer: 22999
    },
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/Applied-Statistics-&-Quantitative-Business-Analytics-(IDP).webp",
    brochure: "/brochures/applied-statistics-quantitative-business-analytics-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Foundations of Business Statistics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Summarization & Descriptive Statistics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Visualization & Statistical Reporting
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Probability for Business Analytics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Sampling & Estimation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Hypothesis Testing & Business Decision-Making
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data-Driven Business Models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI & ML Statistical Foundations
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Predictive Analytics growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence adoption
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to interpret business data statistically
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply probability and forecasting
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Conduct hypothesis testing
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analyse variable relationships
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Support ML projects
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // Applied Statistics & Quantitative Business Analytics AIDP
  {
    slug: "applied-statistics-quantitative-business-analytics-aidp",
    title: "Applied Statistics & Quantitative Business Analytics (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to become a data-driven decision-making specialist, covering statistical modelling, predictive analytics, and enterprise decision science.",
    months: "2–6 Months",
    hours: "60",
    price: {

      offer: 68999
    },
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Applied-Statistics-&-Quantitative-Business-Analytics-(AIDP).webp",
    brochure: "/brochures/applied-statistics-quantitative-business-analytics-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Applied Statistics and Quantitative Business Analytics
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Become a data-driven decision-making specialist.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Business Statistics
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Statistical Thinking
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Central Tendency & Dispersion
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Visualisation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Business Applications
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Statistical Analysis
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Probability Theory
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Confidence Intervals
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Hypothesis Testing
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Regression Fundamentals
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Statistical Modelling
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Predictive Analytics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Multivariate Analysis
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Time Series
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Forecasting Models
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Analytics & Decision Science
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Decision Analytics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Risk Analytics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Experimental Design
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            AI Model Evaluation
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Microsoft Excel</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Statistical Templates</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Forecasting Models</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Scenario Planning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Research Frameworks</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise Decision Intelligence Project
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Market Research Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Decision Science Associate
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Risk Analyst
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },

  // Enterprise Reporting & Automation with Excel & VBA ICP
  {
    slug: "enterprise-reporting-automation-excel-vba-icp",
    title: "Enterprise Reporting & Automation with Excel & VBA (ICP)",
    description: "An Industry Certificate Program covering business statistics, advanced Excel functions, data cleaning, pivot tables, dashboard development, and VBA automation basics.",
    months: "5 Days",
    price: {

      offer: 11999
    },
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1-3 Mini Project(s)",
    recommended: false,
    image: "/images/course-image/Enterprise-Reporting-&-Automation-with-Excel-&-VBA-(ICP).webp",
    brochure: "/brochures/enterprise-reporting-automation-excel-vba-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Business Statistics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Advanced Excel Functions
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Cleaning & Data Preparation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Pivot Tables & Analytical Reporting
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Dashboard Development
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              VBA & Automation Basics
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data-Driven Businesses
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Dashboarding Demand
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Workflow Automation (VBA)
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Excel Analytics Usage globally
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Practical Excel analytics capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Dashboard creation skills
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business reporting confidence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data cleaning & organisation skills; introductory VBA
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automation exposure
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analytical interpretation capability
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // Enterprise Reporting & Automation with Excel & VBA IDP
  {
    slug: "enterprise-reporting-automation-excel-vba-idp",
    title: "Enterprise Reporting & Automation with Excel & VBA (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering Excel for business analytics, data cleaning, pivot tables, dashboard design, and business analytics & performance monitoring.",
    months: "~1–2 Months",
    price: {

      offer: 22999
    },
    hours: "30",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/Enterprise-Reporting-&-Automation-with-Excel-&-VBA-(IDP).webp",
    brochure: "/brochures/enterprise-reporting-automation-excel-vba-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Excel for Business Analytics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Advanced Excel Functions
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Cleaning & Data Preparation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Pivot Tables & Advanced Reporting
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Dashboard Design & Visualization
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Business Analytics & Performance Monitoring
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Executive Business Dashboard
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Financial Performance Analytics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          HR Analytics Dashboard
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automated MIS Reporting System
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to build professional dashboards
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analyse large business datasets
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Automate workflows using VBA
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Create executive-level reports
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Design KPI monitoring systems
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // Enterprise Reporting & Automation with Excel & VBA AIDP
  {
    slug: "enterprise-reporting-automation-excel-vba-aidp",
    title: "Enterprise Reporting & Automation with Excel & VBA (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to become an advanced business analytics and automation specialist, covering VBA programming, dashboard design, and enterprise reporting.",
    months: "2–6 Months",
    hours: "60",
    price: {

      offer: 68999
    },
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Enterprise-Reporting-&-Automation-with-Excel-&-VBA-(AIDP).webp",
    brochure: "/brochures/enterprise-reporting-automation-excel-vba-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Enterprise Reporting and Automation with Excel and VBA
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Become an advanced business analytics and automation specialist.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Excel Analytics
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Management
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Formula Development
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Pivot Tables & Charts
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Reporting Fundamentals
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Business Analytics
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Advanced Functions
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            KPI Tracking
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Dashboard Design
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Performance Analysis
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced VBA & Automation
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            VBA Programming
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            User Forms
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Automated Reports
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Workflow Automation
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Reporting & Decision Intelligence
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            MIS Architecture
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Financial Modelling
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Executive Dashboards
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Strategic Decision Support
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Microsoft Excel</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Pivot Tables & Charts</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">VBA & Macros</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Interactive Dashboards</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">MIS Frameworks</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise BI and Automation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          MIS Manager
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Financial Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Excel Automation Specialist
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },


  // Enterprise Business Intelligence with Microsoft Power BI ICP
  {
    slug: "enterprise-business-intelligence-power-bi-icp",
    title: "Enterprise Business Intelligence with Microsoft Power BI (ICP)",
    description: "An Industry Certificate Program covering business intelligence & Power BI fundamentals, data import & preparation, data modeling, dashboard development, and interactive reporting & storytelling.",
    months: "5 Days",
    price: {

      offer: 11999
    },
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1-3 Mini Project(s)",
    recommended: false,
    image: "/images/course-image/Enterprise-Business-Intelligence-with-Microsoft-Power-BI-(ICP).webp",
    brochure: "/brochures/enterprise-business-intelligence-power-bi-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Business Intelligence & Power BI
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Import & Data Preparation
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Modeling Fundamentals
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Dashboard Development & Visualization
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Interactive Reporting & Storytelling
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Publishing & Business Applications
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Visualization Adoption
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Real-Time Reporting replacing static reports
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Enterprise Analytics Expansion
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Power BI global adoption growth
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Practical dashboard development capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business reporting skills
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data visualization understanding
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          KPI interpretation capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Interactive reporting exposure
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business storytelling confidence
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // Enterprise Business Intelligence with Microsoft Power BI IDP
  {
    slug: "enterprise-business-intelligence-power-bi-idp",
    title: "Enterprise Business Intelligence with Microsoft Power BI (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering Power BI fundamentals, data preparation using Power Query, data modeling, dashboard design, and DAX fundamentals.",
    months: "~1–2 Months",
    price: {

      offer: 22999
    },
    hours: "30",
    projects: "1 Capstone",
    category: "Management, Analytics & Allied Streams",
    recommended: false,
    image: "/images/course-image/Enterprise-Business-Intelligence-with-Microsoft-Power-BI-(IDP).webp",
    brochure: "/brochures/enterprise-business-intelligence-power-bi-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Business Intelligence
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Power BI Fundamentals
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Preparation using Power Query
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Modeling
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Visualization & Dashboard Design
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              DAX Fundamentals
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Visualization Adoption
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Real-Time Reporting replacing static reports
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Enterprise Analytics Expansion
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to build professional Power BI dashboards
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Transform and prepare business data
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Create interactive reports; design KPI monitoring systems
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply DAX for business calculations
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // Enterprise Business Intelligence with Microsoft Power BI AIDP
  {
    slug: "enterprise-business-intelligence-power-bi-aidp",
    title: "Enterprise Business Intelligence with Microsoft Power BI (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to become a business intelligence & data visualisation expert, covering Power Query, DAX, KPI dashboard design, and enterprise BI governance.",
    months: "2–6 Months",
    hours: "60",
    price: {

      offer: 68999
    },
    projects: "1 Capstone",
    category: "Management, Analytics & Allied Streams",
    recommended: true,
    image: "/images/course-image/Enterprise-Business-Intelligence-with-Microsoft-Power-BI-(AIDP).webp",
    brochure: "/brochures/enterprise-business-intelligence-power-bi-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Enterprise Business Intelligence with Microsoft Power BI
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Become a business intelligence & data visualisation expert.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Business Intelligence
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Power BI Environment
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Import & Connectivity
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Dashboard Fundamentals
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Visualisation Principles
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Power BI Development
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Power Query
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Modelling
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            DAX Fundamentals
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            KPI Dashboard Design
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Analytics & Reporting
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Advanced DAX
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Time Intelligence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Dynamic Dashboards
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Data Storytelling
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Business Intelligence
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Enterprise Data Architecture
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Performance Management
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            BI Governance
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Decision Intelligence
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Microsoft Power BI</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Power Query</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">DAX</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Interactive Dashboards</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Excel · CSV · SQL</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise BI Solution
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Power BI Developer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Intelligence Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Visualisation Specialist
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          MIS Analyst
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },

  // Business Communication & Executive Facilitation ICP
  {
    slug: "business-communication-executive-facilitation-icp",
    title: "Business Communication & Executive Facilitation (ICP)",
    description: "An Industry Certificate Program covering structured thinking, professional communication, public speaking, business storytelling & persuasion, and executive presence & leadership communication.",
    months: "5 Days",
    price: {

      offer: 11999
    },
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1-3 Mini Project(s)",
    recommended: false,
    image: "/images/course-image/Business-Communication-&-Executive-Facilitation-(ICP).webp",
    brochure: "/brochures/business-communication-executive-facilitation-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Structured Thinking Foundations
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Professional Communication Skills
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Public Speaking & Presentation Skills
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Business Storytelling & Persuasion
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Workplace Communication & Collaboration
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Executive Presence & Leadership Communication
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership Communication Demand
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Collaborative Work Environments
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Presentation-Driven Workplaces
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Client & Stakeholder Engagement
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Executive Presence Importance for career growth
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Structured thinking capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Professional communication confidence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Public speaking exposure
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Executive presentation skills
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Persuasive communication understanding
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership communication awareness
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // Business Communication & Executive Facilitation IDP
  {
    slug: "business-communication-executive-facilitation-idp",
    title: "Business Communication & Executive Facilitation (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering clear thinking & communication, presentation skills & public speaking, business storytelling & persuasion, and executive presence development.",
    months: "~1–2 Months",
    hours: "30",
    price: {

      offer: 22999
    },
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/Business-Communication-&-Executive-Facilitation-(IDP).webp",
    brochure: "/brochures/business-communication-executive-facilitation-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Foundations of Clear Thinking & Communication
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Professional Communication Excellence
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Presentation Skills & Public Speaking
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Business Storytelling & Persuasion
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Executive Presence Development
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Workplace Communication & Stakeholder Management
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Hybrid Work communication clarity needs
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership Development communication as core competency
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Cross-Functional Collaboration
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Client-Facing Roles requiring persuasion
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to communicate ideas clearly and confidently
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Deliver impactful presentations
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Influence stakeholders professionally
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Handle difficult conversations
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build executive presence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply storytelling in business
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Lead workplace discussions
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Develop professional communication portfolio
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // Business Communication & Executive Facilitation AIDP
  {
    slug: "business-communication-executive-facilitation-aidp",
    title: "Business Communication & Executive Facilitation (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to master professional communication, executive presence & facilitation, covering structured thinking, storytelling, and enterprise leadership communication.",
    months: "2–6 Months",
    price: {

      offer: 68999
    },
    hours: "60",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Business-Communication-&-Executive-Facilitation-(AIDP).webp",
    brochure: "/brochures/business-communication-executive-facilitation-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Business Communication & Executive Facilitation
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Master professional communication, executive presence & facilitation.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Strategic Communication
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Structured Thinking
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Communication Standards
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Critical Thinking
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Self-Assessment
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Professional & Executive Communication
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Active Listening
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Presentation Mastery
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Executive Presence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Personal Branding
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Storytelling, Influence & Facilitation
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Business Storytelling
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Persuasion Frameworks
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Stakeholder Communication
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Workshop Facilitation
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Communication & Leadership
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Leadership Communication
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Crisis & Change Communication
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Difficult Conversations
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Strategic Messaging
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Structured Thinking Frameworks</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Business Presentation Models</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Executive Messaging Frameworks</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Narrative Design</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Facilitation Toolkits</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Communication Excellence Capstone
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Corporate Communication Specialist
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Learning & Development Facilitator
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Executive Communication Coach
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Team & Function Lead
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },

  // Workplace Wellbeing & Organisational Behaviour Design ICP
  {
    slug: "workplace-wellbeing-organisational-behaviour-design-icp",
    title: "Workplace Wellbeing & Organisational Behaviour Design (ICP)",
    description: "An Industry Certificate Program covering happiness engineering, emotional intelligence & self-awareness, productivity & sustainable performance, stress management & resilience, and workplace well-being.",
    months: "5 Days",
    price: {

      offer: 11999
    },
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1-3 Mini Project(s)",
    recommended: false,
    image: "/images/course-image/Workplace-Wellbeing-&-Organisational-Behaviour-Design-(ICP).webp",
    brochure: "/brochures/workplace-wellbeing-organisational-behaviour-design-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Leadership Identity & Self-Awareness
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Executive Presence (Gravitas, Communication, Appearance)
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Decision-Making Under Pressure (OODA Loop, Pre-mortem Analysis)
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership Talent Shortage
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Hybrid Work driving communication importance
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Transformation requiring strategic leadership
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Cross-Functional Collaboration
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Succession Planning as business priority
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Clear understanding of personal leadership style
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Improved executive presence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Stronger leadership communication
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Enhanced decision-making confidence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Strategic thinking awareness
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Increased professional credibility
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Structured leadership development roadmap
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // Workplace Wellbeing & Organisational Behaviour Design IDP
  {
    slug: "workplace-wellbeing-organisational-behaviour-design-idp",
    title: "Workplace Wellbeing & Organisational Behaviour Design (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering happiness engineering, emotional intelligence & self-awareness, productivity & sustainable performance, stress management & resilience, and workplace well-being.",
    months: "~1–2 Months",
    hours: "30",
    price: {

      offer: 22999
    },
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/Workplace-Wellbeing-&-Organisational-Behaviour-Design-(IDP).webp",
    brochure: "/brochures/workplace-wellbeing-organisational-behaviour-design-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Foundations of Leadership
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Self-Leadership & Emotional Intelligence
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Executive Presence & Professional Influence
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Strategic Thinking & Business Acumen
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Decision-Making & Problem Solving
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Leading High-Performance Teams
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership Talent Gap
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Digital Transformation requiring change management
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Hybrid Work Models requiring strong people leadership
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Workforce Evolution driving coaching demand
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to lead teams with confidence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply strategic thinking to business challenges
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build executive presence and influence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Make informed decisions under uncertainty
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Manage stakeholders; lead change initiatives
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Improve team performance and engagement
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // Workplace Wellbeing & Organisational Behaviour Design AIDP
  {
    slug: "workplace-wellbeing-organisational-behaviour-design-aidp",
    title: "Workplace Wellbeing & Organisational Behaviour Design (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to design a life of sustainable success, well-being & leadership, covering happiness science, emotional intelligence, peak performance, and organisational well-being.",
    months: "2–6 Months",
    hours: "60",
    price: {

      offer: 68999
    },
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Workplace-Wellbeing-&-Organisational-Behaviour-Design-(AIDP).webp",
    brochure: "/brochures/workplace-wellbeing-organisational-behaviour-design-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Workplace Wellbeing & Organisational Behaviour Design
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Design a life of sustainable success, well-being & leadership.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Happiness & Well-Being
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Happiness Science
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Positive Psychology
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Human Motivation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Purpose & Meaning
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Emotional Intelligence & Personal Effectiveness
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            EQ Frameworks
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Self-Regulation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Empathy Development
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Stress Management
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Productivity, Habits & Peak Performance
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Behavioural Science
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Habit Design
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Productivity Systems
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Performance Psychology
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Leadership, Well-Being & Human Flourishing
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Leadership Well-Being
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Organisational Happiness
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Psychological Safety
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Sustainable Success
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">PERMA & Well-being Frameworks</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">EQ Assessment Models</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Habit & Goal Systems</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Positive Leadership Frameworks</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Life Design Models</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Happiness Engineering Framework
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          People & Culture Associate
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Well-being Programme Lead
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Learning & Development Specialist
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Positive Leadership Coach
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },


  // Organisational Psychology & Strategic Influence ICP
  {
    slug: "organisational-psychology-strategic-influence-icp",
    title: "Organisational Psychology & Strategic Influence (ICP)",
    description: "An Industry Certificate Program covering organisational dynamics, mapping power & networks, visibility & reputation management, and navigating political situations.",
    months: "5 Days",
    price: {

      offer: 11999
    },
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1-3 Mini Project(s)",
    recommended: false,
    image: "/images/course-image/Organisational-Psychology-&-Strategic-Influence-(ICP).webp",
    brochure: "/brochures/organisational-psychology-strategic-influence-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Understanding Organisational Dynamics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Mapping Power & Networks
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Visibility & Reputation Management
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Navigating Political Situations
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Matrix Organisations requiring multi-stakeholder navigation
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Collaborative Work Models · Leadership Pipeline Development
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Cross-Functional Teams
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Visibility & Reputation impact on career
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Understanding of organisational power structures
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Stakeholder management capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Workplace influence awareness; professional visibility strategies
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Relationship-building skills
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ethical persuasion capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership readiness and organisational confidence
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // Organisational Psychology & Strategic Influence IDP
  {
    slug: "organisational-psychology-strategic-influence-idp",
    title: "Organisational Psychology & Strategic Influence (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering organisational dynamics, intelligence & organisational awareness, stakeholder management, professional visibility & personal brand, and influence & persuasion strategies.",
    months: "~1–2 Months",
    hours: "30",
    price: {

      offer: 22999
    },
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/Organisational-Psychology-&-Strategic-Influence-(IDP).webp",
    brochure: "/brochures/organisational-psychology-strategic-influence-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Understanding Organisational Dynamics
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Intelligence & Organisational Awareness
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Stakeholder Management
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Professional Visibility & Personal Brand
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Influence & Persuasion Strategies
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Communication for Influence
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Matrix Organisation complexity
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Cross-Functional Teams requiring influence over authority
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership Development prioritising political intelligence
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Understanding of organisational power dynamics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to build strategic stakeholder relationships
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ethical and effective influence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Improved workplace visibility
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Confident navigation of organisational challenges
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Professional conflict management
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // Organisational Psychology & Strategic Influence AIDP
  {
    slug: "organisational-psychology-strategic-influence-aidp",
    title: "Organisational Psychology & Strategic Influence (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to master organisational influence, leadership & strategic networking, covering organisational dynamics, relationship building, political intelligence, and leadership impact.",
    months: "2–6 Months",
    category: "Management, Analytics & Allied Streams",
    hours: "60",
    price: {

      offer: 68999
    },
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Organisational-Psychology-&-Strategic-Influence-(AIDP).webp",
    brochure: "/brochures/organisational-psychology-strategic-influence-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Organisational Psychology & Strategic Influence
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Master organisational influence, leadership & strategic networking.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Organisational Dynamics
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Organisational Culture
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Power Structures
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Informal Networks
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Professional Credibility
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Professional Influence & Relationship Building
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Stakeholder Identification
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Relationship Management
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Networking Strategies
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Trust Building
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Strategic Influence & Political Intelligence
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Political Intelligence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Organisational Mapping
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Negotiation Skills
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Executive Communication
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Leadership & Organisational Impact
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Leadership Presence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Change Leadership
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Strategic Stakeholder Management
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Driving Alignment
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Influence Mapping Frameworks</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Political Intelligence Models</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Executive Communication Frameworks</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Negotiation & Consensus Models</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Relationship Development Systems</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Organisational Influence Strategy
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          People & Org Development Associate
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Stakeholder / Programme Manager
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Change Management Associate
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership Pipeline Candidate
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },
  // Executive Leadership & Strategic Management ICP
  {
    slug: "executive-leadership-strategic-management-icp",
    title: "Executive Leadership & Strategic Management (ICP)",
    description: "An Industry Certificate Program covering leadership identity & self-awareness, executive presence, and decision-making under pressure using the OODA loop and pre-mortem analysis.",
    months: "5 Days",
    category: "Management, Analytics & Allied Streams",
    hours: "15",
    projects: "1-3 Mini Project(s)",
    price: {

      offer: 11999
    },
    recommended: false,
    image: "/images/course-image/Executive-Leadership-&-Strategic-Management-(ICP).webp",
    brochure: "/brochures/executive-leadership-strategic-management-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">15 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Introduction to Happiness Engineering
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Emotional Intelligence & Self-Awareness
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Productivity, Habits & Sustainable Performance
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Stress Management & Resilience
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Workplace Well-being & Collaboration
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Personal Growth & Long-Term Well-being
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Senior leadership requiring political intelligence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Transformation initiatives requiring change navigation
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Executive stakeholder complexity
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Cross-functional influence as a differentiator
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Organisational diplomacy demand
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Emotional resilience capability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Productivity and focus improvement
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Workplace well-being awareness
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Emotional intelligence development
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Stress management understanding
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Sustainable performance frameworks
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Improved work-life integration
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>
</section>
    `
  },

  // Executive Leadership & Strategic Management IDP
  {
    slug: "executive-leadership-strategic-management-idp",
    title: "Executive Leadership & Strategic Management (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering foundations of leadership, self-leadership & emotional intelligence, executive presence, strategic thinking, decision-making, and leading high-performance teams.",
    months: "~1–2 Months",
    hours: "30",
    price: {

      offer: 22999
    },
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/Executive-Leadership-&-Strategic-Management-(IDP).webp",
    brochure: "/brochures/executive-leadership-strategic-management-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- LEFT: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>

        <!-- Course Details (Inline) -->
        <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
          <span class="font-bold text-slate-900">30 HRS</span>
          <span class="text-slate-300">|</span>
          <span>WEEKEND • OFFLINE</span>
          <span class="text-slate-300">|</span>
          <span>BEGINNER–INTERMEDIATE</span>
        </div>

        <!-- Learning List -->
        <div class="mt-6">
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            What You'll Learn
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Foundations of Leadership
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Self-Leadership & Emotional Intelligence
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Executive Presence & Professional Influence
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Strategic Thinking & Business Acumen
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Decision-Making & Problem Solving
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Leading High-Performance Teams
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT: Career Entry Points -->
      <div class="flex flex-col justify-center">

        <div>
          <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Career Entry Points
          </h3>

          <ul class="space-y-1.5 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              Data Analyst
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              AI Associate
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-600 text-lg leading-tight">✓</span>
              BI Analyst
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Leadership Talent Gap
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Digital Transformation requiring change management
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Hybrid Work Models requiring strong people leadership
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Workforce Evolution driving coaching demand
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Complexity making strategic thinking critical
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h2 class="mb-4 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Ability to lead teams with confidence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply strategic thinking to business challenges
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build executive presence and influence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Make informed decisions under uncertainty
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Manage stakeholders; lead change initiatives
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Improve team performance and engagement
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h2 class="mb-2 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students &amp; Graduates <span class="text-slate-300 mx-2">|</span>
      Analysts &amp; Engineers <span class="text-slate-300 mx-2">|</span>
      Working Professionals <span class="text-slate-300 mx-2">|</span>
      Career Changers
    </p>
  </div>

</section>
    `
  },

  // Executive Leadership & Strategic Management AIDP
  {
    slug: "executive-leadership-strategic-management-aidp",
    title: "Executive Leadership & Strategic Management (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to transform into a strategic leader for the future of business, covering leadership foundations, team leadership, strategic impact, and transformation.",
    months: "2–6 Months",
    hours: "60",
    price: {

      offer: 68999
    },
    projects: "1 Capstone",
    category: "Management, Analytics & Allied Streams",
    recommended: true,
    image: "/images/course-image/Executive-Leadership-&-Strategic-Management-(AIDP).webp",
    brochure: "/brochures/executive-leadership-strategic-management-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6">

    <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
          Executive Leadership & Strategic Management
        </h2>

        <p class="mt-1.5 text-lg text-slate-700">
          Transform into a strategic leader for the future of business.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Weekend Sessions</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Advanced<br>Diploma</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-3 md:grid-cols-2">

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Leadership Foundations
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Leadership Principles & Styles
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Self-Awareness
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Emotional Intelligence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Leadership Mindset
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Team & People Leadership
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Team Dynamics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Coaching & Mentoring
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Performance Management
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Conflict Resolution
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Strategic Leadership & Organisational Impact
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Strategic Thinking
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Business Acumen
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Decision-Making
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Stakeholder Leadership
          </li>
        </ul>
      </div>

      <div class="p-4">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Transformation & Future Leadership
        </p>

        <ul class="mt-2 space-y-1 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Change Management
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Innovation Leadership
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Leadership Agility
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base">✓</span>
            Sustainable Growth
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Leadership Assessment Models</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Business Strategy Frameworks</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Decision-Making Models</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Change Management Frameworks</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Executive Communication Frameworks</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Leadership Transformation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-6">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Functional Manager
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Business Unit Lead
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Transformation Lead
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Senior Leadership Track
        </li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-6">
    <h3 class="mb-2.5 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-1.5">
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Project-Based Learning</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Industry Mentorship</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Portfolio Development</span>
      <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },
  // FinTech & Digital Finance (PG Certificate)
  {
    slug: "fintech-digital-finance",
    title: "FinTech & Digital Finance",
    description: "A Postgraduate Certificate Programme covering open banking, digital payments, embedded finance, blockchain, CBDCs and AI-powered financial services across 15 modules and 150 contact hours.",
    months: "6 Months",
    price: {

      offer: 108999
    },
    category: "Postgraduate Certificate Programmes",
    hours: "150",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/FinTech-&-Digital-Finance.webp",
    brochure: "/brochures/fintech-digital-finance.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div>
      <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Postgraduate Certificate Programme
      </p>

      <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
        FinTech &amp; Digital Finance
      </h2>

      <p class="mt-1.5 text-lg text-slate-700">
        Lead the future of digital financial innovation.
      </p>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">150</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Months</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">50 &times; 3 Hrs</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Sessions</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Weekend</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Executive Mode</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">PG<br>Certificate</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>

    <p class="mt-6 text-slate-700">
      Open banking, digital payments, embedded finance, blockchain, CBDCs and AI-powered services are redefining how the world interacts with money. This programme prepares professionals to understand, design and lead digital finance initiatives across banks, FinTech startups, regulators and technology organisations.
    </p>
  </div>

  <!-- CURRICULUM -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum &middot; 15 Modules
    </h3>

    <div class="grid gap-x-8 gap-y-1.5 md:grid-cols-3">
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Global Financial Ecosystem &amp; FinTech Evolution
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Digital Banking &amp; Open Banking
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Payments Infrastructure &amp; Digital Transactions
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Financial Products &amp; Digital Lending
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Blockchain &amp; Digital Finance
        </li>
      </ul>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Central Bank Digital Currencies (CBDCs)
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Embedded Finance &amp; Banking as a Service
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          RegTech &amp; Compliance Technologies
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Financial Crime Analytics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Cybersecurity in Financial Systems
        </li>
      </ul>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          AI &amp; Analytics in Finance
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          FinTech Product Strategy
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          FinTech Innovation &amp; Venture Ecosystems
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Digital Finance Leadership &amp; Transformation
        </li>
      </ul>
    </div>
  </div>

  <!-- WHAT YOU'LL BE ABLE TO DO -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      What You'll Be Able To Do
    </h3>

    <div class="grid gap-1.5 md:grid-cols-2">
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Understand global FinTech ecosystems
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Design digital financial solutions
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Evaluate emerging financial technologies
        </li>
      </ul>
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analyse payment infrastructures
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Assess digital banking models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Lead digital finance transformation
        </li>
      </ul>
    </div>
  </div>

  <!-- CAPSTONE & CAREER -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        National-Scale FinTech Transformation Strategy
      </h4>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">FinTech Adoption Roadmap</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Regulatory Compliance Framework</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Digital Payment Framework</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Risk Assessment Model</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Financial Inclusion Strategy</span>
      </div>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Pathways
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          FinTech Consultant
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Product Manager &ndash; FinTech
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Digital Banking Specialist
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Financial Innovation Manager
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Payments Strategy Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Digital Transformation Consultant
        </li>
      </ul>
    </div>

  </div>

</section>
    `
  },

  // Cybersecurity & AI-Driven Threat Intelligence (PG Certificate)
  {
    slug: "cybersecurity-ai-driven-threat-intelligence",
    title: "Cybersecurity & AI-Driven Threat Intelligence",
    description: "A Postgraduate Certificate Programme covering security operations, ethical hacking, digital forensics and AI-powered threat detection across 15 modules and 150 contact hours.",
    months: "6 Months",
    category: "Postgraduate Certificate Programmes",
    price: {

      offer: 108999
    },
    hours: "150",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/Cybersecurity-&-AI-Driven-Threat-Intelligence.webp",
    brochure: "/brochures/cybersecurity-ai-driven-threat-intelligence.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div>
      <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Postgraduate Certificate Programme
      </p>

      <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
        Cybersecurity &amp; AI-Driven Threat Intelligence
      </h2>

      <p class="mt-1.5 text-lg text-slate-700">
        Defend the digital enterprise with AI-powered security intelligence.
      </p>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">150</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Months</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">50 &times; 3 Hrs</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Sessions</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Weekend</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Executive Mode</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">PG<br>Certificate</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>

    <p class="mt-6 text-slate-700">
      As cyberattacks grow more sophisticated and AI-enabled, organisations need professionals who integrate traditional security operations with advanced threat intelligence and AI-powered defence. This programme builds the capability to detect, analyse, respond to and prevent modern cyber threats at enterprise scale.
    </p>
  </div>

  <!-- CURRICULUM -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum &middot; 15 Modules
    </h3>

    <div class="grid gap-x-8 gap-y-1.5 md:grid-cols-3">
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Cybersecurity Foundations
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Information Security Management
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Network Security Architecture, Endpoint &amp; Cloud Security
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Ethical Hacking &amp; Penetration Testing
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Security Operations Center (SOC)
        </li>
      </ul>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Threat Intelligence &amp; Threat Hunting
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          SIEM Platforms &amp; Log Analytics
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Digital Forensics &amp; Incident Response
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Cyber Risk Management
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Identity &amp; Access Management
        </li>
      </ul>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          AI-Driven Threat Intelligence
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Security Analytics &amp; Machine Learning
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Automated Security Operations
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Cybersecurity Leadership &amp; Governance
        </li>
      </ul>
    </div>
  </div>

  <!-- WHAT YOU'LL BE ABLE TO DO -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      What You'll Be Able To Do
    </h3>

    <div class="grid gap-1.5 md:grid-cols-2">
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Design cybersecurity frameworks
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Conduct threat intelligence analysis
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Perform ethical hacking assessments
        </li>
      </ul>
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build security monitoring systems
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Implement AI-powered threat detection
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Lead cybersecurity transformation
        </li>
      </ul>
    </div>
  </div>

  <!-- CAPSTONE & CAREER -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise Cyber Defence Transformation Strategy
      </h4>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Security Architecture Blueprint</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Threat Intelligence Framework</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Incident Response Strategy</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">AI-Powered Monitoring System</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Governance &amp; Compliance Roadmap</span>
      </div>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Pathways
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          SOC Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Security Operations Manager
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Cybersecurity Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Threat Intelligence Specialist
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Cyber Risk Consultant
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Digital Forensics Specialist
        </li>
      </ul>
    </div>

  </div>

</section>
    `
  },

  // Blockchain & Decentralised Systems (PG Certificate)
  {
    slug: "blockchain-decentralised-systems",
    title: "Blockchain & Decentralised Systems",
    description: "A Postgraduate Certificate Programme covering distributed ledgers, smart contracts, DeFi and Web3 architecture across 15 modules and 150 contact hours.",
    months: "6 Months",
    price: {

      offer: 108999
    },
    category: "Postgraduate Certificate Programmes",
    hours: "150",
    projects: "1 Capstone",
    recommended: false,
    image: "/images/course-image/Blockchain-&-Decentralised-Systems.webp",
    brochure: "/brochures/blockchain-decentralised-systems.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div>
      <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Postgraduate Certificate Programme
      </p>

      <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
        Blockchain &amp; Decentralised Systems
      </h2>

      <p class="mt-1.5 text-lg text-slate-700">
        Build the decentralised systems powering the next internet.
      </p>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">150</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Months</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">50 &times; 3 Hrs</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Sessions</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Weekend</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Executive Mode</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">PG<br>Certificate</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>

    <p class="mt-6 text-slate-700">
      Blockchain, smart contracts, decentralised finance and Web3 are reshaping digital infrastructure across finance, supply chains and the enterprise. This programme builds the architecture, development and strategy capability to evaluate, design and lead decentralised systems.
    </p>
  </div>

  <!-- CURRICULUM -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum &middot; 15 Modules
    </h3>

    <div class="grid gap-x-8 gap-y-1.5 md:grid-cols-3">
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Blockchain Foundations
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Distributed Ledger Technology
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Cryptography &amp; Consensus Mechanisms
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Bitcoin &amp; Digital Currencies
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Ethereum &amp; Smart Contracts
        </li>
      </ul>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Solidity Programming
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Decentralised Applications (dApps)
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          DeFi &ndash; Decentralised Finance
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Tokenisation &amp; Digital Assets
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          NFTs &amp; Web3
        </li>
      </ul>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Enterprise Blockchain (Hyperledger)
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Blockchain Security &amp; Auditing
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Scalability &amp; Interoperability
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Governance &amp; Regulation
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Blockchain Strategy &amp; Transformation
        </li>
      </ul>
    </div>
  </div>

  <!-- WHAT YOU'LL BE ABLE TO DO -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      What You'll Be Able To Do
    </h3>

    <div class="grid gap-1.5 md:grid-cols-2">
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Understand blockchain architecture
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Design &amp; deploy smart contracts
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Evaluate DeFi &amp; tokenisation models
        </li>
      </ul>
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Assess enterprise blockchain use cases
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build decentralised applications
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Lead blockchain transformation
        </li>
      </ul>
    </div>
  </div>

  <!-- CAPSTONE & CAREER -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise Blockchain Transformation Strategy
      </h4>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Blockchain Adoption Roadmap</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Smart Contract Architecture</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Tokenisation Framework</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Governance &amp; Compliance Model</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Decentralised Application Design</span>
      </div>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Pathways
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Blockchain Developer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Smart Contract Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Web3 Product Manager
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Blockchain Consultant
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          DeFi Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Decentralised Systems Strategist
        </li>
      </ul>
    </div>

  </div>

</section>
    `
  },

  // Data Science, Machine Learning & AI Engineering (PG Certificate)
  {
    slug: "data-science-machine-learning-ai-engineering",
    title: "Data Science, Machine Learning & AI Engineering",
    description: "A Postgraduate Certificate Programme covering Python, statistical analysis, machine learning, deep learning, NLP, LLMs and MLOps across 15+ modules and 150 contact hours.",
    months: "6 Months",
    price: {

      offer: 108999
    },
    hours: "150",
    category: "Postgraduate Certificate Programmes",
    projects: "1 Capstone",
    recommended: true,
    image: "/images/course-image/Data-Science-Machine-Learning-&-AI-Engineering.webp",
    brochure: "/brochures/data-science-machine-learning-ai-engineering.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
<section class="space-y-4 font-sans">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-6 md:p-8">

    <div>
      <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Postgraduate Certificate Programme
      </p>

      <h2 class="mt-1.5 text-3xl font-bold text-slate-900">
        Data Science, Machine Learning &amp; AI Engineering
      </h2>

      <p class="mt-1.5 text-lg text-slate-700">
        Build the intelligent systems powering data-driven decisions.
      </p>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">150</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-2xl font-bold text-emerald-600">6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Months</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">50 &times; 3 Hrs</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Sessions</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">Weekend</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Executive Mode</p>
      </div>
      <div class="bg-white p-3 text-center">
        <p class="text-lg font-bold text-emerald-600">PG<br>Certificate</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>

    <p class="mt-6 text-slate-700">
      Data Science, Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by enabling data-driven decision-making, intelligent automation and predictive insights across business, healthcare, finance, manufacturing and technology.
    </p>
  </div>

  <!-- CURRICULUM -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Curriculum &middot; Modules
    </h3>

    <div class="grid gap-x-8 gap-y-1.5 md:grid-cols-3">
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Introduction to AI, ML &amp; Data Science
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Python Programming Foundations
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Data Exploration, Visualization &amp; Statistical Analysis
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          First Machine Learning Models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Industry AI Applications
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Feature Engineering
        </li>
      </ul>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Regression Models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Classification Models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Data Storytelling
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Model Deployment
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Advanced Machine Learning &amp; Ensemble Learning
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Deep Learning
        </li>
      </ul>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Neural Networks, TensorFlow &amp; Keras
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Natural Language Processing
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Large Language Models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Prompt Engineering &amp; AI Agents
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-base leading-tight">✓</span>
          Retrieval-Augmented Generation (RAG) &amp; MLOps Fundamentals
        </li>
      </ul>
    </div>
  </div>

  <!-- WHAT YOU'LL BE ABLE TO DO -->
  <div class="bg-slate-100 p-6 md:p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      What You'll Be Able To Do
    </h3>

    <div class="grid gap-1.5 md:grid-cols-2">
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Understand Data Science &amp; AI fundamentals
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build and deploy Machine Learning models
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Analyze and visualize complex datasets
        </li>
      </ul>
      <ul class="space-y-1.5 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Apply deep learning &amp; NLP techniques
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Build LLM-powered AI applications
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Lead AI &amp; data science transformation
        </li>
      </ul>
    </div>
  </div>

  <!-- CAPSTONE & CAREER -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-6 md:p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-1.5 text-xl font-bold text-slate-900">
        Enterprise AI &amp; Data Science Transformation Strategy
      </h4>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Customer Churn Prediction System</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Fraud Detection Framework</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">AI Chatbot / Generative AI Application</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">Predictive Analytics Model</span>
        <span class="px-3 py-1.5 text-sm font-medium text-slate-700">AI Solution Design</span>
      </div>
    </div>

    <div class="bg-slate-100 p-6 md:p-8">
      <h3 class="mb-2.5 text-lg font-bold text-slate-900">
        Career Pathways
      </h3>

      <ul class="space-y-1 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Scientist
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Machine Learning Engineer
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Product Manager
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          AI Consultant
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          Data Analyst
        </li>
        <li class="flex items-start gap-2">
          <span class="text-emerald-600 text-lg leading-tight">✓</span>
          MLOps / AI Systems Strategist
        </li>
      </ul>
    </div>

  </div>

</section>
    `
  },


  // Faculty Development Programme
  {
    slug: "faculty-development-programme",
    title: "Faculty Development Programme",
    description: "An NEP-aligned, NIRF-oriented Faculty Development Programme that strengthens teaching effectiveness, research productivity and institutional performance, with hands-on exposure to 40+ modern AI and digital tools.",
    months: "2 Days",
    category: "Development Programmes",
    hours: "16",
    projects: "Institutional Workshop",
    recommended: false,
    image: "/images/course-image/Faculty-Development-Programme.webp",
    brochure: "/brochures/faculty-development-programme.pdf",
    features: {
      mentorship: true,
      careerSupport: false
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-8">
    <div class="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Development Programmes
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Faculty Development Programme
        </h2>

        <p class="mt-1 text-lg font-semibold uppercase tracking-wide text-slate-600">
          Engineering &amp; Management Faculty
        </p>
      </div>

      <p class="italic text-slate-700">
        Beyond credential-led pathways, the Tech School runs stand-alone development programmes that deepen the capabilities of two audiences essential to any institution &ndash; its faculty and its students.
      </p>
    </div>
  </div>

  <!-- ENRICHING BOX -->
  <div class="bg-slate-100 p-8">

    <div class="grid gap-6 lg:grid-cols-2 lg:items-start">
      <h3 class="text-2xl font-bold italic text-emerald-600">
        Enriching the people who build the future.
      </h3>

      <p class="text-slate-700">
        An NEP-aligned, NIRF-oriented Faculty Development Programme that strengthens teaching effectiveness, research productivity and institutional performance &ndash; with hands-on exposure to 40+ modern AI and digital tools.
      </p>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">

      <div class=" pl-4">
        <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Day 1</p>
        <h4 class="text-lg font-bold text-slate-900">Teaching Excellence, NEP Alignment &amp; AI Tools</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            NEP 2020 framework &amp; NIRF (TLR) alignment
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Bloom's Taxonomy &amp; Outcome-Based course design
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            AI tools for teaching: ChatGPT, Notion AI, Canva, Gamma, Desmos
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Assessments that measure thinking, not memory
          </li>
        </ul>
      </div>

      <div class=" pl-4">
        <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Day 2</p>
        <h4 class="text-lg font-bold text-slate-900">Research Productivity, Patents &amp; Publication Strategy</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            AI research tools: NotebookLM, Perplexity, Elicit, Zotero, Overleaf
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Patent module: novelty, filing, patent search tools
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Faculty weekly productivity blueprint &amp; dashboards
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            NEP &amp; NIRF-aligned 1-year KPI roadmap
          </li>
        </ul>
      </div>

    </div>

    <div class="mt-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">Outcomes</h3>
      <div class="grid gap-x-6 gap-y-1 sm:grid-cols-2">
        <ul class="space-y-1.5 text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            NEP &amp; NIRF KPI roadmap
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            40+ AI tools for teaching &amp; research
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Faster, structured literature reviews
          </li>
        </ul>
        <ul class="space-y-1.5 text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            OBE-aligned teaching &amp; assessment plans
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Patent-orientation &amp; publication readiness
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Faculty productivity systems &amp; dashboards
          </li>
        </ul>
      </div>
    </div>

  </div>

  <p class="text-sm italic text-slate-500">
    Customisable 1&ndash;2 day workshops &middot; On-campus or at SCALE &middot; Indicative structure, customised per institution.
  </p>

</section>
    `
  },

  // Student Development Programme
  {
    slug: "student-development-programme",
    title: "Student Development Programme",
    description: "A standalone, customisable workshop series that equips students with the technical fluency, communication confidence and industry orientation needed to become day-one-ready for the modern workplace.",
    months: "1-3 Days",
    hours: "8-24",
    category: "Development Programmes",
    projects: "Institutional Workshop",
    recommended: false,
    image: "/images/course-image/Student-Development-Programme.webp",
    brochure: "/brochures/student-development-programme.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-8">
    <div class="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Development Programmes
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Student Development Programme
        </h2>

        <p class="mt-1 text-lg font-semibold uppercase tracking-wide text-slate-600">
          Students Enrolled in Institutions
        </p>
      </div>

      <p class="italic text-slate-700">
        These student-focused programmes go beyond the classroom &ndash; building the professional instincts, technical fluency, and career readiness that turn learners into industry-ready contributors.
      </p>
    </div>
  </div>

  <!-- ENRICHING BOX -->
  <div class="bg-slate-100 p-8">

    <div class="grid gap-6 lg:grid-cols-2 lg:items-start">
      <h3 class="text-2xl font-bold italic text-emerald-600">
        Enriching the people who build the future.
      </h3>

      <p class="text-slate-700">
        A standalone, customisable workshop series that equips students with the technical fluency, communication confidence and industry orientation needed to become day-one-ready for the modern workplace.
      </p>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">

      <div class="pl-4">
        <h4 class="text-lg font-bold text-slate-900">AI &amp; Digital Fluency</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Generative AI &amp; prompt fundamentals
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Productivity &amp; research tools
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Future-of-work readiness
          </li>
        </ul>
      </div>

      <div class="pl-4">
        <h4 class="text-lg font-bold text-slate-900">Technical Foundations</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Coding &amp; analytics basics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Data &amp; dashboarding exposure
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Hands-on mini-projects
          </li>
        </ul>
      </div>

      <div class="b pl-4">
        <h4 class="text-lg font-bold text-slate-900">Communication &amp; Employability</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Structured thinking &amp; presentation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Interview &amp; aptitude readiness
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Personal brand &amp; portfolio
          </li>
        </ul>
      </div>

      <div class=" pl-4">
        <h4 class="text-lg font-bold text-slate-900">Career &amp; Industry Orientation</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Industry expectations &amp; roles
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Career pathway mapping
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Placement preparation
          </li>
        </ul>
      </div>

    </div>

    <div class="mt-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">Outcomes</h3>
      <div class="grid gap-x-6 gap-y-1 sm:grid-cols-2">
        <ul class="space-y-1.5 text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Industry-relevant technical &amp; AI skills
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Communication &amp; employability confidence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Portfolio &amp; project experience
          </li>
        </ul>
        <ul class="space-y-1.5 text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Aptitude &amp; problem-solving capability
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Placement &amp; career readiness
          </li>
        </ul>
      </div>
    </div>

  </div>

  <p class="text-sm italic text-slate-500">
    Customisable 1&ndash;3 day workshops &middot; On-campus or at SCALE &middot; Indicative structure, customised per institution.
  </p>

</section>
    `
  },

  // Leadership Development Programme
  {
    slug: "leadership-development-programme",
    title: "Leadership Development Programme",
    description: "A standalone, customisable workshop series that equips students with the leadership fluency, communication confidence and industry orientation needed to become day-one-ready for the modern workplace.",
    months: "1-3 Days",
    hours: "8-24",
    category: "Development Programmes",
    projects: "Institutional Workshop",
    recommended: false,
    image: "/images/course-image/Leadership-Development-Programme.webp",
    brochure: "/brochures/leadership-development-programme.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION -->
  <div class="bg-slate-100 p-8">
    <div class="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Development Programmes
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Leadership Development Programme
        </h2>

        <p class="mt-1 text-lg font-semibold uppercase tracking-wide text-slate-600">
          Students Enrolled in Institutions
        </p>
      </div>

      <p class="italic text-slate-700">
        These student-focused programmes go beyond the classroom &ndash; building the professional instincts, technical fluency, and career readiness that turn learners into industry-ready contributors.
      </p>
    </div>
  </div>

  <!-- ENRICHING BOX -->
  <div class="bg-slate-100 p-8">

    <div class="grid gap-6 lg:grid-cols-2 lg:items-start">
      <h3 class="text-2xl font-bold italic text-emerald-600">
        Enriching the people who build the future.
      </h3>

      <p class="text-slate-700">
        A standalone, customisable workshop series that equips students with the technical fluency, communication confidence and industry orientation needed to become day-one-ready for the modern workplace.
      </p>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">

      <div class=" pl-4">
        <h4 class="text-lg font-bold text-slate-900">AI &amp; Digital Fluency</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Generative AI &amp; prompt fundamentals
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Productivity &amp; research tools
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Future-of-work readiness
          </li>
        </ul>
      </div>

      <div class="b pl-4">
        <h4 class="text-lg font-bold text-slate-900">Technical Foundations</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Coding &amp; analytics basics
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Data &amp; dashboarding exposure
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Hands-on mini-projects
          </li>
        </ul>
      </div>

      <div class="pl-4">
        <h4 class="text-lg font-bold text-slate-900">Communication &amp; Employability</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Structured thinking &amp; presentation
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Interview &amp; aptitude readiness
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Personal brand &amp; portfolio
          </li>
        </ul>
      </div>

      <div class=" pl-4">
        <h4 class="text-lg font-bold text-slate-900">Career &amp; Industry Orientation</h4>
        <ul class="mt-2 space-y-1.5 text-sm text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Industry expectations &amp; roles
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Career pathway mapping
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-base leading-tight">✓</span>
            Placement preparation
          </li>
        </ul>
      </div>

    </div>

    <div class="mt-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">Outcomes</h3>
      <div class="grid gap-x-6 gap-y-1 sm:grid-cols-2">
        <ul class="space-y-1.5 text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Industry-relevant technical &amp; AI skills
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Communication &amp; employability confidence
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Portfolio &amp; project experience
          </li>
        </ul>
        <ul class="space-y-1.5 text-slate-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Aptitude &amp; problem-solving capability
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 text-lg leading-tight">✓</span>
            Placement &amp; career readiness
          </li>
        </ul>
      </div>
    </div>

  </div>

  <p class="text-sm italic text-slate-500">
    Customisable 1&ndash;3 day workshops &middot; On-campus or at SCALE &middot; Indicative structure, customised per institution.
  </p>

</section>
    `
  },
];