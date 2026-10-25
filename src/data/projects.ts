import type { Project } from "../types";
import meshAiImage from "../assets/meshAi.png";
import workspaceImage from "../assets/WorkspaceHub.png";
import portfolioImage from "../assets/Portfolio.png";

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Portfolio",
    description: ["This is my personal website."],
    githubUrl: "#",
    liveUrl: "#",
    image: portfolioImage,
  },
  {
    id: "meshAi",
    name: "MeshAI",
    githubUrl: "https://github.com/Luke-Bowman-dev/ai-se_project_mesh-ai",
    liveUrl: "https://meshai.yourdigitaldoc.com/",
    image: meshAiImage,
    description: [
      "A full-stack AI assistant app. Users can upload documents to a knowledge base and query them through a chat interface. Utilizes RAG via MongoDB and OpenAI.",
    ],
  },
  {
    id: "WorkspaceHub",
    name: "WorkspaceHub",
    githubUrl: "https://github.com/Luke-Bowman-dev/ai-se_project_workspacehub",
    liveUrl: "https://ai-se-project-workspacehub-e3sl-git-work-03aa54-luke-bowman-dev.vercel.app/login",
    image: workspaceImage,
    description: [
      "WorkspaceHub is a full-stack MERN application built with TypeScript on both the client and server. It supports multi-tenant organizations, role-based access, projects, tasks, bookings, and per-organization feature flags.",
    ],
  },
];
