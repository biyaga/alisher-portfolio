import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

/** A section that shows its entries, or a quiet "Soon" block while empty. */
export default function SoonSection({
  id,
  index,
  title,
  text,
  soon,
  children,
}: {
  id: string;
  index: string;
  title: string;
  text: string;
  soon: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20">
      <SectionHeading index={index} title={title} id={id} />
      <p className="mb-4 text-sm text-muted">{text}</p>
      {children ?? (
        <div className="flex items-center gap-3 rounded-md border border-dashed border-line px-5 py-4 font-mono text-sm text-muted">
          <span aria-hidden="true" className="text-accent">
            //
          </span>
          {soon}
        </div>
      )}
    </section>
  );
}
