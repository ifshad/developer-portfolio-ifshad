"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

export default function ShowcaseBanner() {
  return (
    <div className="container">
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
              className="inline-flex text-accent-color opacity-80 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-accent-color"
            >
              My Story <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* Right Card */}
        <div className="w-1/2 p-5 md:p-12 flex flex-col justify-around">
          <h2 className="text-lg md:text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-lg my-5 md:text-xl opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloribus consequatur, repudiandae quia sapiente qui. Voluptas natus rerum, debitis corrupti laudantium, repudiandae quos consequuntur, cumque nostrum fuga animi. Incidunt, aliquid.
          </p>
          <div className="">
            <Link
              href="/about"
              className="inline-flex text-accent-color opacity-80 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-accent-color"
            >
              My Story <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div></div>
    </div>
  );
}
