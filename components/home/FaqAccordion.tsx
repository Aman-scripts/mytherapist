"use client";

import { useState } from "react";
import { PawPrint } from "lucide-react";

const TEAL_DARK = "#134C5F";

type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openId, setOpenId] = useState("q0");

  return (
    <div className="flex flex-col gap-3 w-full">
      {items.map((faq, i) => {
        const id = `q${i}`;
        const panelId = `faq-panel-${i}`;
        const isOpen = openId === id;

        return (
          <div key={id} className="rounded-xl overflow-hidden">
            <button
              type="button"
              id={`faq-trigger-${i}`}
              onClick={() => setOpenId(isOpen ? "" : id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="cursor-pointer w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[52px] text-sm sm:text-[15px] font-bold text-left flex items-center gap-4 rounded-xl transition-colors duration-200 touch-manipulation"
              style={{
                background: isOpen ? TEAL_DARK : "#F4F4F4",
                color: isOpen ? "#FFFFFF" : TEAL_DARK,
              }}
            >
              <span className="flex-1 pr-3">{faq.q}</span>
              <PawPrint className="size-5 shrink-0" strokeWidth={2.5} aria-hidden />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              hidden={!isOpen}
              className="px-5 sm:px-6 pb-5 pt-2 text-sm leading-relaxed bg-white"
              style={{ color: "#4A656B" }}
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
