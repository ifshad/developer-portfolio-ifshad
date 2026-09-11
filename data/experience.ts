export type ExperienceProject = {
  name?: string;
  url?: string;
  points: string[];
  tech?: string[];
};

export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  projects: ExperienceProject[];
};

// Most recent first.
export const experience: Experience[] = [
  {
    company: "GearON Bangladesh Ltd.",
    role: "Software Engineer, L2",
    period: "Apr 2026 — Present",
    location: "Dhaka, Bangladesh",
    projects: [
      {
        name: "GoPartz",
        url: "https://gopartz.com",
        points: [
          "Building and maintaining a multi-vendor e-commerce platform, covering vendor onboarding, catalog, and order management.",
        ],
      },
      {
        name: "GearON B2B",
        points: [
          "Working on a vehicle service booking and management platform for B2B customers.",
        ],
      },
      {
        name: "Automobil ERP Suite",
        points: [
          "Contributing to a full ERP suite for automobile businesses spanning CRM, HRM, accounting, inventory, sales, POS, and reporting.",
        ],
      },
    ],
  },
  {
    company: "Divergent Technologies Ltd.",
    companyUrl: "https://www.divergenttechbd.com/",
    role: "Software Engineer",
    period: "May 2025 — Apr 2026",
    location: "Dhaka, Bangladesh",
    projects: [
      {
        name: "Purno Health — Telemedicine & Health-Tech Platform",
        url: "https://purnohealth.com/",
        points: [
          "Developed and maintained a multi-channel telemedicine ecosystem (web, app, and IVR) serving high-volume traffic.",
          "Built a real-time video calling module using WebRTC, implementing custom signaling servers and integrating STUN/TURN protocols for reliable peer-to-peer connectivity across restrictive firewalls.",
          "Ran intensive MSSQL database operations, including query optimization and schema design, to handle large volumes of health records.",
          "Integrated new service modules across a mixed stack of NestJS, Express.js, and PHP CodeIgniter.",
          "Carried out backend optimization and resolved security vulnerabilities identified during penetration testing.",
          "Designed scalable architectures for new integrations to keep cross-platform data flow consistent.",
        ],
        tech: ["WebRTC", "STUN/TURN", "MSSQL", "NestJS", "Express.js", "PHP CodeIgniter"],
      },
      {
        name: "Stayverz — Property Booking Marketplace",
        url: "https://stayverz.com/",
        points: [
          "Optimized the Django backend to improve API response times and handle concurrent booking requests.",
          "Architected new microservices using NestJS to modularize the booking and notification engines.",
          "Implemented asynchronous processing with Redis and task queues for high-load background jobs.",
          "Improved reliability through caching strategies and PostgreSQL performance tuning.",
        ],
        tech: ["Django", "NestJS", "Redis", "PostgreSQL"],
      },
      {
        name: "VAS & Enterprise Operations",
        points: [
          "Managed heavy VAS (Value Added Services) workflows using MSSQL stored procedures and triggers.",
          "Developed enterprise-level modules in ASP.NET Core for internal business logic and Windows server integration.",
          "Automated deployment and process management with Docker and PM2 across Linux and Windows environments.",
        ],
        tech: ["MSSQL", "ASP.NET Core", "Docker", "PM2"],
      },
    ],
  },
  {
    company: "Okobiz",
    companyUrl: "https://www.okobiz.com/",
    role: "Software Engineer",
    period: "Jan 2025 — Apr 2025",
    location: "Dhaka, Bangladesh",
    projects: [
      {
        name: "Unicrescent",
        url: "https://unicrescent.com/",
        points: [
          "Built an e-commerce backend using Node.js, TypeScript, and Express.js, focused on high availability and clean code.",
          "Led the design of modular service layers to make the core business logic easier to maintain and scale.",
          "Modeled product catalog and customer data with MongoDB and Mongoose.",
          "Built a high-performance admin dashboard in Next.js giving stakeholders real-time control over inventory, orders, and users.",
          "Worked with cross-functional teams to migrate legacy monolithic features into decoupled service modules.",
          "Optimized API performance and implemented secure authentication flows, reducing data-fetching latency on the frontend.",
        ],
        tech: ["Node.js", "TypeScript", "Express.js", "MongoDB", "Mongoose", "Next.js"],
      },
    ],
  },
  {
    company: "Humufy",
    role: "Software Engineering Intern",
    period: "Mar 2024 — May 2024",
    location: "Dhaka, Bangladesh",
    projects: [
      {
        points: [
          "Built and maintained backend API features",
          "Worked with the team on production-facing fixes and improvements",
        ],
        tech: ["Node.js", "TypeScript"],
      },
    ],
  },
];
