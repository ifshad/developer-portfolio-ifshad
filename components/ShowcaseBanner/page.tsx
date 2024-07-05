"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { Button } from "../ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
const projects = [
  {
    title: "TechDynasty- Modern tech on your fingertip!",
    imageUrl: "habijabi",
    description: "habijabi",
    liveLink: "ditasi",
    repoLink: "wait",
  },
  {
    title: "The Tensor Times!",
    imageUrl: "habijabi",
    description: "habijabi",
    liveLink: "ditasi",
    repoLink: "wait",
  },
  {
    title: "Personal portfolio!",
    imageUrl: "habijabi",
    description: "habijabi",
    liveLink: "ditasi",
    repoLink: "wait",
  },
];
export default function ShowcaseBanner() {
  return (
    <div className="container md:h-[700px] bg-tertiary-color">
      {/* Descriptions */}
      <div className="flex">
        {/* Left Card */}
        <div className="w-1/2 p-5 md:p-12 flex flex-col justify-around">
          <p className="text-lg mb-5 md:text-xl opacity-80">Contact</p>
          <h2 className="text-lg md:text-5xl font-bold">
            Any Type of Query and Discussion
          </h2>
          <p className="text-lg my-5 md:text-xl opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="">
            <Link
              href="/about"
              className="inline-flex text-accent-color opacity-90 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-accent-color"
            >
              Email Me <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* Right Card */}
        <div className="w-1/2 p-5 md:p-12 flex flex-col justify-around">
          <h2 className="text-lg md:text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-lg my-5 md:text-xl opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Sit doloribus
            consequatur, repudiandae quia sapiente qui. Voluptas natus rerum,
            debitis corrupti laudantium, repudiandae quos consequuntur, cumque
            nostrum fuga animi. Incidunt, aliquid.
          </p>
          {/* Experience section */}
          <div className="flex w-3/4 justify-between">
            <div className="flex items-center gap-3">
              <span className="text-accent-color text-5xl">1</span>
              <p>
                Years of <br /> Experience
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent-color text-5xl">2</span>
              <p>
                Satisfied <br /> Client
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="grid grid-cols-3 gap-4 p-5 w-3/4 mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-80 h-80 bg-card-color border border-card-color shadow shadow-card-color hover:shadow-accent-color hover:border-accent-color p-8 rounded-sm grid grid-rows-6 hover:bg-accent-color"
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
