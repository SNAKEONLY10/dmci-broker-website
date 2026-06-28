import { ProjectCard } from "./ProjectCard";
import { EmptyState } from "./EmptyState";

export function ProjectGrid({ projects }) {
  if (!projects.length) return <EmptyState />;
  return (
    <div className="project-grid">
      {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
    </div>
  );
}
