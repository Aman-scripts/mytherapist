import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is My ESA Therapist Legitimate?",
    a: "Yes. My ESA Therapist connects individuals with U.S.-licensed mental health professionals who are licensed in the client's state. All evaluations follow recognized clinical standards and applicable federal housing guidelines.",
  },
  {
    q: "How Does My ESA Therapist Work?",
    a: "My ESA Therapist is a telehealth platform that facilitates emotional support animal (ESA) evaluations with licensed mental health professionals. If, after a clinical evaluation, a professional determines that an emotional support animal may be appropriate, they may issue documentation that supports housing accommodation requests under applicable federal housing laws.",
  },
  {
    q: "Does My ESA Therapist Comply With HUD and Fair Housing Act Guidelines?",
    a: "Yes. Evaluations and documentation are designed to align with current HUD guidance and Fair Housing Act (FHA) requirements, as applicable to each individual's circumstances.",
  },
  {
    q: "Does My ESA Therapist Offer Support if My Landlord Asks For Verification?",
    a: "Yes. With the client's written authorization, licensed professionals or support staff can help clarify evaluation details or documentation when requested by a housing provider.",
  },
  {
    q: "Is My Information Safe With My ESA Therapist?",
    a: "Yes. All consultations and records are handled securely and in accordance with HIPAA privacy and data protection standards.",
  },
  {
    q: "Is The Consultation Done By Video or Phone?",
    a: "Both video and phone consultations are available, depending on provider availability and client preference.",
  },
  {
    q: "What Payment Methods Does My ESA Therapist Accept?",
    a: "Major credit cards are accepted. We authorize your payment first, but only charge it after your evaluation is completed.",
  },
  {
    q: "What Happens If I'm Not Approved After My Evaluation?",
    a: "If a licensed professional determines that an emotional support animal may not be clinically appropriate, no documentation is issued. All outcomes are based solely on professional clinical judgment.",
  },
  {
    q: "Can I Change or Reschedule My Consultation?",
    a: "Yes. Consultations may be changed or rescheduled according to provider availability.",
  },
  {
    q: "Does My ESA Therapist Provide Letters For Dorms or University Housing?",
    a: "When applicable under the Fair Housing Act or related housing regulations, ESA documentation issued following a clinical evaluation may be used to request housing accommodations in university or dorm settings.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 mb-4 text-xs uppercase tracking-widest">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-[#5a7080] mt-2">
            Get answers to common questions about ESA letters and our service.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-5 bg-[#f7f9f8] data-[state=open]:bg-white data-[state=open]:border-[#134c5f]/30 data-[state=open]:shadow-sm transition-all"
            >
              <AccordionTrigger className="text-[#134c5f] font-semibold text-left py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#5a7080] text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* final CTA */}
        <div className="mt-16 text-center rounded-3xl bg-gradient-to-br from-[#134c5f] to-[#1d6e72] p-10 text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
            Ready to Start Your ESA Evaluation?
          </h2>
          <p className="text-white/75 mb-6 max-w-md mx-auto">
            If you believe an Emotional Support Animal may be appropriate for your situation,
            you can begin a professional evaluation today.
          </p>
          <Button className="bg-[#c9a227] hover:bg-[#efbf2f] text-white font-bold px-10 py-3 h-auto rounded-xl text-base shadow-md transition-transform hover:scale-105">
            Start Your ESA Evaluation
          </Button>
          <p className="text-white/40 text-xs mt-4 italic">
            ESA eligibility is determined by a licensed mental health professional following a clinical assessment.
            Approval is not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
