"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n/provider";

/** Pixel sun / moon icons on a 8×8 grid. */
const SUN = ["...#....", ".#...#..", "...##...", "#.####.#", "..####..", "...##...", ".#...#..", "...#...."];
const MOON = ["..###...", ".##.....", "##......", "##......", "##......", ".##...#.", "..####..", "........"];

function PixelIcon({ rows }: { rows: string[] }) {
  return (
    <svg viewBox="0 0 8 8" width="16" height="16" shapeRendering="crispEdges" aria-hidden="true" className="fill-current">
      {rows.flatMap((row, y) =>
        row.split("").map((c, x) => (c === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} /> : null)),
      )}
    </svg>
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t.toggles.theme}
      title={t.toggles.theme}
      className="grid h-8 w-8 place-items-center rounded border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {/* Render a stable icon until the theme is known, to avoid a hydration mismatch */}
      {mounted ? <PixelIcon rows={isDark ? SUN : MOON} /> : <span className="h-4 w-4" />}
    </button>
  );
}
