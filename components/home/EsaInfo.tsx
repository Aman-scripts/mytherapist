import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Activity, TrendingUp, Calendar } from "lucide-react";

const indicators = [
  "Feeling persistent anxiety, depression, or stress that impacts daily life",
  "Difficulty coping with emotional challenges on your own",
  "Experiencing frequent loneliness or isolation",
  "Noticing that being around animals naturally brings you comfort or a sense of calm",
  "Struggling to maintain emotional balance during stressful situations",
];

const benefits = [
  {
    icon: Activity,
    title: "Improved Emotional Stability",
    desc: "Regular interaction with an ESA can help maintain a balanced mood and support overall mental health.",
  },
  {
    icon: TrendingUp,
    title: "Support in Daily Challenges",
    desc: "An ESA's presence can help you feel calmer and more grounded during stressful or overwhelming situations.",
  },
  {
    icon: Calendar,
    title: "Encourages Routine & Structure",
    desc: "Caring for an ESA promotes daily routines that support focus, responsibility, and overall well-being.",
  },
];

export default function EsaInfo() {
  return (
    <>
      {/* What is an ESA */}
      <section className="bg-[#f7f9f8] py-20" id="about-esa">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 mb-4 text-xs uppercase tracking-widest">
                About ESAs
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#134c5f] mb-5" style={{ fontFamily: "var(--font-outfit)" }}>
                What is an Emotional Support Animal?
              </h2>
              <p className="text-[#5a7080] leading-relaxed mb-4">
                An Emotional Support Animal (ESA) is a companion animal that provides comfort and emotional stability
                to individuals with mental or emotional health conditions. ESAs are not trained to perform specific
                tasks but offer therapeutic benefits simply through their presence.
              </p>
              <p className="text-[#5a7080] leading-relaxed mb-6">
                ESAs are recognized under certain housing laws, allowing individuals to live with them in places
                that might otherwise have pet restrictions. To qualify, a licensed mental health professional must
                provide a formal recommendation explaining how the animal supports your emotional health.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button className="bg-[#134c5f] hover:bg-[#1d6e72] text-white rounded-xl">
                  Learn About ESAs
                </Button>
                <Button variant="outline" className="border-[#134c5f] text-[#134c5f] hover:bg-[#134c5f]/5 rounded-xl">
                  Start Your ESA Evaluation
                </Button>
              </div>
            </div>
            {/* decorative card */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#134c5f] to-[#1d6e72] p-8 text-white shadow-xl">
                <div className="text-5xl mb-4">🐾</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                  Do You Need an ESA?
                </h3>
                <p className="text-white/75 text-sm mb-6">
                  You might consider an ESA if you face challenges that affect your emotional or mental well-being:
                </p>
                <ul className="flex flex-col gap-3">
                  {indicators.map((ind) => (
                    <li key={ind} className="flex items-start gap-2 text-sm text-white/85">
                      <CheckCircle2 className="size-4 text-[#efbf2f] shrink-0 mt-0.5" />
                      {ind}
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-xs mt-6 italic">
                  An ESA should only be recommended following a proper evaluation by a licensed mental health professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 mb-4 text-xs uppercase tracking-widest">
              Benefits
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
              Benefits of Having an Emotional Support Animal
            </h2>
            <p className="text-[#5a7080] mt-3 max-w-xl mx-auto">
              Having an ESA can provide comfort and support that positively impacts your daily life and emotional well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-2 border-[#efbf2f] bg-[#fdf7e7] rounded-3xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col gap-4 text-center items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#134c5f] flex items-center justify-center shadow">
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
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
    </>
  );
}
