import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";
import { blogPosts } from "../../data/blog";
import { Clock, ArrowRight, Calendar } from "lucide-react";

const FALLBACK_COVER = "/images/blog/default-cover.svg";

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <SEO
        title="Blog"
        description="Industry trends, student stories, and faculty insights from Sona Tech School — SCALE."
      />
      <Navbar />
      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Blog" }]} />

          <div className="text-center mt-6 mb-14">
            <p className="uppercase tracking-widest text-emerald-600 font-semibold text-sm mb-3">
              From the Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal">
              Industry trends, student stories & faculty insights
            </h1>
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-0 bg-royal rounded-3xl overflow-hidden mb-14 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={featured.coverImage || FALLBACK_COVER}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                  Latest
                </span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold mb-4">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white leading-snug mb-3 group-hover:text-emerald-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-white/70 leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-5 text-xs text-white/50 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(featured.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {featured.readMinutes} min read
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                  Read the full story <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition"
              >
                <div className="relative aspect-video overflow-hidden bg-royal">
                  <img
                    src={post.coverImage || FALLBACK_COVER}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-royal text-xs font-semibold backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold text-royal mb-2 group-hover:text-emerald-700 transition">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readMinutes} min read
                    </span>
                    <span className="flex items-center gap-1 text-emerald-700 font-medium">
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
