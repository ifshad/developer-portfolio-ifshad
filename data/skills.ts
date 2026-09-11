export const skillGroups = [
  {
    label: "Backend",
    items: ["Node.js", "TypeScript", "NestJS", "Express", "Django", "ASP.NET Core"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis"],
  },
  {
    label: "Architecture",
    items: [
      "REST APIs",
      "Microservices",
      "RBAC",
      "Caching",
      "Queues",
      "Background Processing",
    ],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Linux", "Nginx", "PM2", "Cloud Deployment", "CDN / Object Storage"],
  },
  {
    label: "Integrations",
    items: ["Payment Services", "Courier APIs", "SMS", "OAuth", "YouTube Data API"],
  },
] as const;
