"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, ArrowRight, CheckCircle2, Award, TrendingUp, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado",
  "Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho",
  "Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
  "Maine","Maryland","Massachusetts","Michigan","Minnesota",
  "Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York",
  "North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
  "Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington",
  "West Virginia","Wisconsin","Wyoming","Puerto Rico",
];

const trustPoints = [
  "Evaluation by U.S. licensed professionals",
  "HIPAA-compliant secure telehealth",
  "Aligned with Fair Housing Act guidelines",
];

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

const TEAL_DARK  = "#0D3341";
const TEAL       = "#1D7080";
const TEAL_MID   = "#1F8A96";
const GOLD       = "#C9A227";
const GOLD_BRT   = "#E0B830";

export default function Hero() {
  const [state, setState] = useState("");

  return (
    <section id="hero" className="relative overflow-hidden flex flex-col min-h-[92vh]">
      {/* Background photo — visible, with shadow depth from overlays below */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-person-pet-care.jpg"
          alt="Person lovingly caring for their emotional support dogs"
          fill
          priority
          unoptimized
          className="object-cover object-[58%_center] sm:object-[62%_center] lg:object-[65%_center]"
          sizes="100vw"
        />
      </div>

      {/* Teal overlay — lighter so more of the photo shows through */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(98deg, rgba(13,51,65,0.82) 0%, rgba(13,51,65,0.58) 22%, rgba(19,76,95,0.32) 42%, rgba(29,112,128,0.12) 58%, rgba(29,112,128,0.03) 70%, transparent 92%)`,
        }}
      />

      {/* Soft shadow vignette — subtle depth at edges */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 110% 90% at 50% 110%, rgba(13,51,65,0.4) 0%, transparent 52%),
            radial-gradient(ellipse 65% 75% at 0% 50%, rgba(13,51,65,0.22) 0%, transparent 58%),
            radial-gradient(ellipse 45% 65% at 100% 40%, rgba(13,51,65,0.12) 0%, transparent 62%),
            linear-gradient(180deg, rgba(13,51,65,0.15) 0%, transparent 12%)
          `,
        }}
      />

      {/* Gold glow — top right, kept subtle so photo stays visible */}
      <div className="absolute z-[2] pointer-events-none" style={{
        top: 0, right: 0,
        width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${GOLD}18 0%, transparent 65%)`,
        transform: "translate(20%, -20%)",
      }} />
      {/* Teal glow — bottom left only */}
      <div className="absolute z-[2] pointer-events-none" style={{
        bottom: 0, left: 0,
        width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL_MID}22 0%, transparent 65%)`,
        transform: "translate(-30%, 30%)",
      }} />
      {/* Dot grid — subtle, mostly on the left */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
        backgroundSize: "28px 28px",
        maskImage: "linear-gradient(100deg, black 0%, black 45%, transparent 75%)",
        WebkitMaskImage: "linear-gradient(100deg, black 0%, black 45%, transparent 75%)",
      }} />

      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border"
                style={{ background: `${GOLD}22`, color: GOLD_BRT, borderColor: `${GOLD}44` }}>
                <Award className="size-3" /> Licensed &amp; HIPAA-Compliant
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}>
                <span className="inline-flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-3 shrink-0" style={{ fill: GOLD, color: GOLD }} />
                  ))}
                </span>
                <span>4.9 Rated</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}>
              ESA Evaluations by{" "}
              <span style={{
                background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_BRT} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Licensed</span>{" "}
              Professionals
            </h1>

            {/* Subtext */}
            <p className="text-white/65 text-lg leading-relaxed max-w-lg">
              Connect with U.S. licensed mental health professionals for secure telehealth ESA evaluations
              aligned with federal housing guidelines.
            </p>

            {/* Trust list */}
            <ul className="flex flex-col gap-2.5">
              {trustPoints.map((pt) => (
                <li key={pt} className="flex items-center gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="size-4 shrink-0" style={{ color: GOLD }} />
                  {pt}
                </li>
              ))}
            </ul>

            {/* State select + CTA — equal height & width */}
            <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl items-stretch">
              <Select onValueChange={setState} value={state}>
                <SelectTrigger
                  className="!h-12 min-h-12 !w-full border-0 px-4 py-0 font-semibold rounded-full text-sm shadow-lg"
                  style={{ height: 48, minHeight: 48, background: "rgba(255,255,255,0.96)", color: "#134C5F" }}
                  aria-label="Select your state"
                >
                  <SelectValue placeholder="Select your state…" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  align="start"
                  sideOffset={6}
                  className="z-[9999] max-h-64 w-[var(--radix-select-trigger-width)] rounded-xl border-0 p-1.5 shadow-xl bg-white"
                >
                  {US_STATES.map((s) => (
                    <SelectItem
                      key={s}
                      value={s}
                      className="cursor-pointer rounded-lg py-2.5 pl-3 pr-8 focus:bg-[#C9A227] focus:text-white data-[highlighted]:bg-[#C9A227] data-[highlighted]:text-white"
                    >
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                className="btn-hover-gold-line !h-12 min-h-12 w-full py-0 font-bold rounded-full text-white border-0 gap-2 justify-center"
                style={{
                  height: 48,
                  minHeight: 48,
                  background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRT})`,
                  boxShadow: `0 8px 24px ${GOLD}55`,
                }}
              >
                Get Started <ArrowRight className="size-4" />
              </Button>
            </div>

            <p className="text-white/35 text-xs leading-relaxed">
              Eligibility is determined by a licensed professional. Not everyone qualifies.
              We only charge after your evaluation is completed.
            </p>
          </div>

          {/* ── RIGHT: Glass card ── */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="float relative w-full max-w-sm rounded-3xl p-7" style={{
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}>
              {/* Card header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRT})` }}>
                  <ShieldCheck className="size-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-outfit)" }}>Your ESA Journey</div>
                  <div className="text-white/45 text-xs">3 simple steps</div>
                </div>
              </div>

              {/* Steps */}
              {[
                { num: "01", label: "Book Appointment",    sub: "Choose your time slot" },
                { num: "02", label: "Speak With Provider", sub: "Secure video or phone" },
                { num: "03", label: "Receive Your Letter", sub: "Sent directly to email" },
              ].map((step, i) => (
                <div key={step.num} className="flex items-start gap-3 mb-4 last:mb-0">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRT})` }}>
                      {step.num}
                    </div>
                    {i < 2 && <div className="w-px h-5" style={{ background: "rgba(255,255,255,0.15)" }} />}
                  </div>
                  <div className="pt-1">
                    <div className="text-white text-sm font-semibold">{step.label}</div>
                    <div className="text-white/45 text-xs">{step.sub}</div>
                  </div>
                </div>
              ))}

              {/* Mini stats */}
              <div className="mt-6 pt-5 grid grid-cols-3 gap-3 text-center"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                {[{ v: "10K+", l: "Evaluations" }, { v: "4.9★", l: "Rating" }, { v: "50", l: "States" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-lg font-extrabold" style={{
                      background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRT})`,
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      fontFamily: "var(--font-outfit)",
                    }}>{s.v}</div>
                    <div className="text-white/45 text-[10px] font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge — top (hidden on very small screens) */}
            <div className="float-delayed hidden sm:flex absolute -top-5 -left-4 rounded-2xl px-4 py-2.5 items-center gap-2" style={{
              background: "#fff", boxShadow: "0 8px 24px rgba(29,112,128,0.2)", border: "1px solid rgba(29,112,128,0.1)",
            }}>
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.25)" }} />
              <span className="text-sm font-bold whitespace-nowrap" style={{ color: TEAL_DARK }}>Providers Available Now</span>
            </div>

            {/* Floating badge — bottom (hidden on very small screens) */}
            <div className="float hidden sm:block absolute -bottom-5 right-4 rounded-2xl px-4 py-2.5 text-white text-xs font-bold whitespace-nowrap" style={{
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD_BRT})`,
              boxShadow: `0 8px 24px ${GOLD}55`,
            }}>
              ✓ Only charged after evaluation
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Trust counter band — inside hero, above wave */}
      <div className="relative z-20 flex justify-center px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="w-full max-w-3xl">
          <div className="rounded-xl overflow-hidden card-lift"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(29,112,128,0.1)",
              boxShadow: "0 4px 18px rgba(29,112,128,0.07)",
            }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x"
              style={{ borderColor: "rgba(29,112,128,0.08)" }}>
              {counters.map(({ value, label, tag, icon: Icon, gold, showStars }) => (
                <div
                  key={label}
                  className="relative px-3 py-3 sm:px-4 sm:py-3.5 flex flex-row items-center gap-2.5 text-left overflow-hidden"
                  style={{ background: gold ? "#FDF8E8" : "#FFFFFF" }}
                >
                  {gold && (
                    <div style={{
                      position: "absolute", top: -16, right: -16, width: 64, height: 64, borderRadius: "50%",
                      background: `radial-gradient(circle, ${GOLD}20 0%, transparent 70%)`, pointerEvents: "none",
                    }} />
                  )}

                  <div className="relative shrink-0 w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
                    style={{
                      background: gold
                        ? `linear-gradient(135deg, ${GOLD}, ${GOLD_BRT})`
                        : `linear-gradient(135deg, #134C5F, ${TEAL})`,
                      boxShadow: gold ? `0 4px 12px ${GOLD}44` : "0 4px 12px rgba(29,112,128,0.18)",
                    }}>
                    <Icon className="size-4 text-white" fill={showStars ? "white" : "none"} />
                  </div>

                  <div className="relative min-w-0 flex-1">
                    <span className="inline-block text-[7px] sm:text-[8px] font-bold tracking-wider uppercase rounded-full px-1.5 py-0.5 mb-0.5 leading-tight"
                      style={{
                        background: gold ? `${GOLD}22` : "#E6F4F6",
                        color: gold ? "#134C5F" : TEAL,
                        border: `1px solid ${gold ? `${GOLD}35` : "rgba(29,112,128,0.12)"}`,
                      }}>
                      {tag}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-lg sm:text-xl font-extrabold leading-none" style={{
                        color: "#134C5F",
                        fontFamily: "var(--font-outfit)",
                      }}>
                        {value}
                      </span>
                      {showStars && (
                        <Star className="size-3 shrink-0 fill-current" style={{ color: GOLD }} />
                      )}
                    </div>
                    <p className="text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5" style={{ color: "#5A7A80" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: 60 }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#F0F8F9" />
        </svg>
      </div>
    </section>
  );
}
