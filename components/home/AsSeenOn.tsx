const TEAL_DARK = "#134C5F";
const GOLD = "#C9A227";
const PAGE_BG = "#F0F8F9";

const outlets = [
  {
    id: "financial-content",
    label: "Financial Content",
    render: () => (
      <span className="text-[11px] sm:text-xs font-semibold tracking-wide" style={{ color: "#4A9FD4" }}>
        Financial Content
      </span>
    ),
  },
  {
    id: "america-real-estate",
    label: "America Real Estate Online",
    render: () => (
      <div className="flex flex-col items-center gap-1">
        <svg viewBox="0 0 32 24" className="w-8 h-6" aria-hidden>
          <path
            d="M16 3L3 14h3v7h20v-7h3L16 3z"
            fill="none"
            stroke="#2B6CB0"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect x="13" y="14" width="6" height="7" fill="#2B6CB0" opacity="0.15" />
        </svg>
        <span className="text-[8px] sm:text-[9px] font-serif leading-tight text-center" style={{ color: "#1A365D" }}>
          America Real Estate Online
        </span>
      </div>
    ),
  },
  {
    id: "register-guard",
    label: "The Register-Guard",
    render: () => (
      <span
        className="text-sm sm:text-base font-bold"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#111" }}
      >
        The Register-Guard
      </span>
    ),
  },
  {
    id: "delaware-online",
    label: "delaware online",
    render: () => (
      <span className="text-sm sm:text-base font-bold">
        <span style={{ color: "#4A9FD4" }}>delaware</span>{" "}
        <span style={{ color: "#111" }}>online</span>
      </span>
    ),
  },
  {
    id: "columbus-dispatch",
    label: "The Columbus Dispatch",
    render: () => (
      <span
        className="text-xs sm:text-sm font-bold leading-tight text-center"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#111" }}
      >
        The Columbus Dispatch
      </span>
    ),
  },
  {
    id: "einpresswire",
    label: "EINPRESSWIRE",
    render: () => (
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex items-center gap-1.5">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-extrabold text-white shrink-0"
            style={{ background: "#E91E8C" }}
          >
            EIN
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-tight" style={{ color: "#111" }}>
            PRESSWIRE
          </span>
        </div>
        <span className="text-[7px] sm:text-[8px] text-center leading-tight" style={{ color: "#555" }}>
          Everyone&apos;s Internet News Presswire™
        </span>
      </div>
    ),
  },
  {
    id: "muddy-river",
    label: "Muddy River News",
    render: () => (
      <span
        className="text-sm sm:text-base font-semibold italic"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: TEAL_DARK }}
      >
        Muddy River News
      </span>
    ),
  },
  {
    id: "az-big-media",
    label: "AZ BIG MEDIA",
    render: () => (
      <div className="flex items-center gap-2">
        <span
          className="w-8 h-8 rounded flex items-center justify-center text-[10px] font-black text-white shrink-0"
          style={{ background: "#E87722" }}
        >
          big
        </span>
        <span className="text-[10px] sm:text-xs font-extrabold tracking-wide leading-tight" style={{ color: "#111" }}>
          AZ BIG<br />MEDIA
        </span>
      </div>
    ),
  },
  {
    id: "fingerlakes",
    label: "Fingerlakes1",
    render: () => (
      <span
        className="text-lg sm:text-xl font-semibold italic"
        style={{ color: "#C45B8A", fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        Fingerlakes1
      </span>
    ),
  },
];

function LogoCard({ outlet }: { outlet: (typeof outlets)[number] }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-xl px-4 sm:px-5 h-[72px] sm:h-[80px] min-w-[140px] sm:min-w-[160px]"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(29,112,128,0.08)",
        boxShadow: "0 2px 8px rgba(29,112,128,0.04)",
      }}
      aria-label={outlet.label}
    >
      {outlet.render()}
    </div>
  );
}

export default function AsSeenOn() {
  const track = [...outlets, ...outlets];

  return (
    <div className="mb-14 sm:mb-16 w-full">
      <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10 px-4">
        <span className="h-px w-12 sm:w-20" style={{ background: GOLD }} aria-hidden />
        <p
          className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shrink-0"
          style={{ color: TEAL_DARK }}
        >
          As Seen On
        </p>
        <span className="h-px w-12 sm:w-20" style={{ background: GOLD }} aria-hidden />
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10"
          style={{ background: `linear-gradient(to right, ${PAGE_BG}, transparent)` }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10"
          style={{ background: `linear-gradient(to left, ${PAGE_BG}, transparent)` }}
          aria-hidden
        />

        <div className="flex gap-4 sm:gap-5 animate-marquee w-max will-change-transform">
          {track.map((outlet, i) => (
            <LogoCard key={`${outlet.id}-${i}`} outlet={outlet} />
          ))}
        </div>
      </div>
    </div>
  );
}
