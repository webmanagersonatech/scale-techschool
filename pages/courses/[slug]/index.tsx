import { GetStaticPaths, GetStaticProps } from "next";
import SEO from "../../../components/SEO";
import { courseOgImage, SITE_URL } from "../../../lib/seo";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SpeedSection from "../../../components/Drop";
import { createJoiner } from "../../../lib/api/joiner";
import { toast } from "sonner";
import {
    Calendar,
    Clock,
    FolderKanban,
    CheckCircle2,
    Star,
    Download,
    Sparkles,
    Play,
    User,
    Briefcase,
    Zap,
} from "lucide-react";
import Link from "next/link";
import { courses, Course } from "../../../data/courses";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import {
    sanitizeNameInput,
    sanitizePhoneInput,
    isValidName,
    isValidPhone,
    isValidEmail,
    errorMessages,
} from "../../../lib/validation";

interface Props {
    course: Course;
}

const highlights = [
    "Hands-on Exercises & Projects",
    "Authorized Certification",
    "Flexible Learning Schedule",
    "24/7 Learning Support",
];

// Component to render brochure content safely
const BrochureContent = ({ htmlContent }: { htmlContent: string }) => {
    const [sections, setSections] = useState<{ title: string; content: string }[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Parse HTML only on client side
        if (typeof window !== 'undefined' && htmlContent) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, "text/html");
            const sectionElements = doc.querySelectorAll("section");
            const parsedSections: { title: string; content: string }[] = [];

            sectionElements.forEach((section) => {
                const heading = section.querySelector("h2");
                if (heading) {
                    const title = heading.textContent || "";
                    const content = section.innerHTML || "";
                    parsedSections.push({ title, content });
                }
            });

            setSections(parsedSections);
        }
    }, [htmlContent]);

    // Don't render on server, or show loading state
    if (!isClient) {
        return (
            <div className="py-8 text-center">
                <div className="animate-pulse">
                    <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-4"></div>
                    <div className="h-4 bg-slate-100 rounded w-2/3 mx-auto"></div>
                </div>
            </div>
        );
    }

    if (sections.length === 0) {
        return (
            <div className="py-8 text-center text-slate-500">
                No brochure content available
            </div>
        );
    }

    return (
        <div className="prose prose-slate max-w-none">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="mb-12"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                />
            ))}
        </div>
    );
};

