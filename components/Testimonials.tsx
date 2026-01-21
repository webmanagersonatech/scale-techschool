import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
    {
        name: "Soumya Verma",
        role: "Student, PB Siddhartha Arts and Science College",
        text: "Those people who want to learn for data science and artificial intelligence, it is right place. Faculty is very good and cooperative.",
    },
    {
        name: "Udanya Korupolu",
        role: "Student, KL University",
        text: "I got to know Codegnan through online. I attended Python course. The team helped me to overcome the problems I faced while programming in Python language.",
    },
    {
        name: "Srikanth Marni",
        role: "Student, Swetha Engineering College",
        text: "Flexible timings, friendly environment and good staff. Good initiative for programme beginners in various computer languages.",
    },
    {
        name: "Ananya Reddy",
        role: "Student, VIT University",
        text: "The mentors explain concepts clearly with real-time examples. It helped me build confidence and improve my coding skills significantly.",
    },
    {
        name: "Karthik Sharma",
        role: "Student, SRM Institute of Science and Technology",
        text: "A great place to start a tech career. The practical approach and supportive trainers made learning easy and enjoyable.",
    },
    {
        name: "Priya Nandhini",
        role: "Student, Anna University",
        text: "The learning environment is motivating and professional. I gained hands-on experience and clarity in core programming concepts.",
    },
]


export default function Testimonials() {
    const [active, setActive] = useState(1)

    return (
        <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 font-body py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div>
                    <p className="text-sm font-heading tracking-widest text-gray-500 mb-3">
                        TESTIMONIALS
                    </p>
                    <h2 className="text-4xl font-heading text-gray-900 leading-tight">
                        What Our Students <br /> Have To Say
                    </h2>
                    <div className="w-20 h-1 bg-emerald-400 rounded-full my-5" />
                    <p className="text-gray-600 max-w-md">
                        Real feedback from students who transformed their careers with us.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="relative h-[340px] flex items-center justify-center overflow-hidden">

                    {testimonials.map((item, index) => {
                        const position = index - active

                        return (
                            <motion.div
                                key={index}
                                animate={{
                                    x: position * 260,        // left / center / right
                                    scale: position === 0 ? 1 : 0.9,
                                    opacity: position === 0 ? 1 : 0.3,
                                    zIndex: position === 0 ? 10 : 1,
                                }}
                                transition={{ duration: 0.45, ease: "easeInOut" }}
                                className="absolute bg-white rounded-2xl shadow-xl p-7 w-[320px]"
                            >
                                {/* STAR */}
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-white text-xl">★</span>
                                </div>

                                <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                                    {item.text}
                                </p>

                                <div className="mt-5">
                                    <h4 className="font-heading text-gray-900">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-pink-500">
                                        {item.role}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* DOTS */}
                <div className="lg:col-span-2 flex justify-center mt-2 gap-3">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${active === i
                                ? "bg-emerald-500 scale-125"
                                : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
