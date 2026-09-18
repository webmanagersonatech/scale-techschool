import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// TODO(client): confirm final names, URLs and UTM parameters for each property.
// Using placeholder links (#) where a live URL wasn't supplied — swap these in
// before launch, ideally tagged for campaign tracking (utm_source=techschool).
const properties = [

  { name: "Sona Finishing School", href: "https://scaleindia.in/institutions/sona-finishing-school" },
  { name: "SCALE — Sona Centre for Advanced Learning & Entrepreneurship", href: "https://scaleindia.in/" },
];

export default function PromoStrip() {
  return (
    <div className="bg-royal/95 text-white text-sm font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <span className="text-white/60 text-xs uppercase tracking-wide shrink-0">
          Part of the Sona / SCALE family:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          {properties.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-gold transition"
            >
              {p.name}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
