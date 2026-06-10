import { Award, Heart, Users } from "lucide-react";

const TEAL_DARK  = "#134C5F";
const TEAL_DEEP  = "#0D3341";
const TEAL       = "#1D7080";
const GOLD       = "#C9A227";

const stats = [
  { value: "10K+", label: "ESA Evaluations", icon: Award },
  { value: "6+",   label: "Years Serving",   icon: Heart },
  { value: "50",   label: "States Served",   icon: Users },
];

const brands = ["The Dodo", "Yahoo", "Dogster", "Daily Paws", "Newsweek", "US News"];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden" style={{
      background: `linear-gradient(135deg, ${TEAL_DEEP} 0%, ${TEAL_DARK} 55%, ${TEAL} 100%)`,
    }}>
      {/* Gold circle glow — top-right, echoing the logo shape */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, ${GOLD}25 0%, transparent 65%)`,
        transform: "translate(30%, -30%)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "26px 26px", pointerEvents: "none",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5" style={{ fontFamily: "var(--font-outfit)" }}>
              About My ESA Therapist
            </h2>
            <p className="text-white/65 leading-relaxed mb-4 text-sm">
              My ESA Therapist is an online telehealth platform connecting individuals with independent,
              U.S.-licensed mental health professionals for ESA evaluations. We were founded to make this
              process simple, transparent, and legitimate.
            </p>
            <p className="text-white/65 leading-relaxed text-sm">
              Our team is committed to clinical integrity — ESA documentation is only issued when a licensed
              professional determines it is clinically appropriate. We do not guarantee outcomes, and we do not
              allow our platform to be used for fraudulent documentation.
            </p>

            {/* stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="rounded-2xl p-4 text-center" style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)` }}>
                    <Icon className="size-4 text-white" />
                  </div>
                  <div className="text-2xl font-extrabold mb-1" style={{
                    background: `linear-gradient(135deg, ${GOLD}, #E0B830)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    fontFamily: "var(--font-outfit)",
                  }}>{value}</div>
                  <div className="text-white/45 text-[10px] font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* "As seen on" */}
          <div className="flex flex-col gap-8">
            <div className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-white/35 text-xs font-bold tracking-widest uppercase text-center mb-7">As Seen In</p>
              <div className="grid grid-cols-3 gap-4">
                {brands.map((b) => (
                  <div key={b} className="rounded-xl px-3 py-3 text-center text-white/50 text-xs font-bold uppercase tracking-wide transition-colors hover:text-white"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl flex items-start gap-4" style={{
              background: `linear-gradient(135deg, ${GOLD}22, ${GOLD}08)`, border: `1px solid ${GOLD}44`,
            }}>
              <div className="text-4xl">🐾</div>
              <div>
                <h4 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-outfit)" }}>Our Mission</h4>
                <p className="text-white/65 text-sm leading-relaxed">
                  To bridge the gap between individuals who need emotional support and the qualified professionals
                  who can help them — with integrity, compassion, and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
