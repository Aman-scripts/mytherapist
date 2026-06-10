import { CheckCircle2, XCircle } from "lucide-react";

const TEAL      = "#1D7080";
const TEAL_DARK = "#134C5F";
const GOLD      = "#C9A227";

type Row = { feature: string; us: boolean; others: boolean };

const rows: Row[] = [
  { feature: "Independent licensed therapists",          us: true,  others: false },
  { feature: "Evaluation before payment",               us: true,  others: false },
  { feature: "HIPAA-compliant platform",                us: true,  others: false },
  { feature: "Covers all 50 states",                    us: true,  others: false },
  { feature: "Fair Housing Act guidance",               us: true,  others: false },
  { feature: "No guaranteed approval claims",           us: true,  others: false },
  { feature: "Transparent pricing",                     us: true,  others: false },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-16 sm:py-24" style={{ background: "#F0F8F9" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>Comparison</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            How We Compare
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-sm leading-relaxed" style={{ color: "#5A7A80" }}>
            Not all ESA services are the same. Here&apos;s what makes My ESA Therapist different.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl" style={{ boxShadow: "0 20px 60px rgba(29,112,128,0.15)" }}>
          {/* header */}
          <div className="grid grid-cols-3 font-bold" style={{
            background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`,
          }}>
            <div className="py-6 px-8 text-white/70 uppercase text-sm tracking-widest">Feature</div>
            <div className="py-6 px-8 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-black"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, color: "#fff" }}>
                ★ My ESA Therapist
              </span>
            </div>
            <div className="py-6 px-8 text-center text-white/55 uppercase text-sm tracking-widest">Others</div>
          </div>

          {/* rows */}
          {rows.map(({ feature, us, others }, i) => (
            <div key={feature} className="grid grid-cols-3 items-center"
              style={{ background: i % 2 === 0 ? "#ffffff" : "#F5FAFA", borderBottom: "1px solid rgba(29,112,128,0.07)" }}>
              <div className="py-5 px-8 text-base font-medium" style={{ color: TEAL_DARK }}>{feature}</div>
              <div className="py-5 px-8 flex justify-center">
                {us
                  ? <CheckCircle2 className="size-7" style={{ color: TEAL }} fill="none" />
                  : <XCircle className="size-7 text-red-400" />
                }
              </div>
              <div className="py-5 px-8 flex justify-center">
                {others
                  ? <CheckCircle2 className="size-7" style={{ color: TEAL }} />
                  : <XCircle className="size-7 text-red-400" />
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
