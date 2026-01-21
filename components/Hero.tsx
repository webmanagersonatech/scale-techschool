import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight, Brain, Cpu, Target, Instagram,
  Facebook,
  X,
} from "lucide-react";

const heroImages = [
  {
    src: "/images/hero/hero-1.jpg",
    glow1: "bg-gold/20",
    glow2: "bg-purple-500/20",
  },
  {
    src: "/images/hero/hero-2.avif",
    glow1: "bg-blue-300/20",
    glow2: "bg-pink-400/20",
  },
  {
    src: "/images/hero/hero-3.jpg",
    glow1: "bg-green-300/20",
    glow2: "bg-yellow-400/20",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatic carousel change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentGlow = heroImages[currentImage];

  return (
    <section className="relative bg-royal text-white overflow-hidden">
      {/* BACKGROUND AI GLOW + ROTATING CIRCLE */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <svg
          className="w-full h-full opacity-40"
          viewBox="0 0 1440 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal lines */}
          <motion.path
            d="M-15 160 H1440"
            stroke="#d4af37"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.path
            d="M-15 570 H1440"
            stroke="#d4af37"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />

          {/* Rotating circle: wrap in <g> */}
          <g className="rotating-circle">
            <circle
              cx="80"
              cy="80"
              r="200"
              stroke="#d4af37"
              strokeWidth="1.2"
              strokeDasharray="8 8"
            />
          </g>
        </svg>

      </div>

      {/* GLOW BLURS */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          key={currentImage} // triggers animation on image change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${currentGlow.glow1}`}
        />
        <motion.div
          key={`bottom-${currentImage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl ${currentGlow.glow2}`}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl xl:text-5xl font-oswald leading-[1.1] tracking-wide mb-6"
          >
            Industry Ready
            <span className="block mt-1 text-gold tracking-wider">
              AI Specialization Programs
            </span>
          </motion.h1>


          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-200 max-w-xl font-heading md:text-lg mb-10"
          >
            Future-focused programs designed with industry experts, integrating AI skill mapping,
            real-world projects, and outcome-driven learning.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="relative group cursor-pointer text-royal overflow-hidden h-16 w-64 sm:w-64 rounded-md bg-gold flex justify-center items-center">
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#b8942e]"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#d4af37]"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#ffe27d]"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#fff4c1]"></div>

              <p className="z-10 text-royal flex items-center gap-2">
                Know More
                <motion.span
                  className="inline-block"
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 5, opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  ➔
                </motion.span>
              </p>
            </button>

            <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-white overflow-hidden h-16 w-64 rounded-md bg-gray-300 p-2 flex justify-center items-center ">
              <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500  bg-[#0b1c2d]/80"></div>
              <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500  bg-[#0b1c2d]/60"></div>
              <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500  bg-[#0b1c2d]/40"></div>
              <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500  bg-[#0b1c2d]/20"></div>

              <p className="z-10 flex items-center gap-2">
                Request Demo <ArrowRight size={18} />
              </p>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 hover:scale-105 transform transition duration-500 w-full h-[420px] md:h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentImage].src}
                  alt="AI Industry Learning"
                  className="object-cover rounded-3xl"
                  fill
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* NEON OUTLINE */}
            <div className="absolute inset-0 border-2 border-gold/50 rounded-3xl pointer-events-none animate-pulse" />
          </div>

          {/* FLOATING BADGES */}
          <FloatingBadge icon={Brain} text="AI Skill Mapping" position="top-4 -left-8" delay={0.2} glow />
          <FloatingBadge icon={Cpu} text="Industry Aligned" position="top-12 -right-8" delay={0.4} glow />
          <FloatingBadge icon={Target} text="Outcome Driven" position="-bottom-6 left-14" delay={0.6} glow />
        </motion.div>
      </div>

      <div className="absolute right-2 xl:right-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 z-20">

        {/* TOP LINE */}
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />

        {[
          {
            Icon: Instagram,
            label: "Instagram",
            hoverColor: "group-hover:text-pink-500",
          },
          {
            Icon: Facebook,
            label: "Facebook",
            hoverColor: "group-hover:text-blue-500",
          },
          {
            Icon: X,
            label: "Twitter / X",
            hoverColor: "group-hover:text-black",
          },
        ].map(({ Icon, label, hoverColor }, i) => (
          <div key={i} className="flex flex-col items-center gap-2">

            {/* ICON ITEM */}
            <div
              className="group cursor-pointer flex items-center overflow-hidden
        w-9 hover:w-36
        transition-all duration-500 ease-out
        rounded-full border border-white/15
        bg-white/5 backdrop-blur-md
        hover:shadow-lg hover:shadow-black/20"
            >
              {/* ICON */}
              <div
                className={`
            flex h-9 w-9 shrink-0 items-center justify-center
            rounded-full text-white
            transition-all duration-300
            group-hover:scale-110
            ${hoverColor}
          `}
              >
                <Icon size={16} />
              </div>

              {/* LABEL */}
              <span
                className="ml-2 whitespace-nowrap text-xs font-medium text-white/90
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 delay-150"
              >
                {label}
              </span>
            </div>

            {/* BETWEEN LINE (except last item) */}
            {i !== 2 && (
              <div className="h-4 w-px bg-white/30" />
            )}
          </div>
        ))}

        {/* BOTTOM LINE */}
        <div className="h-10 w-px bg-gradient-to-t from-transparent via-white/40 to-transparent" />
      </div>






    </section>
  );
}

/* ================= FLOATING BADGE ================= */
function FloatingBadge({
  icon: Icon,
  text,
  position,
  delay,
  glow = false,
}: {
  icon: any;
  text: string;
  position: string;
  delay: number;
  glow?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.8, ease: "easeOut" }}
      className={`absolute ${position} hidden sm:flex items-center gap-3 
      px-4 py-3 rounded-2xl shadow-lg backdrop-blur-xl border border-white/20
      ${glow ? "bg-gradient-to-r from-purple-600/40 to-pink-400/40 animate-bounce-slow" : "bg-white/90"} `}
    >
      <div className={`p-2 rounded-xl shadow-lg ${glow ? "bg-gradient-to-br from-gold to-yellow-400 text-white" : "bg-gold text-royal"}`}>
        <Icon size={20} />
      </div>
      <span className={`text-sm font-semibold ${glow ? "text-white" : "text-royal"}`}>{text}</span>
    </motion.div>
  );
}
