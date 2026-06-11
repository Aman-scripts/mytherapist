import { Button } from "@/components/ui/button";
import FaqAccordion from "@/components/home/FaqAccordion";
import { ArrowRight, PawPrint } from "lucide-react";
import Image from "next/image";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const TEAL_DEEP = "#0D3341";
const GOLD      = "#C9A227";

const faqs = [
  {
    q: "What is an ESA letter and what can it be used for?",
    a: "An ESA letter is a written recommendation from a licensed mental health professional. It can be used to request housing accommodations under the Fair Housing Act, allowing you to live with your ESA in housing that may otherwise have pet restrictions.",
  },
  {
    q: "How does the online evaluation process work?",
    a: "You schedule an appointment, complete a telehealth consultation with a licensed professional, and — if clinically appropriate — receive your ESA documentation via email.",
  },
  {
    q: "What mental health conditions may qualify someone for an ESA?",
    a: "Common conditions that may support ESA recommendations include anxiety, depression, PTSD, stress-related disorders, and other mental or emotional health conditions. A licensed professional makes this determination.",
  },
  {
    q: "Can any type of animal be an ESA?",
    a: "While any domesticated animal can potentially serve as an ESA, dogs and cats are most common. The animal's type and temperament may be considered by housing providers.",
  },
  {
    q: "Is the ESA letter legally valid?",
    a: "Our letters are prepared by independent, U.S.-licensed mental health professionals. Their validity depends on the applicable laws and how housing providers assess your documentation.",
  },
  {
    q: "When will I be charged?",
    a: "We authorize your payment upfront but only charge you after your evaluation is completed. If you do not qualify, you are not charged.",
  },
];

export default function FAQ() {
  return (
    <>
      <section id="faq" className="py-16 sm:py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title + View All button */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10 lg:mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
              style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}
            >
              Frequently Asked Questions
            </h2>
            <Button
              variant="outline"
              className="h-11 px-6 rounded-lg text-xs font-bold uppercase tracking-widest shrink-0 self-start sm:self-auto hover:bg-gray-50"
              style={{ borderColor: TEAL_DARK, color: TEAL_DARK }}
            >
              View All FAQ
            </Button>
          </div>

          {/* Accordion + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left — accordion list */}
            <FaqAccordion items={faqs} />

            {/* Right — image */}
            <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&q=80"
                alt="Person bonding with their emotional support dog"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              {/* subtle brand tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${TEAL_DARK}15 0%, transparent 60%)` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden" style={{
        background: `linear-gradient(135deg, ${TEAL_DEEP} 0%, ${TEAL_DARK} 50%, ${TEAL} 100%)`,
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${GOLD}30 0%, transparent 65%)`,
          transform: "translate(30%, -30%)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "28px 28px", pointerEvents: "none",
        }} />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <PawPrint className="size-12 mx-auto mb-5 text-white" aria-hidden />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
            Start Your ESA Evaluation Today
          </h2>
          <p className="text-white/60 mb-8 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Connect with a licensed mental health professional and take the first step toward getting the
            emotional support animal accommodation you may qualify for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="btn-hover-gold-line h-13 px-10 text-white font-bold rounded-full text-sm border-0 gap-2 hover:scale-[1.03] transition-all"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, boxShadow: `0 10px 30px ${GOLD}55` }}>
              Begin Your Evaluation <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" className="h-13 px-10 rounded-full font-semibold text-sm"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.08)" }}>
              Learn More About ESAs
            </Button>
          </div>
          <p className="text-white/65 text-xs mt-6">
            Only charged after evaluation completion · HIPAA-compliant · 50 States
          </p>
        </div>

        {/* Curved bottom wave into light page background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" style={{ lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: 80 }}
            aria-hidden
          >
            <path
              d="M0,30 C360,75 1080,5 1440,35 L1440,80 L0,80 Z"
              fill="#F0F8F9"
            />
          </svg>
        </div>
      </section>

      {/* Light gap between CTA and footer */}
      <div className="h-12 sm:h-16" style={{ background: "#F0F8F9" }} />
    </>
  );
}
