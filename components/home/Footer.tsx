import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin, ChevronRight, ArrowRight } from "lucide-react";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const TEAL_DEEP = "#0D3341";
const GOLD      = "#C9A227";
const PAGE_BG   = "#F0F8F9";

const companyLinks = [
  { label: "About Us",             href: "#about" },
  { label: "Contact Us",           href: "#contact" },
  { label: "Meet Our Therapists",  href: "#team" },
  { label: "HIPAA Compliance",     href: "#" },
  { label: "Video Testimonials",   href: "#video-testimonials" },
  { label: "Customer Reviews",     href: "#reviews" },
];

const quickLinks = [
  { label: "ESA Letter Online",      href: "#" },
  { label: "ESA Letter For Housing", href: "#" },
  { label: "ESA Letter Renewal",     href: "#" },
  { label: "ESA Laws By State",      href: "#" },
  { label: "ESA Letter Cost",        href: "#" },
  { label: "ESA Resources",          href: "#" },
];

const contactItems = [
  { icon: Phone,  primary: "+1 (888) 412-4041",       secondary: "24/7 Online Support" },
  { icon: Mail,   primary: "info@myesatherapist.com",   secondary: "Email us anytime" },
  { icon: Clock,  primary: "Mon - Sat: 9AM - 6PM",      secondary: "Sunday: Closed" },
  { icon: MapPin, primary: "Serving All 50 US States",  secondary: "Nationwide Service" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function FooterLinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="group flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors">
            <ChevronRight className="size-3.5 shrink-0" style={{ color: GOLD }} />
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: GOLD, fontFamily: "var(--font-outfit)" }}>
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${TEAL_DEEP} 0%, ${TEAL_DARK} 55%, ${TEAL} 100%)` }}
    >
      {/* Wave transition from page background */}
      <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: 64 }} aria-hidden>
          <path d="M0,0 L1440,0 L1440,40 C1080,64 360,8 0,40 Z" fill={PAGE_BG} />
        </svg>
      </div>

      {/* Gold glow — echoes About & FAQ sections */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: 520, height: 520, borderRadius: "50%",
        background: `radial-gradient(circle, ${GOLD}22 0%, transparent 65%)`,
        transform: "translate(25%, -35%)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${TEAL}30 0%, transparent 65%)`,
        transform: "translate(-30%, 30%)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "26px 26px", pointerEvents: "none",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
        {/* Footer CTA */}
        <div className="rounded-3xl px-6 py-10 sm:px-12 sm:py-14 text-center mb-14 sm:mb-16"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          }}>
          <div className="mx-auto mb-6 w-fit rounded-full p-1"
            style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, boxShadow: `0 8px 24px ${GOLD}44` }}>
            <Image
              src="/logo.webp"
              alt="My ESA Therapist"
              width={88}
              height={88}
              className="rounded-full"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
            My ESA{" "}
            <span style={{ color: GOLD }}>Therapist</span>
          </h2>
          <p className="text-sm sm:text-base text-white/65 leading-relaxed max-w-2xl mx-auto mb-8">
            A 100% legal platform providing emotional support animal evaluations to those who suffer from
            any mental or emotional disability — trusted, professional &amp; confidential.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              className="btn-hover-gold-line h-12 px-10 text-white font-bold rounded-full text-sm border-0 gap-2 hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${GOLD}, #E0B830)`,
                boxShadow: `0 10px 30px ${GOLD}55`,
              }}>
              Apply Your ESA Letter <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-12 px-10 font-semibold rounded-full text-sm"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.08)",
              }}
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About Us */}
          <div>
            <ColumnHeading>About Us</ColumnHeading>
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              We connect you with licensed therapists across all 50 US states to obtain legitimate ESA letters
              quickly, securely, and affordably.
            </p>

            <div className="inline-flex items-center gap-2.5 rounded-xl px-3 py-2 mb-6"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})` }}>
                <svg viewBox="0 0 24 24" className="size-4 text-white" aria-hidden>
                  <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14.59l-3.3-3.29 1.41-1.42L11 12.17l4.89-4.88 1.41 1.42L11 15.59z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[10px] font-black tracking-wide text-white">HIPAA</div>
                <div className="text-[9px] font-bold tracking-widest" style={{ color: GOLD }}>COMPLIANT</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-85"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, boxShadow: `0 4px 12px ${GOLD}33` }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <ColumnHeading>Company</ColumnHeading>
            <FooterLinkList links={companyLinks} />
          </div>

          {/* Quick Links */}
          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
            <FooterLinkList links={quickLinks} />
          </div>

          {/* Get In Touch */}
          <div>
            <ColumnHeading>Get In Touch</ColumnHeading>
            <ul className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, primary, secondary }) => (
                <li key={primary} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`, border: `1px solid ${GOLD}33` }}>
                    <Icon className="size-4" style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{primary}</div>
                    <div className="text-xs text-white/45 mt-0.5">{secondary}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10" style={{ background: "rgba(255,255,255,0.1)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <p className="text-sm text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <a href="https://myesatherapist.com" className="font-semibold hover:underline" style={{ color: GOLD }}>
              myesatherapist.com
            </a>
            {" "}— All Rights Reserved
          </p>
          <div className="flex items-center gap-5 shrink-0">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>

        <div className="rounded-2xl pl-4 py-4 space-y-3"
          style={{
            background: `linear-gradient(135deg, ${GOLD}22, ${GOLD}08)`,
            border: `1px solid ${GOLD}44`,
            borderLeft: `3px solid ${GOLD}`,
          }}>
          <p className="text-sm text-white/65 leading-relaxed">
            <span className="font-bold" style={{ color: GOLD }}>Disclaimer:</span>{" "}
            ESA letters are valid for housing purposes under the Fair Housing Act. They do not grant public access
            rights. Individual results may vary based on qualification criteria.
          </p>
          <p className="text-sm text-white/65 leading-relaxed">
            <span className="font-bold" style={{ color: GOLD }}>Payment Disclaimer:</span>{" "}
            We authorize your payment first, but only charge it after your evaluation is completed.
          </p>
        </div>
      </div>
    </footer>
  );
}
