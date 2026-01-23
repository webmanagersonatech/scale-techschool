import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaFileAlt, FaUserCheck, FaRocket } from "react-icons/fa";

const tabs = ["Overview", "Curriculum", "How to Apply", "Salary", "FAQs"]

export default function ProgramTabs() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section className="max-w-7xl mx-auto px-8 py-8">
            <div className="bg-white dark:bg-gray-900 shadow-xl p-6 rounded-2xl">

                {/* Tabs */}
                <div className="relative flex flex-wrap gap-6 sm:gap-10 border-b border-gray-200 dark:border-gray-700 mb-8">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`relative pb-4 text-sm sm:text-base font-semibold transition-colors
                            ${activeTab === i ? "text-emerald-600" : "text-gray-500 hover:text-emerald-600"}
                            `}
                        >
                            {tab}

                            {activeTab === i && (
                                <motion.span
                                    layoutId="activeTab"
                                    className="absolute left-0 -bottom-[1px] h-[3px] w-full rounded-full bg-emerald-600"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="text-gray-700 dark:text-gray-200"
                    >

                        {/* Overview */}
                        {activeTab === 0 && (
                            <p className="leading-relaxed max-w-3xl">
                                This program is crafted to make you <strong>job-ready</strong> through
                                expert mentorship, real-world projects, interview preparation,
                                and end-to-end placement support.
                            </p>
                        )}

                        {/* Curriculum */}
                        {activeTab === 1 && (
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Foundations & Basics",
                                    "Core Industry Concepts",
                                    "Advanced Practical Modules",
                                    "Capstone Projects",
                                    "Career Guidance",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3"
                                    >
                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* How to Apply */}
                        {activeTab === 2 && (
                            <div className="relative max-w-xl space-y-8">
                                <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-emerald-500 to-emerald-200" />

                                {[
                                    {
                                        title: "Submit Application",
                                        desc: "Fill the form with your background & goals",
                                        icon: <FaFileAlt />,
                                    },
                                    {
                                        title: "Get Shortlisted",
                                        desc: "Our team reviews & confirms eligibility",
                                        icon: <FaUserCheck />,
                                    },
                                    {
                                        title: "Start Learning",
                                        desc: "Begin your journey within 7–14 days",
                                        icon: <FaRocket />,
                                    },
                                ].map((step, i) => (
                                    <div key={i} className="relative pl-14">
                                        <div className="absolute left-0 top-0 h-9 w-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">
                                            {i + 1}
                                        </div>

                                        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-gray-200/20 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                            <p className="font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                                                <span className="text-emerald-600 text-lg">
                                                    {step.icon}
                                                </span>
                                                {step.title}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}



                        {/* Salary */}

                        {activeTab === 3 && (
                            <div className="w-full flex justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">

                                    {/* BAR CHART */}
                                    <div>
                                        <p className="font-semibold mb-4 text-center">
                                            Salary Comparison (LPA)
                                        </p>

                                        <div className="relative h-56 p-6 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur border shadow
          bg-[linear-gradient(rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.04)_1px,transparent_1px)] bg-[size:20px_20px]">

                                            {/* Y Axis */}
                                            <div className="absolute left-3 top-4 bottom-6 flex flex-col justify-between text-xs text-gray-400">
                                                <span>12L</span>
                                                <span>9L</span>
                                                <span>6L</span>
                                                <span>3L</span>
                                                <span>0</span>
                                            </div>

                                            {/* Bars */}
                                            <div className="flex items-end justify-around h-full pl-10">
                                                <motion.div initial={{ height: 0 }} animate={{ height: "45%" }}
                                                    className="w-12 bg-emerald-400 rounded-t-lg relative">
                                                    <span className="absolute -top-6 text-sm font-semibold">₹7L</span>
                                                    <p className="text-xs mt-2 text-center">Min</p>
                                                </motion.div>

                                                <motion.div initial={{ height: 0 }} animate={{ height: "65%" }}
                                                    className="w-12 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg shadow-lg relative">
                                                    <span className="absolute -top-6 text-sm font-semibold">₹9.5L</span>
                                                    <p className="text-xs mt-2 text-center">Avg</p>
                                                </motion.div>

                                                <motion.div initial={{ height: 0 }} animate={{ height: "85%" }}
                                                    className="w-12 bg-emerald-600 rounded-t-lg relative">
                                                    <span className="absolute -top-6 text-sm font-semibold">₹12L</span>
                                                    <p className="text-xs mt-2 text-center">Max</p>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PIE CHART */}
                                    <div>
                                        <p className="font-semibold mb-4 text-center">
                                            Salary Distribution
                                        </p>

                                        <div className="flex items-center justify-center gap-8 h-56 p-6 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur border shadow">

                                            <motion.div
                                                initial={{ scale: 0, rotate: -90 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ duration: 0.8 }}
                                                className="relative h-44 w-44 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                                                style={{
                                                    background:
                                                        "conic-gradient(#059669 0% 35%, #10b981 35% 65%, #6ee7b7 65% 100%)",
                                                }}
                                            >
                                                <div className="absolute inset-6 bg-white dark:bg-dark rounded-full flex items-center justify-center font-bold">
                                                    ₹9.5L
                                                </div>
                                            </motion.div>

                                            {/* Legend */}
                                            <div className="space-y-3 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <span className="h-3 w-3 bg-emerald-600 rounded-full" />
                                                    Max – ₹12L
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="h-3 w-3 bg-emerald-400 rounded-full" />
                                                    Avg – ₹9.5L
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="h-3 w-3 bg-emerald-200 rounded-full" />
                                                    Min – ₹7L
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}




                        {/* FAQs */}
                        {activeTab === 4 && (
                            <div className="space-y-4">
                                {[
                                    ["Beginner friendly?", "Yes"],
                                    ["Certificate provided?", "Yes"],
                                    ["Placement support?", "Yes"],
                                ].map(([q, a], i) => (
                                    <div key={i} className="rounded-xl bg-gray-50 dark:bg-gray-800 p-4">
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {q}
                                        </p>
                                        <p className="text-emerald-600 font-medium">{a}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
