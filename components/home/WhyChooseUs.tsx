import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Stethoscope, FileText, Globe, Lightbulb, ArrowRight, CheckCircle2, Star } from "lucide-react";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

const highlights = [
  { value: "10K+", label: "ESA Evaluations" },
  { value: "50",   label: "States Served" },
  { value: "4.9★", label: "Client Rating" },
];

const features = [
  {
    icon: ShieldCheck,
    step: "01",
    title: "Licensed Professionals",
    desc: "Evaluations conducted by independent U.S.-licensed mental health professionals authorized to assess ESA eligibility.",
    tag: "State-Licensed",
    gold: false,
  },
  {
    icon: Lock,
    step: "02",
    title: "Secure Telehealth",
    desc: "HIPAA-compliant systems ensure your information remains confidential and protected at every step of the process.",
    tag: "HIPAA Secure",
    gold: true,
  },
  {
    icon: Stethoscope,
    step: "03",
    title: "Clinical Integrity First",
    desc: "We do not guarantee ESA approval. Recommendations are based solely on clinical judgment — always.",
    tag: "No Guarantees",
    gold: false,
  },
  {
    icon: FileText,
    step: "04",
    title: "Legitimate ESA Documentation",
    desc: "ESA letters are issued in compliance with applicable federal and state housing guidelines when clinically appropriate.",
    tag: "FHA Aligned",
    gold: true,
  },
  {
    icon: Globe,
    step: "05",
    title: "Nationwide Access",
    desc: "Telehealth evaluations available for individuals across all 50 US states, subject to clinician availability.",
    tag: "All 50 States",
    gold: false,
  },
  {
    icon: Lightbulb,
    step: "06",
    title: "Transparent Process",
    desc: "Clear steps, clear expectations, no misleading claims — you always know exactly what to expect.",
    tag: "Full Clarity",
    gold: true,
  },
];

const trustPoints = [
  "Independent licensed clinicians in your state",
  "Payment only charged after evaluation",
  "Documentation aligned with HUD guidance",
];

const complianceBadges = [
  { label: "HIPAA", sub: "Compliant" },
  { label: "FHA",   sub: "Aligned" },
  { label: "HUD",   sub: "Guided" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "#F0F8F9" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
        backgroundSize: "48px 48px", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: -120, left: -80, width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${GOLD}18 0%, transparent 70%)`, pointerEvents: "none",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start min-w-0">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold mb-5 leading-tight" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
              What Makes Us{" "}
              <span className="relative inline-block">
                Different
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden>
                  <path d="M0 6 Q100 0 200 6" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#5A7A80" }}>
              We simplify online ESA evaluations while maintaining full efficiency and legal compliance.
              Here&apos;s what sets My ESA Therapist apart from other providers.
            </p>

            {/* Stat pills */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {highlights.map(({ value, label }) => (
                <div key={label} className="rounded-2xl p-4 text-center card-lift"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(29,112,128,0.1)", boxShadow: "0 4px 16px rgba(29,112,128,0.06)" }}>
                  <div className="text-xl sm:text-2xl font-extrabold mb-0.5" style={{
                    background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    fontFamily: "var(--font-outfit)",
                  }}>{value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#5A7A80" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Trust card */}
            <div className="rounded-3xl p-6 mb-8 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                boxShadow: "0 12px 40px rgba(29,112,128,0.25)",
              }}>
              <div style={{
                position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%",
                background: `radial-gradient(circle, ${GOLD}35 0%, transparent 70%)`, pointerEvents: "none",
              }} />
              <div className="relative flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 shrink-0 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <span className="text-white/80 text-xs font-semibold">Trusted by thousands nationwide</span>
              </div>
              <ul className="relative flex flex-col gap-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA + compliance dock — stacked so all badges stay visible in the sidebar */}
            <div
              className="rounded-2xl overflow-hidden w-full min-w-0"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(29,112,128,0.14)",
                boxShadow: "0 8px 28px rgba(29,112,128,0.1)",
              }}
            >
              <Button
                className="btn-hover-gold-line h-auto min-h-12 sm:min-h-14 px-4 sm:px-6 py-3.5 text-white font-bold rounded-none rounded-t-2xl text-xs sm:text-sm border-0 gap-2 w-full whitespace-normal text-center leading-snug"
                style={{ boxShadow: "none" }}
              >
                Start Your ESA Evaluation <ArrowRight className="size-4 shrink-0" />
              </Button>

              <div
                className="grid grid-cols-3 divide-x border-t min-w-0"
                style={{ borderColor: "rgba(29,112,128,0.12)" }}
              >
                {complianceBadges.map(({ label, sub }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center min-w-0 px-2 sm:px-4 py-3 sm:py-3.5 text-center"
                    style={{ background: "#F8FCFD" }}
                  >
                    <div className="flex items-center justify-center gap-1 mb-0.5 min-w-0">
                      <ShieldCheck className="size-3 sm:size-3.5 shrink-0" style={{ color: TEAL }} />
                      <span
                        className="text-[11px] sm:text-sm font-extrabold tracking-wide truncate"
                        style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}
                      >
                        {label}
                      </span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-medium leading-tight" style={{ color: "#5A7A80" }}>
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, step, title, desc, tag, gold }) => (
              <div
                key={title}
                className="card-lift group relative rounded-3xl p-6 sm:p-7 overflow-hidden"
                style={{
                  background: gold ? "#FDF3D0" : "#FFFFFF",
                  border: `1px solid ${gold ? `${GOLD}35` : "rgba(29,112,128,0.1)"}`,
                  boxShadow: "0 4px 20px rgba(29,112,128,0.06)",
                }}
              >
                {/* Number watermark */}
                <div className="absolute right-2 bottom-0 font-black text-7xl sm:text-8xl leading-none pointer-events-none select-none"
                  style={{
                    color: gold ? GOLD : TEAL,
                    opacity: gold ? 0.14 : 0.08,
                    fontFamily: "var(--font-outfit)",
                  }} aria-hidden>
                  {step}
                </div>

                {/* Gold accent bar on hover */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(180deg, ${GOLD}, #E0B830)` }} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md shrink-0" style={{
                      background: gold
                        ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
                        : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                    }}>
                      <Icon className="size-7 text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-1 shrink-0"
                      style={{
                        background: gold ? `${GOLD}25` : `${TEAL}12`,
                        color: gold ? TEAL_DARK : TEAL,
                        border: `1px solid ${gold ? `${GOLD}40` : "rgba(29,112,128,0.15)"}`,
                      }}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A7A80" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
