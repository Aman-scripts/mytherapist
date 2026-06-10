import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const company = [
  { label: "About Us",          href: "#about" },
  { label: "Contact Us",        href: "#contact" },
  { label: "Meet Our Therapists", href: "#team" },
  { label: "HIPAA Compliance",  href: "#" },
  { label: "Video Testimonials", href: "#reviews" },
  { label: "Customer Reviews",  href: "#reviews" },
];

const quickLinks = [
  { label: "ESA Letter Online",     href: "#" },
  { label: "ESA Letter For Housing", href: "#" },
  { label: "ESA Letter Renewal",    href: "#" },
  { label: "ESA Laws By State",     href: "#" },
  { label: "ESA Letter Cost",       href: "#" },
  { label: "ESA Resources",         href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f3d50] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#c9a227] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-white text-lg leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                My ESA<br />
                <span className="text-[#efbf2f]">Therapist</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              A 100% legal platform providing emotional support animal evaluations to those who suffer
              from any mental or emotional disability — trusted, professional &amp; confidential.
            </p>
            <Badge className="bg-white/10 text-white/80 border-white/20 text-xs">HIPAA Compliant</Badge>
          </div>

          {/* company links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2">
              {company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 text-sm hover:text-[#efbf2f] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 text-sm hover:text-[#efbf2f] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Get In Touch</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <Phone className="size-4 text-[#c9a227] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+18884124041" className="hover:text-[#efbf2f] transition-colors">+1 (888) 412-4041</a>
                  <div className="text-xs text-white/40">24/7 Online Support</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <Mail className="size-4 text-[#c9a227] mt-0.5 shrink-0" />
                <div>
                  <a href="mailto:info@myesatherapist.com" className="hover:text-[#efbf2f] transition-colors">
                    info@myesatherapist.com
                  </a>
                  <div className="text-xs text-white/40">Email us anytime</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <Clock className="size-4 text-[#c9a227] mt-0.5 shrink-0" />
                <div>
                  Mon – Sat: 9AM – 6PM
                  <div className="text-xs text-white/40">Sunday: Closed</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="size-4 text-[#c9a227] mt-0.5 shrink-0" />
                <div>
                  Serving All 50 US States
                  <div className="text-xs text-white/40">Nationwide Service</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 <strong className="text-white/60">myesatherapist.com</strong> — All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#efbf2f] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#efbf2f] transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-[#efbf2f] transition-colors">Terms of Use</a>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/30 leading-relaxed">
          <strong className="text-white/40">Disclaimer:</strong> ESA letters are valid for housing purposes under
          the Fair Housing Act. They do not grant public access rights. Individual results may vary based on
          qualification criteria.
          <br />
          <strong className="text-white/40">Payment Disclaimer:</strong> We authorize your payment first,
          but only charge it after your evaluation is completed.
        </div>
      </div>
    </footer>
  );
}
