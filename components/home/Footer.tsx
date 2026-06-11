import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Phone, Mail, Clock, MapPin, ChevronRight, ArrowRight, ShieldCheck,
  Users, AtSign, Camera, Play, Briefcase, type LucideIcon,
} from "lucide-react";

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
  { icon: Phone,  primary: "+1 (888) 412-4041",       secondary: "24/7 Online Support", href: "tel:+18884124041" },
  { icon: Mail,   primary: "info@myesatherapist.com",   secondary: "Email us anytime", href: "mailto:info@myesatherapist.com" },
  { icon: Clock,  primary: "Mon - Sat: 9AM - 6PM",      secondary: "Sunday: Closed" },
  { icon: MapPin, primary: "Serving All 50 US States",  secondary: "Nationwide Service" },
];

const socialLinks: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "Facebook",  href: "#", Icon: Users },
  { label: "X",         href: "#", Icon: AtSign },
  { label: "Instagram", href: "#", Icon: Camera },
  { label: "YouTube",   href: "#", Icon: Play },
  { label: "LinkedIn",  href: "#", Icon: Briefcase },
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
              className="btn-hover-gold-line h-12 px-10 text-white font-bold rounded-full text-sm border-0 gap-2">
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
                <ShieldCheck className="size-4 text-white" aria-hidden />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] font-black tracking-wide text-white">HIPAA</div>
                <div className="text-[9px] font-bold tracking-widest" style={{ color: GOLD }}>COMPLIANT</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-85"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, boxShadow: `0 4px 12px ${GOLD}33` }}>
                  <Icon className="size-4" aria-hidden />
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
              {contactItems.map(({ icon: Icon, primary, secondary, href }) => (
                <li key={primary} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`, border: `1px solid ${GOLD}33` }}>
                    <Icon className="size-4" style={{ color: GOLD }} aria-hidden />
                  </div>
                  <div>
                    {href ? (
                      <a href={href} className="text-sm font-bold text-white hover:underline">
                        {primary}
                      </a>
                    ) : (
                      <div className="text-sm font-bold text-white">{primary}</div>
                    )}
                    <div className="text-xs text-white/70 mt-0.5">{secondary}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10" style={{ background: "rgba(255,255,255,0.1)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <p className="text-sm text-white/70 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <a href="https://myesatherapist.com" className="font-semibold hover:underline" style={{ color: GOLD }}>
              myesatherapist.com
            </a>
            {" "}— All Rights Reserved
          </p>
          <div className="flex items-center gap-5 shrink-0">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Terms of Use</a>
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
