import { TrendingUp, Users, Star, FileCheck, Calendar, Award } from "lucide-react";
import AsSeenOn from "@/components/home/AsSeenOn";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

const counters = [
  {
    value: "10,000+",
    label: "ESA Evaluations Completed",
    tag: "Trusted Nationwide",
    icon: TrendingUp,
    gold: false,
  },
  {
    value: "6+",
    label: "Years Serving Nationwide",
    tag: "Since 2019",
    icon: Calendar,
    gold: true,
  },
  {
    value: "4.9",
    label: "Average Client Rating",
    tag: "1,200+ Reviews",
    icon: Star,
    gold: false,
    showStars: true,
  },
];

const stats = [
  { value: "80%", desc: "Pet owners say their pets bring them happiness and emotional support", accent: TEAL,  gold: false },
  { value: "84%", desc: "Report a mostly positive impact on their mental health",              accent: GOLD, gold: true  },
  { value: "66%", desc: "Believe their pets help reduce stress and promote calm",              accent: TEAL, gold: false },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden" style={{ background: "#F0F8F9" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
        backgroundSize: "48px 48px", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: -80, right: -60, width: 320, height: 320, borderRadius: "50%",
        background: `radial-gradient(circle, ${GOLD}15 0%, transparent 70%)`, pointerEvents: "none",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Counter band */}
        <div className="mb-14 sm:mb-16">
          {/* <p className="text-xs font-bold tracking-widest uppercase mb-3 text-center" style={{ color: GOLD }}>
            Our Impact
          </p> */}
          <div className="rounded-3xl overflow-hidden card-lift"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(29,112,128,0.1)",
              boxShadow: "0 8px 32px rgba(29,112,128,0.1)",
            }}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
              style={{ borderColor: "rgba(29,112,128,0.08)" }}>
              {counters.map(({ value, label, tag, icon: Icon, gold, showStars }) => (
                <div
                  key={label}
                  className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left overflow-hidden"
                  style={{ background: gold ? "#FDF8E8" : "#FFFFFF" }}
                >
                  {gold && (
                    <div style={{
                      position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%",
                      background: `radial-gradient(circle, ${GOLD}20 0%, transparent 70%)`, pointerEvents: "none",
                    }} />
                  )}

                  <div className="relative shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: gold
                        ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
                        : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                      boxShadow: gold ? `0 8px 24px ${GOLD}44` : "0 8px 24px rgba(29,112,128,0.25)",
                    }}>
                    <Icon className="size-8 text-white" fill={showStars ? "white" : "none"} />
                  </div>

                  <div className="relative flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-1 mb-2"
                      style={{
                        background: gold ? `${GOLD}22` : "#E6F4F6",
                        color: gold ? TEAL_DARK : TEAL,
                        border: `1px solid ${gold ? `${GOLD}35` : "rgba(29,112,128,0.12)"}`,
                      }}>
                      {tag}
                    </span>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <span className="text-3xl sm:text-4xl font-extrabold" style={{
                        color: TEAL_DARK,
                        fontFamily: "var(--font-outfit)",
                      }}>
                        {value}
                      </span>
                      {showStars && (
                        <span className="inline-flex items-center gap-0.5">
                          <Star className="size-5 shrink-0 fill-current" style={{ color: GOLD }} />
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium leading-snug" style={{ color: "#5A7A80" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AsSeenOn />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Percentage stats */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>By The Numbers</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            Your ESA Journey Starts Here
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: "#5A7A80" }}>
            See how emotional support animals transform lives for thousands of people nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {stats.map(({ value, desc, accent, gold }, i) => (
            <div
              key={value}
              className="card-lift group relative overflow-hidden rounded-3xl p-7 sm:p-8"
              style={{
                background: gold ? "#FDF3D0" : "#FFFFFF",
                border: `1px solid ${gold ? `${GOLD}35` : "rgba(29,112,128,0.1)"}`,
                boxShadow: "0 4px 20px rgba(29,112,128,0.06)",
              }}
            >
              <div className="absolute right-2 bottom-0 font-black text-8xl leading-none pointer-events-none select-none"
                style={{
                  color: gold ? GOLD : TEAL,
                  opacity: gold ? 0.16 : 0.1,
                  fontFamily: "var(--font-outfit)",
                }} aria-hidden>
                %
              </div>

              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(180deg, ${accent}, ${gold ? "#E0B830" : TEAL})` }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md"
                  style={{
                    background: gold
                      ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
                      : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                  }}>
                  {i === 0 && <Users className="size-6 text-white" />}
                  {i === 1 && <Award className="size-6 text-white" />}
                  {i === 2 && <FileCheck className="size-6 text-white" />}
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold mb-3" style={{
                  background: `linear-gradient(135deg, ${accent}, ${gold ? "#E0B830" : TEAL_DARK})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "var(--font-outfit)",
                }}>
                  {value}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A80" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
