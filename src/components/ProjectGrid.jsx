import { ProjectCard } from "./ProjectCard";
import { EmptyState } from "./EmptyState";

export function ProjectGrid({ projects, labelledBy }) {
  if (!projects.length) return <EmptyState />;
  return (
    <div className="project-grid" aria-labelledby={labelledBy}>
      {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
    </div>
  );
}
