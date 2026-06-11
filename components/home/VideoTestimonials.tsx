import { Button } from "@/components/ui/button";
import ClientVideoCarousel from "@/components/home/ClientVideoCarousel";

const TEAL_DARK = "#134C5F";
const TEAL      = "#1D7080";
const GOLD      = "#C9A227";

export default function VideoTestimonials() {
  return (
    <section id="video-testimonials" className="py-16 sm:py-24" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3" style={{ color: GOLD }}>
            Client Pet Videos
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold"
            style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            See Our Clients &amp; Their Pets
          </h2>
          <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "#5A7A80" }}>
            Watch real client stories with their emotional support animals — swipe on mobile to browse every video.
          </p>
        </div>

        <ClientVideoCarousel variant="light" />

        <div className="text-center mt-8">
          <Button
            asChild
            className="btn-hover-gold-line btn-teal h-11 px-8 font-bold rounded-full text-sm border-0 text-white"
          >
            <a href="#reviews">Read Written Reviews</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
