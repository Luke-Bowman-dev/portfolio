import type { Project } from "../types";
import meshAiImage from "../assets/MeshAI.png";
import workspaceImage from "../assets/WorkspaceHub.png";
import flashcardImage from "../assets/flashcard.png";

export const projects: Project[] = [
  {
    id: "flashcard",
    name: "Flash Cards",
    description: [
      "Flash Cards is a dynamic web application that allows users to create, manage, and view flashcard decks for the purpose of learning any subject they desire.",
    ],
    githubUrl: "https://github.com/Luke-Bowman-dev/ai-se_project_flashcards",
    liveUrl: "https://luke-bowman-dev.github.io/ai-se_project_flashcards/",
    image: flashcardImage,
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
    liveUrl:
      "https://ai-se-project-workspacehub-e3sl-git-work-03aa54-luke-bowman-dev.vercel.app/login",
    image: workspaceImage,
    description: [
      "WorkspaceHub is a full-stack MERN application built with TypeScript on both the client and server. It supports multi-tenant organizations, role-based access, projects, tasks, bookings, and per-organization feature flags.",
    ],
  },
];
