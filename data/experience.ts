export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  contributions: string[];
  technologies: string[];
};

// Verified from prior professional history. Add further roles here in the
// same shape — most recent first — as they're confirmed.
export const experience: Experience[] = [
  {
    company: "Humufy",
    role: "Software Engineering Intern",
    period: "Mar 2024 — Jun 2024",
    location: "Dhaka, Bangladesh",
    context:
      "Worked across backend features and integrations on a production application.",
    contributions: [
      "Built and maintained backend API features",
      "Worked with the team on production-facing fixes and improvements",
    ],
    technologies: ["Node.js", "TypeScript"],
  },
];
