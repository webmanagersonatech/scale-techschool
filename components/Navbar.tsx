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
  { name: "About", href: "/about" },
  {
    name: "Courses",
    href: "/courses",
    submenu: courses.map((course) => ({
      name: course.title,
      href: `/courses/${course.slug}`,
    })),
  },
  { name: "Admissions", href: "/admissions" },
  { name: "Teams", href: "/faculty" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
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
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md font-poppins"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src="/images/company-logo/SCALE-png.png"
              alt="Sona Tech-School"
              className="w-20 h-12 object-contain"
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
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 transition-all duration-300 
                      ${pathname === item.href || pathname.startsWith(item.href + "/") ? "text-gold" : "text-gray-800"}
                    `}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${hoveredMenu === item.name ? "rotate-180" : ""
                        }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {hoveredMenu === item.name && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-3 w-64 max-h-[70vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 z-50"
                      >
                        <Link
                          href="/courses"
                          className="block px-4 py-2.5 text-sm font-bold text-royal bg-gray-50 hover:bg-gray-100 border-b border-gray-100 sticky top-0 z-10"
                        >
                          View All Courses
                        </Link>
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-4 py-2 text-sm font-medium transition
                              ${pathname === sub.href
                                ? "bg-royal/10 text-royal border-l-2 border-royal"
                                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                              }
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
                  className={`relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full transition-colors duration-300 
                    ${pathname === item.href ? "text-gold" : "text-gray-800"}
                  `}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden z-50 space-y-1.5"
            aria-label="Open menu"
          >
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

      {/* MOBILE MENU - FIXED WITH SCROLLING */}
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed top-0 right-0 h-screen w-4/5 bg-white z-50 flex flex-col font-poppins"
          >
            {/* Sticky header with close button */}
            <div className="sticky top-0 bg-white z-10 p-6 pb-0 flex justify-between items-center border-b border-gray-100">
              <h2 className="text-xl font-bold text-royal">Menu</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-4 text-lg font-medium pb-8">
                {navItems.map((item) => (
                  <li key={item.name} className="border-b border-gray-100 pb-3">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveMobileMenu(activeMobileMenu === item.name ? null : item.name)
                          }
                          className={`flex justify-between items-center w-full  transition-colors duration-200 py-2
                            ${pathname === item.href || pathname.startsWith(item.href + "/") ? "text-royal" : "text-gray-800"}
                          `}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={20}
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
                              transition={{ duration: 0.3 }}
                              className="ml-4 mt-2 space-y-2 overflow-y-auto max-h-60"
                            >
                              <li>
                                <Link
                                  href="/courses"
                                  onClick={() => setOpen(false)}
                                  className="block py-2 px-3  text-royal bg-royal/5 rounded-lg hover:bg-royal/10 transition-colors"
                                >
                                  View All Courses
                                </Link>
                              </li>
                              {item.submenu.map((sub) => (
                                <li key={sub.name}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setOpen(false)}
                                    className={`block py-2 px-3 rounded-lg transition-colors duration-200
                                      ${pathname === sub.href
                                        ? "text-royal  bg-royal/5"
                                        : "text-gray-600 hover:text-royal hover:bg-gray-50"
                                      }
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
                        className={`block py-2  transition-colors duration-200
                          ${pathname === item.href ? "text-royal" : "text-gray-800 hover:text-royal"}
                        `}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}