export default function CoursePage({ course }: Props) {
    const [showVideo, setShowVideo] = useState(false);
    const [showJoinForm, setShowJoinForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: course?.title || "",
    });
    const [formErrors, setFormErrors] = useState({ name: "", email: "", phone: "" });
    const [touched, setTouched] = useState({ name: false, email: false, phone: false });

    const relatedCourses = course
        ? (() => {
            const sameCategory = courses.filter(
                (c) => c.slug !== course.slug && c.category === course.category
            );
            const others = courses.filter(
                (c) => c.slug !== course.slug && c.category !== course.category
            );
            return [...sameCategory, ...others].slice(0, 4);
        })()
        : [];

    const validateField = (field: "name" | "email" | "phone", value: string) => {
        if (field === "name") {
            return isValidName(value) ? "" : errorMessages.name;
        }
        if (field === "email") {
            return isValidEmail(value) ? "" : errorMessages.email;
        }
        return isValidPhone(value) ? "" : errorMessages.phone;
    };

    const isJoinFormValid =
        isValidName(formData.name) && isValidEmail(formData.email) && isValidPhone(formData.phone);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-center text-royal text-lg">Course not found</p>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={course.title}
                description={course.description}
                image={courseOgImage(course.slug)}
                url={`${SITE_URL}/courses/${course.slug}`}
                type="article"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Course",
                    name: course.title,
                    description: course.description,
                    provider: {
                        "@type": "EducationalOrganization",
                        name: "SCALE Tech School",
                        sameAs: SITE_URL,
                    },
                }}
            />

            <Navbar />

            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-6 mb-8">
                    <Breadcrumb
                        items={[
                            { label: "Courses", href: "/courses" },
                            { label: course.title },
                        ]}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {course.recommended && (
                            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5  text-sm font-semibold">
                                <Zap size={16} />
                                Recommended
                            </span>
                        )}

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            {course.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-2">
                            {[
                                { label: "Duration", value: `${course.months} Months`, Icon: Calendar },
                                { label: "Training", value: `${course.hours} Hours`, Icon: Clock },
                                { label: "Projects", value: course.projects, Icon: FolderKanban },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 text-center hover:shadow-md transition"
                                >
                                    <item.Icon className="mx-auto text-emerald-600 mb-1.5" size={22} />
                                    <p className="text-sm font-bold text-slate-900">{item.value}</p>
                                    <p className="text-xs text-slate-500">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Highlights */}
                        <div className="grid sm:grid-cols-2 gap-3">
                            {highlights.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2.5 bg-white rounded-lg shadow-sm border border-slate-100 px-4 py-2.5"
                                >
                                    <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={18} />
                                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>




                    </motion.div>

                    {/* RIGHT COLUMN - Image, Price & Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative flex flex-col h-full"
                    >
                        {/* Image & Price */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full  object-cover"
                            />

                            {course.price && (
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6">
                                    <div className="flex items-end justify-between gap-4">
                                        {/* Price */}
                                        <div>
                                            {course.price.original && course.price.original > course.price.offer && (
                                                <p className="text-white/60 text-sm line-through">
                                                    ₹{course.price.original.toLocaleString("en-IN")}
                                                </p>
                                            )}

                                            {/* ✅ FIXED: Remove the incorrect condition */}
                                            {course.price.offer && (
                                                <p className="text-3xl font-bold text-white leading-tight">
                                                    ₹{course.price.offer.toLocaleString("en-IN")}
                                                </p>
                                            )}

                                            {course.price.options && (
                                                <p className="text-white font-bold text-lg leading-tight">
                                                    {course.price.options.map((opt, i) =>
                                                        `${opt.duration}: ₹${opt.price.toLocaleString("en-IN")}`
                                                    ).join(" | ")}
                                                </p>
                                            )}
                                        </div>

                                        {/* Rating */}
                                        {course.rating && (
                                            <div className="shrink-0 flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                                                <Star
                                                    className="text-yellow-400 fill-yellow-400"
                                                    size={16}
                                                />
                                                <span className="text-white font-semibold">
                                                    {course.rating}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Features */}
                        <div className="mt-5 grid grid-cols-2 gap-3">
                            {course.features?.mentorship && (
                                <div className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm text-sm font-medium text-slate-700">
                                    <User
                                        size={17}
                                        className="text-emerald-600 shrink-0"
                                    />
                                    <span>Mentorship</span>
                                </div>
                            )}

                            {course.features?.careerSupport && (
                                <div className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm text-sm font-medium text-slate-700">
                                    <Briefcase
                                        size={17}
                                        className="text-emerald-600 shrink-0"
                                    />
                                    <span>Career Support</span>
                                </div>
                            )}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-4 grid grid-cols-1  gap-3">
                            <button
                                onClick={() => setShowJoinForm(true)}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3.5  bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-200"
                            >
                                <Sparkles size={18} />
                                Enroll Now
                            </button>

                            {/* <a
                                href={course.brochure}
                                download
                                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200"
                            >
                                <Download size={18} />
                                Download Brochure
                            </a> */}
                        </div>
                    </motion.div>
                </div>
            </section>




            {course.brochureContent && (
                <section className="pt-6 bg-gradient-to-b from-slate-50 to-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold text-slate-900">
                                Course <span className="text-emerald-600">Curriculum</span>
                            </h2>
                            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                                Comprehensive learning modules designed to build your expertise step by step
                            </p>
                            <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
                        </motion.div>
                        <BrochureContent htmlContent={course.brochureContent} />
                    </div>
                </section>
            )}

            {/* ================= EXPLORE RELATED COURSES ================= */}
            {relatedCourses.length > 0 && (
                <section className="py-6 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <p className="uppercase tracking-widest text-emerald-600 font-semibold text-sm mb-3">
                                Keep Exploring
                            </p>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-royal">
                                Explore Related <span className="text-emerald-600">Courses</span>
                            </h2>
                            <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedCourses.map((rc) => (
                                <motion.div
                                    key={rc.slug}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                                >
                                    <div className="relative h-40">
                                        {rc.recommended && (
                                            <span className="absolute top-3 left-3 z-10 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-royal text-white">
                                                RECOMMENDED
                                            </span>
                                        )}
                                        <img
                                            src={rc.image}
                                            alt={rc.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-5 flex flex-col flex-1">
                                        {rc.category && (
                                            <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-600 mb-2">
                                                {rc.category}
                                            </span>
                                        )}
                                        <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                                            {rc.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 line-clamp-2 mb-4">
                                            {rc.description}
                                        </p>

                                        <Link
                                            href={`/courses/${rc.slug}`}
                                            className="mt-auto w-full py-2.5 rounded-lg text-sm font-semibold border border-royal text-royal transition-all duration-300 hover:bg-royal hover:text-white text-center flex items-center justify-center gap-1.5 group"
                                        >
                                            Know More
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <Link
                                href="/courses"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-royal text-white font-semibold hover:bg-royal/90 transition"
                            >
                                View All Courses
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <SpeedSection />

            <Footer />

            {/* ================= VIDEO MODAL ================= */}
            {showVideo && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-3 right-4 text-2xl text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition z-10"
                        >
                            ✕
                        </button>
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Course Preview"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            {/* ================= JOIN FORM MODAL ================= */}
            {showJoinForm && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
                    >
                        <button
                            onClick={() => setShowJoinForm(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 text-2xl transition"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
                            Enroll Now
                        </h3>
                        <p className="text-sm text-slate-500 text-center mb-6">
                            {course.title}
                        </p>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                if (isSubmitting) return;

                                const nameError = validateField("name", formData.name);
                                const emailError = validateField("email", formData.email);
                                const phoneError = validateField("phone", formData.phone);
                                setFormErrors({ name: nameError, email: emailError, phone: phoneError });
                                setTouched({ name: true, email: true, phone: true });

                                if (nameError || emailError || phoneError) {
                                    toast.error("Please fix the highlighted fields.");
                                    return;
                                }

                                try {
                                    setIsSubmitting(true);
                                    const res = await createJoiner({
                                        name: formData.name,
                                        email: formData.email,
                                        phone: formData.phone,
                                        course: formData.course,
                                    });
                                    toast.success(res.message || "Successfully enrolled!");
                                    setShowJoinForm(false);
                                    setFormData({ name: "", email: "", phone: "", course: course.title });
                                    setFormErrors({ name: "", email: "", phone: "" });
                                    setTouched({ name: false, email: false, phone: false });
                                } catch (err: any) {
                                    toast.error(err.message || "Failed to enroll. Please try again.");
                                } finally {
                                    setIsSubmitting(false);
                                }
                            }}
                            noValidate
                            className="space-y-5"
                        >
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    required
                                    className={`w-full border rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition ${touched.name && formErrors.name
                                        ? "border-red-400 focus:ring-red-400"
                                        : "border-slate-300 focus:ring-emerald-500"
                                        }`}
                                    value={formData.name}
                                    onChange={(e) => {
                                        const val = sanitizeNameInput(e.target.value);
                                        setFormData({ ...formData, name: val });
                                        if (touched.name) {
                                            setFormErrors({ ...formErrors, name: validateField("name", val) });
                                        }
                                    }}
                                    onBlur={() => {
                                        setTouched({ ...touched, name: true });
                                        setFormErrors({ ...formErrors, name: validateField("name", formData.name) });
                                    }}
                                />
                                {touched.name && formErrors.name && (
                                    <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    className={`w-full border rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition ${touched.email && formErrors.email
                                        ? "border-red-400 focus:ring-red-400"
                                        : "border-slate-300 focus:ring-emerald-500"
                                        }`}
                                    value={formData.email}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setFormData({ ...formData, email: val });
                                        if (touched.email) {
                                            setFormErrors({ ...formErrors, email: validateField("email", val) });
                                        }
                                    }}
                                    onBlur={() => {
                                        setTouched({ ...touched, email: true });
                                        setFormErrors({ ...formErrors, email: validateField("email", formData.email) });
                                    }}
                                />
                                {touched.email && formErrors.email && (
                                    <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    placeholder="98765 43210"
                                    maxLength={10}
                                    required
                                    className={`w-full border rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition ${touched.phone && formErrors.phone
                                        ? "border-red-400 focus:ring-red-400"
                                        : "border-slate-300 focus:ring-emerald-500"
                                        }`}
                                    value={formData.phone}
                                    onChange={(e) => {
                                        const val = sanitizePhoneInput(e.target.value, formData.phone);
                                        setFormData({ ...formData, phone: val });
                                        if (touched.phone) {
                                            setFormErrors({ ...formErrors, phone: validateField("phone", val) });
                                        }
                                    }}
                                    onBlur={() => {
                                        setTouched({ ...touched, phone: true });
                                        setFormErrors({ ...formErrors, phone: validateField("phone", formData.phone) });
                                    }}
                                />
                                {touched.phone && formErrors.phone && (
                                    <p className="mt-1 text-xs text-red-500">{formErrors.phone}</p>
                                )}
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    "Submit Enrollment"
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: courses.map((c) => ({ params: { slug: c.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const course = courses.find((c) => c.slug === params?.slug) || null;
    return { props: { course } };
};