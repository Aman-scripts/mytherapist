"use client";

import { useState, useRef, useCallback, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { clientVideos, type ClientVideo } from "@/lib/client-videos";

const TEAL_DARK = "#134C5F";

function getVisibleCount() {
  if (window.innerWidth < 640)       return 1;
  if (window.innerWidth < 1024)    return 2;
  return 3;
}

function subscribeToResize(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
}

function useVisible() {
  return useSyncExternalStore(subscribeToResize, getVisibleCount, () => 3);
}

type VideoCardProps = {
  video: ClientVideo;
  index: number;
  playing: number | null;
  onPlay: (index: number) => void;
  isDark: boolean;
  className?: string;
};

function VideoCard({ video, index, playing, onPlay, isDark, className = "" }: VideoCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-lg group ${className}`}
      style={{
        aspectRatio: "3/4",
        background: "#000",
        border: isDark ? "2px solid rgba(255,255,255,0.15)" : "2px solid rgba(29,112,128,0.1)",
      }}
    >
      {playing === index ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 0, display: "block" }}
          title={`${video.name} pet testimonial`}
        />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.thumb}
            alt={`${video.name} with their emotional support animal`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />
          <button
            onClick={() => onPlay(index)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${video.name}'s testimonial video`}
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{ background: "#FF0000", boxShadow: "0 4px 20px rgba(255,0,0,0.5)" }}
            >
              <Play className="size-6 sm:size-7 text-white ml-1" fill="white" />
            </div>
          </button>
          <div className="absolute bottom-3 left-2 right-2 flex flex-col gap-1">
            <span
              className="rounded-full px-3 py-1 text-[11px] font-bold text-white w-fit"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
            >
              {video.name} · {video.state}
            </span>
            {video.pet && (
              <span
                className="rounded-full px-3 py-1 text-[10px] font-semibold text-white/90 w-fit"
                style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
              >
                ESA: {video.pet}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}

type Props = {
  variant?: "light" | "dark";
  videos?: ClientVideo[];
};

export default function ClientVideoCarousel({ variant = "light", videos = clientVideos }: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const [playing, setPlaying]       = useState<number | null>(null);
  const visibleCount                = useVisible();
  const maxIndex                    = Math.max(0, videos.length - visibleCount);
  const isDark                      = variant === "dark";
  const touchStartX                 = useRef<number | null>(null);
  const touchStartY                 = useRef<number | null>(null);

  const prev = useCallback(() => {
    setPlaying(null);
    setStartIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setPlaying(null);
    setStartIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const goTo = (d: number) => { setPlaying(null); setStartIndex(d); };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 48) {
      if (deltaX > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const visible = videos.slice(startIndex, startIndex + visibleCount);

  const navBtnStyle = isDark
    ? { background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }
    : { background: TEAL_DARK, color: "#fff" };

  const dotActive   = isDark ? "#fff" : TEAL_DARK;
  const dotInactive = isDark ? "rgba(255,255,255,0.25)" : "rgba(29,112,128,0.2)";

  const gridCols =
    visibleCount === 1 ? "grid-cols-1" :
    visibleCount === 2 ? "grid-cols-2" :
    "grid-cols-3";

  return (
    <div>
      {/* Mobile — finger-swipe horizontal scroll */}
      <div className="sm:hidden -mx-4 px-4">
        <p className="text-center text-[11px] font-medium mb-3" style={{ color: isDark ? "rgba(255,255,255,0.45)" : "#5A7A80" }}>
          Swipe to browse videos
        </p>
        <div className="video-carousel-scroll flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 scroll-smooth touch-pan-x">
          {videos.map((v, idx) => (
            <div key={v.id} className="snap-center shrink-0 w-[78vw] max-w-[280px]">
              <VideoCard
                video={v}
                index={idx}
                playing={playing}
                onPlay={setPlaying}
                isDark={isDark}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet & desktop — arrow carousel with swipe */}
      <div
        className="hidden sm:flex items-center gap-2 sm:gap-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all disabled:opacity-25 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          style={navBtnStyle}
          aria-label="Previous videos"
        >
          <ChevronLeft className="size-4 sm:size-5" />
        </button>

        <div className={`flex-1 grid gap-4 ${gridCols}`}>
          {visible.map((v, localIdx) => {
            const globalIdx = startIndex + localIdx;
            return (
              <VideoCard
                key={v.id}
                video={v}
                index={globalIdx}
                playing={playing}
                onPlay={setPlaying}
                isDark={isDark}
              />
            );
          })}
        </div>

        <button
          onClick={next}
          disabled={startIndex >= maxIndex}
          className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all disabled:opacity-25 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          style={navBtnStyle}
          aria-label="Next videos"
        >
          <ChevronRight className="size-4 sm:size-5" />
        </button>
      </div>

      <div className="hidden sm:flex justify-center gap-1.5 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === startIndex ? 22 : 8,
              height: 8,
              background: i === startIndex ? dotActive : dotInactive,
            }}
            aria-label={`Go to video slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
