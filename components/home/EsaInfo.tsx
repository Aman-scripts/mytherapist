import { Button } from "@/components/ui/button";
import { CheckCircle2, Activity, TrendingUp, Calendar, ArrowRight, PawPrint, Home } from "lucide-react";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

const indicators = [
  "Feeling persistent anxiety, depression, or stress that impacts daily life",
  "Difficulty coping with emotional challenges on your own",
  "Experiencing frequent loneliness or isolation",
  "Noticing that being around animals naturally brings you comfort",
  "Struggling to maintain emotional balance during stressful situations",
];

const benefits = [
  { icon: Activity,   title: "Improved Emotional Stability",  desc: "Regular interaction with an ESA can help maintain a balanced mood and support overall mental health.",                  gold: false },
  { icon: TrendingUp, title: "Support in Daily Challenges",   desc: "An ESA's presence can help you feel calmer and more grounded during stressful or overwhelming situations.",             gold: true  },
  { icon: Calendar,   title: "Encourages Routine & Structure",desc: "Caring for an ESA promotes daily routines that support focus, responsibility, and overall well-being.",                gold: false },
];

export default function EsaInfo() {
  return (
    <>
      {/* What is an ESA */}
      <section id="about-esa" className="py-16 sm:py-24 relative overflow-hidden -mt-0.5" style={{ background: "#F0F8F9" }}>
        <div style={{
          position: "absolute", top: 1, left: 0, right: 0, bottom: 0, opacity: 0.025,
          backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 1px 0",
          pointerEvents: "none",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>About ESAs</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-5" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
                What is an Emotional Support Animal?
              </h2>
              <p className="leading-relaxed mb-4 text-sm" style={{ color: "#5A7A80" }}>
                An Emotional Support Animal (ESA) is a companion animal that provides comfort and emotional stability
                to individuals with mental or emotional health conditions. ESAs offer therapeutic benefits simply
                through their presence — no special task training required.
              </p>
              <p className="leading-relaxed mb-8 text-sm" style={{ color: "#5A7A80" }}>
                ESAs are recognized under certain housing laws, allowing individuals to live with them in places that
                might otherwise have pet restrictions. A licensed mental health professional must provide a formal
                recommendation explaining how the animal supports your emotional health.
              </p>
              <div className="flex flex-nowrap items-stretch gap-2 sm:gap-3 w-full">
                <Button
                  className="btn-hover-gold-line flex-1 min-w-0 h-10 sm:h-11 px-3 sm:px-7 text-white font-bold rounded-full text-xs sm:text-sm border-0 gap-1.5 sm:gap-2 hover:opacity-90 whitespace-nowrap"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, boxShadow: `0 6px 20px ${GOLD}44` }}
                >
                  <span className="truncate">Learn About ESAs</span>
                  <ArrowRight className="size-3.5 sm:size-4 shrink-0" />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 min-w-0 h-10 sm:h-11 px-3 sm:px-7 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap"
                  style={{ borderColor: "rgba(29,112,128,0.25)", color: TEAL_DARK }}
                >
                  Start Evaluation
                </Button>
              </div>
            </div>

            {/* checklist card */}
            <div className="relative pt-2 pr-2 sm:pt-0 sm:pr-0">
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 20px 60px rgba(29,112,128,0.2)" }}>
                <div className="p-6 pr-16 sm:pr-6 flex items-center gap-4" style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})` }}>
                  <PawPrint className="size-10 text-white shrink-0" aria-hidden />
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>Do You Need an ESA?</h3>
                    <p className="text-white/55 text-sm">Signs you may qualify</p>
                  </div>
                </div>
                <div className="bg-white p-6 flex flex-col gap-3">
                  {indicators.map((ind) => (
                    <div key={ind} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "#E6F4F6", border: "1px solid rgba(29,112,128,0.08)" }}>
                      <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: TEAL }} />
                      <span className="text-sm leading-snug" style={{ color: TEAL_DARK }}>{ind}</span>
                    </div>
                  ))}
                  <p className="text-xs italic pt-2 text-center" style={{ color: "#5A7A80" }}>
                    An ESA should only be recommended following a proper evaluation by a licensed professional.
                  </p>
                </div>
              </div>
              <div
                className="float-delayed absolute top-2 right-2 sm:-top-4 sm:-right-4 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, boxShadow: `0 8px 24px ${GOLD}55` }}
              >
                <Home className="size-5 sm:size-7 text-white" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 sm:py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Benefits</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
              Benefits of Having an ESA
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "#5A7A80" }}>
              Having an ESA can provide comfort and support that positively impacts your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map(({ icon: Icon, title, desc, gold }, i) => (
              <div key={title} className="card-lift relative p-7 rounded-3xl overflow-hidden"
                style={{ background: gold ? "#FDF3D0" : "#E6F4F6", border: `1px solid ${gold ? `${GOLD}30` : "rgba(29,112,128,0.1)"}` }}>
                <div className="absolute right-3 bottom-1 font-black text-8xl leading-none pointer-events-none select-none"
                  style={{
                    color: gold ? GOLD : TEAL,
                    opacity: gold ? 0.18 : 0.14,
                    fontFamily: "var(--font-outfit)",
                  }} aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md" style={{
                  background: gold ? `linear-gradient(135deg, ${GOLD}, #E0B830)` : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                }}>
                  <Icon className="size-7 text-white" />
                </div>
                <h3 className="relative z-10 text-lg font-bold mb-2" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>{title}</h3>
                <p className="relative z-10 text-sm leading-relaxed" style={{ color: "#5A7A80" }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-hover-gold-line h-12 px-10 text-white font-bold rounded-full text-sm border-0 gap-2 hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`, boxShadow: "0 8px 24px rgba(29,112,128,0.3)" }}>
              Start Your ESA Evaluation <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
