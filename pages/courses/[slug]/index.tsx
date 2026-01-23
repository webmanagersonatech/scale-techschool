import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import SpeedSection from "../../../components/Drop";
import ProgramTabs from "../../../components/Overview";
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
} from "lucide-react";

import { courses, Course } from "../../../data/courses";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

interface Props {
    course: Course;
}

const tabs = ["Overview", "Syllabus", "FAQ"];

const highlights = [
    "50 Hours Instructor-Led Training",
    "Self-Paced Learning Videos",
    "Hands-on Exercises & Projects",
    "Authorized Certification",
    "Flexible Learning Schedule",
    "Lifetime Access & Updates",
    "24/7 Learning Support",
    "Industry-Ready Curriculum",
];




export default function CoursePage({ course }: Props) {

    const [showVideo, setShowVideo] = useState(false);
    const [showJoinForm, setShowJoinForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: course.title,
    });

    if (!course) {
        return (
            <p className="py-24 text-center text-royal text-lg">
                Course not found
            </p>
        );
    }

    return (
        <>
            <Head>
                {/* Basic SEO */}
                <title>{course.title} | MyTech Academy</title>
                <meta name="description" content={course.description} />

                {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${course.title} | MyTech Academy`} />
                <meta property="og:description" content={course.description} />
                <meta property="og:image" content={course.image} />
                <meta property="og:url" content={`https://yourdomain.com/courses/${course.slug}`} />
                <meta property="og:site_name" content="MyTech Academy" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${course.title} | MyTech Academy`} />
                <meta name="twitter:description" content={course.description} />
                <meta name="twitter:image" content={course.image} />
            </Head>


            <Navbar />

            {/* ================= HERO ================= */}
            <section className="bg-lightGray pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">

                    {/* ================= LEFT ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="h-full flex flex-col justify-center"
                    >
                        <h1 className="text-4xl font-heading font-bold text-royal">
                            {course.title}
                        </h1>

                        <p className="mt-5 text-lg text-royal/80 leading-relaxed">
                            {course.description}
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-3 gap-4 mt-10">
                            {[
                                { label: "Duration", value: `${course.months} Months`, Icon: Calendar },
                                { label: "Training", value: `${course.hours} Hours`, Icon: Clock },
                                { label: "Projects", value: course.projects, Icon: FolderKanban },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-2xl shadow-md p-5 text-center"
                                >
                                    <item.Icon className="mx-auto text-emerald-600 mb-2" size={26} />
                                    <p className="text-lg font-bold text-royal">{item.value}</p>
                                    <p className="text-sm text-gray-500">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* HIGHLIGHTS */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-10">
                            {highlights.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-white rounded-xl shadow-sm px-5 py-4"
                                >
                                    <CheckCircle2 className="text-emerald-600" size={22} />
                                    <span className="text-royal text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ================= RIGHT ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative h-full  flex flex-col items-center justify-center"
                    >


                        {/* IMAGE */}
                        <div className="relative w-full max-w-md">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="rounded-3xl shadow-2xl w-full max-h-[460px] object-cover"
                            />

                            {/* PRICE CARD */}
                            {course.price && (
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="
      absolute -bottom-10 left-6 right-6
      rounded-3xl p-6 shadow-xl
      bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200
      overflow-hidden
    "
                                >
                                    {/* Soft pattern overlay */}
                                    <div className="absolute inset-0 
      bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.15)_1px,transparent_0)]
      bg-[size:20px_20px]
      opacity-40
    " />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <p className="text-sm text-gray-400 line-through">
                                            ₹{course.price.original.toLocaleString("en-IN")}
                                        </p>

                                        <p className="text-3xl font-bold text-royal">
                                            ₹{course.price.offer.toLocaleString("en-IN")
                                            }
                                        </p>

                                        <div className="flex items-center gap-2 mt-2">
                                            <Star className="text-emerald-600 fill-emerald-600" size={18} />
                                            <span className="text-emerald-700 font-semibold">
                                                {course.rating}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                ({course.reviewsCount}+ Reviews)
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 mt-20">
                            <a
                                href={course.brochure}
                                download
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition"
                            >
                                <Download size={18} />
                                Download Brochure
                            </a>

                            <button onClick={() => setShowJoinForm(true)} className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-lg">
                                <Sparkles size={18} />
                                Join Course
                            </button>
                        </div>

                        {/* VIDEO */}
                        <button
                            onClick={() => setShowVideo(true)}
                            className="mt-6 inline-flex items-center gap-3 text-emerald-600 font-semibold hover:underline"
                        >
                            <Play className="bg-emerald-600 text-white rounded-full p-2" size={36} />
                            Watch Course Preview
                        </button>
                    </motion.div>

                </div>

            </section>


            <section className="relative py-16 overflow-hidden bg-gradient-to-b from-gray-100 via-white to-gray-200">
                {/* Diagonal Stripe & Grid Background */}
                <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-stripes bg-[length:120px_120px] opacity-10 pointer-events-none"></div>

                <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-royal-200/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10 ">
                    <h2 className="text-4xl font-bold text-royal font-heading">
                        Our Learners Work At
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Trusted by leading companies worldwide
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
                        {[
                            "/images/company-logo/1.png",
                            "/images/company-logo/2.png",
                            "/images/company-logo/3.png",
                            "/images/company-logo/4.png",
                            "/images/company-logo/5.png",
                        ].map((logo, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.15 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }}
                                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-2 bg-white/50 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition"
                            >
                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    className="h-10 sm:h-12 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= TABS ================= */}
            <ProgramTabs />



            {/* ================= TESTIMONIALS ================= */}


            <SpeedSection />


            <Footer />

            {/* ================= VIDEO MODAL ================= */}
            {showVideo && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6">
                    <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-3 right-4 text-xl font-bold"
                        >
                            ✕
                        </button>

                        <iframe
                            className="w-full h-[400px]"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Course Preview"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
            {showJoinForm && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md px-8 pt-10 pb-14"
                    >
                        {/* Close */}
                        <button
                            onClick={() => setShowJoinForm(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <h3 className="text-center tracking-widest text-sm font-semibold text-gray-700 mb-8">
                            JOIN COURSE
                        </h3>

                        {/* FORM */}
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                if (isSubmitting) return;

                                try {
                                    setIsSubmitting(true);

                                    console.log("JOIN FORM 👉", formData);

                                    const res = await createJoiner({
                                        name: formData.name,
                                        email: formData.email,
                                        phone: formData.phone,
                                        course: formData.course,
                                    });

                                    console.log("API RESPONSE 👉", res);

                                    toast.success(res.message);
                                    setShowJoinForm(false);
                                } catch (err: any) {
                                    console.error("JOIN ERROR 👉", err);
                                    toast.error(err.message || "Failed to join");
                                } finally {
                                    setIsSubmitting(false);
                                }
                            }}
                            className="space-y-6"
                        >

                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Your name"
                                required
                                className="w-full border-b border-gray-300 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                                onKeyDown={(e) => {
                                    // Allow only letters, space, and control keys like backspace
                                    if (!/^[a-zA-Z\s]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
                                        e.preventDefault();
                                    }
                                }}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Your e-mail"
                                required
                                className="w-full border-b border-gray-300 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                placeholder="Phone number"
                                required
                                className="w-full border-b border-gray-300 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-600"
                                onKeyDown={(e) => {
                                    // Allow only numbers and control keys
                                    if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
                                        e.preventDefault();
                                    }
                                }}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />

                            {/* Course (AUTO + DISABLED) */}
                            <input
                                type="text"
                                value={course.title}
                                disabled
                                className="w-full border-b border-gray-200 py-2 text-gray-400 cursor-not-allowed bg-transparent"
                            />

                            {/* Floating Submit Button */}
                            <div className="absolute -bottom-6 right-8">
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="bg-emerald-500 hover:bg-emerald-700 border border-emerald-900 text-white px-10 py-3 rounded-full tracking-widest text-sm shadow-xl transition"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="h-4 w-4 animate-spin"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="none"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                />
                                            </svg>

                                        </>
                                    ) : (
                                        "SUBMIT"
                                    )}
                                </button>
                            </div>
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
