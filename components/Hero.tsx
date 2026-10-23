"use client";

import { profile } from "@/lib/content";
import { useLang } from "@/lib/i18n/provider";
import PixelScale from "./PixelScale";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" aria-labelledby="hero-name" className="dot-grid border-b border-line">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[1fr_auto] md:items-center">
        <div className="md:order-1">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.hero.kicker}</p>
          <h1 id="hero-name" className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-muted sm:text-base">{t.hero.role}</p>
          <p className="mt-6 max-w-prose leading-relaxed">{t.hero.intro}</p>
          <p className="mt-6 font-mono text-sm text-muted" aria-hidden="true">
            <span className="text-accent">$</span> {t.hero.prompt}
            <span className="cursor" />
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 rounded border border-line px-4 py-2 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="flex justify-center md:order-2">
          <PixelScale title={t.hero.scaleTitle} className="h-auto w-44 sm:w-56 md:w-64" />
        </div>
      </div>
    </section>
  );
}
