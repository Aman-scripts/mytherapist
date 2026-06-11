"use client";

import { useState } from "react";

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

export default function HeroStateForm() {
  const [state, setState] = useState("");

  return (
    <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl items-stretch">
      <label htmlFor="hero-state-select" className="sr-only">
        Select your state
      </label>
      <select
        id="hero-state-select"
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
        aria-label="Select your state"
        className="h-12 min-h-12 w-full rounded-full border-0 px-4 text-sm font-semibold shadow-lg appearance-none cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/40"
        style={{
          background: "rgba(255,255,255,0.96)",
          color: "#134C5F",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134C5F' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          paddingRight: "2.75rem",
        }}
      >
        <option value="" disabled>
          Select your state…
        </option>
        {US_STATES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="btn-hover-gold-line h-12 min-h-12 w-full font-bold rounded-full text-white border-0 gap-2 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/40"
      >
        Get Started
        <svg
          className="size-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
