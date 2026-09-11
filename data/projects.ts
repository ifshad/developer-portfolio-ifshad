export type ArchitectureStage = string | string[];

export type Project = {
  slug: string;
  title: string;
  role: string;
  summary: string;
  technologies: string[];
  problem: string;
  architecture: ArchitectureStage[];
  challenges: string[];
  solution: string;
  outcome: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "render-mix-studio",
    title: "Render Mix Studio",
    role: "Backend Developer & System Architect",
    summary:
      "An LMS and video-streaming platform built around large course uploads, YouTube-backed delivery, and subscription access.",
    technologies: [
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Next.js",
      "YouTube Data API",
      "OAuth 2.0",
      "Docker",
    ],
    problem:
      "Instructors needed to upload large video courses reliably and have them delivered to students without the platform hosting or transcoding the raw video itself.",
    architecture: [
      "Client",
      "NestJS API",
      ["PostgreSQL", "Redis", "BullMQ Workers"],
      "YouTube Data API / Object Storage / CDN",
    ],
    challenges: [
      "Resumable, chunked uploads for large video files",
      "Authenticating and delivering content through OAuth-scoped YouTube integration",
      "Modeling course and content structure independent of storage provider",
      "Background processing for upload and publishing pipelines",
      "Gating access behind subscription and payment middleware",
    ],
    solution:
      "Uploads are chunked and resumed independently of connection stability, then handed to background workers that manage YouTube publishing through OAuth 2.0. Course and content data live in PostgreSQL, decoupled from where video is actually stored, so the storage or delivery layer can change without touching the domain model. Redis and BullMQ handle the queueing between upload completion and publishing, keeping the request/response cycle fast while the heavier work happens asynchronously.",
    outcome: [
      "Reduced coupling between the platform's data model and the video hosting provider",
      "Kept upload and publishing responsive under large file sizes by moving heavy work off the request path",
      "Deployed and operated on Linux with Docker, with a straightforward path to scale workers independently of the API",
    ],
    featured: true,
  },
  {
    slug: "stocksync",
    title: "StockSync",
    role: "Lead Architect",
    summary:
      "A business automation and inventory suite that grew from a point-of-sale tool into a multi-branch operations platform.",
    technologies: [
      "NestJS",
      "MySQL",
      "Redis",
      "Message Queues",
      "Docker",
      "Nginx",
      "DigitalOcean",
    ],
    problem:
      "A single-location POS needed to become a system that multiple branches and warehouses could rely on for one consistent view of stock, staff permissions, and orders.",
    architecture: [
      "Client (POS / Admin)",
      "NestJS API",
      ["MySQL", "Redis", "Message Queues"],
      "Courier & SMS Integrations",
    ],
    challenges: [
      "Keeping inventory consistent across branches and warehouses",
      "Designing multi-tenant, role-based access without hard-coding per-client logic",
      "Distributed caching for frequently read, infrequently changed data",
      "Coordinating background jobs for courier and SMS integrations",
      "Operating the system in production on constrained infrastructure",
    ],
    solution:
      "Inventory operations are centralized behind the API so every branch and warehouse reads and writes through the same source of truth, with Redis absorbing read-heavy traffic that doesn't need to hit MySQL directly. Role and permission logic is modeled generically enough to support multiple tenants rather than being special-cased per client. Message queues decouple courier and SMS integrations from the request cycle, so a slow or failing third party doesn't block order processing.",
    outcome: [
      "Gave multiple branches and warehouses one consistent view of inventory instead of siloed data",
      "Reduced direct database load through targeted caching",
      "Simplified deployment with Docker and Nginx on a small DigitalOcean footprint",
    ],
    featured: true,
  },
  {
    slug: "zarganz",
    title: "Zarganz",
    role: "Backend Developer",
    summary:
      "A business automation and POS ecosystem covering e-commerce, inventory, and employee permissions across branches.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Next.js", "Redis", "Docker"],
    problem:
      "The business needed a single system to handle e-commerce orders, in-store POS, inventory, and staff access across multiple branches without duplicating logic across separate tools.",
    architecture: [
      "Client (Storefront / POS)",
      "NestJS API",
      ["PostgreSQL", "Redis"],
      "Courier & Notification Services",
    ],
    challenges: [
      "Unifying e-commerce and in-store order flows against one inventory source",
      "Role and permission design across branches and staff levels",
      "API design that stayed stable as new business workflows were added",
      "Production troubleshooting under real operational load",
    ],
    solution:
      "Orders from the storefront and POS are normalized through the same domain services so inventory reflects both channels accurately. Permissions are modeled around roles and branches rather than individual users, which kept access control manageable as the team grew. The API was structured around clear service boundaries so new workflows (courier integration, notifications) could be added without reshaping existing endpoints.",
    outcome: [
      "Brought storefront and in-store inventory onto one consistent system",
      "Made staff access easier to reason about and adjust as branches were added",
      "Reduced ad-hoc production issues through clearer service boundaries",
    ],
    featured: true,
  },
  {
    slug: "teado",
    title: "TeaDo",
    role: "Lead Developer",
    summary:
      "A full-stack task management platform with authentication, authorization, and shared team workflows.",
    technologies: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "NextAuth",
    ],
    problem:
      "Teams needed a lightweight place to plan and track work with proper accounts and permissions, without the overhead of a heavier project-management tool.",
    architecture: [
      "Next.js Client",
      "Express API",
      "PostgreSQL (Prisma)",
      "NextAuth Session Store",
    ],
    challenges: [
      "Authentication and session handling with NextAuth",
      "Modeling role-based authorization for shared boards",
      "Client-side state management for real-time-feeling task updates",
      "Schema design for tasks, boards, and team membership in Prisma",
    ],
    solution:
      "NextAuth handles session and credential flows, with authorization checks applied at the API layer based on team role rather than trusting the client. Prisma models keep task, board, and membership relationships explicit, and Zustand manages client state so task updates feel immediate without over-fetching from the API.",
    outcome: [
      "Delivered a working full-stack app with real authentication and authorization, not a prototype",
      "Kept the client state layer small and easy to reason about",
    ],
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
