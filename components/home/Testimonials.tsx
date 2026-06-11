import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TEAL_DARK = "#134C5F";
const TEAL_DEEP = "#0D3341";
const TEAL      = "#1D7080";
const GOLD      = "#C9A227";

const reviews = [
  { initials: "SM", name: "Sarah M.",  state: "California", rating: 5, featured: true,
    text: "The process was so straightforward. I had my evaluation within 48 hours and the therapist was incredibly professional and understanding." },
  { initials: "JT", name: "James T.",  state: "Texas",      rating: 5, featured: false,
    text: "My landlord was about to reject my ESA. With the letter from My ESA Therapist I was able to stay in my apartment with my dog. Highly recommend." },
  { initials: "AL", name: "Amanda L.", state: "New York",   rating: 5, featured: false,
    text: "Legitimate, fast, and compassionate. The therapist really listened and I felt respected throughout the whole process." },
  { initials: "RK", name: "Robert K.", state: "Colorado",   rating: 5, featured: true,
    text: "I was skeptical at first but this service is truly legitimate. Everything was HIPAA-compliant and my documentation was accepted immediately." },
  { initials: "MP", name: "Maria P.",  state: "Florida",    rating: 5, featured: false,
    text: "Professional staff, easy booking, and a smooth experience overall. My ESA letter arrived right after my evaluation was done." },
  { initials: "DW", name: "David W.",  state: "Washington", rating: 5, featured: false,
    text: "Best decision I made for my mental health. The therapist was warm and knowledgeable. The whole process took less than a day." },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-16 sm:py-24 overflow-hidden" style={{
      background: `linear-gradient(135deg, ${TEAL_DEEP} 0%, ${TEAL_DARK} 50%, ${TEAL} 100%)`,
    }}>
      {/* gold glow — mirrors logo gold circle */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${GOLD}25 0%, transparent 70%)`,
        transform: "translate(30%, -30%)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: 350, height: 350, borderRadius: "50%",
        background: `radial-gradient(circle, ${GOLD}15 0%, transparent 70%)`,
        transform: "translate(-30%, 30%)", pointerEvents: "none",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#E0B830" }}>Client Stories</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
            What Our Clients Say
          </h2>
          <p className="text-white/75 mt-3 max-w-md mx-auto text-sm">
            Read stories from people whose lives were improved through our ESA evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="card-lift relative rounded-2xl p-6 flex flex-col gap-4" style={{
              background: r.featured ? `${GOLD}18` : "rgba(255,255,255,0.07)",
              border: r.featured ? `1px solid ${GOLD}55` : "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}>
              <Quote className="size-8 absolute top-4 right-5" style={{ color: `${GOLD}55` }} fill="currentColor" aria-hidden />
              <div className="flex items-center gap-1" role="img" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 shrink-0" style={{ fill: GOLD, color: GOLD }} aria-hidden />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <Avatar className="size-9">
                  <AvatarFallback className="text-white text-xs font-bold" style={{
                    background: r.featured ? `linear-gradient(135deg, ${GOLD}, #E0B830)` : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                  }}>{r.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white text-sm font-semibold">{r.name}</div>
                  <div className="text-white/70 text-xs">{r.state}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-1.5" role="img" aria-label="4.9 out of 5 stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="size-6 shrink-0" style={{ fill: GOLD, color: GOLD }} aria-hidden />
            ))}
          </div>
          <span className="text-white text-lg font-bold">4.9 out of 5</span>
          <span className="text-white/70 text-sm">based on 1,200+ verified reviews</span>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none"
        style={{ lineHeight: 0, marginBottom: -2 }}
      >
        <svg
          viewBox="0 0 1440 52"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: 52, display: "block" }}
          aria-hidden
        >
          <path d="M0,30 C480,60 960,0 1440,30 L1440,52 L0,52 Z" fill="#F0F8F9" />
        </svg>
      </div>
    </section>
  );
}
