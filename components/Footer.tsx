"use client";

import { profile } from "@/lib/content";
import { useLang } from "@/lib/i18n/provider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-2 px-4 py-8 font-mono text-xs text-muted sm:px-6">
        <span>
          © 2026 {profile.name}. {t.footer.rights}
        </span>
        <a href="#top" className="hover:text-accent">
          ↑ {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
