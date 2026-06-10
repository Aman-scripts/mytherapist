"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const TEAL_DARK = "#134C5F";
const TEAL      = "#1D7080";
const GOLD      = "#C9A227";

const videos = [
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Sarah M.",  state: "California" },
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Maria G.",  state: "Florida"    },
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Janet K.",  state: "Texas"      },
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Amy T.",    state: "New York"   },
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Robin D.",  state: "Colorado"   },
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Linda P.",  state: "Washington" },
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Carol H.",  state: "Arizona"    },
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Donna S.",  state: "Illinois"   },
  { id: "dQw4w9WgXcQ", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", name: "Paula M.",  state: "Oregon"     },
];

function useVisible() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640)       setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else                               setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

export default function VideoTestimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [playing, setPlaying]       = useState<number | null>(null);
  const visibleCount                = useVisible();
  const maxIndex                    = Math.max(0, videos.length - visibleCount);

  const prev = () => { setPlaying(null); setStartIndex((i) => Math.max(0, i - 1)); };
  const next = () => { setPlaying(null); setStartIndex((i) => Math.min(maxIndex, i + 1)); };
  const goTo = (d: number) => { setPlaying(null); setStartIndex(d); };

  const visible = videos.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="video-testimonials" className="py-16 sm:py-24" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>
            Real People, Real Results
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold"
            style={{ color: TEAL_DARK, fontFamily: "var(--font-outfit)" }}>
            See What Our Clients Say
          </h2>
          <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "#5A7A80" }}>
            Here&apos;s what our clients say about their experiences.
          </p>
        </div>

        {/* carousel */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* prev */}
          <button onClick={prev} disabled={startIndex === 0}
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all disabled:opacity-25 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            style={{ background: TEAL_DARK, color: "#fff" }}>
            <ChevronLeft className="size-4 sm:size-5" />
          </button>

          {/* video cards */}
          <div className="flex-1 grid gap-4"
            style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}>
            {visible.map((v, localIdx) => {
              const globalIdx = startIndex + localIdx;
              return (
                <div key={`${globalIdx}-${v.name}`}
                  className="relative rounded-2xl overflow-hidden shadow-md group"
                  style={{
                    aspectRatio: "3/4",
                    background: "#000",
                    border: "2px solid rgba(29,112,128,0.1)",
                  }}>
                  {playing === globalIdx ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                      style={{ border: 0, display: "block" }}
                      title={`${v.name} testimonial`}
                    />
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={v.thumb} alt={`${v.name} testimonial`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
                      <button onClick={() => setPlaying(globalIdx)}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Play ${v.name}'s testimonial`}>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                          style={{ background: "#FF0000", boxShadow: "0 4px 20px rgba(255,0,0,0.5)" }}>
                          <Play className="size-6 sm:size-7 text-white ml-1" fill="white" />
                        </div>
                      </button>
                      <div className="absolute bottom-3 left-2 right-2">
                        <span className="rounded-full px-3 py-1 text-[11px] font-bold text-white"
                          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}>
                          {v.name} · {v.state}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* next */}
          <button onClick={next} disabled={startIndex >= maxIndex}
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all disabled:opacity-25 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            style={{ background: TEAL_DARK, color: "#fff" }}>
            <ChevronRight className="size-4 sm:size-5" />
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === startIndex ? 22 : 8,
                height: 8,
                background: i === startIndex ? TEAL_DARK : "rgba(29,112,128,0.2)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button className="btn-hover-gold-line h-11 px-8 font-bold rounded-full text-sm border-0 text-white hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${TEAL_DARK}, ${TEAL})`, boxShadow: "0 6px 20px rgba(29,112,128,0.28)" }}>
            See More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
