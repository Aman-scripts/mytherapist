import { CheckCircle2, XCircle, Star } from "lucide-react";

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

function StatusCell({ value, label }: { value: boolean; label: string }) {
  return (
    <td className="py-4 px-2 sm:py-5 sm:px-3 lg:px-6 text-center align-middle">
      <span className="inline-flex items-center justify-center gap-1">
        {value ? (
          <CheckCircle2 className="size-6 sm:size-7 shrink-0" style={{ color: TEAL }} fill="none" aria-hidden />
        ) : (
          <XCircle className="size-6 sm:size-7 shrink-0 text-red-500" aria-hidden />
        )}
        <span className="sr-only">{value ? "Yes" : "No"} for {label}</span>
      </span>
    </td>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-16 sm:py-24" style={{ background: "#F0F8F9" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8A6F12" }}>Comparison</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            How We Compare
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-sm leading-relaxed" style={{ color: "#4A656B" }}>
            Not all ESA services are the same. Here&apos;s what makes My ESA Therapist different.
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl" style={{ boxShadow: "0 20px 60px rgba(29,112,128,0.15)" }}>
          <table className="w-full min-w-0 border-collapse">
            <caption className="sr-only">
              Feature comparison between My ESA Therapist and other ESA services
            </caption>
            <thead>
              <tr style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})` }}>
                <th
                  scope="col"
                  className="py-4 px-3 sm:py-5 sm:px-5 lg:py-6 lg:px-8 text-left text-white/90 uppercase text-[10px] sm:text-xs lg:text-sm tracking-widest font-bold"
                >
                  Feature
                </th>
                <th
                  scope="col"
                  className="py-4 px-2 sm:py-5 sm:px-3 lg:py-6 lg:px-6 text-center font-bold"
                >
                  <span
                    className="inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 lg:px-5 text-[10px] sm:text-xs lg:text-sm font-black max-w-full text-center leading-tight"
                    style={{ background: `linear-gradient(135deg, ${GOLD}, #E0B830)`, color: "#fff" }}
                  >
                    <Star className="size-3 sm:size-3.5 shrink-0 fill-current" aria-hidden />
                    <span className="lg:hidden">My ESA</span>
                    <span className="hidden lg:inline whitespace-nowrap">My ESA Therapist</span>
                  </span>
                </th>
                <th
                  scope="col"
                  className="py-4 px-2 sm:py-5 sm:px-4 lg:py-6 lg:px-8 text-center text-white/80 uppercase text-[10px] sm:text-xs lg:text-sm tracking-widest font-bold"
                >
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, us, others }, i) => (
                <tr
                  key={feature}
                  style={{ background: i % 2 === 0 ? "#ffffff" : "#F5FAFA", borderBottom: "1px solid rgba(29,112,128,0.07)" }}
                >
                  <th
                    scope="row"
                    className="py-4 px-3 sm:py-5 sm:px-5 lg:py-5 lg:px-8 text-left text-xs sm:text-sm lg:text-base font-medium leading-snug"
                    style={{ color: TEAL_DARK }}
                  >
                    {feature}
                  </th>
                  <StatusCell value={us} label="My ESA Therapist" />
                  <StatusCell value={others} label="Others" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
