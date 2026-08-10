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
    original: number;
    offer: number;
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
    months: "3",
    category: "Computer Science & Allied Streams",
    hours: "80",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.magnific.com/premium-photo/pensive-traders-discussing-ascending-bitcoin-price-chart-computer-screen-when-working-dark-office_274689-22251.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_test_b&w=740&q=80",
    brochure: "/brochures/advanced-computing-ai-engineering-cse.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
      <!-- ================= Program Information ================= -->
      <section class="space-y-8">
        <h2 class="text-4xl font-bold text-slate-900">Program Information</h2>
        <div class="bg-slate-100 p-8 grid gap-6 lg:grid-cols-2">
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Course Outcomes</h3>
            <p class="mt-1 text-slate-700">Applied Python, Data Structures, Full Stack Development, and AI/ML Foundations</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Format</h3>
            <p class="mt-1 text-slate-700">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Target Audience</h3>
            <p class="mt-1 text-slate-700">Intermediate programmers seeking industry-ready skills</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Prerequisites</h3>
            <p class="mt-1 text-slate-700">Basic Python syntax, introductory programming</p>
          </div>
        </div>
      </section>

      <!-- ================= Professional Certification ================= -->
      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Professional Certification</h2>
        <div class="mt-8 bg-slate-100 p-8 grid gap-8 md:grid-cols-2">
          <ul class="list-disc space-y-2 px-5 text-slate-700">
            <li>Python Data Structure &amp; Algorithms</li>
            <li>Project Management</li>
            <li>AI/ML Foundation</li>
          </ul>
          <ul class="list-disc space-y-2 px-5 text-slate-700">
            <li>Introduction to Networking</li>
            <li>Python</li>
          </ul>
        </div>
      </section>

      <!-- ================= Course Objectives ================= -->
      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Course Objectives</h2> <div class="mt-8 bg-slate-100 p-8"> <ul class="grid gap-x-8 gap-y-3 text-slate-700 lg:grid-cols-2"> <li class="flex items-start gap-3"> <span class="mt-2 shrink-0">•</span> <span> Develop proficiency in Python programming with object-oriented design and practical utilities. </span> </li> <li class="flex items-start gap-3"> <span class="mt-2 shrink-0">•</span> <span> Implement and analyze core data structures and algorithms. </span> </li> <li class="flex items-start gap-3"> <span class="mt-2 shrink-0">•</span> <span> Build production-ready full stack applications with authentication, database integration, and containerization. </span> </li> <li class="flex items-start gap-3"> <span class="mt-2 shrink-0">•</span> <span> Understand mathematical foundations and implement basic machine learning workflows. </span> </li> </ul> </div>
      </section>

      <!-- ================= Course Outcomes ================= -->
      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Course Outcomes (COs)</h2>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="border border-slate-300 bg-white p-6 shadow">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO1</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">Python Programming</h3>
            <p class="mt-3 text-slate-700">Apply object-oriented Python programming, file handling, decorators, and basic concurrency to build structured applications.</p>
          </div>
          <div class="border border-slate-300 bg-white p-6 shadow">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO2</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">Data Structures and Algorithms</h3>
            <p class="mt-3 text-slate-700">Implement fundamental data structures and algorithms while analyzing their performance characteristics.</p>
          </div>
          <div class="border border-slate-300 bg-white p-6 shadow">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO3</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">Full Stack Development</h3>
            <p class="mt-3 text-slate-700">Design, develop and deploy a web application integrating backend APIs, frontend components, authentication, database, and containerization.</p>
          </div>
          <div class="border border-slate-300 bg-white p-6 shadow">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO4</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">AI/ML Foundations</h3>
            <p class="mt-3 text-slate-700">Explain key mathematical concepts and implement basic machine learning models using standard frameworks.</p>
          </div>
        </div>
      </section>

      <!-- ================= Course Structure ================= -->
      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Course Structure</h2>
        <div class="mt-8 space-y-6">

          <!-- Module 1 -->
          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 1 &middot; 20 Hours Total</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Python Programming</h3>
            <p class="mt-2 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Object-oriented programming (classes, inheritance, encapsulation)</li>
                  <li>Memory management and garbage collection</li>
                  <li>File handling (text, JSON, binary)</li>
                  <li>Decorators for logging and tracing</li>
                  <li>Basic threading and synchronization</li>
                  <li>Socket programming fundamentals</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Banking system OOP project (3 hours)</li>
                  <li>Decorator implementation challenges (2 hours)</li>
                  <li>File processing pipeline (2 hours)</li>
                  <li>Threaded file monitoring utility (1.75 hours)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Module 2 -->
          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 2 &middot; 20 Hours Total</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Data Structures &amp; Algorithms</h3>
            <p class="mt-2 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Linear structures (lists, stacks, queues, hash maps)</li>
                  <li>Binary search trees and tree traversals</li>
                  <li>Graph representation and traversal (DFS, BFS)</li>
                  <li>Sorting algorithms (merge, quick)</li>
                  <li>Dynamic programming introduction</li>
                  <li>Algorithm complexity analysis</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Stack/queue implementations (2 hours)</li>
                  <li>BST operations (2.5 hours)</li>
                  <li>Graph algorithms (2 hours)</li>
                  <li>Sorting algorithm comparison (2.25 hours)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Module 3 -->
          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 3 &middot; 20 Hours Total</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Full Stack Development</h3>
            <p class="mt-2 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Flask REST API development</li>
                  <li>JWT authentication implementation</li>
                  <li>React components and API integration</li>
                  <li>Database integration (SQLAlchemy)</li>
                  <li>Redis caching fundamentals</li>
                  <li>Docker containerization</li>
                  <li>Application logging and basic monitoring</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>REST API development (3 hours)</li>
                  <li>Full stack integration (2.5 hours)</li>
                  <li>Docker deployment (2 hours)</li>
                  <li>Authentication enhancement (1.25 hours)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Module 4 -->
          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 4 &middot; 20 Hours Total</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">AI/ML Foundations</h3>
            <p class="mt-2 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Linear algebra for ML (vectors, matrices)</li>
                  <li>Calculus fundamentals (derivatives, gradients)</li>
                  <li>Machine learning workflow and evaluation</li>
                  <li>Scikit-learn and TensorFlow basics</li>
                  <li>Model training and validation techniques</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Mathematical foundations practice (2 hours)</li>
                  <li>Data preprocessing (2 hours)</li>
                  <li>Model implementation (2.75 hours)</li>
                  <li>Model evaluation and comparison (2 hours)</li>
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
    months: "3",
    hours: "80",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "https://img.magnific.com/free-photo/sales-manager-examining-success-efficiency-metrics-within-firm_482257-90914.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_test_b&w=740&q=80",
    brochure: "/brochures/intelligent-systems-enterprise-technology-it.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
      <section class="space-y-8">
        <h2 class="text-4xl font-bold text-slate-900">Program Information</h2>
        <div class="bg-slate-100 p-8 grid gap-6 lg:grid-cols-2">
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Course Outcomes</h3>
            <p class="mt-1 text-slate-700">Applied Python, Data Structures, Full Stack Development, and AI/ML Foundations</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Format</h3>
            <p class="mt-1 text-slate-700">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Target Audience</h3>
            <p class="mt-1 text-slate-700">Intermediate programmers seeking industry-ready skills</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Prerequisites</h3>
            <p class="mt-1 text-slate-700">Basic Python syntax, introductory programming</p>
          </div>
        </div>
      </section>

      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Professional Certification</h2>
        <div class="mt-8 bg-slate-100 p-8 grid gap-8 md:grid-cols-2">
          <ul class="list-disc space-y-2 pl-5 text-slate-700">
            <li>Python Data Structure &amp; Algorithms</li>
            <li>Project Management</li>
            <li>AI/ML Foundation</li>
          </ul>
          <ul class="list-disc space-y-2 pl-5 text-slate-700">
            <li>Introduction to Networking</li>
            <li>Python</li>
          </ul>
        </div>
      </section>

      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900"> Course Objectives </h2> <div class="mt-8 bg-slate-100 p-8"> <ul class="grid gap-x-8 gap-y-4 text-slate-700 lg:grid-cols-2"> <li class="flex items-start gap-3"> <span class="mt-2 shrink-0">•</span> <span> Develop proficiency in Python programming with object-oriented design and practical utilities. </span> </li> <li class="flex items-start gap-3"> <span class="mt-2 shrink-0">•</span> <span> Implement and analyze core data structures and algorithms. </span> </li> <li class="flex items-start gap-3"> <span class="mt-2 shrink-0">•</span> <span> Build production-ready full stack applications with authentication, database integration, and containerization. </span> </li> <li class="flex items-start gap-3"> <span class="mt-2 shrink-0">•</span> <span> Understand mathematical foundations and implement basic machine learning workflows. </span> </li> </ul> </div>
      </section>

      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Course Outcomes (COs)</h2>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="border border-slate-300 bg-white p-6 shadow">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO1</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">Python Programming</h3>
            <p class="mt-3 text-slate-700">Apply object-oriented Python programming, file handling, decorators, and basic concurrency to build structured applications.</p>
          </div>
          <div class="border border-slate-300 bg-white p-6 shadow">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO2</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">Data Structures and Algorithms</h3>
            <p class="mt-3 text-slate-700">Implement fundamental data structures and algorithms while analyzing their performance characteristics.</p>
          </div>
          <div class="border border-slate-300 bg-white p-6 shadow">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO3</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">Full Stack Development</h3>
            <p class="mt-3 text-slate-700">Design, develop and deploy a web application integrating backend APIs, frontend components, authentication, database, and containerization.</p>
          </div>
          <div class="border border-slate-300 bg-white p-6 shadow">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">CO4</p>
            <h3 class="mt-1 text-xl font-bold text-slate-900">AI/ML Foundations</h3>
            <p class="mt-3 text-slate-700">Explain key mathematical concepts and implement basic machine learning models using standard frameworks.</p>
          </div>
        </div>
      </section>

      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Course Structure</h2>
        <div class="mt-8 space-y-6">

          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 1 &middot; 20 Hours Total</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Python Programming</h3>
            <p class="mt-2 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Object-oriented programming (classes, inheritance, encapsulation)</li>
                  <li>Memory management and garbage collection</li>
                  <li>File handling (text, JSON, binary)</li>
                  <li>Decorators for logging and tracing</li>
                  <li>Basic threading and synchronization</li>
                  <li>Socket programming fundamentals</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Banking system OOP project (3 hours)</li>
                  <li>Decorator implementation challenges (2 hours)</li>
                  <li>File processing pipeline (2 hours)</li>
                  <li>Threaded file monitoring utility (1.75 hours)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 2 &middot; 20 Hours Total</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Data Structures &amp; Algorithms</h3>
            <p class="mt-2 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Linear structures (lists, stacks, queues, hash maps)</li>
                  <li>Binary search trees and tree traversals</li>
                  <li>Graph representation and traversal (DFS, BFS)</li>
                  <li>Sorting algorithms (merge, quick)</li>
                  <li>Dynamic programming introduction</li>
                  <li>Algorithm complexity analysis</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Stack/queue implementations (2 hours)</li>
                  <li>BST operations (2.5 hours)</li>
                  <li>Graph algorithms (2 hours)</li>
                  <li>Sorting algorithm comparison (2.25 hours)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 3 &middot; 20 Hours Total</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Full Stack Development</h3>
            <p class="mt-2 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Flask REST API development</li>
                  <li>JWT authentication implementation</li>
                  <li>React components and API integration</li>
                  <li>Database integration (SQLAlchemy)</li>
                  <li>Redis caching fundamentals</li>
                  <li>Docker containerization</li>
                  <li>Application logging and basic monitoring</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>REST API development (3 hours)</li>
                  <li>Full stack integration (2.5 hours)</li>
                  <li>Docker deployment (2 hours)</li>
                  <li>Authentication enhancement (1.25 hours)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 4 &middot; 20 Hours Total</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">AI/ML Foundations</h3>
            <p class="mt-2 text-sm text-slate-600">Contact Hours: 8 &nbsp;|&nbsp; Self-Learning: 9 &nbsp;|&nbsp; Evaluation: 3</p>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Contact Learning Units</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Linear algebra for ML (vectors, matrices)</li>
                  <li>Calculus fundamentals (derivatives, gradients)</li>
                  <li>Machine learning workflow and evaluation</li>
                  <li>Scikit-learn and TensorFlow basics</li>
                  <li>Model training and validation techniques</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Mathematical foundations practice (2 hours)</li>
                  <li>Data preprocessing (2 hours)</li>
                  <li>Model implementation (2.75 hours)</li>
                  <li>Model evaluation and comparison (2 hours)</li>
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
    months: "3",
    hours: "80",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124670.jpg?w=740",
    brochure: "/brochures/artificial-intelligence-machine-learning.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
      <section class="space-y-8">
        <h2 class="text-4xl font-bold text-slate-900">Program Information</h2>
        <div class="bg-slate-100 p-8 grid gap-6 lg:grid-cols-2">
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Course Outcomes</h3>
            <p class="mt-1 text-slate-700">Applied Python, Data Structures, Full Stack Development, and AI/ML Foundations</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Format</h3>
            <p class="mt-1 text-slate-700">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Target Audience</h3>
            <p class="mt-1 text-slate-700">Intermediate programmers seeking industry-ready skills</p>
          </div>
          <div class="border-l-4 border-emerald-600 px-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-600">Prerequisites</h3>
            <p class="mt-1 text-slate-700">Basic Python syntax, introductory programming</p>
          </div>
        </div>
      </section>

      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Professional Certification</h2>
        <div class="mt-8 bg-slate-100 p-8 grid gap-8 md:grid-cols-2">
          <ul class="list-disc space-y-2 pl-5 text-slate-700">
            <li>Linear Algebra and Statistics</li>
            <li>ML Statistical Foundations Programme Certificate by Wolfram</li>
          </ul>
          <ul class="list-disc space-y-2 pl-5 text-slate-700">
            <li>Calculus Review: Integrals</li>
            <li>Calculus Review: Limits &amp; Derivatives</li>
            <li>Project Management</li>
          </ul>
        </div>
      </section>

      <section class="mt-16">
       <h2 class="text-4xl font-bold text-slate-900"> Revised Curriculum </h2> <div class="mt-8 overflow-x-auto rounded-xl bg-slate-100 p-4 sm:p-6 lg:p-8"> <div class="min-w-[700px] overflow-hidden rounded-lg"> <table class="w-full border-collapse"> <thead> <tr class="bg-white"> <th class="w-[90px] border border-slate-300 p-3 text-left text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm"> Module </th> <th class="min-w-[280px] border border-slate-300 p-3 text-left text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm"> Topic </th> <th class="w-[100px] border border-slate-300 p-3 text-center text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm"> ILT (h) </th> <th class="w-[100px] border border-slate-300 p-3 text-center text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm"> SL (h) </th> <th class="w-[100px] border border-slate-300 p-3 text-center text-xs font-bold uppercase tracking-wider text-emerald-600 sm:text-sm"> SE (h) </th> </tr> </thead> <tbody> <tr class="bg-white"> <td class="border border-slate-300 p-3 text-slate-700"> 1 </td> <td class="border border-slate-300 p-3 text-slate-700"> Python, DSA and Algorithms </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 10 </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 6 </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 3 </td> </tr> <tr class="bg-white"> <td class="border border-slate-300 p-3 text-slate-700"> 2 </td> <td class="border border-slate-300 p-3 text-slate-700"> Math Foundations (Linear Alg/Calc) </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 10 </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 6 </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 4 </td> </tr> <tr class="bg-white"> <td class="border border-slate-300 p-3 text-slate-700"> 3 </td> <td class="border border-slate-300 p-3 text-slate-700"> Keras and TF Runtime Engine </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 10 </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 6 </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 4 </td> </tr> <tr class="bg-white"> <td class="border border-slate-300 p-3 text-slate-700"> 4 </td> <td class="border border-slate-300 p-3 text-slate-700"> LLMs, RAG and Agentic Systems </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 10 </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 7 </td> <td class="border border-slate-300 p-3 text-center text-slate-700"> 4 </td> </tr> <tr class="bg-emerald-600 font-bold text-white"> <td class="border border-slate-300 p-3" colspan="2" > TOTAL </td> <td class="border border-slate-300 p-3 text-center"> 40 </td> <td class="border border-slate-300 p-3 text-center"> 25 </td> <td class="border border-slate-300 p-3 text-center"> 15 </td> </tr> </tbody> </table> </div> </div>
      </section>

      <section class="mt-16">
        <h2 class="text-4xl font-bold text-slate-900">Detailed Module Breakdown</h2>
        <div class="mt-8 space-y-6">

          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 1 &middot; 10h ILT | 6h SL</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Python, DSA and Algorithms</h3>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Concepts</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Vector spaces, SVD/PCA</li>
                  <li>Gradient descent</li>
                  <li>Partial derivatives, and multivariate calculus</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Deriving backpropagation</li>
                  <li>Manual implementation of matrix decomposition (PCA) using NumPy</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 2 &middot; 10h ILT | 6h SL</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Math Foundations (Linear Alg/Calc)</h3>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Concepts</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Vector spaces, SVD/PCA, gradient descent</li>
                  <li>Partial derivatives, and multivariate calculus</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Deriving backpropagation</li>
                  <li>Manual implementation of matrix decomposition (PCA) using NumPy</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 3 &middot; 10h ILT | 6h SL</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">Keras &amp; TensorFlow Runtime</h3>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Concepts</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Keras: Sequential vs. Functional APIs, custom layers/callbacks, loss functions</li>
                  <li>TF Runtime: Computational graphs, eager vs. graph execution, tf.GradientTape, XLA compilation, and memory profiling</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Building custom training loops using tf.GradientTape</li>
                  <li>Compiling with XLA, and profiling execution time</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-2 border-emerald-600 bg-slate-100 p-8">
            <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 4 &middot; 10h ILT | 7h SL</p>
            <h3 class="mt-1 text-2xl font-bold text-slate-900">LLMs, RAG and Agents</h3>
            <div class="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 class="font-bold text-slate-900">Concepts</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Transformers, Milvus/Ollama, LangChain agents</li>
                  <li>PEFT/LoRA fine-tuning, FastAPI, and asynchronous API deployment</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-slate-900">Self-Learning Exercises</h4>
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Developing an agentic RAG system with self-correction logic and deploying it as a streaming API</li>
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

    months: "3",
    hours: "15",
    category: "Computer Science & Allied Streams",
    projects: "1 Capstone",
    recommended: false,

    image:
      "https://img.freepik.com/free-photo/businessman-using-digital-tablet-analytics-charts_53876-124672.jpg?w=740",

    brochure:
      "/brochures/data-science-machine-learning-ai-engineering-icp.pdf",

    features: {
      mentorship: true,
      careerSupport: true,
    },

    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="grid gap-8 md:grid-cols-2">

      <!-- Left: Title + What You'll Learn -->
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>

        <div class="mt-8">
          <h3 class="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            What You'll Learn
          </h3>

          <ul class="space-y-2 text-slate-700">
            <li class="flex items-start gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
              Introduction to AI & Data Science
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
              Python Foundations for AI
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
              Data Analysis & Visualisation
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
              Machine Learning Foundations
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
              Enterprise AI & Generative AI
            </li>
          </ul>
        </div>
      </div>

      <!-- Right: Badges + Career Entry Points -->
      <div>
        <div class="flex flex-wrap justify-end gap-3">
          <span class="bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow">
            15 HRS
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            WEEKEND • OFFLINE
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BEGINNER–INTERMEDIATE
          </span>
        </div>

        <div class="mt-10 text-right">
          <h3 class="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            Career Entry Points
          </h3>

          <div class="flex flex-wrap justify-end gap-3">
            <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
              Data Analyst
            </span>
            <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
              AI Associate
            </span>
            <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
              BI Analyst
            </span>
          </div>

          <div class="mt-6 flex items-center justify-end gap-2">
            <span class="h-1.5 w-1.5 bg-emerald-600"></span>
            <p class="font-semibold text-slate-900">
              Industry Certificate Program
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS -->
  <div class="grid 
   lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-5 text-2xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="space-y-2 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Business Intelligence Growth
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Data Visualization Adoption
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Real-Time Reporting Replacing Static Reports
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Enterprise Analytics Expansion
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Power BI Global Adoption Growth
        </li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-5 text-2xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="space-y-2 text-slate-700">
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Ability to analyse & interpret business datasets
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Build ML models
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Perform EDA
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Create dashboards
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Apply statistical methods
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Utilise AI tools
        </li>
        <li class="flex items-start gap-2">
          <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600"></span>
          Communicate insights through data storytelling
        </li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-3 text-2xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
    </p>
  </div>

