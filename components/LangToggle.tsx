"use client";

import { LANGS, useLang, type Lang } from "@/lib/i18n/provider";

export default function LangToggle() {
  const { lang, setLang, t } = useLang();
  const options = Object.keys(LANGS) as Lang[];

  return (
    <div role="group" aria-label={t.toggles.lang} className="flex h-8 overflow-hidden rounded border border-line font-mono text-xs">
      {options.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          title={LANGS[l].langName}
          className={`px-2 uppercase transition-colors ${
            lang === l ? "bg-fg text-bg" : "text-muted hover:text-accent"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
