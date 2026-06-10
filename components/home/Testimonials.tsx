import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    initials: "SM",
    name: "Sarah M.",
    state: "California",
    rating: 5,
    text: "The process was so straightforward. I had my evaluation within 48 hours and the therapist was incredibly professional and understanding.",
  },
  {
    initials: "JT",
    name: "James T.",
    state: "Texas",
    rating: 5,
    text: "My landlord was about to reject my ESA. With the letter from My ESA Therapist I was able to stay in my apartment with my dog. Highly recommend.",
  },
  {
    initials: "AL",
    name: "Amanda L.",
    state: "New York",
    rating: 5,
    text: "Legitimate, fast, and compassionate. The therapist really listened to my situation and I felt respected throughout the whole process.",
  },
  {
    initials: "RK",
    name: "Robert K.",
    state: "Colorado",
    rating: 5,
    text: "I was skeptical at first but this service is truly legitimate. Everything was HIPAA-compliant and the documentation was accepted immediately.",
  },
  {
    initials: "MP",
    name: "Maria P.",
    state: "Florida",
    rating: 5,
    text: "Five stars! Professional staff, easy booking, and a smooth experience overall. My ESA letter arrived right after my evaluation.",
  },
  {
    initials: "DW",
    name: "David W.",
    state: "Washington",
    rating: 5,
    text: "Best decision I made for my mental health. The therapist was warm and knowledgeable. The whole process took less than a day.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 mb-4 text-xs uppercase tracking-widest">
            Client Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
            See What Our Clients Say
          </h2>
          <p className="text-[#5a7080] mt-2">Here&apos;s what our clients say about their experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <Card key={r.name} className="rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col gap-4">
                {/* stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>
                <p className="text-sm text-[#5a7080] leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-[#134c5f] text-white text-xs font-bold">
                      {r.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold text-[#134c5f]">{r.name}</div>
                    <div className="text-xs text-[#5a7080]">{r.state}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
