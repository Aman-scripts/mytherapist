"use client";

import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const TEAL_DARK = "#134C5F";

export default function HeroStateForm() {
  const [state, setState] = useState("");

  return (
    <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl items-stretch">
      <Select onValueChange={setState} value={state}>
        <SelectTrigger
          id="hero-state-select"
          aria-label="Select your state"
          className="!h-12 min-h-12 !w-full !justify-start border-0 px-4 py-0 font-semibold rounded-full text-sm text-left shadow-lg gap-2 focus-visible:ring-white/40 [&_svg]:text-[#134C5F] *:data-[slot=select-value]:flex-1 *:data-[slot=select-value]:justify-start *:data-[slot=select-value]:text-left [&>svg:last-child]:ml-auto"
          style={{
            height: 48,
            minHeight: 48,
            background: "rgba(255,255,255,0.97)",
            color: TEAL_DARK,
            boxShadow: "0 8px 24px rgba(13,51,65,0.12)",
          }}
        >
          <MapPin className="size-4 shrink-0 opacity-70" style={{ color: TEAL_DARK }} aria-hidden />
          <SelectValue placeholder="Select your state…" />
        </SelectTrigger>
        <SelectContent
          position="popper"
          align="start"
          sideOffset={8}
          className="hero-state-list z-[9999] max-h-64 w-[var(--radix-select-trigger-width)] rounded-2xl border-0 p-2 shadow-xl bg-white/98"
          style={{
            border: "1px solid rgba(29,112,128,0.14)",
            boxShadow: "0 20px 50px rgba(13,51,65,0.18), 0 8px 20px rgba(29,112,128,0.1)",
          }}
        >
          {US_STATES.map((s) => (
            <SelectItem
              key={s}
              value={s}
              className="cursor-pointer rounded-xl py-2.5 pl-3 pr-8 text-sm font-medium text-[#134C5F] focus:bg-[#C9A227] focus:text-white data-[highlighted]:bg-[#C9A227] data-[highlighted]:text-white [&_svg]:text-white"
            >
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        type="button"
        className="btn-hover-gold-line !h-12 min-h-12 w-full py-0 font-bold rounded-full border-0 gap-2 justify-center focus-visible:ring-white/40"
        style={{ height: 48, minHeight: 48 }}
      >
        Get Started <ArrowRight className="size-4" aria-hidden />
      </Button>
    </div>
  );
}
