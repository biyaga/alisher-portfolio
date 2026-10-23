"use client";

import { profile } from "@/lib/content";
import { useLang } from "@/lib/i18n/provider";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLang();
  const rows = [
    { label: t.contact.telegram, value: `@${profile.telegram}`, href: `https://t.me/${profile.telegram}`, external: true },
    { label: t.contact.email, value: profile.email, href: `mailto:${profile.email}`, external: false },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20">
      <SectionHeading index="04" title={t.contact.title} id="contact" />
      <p className="mb-4 text-sm text-muted">{t.contact.text}</p>
      <ul className="divide-y divide-line rounded-md border border-line">
        {rows.map((r) => (
          <li key={r.label}>
            <a
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-xs text-muted">{r.label}</span>
              <span className="truncate text-sm group-hover:text-accent">
                {r.value} <span aria-hidden="true">↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
