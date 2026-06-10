import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, MapPin, Video, HeartPulse, ArrowRight, Briefcase } from "lucide-react";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";
const TEXT_BODY = "#2A4D56";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {therapists.map((t) => (
            <div
              key={t.name}
              className="card-lift bg-white rounded-3xl overflow-hidden"
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
                    <Briefcase className="size-4" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="px-6 py-6">
                <p
                  className="text-[15px] sm:text-base font-medium leading-relaxed mb-6"
                  style={{ color: TEXT_BODY }}
                >
                  {t.bio}
                </p>

                <div
                  className="rounded-2xl p-4 sm:p-5 mb-6 flex flex-col gap-4"
                  style={{
                    background: "#F8FCFD",
                    border: "1px solid rgba(29,112,128,0.12)",
                  }}
                >
                  {[
                    { Icon: MapPin, label: "Licensed In", val: t.licensedIn },
                    { Icon: Video,  label: "Method",      val: t.method },
                  ].map(({ Icon, label, val }) => (
                    <div key={label} className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                        style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})` }}
                      >
                        <Icon className="size-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-wider mb-0.5" style={{ color: TEAL }}>
                          {label}
                        </p>
                        <p className="text-sm sm:text-[15px] font-bold truncate" style={{ color: TEAL_DARK }}>
                          {val}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})` }}
                    >
                      <HeartPulse className="size-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: TEAL }}>
                        Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {t.focus.map((f) => (
                          <span
                            key={f}
                            className="text-xs font-bold px-3 py-1.5 rounded-full"
                            style={{
                              background: t.useGold ? "#FDF3D0" : "#E6F4F6",
                              color: t.useGold ? "#6B5208" : TEAL_DARK,
                              border: `1px solid ${t.useGold ? `${GOLD}55` : "rgba(29,112,128,0.2)"}`,
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="btn-hover-gold-line flex-1 !h-12 min-h-12 text-white font-bold rounded-xl text-sm sm:text-base border-0 gap-2 px-5 shadow-md"
                    style={{
                      background: t.useGold
                        ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
                        : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                      boxShadow: t.useGold
                        ? `0 6px 20px ${GOLD}44`
                        : "0 6px 20px rgba(29,112,128,0.25)",
                    }}
                  >
                    Book Appointment <ArrowRight className="size-4 shrink-0" />
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 !h-12 min-h-12 rounded-xl text-sm sm:text-base font-bold px-5 border-2 hover:bg-[#E6F4F6]"
                    style={{ borderColor: TEAL, color: TEAL_DARK }}
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
