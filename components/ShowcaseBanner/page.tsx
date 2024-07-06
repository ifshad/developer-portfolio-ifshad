"use client";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaDesktop,
  FaGithub,
  FaLaptop,
  FaServer,
} from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { MdMobileFriendly } from "react-icons/md";
const services = [
  {
    title: "Frontend Development",
    icon: <FaLaptop />,
    description:
      "Crafting engaging user interfaces with modern frameworks like React and Next.js ",
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    description:
      "Building robust server-side solutions using technologies like Node.js, Express, and MongoDB, PostgreSQL",
  },
  {
    title: "Responsive Design",
    icon: <MdMobileFriendly />,
    description:
      "Creating fluid layouts that seamlessly adapt to any screen size or device",
  },
];
export default function ShowcaseBanner() {
  return (
    <div id="services" className="container md:py-16 relative">
      <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-500/30 bottom-16 left-96  blur-3xl -z-30"></div>
      <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-500/30 bottom-16 right-96  blur-3xl -z-30"></div>
      {/* Descriptions */}
      <div className="text-center">
        {/* <p className="text-lg mb-5 md:text-xl opacity-80 flex gap-3 items-center">
            <GoDash /> Contact
          </p> */}
        <h2 className="text-lg md:text-5xl font-bold">Services</h2>
        <p className="text-lg my-5 md:text-xl opacity-80">
          Any Type of Query and Discussion. Feel free to discuss or ask any
          query about my services.
        </p>
        <div className="">
          <a
            href="mailto:ifshadmte.51@gmail.com"
            className="inline-flex text-accent-color opacity-90 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-accent-color transition-all duration-500"
          >
            Email Me <FaArrowRight />
          </a>
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
              <h3 className="text-lg md:text-xl font-bold my-3">
                {service.title}
              </h3>
              <p className="opacity-80">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
