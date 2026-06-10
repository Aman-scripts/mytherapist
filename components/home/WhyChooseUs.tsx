"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Stethoscope, FileText, Globe, Lightbulb, ArrowRight } from "lucide-react";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

const features = [
  { icon: ShieldCheck, title: "Licensed Professionals",       desc: "Evaluations conducted by independent U.S.-licensed mental health professionals authorized to assess ESA eligibility.", gold: false },
  { icon: Lock,        title: "Secure Telehealth",            desc: "HIPAA-compliant systems ensure your information remains confidential and protected at every step.",                   gold: true  },
  { icon: Stethoscope, title: "Clinical Integrity First",     desc: "We do not guarantee ESA approval. Recommendations are based solely on clinical judgment — always.",                 gold: false },
  { icon: FileText,    title: "Legitimate ESA Documentation", desc: "ESA letters are issued in compliance with applicable federal and state housing guidelines when clinically appropriate.", gold: true },
  { icon: Globe,       title: "Nationwide Access",            desc: "Telehealth evaluations available for individuals across all 50 US states, subject to clinician availability.",       gold: false },
  { icon: Lightbulb,   title: "Transparent Process",          desc: "Clear steps, clear expectations, no misleading claims — you always know exactly what to expect.",                   gold: true  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black pointer-events-none select-none whitespace-nowrap opacity-[0.025]"
        style={{ fontFamily: "var(--font-outfit)", fontSize: "13rem", color: TEAL_DARK }} aria-hidden>
        WHY US
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* left — sticky only on large screens */}
          <div className="lg:sticky lg:top-28 self-start">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
              What Makes Us{" "}
              <span className="relative inline-block">
                Different
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6 Q100 0 200 6" stroke={GOLD} strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#5A7A80" }}>
              We simplify online ESA evaluations while maintaining full efficiency and legal compliance.
              Here&apos;s what sets us apart.
            </p>
            <Button className="btn-hover-gold-line h-11 px-7 text-white font-bold rounded-full text-sm border-0 gap-2 hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, boxShadow: `0 6px 20px ${GOLD}44` }}>
              Start Your ESA Evaluation <ArrowRight className="size-4" />
            </Button>
            <div className="flex items-center gap-3 mt-8 pt-8" style={{ borderTop: "1px solid rgba(29,112,128,0.1)" }}>
              {["HIPAA", "FHA", "HUD"].map((tag) => (
                <span key={tag} className="text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1"
                  style={{ background: "#E6F4F6", color: TEAL_DARK }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc, gold }) => (
              <div key={title} className="card-lift group p-5 rounded-2xl"
                style={{ background: gold ? "#FDF3D0" : "#E6F4F6", border: `1px solid ${gold ? `${GOLD}30` : "rgba(29,112,128,0.1)"}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: gold ? `${GOLD}20` : `${TEAL}18` }}>
                  <Icon className="size-5" style={{ color: gold ? GOLD : TEAL }} />
                </div>
                <h3 className="font-bold text-sm mb-1.5" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#5A7A80" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
