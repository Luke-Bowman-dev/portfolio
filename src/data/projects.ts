import type { Project } from "../types";
import meshAiImage from "../assets/meshAi.png";

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Portfolio",
    description: ["This is my personal website."],
    githubUrl: "#",
    liveUrl: "#",
    image: "portfolio.png",
  },
  {
    id: "meshAi",
    name: "MeshAI",
    githubUrl: "https://github.com/Luke-Bowman-dev/ai-se_project_mesh-ai",
    liveUrl: "#",
    image: meshAiImage,
    description: [
      "An AI powered workspace for managing, organizing, and analyzing your documents.",
    ],
  },
  {
    id: "WorkspaceHub",
    name: "WorkspaceHub",
    githubUrl: "https://github.com/Luke-Bowman-dev/ai-se_project_workspacehub",
    liveUrl: "#",
    image: "workspaceHub.png",
    description: [
      "A web app that allows team members to collaborate and coordinate on projects.",
    ],
  },
];
