type Props = {
  name: string;
  tag: string;
  description: string;
  status: string;
  stack: string[];
  url?: string;
  openLabel: string;
  linkSoonLabel: string;
};

export default function ProjectCard({ name, tag, description, status, stack, url, openLabel, linkSoonLabel }: Props) {
  return (
    <article className="group flex flex-col rounded-md border border-line bg-surface p-5 transition-colors hover:border-accent">
      <div className="mb-3 flex items-center justify-between gap-3 font-mono text-xs">
        <span className="text-muted">{tag}</span>
        <span className="inline-flex items-center gap-1.5 text-accent">
          <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-muted">
        {stack.map((s) => (
          <li key={s} className="rounded border border-line px-2 py-0.5">
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-5 font-mono text-xs">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-fg hover:text-accent">
            {openLabel} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="text-muted">{linkSoonLabel}</span>
        )}
      </div>
    </article>
  );
}
