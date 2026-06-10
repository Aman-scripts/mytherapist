import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, MapPin, Video, HeartPulse, ArrowRight } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

const therapists = [
  {
    initials: "RS",
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    image: "/robert-staaf.webp",
    linkedin: "#",
    bio: "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: ["Anxiety", "Stress", "Emotional Well-being"],
    useGold: false,
  },
  {
    initials: "LG",
    name: "Leslie K. Gamble",
    title: "Licensed Independent Clinical Social Worker",
    image: "/leslie-gamble.webp",
    linkedin: "#",
    bio: "Licensed therapist with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care.",
    licensedIn: "15+ States",
    method: "Video or Phone",
    focus: ["Anxiety", "Depression", "PTSD", "ESA Evaluations"],
    useGold: true,
  },
];

function TherapistAvatar({ image, name, initials, useGold }: {
  image: string; name: string; initials: string; useGold: boolean;
}) {
  return (
    <div className="relative shrink-0" style={{ width: 76, height: 76 }}>
      {/* gold glow */}
      <div
        className="absolute inset-1 rounded-full blur-md opacity-50 pointer-events-none"
        style={{ background: GOLD }}
      />
      {/* rotating dashed ring */}
      <div
        className="absolute -inset-1.5 rounded-full ring-spin pointer-events-none"
        style={{ border: `2px dashed ${GOLD}` }}
        aria-hidden
      />
      <Avatar className="relative size-[76px] shadow-lg ring-2 ring-white/25">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback
          className="text-white text-lg font-bold"
          style={{
            background: useGold
              ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
              : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
          }}
        >
          {initials}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default function Therapists() {
  return (
    <section id="team" className="py-16 sm:py-24" style={{ background: "#F0F8F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Our Team</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            Licensed Mental Health Professionals
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "#5A7A80" }}>
            We connect individuals with licensed mental health professionals qualified to conduct
            evaluations and provide recommendations when clinically appropriate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" style={{ perspective: 1200 }}>
          {therapists.map((t) => (
            <div
              key={t.name}
              className="card-tilt-back bg-white rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(29,112,128,0.1)", boxShadow: "0 4px 20px rgba(29,112,128,0.08)" }}
            >
              {/* profile header band */}
              <div
                className="relative flex items-center gap-4 px-5 py-5"
                style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})` }}
              >
                <div
                  style={{
                    position: "absolute", inset: 0, opacity: 0.06,
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "18px 18px", pointerEvents: "none",
                  }}
                />

                <TherapistAvatar image={t.image} name={t.name} initials={t.initials} useGold={t.useGold} />

                <div className="relative flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-white truncate" style={{ fontFamily: "var(--font-outfit)" }}>
                    {t.name}
                  </h3>
                  <p className="text-sm font-semibold mt-0.5 leading-snug" style={{ color: GOLD }}>
                    {t.title}
                  </p>
                </div>

                <div className="relative flex flex-col items-end justify-between gap-4 shrink-0 self-stretch py-0.5">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-widest border"
                    style={{ borderColor: GOLD, color: GOLD, background: "rgba(0,0,0,0.15)" }}
                  >
                    <Check className="size-3" strokeWidth={3} />
                    VERIFIED
                  </span>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.name} on LinkedIn`}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                    style={{ background: GOLD }}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>

              <div className="px-6 py-6">
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#5A7A80" }}>{t.bio}</p>

                <div className="flex flex-col gap-2 mb-5">
                  {[
                    { Icon: MapPin, label: "Licensed In:", val: t.licensedIn },
                    { Icon: Video,  label: "Method:",      val: t.method },
                  ].map(({ Icon, label, val }) => (
                    <div key={label} className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#E6F4F6" }}>
                        <Icon className="size-3.5" style={{ color: TEAL }} />
                      </div>
                      <span className="font-bold text-xs" style={{ color: TEAL_DARK }}>{label}</span>
                      <span className="text-xs" style={{ color: "#5A7A80" }}>{val}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#E6F4F6" }}>
                      <HeartPulse className="size-3.5" style={{ color: TEAL }} />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {t.focus.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: t.useGold ? "#FDF3D0" : "#E6F4F6",
                            color: t.useGold ? "#8B6B0A" : TEAL_DARK,
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="btn-hover-gold-line flex-1 !h-12 min-h-12 text-white font-bold rounded-xl text-base border-0 gap-2 px-5"
                    style={{
                      background: t.useGold
                        ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
                        : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                    }}
                  >
                    Book Appointment <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 !h-12 min-h-12 rounded-xl text-base font-semibold px-5"
                    style={{ borderColor: "rgba(29,112,128,0.2)", color: TEAL_DARK }}
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
