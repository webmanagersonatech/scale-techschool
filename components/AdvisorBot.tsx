import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaUserTie } from "react-icons/fa";
import { courses } from "../data/courses";

export default function AdvisorBot() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        course: "",
        name: "",
        phone: "",
        datetime: "",
    });


    const handleSubmit = () => {
        if (!form.course || !form.name || !form.phone || !form.datetime) {
            alert("Please fill all details");
            return;
        }

        console.log(form);
        alert("Our advisor will call you on selected date & time!");
        setOpen(false);
    };

    return (
        <>
            {/* Floating Button with Text */}
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex items-center space-x-2 z-50">
                {/* Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="group w-12 hover:w-44 h-12 hover:bg-emerald-700 relative bg-emerald-500 border border-emerald-700 rounded text-neutral-50 duration-700 before:duration-700 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-emerald-500 before:hover:bg-emerald-700 before:rotate-45"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 shrink-0 fill-neutral-50"
                    >
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.67.59 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.21 2.5.59 3.67a1 1 0 01-.21 1.11l-2.25 2.21z"></path>
                    </svg>
                    <span
                        className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
                    >
                        Talk to Advisor
                    </span>
                </button>



            </div>




            {/* Chat Window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 80 }}
                        className="
              fixed bottom-0 right-0 w-full 
              md:bottom-24 md:right-6 md:w-96
              rounded-t-2xl md:rounded-2xl
              bg-lightGray dark:bg-royal
              shadow-xl border border-gray-200/30
              z-50 overflow-hidden font-body
            "
                    >
                        {/* Header */}
                        <div className="bg-royal text-white p-4 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <FaUserTie className="text-emerald-400" />
                                <p className="font-semibold">Talk to an Advisor</p>
                            </div>
                            <FaTimes
                                className="cursor-pointer hover:text-emerald-400"
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        {/* Body */}
                        <div className="p-5 space-y-4 text-sm">

                            <p className="text-gray-600 dark:text-gray-300">
                                Choose your preferred date & time for the call.
                            </p>
                            {/* Course Select */}
                            <select
                                className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none focus:border-emerald-500 dark:border-gray-500 dark:focus:border-emerald-400"
                                onChange={(e) => setForm({ ...form, course: e.target.value })}
                                value={form.course} // makes it controlled
                            >
                                <option value="">Select Course</option>
                                {courses.map((course) => (
                                    <option key={course.slug} value={course.title}>
                                        {course.title}
                                    </option>
                                ))}
                            </select>


                            {/* Name Input */}
                            <input
                                placeholder="Your Name"
                                className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none focus:border-emerald-500 dark:border-gray-500 dark:focus:border-emerald-400"
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />

                            {/* Phone Input */}
                            <input
                                placeholder="Phone Number"
                                type="tel"
                                className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none focus:border-emerald-500 dark:border-gray-500 dark:focus:border-emerald-400"
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            />

                            {/* DateTime Input */}
                            <input
                                type="datetime-local"
                                min={new Date().toISOString().slice(0, 16)}
                                className="w-full border-b border-gray-400 bg-transparent p-2 focus:outline-none focus:border-emerald-500 dark:border-gray-500 dark:focus:border-emerald-400"
                                onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                            />


                            <button
                                onClick={handleSubmit}
                                className="w-full bg-emerald-600 text-white py-2 
                rounded-lg font-semibold hover:bg-emerald-700 transition"
                            >
                                Schedule Call
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
