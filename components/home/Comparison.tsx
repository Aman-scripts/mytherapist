import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

const rows = [
  { feature: "Licensed evaluations",    us: true,  them: false,      themNote: "" },
  { feature: "Clinical determination",  us: true,  them: false,      themNote: "" },
  { feature: "Secure telehealth",       us: true,  them: null,       themNote: "Privacy may be lacking" },
  { feature: "Compliance-focused",      us: true,  them: null,       themNote: "Often non-compliant" },
  { feature: "Transparent process",     us: true,  them: false,      themNote: "" },
  { feature: "Privacy protection",      us: true,  them: false,      themNote: "" },
  { feature: "Nationwide access",       us: true,  them: null,       themNote: "Limited or regional" },
  { feature: "Trust & legitimacy",      us: true,  them: false,      themNote: "" },
];

export default function Comparison() {
  return (
    <section className="bg-[#f7f9f8] py-20" id="compare">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="bg-[#134c5f]/10 text-[#134c5f] border-[#134c5f]/20 mb-4 text-xs uppercase tracking-widest">
            Comparison
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#134c5f]" style={{ fontFamily: "var(--font-outfit)" }}>
            How My ESA Therapist Compares
          </h2>
          <p className="text-[#5a7080] mt-3">
            See why clients choose us over other ESA letter services.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#134c5f]">
                <TableHead className="text-white font-semibold py-4 text-base w-1/2">Feature</TableHead>
                <TableHead className="text-white font-semibold py-4 text-center text-base">
                  My ESA Therapist
                </TableHead>
                <TableHead className="text-white/70 font-semibold py-4 text-center text-base">
                  Other Services
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#f7f9f8]"}
                >
                  <TableCell className="py-4 font-medium text-[#134c5f]">{row.feature}</TableCell>
                  <TableCell className="py-4 text-center">
                    <CheckCircle2 className="size-5 text-[#1d6e72] mx-auto" />
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    {row.them === false ? (
                      <XCircle className="size-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-xs text-[#5a7080] italic">{row.themNote}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center mt-10">
          <Button className="bg-[#134c5f] hover:bg-[#1d6e72] text-white px-10 py-3 h-auto rounded-xl text-base font-semibold shadow-md transition-transform hover:scale-105">
            Start Your ESA Evaluation
          </Button>
        </div>
      </div>
    </section>
  );
}
