"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Award, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const trustBadges = [
  { icon: ShieldCheck, text: "Evaluations conducted by licensed professionals." },
  { icon: Award,       text: "Eligibility for an ESA letter is determined clinically." },
  { icon: Users,       text: "Serving individuals nationwide since 2019." },
];

export default function Hero() {
  const [state, setState] = useState("");

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f3d50 0%, #134c5f 40%, #1d6e72 100%)",
        minHeight: "88vh",
      }}
    >
      {/* subtle decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 bg-[#c9a227]" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 bg-[#c9a227]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 flex flex-col items-center text-center gap-8">
        {/* eyebrow badge */}
        <Badge className="bg-[#c9a227]/20 text-[#efbf2f] border border-[#c9a227]/40 px-4 py-1 text-xs tracking-widest uppercase font-semibold rounded-full">
          100 % Legal · HIPAA-Compliant · Licensed Providers
        </Badge>

        {/* headline */}
        <h1
          className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Emotional Support Animal{" "}
          <span className="text-[#efbf2f]">Evaluations</span>{" "}
          by Licensed Professionals
        </h1>

        {/* sub-headline */}
        <p className="max-w-2xl text-lg text-white/75 leading-relaxed">
          Connect with U.S. licensed mental health professionals for ESA evaluation
          conducted through secure telehealth and aligned with federal housing guidelines.
        </p>

        {/* state selector + CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
          <Select onValueChange={setState} value={state}>
            <SelectTrigger className="bg-white border-2 border-white/80 text-[#134c5f] font-semibold rounded-xl h-12 flex-1 text-sm uppercase tracking-wide">
              <SelectValue placeholder="SELECT YOUR STATE ▼" />
            </SelectTrigger>
            <SelectContent className="max-h-64">
              {US_STATES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            className="h-12 px-8 bg-[#c9a227] hover:bg-[#efbf2f] text-white font-bold rounded-xl text-sm uppercase tracking-wide shadow-lg transition-transform hover:scale-105"
          >
            GET STARTED
          </Button>
        </div>

        {/* disclaimer */}
        <p className="text-white/50 text-xs max-w-md">
          Eligibility for an ESA letter is determined by a licensed mental health professional
          following a clinical evaluation. Not everyone qualifies.
        </p>

        {/* trust badges */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          {trustBadges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5 text-white/85 text-sm backdrop-blur-sm border border-white/10">
              <Icon className="size-4 text-[#efbf2f] shrink-0" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
