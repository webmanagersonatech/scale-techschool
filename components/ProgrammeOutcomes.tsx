import { CheckCircle2, TrendingUp, Briefcase, Sparkles } from "lucide-react";
import { Course, defaultGroupDiscount } from "../data/courses";

interface Props {
  course: Course;
}

// Auto-generated fallback so every programme page shows outcome content
// even before the content team has written bespoke copy for it.
function buildFallbackOutcomes(course: Course) {
  const category = course.category || "this field";
  return {
    skills: [
      `Core concepts and hands-on practice in ${category.toLowerCase()}`,
      `Applied learning through ${course.projects || "guided projects"}`,
      "Industry-aligned tools and workflows used on the job",
      "Portfolio-ready output reviewed by mentors",
    ],
    careerPathways: [
      `Entry-level and associate roles in ${category}`,
      "Internal mobility / upskilling for current professionals",
      "Foundation for further certification or specialisation",
    ],
    placementHighlights: [
      "Mentorship and career support included with this programme",
      "Access to SCALE's placement network for eligible learners",
    ],
  };
}

export default function ProgrammeOutcomes({ course }: Props) {
  const outcomes = course.outcomes || buildFallbackOutcomes(course);
  const isFallback = !course.outcomes;
  const locations = course.batchLocations && course.batchLocations.length > 0
    ? course.batchLocations
    : ["Salem", "Bengaluru"]; // default until confirmed per-programme
  const discountTiers = course.groupDiscount || defaultGroupDiscount;

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="mb-8">
        <p className="uppercase tracking-widest text-emerald-600 font-semibold text-sm mb-2">
          Programme Outcomes
        </p>
        <h2 className="text-3xl font-heading font-bold text-royal">
          What you'll gain from {course.title}
        </h2>
        {isFallback && (
          <p className="text-xs text-slate-400 mt-2">
            (Generic outline shown — content team to confirm programme-specific outcomes.)
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Skills */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-emerald-600" size={20} />
            <h3 className="font-semibold text-royal">Skills You'll Gain</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {outcomes.skills.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Career pathways */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-emerald-600" size={20} />
            <h3 className="font-semibold text-royal">Career Pathways</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {outcomes.careerPathways.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Placement / performance */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-emerald-600" size={20} />
            <h3 className="font-semibold text-royal">Placement & Performance</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {outcomes.placementHighlights.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

    <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-emerald-50 border border-emerald-100  p-5">
  <span className="font-semibold text-royal text-sm">
    Live batches running at:
  </span>

  <div className="flex gap-2 flex-wrap">
    {locations.map((loc) => (
      <span
        key={loc}
        className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700 text-sm font-medium flex items-center gap-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
          />
          <circle cx="12" cy="9" r="2.5" />
        </svg>

        {loc}
      </span>
    ))}
  </div>
</div>

      {/* Group / batch discount */}
      <div className="mt-4 bg-gold/10 border border-gold/30  p-5">
        <p className="font-semibold text-royal text-sm mb-2">
          Enrolling as a group? Batch discounts apply automatically:
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-700">
          {discountTiers.map((t) => (
            <span key={t.minSeats} className="px-3 py-1 rounded-full bg-white border border-gold/40">
              {t.minSeats}+ seats → {t.discountPercent}% off
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
