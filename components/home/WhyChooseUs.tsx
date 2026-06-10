import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Stethoscope, FileText, Globe, Lightbulb } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed Professionals",
    desc: "Evaluations are conducted by independent U.S.-licensed mental health professionals authorized to assess ESA eligibility.",
  },
  {
    icon: Lock,
    title: "Secure Telehealth Platform",
    desc: "HIPAA-compliant systems ensure your information remains confidential and protected.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Integrity First",
    desc: "We do not guarantee ESA approval. Recommendations are based solely on clinical judgment.",
  },
  {
    icon: FileText,
    title: "Legitimate ESA Documentation",
    desc: "When clinically appropriate, ESA letters are issued in compliance with applicable federal and state housing guidelines.",
  },
  {
    icon: Globe,
    title: "Nationwide Access",
    desc: "Telehealth evaluations available for individuals across the United States, subject to clinician availability.",
  },
  {
    icon: Lightbulb,
    title: "Transparent Process",
    desc: "Clear steps, clear expectations, no misleading claims.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7f9f8] py-20" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 mb-4 text-xs uppercase tracking-widest">
            Why Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
            Why Choose My ESA Therapist?
          </h2>
          <p className="text-[#5a7080] mt-3 max-w-2xl mx-auto">
            We simplify online emotional support animal evaluations while maintaining efficiency and legal compliance.
            Here&apos;s what makes us different from other providers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group">
              <CardContent className="p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#134c5f]/10 flex items-center justify-center group-hover:bg-[#134c5f] transition-colors">
                  <Icon className="size-6 text-[#134c5f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#134c5f] text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                  {title}
                </h3>
                <p className="text-[#5a7080] text-sm leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#134c5f] hover:bg-[#1d6e72] text-white px-10 py-3 h-auto rounded-xl text-base font-semibold shadow-md transition-transform hover:scale-105">
            Start Your ESA Evaluation
          </Button>
        </div>
      </div>
    </section>
  );
}
