"use client";

import { reading } from "@/lib/content";
import { useLang } from "@/lib/i18n/provider";
import SoonSection from "./SoonSection";

export default function Reading() {
  const { t } = useLang();

  return (
    <SoonSection id="reading" index="03" title={t.reading.title} text={t.reading.text} soon={t.soon}>
      {reading.length > 0 ? (
        <ul className="divide-y divide-line border-y border-line">
          {reading.map((r) => (
            <li key={r.title} className="flex items-baseline justify-between gap-4 py-3">
              {r.url ? (
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {r.title}
                </a>
              ) : (
                <span>{r.title}</span>
              )}
              <span className="shrink-0 font-mono text-xs text-muted">{r.author}</span>
            </li>
          ))}
        </ul>
      ) : undefined}
    </SoonSection>
  );
}
