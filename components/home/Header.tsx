"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Menu, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const esaByState = [
  "California", "Texas", "Colorado", "New York", "Florida", "Illinois",
];

export default function Header() {
  const [stateOpen, setStateOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[rgba(19,76,95,0.12)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#134c5f] flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[family-name:var(--font-outfit)]">M</span>
            </div>
            <span className="hidden sm:block font-bold text-[#134c5f] text-lg font-[family-name:var(--font-outfit)] leading-tight">
              My ESA<br />
              <span className="text-[#c9a227] text-base font-semibold">Therapist</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* ESA by State dropdown */}
            <div className="relative">
              <button
                onClick={() => setStateOpen(!stateOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#134c5f] hover:bg-[#f7f9f8] rounded-lg transition-colors"
              >
                ESA by State <ChevronDown className="size-3.5" />
              </button>
              {stateOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-border rounded-xl shadow-lg z-50 py-1">
                  {esaByState.map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-[#134c5f] hover:text-white transition-colors"
                      onClick={() => setStateOpen(false)}
                    >
                      ESA Letter {s}
                    </a>
                  ))}
                  <Separator className="my-1" />
                  <a href="#" className="block px-4 py-2 text-sm font-semibold text-[#134c5f] hover:bg-[#134c5f] hover:text-white transition-colors">
                    See All States →
                  </a>
                </div>
              )}
            </div>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-[#134c5f] hover:bg-[#f7f9f8] rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-2">
            <a href="tel:+18884124041" className="hidden md:flex items-center gap-1.5 text-sm text-[#5a7080] hover:text-[#134c5f] transition-colors">
              <Phone className="size-3.5" />
              <span>(888) 412-4041</span>
            </a>
            <Button
              asChild
              className="hidden sm:inline-flex bg-[#134c5f] hover:bg-[#1d6e72] text-white rounded-xl px-5 text-sm font-semibold"
            >
              <a href="#hero">Start ESA Evaluation</a>
            </Button>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-[#134c5f]">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white">
                <div className="flex flex-col gap-1 mt-8">
                  <Badge variant="secondary" className="self-start mb-4 bg-[#fdf7e7] text-[#134c5f] border-[#c9a227]">
                    Navigation
                  </Badge>
                  <a href="#" className="px-3 py-2.5 text-sm font-medium text-[#134c5f] hover:bg-[#f7f9f8] rounded-lg">ESA by State</a>
                  {navLinks.map((l) => (
                    <a key={l.label} href={l.href} className="px-3 py-2.5 text-sm font-medium text-[#134c5f] hover:bg-[#f7f9f8] rounded-lg">
                      {l.label}
                    </a>
                  ))}
                  <Separator className="my-3" />
                  <a href="tel:+18884124041" className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#5a7080]">
                    <Phone className="size-4" /> (888) 412-4041
                  </a>
                  <Button className="mt-2 bg-[#134c5f] hover:bg-[#1d6e72] text-white rounded-xl">
                    Start ESA Evaluation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
