import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarDays, MessageCircle, FileCheck, ArrowRight } from "lucide-react";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

const steps = [
  {
    icon: CalendarDays,
    step: "01",
    title: "Set Up Your Appointment",
    desc: "Create your account and choose a time that works for you to connect with a licensed mental health professional.",
    gold: false,
    image: "/images/how-it-works/appointment.jpg",
    imageAlt: "Pet groomer gently caring for a small dog during an appointment",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Speak With Professionals",
    desc: "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an ESA is appropriate.",
    gold: true,
    image: "/images/how-it-works/consultation.jpg",
    imageAlt: "Licensed professionals caring for a pet during a wellness consultation",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Clinical Determination",
    desc: "If deemed appropriate, ESA documentation is sent directly to your email. If not, no documentation is issued.",
    gold: false,
    image: "/images/how-it-works/determination.jpg",
    imageAlt: "Veterinarian completing a clinical assessment with a calm dog",
  },
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
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8A6F12" }}>Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            How Online ESA Evaluation Works
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "#4A656B" }}>
            A simple 3-step process to complete your emotional support animal letter evaluation
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* connector */}
          <div className="hidden md:block absolute" style={{
            top: "2rem", left: "calc(16.66% + 2.5rem)", right: "calc(16.66% + 2.5rem)",
            height: 2, background: `linear-gradient(90deg, ${GOLD}, rgba(201,162,39,0.2))`,
          }} />

          {steps.map(({ icon: Icon, step, title, desc, gold, image, imageAlt }) => (
            <div key={step} className="flex flex-col items-center text-center gap-5">
              {/* icon */}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{
                  background: gold
                    ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
                    : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                }}>
                  <Icon className="size-8 text-white" aria-hidden />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-black shadow"
                  style={{ background: gold ? TEAL_DARK : GOLD }}>
                  {step}
                </div>
              </div>

              <div
                className="card-lift relative w-full overflow-hidden rounded-2xl p-6 text-left min-h-[168px]"
                style={{
                  border: `1px solid ${gold ? `${GOLD}40` : `rgba(29,112,128,0.1)`}`,
                  boxShadow: "0 3px 12px rgba(29,112,128,0.04)",
                }}
              >
              <Image
                src={image}
                alt=""
                fill
                loading="lazy"
                quality={60}
                aria-hidden
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: gold
                      ? "linear-gradient(145deg, rgba(253,243,208,0.96) 0%, rgba(253,243,208,0.9) 30%, rgba(253,243,208,0.62) 58%, rgba(253,243,208,0.2) 100%)"
                      : "linear-gradient(145deg, rgba(230,244,246,0.96) 0%, rgba(230,244,246,0.9) 30%, rgba(230,244,246,0.62) 58%, rgba(230,244,246,0.18) 100%)",
                  }}
                />

                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A656B" }}>{desc}</p>
                </div>
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
