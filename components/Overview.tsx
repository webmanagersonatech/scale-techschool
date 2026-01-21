import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const tabs = ["Overview", "Curriculum", "FAQs"]

export default function ProgramTabs() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section className="max-w-7xl mx-auto px-8 py-8">
            <div className="bg-white dark:bg-gray-900  shadow-xl p-6 ">

                {/* Tabs */}
                <div className="relative flex gap-6 sm:gap-10 border-b border-gray-200 dark:border-gray-700 mb-8">
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
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="text-gray-700 dark:text-gray-200"
                    >
                        {activeTab === 0 && (
                            <p className=" leading-relaxed max-w-3xl">
                                This program is crafted to make you <strong>job-ready</strong> through
                                expert mentorship, real-world projects, interview preparation,
                                and end-to-end placement support.
                            </p>
                        )}

                        {activeTab === 1 && (
                            <ul className="grid sm:grid-cols-2 gap-4 ">
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

                        {activeTab === 2 && (
                            <div className="space-y-4 ">
                                {[
                                    ["Beginner friendly?", "Yes"],
                                    ["Certificate provided?", "Yes"],
                                    ["Placement support?", "Yes"],
                                ].map(([q, a], i) => (
                                    <div
                                        key={i}
                                        className="rounded-xl bg-gray-50 dark:bg-gray-800 p-4"
                                    >
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
