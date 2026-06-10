"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Phone, ChevronDown, MapPin, X } from "lucide-react";
import Image from "next/image";

const esaByState = [
  "California","Texas","Colorado","New York","Florida",
  "Illinois","Washington","Arizona","Georgia","Pennsylvania",
];
const navLinks = [
  { label: "How It Works",   href: "#how-it-works" },
  { label: "Our Therapists", href: "#team" },
  { label: "About Us",       href: "#about" },
  { label: "Contact",        href: "#contact" },
];

const TEAL       = "#1D7080";
const TEAL_DARK  = "#134C5F";
const GOLD       = "#C9A227";
const TEAL_LIGHT = "#E6F4F6";

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* ── Announcement bar ── */}
      {bannerOpen && (
        <div
          className="relative py-2.5 pl-4 pr-14 sm:pr-16 text-center text-white text-[11px] sm:text-xs font-semibold leading-snug"
          style={{ background: TEAL_DARK }}
        >
          <span className="inline-flex items-center gap-2 flex-wrap justify-center max-w-full">
            <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ background: GOLD }} />
            <span className="sm:hidden">ESA letters · Charged only after evaluation</span>
            <span className="hidden sm:inline">
              ESA letters valid under the Fair Housing Act · Only charged after your evaluation
            </span>
            <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse hidden sm:inline-block" style={{ background: GOLD }} />
          </span>
          <button
            type="button"
            onClick={() => setBannerOpen(false)}
            aria-label="Dismiss announcement"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-lg opacity-80 hover:opacity-100 transition-opacity touch-manipulation shrink-0"
          >
            <X className="size-4 text-white" />
          </button>
        </div>
      )}

      {/* ── Nav bar ── */}
      <header style={{
        background: "rgba(255,255,255,0.98)",
        borderBottom: scrolled ? "1px solid rgba(29,112,128,0.12)" : "1px solid rgba(29,112,128,0.07)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(29,112,128,0.1)" : "none",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* ── Logo ── */}
            <a href="/" className="flex items-center gap-2 shrink-0 group">
              <Image
                src="/logo.webp"
                alt="My ESA Therapist"
                width={44}
                height={44}
                className="rounded-full group-hover:scale-105 transition-transform duration-200"
                priority
              />
              <div className="leading-tight hidden sm:block">
                <div className="font-extrabold text-[15px] leading-none tracking-tight"
                  style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
                  My ESA Therapist
                </div>
                <div className="text-[9px] font-bold tracking-[0.12em] uppercase mt-0.5"
                  style={{ color: GOLD }}>
                  Emotional Support · Professional Care
                </div>
              </div>
            </a>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* ESA by State dropdown */}
              <div className="relative"
                onMouseEnter={() => setStateOpen(true)}
                onMouseLeave={() => setStateOpen(false)}>
                <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50"
                  style={{ color: TEAL_DARK }}>
                  <MapPin className="size-3.5 opacity-60" />
                  ESA by State
                  <ChevronDown className={`size-3.5 opacity-60 transition-transform duration-200 ${stateOpen ? "rotate-180" : ""}`} />
                </button>

                {stateOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl overflow-hidden py-1.5"
                    style={{
                      boxShadow: "0 12px 40px rgba(29,112,128,0.15)",
                      border: "1px solid rgba(29,112,128,0.1)",
                    }}>
                    {esaByState.map((s) => (
                      <a key={s} href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all"
                        style={{ color: "#374151" }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = TEAL;
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "";
                          e.currentTarget.style.color = "#374151";
                        }}>
                        <MapPin className="size-3 opacity-40" />
                        {s}
                      </a>
                    ))}
                    <Separator className="my-1 mx-3" style={{ background: "rgba(29,112,128,0.1)" }} />
                    <a href="#" className="flex items-center gap-1 px-4 py-2 text-sm font-bold"
                      style={{ color: TEAL }}>
                      View all 50 States →
                    </a>
                  </div>
                )}
              </div>

              {navLinks.map((l) => (
                <a key={l.label} href={l.href}
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50"
                  style={{ color: TEAL_DARK }}
                  onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                  onMouseLeave={e => (e.currentTarget.style.color = TEAL_DARK)}>
                  {l.label}
                </a>
              ))}
            </nav>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Phone — hidden on small */}
              <a href="tel:+18884124041"
                className="hidden md:flex items-center gap-1.5 text-sm font-medium transition-colors rounded-lg px-2 py-1.5 hover:bg-gray-50"
                style={{ color: "#5A7A80" }}>
                <div className="w-6 h-6 rounded-md flex items-center justify-center"
                  style={{ background: TEAL_LIGHT }}>
                  <Phone className="size-3.5" style={{ color: TEAL }} />
                </div>
                <span className="hidden xl:block">(888) 412-4041</span>
              </a>

              {/* CTA — hidden on xs */}
              <a href="#hero"
                className="btn-hover-gold-line hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, #E0B830 100%)`,
                  boxShadow: `0 2px 10px ${GOLD}45`,
                }}>
                Start ESA Evaluation
              </a>

              {/* Mobile hamburger */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    aria-label="Open navigation menu"
                    className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-gray-100"
                    style={{ color: TEAL_DARK }}
                  >
                    <Menu className="size-5" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  showCloseButton={false}
                  className="w-[280px] sm:w-[320px] p-0 border-l"
                  style={{ borderColor: "rgba(29,112,128,0.1)", background: "#fff" }}
                >
                  <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div
                      className="flex items-center justify-between p-5"
                      style={{ background: `linear-gradient(135deg, ${TEAL_DARK} 0%, ${TEAL} 100%)` }}
                    >
                      <div className="flex items-center gap-2.5">
                        <Image
                          src="/logo.webp"
                          alt="My ESA Therapist"
                          width={36}
                          height={36}
                          className="rounded-full ring-2 ring-white/30"
                        />
                        <div>
                          <div className="font-extrabold text-white text-sm">My ESA Therapist</div>
                          <div className="text-[9px] font-bold tracking-widest uppercase" style={{ color: GOLD }}>
                            Emotional Support
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        className="text-white/60 hover:text-white transition-colors p-1"
                        aria-label="Close menu"
                      >
                        <X className="size-4" />
                      </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-widest px-3 pt-1 pb-2" style={{ color: "#9CA3AF" }}>
                        Navigation
                      </p>
                      <a
                        href="#hero"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors hover:bg-gray-50"
                        style={{ color: TEAL_DARK }}
                      >
                        <MapPin className="size-4 shrink-0" style={{ color: GOLD }} />
                        ESA by State
                      </a>
                      {navLinks.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          onClick={() => setMobileOpen(false)}
                          className="px-3 py-2.5 text-sm font-medium rounded-xl transition-colors hover:bg-gray-50"
                          style={{ color: TEAL_DARK }}
                        >
                          {l.label}
                        </a>
                      ))}
                    </nav>

                    <div className="p-4 flex flex-col gap-2.5" style={{ borderTop: "1px solid rgba(29,112,128,0.08)" }}>
                      <a
                        href="tel:+18884124041"
                        className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-xl"
                        style={{ background: TEAL_LIGHT, color: TEAL_DARK }}
                      >
                        <Phone className="size-4 shrink-0" style={{ color: TEAL }} />
                        (888) 412-4041
                      </a>
                      <a
                        href="#hero"
                        onClick={() => setMobileOpen(false)}
                        className="btn-hover-gold-line w-full h-11 rounded-xl text-white text-sm font-bold transition-opacity hover:opacity-90 overflow-hidden flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)` }}
                      >
                        Start ESA Evaluation
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
