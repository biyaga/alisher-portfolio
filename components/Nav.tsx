"use client";

import { profile } from "@/lib/content";
import { useLang } from "@/lib/i18n/provider";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const { t } = useLang();
  const links = [
    ["projects", t.nav.projects],
    ["writing", t.nav.writing],
    ["reading", t.nav.reading],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-fg focus:px-3 focus:py-1 focus:text-bg"
      >
        {t.skip}
      </a>
      <nav className="mx-auto flex h-14 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-widest hover:text-accent" aria-label={profile.name}>
          [{profile.initials}]
        </a>
        <ul className="hidden items-center gap-6 font-mono text-xs text-muted sm:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-accent">
                {label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
