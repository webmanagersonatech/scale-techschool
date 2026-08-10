import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, SlidersHorizontal, Clock, Calendar, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { courses } from "../../data/courses";

const categories = Array.from(
  new Set(courses.map((c) => c.category).filter(Boolean))
) as string[];

export default function CoursesPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Pick up ?category= and ?q= from the URL (e.g. links from the footer)
  // so category and search links elsewhere in the site land pre-filtered here.
  useEffect(() => {
    if (!router.isReady) return;
    const { category, q } = router.query;
    if (typeof category === "string" && categories.includes(category)) {
      setActiveCategory(category);
    }
    if (typeof q === "string") {
      setQuery(q);
    }
  }, [router.isReady, router.query]);

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const matchesCategory =
        activeCategory === "All" || c.category === activeCategory;
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        (c.category || "").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <>
      <Head>
        <title>All Courses | Sona Tech-School</title>
        <meta
          name="description"
          content="Browse every programme offered at Sona Tech-School. Search and filter by category to find the right course for you."
        />
      </Head>

      <Navbar />

      {/* HERO / SEARCH BAR */}
      <section className="bg-royal text-white pt-32 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-3"
          >
            Explore Our <span className="text-gold">Courses</span>
          </motion.h1>
          <p className="text-white/70 max-w-2xl mb-8">
            {courses.length} programmes across {categories.length} streams — search
            by name or filter by category to find the right fit.
          </p>

          {/* Search box */}
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses (e.g. AI, Mechatronics, Analytics)"
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-10 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold/70 focus:border-transparent transition"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER + RESULTS */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category pills */}
          <div className="flex items-start gap-3 mb-10 flex-wrap">
            <span className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-gray-500 mt-2 mr-1">
              <SlidersHorizontal size={15} />
              Filter:
            </span>
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-royal text-white border-royal shadow-md"
                    : "bg-white text-gray-700 border-gray-200 hover:border-royal hover:text-royal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 mb-6">
            Showing <span className="font-semibold text-gray-800">{filteredCourses.length}</span>{" "}
            of {courses.length} courses
          </p>

          {/* Course grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.slug}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    <div className="relative h-40">
                      {course.recommended && (
                        <span className="absolute top-3 left-3 z-10 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-royal text-white">
                          RECOMMENDED
                        </span>
                      )}
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      {course.category && (
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-600 mb-2">
                          {course.category}
                        </span>
                      )}
                      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-4">
                        {course.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-600 mb-5">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-emerald-600" />
                          {course.months} {isNaN(Number(course.months)) ? "" : "Months"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} className="text-emerald-600" />
                          {course.hours} Hrs
                        </span>
                      </div>

                      <Link
                        href={`/courses/${course.slug}`}
                        className="mt-auto w-full py-2.5 rounded-lg text-sm font-semibold border border-royal text-royal transition-all duration-300 hover:bg-royal hover:text-white text-center flex items-center justify-center gap-1.5 group"
                      >
                        Know More
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-lg font-semibold text-gray-700 mb-2">
                No courses found
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                className="px-5 py-2.5 rounded-lg bg-royal text-white text-sm font-semibold hover:bg-royal/90 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
