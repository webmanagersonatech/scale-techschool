

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { courses, Course } from "../data/courses";

interface CoursePageProps {
  course: Course;
}


const navItems = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  {
    name: "Courses",
    submenu: courses.map((course) => ({
      name: course.title,
      href: `/courses/${course.slug}`,
    })),
  },
  // {
  //   name: "Admissions",
  //   submenu: [
  //     { name: "Apply Now", href: "/admissions/apply" },
  //     { name: "Eligibility", href: "/admissions/eligibility" },
  //   ],
  // },
  { name: "Faculty", href: "/faculty" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const submenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md font-heading"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src="https://pgdm.scaleindia.in/images/about/logo.webp" // your logo file
              alt="Sona Tech-School"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-royal">Sona Tech-School</span>
          </div>


          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 font-medium items-center">
            {navItems.map((item) =>
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <button
                    className={`flex items-center gap-1 transition-all duration-300 font-semibold
                      ${pathname.startsWith(item.href) ? "text-gold" : "text-gray-800"}
                    `}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${hoveredMenu === item.name ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {hoveredMenu === item.name && (
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-0 left-full ml-2 w-48 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-2 z-50"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`flex items-center px-3 py-2 rounded-md font-medium transition-colors duration-200
            ${pathname === sub.href ? "bg-royal/20 border-l-2 border-royal text-royal" : "hover:bg-royal/5 text-gray-700 dark:text-gray-200"}
          `}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>


                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full transition-colors duration-300 font-semibold
                    ${pathname === item.href ? "text-gold" : "text-gray-800"}
                  `}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* HAMBURGER */}
          <button onClick={() => setOpen(true)} className="md:hidden z-50 space-y-1.5">
            <span className="block w-6 h-0.5 bg-black rounded-full" />
            <span className="block w-6 h-0.5 bg-black rounded-full" />
            <span className="block w-6 h-0.5 bg-black rounded-full" />
          </button>
        </div>
      </motion.nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed top-0 right-0 h-screen w-4/5 bg-white z-50 p-6 flex flex-col"
          >
            <button onClick={() => setOpen(false)} className="absolute top-5 right-5">
              <X size={26} />
            </button>

            <ul className="mt-16 space-y-4 text-lg font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveMobileMenu(activeMobileMenu === item.name ? null : item.name)
                        }
                        className={`flex justify-between items-center w-full font-semibold transition-colors duration-200
                          ${pathname.startsWith(item.href) ? "text-royal" : "text-gray-800"}
                        `}
                      >
                        {item.name}
                        <ChevronDown
                          className={`transition-transform duration-300 ${activeMobileMenu === item.name ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeMobileMenu === item.name && (
                          <motion.ul
                            variants={submenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="ml-4 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.submenu.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setOpen(false)}
                                  className={`block py-1 transition-colors duration-200
                                    ${pathname === sub.href ? "text-royal font-semibold" : "text-gray-600 hover:text-royal"}
                                  `}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block font-semibold transition-colors duration-200
                        ${pathname === item.href ? "text-royal" : "text-gray-800 hover:text-royal"}
                      `}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
