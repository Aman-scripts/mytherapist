import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section className="bg-[#134c5f] py-20 text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* text side */}
          <div>
            <Badge className="bg-white/10 text-white border-white/20 mb-5 text-xs uppercase tracking-widest">
              Serving Since 2019
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
              My ESA Therapist has been serving the community since 2019.
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              Since 2019, My ESA Therapist has provided access to emotional support animal evaluations through
              a network of licensed mental health professionals. We recognize the meaningful role animals can
              play in emotional well-being and understand how their presence may offer comfort and support in daily life.
            </p>
            <p className="text-white/75 leading-relaxed mb-6">
              My ESA Therapist was created to help individuals connect with state-licensed mental health professionals
              who can conduct ESA evaluations in accordance with recognized clinical standards. All evaluations and
              documentation are designed to align with Fair Housing Act and HUD guidance, when applicable.
            </p>
            <Button className="bg-[#c9a227] hover:bg-[#efbf2f] text-white font-semibold rounded-xl px-8 py-3 h-auto">
              About My ESA Therapist
            </Button>
          </div>

          {/* stats side */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10,000+", label: "ESA Evaluations Completed" },
              { value: "6+",      label: "Years Serving Nationwide" },
              { value: "50",      label: "States Covered" },
              { value: "4.9 ★",  label: "Average Client Rating" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-6 text-center border border-white/10 backdrop-blur-sm">
                <div className="text-4xl font-extrabold text-[#efbf2f] mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                  {s.value}
                </div>
                <div className="text-sm text-white/75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        {/* As Seen On placeholder */}
        <div className="text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-6">As Seen On</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["Forbes", "CNN", "NBC", "Fox News", "Healthline"].map((m) => (
              <span key={m} className="text-white font-bold text-lg tracking-tight">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
