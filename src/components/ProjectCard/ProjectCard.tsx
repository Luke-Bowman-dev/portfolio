import type { Project } from "../../types";
import "./ProjectCard.css";
import {useState} from "react";
import defaultImage1 from "../../assets/button.png";
import hoverImage1 from "../../assets/button(hover).png";
import defaultImage2 from "../../assets/button2.png";
import hoverImage2 from "../../assets/button2(hover).png";





interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered1, setIsHovered1] = useState<boolean>(false);
    const [isHovered2, setIsHovered2] = useState<boolean>(false);

  return (
    <li className="project-card">
      <img
        className="project-card__image"
        src={project.image}
        alt={`Screenshot of ${project.name}`}
      />
      <h2 className="project-card__title">{project.name}</h2>
      <div className="project-card__description">
        {project.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="project-card__links">
        <a className="project-card__link" href={project.githubUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
            <img className="project-card__link-image" src={isHovered1 ? hoverImage1 : defaultImage1} alt="github link" />
        </a>
        <a className="project-card__link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
          <img className="project-card__link-image" src={isHovered2 ? hoverImage2 : defaultImage2} alt="live link" />
        </a>
      </div>
    </li>
  );
}