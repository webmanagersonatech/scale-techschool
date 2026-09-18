import { motion } from "framer-motion";
import { MapPin, GraduationCap, Building2 } from "lucide-react";

// TODO(client): confirm the full, current list of cities/campuses for each vertical.
const presence = [
  {
    title: "Sona Tech School",
    icon: GraduationCap,
    blurb: "Industry diploma & certification programmes",
    cities: ["Salem", "Bengaluru"],
  },
  {
    title: "Sona Finishing School",
    icon: Building2,
    blurb: "Career-readiness & professional development programmes",
    cities: ["Salem"],
  },
];

export default function PresenceSection() {
  return (
    <section className="py-10 bg-royal text-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-widest text-gold font-semibold text-sm mb-3">
            Where We Are
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl ">
            Our presence across Tech School & Finishing School
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            SCALE runs live, instructor-led batches across multiple cities — with more campuses
            being added as we grow.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10">
          {presence.map(({ title, icon: Icon, blurb, cities }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 py-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon size={18} className="text-gold shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold leading-tight">
                    {title}
                  </h3>
                  <p className="text-white/50 text-xs leading-snug truncate md:whitespace-normal">
                    {blurb}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 shrink-0">
                {cities.map((c, idx) => (
                  <span key={c} className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-white/80">
                      <MapPin size={11} className="text-gold" />
                      {c}
                    </span>
                    {idx < cities.length - 1 && (
                      <span className="text-white/20 text-xs">/</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
