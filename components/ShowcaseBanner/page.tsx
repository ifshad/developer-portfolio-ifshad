"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaDesktop, FaGithub, FaLaptop, FaServer } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { MdMobileFriendly } from "react-icons/md";
const services = [
  {
    title: "Frontend Development",
    icon: <FaLaptop />,
    description:
      "A full-stack e-commerce platform using Next.js, TypeScript, ShadCN UI, Tailwind CSS, and Axios for a dynamic front-end , and Node.js, Express.js, and MongoDB for a robust back-end ",
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    description:
      "An AI-powered newsletter service provider landing page using Vite and React, enhancing user experience and performance with modern frontend technologies",
  },
  {
    title: "Responsive Design",
    icon: <MdMobileFriendly />,
    description:
      "A sleek personal portfolio with Next.js, TypeScript, and Tailwind CSS, showcasing services and skills with dynamic responsiveness",
  },
];
export default function ShowcaseBanner() {
  return (
    <div className="container">
      {/* Descriptions */}
      <div className="flex">
        {/* Left Card */}
        <div className="w-1/2 p-5 md:p-12 flex flex-col justify-around">
          <p className="text-lg mb-5 md:text-xl opacity-80 flex gap-3 items-center">
            <GoDash /> Contact
          </p>
          <h2 className="text-lg md:text-5xl font-bold">
            Any Type of Query and Discussion
          </h2>
          <p className="text-lg my-5 md:text-xl opacity-80">
            Feel free to discuss or ask any query about my works.
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
            You can&apos;t use up your creativity. The more you use, more you
            have in your significant mind!
          </h2>
          <p className="text-lg my-5 md:text-xl opacity-80">
            Explore my diverse range of services, demonstrating my expertise in
            web development, from dynamic front-end interfaces to robust
            back-end systems. Each project reflects my commitment to innovation,
            performance, and user-centric design.
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
      {/* Services */}
      <div className="grid grid-cols-3 gap-4 p-5 w-3/4 mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="w-80 min-h-80 bg-card-color border border-card-color shadow shadow-card-color hover:shadow-accent-color hover:border-accent-color p-8 rounded-sm hover:bg-accent-color hover:scale-110 transition-all duration-500"
          >
            {/* <div className="row-span-3"></div> */}
            <div className="">
              <span className="text-5xl">{service.icon}</span>
              <h3 className="text-lg md:text-xl font-bold my-3">{service.title}</h3>
              <p className="opacity-80">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
