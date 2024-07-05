"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Header from "@/components/Layout/Header";
const projects = [
  {
    title: "TechDynasty-Modern tech on your fingertip!",
    imageUrl: "",
    description:
      "A full-stack e-commerce platform using Next.js, TypeScript, ShadCN UI, Tailwind CSS, and Axios for a dynamic front-end , and Node.js, Express.js, and MongoDB for a robust back-end ",
    liveLink: "https://tech-dynasty-client.vercel.app/",
    repoLink: "https://github.com/ifshad/tech-dynasty-client",
  },
  {
    title: "The Tensor Times!",
    imageUrl: "",
    description:
      "An AI-powered newsletter service provider landing page using Vite and React, enhancing user experience and performance with modern frontend technologies",
    liveLink: "https://ai-news-letter.netlify.app/",
    repoLink: "",
  },
  {
    title: "Personal portfolio!",
    imageUrl: "",
    description:
      "A sleek personal portfolio with Next.js, TypeScript, and Tailwind CSS, showcasing projects and skills with dynamic responsiveness",
    liveLink: "https://ifshads-code-journey.vercel.app/",
    repoLink: "waihttps://github.com/ifshad/developer-portfolio-ifshadt",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <Header />
      {/* Projects */}
      <div className="grid grid-cols-3 gap-4 p-5 w-3/4 mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-80 min-h-80 bg-card-color border border-card-color shadow shadow-card-color hover:shadow-accent-color hover:border-accent-color p-8 rounded-sm grid grid-rows-6 hover:bg-accent-color"
          >
            <div className="row-span-3"></div>
            <div className="row-span-2">
              <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
              <p className="opacity-80">{project.description}</p>
            </div>
            <div className="row-span-1 space-x-6">
              <Link
                href={project.liveLink}
                className="inline-flex opacity-80 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-primary-color"
              >
                Live Link <FaExternalLinkAlt />
              </Link>
              <Link
                href={project.repoLink}
                className="inline-flex opacity-80 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-primary-color"
              >
                GitHub <FaGithub />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
