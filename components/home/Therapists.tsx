import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, MapPin, Video, Heart } from "lucide-react";

const therapists = [
  {
    initials: "RS",
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    bio: "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety, Stress, Emotional well-being",
    color: "#134c5f",
  },
  {
    initials: "LG",
    name: "Leslie K. Gamble",
    title: "Licensed Independent Clinical Social Worker",
    bio: "Licensed therapist with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care.",
    licensedIn: "15+ States",
    method: "Video or Phone",
    focus: "Anxiety, Depression, PTSD, ESA Evaluations",
    color: "#1d6e72",
  },
];

export default function Therapists() {
  return (
    <section className="bg-white py-20" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 mb-4 text-xs uppercase tracking-widest">
            Our Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
            Our Licensed Mental Health Professionals
          </h2>
          <p className="text-[#5a7080] mt-3 max-w-xl mx-auto">
            We connect individuals with licensed mental health professionals who are qualified to conduct
            evaluations and provide recommendations when clinically appropriate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {therapists.map((t) => (
            <Card key={t.name} className="rounded-3xl border border-border shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              {/* top coloured band */}
              <div className="h-2" style={{ background: t.color }} />
              <CardContent className="p-8 flex flex-col gap-5">
                {/* header row */}
                <div className="flex items-start gap-4">
                  <Avatar className="size-16 text-lg font-bold" style={{ background: t.color }}>
                    <AvatarFallback className="text-white font-bold text-lg" style={{ background: t.color }}>
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
                        {t.name}
                      </h3>
                      <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 text-xs">
                        <CheckCircle2 className="size-3 mr-1" /> Verified
                      </Badge>
                    </div>
                    <p className="text-sm text-[#5a7080] mt-0.5">{t.title}</p>
                  </div>
                </div>

                <p className="text-sm text-[#5a7080] leading-relaxed">{t.bio}</p>

                <Separator />

                {/* meta */}
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-[#c9a227]" />
                    <span className="font-semibold text-[#134c5f]">Licensed In:</span>
                    <span className="text-[#5a7080]">{t.licensedIn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="size-4 text-[#c9a227]" />
                    <span className="font-semibold text-[#134c5f]">Evaluation Method:</span>
                    <span className="text-[#5a7080]">{t.method}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="size-4 text-[#c9a227] mt-0.5" />
                    <span className="font-semibold text-[#134c5f]">Focus Areas:</span>
                    <span className="text-[#5a7080]">{t.focus}</span>
                  </div>
                </div>

                {/* actions */}
                <div className="flex gap-3 mt-1">
                  <Button className="flex-1 bg-[#134c5f] hover:bg-[#1d6e72] text-white rounded-xl text-sm">
                    Book Appointment →
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#134c5f] text-[#134c5f] rounded-xl text-sm hover:bg-[#134c5f]/5">
                    View Profile →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
