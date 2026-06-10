export type ClientVideo = {
  id: string;
  thumb: string;
  name: string;
  state: string;
  pet?: string;
};

/** Real pet & client testimonial shorts from @myesatherapist on YouTube — each ID is unique. */
export const clientVideos: ClientVideo[] = [
  { id: "RIqLkitZFFs", thumb: "https://img.youtube.com/vi/RIqLkitZFFs/hqdefault.jpg", name: "Jill M.",     state: "Oregon",       pet: "Julie" },
  { id: "rIiqLFA3_VI", thumb: "https://img.youtube.com/vi/rIiqLFA3_VI/hqdefault.jpg", name: "Jason",       state: "Colorado",     pet: "Murphy" },
  { id: "rPtmxr05tsc", thumb: "https://img.youtube.com/vi/rPtmxr05tsc/hqdefault.jpg", name: "Mariah O.",   state: "Texas" },
  { id: "AniVHEkqaCk", thumb: "https://img.youtube.com/vi/AniVHEkqaCk/hqdefault.jpg", name: "Tetiana T.",  state: "California" },
  { id: "TV4dghtuqak", thumb: "https://img.youtube.com/vi/TV4dghtuqak/hqdefault.jpg", name: "Deana M.",    state: "Florida" },
  { id: "figN4V7ThbM", thumb: "https://img.youtube.com/vi/figN4V7ThbM/hqdefault.jpg", name: "Sheri M.",    state: "Illinois" },
  { id: "rxXFfiX0M4c", thumb: "https://img.youtube.com/vi/rxXFfiX0M4c/hqdefault.jpg", name: "Heather B.",  state: "Washington" },
  { id: "vTCV7ft0C9s", thumb: "https://img.youtube.com/vi/vTCV7ft0C9s/hqdefault.jpg", name: "Marianne C.", state: "New York" },
  { id: "Ts0IYHojccU", thumb: "https://img.youtube.com/vi/Ts0IYHojccU/hqdefault.jpg", name: "Client",      state: "Nationwide",   pet: "ESA Dog" },
];
