export type ArchitectureStage = string | string[];

export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  role: string;
  period?: string;
  summary: string;
  technologies: string[];
  problem: string;
  architecture: ArchitectureStage[];
  challenges: string[];
  solution: string;
  outcome: string[];
  links?: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "zarganz",
    title: "Zarganz",
    role: "Full Business Automation Platform — E-Commerce & POS",
    period: "Oct 2025 — Aug 2026",
    summary:
      "A production-grade platform unifying e-commerce, physical retail, POS, inventory, and logistics behind one shared backend.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MySQL",
      "TypeORM",
      "Socket.IO",
      "JWT",
      "Jotai",
      "React Query",
      "Tailwind CSS",
      "Zod",
      "Sharp",
      "FFmpeg",
    ],
    problem:
      "Businesses running both an online store and physical retail typically end up maintaining two separate systems — one for e-commerce, one for POS — with duplicated product, pricing, and inventory logic that drifts out of sync. Zarganz needed a single platform where a headless storefront, an in-house POS, and an operations panel could all share the same product, pricing, inventory, discount, customer, and order architecture.",
    architecture: [
      "Storefront (Next.js) / POS & Ops Panel",
      "NestJS API",
      ["MySQL (TypeORM)", "Socket.IO", "REST APIs"],
      "Pathao / Steadfast Courier & SMS",
    ],
    challenges: [
      "Keeping online and offline sales channels on one shared product, pricing, and inventory model instead of duplicated logic",
      "Server-authoritative checkout and pricing so calculations can't be tampered with client-side",
      "Multi-branch inventory with stock history, damage tracking, and branch-to-branch transfers",
      "Realtime pending-order updates across the operations panel using Socket.IO",
      "Chunked video uploads with realtime processing progress for storefront content",
      "Exchange, return, and order-edit workflows that stay consistent with inventory and payment state",
      "Role-based access control across a platform with many distinct operational surfaces",
    ],
    solution:
      "The storefront, POS, and operations panel all talk to one centralized NestJS backend instead of maintaining separate business logic per channel. Pricing and checkout calculations are resolved server-side so neither channel can present inconsistent totals. Inventory is modeled centrally with stock history and branch transfers, so a sale from either channel updates the same source of truth. Courier integration (Pathao and Steadfast) and SMS are handled as background workflows, and Socket.IO pushes pending-order and operational updates to the panel in real time rather than relying on polling.",
    outcome: [
      "Unified e-commerce and in-store operations behind one product, pricing, and inventory model",
      "Removed the need to maintain duplicate business logic across online and offline sales channels",
      "Gave operations staff realtime visibility into pending orders instead of manual refreshing",
    ],
    links: [
      { label: "Storefront", url: "https://test.zarganz.com/" },
      { label: "Admin / ERP", url: "https://test-erp.zarganz.com/" },
    ],
    featured: true,
  },
  {
    slug: "rendermix-studio",
    title: "RenderMix Studio",
    role: "Motion Videography Studio & LMS",
    period: "Jan 2026 — Aug 2026",
    summary:
      "A combined marketing site, LMS, student portal, and admin dashboard for a motion-videography studio, built on Next.js with a dedicated REST API.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "REST API",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "JWT / Bearer Auth",
      "PM2",
    ],
    problem:
      "A motion-videography studio needed one platform to cover its public presence, course delivery, and internal operations — course discovery and enrollment, assignments and tutorials, payments, portfolio and service content, reviews, and admin management — rather than stitching together separate tools.",
    architecture: [
      "Next.js Client (Public / Student / Admin)",
      "REST API",
      ["Courses & Enrollment", "Assignments & Payments", "Portfolio & Media"],
    ],
    challenges: [
      "One platform serving three different audiences — public visitors, enrolled students, and admins — behind shared route guards",
      "Chunked, resumable video upload architecture for large course and portfolio media",
      "Centralizing REST and multipart request handling instead of repeating fetch logic per feature",
      "Cookie-based bearer-token auth with centralized session-expiration handling across the app",
      "Keeping course, assignment, payment, and portfolio management consistent across a large admin surface",
    ],
    solution:
      "The frontend is built on Next.js 16's App Router with React Server Components used specifically for protecting student and admin routes, so access checks happen before a protected page ever renders. A centralized API service layer wraps REST and multipart requests with consistent handling for HTTP responses, permissions, and session expiration, so individual features don't reimplement request logic. Large video uploads go through a chunked, resumable upload architecture with realtime processing progress rather than a single large request. The UI is built from shadcn/ui, Radix UI, and Tailwind CSS, with Framer Motion for interaction, deployed with PM2.",
    outcome: [
      "Replaced what would otherwise be separate marketing, LMS, and admin tools with one connected platform",
      "Made large media uploads reliable through a chunked, resumable upload flow",
      "Centralized request, permission, and session handling instead of duplicating it per feature",
    ],
    links: [{ label: "Live site", url: "https://rendermixstudio.com/" }],
    featured: true,
  },
  {
    slug: "personal-finance-app",
    title: "Transaction-First Financial Management System",
    role: "Personal Finance App",
    period: "Aug 2026 — Sep 2026",
    summary:
      "A mobile-first, multi-user personal finance platform that replaces spreadsheet-based tracking with a transaction-first model for accounts, budgets, and reporting.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Knex.js",
      "JWT",
      "Docker",
      "Linux",
      "PM2",
      "Nginx",
    ],
    problem:
      "Spreadsheet-based personal finance tracking breaks down with multiple accounts and users — it can't enforce data isolation, doesn't handle transfers between accounts without double-counting, and has no real safeguard against rounding errors in money math. The app needed a proper transaction-first system covering accounts, income, expenses, transfers, budgets, and reporting.",
    architecture: [
      "Next.js Client",
      "HTTP Layer",
      "Business Logic (Auth, Transactions, Budgets)",
      "MySQL (Knex.js)",
    ],
    challenges: [
      "Exact monetary calculations — avoiding floating-point error using MySQL DECIMAL and a BigInt-based Money value object",
      "Modeling transactions so income, expenses, and account-to-account transfers are distinguished without double-counting",
      "Secure per-user data isolation with JWT authentication over httpOnly cookies",
      "Preserving historical transaction integrity when an account or category is deactivated rather than deleted",
      "Enforcing financial invariants with database constraints in addition to application-level validation",
    ],
    solution:
      "The application follows a strict layered architecture that separates HTTP handling, business logic, data access, authentication, and presentation. Money is never represented as a floating-point number — it's stored as MySQL DECIMAL and handled through a BigInt-based Money value object, so calculations stay exact. Transfers are modeled as a distinct transaction type linked to both accounts involved, rather than as a plain expense and income pair, which avoids double-counting. Referenced accounts and categories are deactivated rather than deleted, so historical transactions stay intact. Dashboard and report aggregation happen server-side rather than in the client.",
    outcome: [
      "Replaced spreadsheet tracking with a system that enforces correctness at the database and application layer",
      "Eliminated floating-point rounding risk in money calculations",
      "Kept historical reporting accurate even after accounts or categories are deactivated",
    ],
    links: [
      { label: "Live site", url: "https://personal-finance-app-sepia-pi.vercel.app/" },
    ],
    featured: true,
  },
  {
    slug: "techdynasty",
    title: "TechDynasty",
    role: "Full-Stack E-Commerce Platform",
    period: "Jun 2024 — Aug 2024",
    summary:
      "A full-stack e-commerce platform for tech products, with seller-managed product listings and Firebase-authenticated accounts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
    ],
    problem:
      "The project needed a working e-commerce platform where sellers could manage their own product listings, with secure accounts and a responsive storefront, built end-to-end rather than assembled from a template.",
    architecture: ["Next.js Client", "Express.js API", ["MongoDB", "Firebase Auth"]],
    challenges: [
      "Secure authentication and account management using Firebase Auth",
      "CRUD-heavy product management with optimized data fetching and caching",
      "Giving sellers a usable interface to add, update, and manage their own products",
    ],
    solution:
      "The frontend is built with Next.js, TypeScript, and shadcn/ui on Tailwind CSS, talking to a Node.js/Express backend backed by MongoDB. Firebase Auth handles authentication, and product management is built around CRUD operations with caching to keep data fetching efficient as the catalog grows.",
    outcome: [
      "Delivered a working full-stack e-commerce platform end-to-end, from seller product management to a customer-facing storefront",
    ],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
