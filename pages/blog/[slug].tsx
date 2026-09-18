import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";
import ShareIcons from "../../components/ShareIcons";
import { blogPosts, BlogPost } from "../../data/blog";
import { SITE_URL } from "../../lib/seo";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

const FALLBACK_COVER = "/images/blog/default-cover.svg";

interface Props {
  post: BlogPost;
}

export default function BlogPostPage({ post }: Props) {
  if (!post) return null;

  const shareUrl = `${SITE_URL}/blog/${post.slug}`;
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.coverImage}
        type="article"
      />
      <Navbar />
      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mt-6 mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-royal leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-5 text-sm text-slate-500">
              <span>{post.author}</span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readMinutes} min read
              </span>
            </div>
            <ShareIcons url={shareUrl} title={post.title} />
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 bg-royal shadow-lg">
            <img
              src={post.coverImage || FALLBACK_COVER}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <article
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-8 border-t border-slate-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:underline"
            >
              <ArrowLeft size={16} /> Back to all posts
            </Link>
           
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-heading font-bold text-royal mb-6">Keep reading</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition"
                  >
                    <div className="relative aspect-video overflow-hidden bg-royal">
                      <img
                        src={p.coverImage || FALLBACK_COVER}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-royal mb-2 group-hover:text-emerald-700 transition">
                        {p.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-medium">
                        Read more <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};
