import Image from "next/image";
import { Users, FileCheck, Award } from "lucide-react";
import AsSeenOn from "@/components/home/AsSeenOn";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

const stats = [
  {
    value: "80%",
    desc: "Pet owners say their pets bring them happiness and emotional support",
    accent: TEAL,
    gold: false,
    image: "/images/stats/happiness.jpg",
    imageAlt: "Person hugging their dogs in a sunny park",
  },
  {
    value: "84%",
    desc: "Report a mostly positive impact on their mental health",
    accent: GOLD,
    gold: true,
    image: "/images/stats/wellbeing.jpg",
    imageAlt: "Veterinary professionals caring for a pet during a wellness visit",
  },
  {
    value: "66%",
    desc: "Believe their pets help reduce stress and promote calm",
    accent: TEAL,
    gold: false,
    image: "/images/stats/calm.jpg",
    imageAlt: "Calm golden retriever puppies relaxing outdoors",
  },
];

export default function Stats() {
  return (
    <section className="py-10 sm:py-14 relative overflow-hidden" style={{ background: "#F0F8F9" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
        backgroundSize: "48px 48px", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: -80, right: -60, width: 320, height: 320, borderRadius: "50%",
        background: `radial-gradient(circle, ${GOLD}15 0%, transparent 70%)`, pointerEvents: "none",
      }} />

      <AsSeenOn />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Percentage stats */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[9px] font-bold tracking-widest uppercase mb-1.5" style={{ color: GOLD }}>By The Numbers</p>
          <h2 className="text-xl sm:text-2xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            Your ESA Journey Starts Here
          </h2>
          <p className="mt-1.5 max-w-lg mx-auto text-xs leading-relaxed" style={{ color: "#5A7A80" }}>
            See how emotional support animals transform lives for thousands of people nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {stats.map(({ value, desc, accent, gold, image, imageAlt }, i) => (
            <div
              key={value}
              className="card-lift group relative overflow-hidden rounded-xl p-4 sm:p-5 min-h-[168px] sm:min-h-[176px]"
              style={{
                border: `1px solid ${gold ? `${GOLD}35` : "rgba(29,112,128,0.1)"}`,
                boxShadow: "0 3px 12px rgba(29,112,128,0.04)",
              }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: gold
                    ? "linear-gradient(145deg, rgba(253,243,208,0.96) 0%, rgba(253,243,208,0.88) 32%, rgba(253,243,208,0.55) 62%, rgba(253,243,208,0.18) 100%)"
                    : "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.9) 32%, rgba(255,255,255,0.58) 62%, rgba(240,248,249,0.15) 100%)",
                }}
              />

              <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]"
                style={{ background: `linear-gradient(180deg, ${accent}, ${gold ? "#E0B830" : TEAL})` }} />

              <div className="relative z-10">
                <div className="w-8 h-8 rounded-md flex items-center justify-center mb-2 shadow-sm"
                  style={{
                    background: gold
                      ? `linear-gradient(135deg, ${GOLD}, #E0B830)`
                      : `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
                  }}>
                  {i === 0 && <Users className="size-4 text-white" />}
                  {i === 1 && <Award className="size-4 text-white" />}
                  {i === 2 && <FileCheck className="size-4 text-white" />}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold mb-1.5" style={{
                  background: `linear-gradient(135deg, ${accent}, ${gold ? "#E0B830" : TEAL_DARK})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  fontFamily: "var(--font-outfit)",
                }}>
                  {value}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#5A7A80" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
