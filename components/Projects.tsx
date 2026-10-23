"use client";

import { projects } from "@/lib/content";
import { useLang } from "@/lib/i18n/provider";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20">
      <SectionHeading index="01" title={t.projects.title} id="projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            name={p.name}
            tag={t.projects.items[p.id].tag}
            description={t.projects.items[p.id].description}
            status={t.projects.status}
            stack={t.projects.items[p.id].topics}
            url={p.url}
            openLabel={t.projects.open}
            linkSoonLabel={t.projects.linkSoon}
          />
        ))}
      </div>
    </section>
  );
}
