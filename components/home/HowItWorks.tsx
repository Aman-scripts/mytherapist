import { Button } from "@/components/ui/button";
import { CalendarDays, MessageCircle, FileCheck, ArrowRight } from "lucide-react";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

const steps = [
  { icon: CalendarDays, step: "01", title: "Set Up Your Appointment",
    desc: "Create your account and choose a time that works for you to connect with a licensed mental health professional.", gold: false },
  { icon: MessageCircle, step: "02", title: "Speak With Professionals",
    desc: "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an ESA is appropriate.", gold: true },
  { icon: FileCheck, step: "03", title: "Clinical Determination",
    desc: "If deemed appropriate, ESA documentation is sent directly to your email. If not, no documentation is issued.", gold: false },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.025,
        backgroundImage: "radial-gradient(circle at 1px 1px, #1D7080 1px, transparent 0)",
        backgroundSize: "36px 36px", pointerEvents: "none",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            How Online ESA Evaluation Works
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "#5A7A80" }}>
            A simple 3-step process to complete your emotional support animal letter evaluation
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* connector */}
          <div className="hidden md:block absolute" style={{
            top: "2rem", left: "calc(16.66% + 2.5rem)", right: "calc(16.66% + 2.5rem)",
            height: 2, background: `linear-gradient(90deg, ${GOLD}, rgba(201,162,39,0.2))`,
          }} />

          {steps.map(({ icon: Icon, step, title, desc, gold }) => (
            <div key={step} className="flex flex-col items-center text-center gap-5">
              {/* icon */}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{
                  background: gold
                    ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
                    : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                }}>
                  <Icon className="size-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-black shadow"
                  style={{ background: gold ? TEAL_DARK : GOLD }}>
                  {step}
                </div>
              </div>
              <div className="card-lift w-full rounded-2xl p-6 text-left" style={{
                background: gold ? "#FDF3D0" : "#E6F4F6",
                border: `1px solid ${gold ? `${GOLD}40` : `rgba(29,112,128,0.1)`}`,
              }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A80" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-3">
          <Button className="btn-hover-gold-line h-12 px-10 text-white font-bold rounded-full text-sm border-0 gap-2 hover:opacity-90 hover:scale-[1.02] transition-all"
            style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`, boxShadow: `0 8px 24px rgba(29,112,128,0.3)` }}>
            Start Your ESA Evaluation <ArrowRight className="size-4" />
          </Button>
          <p className="text-xs italic" style={{ color: "#5A7A80" }}>
            We authorize your payment first, but only charge it after your evaluation is completed.
          </p>
        </div>
      </div>
    </section>
  );
}
