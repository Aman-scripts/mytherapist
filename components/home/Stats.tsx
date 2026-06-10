import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "80%", desc: "Pet owners say their pets bring them happiness and emotional support" },
  { value: "84%", desc: "Report a mostly positive impact on their mental health" },
  { value: "66%", desc: "Believe their pets help reduce stress and promote calm" },
];

const counters = [
  { value: "10,000+", label: "ESA Evaluations" },
  { value: "6+",      label: "Years Serving" },
  { value: "4.9★",   label: "Verified Reviews" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* counter row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mb-14">
          {counters.map((c, i) => (
            <div key={c.label} className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
                  {c.value}
                </div>
                <div className="text-sm text-[#5a7080] mt-1 font-medium">{c.label}</div>
              </div>
              {i < counters.length - 1 && (
                <Separator orientation="vertical" className="h-12 hidden sm:block bg-[rgba(19,76,95,0.15)]" />
              )}
            </div>
          ))}
        </div>

        {/* heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
            Your ESA Journey Starts Here
          </h2>
          <p className="text-[#5a7080] mt-2">See how emotional support animals transform lives</p>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ value, desc }) => (
            <Card key={value} className="border-2 border-[#efbf2f] bg-[#fdf7e7] rounded-3xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-extrabold text-[#134c5f] mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                  {value}
                </div>
                <p className="text-[#5a7080] text-sm leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
