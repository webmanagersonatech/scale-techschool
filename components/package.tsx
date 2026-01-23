"use client"

import Image from "next/image"
import { FaUniversity, FaUserGraduate, FaBuilding, FaBookOpen, FaProjectDiagram, FaUserTie, FaUsers, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const placements = [
    { name: "Infosys", lpa: "9.5" },
    { name: "TCS", lpa: "7" },
    { name: "Berkshire", lpa: "6.8" },
    { name: "Redbus", lpa: "6" },
    { name: "Accolite", lpa: "6" },
    { name: "Aptean", lpa: "5" },
    { name: "HealthAsyst", lpa: "5" },
    { name: "BI Worldwide", lpa: "4.5" },
]
const features = [
    { text: "Expert trainers from top universities", icon: <FaUniversity className="text-emerald-500 w-5 h-5" /> },
    { text: "30,000+ students trained", icon: <FaUserGraduate className="text-emerald-500 w-5 h-5" /> },
    { text: "1250+ hiring companies", icon: <FaBuilding className="text-emerald-500 w-5 h-5" /> },
    { text: "Advanced industry curriculum", icon: <FaBookOpen className="text-emerald-500 w-5 h-5" /> },
    { text: "Live projects & mentorship", icon: <FaProjectDiagram className="text-emerald-500 w-5 h-5" /> },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
}


const fadeUps = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const listStagger = {
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
}

const listItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
}



export default function PackageSection() {
    return (
        <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 font-body py-10 ">

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER WRAPPER */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT SIDE – CONTENT */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-3xl md:text-4xl font-oswald text-gray-900 leading-[1.1] tracking-wide">
                            India&apos;s Most Trusted
                            <span className="block mt-1 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent tracking-wider">
                                EdTech Institute
                            </span>
                        </h1>


                        <p className="mt-6 text-lg text-gray-700">
                            Industry-aligned training with real projects, expert mentors,
                            and strong placement outcomes.
                        </p>



                        <button
                            className="mt-8 cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]"
                        >
                            <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                                <div
                                    className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                                ></div>
                                <div
                                    className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-emerald-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black"
                                >
                                    <div
                                        className="w-[0.8rem] h-[0.8rem] text-emerald-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            height="100%"
                                            width="100%"
                                        >
                                            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-royal text-royal"
                            >
                                Explore Programs
                            </div>
                        </button>


                    </motion.div>

                    {/* RIGHT SIDE – FEATURES LIST */}
                    <motion.ul
                        variants={listStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-2 text-sm md:text-base text-gray-800"
                    >
                        {features.map((item, idx) => (
                            <motion.li
                                key={idx}
                                variants={listItem}
                                className="flex justify-between items-center bg-gray-100/50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                            >

                                <span>{item.text}</span>
                                <span>{item.icon}</span>
                            </motion.li>
                        ))}
                    </motion.ul>


                </div>



                {/* PLACEMENTS GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.08 }}
                    className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-8"
                >
                    {placements.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ y: -8, scale: 1.05 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative rounded-l-2xl bg-white
                  border-2 border-emerald-300
                 shadow-md hover:shadow-2xl
                 flex flex-col items-center py-8 px-4 mt-16
                 transition-transform duration-300"
                        >
                            {/* Decorative Top Badge */}
                            <div className="absolute -top-3 bg-gradient-to-r from-emerald-400 to-emerald-600
                      text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                Top Performer
                            </div>

                            {/* Avatar */}
                            <div className="w-20 h-20 rounded-xl overflow-hidden mb-4">
                                <Image
                                    src="/images/hero/avatar.avif"
                                    alt="student"
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h4 className="text-base font-semibold text-gray-900">{p.name}</h4>

                            {/* LPA Badge */}
                            <span className="mt-2 text-sm font-medium
                       bg-emerald-100 text-emerald-800
                       px-4 py-1 rounded-full shadow-sm">
                                {p.lpa} LPA
                            </span>

                            {/* Optional subtle hover effect glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr
                      from-emerald-300/20 via-transparent to-emerald-300/20
                      opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                {/* STATS SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    className="relative mt-10 sm:mt-16 md:mt-20 rounded-b-3xl overflow-hidden"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-center"
                        style={{
                            backgroundImage: "url('https://img.freepik.com/premium-photo/diverse-group-young-professionals-engaged-meeting-discussing-ideas-strategies_836155-4711.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80')", // 🔥 change path if needed
                        }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70" />

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 text-white">
                        {/* Heading */}
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-heading">
                                Our Statistics
                            </h2>
                            <p className="mt-2 text-sm md:text-base text-white/80">
                                We help you to unleash the power within your business
                            </p>
                            {/* UNDERLINE (Hero-style divider) */}
                            <div className="flex justify-center">
                                <span className="block w-80 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                            </div>
                            <div className="relative group cursor-pointer mt-4 inline-block">
                                <div
                                    className="relative px-8 py-2 border border-white/50 text-white font-heading text-lg rounded-lg transform transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1 shadow-[6px_6px_10px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.1)] group-hover:shadow-[8px_8px_15px_rgba(0,0,0,0.8),-8px_-8px_15px_rgba(255,255,255,0.2)]"
                                >
                                    Let's get started
                                </div>

                                <div
                                    className="absolute inset-0 border border-dashed border-white/30 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                ></div>

                                {/* Ping dots */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping shadow-lg"></div>
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full animate-ping shadow-lg"></div>
                                <div className="absolute top-1/3 left-3 w-3 h-3 bg-white rounded-full animate-ping opacity-70"></div>
                                <div className="absolute top-2/3 right-3 w-3 h-3 bg-white rounded-full animate-ping opacity-70"></div>
                            </div>


                        </div>


                    </div>
                </motion.div>

                {/* Stats Grid - Floating Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 -mt-12 px-4 md:px-12 relative z-20">
                    {[
                        { value: "260+", label: "Expert Consultants", icon: <FaUserTie />, color: "emerald-400" },
                        { value: "975+", label: "Active Clients", icon: <FaUsers />, color: "emerald-300" },
                        { value: "724+", label: "Projects Delivered", icon: <FaProjectDiagram />, color: "emerald-200" },

                        { value: "120+", label: "Courses Completed", icon: <FaGraduationCap />, color: "emerald-300" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className={`bg-white text-gray-900 rounded-xl border border-dashed border-emerald-300 p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 relative overflow-hidden stats-card`}
                            variants={fadeUps}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i}
                        >
                            {/* Icon with colored border */}
                            <div className={`text-emerald-500 mb-3 bg-emerald-100 p-3 rounded-xl border-2 border-emerald-500`}>
                                {stat.icon}
                            </div>

                            <h3 className="text-3xl font-bold">{stat.value}</h3>
                            <p className="mt-2 text-sm text-gray-600 text-center">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>



                <style jsx>{`
  .stats-card {
    border-style: dashed;
    border-width: 2px;
    border-color: #d1d5db; /* gray-300 */
    position: relative;
  }

  .stats-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px dashed #d1d5db;
    border-radius: 0.75rem; /* matches rounded-xl */
    animation: dash 2s linear infinite;
    pointer-events: none;
  }

  .stats-card:hover::before {
    border-color: #ffffff; /* white on hover */
  }

  @keyframes dash {
    0% { border-spacing: 0; }
    100% { border-spacing: 4px; }
  }
`}</style>



            </div>
        </section >
    )
}
