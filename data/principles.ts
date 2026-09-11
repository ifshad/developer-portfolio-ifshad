export const principles = [
  {
    title: "Start with the problem",
    description:
      "Understand requirements, business rules, and constraints before choosing implementation details.",
  },
  {
    title: "Keep boundaries clear",
    description:
      "Use modular architecture and clear responsibility boundaries so systems stay maintainable as they grow.",
  },
  {
    title: "Optimize based on evidence",
    description:
      "Profile database, API, and application bottlenecks instead of prematurely optimizing everything.",
  },
  {
    title: "Design for production",
    description:
      "Think about failures, logging, retries, security, and data consistency, not just the happy path.",
  },
  {
    title: "Prefer practical architecture",
    description:
      "Reach for microservices, queues, or caching when the system actually needs them, not by default.",
  },
  {
    title: "Build for change",
    description:
      "Architecture should make future requirements easier to add without turning every feature into a rewrite.",
  },
] as const;
