export default function SectionHeading({ index, title, id }: { index: string; title: string; id: string }) {
  return (
    <h2 id={`${id}-title`} className="mb-6 flex items-center gap-3 font-mono text-sm text-muted">
      <span className="text-accent">{index}</span>
      <span className="text-fg">{title.toLowerCase()}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </h2>
  );
}
