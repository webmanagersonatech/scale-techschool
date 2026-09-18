import { motion } from "framer-motion";
import { Users, Building2, IndianRupee } from "lucide-react";

// TODO(client): replace placeholder figures with verified placement data
// for Tech School and Finishing School before this section goes live.
// TODO(client): replace placeholder image with a real campus/placement photo.
const heroStat = { value: "90%+", label: "Placement-eligible learners placed" };

const stats = [
  { icon: Users, value: "500+", label: "Learners placed" },
  { icon: Building2, value: "80+", label: "Hiring partners & recruiters" },
  { icon: IndianRupee, value: "₹6.5 LPA", label: "Highest package (indicative)" },
];

export default function PerformanceOutcomes() {
  return (
    <section className="relative py-16 md:py-20 bg-white font-poppins overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 relative">
        {/* gold rule, top-left, like a certificate header mark */}
        <div className="h-[3px] w-16 bg-[#A9762E]" />

        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center mb-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-emerald-700 font-semibold text-sm mb-3">
              Performance outcomes
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-royal max-w-md leading-tight">
              Outcomes across Tech School &amp; Finishing School
            </h2>
            <p className="text-slate-500 mt-5 text-sm italic max-w-sm leading-relaxed border-l-2 border-slate-200 pl-4">
              Figures below are indicative placeholders — to be replaced with
              verified, audited placement data before publishing.
            </p>
          </motion.div>

          {/* Right: photo with stamped stat card at the corner */}
          <div className="relative pl-6 pb-9">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-xl overflow-hidden border border-slate-200 shadow-[0_18px_40px_-20px_rgba(22,35,61,0.35)] h-[160px] sm:h-[175px] md:h-[190px]"
            >
              <img
                src="https://images.unsplash.com/photo-1758874573138-f3dd1ed25c7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHx0ZWNoJTIwc2Nob29sfGVufDB8MHwwfHx8MA%3D%3D"
                alt="Learners collaborating on a project"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* stamp-style stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.2, 1.4, 0.4, 1],
              }}
              className="absolute left-0 bottom-0 w-[150px] bg-white rounded-lg border-[1.5px] border-[#A9762E] px-4 py-3 shadow-[0_14px_28px_-14px_rgba(22,35,61,0.4)]"
            >
              <p className="text-[0.58rem] text-slate-500 mb-1">
                Placement rate
              </p>

              <p className="font-heading font-bold text-[1.65rem] leading-none text-[#8A5F24] tabular-nums mb-1">
                {heroStat.value}
              </p>

              <p className="text-[0.65rem] text-slate-500 leading-snug">
                {heroStat.label}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Ledger-style stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border-t border-b border-slate-200"
        >
          <div className="grid md:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 py-7 px-1 md:px-8 border-b md:border-b-0 last:border-b-0 border-slate-200 ${i > 0 ? "md:border-l" : ""
                  }`}
              >
                <Icon size={22} className="text-emerald-700 shrink-0" />
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-2xl text-royal leading-tight tabular-nums">
                    {value}
                  </p>
                  <p className="text-[0.82rem] text-slate-500 leading-snug mt-0.5">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}