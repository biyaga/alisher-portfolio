"use client";

import { writing } from "@/lib/content";
import { useLang } from "@/lib/i18n/provider";
import SoonSection from "./SoonSection";

export default function Writing() {
  const { t } = useLang();

  return (
    <SoonSection id="writing" index="02" title={t.writing.title} text={t.writing.text} soon={t.soon}>
      {writing.length > 0 ? (
        <ul className="divide-y divide-line border-y border-line">
          {writing.map((w) => (
            <li key={w.url}>
              <a href={w.url} className="flex items-baseline justify-between gap-4 py-3 hover:text-accent">
                <span>{w.title}</span>
                <span className="shrink-0 font-mono text-xs text-muted">{w.date}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : undefined}
    </SoonSection>
  );
}
