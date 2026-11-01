import { projects } from "../../data/projects";
import type { Project } from "../../types";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

interface ProjectsProps {
  projects?: Project[];
}

export function Projects({ projects: projectsProp }: ProjectsProps) {
  const projectsToDisplay = projectsProp || projects;

  return (
    <div className="projects" id="projects">
      <h1 className="projects__title">Projects</h1>
      <ul className="projects__list">
        {projectsToDisplay.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}
