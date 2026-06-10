import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MessageCircle, FileCheck } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    step: "01",
    title: "Set Up Your Appointment",
    desc: "Create your account and choose a time that works for you to connect with a licensed mental health professional.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Speak With Professionals",
    desc: "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an emotional support animal is appropriate.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Clinical Determination",
    desc: "Following the professional evaluation, if deemed appropriate by the licensed professional, emotional support animal documentation is sent directly to your email.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f7f9f8] py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 mb-4 text-xs uppercase tracking-widest">
            Simple Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
            How Online ESA Evaluation Works?
          </h2>
          <p className="text-[#5a7080] mt-3 max-w-xl mx-auto">
            A simple 3-step process to complete your emotional support animal letter evaluation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <Card key={step} className="relative border-2 border-[#efbf2f] bg-[#fdf7e7] rounded-3xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-visible">
              {/* step badge */}
              <div className="absolute -top-4 left-8 w-9 h-9 rounded-full bg-[#134c5f] flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">{step}</span>
              </div>
              <CardContent className="p-8 pt-10 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#134c5f]/10 flex items-center justify-center">
                  <Icon className="size-7 text-[#134c5f]" />
                </div>
                <h3 className="text-xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
                  {title}
                </h3>
                <p className="text-[#5a7080] text-sm leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-2">
          <Button className="bg-[#134c5f] hover:bg-[#1d6e72] text-white px-10 py-3 h-auto rounded-xl text-base font-semibold shadow-md transition-transform hover:scale-105">
            Start Your ESA Evaluation
          </Button>
          <p className="text-xs text-[#5a7080] italic">
            We authorize your payment first, but only charge it after your evaluation is completed.
          </p>
        </div>
      </div>
    </section>
  );
}
