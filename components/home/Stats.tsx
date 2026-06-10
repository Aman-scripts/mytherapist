import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users, Star } from "lucide-react";

const TEAL  = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD  = "#C9A227";

const counters = [
  { value: "10,000+", label: "ESA Evaluations Completed", icon: TrendingUp },
  { value: "6+",      label: "Years Serving Nationwide",  icon: Users },
  { value: "4.9 ★",  label: "Average Client Rating",     icon: Star },
];

const stats = [
  { value: "80%", desc: "Pet owners say their pets bring them happiness and emotional support", accent: TEAL },
  { value: "84%", desc: "Report a mostly positive impact on their mental health",              accent: GOLD },
  { value: "66%", desc: "Believe their pets help reduce stress and promote calm",              accent: TEAL },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20" style={{ background: "#F0F8F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* counter row */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-12 sm:mb-16">
          {counters.map((c, i) => (
            <div key={c.label} className="flex items-center gap-5">
              <div className="card-lift flex items-center gap-4 bg-white rounded-2xl px-6 py-4"
                style={{ border: `1px solid rgba(29,112,128,0.1)`, boxShadow: "0 2px 12px rgba(29,112,128,0.08)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow"
                  style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})` }}>
                  <c.icon className="size-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>{c.value}</div>
                  <div className="text-xs font-medium" style={{ color: "#5A7A80" }}>{c.label}</div>
                </div>
              </div>
              {i < counters.length - 1 && (
                <Separator orientation="vertical" className="h-10 hidden sm:block" style={{ background: "rgba(29,112,128,0.15)" }} />
              )}
            </div>
          ))}
        </div>

        {/* heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>By The Numbers</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            Your ESA Journey Starts Here
          </h2>
          <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "#5A7A80" }}>
            See how emotional support animals transform lives for thousands of people nationwide.
          </p>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ value, desc, accent }) => (
            <div key={value} className="card-lift relative overflow-hidden rounded-3xl bg-white p-8"
              style={{ border: `1px solid rgba(29,112,128,0.1)` }}>
              {/* top accent bar matching logo colours */}
              <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-3xl"
                style={{ background: accent }} />
              {/* decorative % watermark */}
              <div
                className="absolute right-2 top-2 text-8xl sm:text-9xl font-black leading-none pointer-events-none select-none"
                style={{
                  color: accent,
                  opacity: accent === GOLD ? 0.16 : 0.12,
                  fontFamily: "var(--font-outfit)",
                }}
                aria-hidden
              >
                %
              </div>
              <div className="relative z-10">
                <div className="text-5xl font-extrabold mb-3" style={{
                  background: `linear-gradient(135deg, ${accent}, ${accent}bb)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "var(--font-outfit)",
                }}>{value}</div>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A80" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