</section>
`,
  },


  {
    slug: "data-science-machine-learning-ai-engineering-idp",
    title: "Data Science, Machine Learning & AI Engineering (IDP)",
    description:
      "An Industry Certificate Program covering AI & Data Science fundamentals, Python, data analytics, machine learning, enterprise AI, and Generative AI for students, graduates, analysts, engineers, working professionals, and career changers.",

    months: "3",
    hours: "30",
    category: "Computer Science & Allied Streams",
    projects: "3+ Industry",
    recommended: false,

    image:
      "https://img.freepik.com/free-photo/businessman-using-digital-tablet-analytics-charts_53876-124672.jpg?w=740",

    brochure:
      "/brochures/data-science-machine-learning-ai-engineering-icp.pdf",

    features: {
      mentorship: true,
      careerSupport: true,
    },

    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          3+ INDUSTRY PROJECTS
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- Curriculum Highlights -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Curriculum Highlights
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Data Science Foundations</li>
          <li>Python for Analytics</li>
          <li>Data Manipulation</li>
          <li>Business Statistics</li>
          <li>Machine Learning Foundations</li>
          <li>Business Intelligence with Power BI</li>
          <li>Generative AI for Business</li>
        </ul>
      </div>

      <!-- Capstone Projects -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Capstone Projects
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium shadow">
            Customer Churn Prediction
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium shadow">
            Retail Analytics Dashboard
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium shadow">
            AI-Powered Business Insights
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Diploma
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>AI Adoption</li>
        <li>Data-Driven Decisions</li>
        <li>Digital Transformation - Generative AI</li>
        <li>Business Intelligence Demand</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to analyse & interpret business datasets</li>
        <li>Build ML models</li>
        <li>Perform EDA</li>
        <li>Create dashboards</li>
        <li>Apply statistical methods</li>
        <li>Utilise AI tools</li>
        <li>Communicate insights through data storytelling</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
    </p>
  </div>

</section>
`,
  },

  {
    slug: "data-science-machine-learning-ai-engineering-aidp",
    title: "Data Science, Machine Learning & AI Engineering (AIDP)",
    description:
      "An Industry Diploma Program with curriculum covering Data Science, Python, analytics, ML, Power BI, and Generative AI for students, graduates, analysts, and professionals.",
    months: "3",
    hours: "60",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,

    image:
      "https://img.freepik.com/free-photo/businessman-using-tablet-analytics-data_53876-124673.jpg?w=740",

    brochure:
      "/brochures/data-science-machine-learning-ai-engineering-idp.pdf",

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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Data Science, Machine Learning & AI Engineering
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Become an AI professional ready for the future.
        </p>
      </div>

     
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Data Science and AI
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Python Programming</li>
          <li>Data Exploration & Visualisation</li>
          <li>Statistical Analysis</li>
          <li>First ML Models</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Data Science and ML
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Feature Engineering</li>
          <li>Regression & Classification</li>
          <li>Clustering</li>
          <li>Model Deployment</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Artificial Intelligence
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Deep Learning & Neural Networks</li>
          <li>TensorFlow & Keras</li>
          <li>Computer Vision</li>
          <li>Natural Language Processing</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Generative AI and Enterprise AI
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>LLMs & Prompt Engineering</li>
          <li>AI Agents & RAG</li>
          <li>MLOps & Cloud AI</li>
          <li>Enterprise AI Strategy</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Python</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Scikit-Learn</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">TensorFlow / Keras</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Hugging Face</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">OpenAI · Claude · Gemini</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Power BI</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">AWS / Azure AI</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise AI Innovation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Data Scientist</li>
        <li>Machine Learning Engineer</li>
        <li>AI Engineer</li>
        <li>AI Transformation Consultant</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "3",
    hours: "15",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "https://img.freepik.com/free-photo/programmer-working-with-software-development_53876-124674.jpg?w=740",
    brochure: "/brochures/python-software-engineering-application-development-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Programming & Python</li>
          <li>Python Fundamentals</li>
          <li>Loops & Iterative Programming</li>
          <li>Functions & Modular Programming</li>
          <li>Data Structures</li>
          <li>File Handling & Automation</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>AI & Automation Growth</li>
        <li>Data-Driven Business Models</li>
        <li>Workflow Automation</li>
        <li>Developer Demand</li>
        <li>Technology Expansion</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Foundational programming capability</li>
        <li>Practical Python implementation skills</li>
        <li>Coding confidence</li>
        <li>Logical thinking ability</li>
        <li>Introductory automation exposure</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "30",
    projects: "3+ Industry",
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "https://img.freepik.com/free-photo/coding-programming-banner_53876-124675.jpg?w=740",
    brochure: "/brochures/python-software-engineering-application-development-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          3+ INDUSTRY PROJECTS
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- Curriculum Highlights -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Curriculum Highlights
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Data Science Foundations</li>
          <li>Python for Analytics</li>
          <li>Data Manipulation</li>
          <li>Business Statistics</li>
          <li>Machine Learning Foundations</li>
          <li>Business Intelligence with Power BI</li>
          <li>Generative AI for Business</li>
        </ul>
      </div>

      <!-- Capstone Projects -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Capstone Projects
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium shadow">
            Customer Churn Prediction
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium shadow">
            Retail Analytics Dashboard
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium shadow">
            AI-Powered Business Insights
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Diploma
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>AI Adoption</li>
        <li>Data-Driven Decisions</li>
        <li>Digital Transformation - Generative AI</li>
        <li>Business Intelligence Demand</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to analyse & interpret business datasets</li>
        <li>Build ML models</li>
        <li>Perform EDA</li>
        <li>Create dashboards</li>
        <li>Apply statistical methods</li>
        <li>Utilise AI tools</li>
        <li>Communicate insights through data storytelling</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    category: "Computer Science & Allied Streams",
    hours: "60",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/software-developer-working-code_53876-124676.jpg?w=740",
    brochure: "/brochures/python-software-engineering-application-development-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Python Software Engineering & Application Development
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Become a professional Python developer for modern technology careers.
        </p>
      </div>

    
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Python Programming Foundations
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Fundamentals & Logic</li>
          <li>Functions</li>
          <li>Data Structures</li>
          <li>File Operations</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Python Development
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Object-Oriented Programming</li>
          <li>Database Connectivity</li>
          <li>API Integration</li>
          <li>Automation Projects</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Python Engineering
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Design Patterns</li>
          <li>Multithreading</li>
          <li>Async Programming</li>
          <li>Testing & Optimisation</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise & AI-Enabled Development
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>REST API & Flask</li>
          <li>Web Applications</li>
          <li>Git & Version Control</li>
          <li>AI-Assisted Development</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Python</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">VS Code</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">SQLite / MySQL</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">REST APIs · Postman</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Flask</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Git & GitHub</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">OpenAI · Claude · Gemini</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise Python Solution
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Python Developer</li>
        <li>Backend Developer</li>
        <li>Automation Engineer</li>
        <li>AI Application Developer</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "3",
    hours: "15",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "https://img.freepik.com/free-photo/data-analytics-dashboard_53876-124677.jpg?w=740",
    brochure: "/brochures/data-engineering-advanced-analytics-python-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Data Analytics & Python</li>
          <li>NumPy Foundations</li>
          <li>Pandas Fundamentals</li>
          <li>Data Cleaning & Transformation</li>
          <li>Exploratory Data Analysis</li>
          <li>Data Visualization & Reporting</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Data-Driven Enterprises</li>
        <li>Business Intelligence Growth</li>
        <li>AI & ML Expansion</li>
        <li>Automation & Analytics</li>
        <li>Analytical Talent Demand</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Professional-level Python development</li>
        <li>Ability to build scalable applications</li>
        <li>Automation engineering; API integration</li>
        <li>AI-enabled development</li>
        <li>Portfolio-ready projects</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "30",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "https://img.freepik.com/free-photo/data-analytics-visualization_53876-124678.jpg?w=740",
    brochure: "/brochures/data-engineering-advanced-analytics-python-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Data Analytics</li>
          <li>Python for Data Analytics</li>
          <li>NumPy for Data Processing</li>
          <li>Pandas Fundamentals</li>
          <li>Data Cleaning & Preparation</li>
          <li>Exploratory Data Analysis</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Data-Driven Enterprises</li>
        <li>BI Growth</li>
        <li>AI & ML Expansion</li>
        <li>Automation & Analytics</li>
        <li>Analytical Talent Demand</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to import & process complex datasets</li>
        <li>Clean and prepare data for analysis</li>
        <li>Perform EDA</li>
        <li>Create visualizations</li>
        <li>Identify patterns and trends</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "60",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "https://img.freepik.com/free-photo/data-science-analytics_53876-124679.jpg?w=740",
    brochure: "/brochures/data-engineering-advanced-analytics-python-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Data Engineering & Advanced Analytics with Python
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Become an advanced data analytics professional with Python.
        </p>
      </div>

    
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Data Manipulation
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Python Analytics Environment</li>
          <li>NumPy & Pandas</li>
          <li>Data Cleaning</li>
          <li>Transformation</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Analytics & Reporting
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Exploratory Data Analysis</li>
          <li>Business Reporting</li>
          <li>Visualisation</li>
          <li>Insight Generation</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Data Processing
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Advanced Pandas</li>
          <li>Multi-Source Integration</li>
          <li>Feature Engineering</li>
          <li>Large Dataset Handling</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Data Analytics
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Data Pipeline Concepts</li>
          <li>Predictive Analytics</li>
          <li>Data Governance</li>
          <li>AI Data Preparation</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Python</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Pandas / NumPy</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Matplotlib · Plotly · Seaborn</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Power BI</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Jupyter</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">ETL & Pipeline Concepts</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise Data Analytics Transformation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Data Analyst</li>
        <li>BI Analyst</li>
        <li>Junior Data Engineer</li>
        <li>Data Science Associate</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "2",
    hours: "15",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "https://img.freepik.com/free-photo/ai-technology-cyber-security_53876-124680.jpg?w=740",
    brochure: "/brochures/enterprise-ai-transformation-governance-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Enterprise AI</li>
          <li>Generative AI Fundamentals</li>
          <li>Prompt Engineering & AI Communication</li>
          <li>AI Productivity & Workplace Transformation</li>
          <li>Workflow Automation & AI Systems</li>
          <li>Responsible AI & Governance</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Generative AI Adoption</li>
        <li>Workflow Automation Growth</li>
        <li>AI-Powered Decision Making</li>
        <li>Enterprise Transformation via AI</li>
        <li>Workforce Evolution requiring AI adaptability</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Understanding of enterprise AI ecosystems</li>
        <li>Awareness of Generative AI workflows</li>
        <li>Practical prompt engineering exposure</li>
        <li>AI-assisted productivity capability</li>
        <li>Enterprise transformation understanding</li>
        <li>AI governance and ethics awareness</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "2",
    hours: "30",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "https://img.freepik.com/free-photo/ai-business-transformation_53876-124681.jpg?w=740",
    brochure: "/brochures/enterprise-ai-transformation-governance-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Foundations of Enterprise AI</li>
          <li>Generative AI Fundamentals</li>
          <li>Prompt Engineering & AI Communication</li>
          <li>AI Productivity & Workplace Transformation</li>
          <li>Intelligent Automation Concepts</li>
          <li>Business Analytics & Performance Monitoring</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Generative AI Adoption & AI-Powered Decision Making</li>
        <li>Intelligent Automation & Digital Transformation</li>
        <li>AI Governance requirements</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to evaluate AI opportunities across business functions</li>
        <li>Use Generative AI tools effectively</li>
        <li>Design AI-enhanced workflows</li>
        <li>Develop AI adoption roadmaps</li>
        <li>Assess organisational AI readiness</li>
        <li>Understand AI governance and ethics</li>
        <li>Support enterprise AI transformation initiatives</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
    </p>
  </div>

</section>
    `
  },
  // 13. Enterprise AI Transformation & Governance AIDP
  {
    slug: "enterprise-ai-transformation-governance-aidp",
    title: "Enterprise AI Transformation & Governance (AIDP)",
    description: "An Advanced Industry Diploma with 60 contact hours and 20 weekend sessions to lead enterprise AI transformation and innovation for professionals.",
    months: "3",
    hours: "60",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "https://img.freepik.com/free-photo/ai-enterprise-strategy_53876-124682.jpg?w=740",
    brochure: "/brochures/enterprise-ai-transformation-governance-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Enterprise AI Transformation & Governance
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Lead enterprise AI transformation & innovation.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          60 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          20 WEEKEND SESSIONS
        </span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Enterprise AI
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Enterprise AI Ecosystem</li>
          <li>AI Business Applications</li>
          <li>Generative AI Fundamentals</li>
          <li>AI Adoption Trends</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Generative AI
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Prompt Engineering</li>
          <li>AI Productivity Tools</li>
          <li>AI Research Workflows</li>
          <li>Departmental AI Applications</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          AI Strategy & Organisational Readiness
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>AI Readiness Frameworks</li>
          <li>AI Maturity Models</li>
          <li>AI Governance</li>
          <li>Change Management</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise AI Transformation
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>AI Strategy Development</li>
          <li>AI Operating Models</li>
          <li>Transformation Roadmaps</li>
          <li>Enterprise Innovation</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">ChatGPT · Claude · Gemini</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Microsoft Copilot</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">AI Research Platforms</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Automation Tools</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">AI Readiness Frameworks</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise AI Transformation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>AI Transformation Associate</li>
        <li>Digital Transformation Analyst</li>
        <li>AI Strategy Associate</li>
        <li>Enterprise AI Consultant</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "2",
    hours: "30",
    projects: "1 Project",
    category: "Computer Science & Allied Streams",
    recommended: false,
    image: "https://img.freepik.com/free-photo/unreal-engine-game-development_53876-124682.jpg?w=740",
    brochure: "/brochures/introduction-to-unreal-engine.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6 bg-slate-100 ">
<div class="bg-slate-100 p-8">
    <h2 class="text-4xl font-bold ">
      Introduction to Unreal Engine
    </h2>

    <div class="mt-2 grid gap-4 md:grid-cols-2">

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 1: Introduction to Unreal Engine
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Epic Games and Unreal Engine</li>
          <li>Installing the Epic Games launcher</li>
          <li>Unreal Engine versions and Installation</li>
          <li>Choosing the right project template</li>
          <li>Unreal project folder structure</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 2: UI Layout & Navigation
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Unreal Engine interface breakdown</li>
          <li>Navigating the viewport</li>
          <li>Customizing workspace layout</li>
          <li>Accessing the content browser</li>
          <li>Transformation tools</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 3: Creating & Managing Levels
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Creating new levels</li>
          <li>Level templates</li>
          <li>Environment light mixer</li>
          <li>Quick access addition and place actors tab</li>
          <li>Structuring & organizing levels</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 4: Importing Assets
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Online 3D marketplaces</li>
          <li>3D asset types and file formats</li>
          <li>Importing assets to Unreal Engine</li>
          <li>Troubleshooting</li>
          <li>Organizing imported assets and naming convention</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 5: Lighting Setup
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Basic light properties</li>
          <li>Types of lights</li>
          <li>Ray tracing, Path tracing and Lumen</li>
          <li>Lighting the environment</li>
          <li>Emissive objects</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 6: Level Setup
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Creating a landscape</li>
          <li>Adding imported assets</li>
          <li>Understanding scale</li>
          <li>Introduction to foliage</li>
          <li>Level design</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 7: Cinematics
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Sequencer overview</li>
          <li>Creating a Level Sequence</li>
          <li>Camera actors and Camera movement basics</li>
          <li>Keyframing fundamentals</li>
          <li>Simple animations and Camera cuts</li>
          <li>Previewing cinematics</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 8: Rendering
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Rendering basics overview</li>
          <li>Viewport vs final render</li>
          <li>Movie Render Queue introduction</li>
          <li>Render settings basics</li>
          <li>Resolution and aspect ratio</li>
          <li>Output formats</li>
          <li>Simple render optimization</li>
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
    months: "3",
    hours: "60",
    projects: "1 Capstone",
    category: "Computer Science & Allied Streams",
    recommended: true,
    image: "https://img.freepik.com/free-photo/unreal-engine-3d-modeling_53876-124683.jpg?w=740",
    brochure: "/brochures/unreal-engine-foundation.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">
<div class="bg-slate-100 p-8">
    <h2 class="text-4xl font-bold text-emerald-400">
      Unreal Engine Foundation
    </h2>

    <div class="mt-2 grid gap-4 md:grid-cols-2">

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 1: Introduction to Unreal Engine
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Epic Games and Unreal Engine</li>
          <li>Installing the Epic Games launcher</li>
          <li>Unreal Engine versions and Installation</li>
          <li>Choosing the right project template</li>
          <li>Unreal project folder structure</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 2: UI Layout & Navigation
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Unreal Engine interface breakdown</li>
          <li>Navigating the viewport</li>
          <li>Customizing workspace layout</li>
          <li>Accessing the content browser</li>
          <li>Transformation tools</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 3: Creating & Managing Levels
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Creating new levels</li>
          <li>Level templates</li>
          <li>Environment light mixer</li>
          <li>Quick access addition and place actors tab</li>
          <li>Structuring & organizing levels</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 4: Materials and Textures
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Introduction to material graph editor</li>
          <li>Importing textures and masks</li>
          <li>Introduction to UVs</li>
          <li>Time node and simple animations</li>
          <li>Material instances</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 5: Importing Assets
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Online 3D marketplaces</li>
          <li>3D asset types and file formats</li>
          <li>Importing assets to Unreal Engine</li>
          <li>Troubleshooting</li>
          <li>Organizing imported assets and naming convention</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 6: Static Meshes and Skeletal Meshes
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Vertices, Triangles and Quads</li>
          <li>Applying materials to static meshes</li>
          <li>Setting up LODs</li>
          <li>Understanding bones and armature</li>
          <li>Skeletal meshes</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 7: Lighting Setup
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Light properties and rendering lights</li>
          <li>Types of lights</li>
          <li>Understanding PBL</li>
          <li>Lighting environment using PBL</li>
          <li>Post Process</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 8: Landscape System
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Light properties and rendering lights</li>
          <li>Types of lights</li>
          <li>Understanding PBL</li>
          <li>Lighting environment using PBL</li>
          <li>Post Process</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 9: Foliage and Environment Optimization
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Importing foliage assets</li>
          <li>Understanding instances</li>
          <li>Introduction to the foliage tab</li>
          <li>Landscape grass types</li>
          <li>Adding foliage in level</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 10: Niagara Particle System
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Understanding Niagara systems and emitters</li>
          <li>Life cycle stages and modules</li>
          <li>Applying forces and texture sampling</li>
          <li>Triggering particle system based on event handling</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 11: Introduction to Blueprints
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Navigating the blueprint UI</li>
          <li>Understanding variables & conditional statements</li>
          <li>Understanding construction script</li>
          <li>Functions and event handling</li>
          <li>Inter and intra blueprint communication</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 12: Understanding Actors and Components
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Implementing meshes</li>
          <li>Animation using timeline node</li>
          <li>Interacting with triggers and collision</li>
          <li>Spawning actors in the level</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 13: Event-Driven Logic
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Understanding event driven inputs</li>
          <li>Creating custom input events and key binds</li>
          <li>Implementing virtual joysticks for Android and iOS</li>
          <li>Understanding input events for different platforms</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 14: VR Walkthrough
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Integration of virtual world into VR device</li>
          <li>Implementing locomotion setup</li>
          <li>Creating interactive objects and environment</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 15: Cinematics
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Sequencer overview</li>
          <li>Creating a Level Sequence</li>
          <li>Camera actors and Camera movement basics</li>
          <li>Keyframing fundamentals</li>
          <li>Simple animations and Camera cuts</li>
          <li>Previewing cinematics</li>
        </ul>
      </div>

      <div class="border border-slate-700 p-5">
        <h3 class="text-lg font-bold ">
          Module 16: Rendering
        </h3>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Rendering basics overview</li>
          <li>Viewport vs final render</li>
          <li>Movie Render Queue introduction</li>
          <li>Render settings basics</li>
          <li>Resolution and aspect ratio</li>
          <li>Output formats</li>
          <li>Simple render optimization</li>
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
    months: "3",
    category: "Mechanical & Mechatronics & Allied Streams",
    hours: "80",
    projects: "1 Capstone",

    recommended: true,
    image: "https://img.freepik.com/free-photo/mechatronics-engineering-robotics_53876-124684.jpg?w=740",
    brochure: "/brochures/mechatronics-systems-engineer-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
     <section class="space-y-6 ">

   <!-- MAIN SECTION -->
   <div class="bg-slate-100 p-8 ">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-3xl font-bold">
          Mechatronics Systems Engineer — Global and Industry Level Finishing School
        </h2>
      </div>

      <p class="text-sm font-semibold uppercase tracking-widest text-slate-300">
        Specialise · Lead · Deliver
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">80</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Total</p>
      </div>

      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">40</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">15</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Evaluation</p>
      </div>

      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">25</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Hours Self Learning</p>
      </div>
    </div>
  </div>

  <!-- PROGRAM INFORMATION -->
  <div class="bg-slate-100  p-8">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Program Information</h3>

    <div class="rounded-2xl bg-slate-50 p-6">
      <div class="space-y-4 text-sm text-slate-700">
        <div>
          <p class="font-bold uppercase tracking-wider text-slate-900">Learning Outcome:</p>
          <p class="mt-1">Design and tune control systems under realistic noise and latency.</p>
          <p>Integrate mechanical, electrical, and embedded components under multi-constraint environments.</p>
          <p>Measure, debug, and iterate based on clear performance metrics.</p>
        </div>
        <div>
          <p class="font-bold uppercase tracking-wider text-slate-900">Format:</p>
          <p class="mt-1">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
        </div>
        <div>
          <p class="font-bold uppercase tracking-wider text-slate-900">Target Audience:</p>
          <p class="mt-1">Intermediate programmers seeking industry-ready skills</p>
        </div>
        <div>
          <p class="font-bold uppercase tracking-wider text-slate-900">Prerequisites:</p>
          <p class="mt-1">Basic Python syntax, introductory programming</p>
        </div>
      </div>
    </div>
  </div>

  <!-- PROFESSIONAL CERTIFICATION -->
  <div class="px-8 bg-slate-100  pb-2">
    <h3 class="mb-3 text-2xl font-bold text-slate-900">Professional Certification</h3>
    <div class="rounded-2xl bg-slate-50 p-6">
      <ul class="list-disc space-y-1 pl-5 text-sm text-slate-700">
        <li>Product and Industrial Design: SOLIDWORKS Essential Training</li>
        <li>Product and Industrial Design: Composite Design and Manufacturing, Validation and Production</li>
      </ul>
    </div>
  </div>

  <!-- PROGRAM STRUCTURE -->
  <div class="bg-slate-100  p-8">
    <h3 class="text-2xl font-bold ">Program Structure <span class="text-base font-normal text-slate-500">(35 Hours Guided)</span></h3>

    <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- MODULE 1 -->
      <div>
        <p class="text-base font-bold ">Module 1: Signals, Systems &amp; Perception (6 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Recover truth from corrupted signals, not just compute transforms.</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full  text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg  p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>System response, LTI concepts</li>
                <li>Frequency response, filtering</li>
                <li>Intro to sensor fusion (IMU + encoder)</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor:</p>
              <p class="mt-1 text-center font-mono text-sm text-slate-800">y(t) = x(t) ∗ h(t)</p>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: Sensor Lies Lab</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Take IMU + encoder data with induced noise and drift.</li>
                <li>Design low-pass, complementary, or Kalman-style filters.</li>
                <li>Reconstruct usable pose/velocity from corrupted data.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <p class="text-sm">Random spikes, step offsets, drift, bias shift.</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics (Quantitative Evaluation):</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Mean absolute error vs ground truth (pose, velocity).</li>
                <li>Root-mean-squared (RMS) error over time.</li>
                <li>Filter lag vs. noise rejection trade-off (qualitative + plot-based).</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">04</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">Drone IMU stabilization, EV battery-state sensing, motion-capture reliability.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 2 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 2: Control Systems Under Reality (7 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Move from textbook control to tuning under delay, noise, and instability.</p>

        <div class="mt-4   space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>PID basics, feedforward, integrator anti-windup</li>
                <li>Stability margins (gain/phase), Bode intro</li>
                <li>Real-time control concept: sampling rate vs loop latency</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor:</p>
              <p class="mt-1 text-center font-mono text-sm text-slate-800">G(s) = Y(s) / U(s)</p>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: The Unstable Drone</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Tune a simulated drone pitch/altitude controller.</li>
                <li>Implement constraints on maximum gain and minimum damping.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Simulated sensor delay (50-100 ms latency)</li>
                <li>Quantization and stochastic noise on feedback</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Settling time (5% or 2% error)</li>
                <li>Maximum overshoot (%)</li>
                <li>Maximum sustained oscillation amplitude before stabilization</li>
                <li>Stability "dwell time" under perturbations</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">04</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">Drone flight controllers, aircraft pitch/roll loops, ESC-level motor control.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 3 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 3: Structures &amp; Materials Under Load (5 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Design for fatigue, reliability, and "survival," not just ultimate strength.</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>Stress-strain basics, factor of safety</li>
                <li>Fatigue limits, cyclic loading</li>
                <li>Vibration and modal behavior (conceptual)</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: Break the Frame</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Design a UAV arm / robot chassis to meet stiffness targets and mass budget.</li>
                <li>Fabricate or 3D-print depending on lab access.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <p class="text-sm">Incremental load steps until failure, induced vibration cycling (shaker or actuator).</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Failure load (N) and failure mode (buckling vs fracture)</li>
                <li>Mass-to-stiffness ratio (Stiffness / Mass)</li>
                <li>Number of cycles to failure at 50% load</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">UAV frame fatigue, EV sub-frame durability, robotic arm repeatability.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 4 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 4: Motors, Rotor Dynamics &amp; Energy (7 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Treat motors as energy systems, not just torque sources.</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>Torque-speed curves, efficiency</li>
                <li>Rotor dynamics: unbalance, gyroscopic effects intro</li>
                <li>Power loss, heating, thermal limits</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor:</p>
              <p class="mt-1 text-center font-mono text-sm text-slate-800">T = J (dω/dt)</p>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: Motor Under Stress</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Characterise a BLDC or brushed DC motor under variable load.</li>
                <li>Measure torque-speed and efficiency curves.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <p class="text-sm">Imbalance on the rotor, step-load transients, thermal overload (time-limited).</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Peak efficiency at nominal load (%)</li>
                <li>Efficiency spread across load (plot + summary)</li>
                <li>Stable operating window (rpm range without vibration failure)</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">04</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">EV drivetrain efficiency, drone propulsion units, industrial actuators.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 5 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 5: Electronics &amp; Embedded Intelligence (6 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Build real-time "nervous systems," not just blink LEDs.</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>Embedded control loop structure</li>
                <li>PWM, ADC, interrupts, timing, watchdogs</li>
                <li>Real-time scheduling concepts (soft real-time)</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: Controller Under Deadline</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <p class="text-sm">Implement a closed-loop motor or actuator control at 500-1000 Hz, meeting hard timing constraints (e.g., 1 ms loop time).</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <p class="text-sm">Artificial CPU-load (logging, background tasks), interrupt collisions, dropped ticks.</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Loop timing jitter (standard deviation of loop time)</li>
                <li>Maximum deviation of control performance under load (e.g., motor overshoot)</li>
                <li>Percentage of "on-time" vs "missed" cycles</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">ESCs in drones, EV motor controllers, industrial servo drives.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 6 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 6: System Integration War Room (4 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Force students to integrate everything under constraints and evaluate "survivability."</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Capstone: "Build a Surviving System"</p>
              <p class="mt-1 text-sm">Students choose one:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Self-balancing robot</li>
                <li>Drone stabilization rig (2-axis testbed)</li>
                <li>Simulated EV motor control + load interface</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Constraints:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm text-slate-700">
                <li>Power budget (e.g., 12V, 5A limit)</li>
                <li>Noisy sensors (IMU + encoders, synthetic noise)</li>
                <li>Mechanical imperfections (unbalanced rotors, gear backlash)</li>
                <li>Limited code/memory footprint (e.g., no heavy-ML libraries)</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Evaluation Metrics (Rubric-Style):</p>
              <ul class="mt-1 list-disc space-y-1 pl-4 text-sm">
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
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">Tools & Technologies</h3>
    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">SOLIDWORKS</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">MATLAB / Simulink</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Embedded C / Arduino</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Sensor Fusion Kits (IMU + Encoder)</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">PID Tuning &amp; Control Rigs</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">3D Printing / Fabrication</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">
    <div class="border-2 border-emerald-500 bg-slate-50 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">Capstone</p>
      <h4 class="mt-2 text-xl font-bold text-slate-900">Build a Surviving System</h4>
      <p class="mt-2 text-sm text-slate-700">
        Self-balancing robot, drone stabilization rig, or simulated EV motor control + load interface — built and evaluated under real power, sensor, and mechanical constraints.
      </p>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">Career Outcomes</h3>
      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Mechatronics Systems Engineer</li>
        <li>Robotics Controls Engineer</li>
        <li>Embedded Systems Engineer</li>
        <li>Automation & Robotics Associate</li>
      </ul>
    </div>
  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">Learning Experience</h3>
    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "1.5",
    hours: "80-120",
    category: "Mechanical & Mechatronics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/aerospace-engineering-3d-modeling_53876-124685.jpg?w=740",
    brochure: "/brochures/scalebridge-aero-boot-camp-im1-im2.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
     <section class="space-y-6 ">

   <!-- MAIN SECTION -->
   <div class="bg-slate-100 p-8 ">

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
      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">1,000+</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Trained Engineers (Tamil Nadu)</p>
      </div>

      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">100+</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Placed in Global OEM Companies</p>
      </div>

      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">4-6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Weeks</p>
      </div>
    </div>

    <p class="mt-8 font-bold text-slate-900">Built for one reason: Your seat at a global OEM.</p>
    <p class="text-sm text-slate-600">Powered by SonStar 3DX &amp; Unreal Engine</p>
  </div>

  <!-- YOUR AEROSPACE CAREER STARTS HERE -->
  <div class="bg-slate-100  p-8">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Your Aerospace Career Starts Here</h3>

    <div class="rounded-2xl bg-slate-50 p-6">
      <p class="text-sm text-slate-700">
        Designed for freshers, passed-out engineers, faculty, and corporate trainees, this programme delivers real-world exposure through the SonStar 3DX platform — from digital prototyping to live capstone projects.
      </p>
    </div>
  </div>

  <!-- PROGRAM FEATURES & HIGHLIGHTS -->
  <div class="px-8 bg-slate-100  pb-8">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Program Features &amp; Highlights</h3>
    <div class="rounded-2xl bg-slate-50 p-6">
      <p class="text-sm text-slate-700">
        Both tracks feature industry-oriented live projects and comprehensive CAD / CAE integration on SonStar 3DX, alongside 15 Hours of Aerospace Theory.
      </p>
    </div>
  </div>

  <!-- PROGRAM TRACKS -->
  <div class="bg-slate-100  p-8">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Program Tracks</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- STANDARD TRACK -->
      <div>
        <p class="text-base font-bold ">Standard Track (4-Weeks)</p>

        <div class="mt-4 space-y-0">
          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full  text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg  p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Includes:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>75 Hours of Digital Prototyping Lab</li>
                <li>5 Hours of Soft Skills Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- ADVANCED TRACK -->
      <div>
        <p class="text-base font-bold text-indigo-950">Advanced Track (6-Weeks)</p>

        <div class="mt-4 space-y-0">
          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Includes:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>105 Hours of Digital Prototyping Lab</li>
                <li>10 Hours of Soft Skills Training</li>
              </ul>
            </div>
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
    months: "1.5",
    hours: "80-120",
    category: "Mechanical & Mechatronics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/aerospace-engineering-3d-modeling_53876-124685.jpg?w=740",
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
          <div class="bg-white p-4 text-center backdrop-blur">
            <p class="text-3xl font-bold text-emerald-400">1,000+</p>
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Trained Engineers (Tamil Nadu)</p>
          </div>
          <div class="bg-white p-4 text-center backdrop-blur">
            <p class="text-3xl font-bold text-emerald-400">100+</p>
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Placed in Global OEM Companies</p>
          </div>
          <div class="bg-white p-4 text-center backdrop-blur">
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
      <div class="px-8 bg-slate-100 pb-8">
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
            <div class="mt-4 space-y-0">
              <div class="flex gap-3">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold">01</span>
                <div class="flex-1 rounded-lg p-4">
                  <p class="text-xs font-bold uppercase tracking-wider">Includes:</p>
                  <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                    <li>An accelerated path focused on core training in Aerospace Design</li>
                    <li>Analysis, and Simulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- ADVANCED TRACK -->
          <div>
            <p class="text-base font-bold text-indigo-950">Advanced Track (6-Weeks)</p>
            <div class="mt-4 space-y-0">
              <div class="flex gap-3">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold">01</span>
                <div class="flex-1 rounded-lg bg-indigo-950 p-4">
                  <p class="text-xs font-bold uppercase tracking-wider ">Includes:</p>
                  <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                    <li>An expanded, deep-dive curriculum offering comprehensive theoretical and practical experience across Design, Analysis</li>
                    <li>Manufacturing, and Simulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  },


  // 19. Electronics & Telecommunication Systems Engineering Program
  {
    slug: "electronics-telecommunication-systems-engineer",
    title: "Electronics & Telecommunication Systems Engineer",
    description: "An Advanced Industry Diploma program for electronics & telecommunication systems engineering with 80 contact hours covering embedded systems, RTL/semiconductor design, physical chip implementation, and communication networks.",
    months: "3",
    hours: "80",
    category: "Electronics Communication & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/electronic-circuit-board-close-up_53876-124685.jpg?w=740",
    brochure: "/brochures/electronics-telecommunication-systems-engineer-aidp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
     <section class="space-y-6 ">

   <!-- MAIN SECTION -->
   <div class="bg-slate-100 p-8 ">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-3xl font-bold">
          Electronics & Telecommunication Systems Engineer
        </h2>
      </div>

      <p class="text-sm font-semibold uppercase tracking-widest text-slate-300">
        Specialise · Lead · Deliver
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">80</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Total</p>
      </div>

      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">40</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Live · Instructor-Led</p>
      </div>

      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">15</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Evaluation</p>
      </div>

      <div class="bg-white p-4 text-center backdrop-blur">
        <p class="text-3xl font-bold text-emerald-400">25</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-200">Hours Self Learning</p>
      </div>
    </div>
  </div>

  <!-- PROGRAM INFORMATION -->
  <div class="bg-slate-100  p-8">
    <h3 class="mb-4 text-2xl font-bold text-slate-900">Program Information</h3>

    <div class="rounded-2xl bg-slate-50 p-6">
      <div class="space-y-4 text-sm text-slate-700">
        <div>
          <p class="font-bold uppercase tracking-wider text-slate-900">Learning Outcome:</p>
          <p class="mt-1">Design and debug embedded and communication systems under realistic signal and timing constraints.</p>
          <p>Integrate electronic, embedded, communication, and semiconductor subsystems under multi-constraint environments.</p>
          <p>Implement RTL, physical design, and verification workflows using industry-standard EDA tools.</p>
        </div>
        <div>
          <p class="font-bold uppercase tracking-wider text-slate-900">Format:</p>
          <p class="mt-1">Blended Learning (Instructor-Led + Structured Self-Paced)</p>
        </div>
        <div>
          <p class="font-bold uppercase tracking-wider text-slate-900">Target Audience:</p>
          <p class="mt-1">Intermediate programmers seeking industry-ready skills</p>
        </div>
        <div>
          <p class="font-bold uppercase tracking-wider text-slate-900">Prerequisites:</p>
          <p class="mt-1">Basic Python syntax, introductory programming</p>
        </div>
      </div>
    </div>
  </div>

  <!-- PROFESSIONAL CERTIFICATION -->
  <div class="px-8 bg-slate-100  pb-2">
    <h3 class="mb-3 text-2xl font-bold text-slate-900">Professional Certification</h3>
    <div class="rounded-2xl bg-slate-50 p-6">
      <ul class="list-disc space-y-1 pl-5 text-sm text-slate-700">
        <li>PLC Industrial Controls and Programming</li>
        <li>RTL To GDSII: Installation and Tools Hands on Experience</li>
      </ul>
    </div>
  </div>

  <!-- PROGRAM STRUCTURE -->
  <div class="bg-slate-100  p-8">
    <h3 class="text-2xl font-bold ">Program Structure <span class="text-base font-normal text-slate-500">(30 Hours Guided)</span></h3>

    <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- MODULE 1 -->
      <div>
        <p class="text-base font-bold ">Module 1: Signals, Systems &amp; Communication Perception (6 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Recover truth from corrupted communication and electronic signals, not just compute transforms.</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full  text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg  p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>Signal response and LTI concepts</li>
                <li>Frequency response and filtering</li>
                <li>Sampling and quantization</li>
                <li>Intro to communication noise and signal recovery</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor:</p>
              <p class="mt-1 text-center font-mono text-sm text-slate-800">y(t) = x(t) ∗ h(t)</p>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: Sensor Lies Lab</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Take communication signals with induced noise and distortion.</li>
                <li>Design low-pass and digital filtering approaches.</li>
                <li>Reconstruct usable information from corrupted signals.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <p class="text-sm">Random spikes, frequency interference, signal attenuation, drift and packet corruption.</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics (Quantitative Evaluation):</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Signal-to-Noise Ratio (SNR).</li>
                <li>Root-mean-squared (RMS) error.</li>
                <li>Bit Error Rate (BER).</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">04</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">Wireless communication systems, telecom base stations, satellite telemetry, IoT communication reliability.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 2 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 2: Embedded Systems &amp; Real-Time Electronics (7 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Move from textbook embedded systems to real-time electronic system engineering under delay, noise, and instability.</p>

        <div class="mt-4   space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>Embedded control loop structure</li>
                <li>PWM, ADC, interrupts, timing, watchdogs</li>
                <li>UART, SPI, I2C communication</li>
                <li>Real-time scheduling concepts</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor:</p>
              <p class="mt-1 text-center font-mono text-sm text-slate-800">T = 1 / f</p>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: The Unstable Drone</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Implement a closed-loop embedded control system.</li>
                <li>Meet hard timing constraints.</li>
                <li>Integrate sensors and communication modules.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <p class="text-sm">Artificial CPU load, interrupt collisions, timing jitter, communication packet loss.</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Loop timing jitter</li>
                <li>Communication latency</li>
                <li>Maximum deviation under load</li>
                <li>Percentage of "on-time" vs "missed" cycles</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">04</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">Embedded IoT systems, automotive ECUs, telecom controllers, industrial automation systems.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 3 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 3: Semiconductor Logic &amp; RTL Engineering (5 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Design digital systems from RTL abstraction to synthesized hardware implementation.</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>CMOS fundamentals</li>
                <li>Verilog HDL basics</li>
                <li>RTL abstraction and logic design</li>
                <li>Functional simulation and synthesis</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: Break the Frame</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Design RTL modules in Verilog.</li>
                <li>Simulate logic functionality.</li>
                <li>Generate synthesized netlists.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <p class="text-sm">Timing violations, clock synchronization issues, logic mismatches.</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Functional correctness</li>
                <li>Timing closure</li>
                <li>Area utilization</li>
                <li>Logic efficiency</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">FPGA systems, ASIC design, processor subsystems, consumer electronics chips.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 4 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 4: Physical Design &amp; Chip Implementation (7 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Treat semiconductor implementation as a complete physical engineering workflow, not just logic design.</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>Floorplanning fundamentals</li>
                <li>Placement and Routing (PnR)</li>
                <li>Clock Tree Synthesis (CTS)</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Concept Anchor:</p>
              <p class="mt-1 text-center font-mono text-sm text-slate-800">T = J (dω/dt)</p>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: Motor Under Stress</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Create floorplans and placement layouts.</li>
                <li>Perform routing and timing analysis.</li>
                <li>Validate DRC and LVS compliance.</li>
                <li>Generate GDSII outputs.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <p class="text-sm">Routing congestion, clock skew, DRC violations, timing failures.</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Area utilization</li>
                <li>Routing congestion score</li>
                <li>DRC violation count</li>
                <li>Timing performance</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">04</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">Semiconductor tapeout workflows, AI accelerator hardware, VLSI physical design, processor implementation pipelines.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 5 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 5: Communication Networks &amp; Telecom Systems (6 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Build intelligent communication systems under bandwidth, latency, and reliability constraints.</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Core Spine:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm">
                <li>Networking fundamentals</li>
                <li>Cellular communication basics</li>
                <li>Optical communication introduction</li>
                <li>Communication protocol stacks</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Experiential Lab: Controller Under Deadline</p>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Task:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Configure communication nodes.</li>
                <li>Analyze network traffic.</li>
                <li>Optimize throughput and latency.</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Failure Injection:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Packet delay</li>
                <li>Congestion</li>
                <li>Signal interference</li>
                <li>Bandwidth throttling</li>
              </ul>
              <p class="mt-2 text-xs font-bold uppercase tracking-wider text-indigo-200">Metrics:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Network throughput</li>
                <li>Packet delivery ratio</li>
                <li>Communication latency</li>
                <li>Reliability under load</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Real-World Mapping:</p>
              <p class="mt-1 text-sm text-slate-700">5G systems, telecom switching infrastructure, satellite communication, smart city networks.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- MODULE 6 -->
      <div>
        <p class="text-base font-bold text-indigo-950">Module 6: System Integration War Room (4 h)</p>
        <p class="text-sm italic text-slate-600">Goal: Force students to integrate electronics, embedded systems, semiconductor workflows, and communication systems under constraints and evaluate "survivability."</p>

        <div class="mt-4 space-y-0">

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-xs font-bold t">01</span>
            <div class="flex-1 rounded-lg bg-indigo-950 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Capstone: "Build a Surviving System"</p>
              <p class="mt-1 text-sm">Students choose one:</p>
              <ul class="list-disc space-y-0.5 pl-4 text-sm">
                <li>Smart IoT monitoring system</li>
                <li>Wireless telemetry node</li>
                <li>FPGA communication controller</li>
                <li>Embedded automation system</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold t">02</span>
            <div class="flex-1 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-500">Constraints:</p>
              <ul class="mt-1 list-disc space-y-0.5 pl-4 text-sm text-slate-700">
                <li>Power budget limits</li>
                <li>Noisy communication environments</li>
                <li>Hardware timing constraints</li>
                <li>Limited memory and compute footprint</li>
              </ul>
            </div>
          </div>
          <div class="ml-4 h-4 border-l-2 border-dotted border-indigo-300"></div>

          <div class="flex gap-3">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-800 text-xs font-bold t">03</span>
            <div class="flex-1 rounded-lg bg-indigo-800 p-4 t">
              <p class="text-xs font-bold uppercase tracking-wider">Evaluation Metrics (Rubric-Style):</p>
              <ul class="mt-1 list-disc space-y-1 pl-4 text-sm">
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
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">Tools & Technologies</h3>
    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Verilog HDL</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">EDA Tools (Synthesis, PnR, DRC/LVS)</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Embedded C / Microcontrollers</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">MATLAB / Simulink</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Communication Protocol Analyzers</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">PLC Industrial Controls</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid lg:grid-cols-2">
    <div class="border-2 border-emerald-500 bg-slate-50 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">Capstone</p>
      <h4 class="mt-2 text-xl font-bold text-slate-900">Build a Surviving System</h4>
      <p class="mt-2 text-sm text-slate-700">
        Smart IoT monitoring system, wireless telemetry node, FPGA communication controller, or embedded automation system — built and evaluated under real power, communication, and timing constraints.
      </p>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">Career Outcomes</h3>
      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Electronics & Telecommunication Systems Engineer</li>
        <li>Embedded Systems Engineer</li>
        <li>RTL / Physical Design Engineer</li>
        <li>Communication Networks Engineer</li>
      </ul>
    </div>
  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">Learning Experience</h3>
    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "2",
    hours: "15",
    projects: "1 Capstone",
    category: "Management, Analytics & Allied Streams",
    recommended: false,
    image: "https://img.freepik.com/free-photo/data-analytics-business-statistics_53876-124683.jpg?w=740",
    brochure: "/brochures/applied-statistics-quantitative-business-analytics-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Business Statistics</li>
          <li>Descriptive Statistics</li>
          <li>Probability Concepts</li>
          <li>Data Distributions & Sampling</li>
          <li>Correlation & Regression Basics</li>
          <li>Hypothesis Testing & Business Decisions</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Data-Driven Enterprises</li>
        <li>Business Intelligence Growth</li>
        <li>AI & ML Expansion</li>
        <li>Automation & Analytics</li>
        <li>Analytical Talent Demand</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Foundational statistical understanding</li>
        <li>Business data interpretation capability</li>
        <li>Analytical thinking</li>
        <li>Probability and forecasting awareness</li>
        <li>Decision-making confidence using data</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "2",
    hours: "30",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/business-analytics-dashboard-mobile_53876-124684.jpg?w=740",
    brochure: "/brochures/applied-statistics-quantitative-business-analytics-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Foundations of Business Statistics</li>
          <li>Data Summarization & Descriptive Statistics</li>
          <li>Data Visualization & Statistical Reporting</li>
          <li>Probability for Business Analytics</li>
          <li>Sampling & Estimation</li>
          <li>Hypothesis Testing & Business Decision-Making</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Data-Driven Business Models</li>
        <li>AI & ML Statistical Foundations</li>
        <li>Predictive Analytics growth</li>
        <li>Business Intelligence adoption</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to interpret business data statistically</li>
        <li>Apply probability and forecasting</li>
        <li>Conduct hypothesis testing</li>
        <li>Analyse variable relationships</li>
        <li>Support ML projects</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "60",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/statistics-decision-science-analytics_53876-124685.jpg?w=740",
    brochure: "/brochures/applied-statistics-quantitative-business-analytics-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Applied Statistics and Quantitative Business Analytics
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Become a data-driven decision-making specialist.
        </p>
      </div>

     
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Business Statistics
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Statistical Thinking</li>
          <li>Central Tendency & Dispersion</li>
          <li>Data Visualisation</li>
          <li>Business Applications</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Statistical Analysis
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Probability Theory</li>
          <li>Confidence Intervals</li>
          <li>Hypothesis Testing</li>
          <li>Regression Fundamentals</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Statistical Modelling
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Predictive Analytics</li>
          <li>Multivariate Analysis</li>
          <li>Time Series</li>
          <li>Forecasting Models</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Analytics & Decision Science
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Decision Analytics</li>
          <li>Risk Analytics</li>
          <li>Experimental Design</li>
          <li>AI Model Evaluation</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Microsoft Excel</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Statistical Templates</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Forecasting Models</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Scenario Planning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Research Frameworks</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise Decision Intelligence Project
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Business Analyst</li>
        <li>Market Research Analyst</li>
        <li>Decision Science Associate</li>
        <li>Risk Analyst</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "2",
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/excel-spreadsheet-analytics_53876-124686.jpg?w=740",
    brochure: "/brochures/enterprise-reporting-automation-excel-vba-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Business Statistics</li>
          <li>Advanced Excel Functions</li>
          <li>Data Cleaning & Data Preparation</li>
          <li>Pivot Tables & Analytical Reporting</li>
          <li>Dashboard Development</li>
          <li>VBA & Automation Basics</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Data-Driven Businesses</li>
        <li>Dashboarding Demand</li>
        <li>Workflow Automation (VBA)</li>
        <li>Business Intelligence Growth</li>
        <li>Excel Analytics Usage globally</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Practical Excel analytics capability</li>
        <li>Dashboard creation skills</li>
        <li>Business reporting confidence</li>
        <li>Data cleaning & organisation skills; introductory VBA</li>
        <li>Automation exposure</li>
        <li>Analytical interpretation capability</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "2",
    hours: "30",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/business-dashboard-laptop-analytics_53876-124687.jpg?w=740",
    brochure: "/brochures/enterprise-reporting-automation-excel-vba-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Excel for Business Analytics</li>
          <li>Advanced Excel Functions</li>
          <li>Data Cleaning & Data Preparation</li>
          <li>Pivot Tables & Advanced Reporting</li>
          <li>Dashboard Design & Visualization</li>
          <li>Business Analytics & Performance Monitoring</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Executive Business Dashboard</li>
        <li>Financial Performance Analytics</li>
        <li>HR Analytics Dashboard</li>
        <li>Automated MIS Reporting System</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to build professional dashboards</li>
        <li>Analyse large business datasets</li>
        <li>Automate workflows using VBA</li>
        <li>Create executive-level reports</li>
        <li>Design KPI monitoring systems</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "60",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/excel-vba-automation-dashboard_53876-124688.jpg?w=740",
    brochure: "/brochures/enterprise-reporting-automation-excel-vba-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Enterprise Reporting and Automation with Excel and VBA
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Become an advanced business analytics and automation specialist.
        </p>
      </div>

  
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Excel Analytics
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Data Management</li>
          <li>Formula Development</li>
          <li>Pivot Tables & Charts</li>
          <li>Reporting Fundamentals</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Business Analytics
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Advanced Functions</li>
          <li>KPI Tracking</li>
          <li>Dashboard Design</li>
          <li>Performance Analysis</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced VBA & Automation
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>VBA Programming</li>
          <li>User Forms</li>
          <li>Automated Reports</li>
          <li>Workflow Automation</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Reporting & Decision Intelligence
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>MIS Architecture</li>
          <li>Financial Modelling</li>
          <li>Executive Dashboards</li>
          <li>Strategic Decision Support</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Microsoft Excel</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Pivot Tables & Charts</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">VBA & Macros</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Interactive Dashboards</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">MIS Frameworks</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise BI and Automation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Business Analyst</li>
        <li>MIS Manager</li>
        <li>Financial Analyst</li>
        <li>Excel Automation Specialist</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "2",
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/power-bi-dashboard-analytics_53876-124689.jpg?w=740",
    brochure: "/brochures/enterprise-business-intelligence-power-bi-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Business Intelligence & Power BI</li>
          <li>Data Import & Data Preparation</li>
          <li>Data Modeling Fundamentals</li>
          <li>Dashboard Development & Visualization</li>
          <li>Interactive Reporting & Storytelling</li>
          <li>Publishing & Business Applications</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Business Intelligence Growth</li>
        <li>Data Visualization Adoption</li>
        <li>Real-Time Reporting replacing static reports</li>
        <li>Enterprise Analytics Expansion</li>
        <li>Power BI global adoption growth</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Practical dashboard development capability</li>
        <li>Business reporting skills</li>
        <li>Data visualization understanding</li>
        <li>KPI interpretation capability</li>
        <li>Interactive reporting exposure</li>
        <li>Business storytelling confidence</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "2",
    hours: "30",
    projects: "1 Capstone",
    category: "Management, Analytics & Allied Streams",
    recommended: false,
    image: "https://img.freepik.com/free-photo/power-bi-laptop-charts_53876-124690.jpg?w=740",
    brochure: "/brochures/enterprise-business-intelligence-power-bi-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Business Intelligence</li>
          <li>Power BI Fundamentals</li>
          <li>Data Preparation using Power Query</li>
          <li>Data Modeling</li>
          <li>Data Visualization & Dashboard Design</li>
          <li>DAX Fundamentals</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Business Intelligence Growth</li>
        <li>Data Visualization Adoption</li>
        <li>Real-Time Reporting replacing static reports</li>
        <li>Enterprise Analytics Expansion</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to build professional Power BI dashboards</li>
        <li>Transform and prepare business data</li>
        <li>Create interactive reports; design KPI monitoring systems</li>
        <li>Apply DAX for business calculations</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "60",
    projects: "1 Capstone",
    category: "Management, Analytics & Allied Streams",
    recommended: true,
    image: "https://img.freepik.com/free-photo/power-bi-enterprise-dashboard_53876-124691.jpg?w=740",
    brochure: "/brochures/enterprise-business-intelligence-power-bi-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Enterprise Business Intelligence with Microsoft Power BI
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Become a business intelligence & data visualisation expert.
        </p>
      </div>

    
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Business Intelligence
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Power BI Environment</li>
          <li>Data Import & Connectivity</li>
          <li>Dashboard Fundamentals</li>
          <li>Visualisation Principles</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Applied Power BI Development
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Power Query</li>
          <li>Data Modelling</li>
          <li>DAX Fundamentals</li>
          <li>KPI Dashboard Design</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Advanced Analytics & Reporting
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Advanced DAX</li>
          <li>Time Intelligence</li>
          <li>Dynamic Dashboards</li>
          <li>Data Storytelling</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Business Intelligence
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Enterprise Data Architecture</li>
          <li>Performance Management</li>
          <li>BI Governance</li>
          <li>Decision Intelligence</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Microsoft Power BI</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Power Query</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">DAX</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Interactive Dashboards</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Excel · CSV · SQL</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise BI Solution
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Power BI Developer</li>
        <li>Business Intelligence Analyst</li>
        <li>Data Visualisation Specialist</li>
        <li>MIS Analyst</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "2",
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/business-presentation-public-speaking_53876-124692.jpg?w=740",
    brochure: "/brochures/business-communication-executive-facilitation-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Structured Thinking Foundations</li>
          <li>Professional Communication Skills</li>
          <li>Public Speaking & Presentation Skills</li>
          <li>Business Storytelling & Persuasion</li>
          <li>Executive Presence Development</li>
          <li>Workplace Communication & Collaboration</li>
          <li>Executive Presence & Leadership Communication</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Leadership Communication Demand</li>
        <li>Collaborative Work Environments</li>
        <li>Presentation-Driven Workplaces</li>
        <li>Client & Stakeholder Engagement</li>
        <li>Executive Presence Importance for career growth</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Structured thinking capability</li>
        <li>Professional communication confidence</li>
        <li>Public speaking exposure</li>
        <li>Executive presentation skills</li>
        <li>Persuasive communication understanding</li>
        <li>Leadership communication awareness</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "2",
    hours: "30",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/professional-typing-computer-office_53876-124693.jpg?w=740",
    brochure: "/brochures/business-communication-executive-facilitation-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Foundations of Clear Thinking & Communication</li>
          <li>Professional Communication Excellence</li>
          <li>Presentation Skills & Public Speaking</li>
          <li>Business Storytelling & Persuasion</li>
          <li>Executive Presence Development</li>
          <li>Workplace Communication & Stakeholder Management</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Hybrid Work communication clarity needs</li>
        <li>Leadership Development communication as core competency</li>
        <li>Cross-Functional Collaboration</li>
        <li>Client-Facing Roles requiring persuasion</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to communicate ideas clearly and confidently</li>
        <li>Deliver impactful presentations</li>
        <li>Influence stakeholders professionally</li>
        <li>Handle difficult conversations</li>
        <li>Build executive presence</li>
        <li>Apply storytelling in business</li>
        <li>Lead workplace discussions</li>
        <li>Develop professional communication portfolio</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "60",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/executive-presentation-leadership-meeting_53876-124694.jpg?w=740",
    brochure: "/brochures/business-communication-executive-facilitation-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Business Communication & Executive Facilitation
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Master professional communication, executive presence & facilitation.
        </p>
      </div>

      
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Strategic Communication
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Structured Thinking</li>
          <li>Communication Standards</li>
          <li>Critical Thinking</li>
          <li>Self-Assessment</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Professional & Executive Communication
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Active Listening</li>
          <li>Presentation Mastery</li>
          <li>Executive Presence</li>
          <li>Personal Branding</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Storytelling, Influence & Facilitation
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Business Storytelling</li>
          <li>Persuasion Frameworks</li>
          <li>Stakeholder Communication</li>
          <li>Workshop Facilitation</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Enterprise Communication & Leadership
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Leadership Communication</li>
          <li>Crisis & Change Communication</li>
          <li>Difficult Conversations</li>
          <li>Strategic Messaging</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Structured Thinking Frameworks</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Business Presentation Models</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Executive Messaging Frameworks</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Narrative Design</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Facilitation Toolkits</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Communication Excellence Capstone
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Corporate Communication Specialist</li>
        <li>Learning & Development Facilitator</li>
        <li>Executive Communication Coach</li>
        <li>Team & Function Lead</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },

  // Workplace Wellbeing & Organisational Behaviour Design ICP
  {
    slug: "workplace-wellbeing-organisational-behaviour-design-icp",
    title: "Workplace Wellbeing & Organisational Behaviour Design (ICP)",
    description: "An Industry Certificate Program covering leadership identity & self-awareness, executive presence, and decision-making under pressure using the OODA loop and pre-mortem analysis.",
    months: "2",
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/thoughtful-professional-working-laptop_53876-124695.jpg?w=740",
    brochure: "/brochures/workplace-wellbeing-organisational-behaviour-design-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Leadership Identity & Self-Awareness</li>
          <li>Executive Presence (Gravitas, Communication, Appearance)</li>
          <li>Decision-Making Under Pressure (OODA Loop, Pre-mortem Analysis)</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Leadership Talent Shortage</li>
        <li>Hybrid Work driving communication importance</li>
        <li>Business Transformation requiring strategic leadership</li>
        <li>Cross-Functional Collaboration</li>
        <li>Succession Planning as business priority</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Clear understanding of personal leadership style</li>
        <li>Improved executive presence</li>
        <li>Stronger leadership communication</li>
        <li>Enhanced decision-making confidence</li>
        <li>Strategic thinking awareness</li>
        <li>Increased professional credibility</li>
        <li>Structured leadership development roadmap</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
    </p>
  </div>

</section>
    `
  },

  // Workplace Wellbeing & Organisational Behaviour Design IDP
  {
    slug: "workplace-wellbeing-organisational-behaviour-design-idp",
    title: "Workplace Wellbeing & Organisational Behaviour Design (IDP)",
    description: "An Industry Diploma Program with 30 weekend hours covering foundations of leadership, self-leadership & emotional intelligence, executive presence, strategic thinking, decision-making, and leading high-performance teams.",
    months: "2",
    hours: "30",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/cozy-home-office-workspace_53876-124696.jpg?w=740",
    brochure: "/brochures/workplace-wellbeing-organisational-behaviour-design-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Foundations of Leadership</li>
          <li>Self-Leadership & Emotional Intelligence</li>
          <li>Executive Presence & Professional Influence</li>
          <li>Strategic Thinking & Business Acumen</li>
          <li>Decision-Making & Problem Solving</li>
          <li>Leading High-Performance Teams</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Leadership Talent Gap</li>
        <li>Digital Transformation requiring change management</li>
        <li>Hybrid Work Models requiring strong people leadership</li>
        <li>Workforce Evolution driving coaching demand</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to lead teams with confidence</li>
        <li>Apply strategic thinking to business challenges</li>
        <li>Build executive presence and influence</li>
        <li>Make informed decisions under uncertainty</li>
        <li>Manage stakeholders; lead change initiatives</li>
        <li>Improve team performance and engagement</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "60",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/positive-psychology-wellbeing-workplace_53876-124697.jpg?w=740",
    brochure: "/brochures/workplace-wellbeing-organisational-behaviour-design-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Workplace Wellbeing & Organisational Behaviour Design
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Design a life of sustainable success, well-being & leadership.
        </p>
      </div>

    
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Happiness & Well-Being
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Happiness Science</li>
          <li>Positive Psychology</li>
          <li>Human Motivation</li>
          <li>Purpose & Meaning</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Emotional Intelligence & Personal Effectiveness
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>EQ Frameworks</li>
          <li>Self-Regulation</li>
          <li>Empathy Development</li>
          <li>Stress Management</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Productivity, Habits & Peak Performance
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Behavioural Science</li>
          <li>Habit Design</li>
          <li>Productivity Systems</li>
          <li>Performance Psychology</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Leadership, Well-Being & Human Flourishing
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Leadership Well-Being</li>
          <li>Organisational Happiness</li>
          <li>Psychological Safety</li>
          <li>Sustainable Success</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">PERMA & Well-being Frameworks</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">EQ Assessment Models</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Habit & Goal Systems</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Positive Leadership Frameworks</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Life Design Models</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Happiness Engineering Framework
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>People & Culture Associate</li>
        <li>Well-being Programme Lead</li>
        <li>Learning & Development Specialist</li>
        <li>Positive Leadership Coach</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "2",
    hours: "15",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/chess-strategy-power-dynamics_53876-124698.jpg?w=740",
    brochure: "/brochures/organisational-psychology-strategic-influence-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Understanding Organisational Dynamics</li>
          <li>Mapping Power & Networks</li>
          <li>Visibility & Reputation Management</li>
          <li>Navigating Political Situations</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Matrix Organisations requiring multi-stakeholder navigation</li>
        <li>Collaborative Work Models · Leadership Pipeline Development</li>
        <li>Cross-Functional Teams</li>
        <li>Visibility & Reputation impact on career</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Understanding of organisational power structures</li>
        <li>Stakeholder management capability</li>
        <li>Workplace influence awareness; professional visibility strategies</li>
        <li>Relationship-building skills</li>
        <li>Ethical persuasion capability</li>
        <li>Leadership readiness and organisational confidence</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "2",
    hours: "30",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/journal-coffee-morning-planning_53876-124699.jpg?w=740",
    brochure: "/brochures/organisational-psychology-strategic-influence-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Understanding Organisational Dynamics</li>
          <li>Intelligence & Organisational Awareness</li>
          <li>Stakeholder Management</li>
          <li>Professional Visibility & Personal Brand</li>
          <li>Influence & Persuasion Strategies</li>
          <li>Communication for Influence</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Matrix Organisation complexity</li>
        <li>Cross-Functional Teams requiring influence over authority</li>
        <li>Leadership Development prioritising political intelligence</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Understanding of organisational power dynamics</li>
        <li>Ability to build strategic stakeholder relationships</li>
        <li>Ethical and effective influence</li>
        <li>Improved workplace visibility</li>
        <li>Confident navigation of organisational challenges</li>
        <li>Professional conflict management</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    category: "Management, Analytics & Allied Streams",
    hours: "60",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/executive-networking-boardroom-strategy_53876-124700.jpg?w=740",
    brochure: "/brochures/organisational-psychology-strategic-influence-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Organisational Psychology & Strategic Influence
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Master organisational influence, leadership & strategic networking.
        </p>
      </div>

     
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Foundations of Organisational Dynamics
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Organisational Culture</li>
          <li>Power Structures</li>
          <li>Informal Networks</li>
          <li>Professional Credibility</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Professional Influence & Relationship Building
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Stakeholder Identification</li>
          <li>Relationship Management</li>
          <li>Networking Strategies</li>
          <li>Trust Building</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Strategic Influence & Political Intelligence
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Political Intelligence</li>
          <li>Organisational Mapping</li>
          <li>Negotiation Skills</li>
          <li>Executive Communication</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Leadership & Organisational Impact
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Leadership Presence</li>
          <li>Change Leadership</li>
          <li>Strategic Stakeholder Management</li>
          <li>Driving Alignment</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Influence Mapping Frameworks</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Political Intelligence Models</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Executive Communication Frameworks</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Negotiation & Consensus Models</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Relationship Development Systems</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Organisational Influence Strategy
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>People & Org Development Associate</li>
        <li>Stakeholder / Programme Manager</li>
        <li>Change Management Associate</li>
        <li>Leadership Pipeline Candidate</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
    </div>
  </div>

</section>
    `
  },
  // Executive Leadership & Strategic Management ICP
  {
    slug: "executive-leadership-strategic-management-icp",
    title: "Executive Leadership & Strategic Management (ICP)",
    description: "An Industry Certificate Program covering happiness engineering, emotional intelligence & self-awareness, productivity & sustainable performance, stress management & resilience, and workplace well-being.",
    months: "2",
    category: "Management, Analytics & Allied Streams",
    hours: "15",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/chess-king-leadership-strategy_53876-124701.jpg?w=740",
    brochure: "/brochures/executive-leadership-strategic-management-icp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Learn the Fundamentals -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Certificate • ICP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn the Fundamentals
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          15 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Introduction to Happiness Engineering</li>
          <li>Emotional Intelligence & Self-Awareness</li>
          <li>Productivity, Habits & Sustainable Performance</li>
          <li>Stress Management & Resilience</li>
          <li>Workplace Well-being & Collaboration</li>
          <li>Personal Growth & Long-Term Well-being</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Senior leadership requiring political intelligence</li>
        <li>Transformation initiatives requiring change navigation</li>
        <li>Executive stakeholder complexity</li>
        <li>Cross-functional influence as a differentiator</li>
        <li>Organisational diplomacy demand</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Emotional resilience capability</li>
        <li>Productivity and focus improvement</li>
        <li>Workplace well-being awareness</li>
        <li>Emotional intelligence development</li>
        <li>Stress management understanding</li>
        <li>Sustainable performance frameworks</li>
        <li>Improved work-life integration</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "2",
    hours: "30",
    category: "Management, Analytics & Allied Streams",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/chess-pieces-hexagon-board-strategy_53876-124702.jpg?w=740",
    brochure: "/brochures/executive-leadership-strategic-management-idp.pdf",
    features: {
      mentorship: true,
      careerSupport: true
    },
    brochureContent: `
  <section class="space-y-6">

  <!-- MAIN SECTION: Industry Diploma -->
  <div class="bg-slate-100 p-8">

    <div class="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Industry Diploma • IDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Learn. Apply. Build.
        </h2>
      </div>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow">
          30 HRS
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          WEEKEND • OFFLINE
        </span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
          BEGINNER–INTERMEDIATE
        </span>
      </div>
    </div>

    <div class="grid gap-10 md:grid-cols-2">

      <!-- What You'll Learn -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          What You'll Learn
        </h3>

        <ul class="list-disc space-y-2 pl-5 text-slate-700">
          <li>Foundations of Leadership</li>
          <li>Self-Leadership & Emotional Intelligence</li>
          <li>Executive Presence & Professional Influence</li>
          <li>Strategic Thinking & Business Acumen</li>
          <li>Decision-Making & Problem Solving</li>
          <li>Leading High-Performance Teams</li>
        </ul>
      </div>

      <!-- Career Entry Points -->
      <div>
        <h3 class="mb-4 text-lg font-bold text-slate-900">
          Career Entry Points
        </h3>

        <div class="flex flex-wrap gap-3">
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            Data Analyst
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            AI Associate
          </span>
          <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">
            BI Analyst
          </span>
        </div>

        <div class="mt-6">
          <p class="font-semibold text-slate-900">
            Industry Certificate Program
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- TRENDS & LEARNINGS (side-by-side) -->
  <div class="grid  lg:grid-cols-2">

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Current Industry Trends
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Leadership Talent Gap</li>
        <li>Digital Transformation requiring change management</li>
        <li>Hybrid Work Models requiring strong people leadership</li>
        <li>Workforce Evolution driving coaching demand</li>
        <li>Business Complexity making strategic thinking critical</li>
      </ul>
    </div>

    <div class="bg-slate-100 p-8">
      <h2 class="mb-6 text-3xl font-bold text-slate-900">
        Key Learnings
      </h2>

      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Ability to lead teams with confidence</li>
        <li>Apply strategic thinking to business challenges</li>
        <li>Build executive presence and influence</li>
        <li>Make informed decisions under uncertainty</li>
        <li>Manage stakeholders; lead change initiatives</li>
        <li>Improve team performance and engagement</li>
      </ul>
    </div>

  </div>

  <!-- IDEAL PARTICIPANTS -->
  <div class="bg-slate-100 p-8">
    <h2 class="mb-5 text-3xl font-bold text-slate-900">
      Ideal Participants
    </h2>

    <p class="text-slate-700">
      Students & Graduates | Analysts & Engineers | Working Professionals | Career Changers
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
    months: "3",
    hours: "60",
    projects: "1 Capstone",
    category: "Management, Analytics & Allied Streams",
    recommended: true,
    image: "https://img.freepik.com/free-photo/executive-leadership-boardroom-strategy_53876-124703.jpg?w=740",
    brochure: "/brochures/executive-leadership-strategic-management-aidp.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Advanced Industry Diploma • AIDP
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Executive Leadership & Strategic Management
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Transform into a strategic leader for the future of business.
        </p>
      </div>

    
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">60</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Contact Hours
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">20</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Weekend Sessions
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-xl font-bold text-emerald-600">Offline</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Live · Instructor-Led
        </p>
      </div>

      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">
          Advanced<br>Diploma
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">
          Credential
        </p>
      </div>
    </div>
  </div>

  <!-- CURRICULUM · FOUR PHASES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum · Four Phases
    </h3>

    <div class="grid gap-4 md:grid-cols-2">

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">01</span>
          Leadership Foundations
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Leadership Principles & Styles</li>
          <li>Self-Awareness</li>
          <li>Emotional Intelligence</li>
          <li>Leadership Mindset</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">02</span>
          Team & People Leadership
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Team Dynamics</li>
          <li>Coaching & Mentoring</li>
          <li>Performance Management</li>
          <li>Conflict Resolution</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">03</span>
          Strategic Leadership & Organisational Impact
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Strategic Thinking</li>
          <li>Business Acumen</li>
          <li>Decision-Making</li>
          <li>Stakeholder Leadership</li>
        </ul>
      </div>

      <div class="bg-white p-5 shadow">
        <p class="text-sm font-bold text-slate-900">
          <span class="mr-2 text-2xl text-emerald-600">04</span>
          Transformation & Future Leadership
        </p>

        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Change Management</li>
          <li>Innovation Leadership</li>
          <li>Leadership Agility</li>
          <li>Sustainable Growth</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- TOOLS & TECHNOLOGIES -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Tools & Technologies
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Leadership Assessment Models</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Business Strategy Frameworks</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Decision-Making Models</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Change Management Frameworks</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Executive Communication Frameworks</span>
    </div>
  </div>

  <!-- CAPSTONE & CAREER OUTCOMES -->
  <div class="grid  lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Leadership Transformation Project
      </h4>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Outcomes
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Functional Manager</li>
        <li>Business Unit Lead</li>
        <li>Transformation Lead</li>
        <li>Senior Leadership Track</li>
      </ul>
    </div>

  </div>

  <!-- LEARNING EXPERIENCE -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-3 text-lg font-bold text-slate-900">
      Learning Experience
    </h3>

    <div class="flex flex-wrap gap-2">
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Project-Based Learning</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Industry Mentorship</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Portfolio Development</span>
      <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Capstone Showcase</span>
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
    months: "6",
    category: "Postgraduate Certificate Programmes",
    hours: "150",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/fintech-digital-finance-payments_53876-124710.jpg?w=740",
    brochure: "/brochures/fintech-digital-finance.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Postgraduate Certificate Programme
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          FinTech &amp; Digital Finance
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Lead the future of digital financial innovation.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">150</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Months</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">50 &times; 3 Hrs</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Sessions</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">Weekend</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Executive Mode</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">PG<br>Certificate</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>

    <p class="mt-6 text-slate-700">
      Open banking, digital payments, embedded finance, blockchain, CBDCs and AI-powered services are redefining how the world interacts with money. This programme prepares professionals to understand, design and lead digital finance initiatives across banks, FinTech startups, regulators and technology organisations.
    </p>
  </div>

  <!-- CURRICULUM -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum &middot; 15 Modules
    </h3>

    <div class="grid gap-x-8 gap-y-2 md:grid-cols-3">
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Global Financial Ecosystem &amp; FinTech Evolution</li>
        <li>Digital Banking &amp; Open Banking</li>
        <li>Payments Infrastructure &amp; Digital Transactions</li>
        <li>Financial Products &amp; Digital Lending</li>
        <li>Blockchain &amp; Digital Finance</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Central Bank Digital Currencies (CBDCs)</li>
        <li>Embedded Finance &amp; Banking as a Service</li>
        <li>RegTech &amp; Compliance Technologies</li>
        <li>Financial Crime Analytics</li>
        <li>Cybersecurity in Financial Systems</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>AI &amp; Analytics in Finance</li>
        <li>FinTech Product Strategy</li>
        <li>FinTech Innovation &amp; Venture Ecosystems</li>
        <li>Digital Finance Leadership &amp; Transformation</li>
      </ul>
    </div>
  </div>

  <!-- WHAT YOU'LL BE ABLE TO DO -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      What You'll Be Able To Do
    </h3>

    <div class="grid gap-2 md:grid-cols-2">
      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Understand global FinTech ecosystems</li>
        <li>Design digital financial solutions</li>
        <li>Evaluate emerging financial technologies</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Analyse payment infrastructures</li>
        <li>Assess digital banking models</li>
        <li>Lead digital finance transformation</li>
      </ul>
    </div>
  </div>

  <!-- CAPSTONE & CAREER -->
  <div class="grid lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        National-Scale FinTech Transformation Strategy
      </h4>

      <div class="mt-4 flex flex-wrap gap-2">
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">FinTech Adoption Roadmap</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Regulatory Compliance Framework</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Digital Payment Framework</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Risk Assessment Model</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Financial Inclusion Strategy</span>
      </div>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Pathways
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>FinTech Consultant</li>
        <li>Product Manager &ndash; FinTech</li>
        <li>Digital Banking Specialist</li>
        <li>Financial Innovation Manager</li>
        <li>Payments Strategy Analyst</li>
        <li>Digital Transformation Consultant</li>
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
    months: "6",
    category: "Postgraduate Certificate Programmes",
    hours: "150",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/cybersecurity-threat-intelligence-network_53876-124711.jpg?w=740",
    brochure: "/brochures/cybersecurity-ai-driven-threat-intelligence.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Postgraduate Certificate Programme
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Cybersecurity &amp; AI-Driven Threat Intelligence
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Defend the digital enterprise with AI-powered security intelligence.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">150</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Months</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">50 &times; 3 Hrs</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Sessions</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">Weekend</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Executive Mode</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">PG<br>Certificate</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>

    <p class="mt-6 text-slate-700">
      As cyberattacks grow more sophisticated and AI-enabled, organisations need professionals who integrate traditional security operations with advanced threat intelligence and AI-powered defence. This programme builds the capability to detect, analyse, respond to and prevent modern cyber threats at enterprise scale.
    </p>
  </div>

  <!-- CURRICULUM -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum &middot; 15 Modules
    </h3>

    <div class="grid gap-x-8 gap-y-2 md:grid-cols-3">
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Cybersecurity Foundations</li>
        <li>Information Security Management</li>
        <li>Network Security Architecture, Endpoint &amp; Cloud Security</li>
        <li>Ethical Hacking &amp; Penetration Testing</li>
        <li>Security Operations Center (SOC)</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Threat Intelligence &amp; Threat Hunting</li>
        <li>SIEM Platforms &amp; Log Analytics</li>
        <li>Digital Forensics &amp; Incident Response</li>
        <li>Cyber Risk Management</li>
        <li>Identity &amp; Access Management</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>AI-Driven Threat Intelligence</li>
        <li>Security Analytics &amp; Machine Learning</li>
        <li>Automated Security Operations</li>
        <li>Cybersecurity Leadership &amp; Governance</li>
      </ul>
    </div>
  </div>

  <!-- WHAT YOU'LL BE ABLE TO DO -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      What You'll Be Able To Do
    </h3>

    <div class="grid gap-2 md:grid-cols-2">
      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Design cybersecurity frameworks</li>
        <li>Conduct threat intelligence analysis</li>
        <li>Perform ethical hacking assessments</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Build security monitoring systems</li>
        <li>Implement AI-powered threat detection</li>
        <li>Lead cybersecurity transformation</li>
      </ul>
    </div>
  </div>

  <!-- CAPSTONE & CAREER -->
  <div class="grid lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise Cyber Defence Transformation Strategy
      </h4>

      <div class="mt-4 flex flex-wrap gap-2">
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Security Architecture Blueprint</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Threat Intelligence Framework</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Incident Response Strategy</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">AI-Powered Monitoring System</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Governance &amp; Compliance Roadmap</span>
      </div>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Pathways
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>SOC Analyst</li>
        <li>Security Operations Manager</li>
        <li>Cybersecurity Analyst</li>
        <li>Threat Intelligence Specialist</li>
        <li>Cyber Risk Consultant</li>
        <li>Digital Forensics Specialist</li>
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
    months: "6",
    category: "Postgraduate Certificate Programmes",
    hours: "150",
    projects: "1 Capstone",
    recommended: false,
    image: "https://img.freepik.com/free-photo/blockchain-decentralised-network-technology_53876-124712.jpg?w=740",
    brochure: "/brochures/blockchain-decentralised-systems.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Postgraduate Certificate Programme
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Blockchain &amp; Decentralised Systems
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Build the decentralised systems powering the next internet.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">150</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Months</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">50 &times; 3 Hrs</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Sessions</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">Weekend</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Executive Mode</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">PG<br>Certificate</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>

    <p class="mt-6 text-slate-700">
      Blockchain, smart contracts, decentralised finance and Web3 are reshaping digital infrastructure across finance, supply chains and the enterprise. This programme builds the architecture, development and strategy capability to evaluate, design and lead decentralised systems.
    </p>
  </div>

  <!-- CURRICULUM -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum &middot; 15 Modules
    </h3>

    <div class="grid gap-x-8 gap-y-2 md:grid-cols-3">
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Blockchain Foundations</li>
        <li>Distributed Ledger Technology</li>
        <li>Cryptography &amp; Consensus Mechanisms</li>
        <li>Bitcoin &amp; Digital Currencies</li>
        <li>Ethereum &amp; Smart Contracts</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Solidity Programming</li>
        <li>Decentralised Applications (dApps)</li>
        <li>DeFi &ndash; Decentralised Finance</li>
        <li>Tokenisation &amp; Digital Assets</li>
        <li>NFTs &amp; Web3</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Enterprise Blockchain (Hyperledger)</li>
        <li>Blockchain Security &amp; Auditing</li>
        <li>Scalability &amp; Interoperability</li>
        <li>Governance &amp; Regulation</li>
        <li>Blockchain Strategy &amp; Transformation</li>
      </ul>
    </div>
  </div>

  <!-- WHAT YOU'LL BE ABLE TO DO -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      What You'll Be Able To Do
    </h3>

    <div class="grid gap-2 md:grid-cols-2">
      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Understand blockchain architecture</li>
        <li>Design &amp; deploy smart contracts</li>
        <li>Evaluate DeFi &amp; tokenisation models</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Assess enterprise blockchain use cases</li>
        <li>Build decentralised applications</li>
        <li>Lead blockchain transformation</li>
      </ul>
    </div>
  </div>

  <!-- CAPSTONE & CAREER -->
  <div class="grid lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise Blockchain Transformation Strategy
      </h4>

      <div class="mt-4 flex flex-wrap gap-2">
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Blockchain Adoption Roadmap</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Smart Contract Architecture</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Tokenisation Framework</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Governance &amp; Compliance Model</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Decentralised Application Design</span>
      </div>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Pathways
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Blockchain Developer</li>
        <li>Smart Contract Engineer</li>
        <li>Web3 Product Manager</li>
        <li>Blockchain Consultant</li>
        <li>DeFi Analyst</li>
        <li>Decentralised Systems Strategist</li>
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
    months: "6",
    hours: "150",
    category: "Postgraduate Certificate Programmes",
    projects: "1 Capstone",
    recommended: true,
    image: "https://img.freepik.com/free-photo/data-science-machine-learning-ai-network_53876-124713.jpg?w=740",
    brochure: "/brochures/data-science-machine-learning-ai-engineering.pdf",
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
        <p class="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Postgraduate Certificate Programme
        </p>

        <h2 class="mt-2 text-4xl font-bold text-slate-900">
          Data Science, Machine Learning &amp; AI Engineering
        </h2>

        <p class="mt-2 text-lg text-slate-700">
          Build the intelligent systems powering data-driven decisions.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">150</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Contact Hours</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-3xl font-bold text-emerald-600">6</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Months</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">50 &times; 3 Hrs</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Sessions</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">Weekend</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Executive Mode</p>
      </div>
      <div class="bg-white p-4 text-center shadow">
        <p class="text-lg font-bold text-emerald-600">PG<br>Certificate</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-slate-600">Credential</p>
      </div>
    </div>

    <p class="mt-6 text-slate-700">
      Data Science, Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by enabling data-driven decision-making, intelligent automation and predictive insights across business, healthcare, finance, manufacturing and technology.
    </p>
  </div>

  <!-- CURRICULUM -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      Curriculum &middot; Modules
    </h3>

    <div class="grid gap-x-8 gap-y-2 md:grid-cols-3">
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Introduction to AI, ML &amp; Data Science</li>
        <li>Python Programming Foundations</li>
        <li>Data Exploration, Visualization &amp; Statistical Analysis</li>
        <li>First Machine Learning Models</li>
        <li>Industry AI Applications</li>
        <li>Feature Engineering</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Regression Models</li>
        <li>Classification Models</li>
        <li>Data Storytelling</li>
        <li>Model Deployment</li>
        <li>Advanced Machine Learning &amp; Ensemble Learning</li>
        <li>Deep Learning</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Neural Networks, TensorFlow &amp; Keras</li>
        <li>Natural Language Processing</li>
        <li>Large Language Models</li>
        <li>Prompt Engineering &amp; AI Agents</li>
        <li>Retrieval-Augmented Generation (RAG) &amp; MLOps Fundamentals</li>
      </ul>
    </div>
  </div>

  <!-- WHAT YOU'LL BE ABLE TO DO -->
  <div class="bg-slate-100 p-8">
    <h3 class="mb-4 text-lg font-bold text-slate-900">
      What You'll Be Able To Do
    </h3>

    <div class="grid gap-2 md:grid-cols-2">
      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Understand Data Science &amp; AI fundamentals</li>
        <li>Build and deploy Machine Learning models</li>
        <li>Analyze and visualize complex datasets</li>
      </ul>
      <ul class="list-disc space-y-2 pl-5 text-slate-700">
        <li>Apply deep learning &amp; NLP techniques</li>
        <li>Build LLM-powered AI applications</li>
        <li>Lead AI &amp; data science transformation</li>
      </ul>
    </div>
  </div>

  <!-- CAPSTONE & CAREER -->
  <div class="grid lg:grid-cols-2">

    <div class="border-2 border-emerald-600 bg-slate-100 p-8">
      <p class="text-xs font-semibold uppercase tracking-wider text-emerald-600">
        Capstone
      </p>

      <h4 class="mt-2 text-xl font-bold text-slate-900">
        Enterprise AI &amp; Data Science Transformation Strategy
      </h4>

      <div class="mt-4 flex flex-wrap gap-2">
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Customer Churn Prediction System</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Fraud Detection Framework</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">AI Chatbot / Generative AI Application</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">Predictive Analytics Model</span>
        <span class="bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow">AI Solution Design</span>
      </div>
    </div>

    <div class="bg-slate-100 p-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">
        Career Pathways
      </h3>

      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>Data Scientist</li>
        <li>Machine Learning Engineer</li>
        <li>AI Product Manager</li>
        <li>AI Consultant</li>
        <li>Data Analyst</li>
        <li>MLOps / AI Systems Strategist</li>
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
    image: "https://img.freepik.com/free-photo/faculty-training-workshop-classroom_53876-124720.jpg?w=740",
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
  <div class="border-2 border-emerald-600 bg-slate-100 p-8">

    <div class="grid gap-6 lg:grid-cols-2 lg:items-start">
      <h3 class="text-2xl font-bold italic text-emerald-600">
        Enriching the people who build the future.
      </h3>

      <p class="text-slate-700">
        An NEP-aligned, NIRF-oriented Faculty Development Programme that strengthens teaching effectiveness, research productivity and institutional performance &ndash; with hands-on exposure to 40+ modern AI and digital tools.
      </p>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">

      <div class="border-l-4 border-emerald-600 pl-4">
        <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Day 1</p>
        <h4 class="text-lg font-bold text-slate-900">Teaching Excellence, NEP Alignment &amp; AI Tools</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>NEP 2020 framework &amp; NIRF (TLR) alignment</li>
          <li>Bloom's Taxonomy &amp; Outcome-Based course design</li>
          <li>AI tools for teaching: ChatGPT, Notion AI, Canva, Gamma, Desmos</li>
          <li>Assessments that measure thinking, not memory</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-600 pl-4">
        <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Day 2</p>
        <h4 class="text-lg font-bold text-slate-900">Research Productivity, Patents &amp; Publication Strategy</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>AI research tools: NotebookLM, Perplexity, Elicit, Zotero, Overleaf</li>
          <li>Patent module: novelty, filing, patent search tools</li>
          <li>Faculty weekly productivity blueprint &amp; dashboards</li>
          <li>NEP &amp; NIRF-aligned 1-year KPI roadmap</li>
        </ul>
      </div>

    </div>

    <div class="mt-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">Outcomes</h3>
      <div class="grid gap-x-6 gap-y-1 sm:grid-cols-2">
        <ul class="list-disc space-y-1 pl-5 text-slate-700">
          <li>NEP &amp; NIRF KPI roadmap</li>
          <li>40+ AI tools for teaching &amp; research</li>
          <li>Faster, structured literature reviews</li>
        </ul>
        <ul class="list-disc space-y-1 pl-5 text-slate-700">
          <li>OBE-aligned teaching &amp; assessment plans</li>
          <li>Patent-orientation &amp; publication readiness</li>
          <li>Faculty productivity systems &amp; dashboards</li>
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
    image: "https://img.freepik.com/free-photo/students-workshop-training-session_53876-124721.jpg?w=740",
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
  <div class="border-2 border-emerald-600 bg-slate-100 p-8">

    <div class="grid gap-6 lg:grid-cols-2 lg:items-start">
      <h3 class="text-2xl font-bold italic text-emerald-600">
        Enriching the people who build the future.
      </h3>

      <p class="text-slate-700">
        A standalone, customisable workshop series that equips students with the technical fluency, communication confidence and industry orientation needed to become day-one-ready for the modern workplace.
      </p>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">

      <div class="border-l-4 border-emerald-600 pl-4">
        <h4 class="text-lg font-bold text-slate-900">AI &amp; Digital Fluency</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Generative AI &amp; prompt fundamentals</li>
          <li>Productivity &amp; research tools</li>
          <li>Future-of-work readiness</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-600 pl-4">
        <h4 class="text-lg font-bold text-slate-900">Technical Foundations</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Coding &amp; analytics basics</li>
          <li>Data &amp; dashboarding exposure</li>
          <li>Hands-on mini-projects</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-600 pl-4">
        <h4 class="text-lg font-bold text-slate-900">Communication &amp; Employability</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Structured thinking &amp; presentation</li>
          <li>Interview &amp; aptitude readiness</li>
          <li>Personal brand &amp; portfolio</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-600 pl-4">
        <h4 class="text-lg font-bold text-slate-900">Career &amp; Industry Orientation</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Industry expectations &amp; roles</li>
          <li>Career pathway mapping</li>
          <li>Placement preparation</li>
        </ul>
      </div>

    </div>

    <div class="mt-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">Outcomes</h3>
      <div class="grid gap-x-6 gap-y-1 sm:grid-cols-2">
        <ul class="list-disc space-y-1 pl-5 text-slate-700">
          <li>Industry-relevant technical &amp; AI skills</li>
          <li>Communication &amp; employability confidence</li>
          <li>Portfolio &amp; project experience</li>
        </ul>
        <ul class="list-disc space-y-1 pl-5 text-slate-700">
          <li>Aptitude &amp; problem-solving capability</li>
          <li>Placement &amp; career readiness</li>
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
    image: "https://img.freepik.com/free-photo/leadership-workshop-students-training_53876-124722.jpg?w=740",
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
  <div class="border-2 border-emerald-600 bg-slate-100 p-8">

    <div class="grid gap-6 lg:grid-cols-2 lg:items-start">
      <h3 class="text-2xl font-bold italic text-emerald-600">
        Enriching the people who build the future.
      </h3>

      <p class="text-slate-700">
        A standalone, customisable workshop series that equips students with the technical fluency, communication confidence and industry orientation needed to become day-one-ready for the modern workplace.
      </p>
    </div>

    <div class="mt-8 grid gap-6 lg:grid-cols-2">

      <div class="border-l-4 border-emerald-600 pl-4">
        <h4 class="text-lg font-bold text-slate-900">AI &amp; Digital Fluency</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Generative AI &amp; prompt fundamentals</li>
          <li>Productivity &amp; research tools</li>
          <li>Future-of-work readiness</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-600 pl-4">
        <h4 class="text-lg font-bold text-slate-900">Technical Foundations</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Coding &amp; analytics basics</li>
          <li>Data &amp; dashboarding exposure</li>
          <li>Hands-on mini-projects</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-600 pl-4">
        <h4 class="text-lg font-bold text-slate-900">Communication &amp; Employability</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Structured thinking &amp; presentation</li>
          <li>Interview &amp; aptitude readiness</li>
          <li>Personal brand &amp; portfolio</li>
        </ul>
      </div>

      <div class="border-l-4 border-emerald-600 pl-4">
        <h4 class="text-lg font-bold text-slate-900">Career &amp; Industry Orientation</h4>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Industry expectations &amp; roles</li>
          <li>Career pathway mapping</li>
          <li>Placement preparation</li>
        </ul>
      </div>

    </div>

    <div class="mt-8">
      <h3 class="mb-3 text-lg font-bold text-slate-900">Outcomes</h3>
      <div class="grid gap-x-6 gap-y-1 sm:grid-cols-2">
        <ul class="list-disc space-y-1 pl-5 text-slate-700">
          <li>Industry-relevant technical &amp; AI skills</li>
          <li>Communication &amp; employability confidence</li>
          <li>Portfolio &amp; project experience</li>
        </ul>
        <ul class="list-disc space-y-1 pl-5 text-slate-700">
          <li>Aptitude &amp; problem-solving capability</li>
          <li>Placement &amp; career readiness</li>
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