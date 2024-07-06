import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { GoDash } from "react-icons/go";

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

export default function PortfolioPage() {
  return (
    <div id="projects" className="container md:py-16 ">
      {/* Description */}
      <div className=" p-5 md:p-12 text-center">
        {/* <p className="text-lg mb-5 md:text-xl opacity-80 flex gap-3 items-center text-center">
          <GoDash /> Projects
        </p> */}
        <h2 className="text-lg md:text-5xl font-bold">
          All Creative Works, Selected Projects
        </h2>
        <p className="text-lg my-5 md:text-xl opacity-80">
          Check out the varsatile catalogue of my projects.
        </p>
      </div>
      {/* Project Cards */}
      <div className="grid grid-cols-3 gap-4 p-5 w-11/12 mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-96 bg-card-color border border-card-color shadow shadow-card-color hover:shadow-accent-color hover:border-accent-color p-8 rounded-sm grid grid-rows-4 hover:bg-accent-color transition-all duration-500"
          >
            <div className="row-span-1">
              <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
            </div>
            <div className="row-span-3"></div>
            <div className="row-span-1">
              <p className="opacity-80">{project.description}</p>
              <div className="flex justify-between mt-2">
                <Link
                  href={project.liveLink}
                  className="inline-flex opacity-80 items-center gap-x-2 hover:opacity-100 btn"
                >
                  Live
                  <FaExternalLinkAlt />
                </Link>
                {project.repoLink && (
                  <Link
                    href={project.repoLink}
                    className="inline-flex opacity-80 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-primary-color transition-all duration-500"
                  >
                    GitHub <FaGithub />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
